/**
 * Marketing prose for the two offer pages.
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ CONVENTION WARNING — the naming here is inverted and it WILL bite.   │
 * │                                                                      │
 * │   offerEnglish → the ENGLISH-learning offer. Prose is in SPANISH.    │
 * │                  Served at /en. Components get language="es".        │
 * │   offerSpanish → the SPANISH-learning offer. Prose is in ENGLISH.    │
 * │                  Served at /es. Components get language="en".        │
 * │                                                                      │
 * │ Exports are named by OFFER, never by language. If you find yourself  │
 * │ writing `offer.en`, stop — you are about to wire it backwards.       │
 * └──────────────────────────────────────────────────────────────────────┘
 *
 * The positioning: we don't sell classes, we sell a personalized plan — the
 * "Plan de Vuelo" / "Flight Plan" — and the diagnosis is free. The first class
 * is a DIAGNOSTIC whose deliverable is that plan, delivered within 72 hours,
 * free, whether or not the student enrolls.
 *
 * Typed with `satisfies OfferCopy` so that adding a key to one locale and
 * forgetting the other is a compile error rather than silent drift.
 */

export type OfferId = "english" | "spanish";

/** How long the diagnostic class is. The Portal books 50 — do not print 40 anywhere. */
export const DIAGNOSTIC_MINUTES = 50;

/** The public delivery promise. Deliberately loose: promise 72, deliver in 24. */
export const PLAN_DELIVERY_HOURS = 72;

export interface OfferCopy {
  /** The artifact's name. Same in both languages by design. */
  planName: string;
  /** First-mention gloss, so "Plan de Vuelo" is never unexplained. */
  planNameGloss: string;

  nav: {
    pricing: string;
    team: string;
    blog: string;
    howItWorks: string;
    languageToggle: string;
  };

  hero: {
    badge: string;
    h1Line1: string;
    h1Line2: string;
    sub: string;
    subBold: string;
    trust: { label: string; strong: string; after?: string }[];
    ctaPrimary: string;
    ctaSecondary: string;
    /**
     * Small line under the buttons. This is the ONLY place the page says the
     * diagnostic costs nothing. Repeating "free" across a page tells people
     * the thing has no value — and the plan is supposed to be the valuable
     * artifact here, not a giveaway.
     */
    ctaNote: string;
  };

  /** Thin full-width band under the hero carrying the category break. */
  positioning: { bold: string; rest: string };

  howItWorks: {
    title: string;
    subtitle: string;
    steps: { title: string; body: string }[];
  };

  planPreview: {
    title: string;
    subtitle: string;
    items: { title: string; body: string }[];
    caption: string;
    /** Content of the fake Portal page rendered beside the list. */
    mock: {
      docTitle: string;
      updated: string;
      levelsLabel: string;
      levels: { label: string; value: number }[];
      goalLabel: string;
      goalQuote: string;
      focusLabel: string;
      focusChips: { chip: string; why: string }[];
      weeksLabel: string;
      weeks: { week: string; focus: string }[];
      recommendation: string;
    };
  };

  whyUs: {
    title: string;
    bullets: { title: string; body: string }[];
    card: {
      title: string;
      subtitle: string;
      tiles: { title: string; body: string; href: string; accent: "blue" | "orange" }[];
    };
  };

  diagnostic: {
    title: string;
    subtitle: string;
    cards: { title: string; body: string }[];
    risk: { badge: string; line: string };
  };

  pricing: {
    title: string;
    subtitle: string;
    transitionLine: string;
    forkCta: string;
  };

  testimonials: { title: string; subtitle: string };

  finalCta: {
    title: string;
    subtitle: string;
    btnAdult: string;
    btnChild: string;
    objection: { bold: string; rest: string };
  };

  footer: {
    tagline: string;
    quickLinks: string;
    linkHowItWorks: string;
    linkPricing: string;
    linkDiagnostic: string;
    linkTestimonials: string;
    contact: string;
    copyright: string;
  };
}

/* ══════════════════════════════════════════════════════════════════════ *
 *  THE ENGLISH OFFER — served at /en — prose in SPANISH
 * ══════════════════════════════════════════════════════════════════════ */

