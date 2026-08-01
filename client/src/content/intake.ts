/**
 * The qualification questions asked at booking time.
 *
 * Why these live here and not in translations.ts: the `t()` accessor there
 * returns `string` and structurally cannot return an option array.
 *
 * Why they exist at all: before this, the booking form captured name, email and
 * phone and nothing else — so the coach walked into the first class knowing
 * nothing, and the first ten minutes were spent finding out. Four questions
 * (three taps and one sentence, ~45 seconds) do three things:
 *
 *   1. The coach reads them BEFORE the class, so it feels personalized from
 *      minute one. This is the fix for the student who got excited and ghosted.
 *   2. The student writes down their own "why" — commitment.
 *   3. The plan generator has raw material even if the transcript is thin.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * VALUES ARE STABLE MACHINE CODES, NEVER LOCALIZED LABELS. The Portal renders
 * the coach briefing from codes so it can present them in the COACH's language
 * regardless of what the visitor saw. `locale` + `version` keep old rows
 * decodable after an option set changes.
 * ─────────────────────────────────────────────────────────────────────────
 */

/** Bump whenever an option set changes, so the Portal can decode old rows. */
export const INTAKE_VERSION = 1;

/** UI language, NOT the language being learned. 'es' is shown on /en. */
export type IntakeLocale = "es" | "en";
export type IntakeAudience = "adult" | "child";

export type GoalCategory = "work" | "travel" | "relocate" | "study" | "family" | "other";
export type SelfLevel = "a1" | "a2" | "b1" | "b2";
export type Blocker = "listening" | "word_recall" | "pronunciation" | "grammar" | "fear" | "unsure";

export interface IntakeAnswers {
  goalCategory: GoalCategory | "";
  /** Free text, verbatim. Quoted back in the plan and the delivery email. */
  goal: string;
  selfLevel: SelfLevel | "";
  blocker: Blocker | "";
}

export const EMPTY_INTAKE: IntakeAnswers = {
  goalCategory: "",
  goal: "",
  selfLevel: "",
  blocker: "",
};

export interface IntakeOption<T extends string> {
  value: T;
  label: string;
}

export interface IntakeCopy {
  heading: string;
  subheading: string;

  goalCategoryLabel: string;
  goalCategoryHelper: string;
  goalCategoryOptions: IntakeOption<GoalCategory>[];

  goalLabel: string;
  goalHelper: string;
  goalPlaceholder: string;

  selfLevelLabel: string;
  selfLevelHelper: string;
  selfLevelOptions: IntakeOption<SelfLevel>[];

  blockerLabel: string;
  blockerHelper: string;
  blockerOptions: IntakeOption<Blocker>[];

  optionalTag: string;
  missingHint: string;

  consentLabel: string;
  consentGuardianNote: string;
}

/* ── ES · shown on /en (Spanish speakers learning English) ─────────────── */

const ES_ADULT: IntakeCopy = {
  heading: "Para que tu coach llegue preparado",
  subheading: "30 segundos. Nadie te va a llamar a venderte nada.",

  goalCategoryLabel: "¿Para qué necesitas el inglés ahora mismo?",
  goalCategoryHelper: "Elige lo más importante. Tu coach prepara la clase con esto.",
  goalCategoryOptions: [
    { value: "work", label: "Mi trabajo o mi carrera" },
    { value: "travel", label: "Viajar" },
    { value: "relocate", label: "Vivir o mudarme a EE.UU." },
    { value: "study", label: "Estudios o un examen" },
    { value: "family", label: "Mi familia o mis hijos" },
    { value: "other", label: "Otro" },
  ],

  goalLabel: "Si en 6 meses hablaras inglés como quieres, ¿qué estarías haciendo que hoy no puedes?",
  goalHelper: 'Una frase basta. Ej.: "Liderar la reunión de los lunes sin escribir todo antes."',
  goalPlaceholder: "Escribe tu respuesta en una frase",

  selfLevelLabel: "¿Cómo te sientes hablando inglés hoy?",
  selfLevelHelper: "No es un examen. Es para que tu coach no pierda los primeros 10 minutos averiguándolo.",
  selfLevelOptions: [
    { value: "a1", label: "Entiendo algo pero casi no hablo" },
    { value: "a2", label: "Me defiendo con frases cortas" },
    { value: "b1", label: "Converso, pero me trabo y me falta vocabulario" },
    { value: "b2", label: "Hablo bien; quiero pulir y sonar natural" },
  ],

  blockerLabel: "¿Qué es lo que más se te dificulta?",
  blockerHelper: "Si no sabes, lo averiguamos en la clase.",
  blockerOptions: [
    { value: "listening", label: "Entender cuando hablan rápido" },
    { value: "word_recall", label: "Encontrar las palabras a tiempo" },
    { value: "pronunciation", label: "La pronunciación" },
    { value: "grammar", label: "La gramática" },
    { value: "fear", label: "El miedo a equivocarme" },
    { value: "unsure", label: "No estoy seguro/a" },
  ],

  optionalTag: "Opcional",
  missingHint: "Falta responder esta pregunta",

  consentLabel:
    "Acepto que la clase sea grabada y transcrita para generar mi plan personalizado.",
  consentGuardianNote: "Como acudiente, doy este permiso en nombre del menor.",
};

