import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { PLANS } from "@/content/plans";
import type { OfferCopy, OfferId } from "@/content/offer";

/**
 * The three tiers, rendered from `content/plans.ts`.
 *
 * Reframed from menu to prescription: each card leads with an eyebrow saying
 * which diagnosis result leads there, and the section ends with a fork back to
 * the diagnostic rather than a hard sell. The "MOST POPULAR" badge was removed
 * deliberately — a popularity signal is the most menu-like element on the page
 * and directly contradicts "your plan decides how often you need to come".
 */

interface Props {
  offerId: OfferId;
  content: OfferCopy["pricing"];
  /** Where the "not sure which one?" fork sends people. */
  diagnosticAnchor: string;
  id: string;
}

export default function PricingCards({ offerId, content, diagnosticAnchor, id }: Props) {
  const plans = PLANS[offerId];

  return (
    <section id={id} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-[1.2] tracking-tight mb-5">
              {content.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {content.subtitle}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="text-center text-xl md:text-2xl font-semibold text-gray-900 mb-8">
            {content.transitionLine}
          </p>
        </FadeIn>

        <StaggerContainer className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const isOrange = plan.accent === "orange";
            return (
              <StaggerItem key={plan.id}>
                <Card
                  className={
                    isOrange
                      ? "border-2 border-passport-orange bg-orange-50 h-full"
                      : "border-2 hover:border-passport-blue transition-colors h-full"
                  }
                >
                  <CardContent className="p-6 text-center flex flex-col h-full">
                    <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
                      {plan.eyebrow}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                    <div
                      className={`text-3xl font-bold mb-2 ${isOrange ? "text-passport-orange" : "text-passport-blue"}`}
                    >
                      {plan.monthly}
                    </div>
                    <div className="text-gray-600 mb-1">
                      {offerId === "english" ? "por mes" : "per month"}
                    </div>
                    <div className="text-sm text-gray-500 mb-6">
                      {plan.perClass} {offerId === "english" ? "por clase" : "per class"}
                    </div>
                    <p className="text-sm text-gray-600 mb-6">{plan.prescription}</p>

                    <ul className="text-left space-y-2 mb-8 text-sm flex-1">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      onClick={() => window.open(plan.stripeUrl, "_blank")}
                      className={`w-full text-white py-2 font-semibold ${
                        isOrange
                          ? "bg-passport-orange hover:bg-orange-600"
                          : "bg-passport-blue hover:bg-blue-700"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Turns the pricing section from an exit into a re-entry into the funnel. */}
        <div className="text-center mt-8">
          <a
            href={`#${diagnosticAnchor}`}
            className="inline-flex items-center text-passport-blue hover:text-passport-orange font-semibold transition-colors"
          >
            {content.forkCta}
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
