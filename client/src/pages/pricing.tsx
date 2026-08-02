import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import NavigationDropdown from "@/components/navigation-dropdown";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { analytics } from "@/lib/analytics";
import passportLogo from "@assets/a1c5a1_9514ede9e3124d7a9adf78f5dcf07f28~mv2_1755803448396.png";
import { Link } from "wouter";

interface PricingProps {
  language: 'en' | 'es'; // en = Spanish site, es = English site
}

export default function Pricing({ language }: PricingProps) {
  // language: 'en' = Spanish learning site (/es), 'es' = English learning site (/en)
  useSeo(
    language === 'en'
      ? {
          title: "Spanish Class Pricing & Plans | Passport to Fluency",
          description:
            "Simple, flexible pricing for 1-on-1 Spanish classes with native instructors. No contracts, cancel anytime. See plans and start with a free trial at Passport to Fluency.",
          path: "/es/pricing",
        }
      : {
          title: "Precios y Planes de Clases de Inglés | Passport to Fluency",
          description:
            "Precios simples y flexibles para clases de inglés 1-a-1 con profesores nativos. Sin contratos, cancela cuando quieras. Mira los planes y empieza con una clase gratis.",
          path: "/en/pricing",
        }
  );

  // Stripe payment links by language and plan
  const getPaymentLink = (plan: number) => {
    if (language === 'en') {
      // Spanish site payment links (English speakers learning Spanish)
      const links = [
        'https://buy.stripe.com/14AaEYa8Y4jFcUI01Ues007', // Plan 1
        'https://buy.stripe.com/aFa9AU80Q3fB9Iwg0Ses008', // Plan 2  
        'https://buy.stripe.com/4gM28sa8Yg2nbQE8yqes009'  // Plan 3
      ];
      return links[plan - 1];
    } else {
      // English site payment links (Spanish speakers learning English)
      const links = [
        'https://buy.stripe.com/fZu5kE2Gw8zV2g49Cues004', // Plan 1
        'https://buy.stripe.com/eVq28s80Qg2n2g401Ues002', // Plan 2
        'https://buy.stripe.com/00w28s2Gw3fB1c0eWOes003'  // Plan 3
      ];
      return links[plan - 1];
    }
  };

  const handlePaymentClick = (plan: number) => {
    analytics.pricingPlanClicked(`plan${plan}`, language === 'en' ? 'en' : 'es');
    window.open(getPaymentLink(plan), '_blank');
  };

  const content = language === 'en' ? {
    // Spanish site content (English speakers learning Spanish)
    title: "Find the Perfect Plan to Speak Spanish Confidently",
    subtitle: "Personalized 1-on-1 coaching with native Latin American instructors. No contracts or fine print. Cancel anytime.",
    perMonth: "per month",
    mostPopular: "MOST POPULAR",
    plan1: {
      title: "1 Class per Week",
      price: "$119.96",
      perClass: "$29.99 per class",
      description: "Perfect for maintaining steady progress with native coaches",
      features: [
        "1 class per week (4 per month)",
        "Private 1-on-1 sessions (40 min)",
        "Native Latin American instructors",
        "100% virtual - save time",
        "Flexible scheduling 24/7",
        "No contract - Cancel anytime"
      ]
    },
    plan2: {
      title: "2 Classes per Week",
      price: "$219.99",
      perClass: "$27.50 per class",
      description: "Best for fast improvement and consistent conversation practice",
      features: [
        "2 classes per week (8 per month)",
        "Private 1-on-1 sessions (40 min)",
        "Native Latin American instructors",
        "100% virtual - save time",
        "Flexible scheduling 24/7",
        "No contract - Cancel anytime"
      ]
    },
    plan3: {
      title: "3 Classes per Week",
      price: "$299.99",
      perClass: "$24.99 per class",
      description: "For serious learners who want maximum results and cultural immersion",
      features: [
        "3 classes per week (12 per month)",
        "Private 1-on-1 sessions (40 min)",
        "Native Latin American instructors",
        "100% virtual - save time",
        "Flexible scheduling 24/7",
        "No contract - Cancel anytime"
      ]
    },
    cta: "Get Started",
    nav: {
      home: "Home",
      pricing: "Plans & Pricing",
      children: "Spanish for Children",
      business: "Spanish for Companies",
      team: "Team",
      blog: "Blog"
    }
  } : {
    // English site content (Spanish speakers learning English)
    title: "Encuentra el Plan Perfecto para Hablar Inglés con Confianza",
    subtitle: "Clases personalizadas 1-a-1 con instructores nativos americanos. Sin contratos ni letras pequeñas. Cancela cuando quieras.",
    perMonth: "al mes",
    mostPopular: "MÁS POPULAR",
    plan1: {
      title: "1 Clase por Semana",
      price: "$119.96",
      perClass: "$29.99 por clase",
      description: "Perfecto para mantener progreso constante con instructores nativos",
      features: [
        "1 clase por semana (4 al mes)",
        "Sesiones privadas 1-a-1 (40 min)",
        "Instructores nativos americanos",
        "100% virtual - ahorra tiempo",
        "Horarios flexibles 24/7",
        "Sin contrato - Cancela cuando quieras"
      ]
    },
    plan2: {
      title: "2 Clases por Semana",
      price: "$219.99",
      perClass: "$27.50 por clase",
      description: "Ideal para mejora rápida y práctica constante de conversación",
      features: [
        "2 clases por semana (8 al mes)",
        "Sesiones privadas 1-a-1 (40 min)",
        "Instructores nativos americanos",
        "100% virtual - ahorra tiempo",
        "Horarios flexibles 24/7",
        "Sin contrato - Cancela cuando quieras"
      ]
    },
    plan3: {
      title: "3 Clases por Semana",
      price: "$299.99",
      perClass: "$24.99 por clase",
      description: "Para estudiantes serios que quieren máximos resultados e inmersión cultural",
      features: [
        "3 clases por semana (12 al mes)",
        "Sesiones privadas 1-a-1 (40 min)",
        "Instructores nativos americanos",
        "100% virtual - ahorra tiempo",
        "Horarios flexibles 24/7",
        "Sin contrato - Cancela cuando quieras"
      ]
    },
    cta: "Comenzar",
    nav: {
      home: "Inicio",
      pricing: "Planes y Precios",
      children: "Inglés para Niños",
      business: "Inglés para Empresas",
      team: "Equipo",
      blog: "Blog"
    }
  };

  const basePath = language === 'en' ? '/es' : '/en';

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
                {content.nav.home}
              </Link>
              <Link href={`${basePath}/pricing`} className="text-passport-blue font-semibold">
                {content.nav.pricing}
              </Link>
              <NavigationDropdown language={language} currentPath={`${basePath}/pricing`} />
              <Link href={`${basePath}/team`} className="text-gray-700 hover:text-passport-blue">
                {content.nav.team}
              </Link>
              <Link href={`${basePath}/blog`} className="text-gray-700 hover:text-passport-blue">
                {content.nav.blog}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {content.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                {content.subtitle}
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 items-stretch">
            {/* Plan 1 */}
            <StaggerItem>
            <Card className="border-2 hover:border-passport-orange transition-colors flex flex-col">
              <CardContent className="p-6 text-center flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{content.plan1.title}</h3>
                <div className="text-3xl font-bold text-passport-orange mb-2">{content.plan1.price}</div>
                <div className="text-gray-600 mb-1">{content.perMonth}</div>
                <div className="text-sm text-gray-500 mb-6">{content.plan1.perClass}</div>
                <p className="text-sm text-gray-600 mb-6">{content.plan1.description}</p>
                <ul className="text-left space-y-2 flex-grow text-sm mb-8">
                  {content.plan1.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => handlePaymentClick(1)}
                  className="w-full bg-passport-orange hover:bg-orange-600 text-white py-2 font-semibold"
                >
                  {content.cta}
                </Button>
              </CardContent>
            </Card>
            </StaggerItem>

            {/* Plan 2 */}
            <StaggerItem>
            <Card className="border-2 hover:border-passport-orange transition-colors flex flex-col">
              <CardContent className="p-6 text-center flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{content.plan2.title}</h3>
                <div className="text-3xl font-bold text-passport-orange mb-2">{content.plan2.price}</div>
                <div className="text-gray-600 mb-1">{content.perMonth}</div>
                <div className="text-sm text-gray-500 mb-6">{content.plan2.perClass}</div>
                <p className="text-sm text-gray-600 mb-6">{content.plan2.description}</p>
                <ul className="text-left space-y-2 flex-grow text-sm mb-8">
                  {content.plan2.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => handlePaymentClick(2)}
                  className="w-full bg-passport-orange hover:bg-orange-600 text-white py-2 font-semibold"
                >
                  {content.cta}
                </Button>
              </CardContent>
            </Card>
            </StaggerItem>

            {/* Plan 3 */}
            <StaggerItem>
            <Card className="border-2 border-passport-blue bg-blue-50 relative flex flex-col">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-passport-blue text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {content.mostPopular}
                </div>
              </div>
              <CardContent className="p-6 text-center flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{content.plan3.title}</h3>
                <div className="text-3xl font-bold text-passport-blue mb-2">{content.plan3.price}</div>
                <div className="text-gray-600 mb-1">{content.perMonth}</div>
                <div className="text-sm text-gray-500 mb-6">{content.plan3.perClass}</div>
                <p className="text-sm text-gray-600 mb-6">{content.plan3.description}</p>
                <ul className="text-left space-y-2 flex-grow text-sm mb-8">
                  {content.plan3.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => handlePaymentClick(3)}
                  className="w-full bg-passport-blue hover:bg-blue-700 text-white py-2 font-semibold"
                >
                  {content.cta}
                </Button>
              </CardContent>
            </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

    </div>
  );
}