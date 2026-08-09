import { Calendar, ClipboardList, VideoIcon, FileText } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/motion";

/**
 * The four-step funnel timeline, rendered twice (horizontal on desktop, vertical
 * on mobile) from one source of steps.
 *
 * Extracted because the markup was previously inlined in BOTH offer pages at
 * BOTH breakpoints — 3 steps × 2 renders × 2 files = 12 copies of the same
 * prose. Adding the fourth step meant twelve synchronized edits. Now it's one
 * array. The gradients were identical across both pages, so no variant is
 * needed.
 */

interface Step {
  title: string;
  body: string;
}

interface Props {
  steps: Step[];
}

const ICONS = [Calendar, ClipboardList, VideoIcon, FileText];

/** Blue → cyan → orange, matching the connector line beneath. */
const STYLES = [
  { circle: "linear-gradient(135deg, #0A4A6E 0%, #1C7BB1 100%)", badge: "linear-gradient(135deg, #083344 0%, #0A4A6E 100%)", shadow: "group-hover:shadow-blue-500/50" },
  { circle: "linear-gradient(135deg, #1C7BB1 0%, #3DB5E6 100%)", badge: "linear-gradient(135deg, #155e8a 0%, #1C7BB1 100%)", shadow: "group-hover:shadow-cyan-400/50" },
  { circle: "linear-gradient(135deg, #3DB5E6 0%, #7BCFF0 100%)", badge: "linear-gradient(135deg, #1C7BB1 0%, #3DB5E6 100%)", shadow: "group-hover:shadow-sky-400/50" },
  { circle: "linear-gradient(135deg, #F59E1C 0%, #F9B949 100%)", badge: "linear-gradient(135deg, #ea580c 0%, #F59E1C 100%)", shadow: "group-hover:shadow-orange-400/50" },
];

export default function HowItWorksTimeline({ steps }: Props) {
  return (
    <>
      {/* Desktop: horizontal timeline */}
      <div className="hidden md:block max-w-6xl mx-auto">
        <div className="relative">
          <div
            className="absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2 z-0 rounded-full opacity-70"
            style={{ background: 'linear-gradient(to right, #0A4A6E 0%, #1C7BB1 50%, #F59E1C 100%)' }}
          />

          <StaggerContainer className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((step, i) => {
              const Icon = ICONS[i] ?? ICONS[ICONS.length - 1];
              const style = STYLES[i] ?? STYLES[STYLES.length - 1];
              return (
                <StaggerItem key={step.title}>
                  <div className="text-center group">
                    <div className="relative mb-8">
                      <div
                        className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto relative group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300 ${style.shadow}`}
                        style={{ background: style.circle }}
                      >
                        <Icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-200" />
                        <div
                          className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
                          style={{ background: style.badge }}
                        >
                          <span className="text-white font-bold text-sm">{i + 1}</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{step.body}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="md:hidden max-w-lg mx-auto">
        <div className="relative">
          <div
            className="absolute left-6 top-0 bottom-0 w-1 rounded-full opacity-70"
            style={{ background: 'linear-gradient(to bottom, #0A4A6E 0%, #1C7BB1 50%, #F59E1C 100%)' }}
          />

          <div className="space-y-12">
            {steps.map((step, i) => {
              const Icon = ICONS[i] ?? ICONS[ICONS.length - 1];
              const style = STYLES[i] ?? STYLES[STYLES.length - 1];
              return (
                <div key={step.title} className="flex items-start gap-6 group">
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center relative group-hover:shadow-lg transition-all duration-300 ${style.shadow}`}
                      style={{ background: style.circle }}
                    >
                      <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
                      <div
                        className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200"
                        style={{ background: style.badge }}
                      >
                        <span className="text-white font-bold text-xs">{i + 1}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
