import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema, insertContactSchema } from "@shared/schema";
import { forwardLeadToPortal, portalGet, portalPost } from "./lib/portal";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Booking routes
  app.post("/api/bookings", async (req, res) => {
    try {
      const bookingData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(bookingData);

      // `insertBookingSchema` is a plain z.object, so it SILENTLY STRIPS unknown
      // keys — the intake answers would vanish without a single error. Read them
      // off the raw body instead and forward them alongside.
      const intake =
        req.body?.intake && typeof req.body.intake === "object" ? req.body.intake : undefined;

      console.log(`New booking created: ${booking.name} - ${booking.email}`);

      // Forward the lead to the Portal CRM (creates a lead + notifies info@/mateo@).
      // Non-blocking: a Portal outage never fails the booking — we keep the local copy.
      forwardLeadToPortal({
        name: booking.name,
        email: booking.email,
        phone: booking.phone || undefined,
        language: booking.language as "english" | "spanish",
        studentType: booking.studentType as "adult" | "child",
        preferredDate: booking.preferredDate || undefined,
        preferredTime: booking.preferredTime || undefined,
        message: booking.message || undefined,
        intake,
        source: "website_booking",
      }).catch((err) => console.error("Error forwarding booking lead to Portal:", err));

      res.json({ success: true, booking });
    } catch (error) {
      console.error("Error creating booking:", error);
      res.status(400).json({ 
        success: false, 
        error: error instanceof z.ZodError ? error.errors : "Invalid booking data" 
      });
    }
  });

  app.get("/api/bookings", async (req, res) => {
    try {
      const bookings = await storage.getBookings();
      res.json(bookings);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      res.status(500).json({ error: "Failed to fetch bookings" });
    }
  });

  app.patch("/api/bookings/:id/status", async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      
      if (!status || typeof status !== 'string') {
        return res.status(400).json({ error: "Status is required" });
      }
      
      const booking = await storage.updateBookingStatus(id, status);
      if (!booking) {
        return res.status(404).json({ error: "Booking not found" });
      }
      
      res.json({ success: true, booking });
    } catch (error) {
      console.error("Error updating booking status:", error);
      res.status(500).json({ error: "Failed to update booking status" });
    }
  });

  // Contact routes
  app.post("/api/contacts", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      
      // TODO: Send notification email here
      console.log(`New contact message: ${contact.name} - ${contact.email}`);
      
      res.json({ success: true, contact });
    } catch (error) {
      console.error("Error creating contact:", error);
      res.status(400).json({ 
        success: false, 
        error: error instanceof z.ZodError ? error.errors : "Invalid contact data" 
      });
    }
  });

  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const { email, name, phone, language, source } = req.body;

      if (!email) {
        return res.status(400).json({ error: "Email is required" });
      }

      console.log(`Newsletter/lead subscription: ${name || "(no name)"} (${email}) - Source: ${source}`);

      // Forward to the Portal CRM (subscribes to newsletter + records the lead).
      const forwarded = await forwardLeadToPortal({
        name: name || undefined,
        email,
        phone: phone || undefined,
        message: source === "discount_popup" ? "Discount popup signup" : "Newsletter signup",
        source: source === "discount_popup" ? "discount_popup" : "newsletter",
      });

      res.json({
        success: true,
        forwarded,
        message: "Successfully subscribed to newsletter",
      });
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to subscribe to newsletter" 
      });
    }
  });

  // ===== Phase 2: real-time availability + trial booking (proxied to the Portal) =====

  // Aggregated availability for a class type. Browser -> website server -> Portal (avoids CORS).
  app.get("/api/availability", async (req, res) => {
    const { classType, language, audience, date, startDate, days } = req.query;
    const result = await portalGet("/api/public/availability", {
      classType, language, audience, date, startDate, days,
    });
    res.status(result.status).json(result.body);
  });

  // Auto-book a free trial class with an available coach.
  app.post("/api/trial-bookings", async (req, res) => {
    const result = await portalPost("/api/public/trial-bookings", req.body);
    res.status(result.status).json(result.body);
  });

  const httpServer = createServer(app);
  return httpServer;
}
