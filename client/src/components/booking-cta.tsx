import { useState } from "react";
import { Calendar, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/translations";
import BookingForm, { type ClassType } from "@/components/booking-form";

interface BookingCTAProps {
  /** Site UI language. 'es' → learning English, 'en' → learning Spanish */
  language: "es" | "en";
  /** Audience for the pre-selected class type */
  type: "adult" | "child";
  className?: string;
}

function deriveClassType(language: "es" | "en", type: "adult" | "child"): ClassType {
  const learning = language === "es" ? "english" : "spanish";
  const audience = type === "adult" ? "adults" : "children";
  return `${learning}_${audience}` as ClassType;
}

export default function BookingCTA({ language, type, className = "" }: BookingCTAProps) {
  const { t } = useTranslation(language);
  const [showForm, setShowForm] = useState(false);

  const bullets =
    language === "es"
      ? [
          "Clase de diagnóstico de 50 min, gratis",
          "Sin tarjeta de crédito",
          "Tu Plan de Vuelo en 72 horas",
        ]
      : [
          "Free 50-minute diagnostic class",
          "No credit card required",
          "Your Flight Plan within 72 hours",
        ];

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-8 text-center ${className}`}>
      <div className="w-14 h-14 bg-passport-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <Calendar className="w-7 h-7 text-passport-blue" />
      </div>

      <h3 className="text-2xl font-bold text-passport-gray mb-2">{t("booking.heading")}</h3>
      <p className="text-gray-600 mb-6">{t("booking.subheading")}</p>

      <ul className="space-y-2 mb-6 max-w-xs mx-auto text-left">
        {bullets.map((b) => (
          <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
            <Check className="w-4 h-4 text-green-600 shrink-0" />
            {b}
          </li>
        ))}
      </ul>

      <Button
        onClick={() => setShowForm(true)}
        className="passport-orange hover:bg-orange-600 text-white text-lg px-8 py-6 rounded-xl"
      >
        {t("form.submit")}
      </Button>

      <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
        <Clock className="w-4 h-4 mr-2" />
        <span>
          {language === "es"
            ? "Clases de 50 minutos • Horarios flexibles"
            : "50-minute classes • Flexible scheduling"}
        </span>
      </div>

      {showForm && (
        <BookingForm
          t={t}
          language={language}
          defaultClassType={deriveClassType(language, type)}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}
