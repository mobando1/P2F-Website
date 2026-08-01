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
import {
  EMPTY_INTAKE,
  INTAKE_VERSION,
  buildIntakeSummary,
  getIntakeCopy,
  isIntakeComplete,
  type IntakeAnswers,
  type IntakeAudience,
} from "@/content/intake";

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
  /** UI language, NOT the language being taught. 'es' is passed on the /en page. */
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
  const [showClassPicker, setShowClassPicker] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [intake, setIntake] = useState<IntakeAnswers>(EMPTY_INTAKE);
  const [consent, setConsent] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<null | { booked: boolean; whenIso?: string; tutorName?: string }>(null);

  const { toast } = useToast();
  const queryClient = useQueryClient();

  // The page's own language decides which offer is on sale. Showing all four
  // class types let a visitor on /en (Spanish speakers learning English) book a
  // SPANISH class with a Spanish coach — a wrong-language booking on a page
  // that sells English. Restrict to the two audiences of this offer.
  const learningLanguage = isEs ? "english" : "spanish";
  const visibleTypes = useMemo(
    () => CLASS_ORDER.filter((ct) => CLASS_MAP[ct].language === learningLanguage),
    [learningLanguage],
  );

  const audience: IntakeAudience = CLASS_MAP[classType].studentType;
  const intakeCopy = getIntakeCopy(locale, audience);

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

  // Do NOT gate on `calendarMode && selectedSlot`: when the Portal is down,
  // calendarMode is false and there is never a selectedSlot, so the questions
  // would vanish on exactly the path where the coach most needs them.
  const showIntake = calendarMode ? !!selectedSlot : true;
  const intakeValid = isIntakeComplete(intake);
  const canSubmit =
    contactValid && intakeValid && consent && (!calendarMode || !!selectedSlot);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setAttempted(true);
    if (!canSubmit || submitting) return;

    setSubmitting(true);
    try {
      const intakeSummary = buildIntakeSummary(intake, locale, audience);

      if (calendarMode && selectedSlot) {
        const base = {
          name,
          email,
          phone,
          classType,
          startAt: selectedSlot,
          timeZone: visitorTz,
          lang: language,
        };
        const enriched = {
          ...base,
          intake: {
            version: INTAKE_VERSION,
            goalCategory: intake.goalCategory,
            goal: intake.goal.trim(),
            selfLevel: intake.selfLevel,
            blocker: intake.blocker,
            locale,
            audience,
          },
          intakeSummary,
          consent: {
            recording: true as const,
            policyVersion: "v2-2026-08",
            acceptedAt: new Date().toISOString(),
            userAgent: typeof navigator !== "undefined" ? navigator.userAgent : undefined,
          },
        };

        const postTrial = (body: unknown) =>
          fetch("/api/trial-bookings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });

        let res = await postTrial(enriched);
        let body = await res.json().catch(() => null);

        // If the Portal validates strictly and rejects the new fields, retry with
        // exactly today's payload. Scoped to 400 only, so it can't mask a real
        // validation failure on name/email — and it means the repositioning can
        // never take bookings offline while the Portal catches up.
        if (!res.ok && res.status === 400) {
          console.warn("[booking] Portal rejected intake fields; retrying without them");
          res = await postTrial(base);
          body = await res.json().catch(() => null);
        }

        if (res.ok && body?.success) {
          analytics.bookingSubmitted(language, audience);
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

      // Fallback: capture as a lead request (team will confirm).
      // `insertBookingSchema` silently strips unknown keys, so the answers are
      // folded into `message`, which does flow through to the Portal.
      const { language: leadLanguage, studentType } = CLASS_MAP[classType];
      await apiRequest("POST", "/api/bookings", {
        name,
        email,
        phone,
        message: [message.trim(), intakeSummary].filter(Boolean).join("\n\n"),
        language: leadLanguage,
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
                  {isEs ? "¡Diagnóstico agendado!" : "Diagnostic booked!"}
                </h3>
                <p className="text-gray-600">
                  {done.whenIso && (
                    <span className="block font-medium text-passport-gray mb-1">{fmtFullWhen(done.whenIso)}</span>
                  )}
                  {done.tutorName && (
                    <span className="block text-sm">{isEs ? "Coach: " : "Coach: "}{done.tutorName}</span>
                  )}
                </p>
                <p className="text-gray-600 text-sm">
                  {isEs
                    ? "Te enviamos el link de la clase a tu correo. Tu coach va a leer tus respuestas antes de la sesión."
                    : "We sent the class link to your email. Your coach will read your answers before the session."}
                </p>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-passport-gray">
                  {isEs ? "¡Solicitud enviada!" : "Request sent!"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {isEs
                    ? "Te contactamos para agendar tu diagnóstico y armar tu plan."
                    : "We'll be in touch to schedule your diagnostic and build your plan."}
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

  const chip = (selected: boolean) =>
    `rounded-lg border-2 p-3 text-left text-sm font-medium transition-colors ${
      selected
        ? "border-passport-blue bg-blue-50 text-passport-blue"
        : "border-gray-200 text-gray-700 hover:border-passport-blue"
    }`;

  const missing = (empty: boolean) =>
    attempted && empty ? (
      <p className="text-xs text-red-600 mt-1">{intakeCopy.missingHint}</p>
    ) : null;

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
          {/* Step 1 — class type. Confirmed, not chosen: every call site passes a
              defaultClassType, so this is a correction affordance, not a menu. */}
          <div>
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <p className="text-sm">
                <span className="text-gray-500">{isEs ? "Diagnóstico · " : "Diagnostic · "}</span>
                <span className="font-semibold text-passport-gray">
                  {t(`booking.classTypes.${classType}`)}
                </span>
              </p>
              <button
                type="button"
                onClick={() => setShowClassPicker((v) => !v)}
                className="text-sm text-passport-blue hover:underline"
              >
                {isEs ? "cambiar" : "change"}
              </button>
            </div>

            {showClassPicker && (
              <div className="grid grid-cols-2 gap-3 mt-3">
                {visibleTypes.map((ct) => {
                  const isSelected = classType === ct;
                  const isChild = CLASS_MAP[ct].studentType === "child";
                  return (
                    <button
                      key={ct}
                      type="button"
                      onClick={() => {
                        setClassType(ct);
                        setShowClassPicker(false);
                      }}
                      className={`flex items-center gap-2 ${chip(isSelected)}`}
                    >
                      {isChild ? <Baby size={18} className="shrink-0" /> : <User size={18} className="shrink-0" />}
                      <span className="flex-1">{t(`booking.classTypes.${ct}`)}</span>
                      {isSelected && <Check size={16} className="shrink-0" />}
                    </button>
                  );
                })}
              </div>
            )}
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
                  ? "No hay horarios en línea por ahora. Déjanos tus datos y te contactamos para agendar tu diagnóstico gratis."
                  : "No online times right now. Leave your details and we'll reach out to schedule your free diagnostic."}
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 3 — the questions the coach reads before the class */}
            {showIntake && (
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 space-y-5">
                <div>
                  <h4 className="font-semibold text-passport-gray">{intakeCopy.heading}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">{intakeCopy.subheading}</p>
                </div>

                {/* Q1 — what they need it for */}
                <div>
                  <label className="block text-sm font-medium text-passport-gray mb-1">
                    {intakeCopy.goalCategoryLabel}
                  </label>
                  <p className="text-xs text-gray-500 mb-2">{intakeCopy.goalCategoryHelper}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {intakeCopy.goalCategoryOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setIntake((s) => ({ ...s, goalCategory: opt.value }))}
                        className={chip(intake.goalCategory === opt.value)}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                  {missing(!intake.goalCategory)}
                </div>

                {/* Q2 — their "why", in their own words. Quoted verbatim in the
                    plan and the delivery email, so it is never normalized. */}
                <div>
                  <label className="block text-sm font-medium text-passport-gray mb-1">
                    {intakeCopy.goalLabel}
                  </label>
                  <p className="text-xs text-gray-500 mb-2">{intakeCopy.goalHelper}</p>
                  <Input
                    value={intake.goal}
                    maxLength={140}
                    placeholder={intakeCopy.goalPlaceholder}
                    onChange={(e) => setIntake((s) => ({ ...s, goal: e.target.value }))}
                  />
                  {missing(intake.goal.trim().length < 5)}
                </div>

                {/* Q3 — self-assessed level */}
                <div>
                  <label className="block text-sm font-medium text-passport-gray mb-1">
                    {intakeCopy.selfLevelLabel}
                  </label>
                  <p className="text-xs text-gray-500 mb-2">{intakeCopy.selfLevelHelper}</p>
                  <div className="grid gap-2">
                    {intakeCopy.selfLevelOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setIntake((s) => ({ ...s, selfLevel: opt.value }))}
                        className={chip(intake.selfLevel === opt.value)}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                  {missing(!intake.selfLevel)}
                </div>

                {/* Q4 — optional: never the field that blocks a booking */}
                <div>
                  <label className="block text-sm font-medium text-passport-gray mb-1">
                    {intakeCopy.blockerLabel}{" "}
                    <span className="font-normal text-gray-400">({intakeCopy.optionalTag})</span>
                  </label>
                  <p className="text-xs text-gray-500 mb-2">{intakeCopy.blockerHelper}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {intakeCopy.blockerOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() =>
                          setIntake((s) => ({ ...s, blocker: s.blocker === opt.value ? "" : opt.value }))
                        }
                        className={chip(intake.blocker === opt.value)}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4 — contact details */}
            <div className="space-y-3">
              <Input placeholder={t("form.name")} value={name} onChange={(e) => setName(e.target.value)} required />
              <Input type="email" placeholder={t("form.email")} value={email} onChange={(e) => setEmail(e.target.value)} required />
              <Input type="tel" placeholder={t("form.phone")} value={phone} onChange={(e) => setPhone(e.target.value)} required />
              {!calendarMode && (
                <Textarea placeholder={t("form.message")} rows={3} value={message} onChange={(e) => setMessage(e.target.value)} />
              )}

              {/* Recording consent. Google Meet's in-call announcement is a
                  notification, not an auditable record — this is the record. */}
              <label className="flex items-start gap-2 text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 shrink-0"
                />
                <span>
                  {intakeCopy.consentLabel}
                  {audience === "child" && (
                    <span className="block text-xs text-gray-400 mt-0.5">
                      {intakeCopy.consentGuardianNote}
                    </span>
                  )}
                </span>
              </label>
              {attempted && !consent && (
                <p className="text-xs text-red-600">{intakeCopy.missingHint}</p>
              )}
            </div>

            <div className="flex gap-3 pt-2">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                {isEs ? "Cancelar" : "Cancel"}
              </Button>
              <Button
                type="submit"
                disabled={submitting || !canSubmit}
                className="flex-1 passport-orange hover:bg-orange-600 text-white"
              >
                {submitting
                  ? isEs ? "Procesando..." : "Processing..."
                  : t("booking.confirmBooking")}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
