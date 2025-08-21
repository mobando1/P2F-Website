export interface Translation {
  [key: string]: string | Translation;
}

export const translations = {
  es: {
    // Navigation
    nav: {
      home: "Inicio",
      howItWorks: "Cómo Funciona",
      plans: "Planes",
      teachers: "Profesores",
      testimonials: "Testimonios",
      freeTrial: "Clase Gratis"
    },
    // Hero Section
    hero: {
      title: "Domina el Inglés con Coaching Personalizado",
      subtitle: "Conecta con instructores nativos de inglés para sesiones personalizadas 1-a-1 diseñadas para alcanzar tus objetivos únicos de aprendizaje.",
      ctaPrimary: "Reserva tu Clase GRATIS",
      ctaSecondary: "Ver Planes",
      statsStudents: "Estudiantes Felices",
      statsSuccess: "Tasa de Éxito"
    },
    // Features
    features: {
      title: "Nuestro programa virtual combina todos los elementos que necesitas para aumentar tu fluidez en inglés",
      nativeCoaches: {
        title: "Coaches Nativos",
        description: "Nuestros coaches virtuales son hablantes nativos de países angloparlantes, permitiéndote no solo aprender inglés sino también experimentar diferentes culturas."
      },
      personalized: {
        title: "Personalizado",
        description: "Ya sea que elijas sesiones individuales o grupales, estamos comprometidos a ayudarte a alcanzar tus objetivos. Limitamos el tamaño de las clases para maximizar tu experiencia de aprendizaje."
      },
      saveTime: {
        title: "Ahorra Tiempo",
        description: "Olvídate de conducir por la ciudad para llegar a una clase. Nuestras clases son 100% virtuales. ¡Encuentra tu lugar, toma algo para beber, ponte cómodo y comienza!"
      },
      affordable: {
        title: "Asequible",
        description: "La atención personalizada, clases pequeñas y coaching experto te brindan la mejor relación calidad-precio."
      },
      practical: {
        title: "Práctico",
        description: "Nuestro currículum está diseñado para que hables rápido. Nos enfocamos en aumentar tus habilidades de escucha y conversación."
      },
      efficient: {
        title: "Eficiente",
        description: "El período de atención humana es relativamente bajo. Por eso nuestras sesiones son cortas y directas. 40 min sesiones individuales. 50 min sesiones grupales."
      }
    },
    // Programs
    programs: {
      title: "ELIGE TU PLAN DE FLUIDEZ",
      adults: {
        title: "Inglés para Adultos",
        description: "Sumérgete en la fluidez del inglés con coaching personalizado uno-a-uno.",
        cta: "Ver Planes"
      },
      children: {
        title: "Inglés para Niños",
        description: "Despierta el amor de tu hijo por el inglés con sesiones divertidas e interactivas.",
        cta: "Ver Planes"
      }
    },
    // Pricing
    pricing: {
      title: "Encuentra el plan perfecto para hablar inglés con confianza",
      plan1: {
        frequency: "1 Clase por Semana",
        price: "€119.96",
        period: "Por Mes",
        perClass: "€29.99/clase",
        description: "Perfecto para mantener un progreso constante.",
        cta: "Empezar a Aprender"
      },
      plan2: {
        frequency: "2 Clases por Semana",
        price: "€219.99",
        period: "Por Mes",
        perClass: "€27.50/clase",
        description: "Mejor para mejora rápida y conversación semanal.",
        cta: "Elegir Este Plan",
        popular: "⭐ MÁS POPULAR"
      },
      plan3: {
        frequency: "3 Clases por Semana",
        price: "€299.99",
        period: "Por Mes",
        perClass: "€24.99/clase",
        description: "Para estudiantes serios que quieren resultados rápidos.",
        cta: "Empezar a Aprender"
      },
      features: {
        classesPerWeek: "clases por semana",
        classesPerMonth: "por mes",
        privateSessions: "Sesiones privadas 1-a-1 (40 min)",
        flexibleScheduling: "Horarios flexibles",
        cancelAnytime: "Cancela en cualquier momento",
        teacherSupport: "Apoyo del profesor",
        noContract: "Sin contrato"
      }
    },
    // Teachers
    teachers: {
      title: "Conoce a tus Profesores",
      subtitle: "Aprende con los mejores",
      cta: "Ver Todos los Profesores"
    },
    // Testimonials
    testimonials: {
      title: "TESTIMONIOS"
    },
    // CTA
    cta: {
      title: "Comienza a Hablar Inglés desde el Día Uno – Reserva tu Clase Gratuita Hoy",
      adults: "Clase Gratis para Adultos",
      children: "Clase Gratis para Niños"
    },
    // Booking
    booking: {
      title: "¿Listo para Programar tu Primera Clase de Inglés?",
      discoveryClass: "Clase de Descubrimiento",
      discoveryClassChildren: "Clase de Descubrimiento para Niños",
      selectDateTime: "Seleccionar Fecha y Hora",
      availableTimes: "Horarios Disponibles:",
      confirmBooking: "Confirmar Reserva"
    },
    // Form
    form: {
      name: "Nombre completo",
      email: "Correo electrónico",
      phone: "Teléfono",
      message: "Mensaje (opcional)",
      submit: "Reservar Clase Gratis",
      required: "Este campo es requerido",
      invalidEmail: "Correo electrónico inválido"
    },
    // Footer
    footer: {
      description: "Conecta con instructores nativos de inglés para sesiones personalizadas diseñadas para alcanzar tus objetivos únicos de aprendizaje.",
      quickLinks: "Enlaces Rápidos",
      contact: "Contacto",
      schedule: "Lun - Vie: 9:00 - 18:00",
      copyright: "© 2024 Passport to Fluency. Todos los derechos reservados."
    }
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      howItWorks: "How It Works",
      plans: "Plans",
      teachers: "Teachers",
      testimonials: "Testimonials",
      freeTrial: "Free Trial"
    },
    // Hero Section
    hero: {
      title: "Achieve Spanish Fluency with Personalized Coaching",
      subtitle: "Connect with native Spanish-speaking instructors for tailored, one-on-one sessions designed to meet your unique learning goals.",
      ctaPrimary: "Book Your FREE Trial",
      ctaSecondary: "View Plans",
      statsStudents: "Happy Students",
      statsSuccess: "Success Rate"
    },
    // Features
    features: {
      title: "Our virtual program combines all the elements you need to increase your Spanish fluency",
      nativeCoaches: {
        title: "Native Coaches",
        description: "Our virtual coaches are native speakers from Latin America, allowing you not only to learn Spanish but also to experience other cultures."
      },
      personalized: {
        title: "Personalized",
        description: "Whether you choose one-on-one or group sessions, we are committed to helping you achieve your goals. We limit class size to maximize your learning experience."
      },
      saveTime: {
        title: "Save Time",
        description: "Forget about driving around town to make a class. Our classes are 100% virtual. Find your spot, grab something to drink, get comfy, and get started!"
      },
      affordable: {
        title: "Affordable",
        description: "The personalized attention, small classes, and expert coaching provides you with the best bang for your buck."
      },
      practical: {
        title: "Practical",
        description: "Our curriculum is designed to get you speaking fast. We are focused on increasing your listening and speaking skills."
      },
      efficient: {
        title: "Efficient",
        description: "The human attention span is relatively low. This is why our sessions are short and to the point. 40 mins individual sessions. 50 mins group sessions."
      }
    },
    // Programs
    programs: {
      title: "CHOOSE YOUR FLUENCY PLAN",
      adults: {
        title: "Spanish for Adults",
        description: "Dive into Spanish fluency with personalized, one-on-one coaching.",
        cta: "View Plans"
      },
      children: {
        title: "Spanish for Children",
        description: "Spark your child's love for Spanish with fun, interactive sessions.",
        cta: "View Plans"
      }
    },
    // Pricing
    pricing: {
      title: "Find the perfect plan to speak Spanish confidently",
      plan1: {
        frequency: "1 Class per Week",
        price: "$119.96",
        period: "Per Month",
        perClass: "$29.99/class",
        description: "Perfect for maintaining steady progress.",
        cta: "Start Learning Now"
      },
      plan2: {
        frequency: "2 Classes per Week",
        price: "$219.99",
        period: "Per Month",
        perClass: "$27.50/class",
        description: "Best for fast improvement and weekly conversation.",
        cta: "Choose This Plan",
        popular: "⭐ MOST POPULAR"
      },
      plan3: {
        frequency: "3 Classes per Week",
        price: "$299.99",
        period: "Per Month",
        perClass: "$24.99/class",
        description: "For serious learners who want results fast.",
        cta: "Start Learning Now"
      },
      features: {
        classesPerWeek: "classes per week",
        classesPerMonth: "per month",
        privateSessions: "Private 1-on-1 sessions (40 min)",
        flexibleScheduling: "Flexible scheduling",
        cancelAnytime: "Cancel anytime",
        teacherSupport: "Teacher support",
        noContract: "No contract"
      }
    },
    // Teachers
    teachers: {
      title: "Meet your Teachers",
      subtitle: "Learn with the best",
      cta: "View All Teachers"
    },
    // Testimonials
    testimonials: {
      title: "TESTIMONIALS"
    },
    // CTA
    cta: {
      title: "Start Speaking Spanish from Day One – Book Your Free Trial Today",
      adults: "Free Trial for Adults",
      children: "Free Trial for Children"
    },
    // Booking
    booking: {
      title: "Ready to Schedule Your First Spanish Class?",
      discoveryClass: "Discovery Class",
      discoveryClassChildren: "Discovery Class for Children",
      selectDateTime: "Select Date & Time",
      availableTimes: "Available Times:",
      confirmBooking: "Confirm Booking"
    },
    // Form
    form: {
      name: "Full name",
      email: "Email address",
      phone: "Phone number",
      message: "Message (optional)",
      submit: "Book Free Trial",
      required: "This field is required",
      invalidEmail: "Invalid email address"
    },
    // Footer
    footer: {
      description: "Connect with native Spanish-speaking instructors for tailored sessions designed to meet your unique learning goals.",
      quickLinks: "Quick Links",
      contact: "Contact",
      schedule: "Mon - Fri: 9:00 - 18:00",
      copyright: "© 2024 Passport to Fluency. All rights reserved."
    }
  }
};

export function useTranslation(language: 'es' | 'en') {
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
  
  return { t };
}
