/**
 * Single source of truth for the three subscription tiers.
 *
 * Before this file the same three plans were defined FOUR times — in
 * pricing.tsx, english-site.tsx, spanish-site.tsx and (in stale euros) in
 * translations.ts — and they disagreed with each other. Prices and Stripe URLs
 * below were copied verbatim from the live pages; nothing was repriced.
 *
 * Positioning note: the tier is framed as a PRESCRIPTION, not a menu item. Each
 * card leads with what kind of diagnosis leads there, because the Flight Plan
 * recommends the frequency. That is why there is no "most popular" badge — a
 * popularity signal directly contradicts "your plan decides".
 */

import type { OfferId } from "./offer";

export interface Plan {
  id: "starter" | "momentum" | "fluency";
  /** Branded name — almost certainly the product name in Stripe. Do not rename lightly. */
  name: string;
  /** Small uppercase line above the name: which diagnosis result leads here. */
  eyebrow: string;
  monthly: string;
  perClass: string;
  cadence: string;
  /** The positioning sentence. Ties the tier to a diagnosis, not to a quantity. */
  prescription: string;
  features: string[];
  stripeUrl: string;
  cta: string;
  /** The top tier gets the orange treatment; the others are neutral. */
  accent: "blue" | "orange";
}

export const PLANS: Record<OfferId, Plan[]> = {
  english: [
    {
      id: "starter",
      name: "Starter Flow",
      eyebrow: "Cuando tu plan dice: constancia",
      monthly: "$119.96",
      perClass: "$29.99",
      cadence: "1 sesión por semana (4 al mes)",
      prescription:
        "Tu plan recomienda esta frecuencia cuando tu meta es a largo plazo y lo que necesitas es no perder el ritmo.",
      features: [
        "1 sesión por semana (4 al mes)",
        "Sesiones privadas 1-a-1 (50 min)",
        "Coach latino bilingüe asignado a ti",
        "Clases construidas sobre tu Plan de Vuelo",
        "100% virtual — ahorra tiempo",
        "Horarios flexibles 24/7",
        "Sin contrato — cancela cuando quieras",
      ],
      stripeUrl: "https://buy.stripe.com/fZu5kE2Gw8zV2g49Cues004",
      cta: "Empezar Ahora",
      accent: "blue",
    },
    {
      id: "momentum",
      name: "Momentum Plan",
      eyebrow: "Cuando tu plan dice: hay una fecha",
      monthly: "$219.99",
      perClass: "$27.50",
      cadence: "2 sesiones por semana (8 al mes)",
      prescription:
        "Tu plan recomienda esta frecuencia cuando tienes una fecha — una entrevista, un viaje, un ascenso — y hay brechas concretas que cerrar.",
      features: [
        "2 sesiones por semana (8 al mes)",
        "Sesiones privadas 1-a-1 (50 min)",
        "Coach latino bilingüe asignado a ti",
        "Clases construidas sobre tu Plan de Vuelo",
        "Horarios flexibles",
        "Soporte de tu coach entre clases",
        "Sin contrato — cancela cuando quieras",
      ],
      stripeUrl: "https://buy.stripe.com/eVq28s80Qg2n2g401Ues002",
      cta: "Elegir Este Plan",
      accent: "blue",
    },
    {
      id: "fluency",
      name: "Fluency Boost",
      eyebrow: "Cuando tu plan dice: inmersión",
      monthly: "$299.99",
      // 299.99 / 12 = 24.9992. The live cards said $24.99 (truncated); $25.00 is the honest round.
      perClass: "$25.00",
      cadence: "3 sesiones por semana (12 al mes)",
      prescription:
        "Tu plan recomienda esta frecuencia cuando la distancia entre donde estás y donde necesitas estar es grande, o el plazo es corto.",
      features: [
        "3 sesiones por semana (12 al mes)",
        "Sesiones privadas 1-a-1 (50 min)",
        "Coach latino bilingüe asignado a ti",
        "Clases construidas sobre tu Plan de Vuelo",
        "Horarios flexibles",
        "Soporte de tu coach entre clases",
        "Sin contrato — cancela cuando quieras",
      ],
      stripeUrl: "https://buy.stripe.com/00w28s2Gw3fB1c0eWOes003",
      cta: "Empezar Ahora",
      accent: "orange",
    },
  ],

  spanish: [
    {
      id: "starter",
      name: "Starter Flow",
      eyebrow: "When your plan says: consistency",
      monthly: "$119.96",
      perClass: "$29.99",
      cadence: "1 session per week (4 per month)",
      prescription:
        "Your plan recommends this frequency when your goal is long-term and what you need is to not lose momentum.",
      features: [
        "1 session per week (4 per month)",
        "Private 1-on-1 sessions (50 min)",
        "A native Spanish coach assigned to you",
        "Classes built on your Flight Plan",
        "100% virtual — save time",
        "Flexible scheduling 24/7",
        "No contract — cancel anytime",
      ],
      stripeUrl: "https://buy.stripe.com/14AaEYa8Y4jFcUI01Ues007",
      cta: "Start Now",
      accent: "orange",
    },
    {
      id: "momentum",
      name: "Momentum Plan",
      eyebrow: "When your plan says: there's a deadline",
      monthly: "$219.99",
      perClass: "$27.50",
      cadence: "2 sessions per week (8 per month)",
      prescription:
        "Your plan recommends this frequency when you have a date — an interview, a trip, a move — and specific gaps to close.",
      features: [
        "2 sessions per week (8 per month)",
        "Private 1-on-1 sessions (50 min)",
        "A native Spanish coach assigned to you",
        "Classes built on your Flight Plan",
        "Flexible scheduling",
        "Coach support between classes",
        "No contract — cancel anytime",
      ],
      stripeUrl: "https://buy.stripe.com/aFa9AU80Q3fB9Iwg0Ses008",
      cta: "Choose This Plan",
      accent: "orange",
    },
    {
      id: "fluency",
      name: "Fluency Boost",
      eyebrow: "When your plan says: immersion",
      monthly: "$299.99",
      perClass: "$25.00",
      cadence: "3 sessions per week (12 per month)",
      prescription:
        "Your plan recommends this frequency when the distance between where you are and where you need to be is big, or the deadline is short.",
      features: [
        "3 sessions per week (12 per month)",
        "Private 1-on-1 sessions (50 min)",
        "A native Spanish coach assigned to you",
        "Classes built on your Flight Plan",
        "Flexible scheduling",
        "Coach support between classes",
        "No contract — cancel anytime",
      ],
      stripeUrl: "https://buy.stripe.com/4gM28sa8Yg2nbQE8yqes009",
      cta: "Start Now",
      accent: "blue",
    },
  ],
};