export const offerEnglish = {
  planName: "Plan de Vuelo",
  planNameGloss: "el plan de inglés que armamos solo para ti",

  nav: {
    pricing: "Planes y Precios",
    team: "Equipo",
    blog: "Blog",
    howItWorks: "Cómo Funciona",
    languageToggle: "🇪🇸 Aprende Español",
  },

  hero: {
    badge: "Inglés 1-a-1 para hispanohablantes",
    h1Line1: "Primero diagnosticamos",
    h1Line2: "tu inglés.",
    sub: "Una clase de 50 minutos con tu coach. De ahí sale tu Plan de Vuelo:",
    subBold: " qué te está frenando exactamente y la ruta para resolverlo.",
    // Credibility, not offer terms. The terms live in ctaNote.
    trust: [
      { label: "", strong: "1,000+", after: " estudiantes latinos" },
      { label: "", strong: "4.9", after: " calificación promedio" },
      { label: "Coaches ", strong: "latinos bilingües" },
    ],
    ctaPrimary: "Agendar mi diagnóstico",
    ctaSecondary: "Ver qué incluye",
    ctaNote: "Sin costo · Sin tarjeta · 50 minutos",
  },

  positioning: {
    bold: "No vendemos clases de inglés.",
    rest: " Diagnosticamos el tuyo y construimos el plan que te lleva a hablarlo.",
  },

  howItWorks: {
    title: "Cómo Funciona",
    subtitle: "De una conversación de 50 minutos a un plan escrito para ti.",
    steps: [
      {
        title: "Agenda tu clase de diagnóstico",
        body: "Elige el horario que te sirva. No pedimos tarjeta.",
      },
      {
        title: "Cuéntanos tu meta en 3 preguntas",
        body: "Treinta segundos que le dicen a tu coach exactamente qué preparar para ti.",
      },
      {
        title: "Habla 50 minutos con tu coach",
        body: "Una clase de verdad: hablas, tu coach escucha y encuentra dónde te estás trabando.",
      },
      {
        title: "Recibe tu Plan de Vuelo",
        body: "En 72 horas llega a tu portal, escrito para ti. Es tuyo, te inscribas o no.",
      },
    ],
  },

  planPreview: {
    title: "Qué hay dentro de tu Plan de Vuelo",
    subtitle:
      "No es una plantilla. Sale de lo que dijiste en tu clase de diagnóstico — tu meta, tus palabras, tus trabas. Llega a tu portal en 72 horas y se queda contigo, te inscribas o no.",
    items: [
      {
        title: "Tu nivel real, medido",
        body: "Dónde estás hoy en fluidez, escucha, vocabulario, gramática y confianza — con ejemplos sacados de tu propia clase.",
      },
      {
        title: "Tu meta, en tus palabras",
        body: "Lo que nos dijiste que quieres lograr, escrito tal cual. Es la vara con la que medimos todo lo demás.",
      },
      {
        title: "Tus 3 áreas de enfoque",
        body: "Lo que de verdad te está frenando, y por qué cada una importa para tu meta. No una lista genérica.",
      },
      {
        title: "El mundo de tus clases",
        body: "El tema sobre el que construimos tu material: tu trabajo, tus viajes, tu arte, tu día a día.",
      },
      {
        title: "Tu ruta semana a semana",
        body: "Qué trabajas cada semana, con un logro concreto que vas marcando cuando lo consigues.",
      },
      {
        title: "Cuántas clases necesitas y por cuánto tiempo",
        body: "La frecuencia que tu meta pide y el tiempo realista para llegar. Si con una clase por semana alcanza, te lo decimos.",
      },
    ],
    caption: "Ejemplo de un Plan de Vuelo. El tuyo llega a tu portal en 72 horas.",
    mock: {
      docTitle: "Plan de Vuelo — Ana M.",
      updated: "Actualizado hace 2 días",
      levelsLabel: "Tu nivel hoy",
      levels: [
        { label: "Fluidez", value: 50 },
        { label: "Comprensión", value: 70 },
        { label: "Vocabulario", value: 60 },
        { label: "Gramática", value: 40 },
        { label: "Confianza", value: 40 },
      ],
      goalLabel: "Tu meta",
      goalQuote: "Quiero liderar la reunión de los lunes sin escribir todo antes.",
      focusLabel: "Tus áreas de enfoque",
      focusChips: [
        { chip: "Pasado simple automático", why: "La reunión del lunes es todo en pasado" },
        { chip: "Conectores", why: "Para encadenar ideas sin volver atrás" },
        { chip: "Responder en caliente", why: "Lo que no puedes preparar antes" },
      ],
      weeksLabel: "Tu ruta",
      weeks: [
        { week: "Semanas 1-2", focus: "Abrir la reunión" },
        { week: "Semanas 3-4", focus: "Reportar avances" },
        { week: "Semanas 5-8", focus: "Responder en caliente" },
        { week: "Semanas 9-12", focus: "La reunión completa" },
      ],
      recommendation: "Recomendación: 2 clases por semana durante 12 semanas.",
    },
  },

  whyUs: {
    title: "¿Por qué elegir Passport to Fluency?",
    bullets: [
      {
        title: "Un coach que ya hizo el camino",
        body: "Tus coaches son latinos bilingües — de Colombia, de Venezuela — que aprendieron inglés siendo adultos, igual que tú. Saben exactamente dónde se traba un hispanohablante, porque se trabaron ahí mismo.",
      },
      {
        title: "El plan se adapta a tu agenda",
        body: "Agenda tus sesiones cuando quieras, incluso 15 minutos antes. Disponible 24/7 para adaptarse a tu vida ocupada.",
      },
      {
        title: "Tu plan no es una plantilla",
        body: "Sale del diagnóstico: tu meta, tu nivel medido y lo que te está frenando. Si tu mundo es el arte, tu material es de arte. Si son los viajes, es de viajes.",
      },
      {
        title: "Progreso que puedes ver",
        body: "Volvemos a medir las mismas cinco habilidades en la clase 4, 8 y 12. Ves las mismas barras moverse, no una sensación.",
      },
    ],
    card: {
      title: "Empieza por el diagnóstico",
      subtitle: "Elige el programa que se ajusta a ti",
      tiles: [
        {
          title: "Diagnóstico para Adultos",
          body: "Trabajo, viajes, entrevistas o la vida diaria",
          href: "#diagnostico",
          accent: "blue" as const,
        },
        {
          title: "Diagnóstico para Niños",
          body: "5 a 17 años, con el plan para los papás",
          href: "/en/children",
          accent: "blue" as const,
        },
        {
          title: "Inglés para Empresas",
          body: "Programas para equipos corporativos",
          href: "/en/business",
          accent: "orange" as const,
        },
      ],
    },
  },

  diagnostic: {
    title: "Agenda tu Clase de Diagnóstico",
    subtitle:
      "50 minutos con un coach bilingüe que también aprendió inglés. Salgas o no con nosotros, sales con tu plan.",
    cards: [
      {
        title: "Diagnóstico para Adultos",
        body: "Para el trabajo, un viaje, una entrevista o la vida diaria. Sales con tu meta escrita y la ruta para llegar.",
      },
      {
        title: "Diagnóstico para Niños (5-17)",
        body: "Jugamos, hablamos y medimos su nivel real. El plan les llega a ustedes, los papás, con exactamente qué reforzar.",
      },
    ],
    risk: {
      badge: "Te llevas el plan pase lo que pase",
      line: "Sin tarjeta de crédito • Sin llamada de ventas • El plan es tuyo aunque no te inscribas",
    },
  },

  pricing: {
    title: "Tu plan te dice cuántas clases necesitas",
    subtitle:
      "Lo que cambia es que ya no adivinas: tu Plan de Vuelo recomienda la frecuencia según tu meta y el tiempo real que tienes. Sin contratos. Cancelas cuando quieras.",
    transitionLine: "El plan no se cobra. Recorrerlo contigo es lo que cuesta.",
    forkCta: "¿No sabes cuál te toca? Empieza por el diagnóstico",
  },

  testimonials: {
    title: "Lo que dicen nuestros estudiantes",
    subtitle: "Historias reales de latinos que ya están hablando inglés con confianza",
  },

  finalCta: {
    title: "Tu plan ya casi está. Solo faltan 50 minutos.",
    subtitle: "Agenda tu clase de diagnóstico. Te vas con tu Plan de Vuelo escrito, te inscribas o no.",
    btnAdult: "Diagnóstico para Adultos",
    btnChild: "Diagnóstico para Niños",
    objection: {
      bold: "Aquí no compites con nadie.",
      rest: " Tu coach está frente a ti, uno a uno, y va a tu ritmo — no al del que va más rápido ni al del que se queda atrás.",
    },
  },

  footer: {
    tagline: "Coaches latinos bilingües. Un plan de inglés hecho para ti.",
    quickLinks: "Enlaces",
    linkHowItWorks: "Cómo Funciona",
    linkPricing: "Precios",
    linkDiagnostic: "Diagnóstico Gratis",
    linkTestimonials: "Testimonios",
    contact: "Contacto",
    copyright: "© 2026 Passport to Fluency. Todos los derechos reservados.",
  },
} satisfies OfferCopy;

