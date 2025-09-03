import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Building, Star } from "lucide-react";
import NavigationDropdown from "@/components/navigation-dropdown";
import HighLevelCalendar from "@/components/highlevel-calendar";
import passportLogo from "@assets/a1c5a1_9514ede9e3124d7a9adf78f5dcf07f28~mv2_1755803448396.png";
import briefcaseIcon from "@assets/generated_images/Cartoon_business_briefcase_icon_7da42ce2.png";
import { Link } from "wouter";

interface BusinessProps {
  language: 'en' | 'es';
}

export default function Business({ language }: BusinessProps) {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleBookingClick = () => {
    setShowCalendar(true);
  };

  const content = language === 'en' ? {
    title: "Spanish for Companies Programs",
    subtitle: "Elevate your career and expand your business opportunities with professional Spanish training designed for the corporate world.",
    mainTitle: "Transform Your Business Communication",
    description: "Connect with Spanish-speaking clients, colleagues, and markets with confidence. Our business-focused curriculum covers industry-specific vocabulary and professional communication skills.",
    successStory: {
      text: "Within 3 months, I went from basic Spanish to confidently leading client meetings in Spanish. Our Hispanic client base has grown 40% since I started the program, and I attribute much of that success to being able to build authentic relationships.",
      name: "Michael Thompson",
      role: "Senior Sales Director, Austin Real Estate Group"
    },
    nav: {
      home: "Home",
      pricing: "Plans & Pricing", 
      children: "Spanish for Children",
      business: "Spanish for Companies",
      team: "Team",
      blog: "Blog"
    }
  } : {
    title: "Programas de Inglés para Empresas",
    subtitle: "Eleva tu carrera y expande tus oportunidades de negocio con capacitación profesional en inglés diseñada para el mundo corporativo.",
    mainTitle: "Transforma tu Comunicación Empresarial",
    description: "Conéctate con clientes, colegas y mercados de habla inglesa con confianza. Nuestro currículo enfocado en negocios cubre vocabulario específico de la industria y habilidades de comunicación profesional.",
    successStory: {
      text: "En 3 meses pasé de inglés básico a dirigir reuniones con clientes en inglés con confianza. Nuestra base de clientes americanos creció 40% desde que comencé el programa, y atribuyo gran parte de ese éxito a poder construir relaciones auténticas.",
      name: "Carlos Mendoza", 
      role: "Director de Ventas Senior, Grupo Inmobiliario México"
    },
    nav: {
      home: "Inicio",
      pricing: "Planes y Precios",
      children: "Inglés para Niños",
      business: "Inglés para Empresas",
      team: "Equipo",
      blog: "Blog"
    }
  };

  const industries = language === 'en' ? [
    "Healthcare & Medical", "Legal & Law", "Real Estate", "Banking & Finance",
    "Sales & Marketing", "Hospitality & Tourism", "Education", "Technology"
  ] : [
    "Salud y Medicina", "Legal y Derecho", "Bienes Raíces", "Banca y Finanzas", 
    "Ventas y Marketing", "Hospitalidad y Turismo", "Educación", "Tecnología"
  ];

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
              <Link href={`${basePath}/pricing`} className="text-gray-700 hover:text-passport-blue">
                {content.nav.pricing}
              </Link>
              <NavigationDropdown language={language} currentPath={`${basePath}/business`} />
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {content.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {content.subtitle}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Main Value Proposition */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-24 h-24 flex items-center justify-center mb-6 overflow-hidden">
                    <img 
                      src={briefcaseIcon} 
                      alt="Professional Business Briefcase" 
                      className="w-full h-full object-contain animate-slide-in-left filter brightness-75 contrast-125 sepia-50"
                      style={{filter: 'brightness(0.8) contrast(1.2) sepia(0.3) saturate(1.5) hue-rotate(20deg)'}}
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {content.mainTitle}
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    {content.description}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-passport-blue to-blue-600 rounded-xl p-6 text-white">
                  <h4 className="text-xl font-semibold mb-4">
                    {language === 'en' ? 'Popular Industries:' : 'Industrias Populares:'}
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {industries.map((industry, index) => (
                      <div key={index}>• {industry}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Program Options */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 hover:border-passport-blue transition-colors">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <Users className="w-12 h-12 text-passport-blue mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900">
                      {language === 'en' ? 'Individual Executive Coaching' : 'Coaching Ejecutivo Individual'}
                    </h3>
                  </div>
                  <Button 
                    onClick={handleBookingClick}
                    className="w-full bg-passport-blue hover:bg-blue-700 text-white"
                  >
                    {language === 'en' ? 'Start Executive Program' : 'Comenzar Programa Ejecutivo'}
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-passport-orange transition-colors">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <Building className="w-12 h-12 text-passport-orange mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900">
                      {language === 'en' ? 'Corporate Team Training' : 'Capacitación Corporativa de Equipos'}
                    </h3>
                  </div>
                  <Button 
                    onClick={handleBookingClick}
                    className="w-full bg-passport-orange hover:bg-orange-600 text-white"
                  >
                    {language === 'en' ? 'Get Corporate Quote' : 'Obtener Cotización Corporativa'}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Success Story */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === 'en' ? 'Success Stories' : 'Casos de Éxito'}
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex text-yellow-400 mb-4">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <p className="text-lg text-gray-700 mb-6 italic">
                    "{content.successStory.text}"
                  </p>
                  <div className="font-semibold text-gray-900">{content.successStory.name}</div>
                  <div className="text-sm text-gray-600">{content.successStory.role}</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    {language === 'en' ? 'Business Impact Metrics:' : 'Métricas de Impacto Empresarial:'}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Client Satisfaction' : 'Satisfacción del Cliente'}
                      </span>
                      <span className="font-semibold text-green-600">+35%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        {language === 'en' ? 'New Market Opportunities' : 'Nuevas Oportunidades'}
                      </span>
                      <span className="font-semibold text-green-600">+50%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        {language === 'en' ? 'Revenue Growth' : 'Crecimiento de Ingresos'}
                      </span>
                      <span className="font-semibold text-green-600">+40%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              type="adult" 
              language={language}
              className="p-6"
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link href={language === 'en' ? '/es' : '/en'}>
              <img src={passportLogo} alt="Passport to Fluency" className="h-10 brightness-0 invert mx-auto mb-4" />
            </Link>
            <p className="text-gray-400 mb-4">
              {language === 'en' 
                ? 'Professional Spanish training for companies and executives, 24/7.'
                : 'Capacitación profesional en inglés para empresas y ejecutivos, 24/7.'
              }
            </p>
            <div className="text-center text-gray-400">
              <p>&copy; 2025 Passport2Fluency. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}