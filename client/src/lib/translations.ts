/**
 * Small string dictionary for the booking modal and its CTA card.
 *
 * SCOPE: this file is deliberately tiny. Marketing prose lives in
 * `client/src/content/offer.ts`; the intake questions live in
 * `client/src/content/intake.ts` (they need option arrays, which the `t()`
 * accessor below structurally cannot return).
 *
 * Everything else that used to be here — hero, features, programs, pricing,
 * teachers, testimonials, cta, nav, footer — was unreachable dead code holding
 * stale euro prices, and was removed.
 *
 * LANGUAGE CONVENTION (inverted, and it bites): the key is the language of the
 * UI COPY, not the language being taught.
 *   - `es` → Spanish UI, shown on /en (Spanish speakers learning English)
 *   - `en` → English UI, shown on /es (English speakers learning Spanish)
 */

export interface Translation {
  [key: string]: string | Translation;
}

export const translations = {
  es: {
    booking: {
      heading: "Agenda tu Clase de Diagnóstico",
      subheading: "50 minutos con tu coach. Después te mandamos tu plan.",
      selectClassType: "¿Qué diagnóstico quieres?",
      confirmBooking: "Agendar mi diagnóstico",
      classTypes: {
        english_adults: "Inglés para adultos",
        english_children: "Inglés para niños",
        spanish_adults: "Español para adultos",
        spanish_children: "Español para niños",
      },
    },
    form: {
      name: "Nombre completo",
      email: "Correo electrónico",
      phone: "Teléfono",
      message: "Mensaje (opcional)",
      submit: "Agendar mi diagnóstico",
    },
  },
  en: {
    booking: {
      heading: "Book Your Diagnostic Class",
      subheading: "50 minutes with your coach. Then we send you your plan.",
      selectClassType: "Which diagnostic do you want?",
      confirmBooking: "Book my diagnostic",
      classTypes: {
        english_adults: "English for adults",
        english_children: "English for kids",
        spanish_adults: "Spanish for adults",
        spanish_children: "Spanish for kids",
      },
    },
    form: {
      name: "Full name",
      email: "Email address",
      phone: "Phone number",
      message: "Message (optional)",
      submit: "Book my diagnostic",
    },
  },
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
