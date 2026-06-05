// Server-to-server bridge that forwards captured leads from the marketing website
// into the P2F Portal CRM (https://portal.passport2fluency.com). Kept on the server
// so the shared secret is never exposed to the browser and CORS is avoided.

const PORTAL_API_URL = process.env.PORTAL_API_URL;
const PORTAL_API_KEY = process.env.PORTAL_API_KEY;

export interface LeadPayload {
  name?: string;
  email: string;
  phone?: string;
  language?: "english" | "spanish";
  studentType?: "adult" | "child";
  classType?: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
  source: string;
}

/**
 * Forwards a lead to the Portal CRM. Returns true on success.
 * Never throws — callers should treat a false return as "stored locally only".
 */
export async function forwardLeadToPortal(lead: LeadPayload): Promise<boolean> {
  if (!PORTAL_API_URL || !PORTAL_API_KEY) {
    console.warn(
      "[portal] PORTAL_API_URL/PORTAL_API_KEY not configured — lead NOT forwarded to CRM",
      { email: lead.email, source: lead.source }
    );
    return false;
  }

  try {
    const res = await fetch(`${PORTAL_API_URL.replace(/\/$/, "")}/api/public/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": PORTAL_API_KEY,
      },
      body: JSON.stringify(lead),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error(`[portal] Lead forward failed (${res.status}): ${text}`);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[portal] Lead forward error:", err);
    return false;
  }
}