const ES_CHILD: IntakeCopy = {
  ...ES_ADULT,
  heading: "Para que el coach llegue preparado",
  subheading: "30 segundos. Nadie los va a llamar a venderles nada.",

  goalCategoryLabel: "¿Para qué necesita el inglés tu hijo/a?",
  goalCategoryHelper: "Elige lo más importante. El coach prepara la clase con esto.",
  goalCategoryOptions: [
    { value: "study", label: "El colegio o un examen" },
    { value: "family", label: "La familia habla inglés" },
    { value: "relocate", label: "Vamos a vivir en EE.UU." },
    { value: "travel", label: "Viajes en familia" },
    { value: "work", label: "Su futuro profesional" },
    { value: "other", label: "Otro" },
  ],

  goalLabel: "Si en 6 meses tu hijo/a hablara inglés como quieres, ¿qué estaría haciendo que hoy no puede?",
  goalHelper: 'Una frase basta. Ej.: "Hacer amigos en el campamento de verano sin que yo traduzca."',

  selfLevelLabel: "¿Cómo se siente tu hijo/a hablando inglés hoy?",
  selfLevelHelper: "No es un examen. Es para que el coach no pierda los primeros 10 minutos averiguándolo.",
  selfLevelOptions: [
    { value: "a1", label: "Entiende algo pero casi no habla" },
    { value: "a2", label: "Se defiende con frases cortas" },
    { value: "b1", label: "Conversa, pero se traba y le falta vocabulario" },
    { value: "b2", label: "Habla bien; queremos pulir y que suene natural" },
  ],

  blockerLabel: "¿Qué es lo que más se le dificulta?",
  blockerOptions: [
    { value: "listening", label: "Entender cuando hablan rápido" },
    { value: "word_recall", label: "Encontrar las palabras a tiempo" },
    { value: "pronunciation", label: "La pronunciación" },
    { value: "grammar", label: "La gramática" },
    { value: "fear", label: "Le da pena equivocarse" },
    { value: "unsure", label: "No estoy seguro/a" },
  ],
};

/* ── EN · shown on /es (English speakers learning Spanish) ─────────────── */

const EN_ADULT: IntakeCopy = {
  heading: "So your coach shows up prepared",
  subheading: "30 seconds. Nobody is going to call you to sell you anything.",

  goalCategoryLabel: "What do you need Spanish for right now?",
  goalCategoryHelper: "Pick the most important one. Your coach builds the class around it.",
  goalCategoryOptions: [
    { value: "work", label: "Work or my career" },
    { value: "travel", label: "Travel" },
    { value: "relocate", label: "Living or moving abroad" },
    { value: "study", label: "School or an exam" },
    { value: "family", label: "Family or my partner's family" },
    { value: "other", label: "Other" },
  ],

  goalLabel:
    "If you spoke Spanish the way you want six months from now, what would you be doing that you can't do today?",
  goalHelper: 'One sentence is plenty. E.g.: "Talk to my mother-in-law without my wife translating."',
  goalPlaceholder: "Answer in one sentence",

  selfLevelLabel: "How do you feel speaking Spanish today?",
  selfLevelHelper: "It's not a test. It's so your coach doesn't spend the first 10 minutes finding out.",
  selfLevelOptions: [
    { value: "a1", label: "I understand some but barely speak" },
    { value: "a2", label: "I get by in short sentences" },
    { value: "b1", label: "I can hold a conversation but I stall and hunt for words" },
    { value: "b2", label: "I speak well; I want to polish and sound natural" },
  ],

  blockerLabel: "What's hardest for you right now?",
  blockerHelper: "If you don't know, we'll find out in the class.",
  blockerOptions: [
    { value: "listening", label: "Understanding when people speak fast" },
    { value: "word_recall", label: "Finding words fast enough" },
    { value: "pronunciation", label: "Pronunciation" },
    { value: "grammar", label: "Grammar" },
    { value: "fear", label: "Being afraid of making mistakes" },
    { value: "unsure", label: "Not sure" },
  ],

  optionalTag: "Optional",
  missingHint: "This question still needs an answer",

  consentLabel: "I agree to the class being recorded and transcribed to generate my personalized plan.",
  consentGuardianNote: "As the guardian, I give this permission on behalf of the minor.",
};

