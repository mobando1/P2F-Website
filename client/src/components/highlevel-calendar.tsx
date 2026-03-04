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
      title: type === 'adult' ? 'Book Your Free Spanish Class' : 'Book Free Spanish Class for Children',
      subtitle: type === 'adult' 
        ? 'Schedule a 40-minute trial class with a native Latin American instructor'
        : 'Schedule a 40-minute trial class for your child with our specialized Spanish instructors',
      loading: 'Loading calendar...',
      fallbackTitle: 'Calendar temporarily unavailable',
      fallbackMessage: 'Please contact us directly to schedule your free class:',
      contactEmail: 'info@passporttofluency.com',
      contactPhone: '+1 (555) 123-4567'
    },
    es: {
      title: type === 'adult' ? 'Reserva tu Clase Gratuita de Inglés' : 'Reserva Clase Gratuita de Inglés para Niños',
      subtitle: type === 'adult'
        ? 'Agenda una clase de prueba de 40 minutos con un instructor nativo americano'
        : 'Agenda una clase de prueba de 40 minutos para tu hijo con nuestros instructores especializados en inglés',
      loading: 'Cargando calendario...',
      fallbackTitle: 'Calendario temporalmente no disponible',
      fallbackMessage: 'Por favor contáctanos directamente para agendar tu clase gratuita:',
      contactEmail: 'info@passporttofluency.com',
      contactPhone: '+1 (555) 123-4567'
    }
  };

  const t = texts[language];

  // HighLevel calendar URLs - All calendars now provided and working
  const calendarUrls = {
    adult: {
      en: "https://api.leadconnectorhq.com/widget/booking/g27wbcMQU9YvigMrJfVK", // Adult Spanish calendar
      es: "https://api.leadconnectorhq.com/widget/booking/Z5fJpM9ktwCxfpHAPJRh"  // Adult English calendar
    },
    child: {
      en: "https://api.leadconnectorhq.com/widget/booking/DplznTj4YrOGaYJ12ufO", // Kids Spanish calendar
      es: "https://api.leadconnectorhq.com/widget/booking/dYj2Xhmgf3w26n0Mrwqw"  // Kids English calendar
    }
  };

  const calendarUrl = calendarUrls[type][language];

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

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-passport-blue"></div>
          <span className="ml-3 text-gray-600">{t.loading}</span>
        </div>
      ) : (
        <div className="calendar-container">
          <div className="min-h-[500px] md:min-h-[800px]">
            <iframe
              src={calendarUrl}
              className="w-full h-[500px] md:h-[800px] border-none"
              scrolling="yes"
              title="Booking Calendar"
            />
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