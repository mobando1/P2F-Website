import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { analytics } from "@/lib/analytics";
import { User, Baby, X, Check } from "lucide-react";

export type ClassType =
  | "english_adults"
  | "english_children"
  | "spanish_adults"
  | "spanish_children";

// Maps a class type to the values the bookings API expects
const CLASS_MAP: Record<ClassType, { language: "english" | "spanish"; studentType: "adult" | "child" }> = {
  english_adults: { language: "english", studentType: "adult" },
  english_children: { language: "english", studentType: "child" },
  spanish_adults: { language: "spanish", studentType: "adult" },
  spanish_children: { language: "spanish", studentType: "child" },
};

const CLASS_ORDER: ClassType[] = [
  "english_adults",
  "english_children",
  "spanish_adults",
  "spanish_children",
];

interface BookingFormProps {
  t: (key: string) => string;
  language: "es" | "en";
  /** Pre-selected class type (based on the page the user opened it from) */
  defaultClassType?: ClassType;
  onClose: () => void;
}

const bookingFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(5),
  message: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

export default function BookingForm({ t, language, defaultClassType, onClose }: BookingFormProps) {
  // Default the class type from the page context, falling back to the site language
  const initialClassType: ClassType =
    defaultClassType ?? (language === "es" ? "english_adults" : "spanish_adults");

  const [classType, setClassType] = useState<ClassType>(initialClassType);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const createBooking = useMutation({
    mutationFn: async (values: BookingFormValues) => {
      const { language: learningLanguage, studentType } = CLASS_MAP[classType];
      const payload = {
        ...values,
        language: learningLanguage,
        studentType,
        preferredDate: selectedDate ? selectedDate.toISOString().split("T")[0] : "",
        preferredTime: selectedTime || "",
      };
      const response = await apiRequest("POST", "/api/bookings", payload);
      return response.json();
    },
    onSuccess: () => {
      analytics.bookingSubmitted(language, CLASS_MAP[classType].studentType);
      queryClient.invalidateQueries({ queryKey: ["/api/bookings"] });
      toast({
        title: language === "es" ? "¡Solicitud enviada!" : "Request sent!",
        description:
          language === "es"
            ? "Te contactaremos pronto para confirmar tu clase gratuita."
            : "We will contact you soon to confirm your free trial class.",
      });
      form.reset();
      onClose();
    },
    onError: (error) => {
      console.error("Booking error:", error);
      toast({
        title: language === "es" ? "Error" : "Error",
        description:
          language === "es"
            ? "Hubo un problema al procesar tu solicitud. Inténtalo de nuevo."
            : "There was a problem processing your request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const studentType = CLASS_MAP[classType].studentType;
  const timeSlots =
    studentType === "adult"
      ? ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"]
      : ["16:00", "17:00", "18:00", "19:00"];

  const onSubmit = (values: BookingFormValues) => createBooking.mutate(values);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <button
            type="button"
            onClick={onClose}
            aria-label={language === "es" ? "Cerrar" : "Close"}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={22} />
          </button>
          <CardTitle className="text-passport-gray pr-8">{t("booking.heading")}</CardTitle>
          <p className="text-sm text-gray-500 font-normal mt-1">{t("booking.subheading")}</p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Step 1 — Class type selector */}
          <div>
            <h4 className="font-semibold text-passport-gray mb-3">{t("booking.selectClassType")}</h4>
            <div className="grid grid-cols-2 gap-3">
              {CLASS_ORDER.map((ct) => {
                const isSelected = classType === ct;
                const isChild = CLASS_MAP[ct].studentType === "child";
                return (
                  <button
                    key={ct}
                    type="button"
                    onClick={() => {
                      setClassType(ct);
                      setSelectedTime("");
                    }}
                    className={`flex items-center gap-2 rounded-lg border-2 p-3 text-left text-sm font-medium transition-colors ${
                      isSelected
                        ? "border-passport-blue bg-blue-50 text-passport-blue"
                        : "border-gray-200 text-gray-700 hover:border-passport-blue"
                    }`}
                  >
                    {isChild ? <Baby size={18} className="shrink-0" /> : <User size={18} className="shrink-0" />}
                    <span className="flex-1">{t(`booking.classTypes.${ct}`)}</span>
                    {isSelected && <Check size={16} className="shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2 — Contact details (required) */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("form.name")}</FormLabel>
                    <FormControl>
                      <Input placeholder={t("form.name")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("form.email")}</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder={t("form.email")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("form.phone")}</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder={t("form.phone")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Step 3 — Preferred day & time (optional) */}
              <div>
                <h4 className="font-semibold text-passport-gray mb-3">{t("booking.preferredOptional")}</h4>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date()}
                    className="rounded-md border"
                  />
                  <div>
                    <h5 className="font-semibold text-gray-700 text-sm mb-3">{t("booking.availableTimes")}</h5>
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          type="button"
                          variant={selectedTime === time ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedTime(selectedTime === time ? "" : time)}
                          className={
                            selectedTime === time
                              ? "passport-blue text-white"
                              : "hover:border-passport-blue hover:text-passport-blue"
                          }
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("form.message")}</FormLabel>
                    <FormControl>
                      <Textarea placeholder={t("form.message")} rows={3} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-3 pt-2">
                <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                  {language === "es" ? "Cancelar" : "Cancel"}
                </Button>
                <Button
                  type="submit"
                  disabled={createBooking.isPending}
                  className="flex-1 passport-orange hover:bg-orange-600 text-white"
                >
                  {createBooking.isPending
                    ? language === "es"
                      ? "Procesando..."
                      : "Processing..."
                    : t("booking.confirmBooking")}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