/* ══════════════════════════════════════════════════════════════════════ *
 *  THE SPANISH OFFER — served at /es — prose in ENGLISH
 * ══════════════════════════════════════════════════════════════════════ */

export const offerSpanish = {
  planName: "Flight Plan",
  planNameGloss: "the Spanish plan we build just for you",

  nav: {
    pricing: "Plans & Pricing",
    team: "Team",
    blog: "Blog",
    howItWorks: "How It Works",
    languageToggle: "🇺🇸 Learn English",
  },

  hero: {
    badge: "1-on-1 Spanish for English speakers",
    h1Line1: "We diagnose your",
    h1Line2: "Spanish first.",
    sub: "One 50-minute class with your coach. Out of it comes your Flight Plan:",
    subBold: " exactly what's holding you back, and the route to fix it.",
    trust: [
      { label: "", strong: "1,000+", after: " students learning" },
      { label: "", strong: "4.9", after: " average rating" },
      { label: "", strong: "Native", after: " Latin American coaches" },
    ],
    ctaPrimary: "Book my diagnostic",
    ctaSecondary: "See what's included",
    ctaNote: "No cost · No card · 50 minutes",
  },

  positioning: {
    bold: "We don't sell Spanish classes.",
    rest: " We diagnose yours, and build the plan that gets you speaking.",
  },

  howItWorks: {
    title: "How It Works",
    subtitle: "From one 50-minute conversation to a plan written for you.",
    steps: [
      {
        title: "Book your diagnostic class",
        body: "Pick a time that works. We don\u2019t ask for a card.",
      },
      {
        title: "Tell us your goal in 3 questions",
        body: "Thirty seconds that tell your coach exactly what to prepare for you.",
      },
      {
        title: "Talk for 50 minutes with your coach",
        body: "A real class: you speak, your coach listens and finds where you're getting stuck.",
      },
      {
        title: "Get your Flight Plan",
        body: "It lands in your portal within 72 hours, written for you. It's yours, enrolled or not.",
      },
    ],
  },

  planPreview: {
    title: "What's inside your Flight Plan",
    subtitle:
      "It's not a template. It comes out of what you said in your diagnostic class — your goal, your words, your sticking points. It lands in your portal within 72 hours and it's yours, enrolled or not.",
    items: [
      {
        title: "Your real level, measured",
        body: "Where you are today in fluency, listening, vocabulary, grammar and confidence — with examples pulled from your own class.",
      },
      {
        title: "Your goal, in your words",
        body: "What you told us you want, written exactly as you said it. It's the yardstick for everything else.",
      },
      {
        title: "Your 3 focus areas",
        body: "What's actually holding you back, and why each one matters for your goal. Not a generic list.",
      },
      {
        title: "The world your classes live in",
        body: "The subject we build your material around: your work, your travel, your art, your everyday life.",
      },
      {
        title: "Your week-by-week route",
        body: "What you work on each week, with a concrete win you check off when you get there.",
      },
      {
        title: "How many classes, and for how long",
        body: "The frequency your goal actually requires, and a realistic timeline. If once a week is enough, we'll tell you.",
      },
    ],
    caption: "Example of a Flight Plan. Yours lands in your portal within 72 hours.",
    mock: {
      docTitle: "Flight Plan — Mark T.",
      updated: "Updated 2 days ago",
      levelsLabel: "Your level today",
      levels: [
        { label: "Fluency", value: 50 },
        { label: "Listening", value: 70 },
        { label: "Vocabulary", value: 60 },
        { label: "Grammar", value: 40 },
        { label: "Confidence", value: 40 },
      ],
      goalLabel: "Your goal",
      goalQuote: "I want to order dinner for the whole table in Bogotá without switching to English.",
      focusLabel: "Your focus areas",
      focusChips: [
        { chip: "Preterite vs. imperfect", why: "You need it to tell any story" },
        { chip: "Por / para", why: "It shows up in every request" },
        { chip: "Listening at speed", why: "Waiters don't slow down" },
      ],
      weeksLabel: "Your route",
      weeks: [
        { week: "Week 1", focus: "Ordering basics" },
        { week: "Week 2", focus: "Asking questions" },
        { week: "Week 3", focus: "Handling the unexpected" },
        { week: "Week 4", focus: "The whole table" },
      ],
      recommendation: "Recommendation: 2 classes per week for 4 months.",
    },
  },

  whyUs: {
    title: "Why choose Passport to Fluency?",
    bullets: [
      {
        title: "A native speaker who also crossed the bridge",
        body: "Your coach is a native Spanish speaker from Colombia or Venezuela who learned English as an adult. So they can explain it to you in English the moment you need it — and they know exactly which parts trip up an English speaker, because they made the same crossing in the other direction.",
      },
      {
        title: "The plan fits your schedule",
        body: "Book your sessions whenever you want, even 15 minutes ahead. Available 24/7 to fit around a busy life.",
      },
      {
        title: "Your plan is not a template",
        body: "It comes out of the diagnostic: your goal, your measured level, and what's holding you back. If your world is art, your material is art. If it's travel, it's travel.",
      },
      {
        title: "Progress you can actually see",
        body: "We re-measure the same five skills at class 4, 8 and 12. You watch the same bars move — not a feeling.",
      },
    ],
    card: {
      title: "Start with the diagnostic",
      subtitle: "Pick the program that fits you",
      tiles: [
        {
          title: "Diagnostic for Adults",
          body: "Work, travel, family or everyday life",
          href: "#diagnostic",
          accent: "orange" as const,
        },
        {
          title: "Diagnostic for Kids",
          body: "Ages 5 to 17, with the plan for parents",
          href: "/es/children",
          accent: "orange" as const,
        },
        {
          title: "Spanish for Business",
          body: "Programs for corporate teams",
          href: "/es/business",
          accent: "blue" as const,
        },
      ],
    },
  },

  diagnostic: {
    title: "Book Your Diagnostic Class",
    subtitle:
      "50 minutes with a native Spanish coach who learned English the hard way too. Whether or not you continue with us, you leave with your plan.",
    cards: [
      {
        title: "Diagnostic for Adults",
        body: "For work, travel, family, or everyday life. You leave with your goal in writing and the route to get there.",
      },
      {
        title: "Diagnostic for Kids (5-17)",
        body: "We play, we talk, and we measure where they really are. The plan goes to you, the parents, with exactly what to reinforce.",
      },
    ],
    risk: {
      badge: "You keep the plan either way",
      line: "No credit card • No sales call • The plan is yours even if you don't enroll",
    },
  },

  pricing: {
    title: "Your plan tells you how many classes you need",
    subtitle:
      "What changes is that you're no longer guessing: your Flight Plan recommends the frequency based on your goal and the time you actually have. No contracts. Cancel anytime.",
    transitionLine: "The plan isn\u2019t what you pay for. Walking it with you is.",
    forkCta: "Not sure which one is yours? Start with the diagnostic",
  },

  testimonials: {
    title: "What our students say",
    subtitle: "Real stories from English speakers who are already speaking Spanish with confidence",
  },

  finalCta: {
    title: "Your plan is almost written. It just needs 50 minutes.",
    subtitle: "Book your diagnostic class. You leave with your Flight Plan in writing, enrolled or not.",
    btnAdult: "Diagnostic for Adults",
    btnChild: "Diagnostic for Kids",
    objection: {
      bold: "There's nobody here to keep up with.",
      rest: " Your coach is face to face with you, one on one, moving at your pace — not the pace of whoever's fastest in the room.",
    },
  },

  footer: {
    tagline: "Native Latin American coaches. A Spanish plan built for you.",
    quickLinks: "Links",
    linkHowItWorks: "How It Works",
    linkPricing: "Pricing",
    linkDiagnostic: "Free Diagnostic",
    linkTestimonials: "Testimonials",
    contact: "Contact",
    copyright: "© 2026 Passport to Fluency. All rights reserved.",
  },
} satisfies OfferCopy;
