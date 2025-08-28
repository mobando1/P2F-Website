import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BookingForm from "@/components/booking-form";
import NewsletterSignup from "@/components/newsletter-signup";
import DiscountPopup from "@/components/discount-popup";
import HighLevelCalendar from "@/components/highlevel-calendar";
import passportLogo from "@assets/a1c5a1_9514ede9e3124d7a9adf78f5dcf07f28~mv2_1755803448396.png";
import { useLocation, Link } from "wouter";
import { 
  Globe, Star, Users, Clock, ArrowRight, Calendar, 
  Headphones, VideoIcon, CheckCircle, MessageCircle,
  Facebook, Instagram, Linkedin, Youtube, Mail, Phone, Building
} from "lucide-react";

export default function EnglishSite() {
  // Removed modal state - now using integrated calendars
  const [showDiscountPopup, setShowDiscountPopup] = useState(false);
  const [, navigate] = useLocation();

  // Show discount popup after 7 seconds or on scroll for English learners
  useEffect(() => {
    // Clear any previous popup state for testing
    localStorage.removeItem('discountPopupShown');
    
    const timer = setTimeout(() => {
      if (!localStorage.getItem('discountPopupShown')) {
        setShowDiscountPopup(true);
      }
    }, 7000);

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5 && !localStorage.getItem('discountPopupShown')) {
        setShowDiscountPopup(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookingClick = (type: 'adult' | 'child' = 'adult') => {
    const calendarSection = document.querySelector('#booking-calendars');
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiscountSubscribe = (email: string) => {
    // TODO: Integrate with HighLevel newsletter
    localStorage.setItem('discountPopupShown', 'true');
    console.log('Discount subscription:', email);
  };

  const handleDiscountClose = () => {
    setShowDiscountPopup(false);
    localStorage.setItem('discountPopupShown', 'true');
  };

  const goToSpanishSite = () => {
    navigate('/es');
  };

  const goToLanding = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img 
                src={passportLogo} 
                alt="Passport to Fluency" 
                className="h-10 cursor-pointer" 
                onClick={goToLanding}
              />
            </div>
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-6">
                <Link href="/en/pricing" className="text-gray-700 hover:text-passport-blue transition-colors">
                  Planes y Precios
                </Link>
                <Link href="/en/children" className="text-gray-700 hover:text-passport-blue transition-colors">
                  Inglés para Niños
                </Link>
                <Link href="/en/business" className="text-gray-700 hover:text-passport-blue transition-colors">
                  Programas Empresariales
                </Link>
                <Link href="/en/team" className="text-gray-700 hover:text-passport-blue transition-colors">
                  Equipo
                </Link>
                <Link href="/en/blog" className="text-gray-700 hover:text-passport-blue transition-colors">
                  Blog
                </Link>
              </nav>
              <Button 
                onClick={goToSpanishSite}
                variant="outline" 
                size="sm"
                className="border-passport-orange text-passport-orange hover:bg-passport-orange hover:text-white"
              >
                🇪🇸 Español
              </Button>
            </div>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm mb-6">
                <Globe className="w-4 h-4 mr-2" />
                Para hispanohablantes que quieren dominar el inglés
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="text-passport-blue">Habla Inglés</span><br />
              <span className="italic text-passport-orange">como un nativo</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Clases personalizadas 1-a-1 con instructores nativos americanos. 
              <span className="font-semibold"> Disponible 24/7, desde cualquier lugar.</span>
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1 text-passport-blue" />
                <strong className="text-gray-900">1,000+</strong> estudiantes latinos
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1 text-yellow-500" />
                <strong className="text-gray-900">4.9</strong> calificación promedio
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1 text-passport-orange" />
                Clases de <strong className="text-gray-900">40 minutos</strong>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => handleBookingClick('adult')}
                className="bg-passport-blue hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
                size="lg"
              >
                Reservar Clase Gratis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                onClick={() => scrollToSection('como-funciona')}
                variant="outline" 
                className="border-passport-blue text-passport-blue hover:bg-passport-blue hover:text-white px-8 py-4 text-lg font-semibold"
                size="lg"
              >
                Ver Cómo Funciona
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* How it Works */}
      <section id="como-funciona" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cómo Funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Solo 3 pasos simples para empezar a hablar inglés con confianza
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:border-passport-blue transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-passport-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">1. Agenda tu clase</h3>
                <p className="text-gray-600">
                  Elige el horario que mejor te convenga. Disponible 24/7, incluso de último momento.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-passport-blue transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <VideoIcon className="w-8 h-8 text-passport-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">2. Conecta por video</h3>
                <p className="text-gray-600">Únete a tu clase por Google Meet desde cualquier dispositivo. Tu instructor te estará esperando.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-passport-blue transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-passport-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">3. Practica y mejora</h3>
                <p className="text-gray-600">
                  Conversación real con retroalimentación instantánea. Tu progreso se guarda automáticamente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir Passport to Fluency?
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Instructores nativos americanos
                    </h3>
                    <p className="text-gray-600">
                      Todos nuestros profesores son hablantes nativos de inglés de Estados Unidos, con experiencia enseñando a latinos.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Horarios súper flexibles
                    </h3>
                    <p className="text-gray-600">
                      Agenda clases cuando quieras, incluso 15 minutos antes. Disponible 24/7 para adaptarse a tu vida ocupada.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Método personalizado
                    </h3>
                    <p className="text-gray-600">
                      Cada clase se adapta a tu nivel y objetivos. Enfoque práctico en conversación real del día a día.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Progreso garantizado
                    </h3>
                    <p className="text-gray-600">
                      95% de nuestros estudiantes mejoran su fluidez en las primeras 4 semanas o te devolvemos tu dinero.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Prueba tu primera clase gratis
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  Elige entre nuestros programas especializados
                </p>
                <div className="grid gap-4">
                  <div className="p-4 border-2 border-passport-blue rounded-lg bg-blue-50">
                    <div className="flex items-center mb-2">
                      <Users className="w-5 h-5 text-passport-blue mr-2" />
                      <h4 className="font-semibold text-gray-900">Clases para Adultos</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Conversación profesional y inglés de negocios</p>
                  </div>
                  <div className="p-4 border-2 border-passport-blue rounded-lg bg-blue-50">
                    <div className="flex items-center mb-2">
                      <Star className="w-5 h-5 text-passport-blue mr-2" />
                      <h4 className="font-semibold text-gray-900">Clases para Niños</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Aprendizaje divertido e interactivo para niños</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Booking Calendars */}
      <section id="booking-calendars" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Agenda tu Clase de Prueba Gratuita
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elige el programa que mejor se adapte a tus necesidades. Mismo precio, enfoque de enseñanza especializado para cada grupo de edad.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            {/* Adult Calendar */}
            <div className="bg-gray-50 rounded-2xl p-8 h-full flex flex-col">
              <div className="text-center mb-6 min-h-[160px] flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-passport-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 min-h-[64px] flex items-center justify-center">
                    Clases de Inglés para Adultos
                  </h3>
                </div>
                <p className="text-gray-600">
                  Conversación profesional, inglés de negocios e inmersión cultural
                </p>
              </div>
              <div className="flex-1">
                <HighLevelCalendar language="es" type="adult" className="bg-white" />
              </div>
            </div>

            {/* Kids Calendar */}
            <div className="bg-gray-50 rounded-2xl p-8 h-full flex flex-col">
              <div className="text-center mb-6 min-h-[160px] flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-passport-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 min-h-[64px] flex items-center justify-center">
                    Clases de Inglés para Niños
                  </h3>
                </div>
                <p className="text-gray-600">
                  Aprendizaje divertido e interactivo diseñado específicamente para niños de 5-17 años
                </p>
              </div>
              <div className="flex-1">
                <HighLevelCalendar language="es" type="child" className="bg-white" />
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                <span className="font-semibold text-green-800">Prueba 100% Sin Riesgo</span>
              </div>
              <p className="text-green-700">
                Sin pago requerido • Conoce a tu instructor primero • Cancela en cualquier momento
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Planes y Precios */}
      <section id="planes-precios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Encuentra el Plan Perfecto para Hablar Inglés con Confianza
            </h2>
            <p className="text-xl text-gray-600">
              Clases personalizadas 1-a-1 con instructores nativos americanos. Sin contratos ni letras pequeñas. Cancela cuando quieras.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-passport-blue transition-colors">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">1 Clase por Semana</h3>
                <div className="text-3xl font-bold text-passport-blue mb-2">$119.96</div>
                <div className="text-gray-600 mb-1">por mes</div>
                <div className="text-sm text-gray-500 mb-6">$29.99 por clase</div>
                <p className="text-sm text-gray-600 mb-6">Perfecto para mantener progreso constante con instructores nativos</p>
                <ul className="text-left space-y-2 mb-8 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    1 clase por semana (4 al mes)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Sesiones privadas 1-a-1 (40 min)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Instructores nativos americanos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    100% virtual - ahorra tiempo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Horarios flexibles 24/7
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Sin contrato - Cancela cuando quieras
                  </li>
                </ul>
                <Button 
                  onClick={() => handleBookingClick('adult')}
                  className="w-full bg-passport-blue hover:bg-blue-700 text-white py-2 font-semibold"
                >
                  Empezar Ahora
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-passport-blue transition-colors">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">2 Clases por Semana</h3>
                <div className="text-3xl font-bold text-passport-blue mb-2">$219.99</div>
                <div className="text-gray-600 mb-1">por mes</div>
                <div className="text-sm text-gray-500 mb-6">$27.50 por clase</div>
                <p className="text-sm text-gray-600 mb-6">Ideal para mejora rápida y práctica constante de conversación</p>
                <ul className="text-left space-y-2 mb-8 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    2 clases por semana (8 al mes)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Sesiones privadas 1-a-1 (40 min)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Horarios flexibles
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Cancela cuando quieras
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Soporte del instructor
                  </li>
                </ul>
                <Button 
                  onClick={() => handleBookingClick('adult')}
                  className="w-full bg-passport-blue hover:bg-blue-700 text-white py-2 font-semibold"
                >
                  Elegir Este Plan
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-passport-orange bg-orange-50 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-passport-orange text-white px-3 py-1 rounded-full text-xs font-semibold">
                  MÁS POPULAR
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">3 Clases por Semana</h3>
                <div className="text-3xl font-bold text-passport-orange mb-2">$299.99</div>
                <div className="text-gray-600 mb-1">por mes</div>
                <div className="text-sm text-gray-500 mb-6">$24.99 por clase</div>
                <p className="text-sm text-gray-600 mb-6">Para estudiantes serios que quieren máximos resultados e inmersión cultural</p>
                <ul className="text-left space-y-2 mb-8 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    3 clases por semana (12 al mes)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Sesiones privadas 1-a-1 (40 min)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Horarios flexibles
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Cancela cuando quieras
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Soporte del instructor
                  </li>
                </ul>
                <Button 
                  onClick={() => handleBookingClick('adult')}
                  className="w-full bg-passport-orange hover:bg-orange-600 text-white py-2 font-semibold"
                >
                  Empezar Ahora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Inglés para Niños */}
      <section id="ingles-para-ninos" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Inglés para Niños
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Despierta el amor por el inglés en tu hijo con sesiones divertidas e interactivas diseñadas específicamente para jóvenes estudiantes de 5-17 años.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="mb-8">
                <div className="w-16 h-16 bg-passport-blue rounded-full flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Aprendizaje Divertido e Interactivo que Funciona
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Nuestros instructores experimentados brindan atención personalizada y actividades atractivas para desarrollar habilidades lingüísticas esenciales en un ambiente de aprendizaje vibrante.
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Plan de Estudios Apropiado para la Edad</h4>
                    <p className="text-gray-600">Lecciones especialmente diseñadas que se adaptan al nivel de desarrollo y estilo de aprendizaje de tu hijo.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Juegos y Actividades Interactivas</h4>
                    <p className="text-gray-600">Aprendizaje a través del juego con canciones, cuentos y actividades culturales que mantienen a los niños comprometidos.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Instructores Nativos Pacientes</h4>
                    <p className="text-gray-600">Maestros experimentados que se especializan en trabajar con niños y crear un ambiente de apoyo.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Conexión Cultural</h4>
                    <p className="text-gray-600">Desarrolla aprecio por la cultura americana mientras construye habilidades lingüísticas y confianza.</p>
                  </div>
                </li>
              </ul>

              <Button 
                onClick={() => handleBookingClick('child')}
                className="bg-passport-blue hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
                size="lg"
              >
                <Star className="w-5 h-5 mr-2" />
                Reservar Clase Gratis para Niños
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
                "Mis hijos estudian en una escuela bilingüe y yo no podía ayudarlos con sus tareas en inglés. Después de 6 meses con Passport2Fluency, ahora puedo ayudarlos y hasta leer cuentos en inglés. Las lecciones interactivas y actividades atractivas han capturado verdaderamente el interés y entusiasmo de mis hijos."
              </p>
              <div className="font-semibold text-gray-900">Ana Rodríguez</div>
              <div className="text-sm text-gray-600">Madre de familia, Los Angeles</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-3">
                <Star className="w-6 h-6 text-orange-500 mr-2" />
                <span className="font-semibold text-orange-800">Perfecto para Edades 5-17</span>
              </div>
              <p className="text-orange-700">
                Mismo precio accesible que las clases para adultos • Métodos de enseñanza especializados para niños • Enfoque divertido y educativo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programas Empresariales */}
      <section id="programas-empresariales" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Programas Empresariales de Inglés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eleva tu carrera y expande tus oportunidades de negocio con capacitación profesional en inglés diseñada para el mundo corporativo.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Main Value Proposition */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-16 h-16 bg-passport-blue rounded-full flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Transforma tu Comunicación Empresarial
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Conéctate con clientes, colegas y mercados de habla inglesa con confianza. Nuestro currículo enfocado en negocios cubre vocabulario específico de la industria y habilidades de comunicación profesional.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Vocabulario específico de industria y terminología</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Habilidades profesionales de presentación y negociación</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Etiqueta empresarial y prácticas culturales</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-passport-blue to-blue-600 rounded-xl p-6 text-white">
                  <h4 className="text-xl font-semibold mb-4">Industrias Populares:</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>• Salud y Medicina</div>
                    <div>• Legal y Derecho</div>
                    <div>• Bienes Raíces</div>
                    <div>• Banca y Finanzas</div>
                    <div>• Ventas y Marketing</div>
                    <div>• Hospitalidad y Turismo</div>
                    <div>• Educación</div>
                    <div>• Tecnología</div>
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
                    <h3 className="text-xl font-bold text-gray-900">Coaching Ejecutivo Individual</h3>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Currículo personalizado basado en tu industria y rol</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Horarios flexibles adaptados a tu agenda ejecutiva</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Escenarios reales de negocios y estudios de caso</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Aprendizaje acelerado para impacto empresarial inmediato</span>
                    </li>
                  </ul>
                  <Button 
                    onClick={() => handleBookingClick('adult')}
                    className="w-full bg-passport-blue hover:bg-blue-700 text-white"
                  >
                    Comenzar Programa Ejecutivo
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-passport-orange transition-colors">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <Building className="w-12 h-12 text-passport-orange mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900">Capacitación Corporativa de Equipos</h3>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Sesiones grupales diseñadas para equipos y departamentos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Vocabulario específico de empresa y procedimientos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Resultados de aprendizaje consistentes en tu organización</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Descuentos por volumen y opciones de facturación flexible</span>
                    </li>
                  </ul>
                  <Button 
                    onClick={() => handleBookingClick('adult')}
                    className="w-full bg-passport-orange hover:bg-orange-600 text-white"
                  >
                    Obtener Cotización Corporativa
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Success Story */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Casos de Éxito</h3>
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
                    "En 3 meses pasé de inglés básico a dirigir reuniones con clientes en inglés con confianza. Nuestra base de clientes americanos creció 40% desde que comencé el programa, y atribuyo gran parte de ese éxito a poder construir relaciones auténticas."
                  </p>
                  <div className="font-semibold text-gray-900">Carlos Mendoza</div>
                  <div className="text-sm text-gray-600">Director de Ventas Senior, Grupo Inmobiliario México</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Métricas de Impacto Empresarial:</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Satisfacción del Cliente</span>
                      <span className="font-semibold text-green-600">+35%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Nuevas Oportunidades</span>
                      <span className="font-semibold text-green-600">+50%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Comunicación del Equipo</span>
                      <span className="font-semibold text-green-600">+45%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Crecimiento de Ingresos</span>
                      <span className="font-semibold text-green-600">+40%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section id="equipo" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Conoce a Tus Instructores de Inglés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aprende con instructores nativos americanos experimentados que son apasionados por compartir su idioma y cultura.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-passport-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Johnson</h3>
                <p className="text-passport-orange font-semibold mb-3">Instructora Principal • Estados Unidos</p>
                <p className="text-gray-600 mb-4">
                  Maestría en Educación con más de 8 años enseñando inglés a profesionales. Se especializa en comunicación empresarial e inmersión cultural.
                </p>
                <div className="text-sm text-gray-500">
                  💼 Experta en Inglés de Negocios • 🎓 M.Ed Harvard University
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-passport-orange to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Michael Davis</h3>
                <p className="text-passport-blue font-semibold mb-3">Especialista en Niños • Estados Unidos</p>
                <p className="text-gray-600 mb-4">
                  Ex-maestro de primaria con pasión por hacer el inglés divertido y atractivo para jóvenes estudiantes a través de juegos y cuentos.
                </p>
                <div className="text-sm text-gray-500">
                  🌟 Experto en Inglés para Niños • 🎯 Métodos de Aprendizaje Interactivo
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Jennifer Wilson</h3>
                <p className="text-passport-orange font-semibold mb-3">Experta Cultural • Estados Unidos</p>
                <p className="text-gray-600 mb-4">
                  Graduada en Lingüística enfocada en matices culturales americanos. Ayuda a estudiantes a entender la cultura estadounidense.
                </p>
                <div className="text-sm text-gray-500">
                  🌍 Inmersión Cultural • 📚 B.A. Lingüística
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-passport-blue to-passport-orange rounded-2xl p-8 text-white max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Por Qué Nuestros Instructores Hacen la Diferencia</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm">Hablantes Nativos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">5+ años</div>
                  <div className="text-sm">Experiencia Docente</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">50 Estados</div>
                  <div className="text-sm">Representación Americana</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Recursos para Aprender Inglés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acelera tu aprendizaje del inglés con nuestros consejos de expertos, conocimientos culturales y guías prácticas.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-passport-orange rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Frases Esenciales de Inglés de Negocios para Profesionales
                </h3>
                <p className="text-gray-600 mb-4">
                  Domina las frases y expresiones clave que necesitas para tener éxito en ambientes empresariales de habla inglesa.
                </p>
                <div className="text-sm text-passport-blue font-semibold">
                  Inglés de Negocios • 5 min de lectura
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-passport-blue rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Diferencias Culturales: Estados Unidos vs Canadá vs Reino Unido
                </h3>
                <p className="text-gray-600 mb-4">
                  Entiende los matices culturales y diferencias regionales que te ayudarán a conectar mejor con hablantes nativos.
                </p>
                <div className="text-sm text-passport-blue font-semibold">
                  Cultura • 7 min de lectura
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Cómo Ayudar a tu Hijo a Aprender Inglés en Casa
                </h3>
                <p className="text-gray-600 mb-4">
                  Consejos prácticos y actividades divertidas para apoyar el viaje de aprendizaje de inglés de tu hijo entre clases.
                </p>
                <div className="text-sm text-passport-blue font-semibold">
                  Aprendizaje Infantil • 4 min de lectura
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              onClick={() => handleBookingClick('adult')}
              className="bg-passport-blue hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
            >
              Comenzar a Aprender Hoy
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros estudiantes
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex text-yellow-400 mb-4">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-gray-700 mb-4">
                  "Necesitaba mejorar mi inglés para avanzar en mi carrera. Con Passport2Fluency, mi confianza al hablar inglés mejoró increíblemente en solo 3 meses. ¡Ahora puedo participar en reuniones internacionales sin problemas!"
                </p>
                <div className="font-semibold text-gray-900">María González</div>
                <div className="text-sm text-gray-600">Ingeniera, Ciudad de México</div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex text-yellow-400 mb-4">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-gray-700 mb-4">
                  "Mis hijos estudian en una escuela bilingüe y yo no podía ayudarlos con sus tareas en inglés. Después de 6 meses con Passport2Fluency, ahora puedo ayudarlos y hasta leer cuentos en inglés. ¡Es increíble!"
                </p>
                <div className="font-semibold text-gray-900">Ana Rodríguez</div>
                <div className="text-sm text-gray-600">Madre, Los Angeles</div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex text-yellow-400 mb-4">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-gray-700 mb-4">
                  "Tengo un restaurante y muchos clientes hablan inglés. Antes perdía ventas porque no podía comunicarme bien. Ahora, después de estudiar con Passport2Fluency, mis ventas han aumentado 40% ¡y tengo más confianza!"
                </p>
                <div className="font-semibold text-gray-900">Carlos Mendoza</div>
                <div className="text-sm text-gray-600">Empresario, Phoenix</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <NewsletterSignup language="es" className="max-w-2xl mx-auto" />
        </div>
      </section>
      {/* Free Trial Section */}
      <section className="py-20 bg-passport-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para hablar inglés con confianza?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a más de 1,000 latinos que ya están mejorando su inglés con nosotros
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <Button 
              onClick={() => handleBookingClick('adult')}
              className="bg-white text-passport-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold w-full sm:w-auto"
              size="lg"
            >
              <Users className="w-5 h-5 mr-2" />
              Clases para Adultos
            </Button>
            <Button 
              onClick={() => handleBookingClick('child')}
              className="bg-white text-passport-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold w-full sm:w-auto"
              size="lg"
            >
              <Star className="w-5 h-5 mr-2" />
              Clases para Niños
            </Button>
          </div>
          <p className="text-blue-100 mt-4 text-sm">
            Mismo precio excelente, enfoque de enseñanza especializada
          </p>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src={passportLogo} alt="Passport to Fluency" className="h-10 brightness-0 invert mb-4" />
              <p className="text-gray-400">
                Aprende inglés con instructores nativos americanos, 24/7.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Enlaces</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('como-funciona')} className="hover:text-white transition-colors">Cómo Funciona</button></li>
                <li><button onClick={() => scrollToSection('precios')} className="hover:text-white transition-colors">Precios</button></li>
                <li><button onClick={() => scrollToSection('testimonios')} className="hover:text-white transition-colors">Testimonios</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@passporttofluency.com
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (555) 123-4567
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Youtube className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Passport to Fluency. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      {/* Modal removed - calendars now integrated directly in page */}
      {/* Discount Popup */}
      {/* Discount Popup for English learners */}
      {showDiscountPopup && (
        <DiscountPopup
          language="es"
          onClose={handleDiscountClose}
          onSubscribe={handleDiscountSubscribe}
        />
      )}
    </div>
  );
}