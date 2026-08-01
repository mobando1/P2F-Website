import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import NavigationDropdown from "@/components/navigation-dropdown";
import PricingCards from "@/components/pricing-cards";
import { offerEnglish, offerSpanish } from "@/content/offer";
import { FadeIn } from "@/components/motion";
import passportLogo from "@assets/a1c5a1_9514ede9e3124d7a9adf78f5dcf07f28~mv2_1755803448396.png";
import { Link } from "wouter";

interface PricingProps {
  language: 'en' | 'es'; // en = Spanish site, es = English site
}

/**
 * The standalone /pricing page.
 *
 * It used to carry its own copy of the three tiers — prices, features and
 * hardcoded Stripe links — which was one of FOUR disagreeing definitions in the
 * codebase. It now renders the same `<PricingCards>` the offer pages do, from
 * `content/plans.ts`, so a price can only ever be changed in one place.
 */
export default function Pricing({ language }: PricingProps) {
  // `language` is the UI language: 'en' is the Spanish offer, 'es' is English.
  const isSpanishOffer = language === 'en';
  const offerId = isSpanishOffer ? 'spanish' : 'english';
  const c = isSpanishOffer ? offerSpanish : offerEnglish;

  const basePath = isSpanishOffer ? '/es' : '/en';
  const diagnosticAnchor = isSpanishOffer ? 'diagnostic' : 'diagnostico';

  const nav = isSpanishOffer
    ? { home: "Home", pricing: "Plans & Pricing", team: "Team", blog: "Blog" }
    : { home: "Inicio", pricing: "Planes y Precios", team: "Equipo", blog: "Blog" };

  const bookCta = isSpanishOffer ? "Book my free diagnostic" : "Agendar mi diagnóstico gratis";

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href={basePath}>
                <img src={passportLogo} alt="Passport to Fluency" className="h-10 w-auto" />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href={basePath} className="text-gray-700 hover:text-passport-blue">
                {nav.home}
              </Link>
              <Link href={`${basePath}/pricing`} className="text-passport-blue font-semibold">
                {nav.pricing}
              </Link>
              <NavigationDropdown language={language} currentPath={`${basePath}/pricing`} />
              <Link href={`${basePath}/team`} className="text-gray-700 hover:text-passport-blue">
                {nav.team}
              </Link>
              <Link href={`${basePath}/blog`} className="text-gray-700 hover:text-passport-blue">
                {nav.blog}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <PricingCards
        offerId={offerId}
        content={c.pricing}
        // No diagnostic section on this page — send them to the one that has it.
        diagnosticAnchor={diagnosticAnchor}
        id="planes-precios"
      />

      {/* The plan comes before the price, so close by sending them to the diagnostic. */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {c.finalCta.title}
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">{c.finalCta.subtitle}</p>
            <Link href={`${basePath}#${diagnosticAnchor}`}>
              <Button
                size="lg"
                className={`text-white px-8 py-4 text-lg font-semibold ${
                  isSpanishOffer
                    ? "bg-passport-orange hover:bg-orange-600"
                    : "bg-passport-blue hover:bg-blue-700"
                }`}
              >
                {bookCta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
