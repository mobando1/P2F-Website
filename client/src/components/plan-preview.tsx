import { CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/motion";
import { Progress } from "@/components/ui/progress";
import type { OfferCopy } from "@/content/offer";

/**
 * "What's inside your Flight Plan" — the section that makes the promise
 * believable.
 *
 * The offer is now an artifact the student receives, so the artifact has to be
 * visible before we ask for 50 minutes. This renders a live mock of the Portal
 * plan page as real DOM rather than an image: it stays crisp, it translates per
 * site, it costs nothing to update, and it needs no new assets — so nothing
 * blocks the ship on design work.
 */

interface Props {
  content: OfferCopy["planPreview"];
  accent: "blue" | "orange";
  /** Anchor id — `tu-plan` on /en, `your-plan` on /es. */
  id: string;
}

export default function PlanPreview({ content, accent, id }: Props) {
  const accentText = accent === "blue" ? "text-passport-blue" : "text-passport-orange";
  const accentBorder = accent === "blue" ? "border-passport-blue" : "border-passport-orange";
  const accentBg = accent === "blue" ? "bg-blue-50" : "bg-orange-50";
  const chipClasses =
    accent === "blue"
      ? "bg-blue-50 text-passport-blue"
      : "bg-orange-50 text-passport-orange";

  return (
    <section id={id} className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-8 md:mb-10 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {content.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600">{content.subtitle}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            {/* Mock first on mobile: the artifact should be the first thing seen. */}
            <div className="order-1 md:order-2">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden md:rotate-1">
                {/* Fake browser chrome */}
                <div className="h-9 bg-gray-100 flex items-center px-3 gap-2 border-b border-gray-200">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  <div className="flex-1 flex justify-center">
                    <span className="text-[10px] text-gray-400 bg-white rounded-full px-3 py-0.5 border border-gray-200 truncate max-w-[180px]">
                      portal.passport2fluency.com
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-5">
                  <div>
                    <h3 className={`text-lg font-bold ${accentText}`}>{content.mock.docTitle}</h3>
                    <p className="text-xs text-gray-400">{content.mock.updated}</p>
                  </div>

                  {/* Measured level */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
                      {content.mock.levelsLabel}
                    </p>
                    <div className="space-y-2">
                      {content.mock.levels.map((lv) => (
                        <div key={lv.label} className="flex items-center gap-3">
                          <span className="text-xs text-gray-600 w-24 shrink-0">{lv.label}</span>
                          <Progress value={lv.value} className="h-2 flex-1" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Their goal, quoted back */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
                      {content.mock.goalLabel}
                    </p>
                    <blockquote className={`border-l-4 ${accentBorder} ${accentBg} p-3 text-sm text-gray-700 italic rounded-r`}>
                      "{content.mock.goalQuote}"
                    </blockquote>
                  </div>

                  {/* Focus areas */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
                      {content.mock.focusLabel}
                    </p>
                    <div className="space-y-1.5">
                      {content.mock.focusChips.map((f) => (
                        <div key={f.chip} className="flex items-baseline gap-2 flex-wrap">
                          <span className={`rounded-full ${chipClasses} text-xs px-3 py-1 font-medium shrink-0`}>
                            {f.chip}
                          </span>
                          <span className="text-xs text-gray-500">{f.why}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Week-by-week route */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
                      {content.mock.weeksLabel}
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs">
                        <tbody>
                          {content.mock.weeks.map((w) => (
                            <tr key={w.week} className="border-b border-gray-100 last:border-0">
                              <td className="py-1.5 pr-4 text-gray-500 whitespace-nowrap">{w.week}</td>
                              <td className="py-1.5 text-gray-700">{w.focus}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* The prescription — this is what reframes pricing */}
                <div className="bg-gray-50 border-t border-gray-200 p-3 text-sm font-semibold text-gray-800 text-center">
                  {content.mock.recommendation}
                </div>
              </div>

              <p className="text-xs text-gray-400 text-center mt-3">{content.caption}</p>
            </div>

            {/* What's in it */}
            <ul className="order-2 md:order-1 space-y-5">
              {content.items.map((item) => (
                <li key={item.title} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