const EN_CHILD: IntakeCopy = {
  ...EN_ADULT,
  heading: "So the coach shows up prepared",
  subheading: "30 seconds. Nobody is going to call you to sell you anything.",

  goalCategoryLabel: "What does your child need Spanish for?",
  goalCategoryHelper: "Pick the most important one. The coach builds the class around it.",
  goalCategoryOptions: [
    { value: "study", label: "School or an exam" },
    { value: "family", label: "Family speaks Spanish" },
    { value: "relocate", label: "We're moving abroad" },
    { value: "travel", label: "Family travel" },
    { value: "work", label: "Their future career" },
    { value: "other", label: "Other" },
  ],

  goalLabel:
    "If your child spoke Spanish the way you want six months from now, what would they be doing that they can't do today?",
  goalHelper: 'One sentence is plenty. E.g.: "Talk to their grandmother on the phone without me on the line."',

  selfLevelLabel: "How does your child feel speaking Spanish today?",
  selfLevelHelper: "It's not a test. It's so the coach doesn't spend the first 10 minutes finding out.",
  selfLevelOptions: [
    { value: "a1", label: "Understands some but barely speaks" },
    { value: "a2", label: "Gets by in short sentences" },
    { value: "b1", label: "Can hold a conversation but stalls and hunts for words" },
    { value: "b2", label: "Speaks well; we want to polish and sound natural" },
  ],

  blockerLabel: "What's hardest for them right now?",
  blockerOptions: [
    { value: "listening", label: "Understanding when people speak fast" },
    { value: "word_recall", label: "Finding words fast enough" },
    { value: "pronunciation", label: "Pronunciation" },
    { value: "grammar", label: "Grammar" },
    { value: "fear", label: "Being embarrassed to make mistakes" },
    { value: "unsure", label: "Not sure" },
  ],
};

const COPY: Record<IntakeLocale, Record<IntakeAudience, IntakeCopy>> = {
  es: { adult: ES_ADULT, child: ES_CHILD },
  en: { adult: EN_ADULT, child: EN_CHILD },
};

export function getIntakeCopy(locale: IntakeLocale, audience: IntakeAudience): IntakeCopy {
  return COPY[locale][audience];
}

/** goalCategory, goal and selfLevel are the three that determine the recommended frequency. */
export function isIntakeComplete(answers: IntakeAnswers): boolean {
  return (
    answers.goalCategory !== "" &&
    answers.goal.trim().length >= 5 &&
    answers.selfLevel !== ""
  );
}

/**
 * A pre-rendered human-readable line sent ALONGSIDE the codes.
 *
 * ~200 bytes, and it's the difference between "works the day the website ships"
 * and "blocked until the Portal maps codes to labels". It also rides through
 * the `message` field on the lead-capture fallback path, where there are no
 * columns for structured intake. Deprecatable once the Portal decodes properly.
 */
export function buildIntakeSummary(
  answers: IntakeAnswers,
  locale: IntakeLocale,
  audience: IntakeAudience,
): string {
  const copy = getIntakeCopy(locale, audience);
  const isEs = locale === "es";
  const find = <T extends string>(opts: IntakeOption<T>[], v: string) =>
    opts.find((o) => o.value === v)?.label;

  const parts: string[] = [];
  const goalLabel = find(copy.goalCategoryOptions, answers.goalCategory);
  if (goalLabel) parts.push(`${isEs ? "Meta" : "Goal"}: ${goalLabel}`);

  const levelLabel = find(copy.selfLevelOptions, answers.selfLevel);
  if (levelLabel) parts.push(`${isEs ? "Nivel" : "Level"}: ${levelLabel}`);

  const blockerLabel = find(copy.blockerOptions, answers.blocker);
  if (blockerLabel) parts.push(`${isEs ? "Bloqueo" : "Blocker"}: ${blockerLabel}`);

  const goal = answers.goal.trim();
  if (goal) parts.push(`"${goal}"`);

  return parts.join(" · ");
}
