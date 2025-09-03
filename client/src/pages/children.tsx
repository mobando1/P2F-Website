import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star } from "lucide-react";
import NavigationDropdown from "@/components/navigation-dropdown";
import HighLevelCalendar from "@/components/highlevel-calendar";
import passportLogo from "@assets/a1c5a1_9514ede9e3124d7a9adf78f5dcf07f28~mv2_1755803448396.png";
import calendarIcon from "@assets/generated_images/Calendar_icon_white_background_1a7f669e.png";
import { Link } from "wouter";

interface ChildrenProps {
  language: 'en' | 'es'; // en = Spanish site, es = English site
}

export default function Children({ language }: ChildrenProps) {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleBookingClick = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const content = language === 'en' ? {
    // Spanish site content
    title: "Spanish for Children",
    subtitle: "Spark your child's love for Spanish with fun, interactive sessions designed specifically for young learners aged 5-17.",
    mainTitle: "Fun, Interactive Learning That Works",
    description: "Our experienced coaches provide personalized attention and engaging activities to build essential language skills in a vibrant learning environment.",
    features: [
      {
        title: "Age-Appropriate Curriculum",
        description: "Specially designed lessons that match your child's developmental stage and learning style."
      },
      {
        title: "Interactive Games & Activities", 
        description: "Learning through play with songs, stories, and cultural activities that keep kids engaged."
      },
      {
        title: "Patient Native Instructors",
        description: "Experienced teachers who specialize in working with children and creating a supportive environment."
      },
      {
        title: "Cultural Connection",
        description: "Develop appreciation for Latin American cultures while building language skills and confidence."
      }
    ],
    cta: "Book Free Trial for Kids",
    testimonial: {
      text: "I'm incredibly thrilled with the language learning journey my twins have embarked on with Passport to Fluency. The interactive lessons, engaging activities, and culturally relevant content have truly captivated my kids' interest and enthusiasm. They are not only learning the language but also developing a deep appreciation for their cultural roots.",
      name: "Rebecca Unrath",
      role: "Parent of twins, New Jersey"
    },
    highlight: "Perfect for Ages 5-17",
    highlightText: "Same affordable pricing as adult classes • Specialized teaching methods for children • Fun and educational approach",
    nav: {
      home: "Home",
      pricing: "Plans & Pricing",
      children: "Spanish for Children",
      business: "Spanish for Companies",
      team: "Team",
      blog: "Blog"
    }
  } : {
    // English site content
    title: "Inglés para Niños",
    subtitle: "Despierta el amor por el inglés en tu hijo con sesiones divertidas e interactivas diseñadas específicamente para jóvenes estudiantes de 5-17 años.",
    mainTitle: "Aprendizaje Divertido e Interactivo que Funciona",
    description: "Nuestros instructores experimentados brindan atención personalizada y actividades atractivas para desarrollar habilidades lingüísticas esenciales en un ambiente de aprendizaje vibrante.",
    features: [
      {
        title: "Plan de Estudios Apropiado para la Edad",
        description: "Lecciones especialmente diseñadas que se adaptan al nivel de desarrollo y estilo de aprendizaje de tu hijo."
      },
      {
        title: "Juegos y Actividades Interactivas",
        description: "Aprendizaje a través del juego con canciones, cuentos y actividades culturales que mantienen a los niños comprometidos."
      },
      {
        title: "Instructores Nativos Pacientes", 
        description: "Maestros experimentados que se especializan en trabajar con niños y crear un ambiente de apoyo."
      },
      {
        title: "Conexión Cultural",
        description: "Desarrolla aprecio por la cultura americana mientras construye habilidades lingüísticas y confianza."
      }
    ],
    cta: "Reservar Clase Gratis para Niños",
    testimonial: {
      text: "Mis hijos estudian en una escuela bilingüe y yo no podía ayudarlos con sus tareas en inglés. Después de 6 meses con Passport2Fluency, ahora puedo ayudarlos y hasta leer cuentos en inglés. Las lecciones interactivas y actividades atractivas han capturado verdaderamente el interés y entusiasmo de mis hijos.",
      name: "Ana Rodríguez",
      role: "Madre de familia, Los Angeles"
    },
    highlight: "Perfecto para Edades 5-17",
    highlightText: "Mismo precio accesible que las clases para adultos • Métodos de enseñanza especializados para niños • Enfoque divertido y educativo",
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
  const colorScheme = language === 'en' ? 'orange' : 'blue';

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
              <NavigationDropdown language={language} currentPath={`${basePath}/children`} />
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
      <section className={`py-20 bg-gradient-to-b from-${colorScheme === 'orange' ? 'orange' : 'blue'}-50 to-white`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {content.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {content.subtitle}
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="mb-8">
                <div className={`w-16 h-16 bg-passport-${colorScheme === 'orange' ? 'orange' : 'blue'} rounded-full flex items-center justify-center mb-4`}>
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {content.mainTitle}
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  {content.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {content.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={handleBookingClick}
                className={`bg-passport-${colorScheme === 'orange' ? 'orange' : 'blue'} hover:bg-${colorScheme === 'orange' ? 'orange' : 'blue'}-600 text-white px-8 py-4 text-lg font-semibold`}
                size="lg"
              >
                <Star className="w-5 h-5 mr-2" />
                {content.cta}
              </Button>
            </div>

            {/* Testimonial */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-gray-700 mb-6 text-lg italic">
                "{content.testimonial.text}"
              </p>
              <div className="font-semibold text-gray-900">{content.testimonial.name}</div>
              <div className="text-sm text-gray-600">{content.testimonial.role}</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className={`bg-${colorScheme === 'orange' ? 'blue' : 'orange'}-50 border border-${colorScheme === 'orange' ? 'blue' : 'orange'}-200 rounded-lg p-6 max-w-2xl mx-auto`}>
              <div className="flex items-center justify-center mb-3">
                <Star className={`w-6 h-6 text-${colorScheme === 'orange' ? 'blue' : 'orange'}-500 mr-2`} />
                <span className={`font-semibold text-${colorScheme === 'orange' ? 'blue' : 'orange'}-800`}>{content.highlight}</span>
              </div>
              <p className={`text-${colorScheme === 'orange' ? 'blue' : 'orange'}-700`}>
                {content.highlightText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Booking Section */}
      <section id="booking" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 animate-bounce">
                <img 
                  src={calendarIcon} 
                  alt="Calendario Animado" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'en' 
                ? 'Schedule Your Child\'s Free Spanish Class' 
                : 'Agenda la Clase Gratuita de Inglés para tu Hijo'
              }
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Book a 40-minute trial session with our specialized children\'s instructors. No commitment required.'
                : 'Reserva una sesión de prueba de 40 minutos con nuestros instructores especializados en niños. Sin compromiso requerido.'
              }
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <HighLevelCalendar 
                type="child" 
                language={language}
              />
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
              type="child" 
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
            <Link href={basePath}>
              <img src={passportLogo} alt="Passport to Fluency" className="h-10 brightness-0 invert mx-auto mb-4" />
            </Link>
            <p className="text-gray-400 mb-4">
              {language === 'en' 
                ? 'Spanish classes for children with native Latin American instructors, 24/7.'
                : 'Clases de inglés para niños con instructores nativos americanos, 24/7.'
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