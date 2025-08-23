import { useState, useEffect } from "react";
import { Calendar, Clock, User, Phone } from "lucide-react";

interface HighLevelCalendarProps {
  language: 'en' | 'es';
  type: 'adult' | 'child';
  className?: string;
}

export default function HighLevelCalendar({ language, type, className = "" }: HighLevelCalendarProps) {
  const [isLoading, setIsLoading] = useState(true);

  const texts = {
    en: {
      title: type === 'adult' ? 'Book Your Free English Class' : 'Book Free Class for Children',
      subtitle: type === 'adult' 
        ? 'Schedule a 40-minute trial class with a native American instructor'
        : 'Schedule a 40-minute trial class for your child with our specialized instructors',
      loading: 'Loading calendar...',
      fallbackTitle: 'Calendar temporarily unavailable',
      fallbackMessage: 'Please contact us directly to schedule your free class:',
      contactEmail: 'info@passporttofluency.com',
      contactPhone: '+1 (555) 123-4567'
    },
    es: {
      title: type === 'adult' ? 'Reserva tu Clase Gratuita de Inglés' : 'Reserva Clase Gratuita para Niños',
      subtitle: type === 'adult'
        ? 'Agenda una clase de prueba de 40 minutos con un instructor nativo americano'
        : 'Agenda una clase de prueba de 40 minutos para tu hijo con nuestros instructores especializados',
      loading: 'Cargando calendario...',
      fallbackTitle: 'Calendario temporalmente no disponible',
      fallbackMessage: 'Por favor contáctanos directamente para agendar tu clase gratuita:',
      contactEmail: 'info@passporttofluency.com',
      contactPhone: '+1 (555) 123-4567'
    }
  };

  const t = texts[language];

  // TODO: Replace with actual HighLevel calendar URL
  const calendarUrl = type === 'adult' 
    ? "https://api.appointmentcore.com/calendar/adults" // Replace with real URL
    : "https://api.appointmentcore.com/calendar/children"; // Replace with real URL

  useEffect(() => {
    // Simulate calendar loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const CalendarFallback = () => (
    <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
      <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {t.fallbackTitle}
      </h3>
      <p className="text-gray-600 mb-6">
        {t.fallbackMessage}
      </p>
      <div className="space-y-3">
        <div className="flex items-center justify-center text-passport-blue">
          <Phone className="w-4 h-4 mr-2" />
          <a 
            href={`tel:${t.contactPhone}`}
            className="hover:underline font-medium"
          >
            {t.contactPhone}
          </a>
        </div>
        <div className="flex items-center justify-center text-passport-blue">
          <User className="w-4 h-4 mr-2" />
          <a 
            href={`mailto:${t.contactEmail}`}
            className="hover:underline font-medium"
          >
            {t.contactEmail}
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-passport-blue rounded-full flex items-center justify-center">
            <Calendar className="w-6 h-6 text-white" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {t.title}
        </h3>
        <p className="text-gray-600">
          {t.subtitle}
        </p>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-passport-blue"></div>
          <span className="ml-3 text-gray-600">{t.loading}</span>
        </div>
      ) : (
        <div className="calendar-container">
          {/* TODO: Replace this with actual HighLevel calendar embed when URL is provided */}
          <div className="aspect-video">
            <CalendarFallback />
            {/* 
            When you provide the HighLevel calendar URL, replace the CalendarFallback with:
            <iframe 
              src={calendarUrl}
              className="w-full h-full border rounded-lg"
              title="HighLevel Calendar"
            />
            */}
          </div>
        </div>
      )}

      <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
        <Clock className="w-4 h-4 mr-2" />
        <span>40-minute classes • Available 24/7 • No credit card required</span>
      </div>
    </div>
  );
}