import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NavigationDropdown from "@/components/navigation-dropdown";
import passportLogo from "@assets/a1c5a1_9514ede9e3124d7a9adf78f5dcf07f28~mv2_1755803448396.png";

// Importar imágenes corporativas
import passportImage from "@assets/Corporate Image Sept 2025 (6)_1756765151457.png";
import airplaneImage from "@assets/Corporate Image Sept 2025 (7)_1756765151458.png";
import airplaneCleanImage from "@assets/Corporate Image Sept 2025 (8)_1756765151458.png";
import laptopImage from "@assets/Corporate Image Sept 2025 (9)_1756765151458.png";
import worldImage from "@assets/Corporate Image Sept 2025 (10)_1756765151458.png";
import bookImage from "@assets/Corporate Image Sept 2025 (11)_1756765151459.png";
import passportVariantImage from "@assets/Corporate Image Sept 2025 (12)_1756765151459.png";
import { Link } from "wouter";
import { 
  Globe, Star, Users, Clock, ArrowRight, Calendar, 
  Headphones, VideoIcon, CheckCircle, MessageCircle,
  Award, Target, BookOpen, Zap, Play
} from "lucide-react";

interface AdultsProps {
  language: 'en' | 'es'; // en = Spanish site, es = English site
}

export default function Adults({ language }: AdultsProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Calendar URLs for adults
  const calendarUrl = language === 'en' 
    ? "https://api.leadconnectorhq.com/widget/booking/g27wbcMQU9YvigMrJfVK" // Adult Spanish calendar
    : "https://api.leadconnectorhq.com/widget/booking/Z5fJpM9ktwCxfpHAPJRh"; // Adult English calendar

  const content = language === 'en' ? {
    // Spanish site content (English speakers learning Spanish)
    title: "Spanish for Adults Program",
    subtitle: "Master Spanish with personalized 1-on-1 coaching designed specifically for adult learners",
    description: "Our adult Spanish program is designed for busy professionals, students, and anyone looking to achieve fluency through proven conversational methods with native Latin American instructors.",
    
    whyUs: "Why Choose Our Adult Spanish Program?",
    benefits: [
      {
        title: "Native Latin American Instructors",
        description: "Learn authentic Spanish from instructors from Mexico, Colombia, Argentina, and other Spanish-speaking countries",
        icon: Globe
      },
      {
        title: "Flexible Scheduling",
        description: "Book classes 24/7 that fit your busy adult schedule. Morning, afternoon, evening - you choose",
        icon: Clock
      },
      {
        title: "Professional Focus",
        description: "Business Spanish, interview preparation, and professional communication skills",
        icon: Award
      },
      {
        title: "Conversational Method",
        description: "Focus on speaking from day one. No boring grammar drills - real conversations that stick",
        icon: MessageCircle
      },
      {
        title: "Progress Tracking",
        description: "Clear milestones and progress reports to see your Spanish improvement week by week",
        icon: Target
      },
      {
        title: "Cultural Context",
        description: "Learn not just the language, but the culture, customs, and expressions that matter",
        icon: BookOpen
      }
    ],
    
    programFeatures: "What You'll Get",
    features: [
      "40-minute private sessions with native instructors",
      "Customized lesson plans based on your goals",
      "Real-world conversation practice",
      "Business Spanish and professional vocabulary",
      "Cultural insights and authentic expressions",
      "Flexible rescheduling with 24-hour notice",
      "Progress tracking and regular assessments",
      "Access to learning materials and resources"
    ],
    
    bookingTitle: "Start Your Spanish Journey Today",
    bookingSubtitle: "Book your free discovery session and see how quickly you can start speaking Spanish confidently",
    
    nav: {
      home: "Home",
      pricing: "Plans & Pricing",
      children: "Spanish for Children",
      business: "Spanish for Companies",
      adults: "Spanish for Adults",
      team: "Team",
      blog: "Blog"
    }
  } : {
    // English site content (Spanish speakers learning English)
    title: "Programa de Inglés para Adultos",
    subtitle: "Domina el inglés con coaching personalizado 1-a-1 diseñado específicamente para estudiantes adultos",
    description: "Nuestro programa de inglés para adultos está diseñado para profesionales ocupados, estudiantes y cualquier persona que busque lograr fluidez a través de métodos conversacionales probados con instructores nativos americanos.",
    
    whyUs: "¿Por Qué Elegir Nuestro Programa de Inglés para Adultos?",
    benefits: [
      {
        title: "Instructores Nativos Americanos",
        description: "Aprende inglés auténtico con instructores de Estados Unidos y Canadá",
        icon: Globe
      },
      {
        title: "Horarios Flexibles",
        description: "Agenda clases 24/7 que se adapten a tu horario de adulto ocupado. Mañana, tarde, noche - tú eliges",
        icon: Clock
      },
      {
        title: "Enfoque Profesional",
        description: "Inglés de negocios, preparación para entrevistas y habilidades de comunicación profesional",
        icon: Award
      },
      {
        title: "Método Conversacional",
        description: "Enfoque en hablar desde el primer día. Sin ejercicios de gramática aburridos - conversaciones reales que se quedan",
        icon: MessageCircle
      },
      {
        title: "Seguimiento de Progreso",
        description: "Objetivos claros y reportes de progreso para ver tu mejora en inglés semana tras semana",
        icon: Target
      },
      {
        title: "Contexto Cultural",
        description: "Aprende no solo el idioma, sino la cultura, costumbres y expresiones que importan",
        icon: BookOpen
      }
    ],
    
    programFeatures: "Lo Que Obtienes",
    features: [
      "Sesiones privadas de 40 minutos con instructores nativos",
      "Planes de lección personalizados basados en tus objetivos",
      "Práctica de conversación del mundo real",
      "Inglés de negocios y vocabulario profesional",
      "Conocimientos culturales y expresiones auténticas",
      "Reprogramación flexible con 24 horas de aviso",
      "Seguimiento de progreso y evaluaciones regulares",
      "Acceso a materiales de aprendizaje y recursos"
    ],
    
    bookingTitle: "Comienza Tu Jornada de Inglés Hoy",
    bookingSubtitle: "Agenda tu sesión de descubrimiento gratuita y ve qué tan rápido puedes empezar a hablar inglés con confianza",
    
    nav: {
      home: "Inicio",
      pricing: "Planes y Precios",
      children: "Inglés para Niños",
      business: "Inglés para Empresas",
      adults: "Inglés para Adultos",
      team: "Equipo",
      blog: "Blog"
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Simulate calendar loading
  useState(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href={language === 'en' ? '/es' : '/en'}>
              <img src={passportLogo} alt="Passport to Fluency" className="h-10" />
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href={language === 'en' ? '/es' : '/en'} className="text-gray-600 hover:text-passport-blue transition-colors">
                {content.nav.home}
              </Link>
              <Link href={language === 'en' ? '/es/pricing' : '/en/pricing'} className="text-gray-600 hover:text-passport-blue transition-colors">
                {content.nav.pricing}
              </Link>
              <NavigationDropdown language={language} />
              <Link href={language === 'en' ? '/es/team' : '/en/team'} className="text-gray-600 hover:text-passport-blue transition-colors">
                {content.nav.team}
              </Link>
              <Link href={language === 'en' ? '/es/blog' : '/en/blog'} className="text-gray-600 hover:text-passport-blue transition-colors">
                {content.nav.blog}
              </Link>
            </div>

            <div className="md:hidden">
              <NavigationDropdown language={language} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-passport-blue to-blue-700 overflow-hidden">
        {/* Corporate background elements */}
        <div className="absolute top-8 left-8 opacity-8 z-0 hidden md:block">
          <img 
            src={bookImage} 
            alt="" 
            className="w-28 h-28 object-contain transform rotate-12 rounded-3xl"
          />
        </div>
        <div className="absolute bottom-8 right-8 opacity-6 z-0 hidden lg:block">
          <img 
            src={worldImage} 
            alt="" 
            className="w-36 h-36 object-contain transform -rotate-6 rounded-3xl"
          />
        </div>
        <div className="absolute top-1/2 right-1/3 opacity-4 z-0 hidden xl:block">
          <img 
            src={airplaneCleanImage} 
            alt="" 
            className="w-32 h-32 object-contain transform rotate-45 rounded-3xl"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 mb-6">
              <Users className="w-4 h-4" />
              <span className="text-sm font-semibold">Adult Program</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {content.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              {content.subtitle}
            </p>
            
            <Button
              onClick={() => scrollToSection('booking')}
              className="bg-passport-orange hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-xl"
              size="lg"
            >
              <Play className="w-5 h-5 mr-2" />
              {language === 'en' ? 'Start Free Class' : 'Comenzar Clase Gratuita'}
            </Button>
          </div>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              {content.description}
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {content.whyUs}
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.benefits.map((benefit, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-passport-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {content.programFeatures}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {content.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Booking Section */}
      <section id="booking" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {content.bookingTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {content.bookingSubtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                {isLoading ? (
                  <div className="text-center py-16">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-passport-blue mb-4"></div>
                    <p className="text-gray-600">
                      {language === 'en' ? 'Loading calendar...' : 'Cargando calendario...'}
                    </p>
                  </div>
                ) : (
                  <div className="calendar-container">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `
                          <iframe 
                            src="${calendarUrl}" 
                            style="width: 100%; height: 1200px; border: none; border-radius: 8px;"
                            title="Book Your Free Discovery Session"
                          ></iframe>
                          <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
                        `
                      }}
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="mt-8 flex items-center justify-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-2" />
              <span>
                {language === 'en' 
                  ? '40-minute discovery session • Available 24/7 • No credit card required'
                  : 'Sesión de descubrimiento de 40 minutos • Disponible 24/7 • No se requiere tarjeta de crédito'
                }
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link href={language === 'en' ? '/es' : '/en'}>
              <img src={passportLogo} alt="Passport to Fluency" className="h-10 brightness-0 invert mx-auto mb-4" />
            </Link>
            <p className="text-gray-400 mb-4">
              {language === 'en' 
                ? 'Learn Spanish with native Latin American instructors, 24/7.'
                : 'Aprende inglés con instructores nativos americanos, 24/7.'
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