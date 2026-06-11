import { useEffect, useMemo, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { analytics } from "@/lib/analytics";
import { User, Baby, X, Check, CalendarCheck, Loader2 } from "lucide-react";

export type ClassType =
  | "english_adults"
  | "english_children"
  | "spanish_adults"
  | "spanish_children";

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
  defaultClassType?: ClassType;
  onClose: () => void;
}

interface Slot {
  start: string; // absolute UTC ISO
  end: string;
}

const dayKeyOf = (iso: string) => new Date(iso).toLocaleDateString("en-CA");

export default function BookingForm({ t, language, defaultClassType, onClose }: BookingFormProps) {
  const isEs = language === "es";
  const locale = isEs ? "es" : "en";
  const visitorTz = useMemo(() => Intl.DateTimeFormat().resolvedOptions().timeZone, []);

  const initialClassType: ClassType =
    defaultClassType ?? (isEs ? "english_adults" : "spanish_adults");

  const [classType, setClassType] = useState<ClassType>(initialClassType);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<null | { booked: boolean; whenIso?: string; tutorName?: string }>(null);

  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Real availability for the selected class type (browser -> website server -> Portal)
  const { data, isLoading, isError, refetch } = useQuery<{ success: boolean; days?: { date: string; slots: Slot[] }[] }>({
    queryKey: ["availability", classType],
    queryFn: async () => {
      // Start one day before "today" so visitors east of UTC don't lose their earliest
      // valid slots at the range edge; past slots are filtered out server-side anyway.
      const d = new Date();
      d.setDate(d.getDate() - 1);
      const startDate = d.toLocaleDateString("en-CA");
      const res = await fetch(`/api/availability?classType=${classType}&startDate=${startDate}&days=11`);
      if (!res.ok) throw new Error(`availability ${res.status}`);
      return res.json();
    },
    staleTime: 60_000, // refetch availability at most once a minute
    retry: false,
  });

  const allSlots: Slot[] = useMemo(
    () => (data?.days ?? []).flatMap((d) => d.slots ?? []),
    [data],
  );

  // Group slots by the visitor's local calendar day
  const { dayKeys, slotsByDay } = useMemo(() => {
    const map = new Map<string, string[]>();
    const keys: string[] = [];
    for (const s of allSlots) {
      const key = dayKeyOf(s.start);
      if (!map.has(key)) {
        map.set(key, []);
        keys.push(key);
      }
      map.get(key)!.push(s.start);
    }
    keys.sort();
    return { dayKeys: keys, slotsByDay: map };
  }, [allSlots]);

  const hasAvailability = dayKeys.length > 0;
  const calendarMode = !isLoading && !isError && hasAvailability;

  // Reset slot selection when class type changes
  useEffect(() => {
    setSelectedDay(null);
    setSelectedSlot(null);
  }, [classType]);

  // Default the selected day to the first day with slots
  useEffect(() => {
    if (dayKeys.length && (!selectedDay || !dayKeys.includes(selectedDay))) {
      setSelectedDay(dayKeys[0]);
    }
  }, [dayKeys, selectedDay]);

  const fmtDayChip = (key: string) =>
    new Date(`${key}T12:00:00`).toLocaleDateString(locale, { weekday: "short", day: "numeric", month: "short" });
  const fmtTime = (iso: string) =>
    new Date(iso).toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" });
  const fmtFullWhen = (iso: string) =>
    new Date(iso).toLocaleString(locale, { weekday: "long", day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" });

  const contactValid = name.trim().length >= 2 && /\S+@\S+\.\S+/.test(email) && phone.trim().length >= 5;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!contactValid || submitting) return;

    setSubmitting(true);
    try {
      if (calendarMode && selectedSlot) {
        // Auto-book a real trial class
        const res = await fetch("/api/trial-bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, phone, classType, startAt: selectedSlot, timeZone: visitorTz, lang: language }),
        });
        const body = await res.json().catch(() => null);
        if (res.ok && body?.success) {
          analytics.bookingSubmitted(language, CLASS_MAP[classType].studentType);
          setDone({ booked: true, whenIso: body.scheduledAt || selectedSlot, tutorName: body.tutorName });
          return;
        }
        // Slot taken / no longer available / now too soon — refresh and let them pick again
        const retryCodes = ["no_availability", "slot_taken", "invalid"];
        if (res.status === 409 || retryCodes.includes(body?.code)) {
          toast({
            title: isEs ? "Ese horario ya no está disponible" : "That time is no longer available",
            description: isEs ? "Elige otro horario, por favor." : "Please pick another time.",
            variant: "destructive",
          });
          setSelectedSlot(null);
          await refetch();
          return;
        }
        throw new Error(body?.message || "booking failed");
      }

      // Fallback: capture as a lead request (team will confirm)
      const { language: learningLanguage, studentType } = CLASS_MAP[classType];
      await apiRequest("POST", "/api/bookings", {
        name,
        email,
        phone,
        message,
        language: learningLanguage,
        studentType,
        preferredDate: "",
        preferredTime: "",
      });
      analytics.bookingSubmitted(language, studentType);
      queryClient.invalidateQueries({ queryKey: ["/api/bookings"] });
      setDone({ booked: false });
    } catch (err) {
      console.error("Booking error:", err);
      toast({
        title: isEs ? "Error" : "Error",
        description: isEs
          ? "Hubo un problema al procesar tu solicitud. Inténtalo de nuevo."
          : "There was a problem processing your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  }

  // ----- Success screen -----
  if (done) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CalendarCheck className="w-8 h-8 text-green-600" />
            </div>
            {done.booked ? (
              <>
                <h3 className="text-2xl font-bold text-passport-gray">
                  {isEs ? "¡Clase agendada!" : "Class booked!"}
                </h3>
                <p className="text-gray-600">
                  {done.whenIso && (
                    <span className="block font-medium text-passport-gray mb-1">{fmtFullWhen(done.whenIso)}</span>
                  )}
                  {done.tutorName && (
                    <span className="block text-sm">{isEs ? "Profe: " : "Coach: "}{done.tutorName}</span>
                  )}
                </p>
                <p className="text-gray-600 text-sm">
                  {isEs
                    ? "Te enviamos el link de la clase a tu correo. ¡Nos vemos!"
                    : "We sent the class link to your email. See you there!"}
                </p>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-passport-gray">
                  {isEs ? "¡Solicitud enviada!" : "Request sent!"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {isEs
                    ? "Te contactaremos pronto para confirmar tu clase gratuita."
                    : "We will contact you soon to confirm your free trial class."}
                </p>
              </>
            )}
            <Button onClick={onClose} className="w-full passport-orange hover:bg-orange-600 text-white">
              {isEs ? "Listo" : "Done"}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <button
            type="button"
            onClick={onClose}
            aria-label={isEs ? "Cerrar" : "Close"}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={22} />
          </button>
          <CardTitle className="text-passport-gray pr-8">{t("booking.heading")}</CardTitle>
          <p className="text-sm text-gray-500 font-normal mt-1">{t("booking.subheading")}</p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Step 1 — class type */}
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
                    onClick={() => setClassType(ct)}
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

          {/* Step 2 — pick a real slot (or fallback message) */}
          <div>
            {isLoading ? (
              <div className="flex items-center justify-center py-8 text-gray-500">
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                {isEs ? "Buscando horarios disponibles..." : "Finding available times..."}
              </div>
            ) : calendarMode ? (
              <div className="space-y-3">
                <h4 className="font-semibold text-passport-gray">
                  {isEs ? "Elige día y hora" : "Pick a day & time"}
                </h4>
                {/* Day chips */}
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {dayKeys.map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => {
                        setSelectedDay(key);
                        setSelectedSlot(null);
                      }}
                      className={`shrink-0 rounded-lg border px-3 py-2 text-sm transition-colors ${
                        selectedDay === key
                          ? "border-passport-blue bg-passport-blue text-white"
                          : "border-gray-200 text-gray-700 hover:border-passport-blue"
                      }`}
                    >
                      {fmtDayChip(key)}
                    </button>
                  ))}
                </div>
                {/* Time slots for the selected day */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {(slotsByDay.get(selectedDay || dayKeys[0]) || []).map((iso) => (
                    <Button
                      key={iso}
                      type="button"
                      size="sm"
                      variant={selectedSlot === iso ? "default" : "outline"}
                      onClick={() => setSelectedSlot(iso)}
                      className={selectedSlot === iso ? "passport-blue text-white" : "hover:border-passport-blue hover:text-passport-blue"}
                    >
                      {fmtTime(iso)}
                    </Button>
                  ))}
                </div>
                <p className="text-xs text-gray-400">
                  {isEs ? "Horarios en tu zona: " : "Times shown in your timezone: "}
                  {visitorTz}
                </p>
              </div>
            ) : (
              <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800">
                {isEs
                  ? "No hay horarios en línea por ahora. Déjanos tus datos y te contactamos para agendar tu clase gratis."
                  : "No online times right now. Leave your details and we'll reach out to schedule your free class."}
              </div>
            )}
          </div>

          {/* Step 3 — contact details */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input placeholder={t("form.name")} value={name} onChange={(e) => setName(e.target.value)} required />
            <Input type="email" placeholder={t("form.email")} value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Input type="tel" placeholder={t("form.phone")} value={phone} onChange={(e) => setPhone(e.target.value)} required />
            {!calendarMode && (
              <Textarea placeholder={t("form.message")} rows={3} value={message} onChange={(e) => setMessage(e.target.value)} />
            )}

            <div className="flex gap-3 pt-2">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                {isEs ? "Cancelar" : "Cancel"}
              </Button>
              <Button
                type="submit"
                disabled={submitting || !contactValid || (calendarMode && !selectedSlot)}
                className="flex-1 passport-orange hover:bg-orange-600 text-white"
              >
                {submitting
                  ? isEs ? "Procesando..." : "Processing..."
                  : calendarMode
                    ? isEs ? "Confirmar reserva" : "Confirm booking"
                    : t("booking.confirmBooking")}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
