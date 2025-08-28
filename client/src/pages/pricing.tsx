import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import NavigationDropdown from "@/components/navigation-dropdown";
import HighLevelCalendar from "@/components/highlevel-calendar";
import passportLogo from "@assets/a1c5a1_9514ede9e3124d7a9adf78f5dcf07f28~mv2_1755803448396.png";
import { Link } from "wouter";

interface PricingProps {
  language: 'en' | 'es'; // en = Spanish site, es = English site
}

export default function Pricing({ language }: PricingProps) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarType, setCalendarType] = useState<'adult' | 'child'>('adult');

  const handleBookingClick = (type: 'adult' | 'child') => {
    setCalendarType(type);
    setShowCalendar(true);
  };

  const content = language === 'en' ? {
    // Spanish site content (English speakers learning Spanish)
    title: "Find the Perfect Plan to Speak Spanish Confidently",
    subtitle: "Personalized 1-on-1 coaching with native Latin American instructors. No contracts or fine print. Cancel anytime.",
    plan1: {
      title: "1 Class per Week",
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
      description: "Best for fast improvement and consistent conversation practice"
    },
    plan3: {
      title: "3 Classes per Week",
      description: "For serious learners who want maximum results and cultural immersion"
    },
    cta: "Get Started",
    nav: {
      home: "Home",
      pricing: "Plans & Pricing",
      children: "Spanish for Children",
      business: "Business Programs",
      team: "Team",
      blog: "Blog"
    }
  } : {
    // English site content (Spanish speakers learning English)
    title: "Encuentra el Plan Perfecto para Hablar Inglés con Confianza",
    subtitle: "Clases personalizadas 1-a-1 con instructores nativos americanos. Sin contratos ni letras pequeñas. Cancela cuando quieras.",
    plan1: {
      title: "1 Clase por Semana",
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
      description: "Ideal para mejora rápida y práctica constante de conversación"
    },
    plan3: {
      title: "3 Clases por Semana", 
      description: "Para estudiantes serios que quieren máximos resultados e inmersión cultural"
    },
    cta: "Comenzar",
    nav: {
      home: "Inicio",
      pricing: "Planes y Precios",
      children: "Inglés para Niños",
      business: "Programas Empresariales", 
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
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {content.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {content.subtitle}
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {/* Plan 1 */}
            <Card className="border-2 hover:border-passport-orange transition-colors">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{content.plan1.title}</h3>
                <div className="text-3xl font-bold text-passport-orange mb-2">$119.96</div>
                <div className="text-gray-600 mb-1">per month</div>
                <div className="text-sm text-gray-500 mb-6">$29.99 per class</div>
                <p className="text-sm text-gray-600 mb-6">{content.plan1.description}</p>
                <ul className="text-left space-y-2 mb-8 text-sm">
                  {content.plan1.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => handleBookingClick('adult')}
                  className="w-full bg-passport-orange hover:bg-orange-600 text-white py-2 font-semibold"
                >
                  {content.cta}
                </Button>
              </CardContent>
            </Card>

            {/* Plan 2 */}
            <Card className="border-2 hover:border-passport-orange transition-colors">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{content.plan2.title}</h3>
                <div className="text-3xl font-bold text-passport-orange mb-2">$219.99</div>
                <div className="text-gray-600 mb-1">per month</div>
                <div className="text-sm text-gray-500 mb-6">$27.50 per class</div>
                <p className="text-sm text-gray-600 mb-6">{content.plan2.description}</p>
                <ul className="text-left space-y-2 mb-8 text-sm">
                  {content.plan1.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature.replace('1 class', '2 classes').replace('4 per month', '8 per month')}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => handleBookingClick('adult')}
                  className="w-full bg-passport-orange hover:bg-orange-600 text-white py-2 font-semibold"
                >
                  Choose This Plan
                </Button>
              </CardContent>
            </Card>

            {/* Plan 3 */}
            <Card className="border-2 border-passport-blue bg-blue-50 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-passport-blue text-white px-3 py-1 rounded-full text-xs font-semibold">
                  MOST POPULAR
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{content.plan3.title}</h3>
                <div className="text-3xl font-bold text-passport-blue mb-2">$299.99</div>
                <div className="text-gray-600 mb-1">per month</div>
                <div className="text-sm text-gray-500 mb-6">$24.99 per class</div>
                <p className="text-sm text-gray-600 mb-6">{content.plan3.description}</p>
                <ul className="text-left space-y-2 mb-8 text-sm">
                  {content.plan1.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature.replace('1 class', '3 classes').replace('4 per month', '12 per month')}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => handleBookingClick('adult')}
                  className="w-full bg-passport-blue hover:bg-blue-700 text-white py-2 font-semibold"
                >
                  {content.cta}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calendar Modal */}
      {showCalendar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto relative">
            <button 
              onClick={() => setShowCalendar(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            >
              ✕
            </button>
            <HighLevelCalendar 
              type={calendarType} 
              language={language}
              className="p-6"
            />
          </div>
        </div>
      )}
    </div>
  );
}