import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BookingForm from "@/components/booking-form";
import NewsletterSignup from "@/components/newsletter-signup";
import DiscountPopup from "@/components/discount-popup";
import HighLevelCalendar from "@/components/highlevel-calendar";
import passportLogo from "@assets/a1c5a1_9514ede9e3124d7a9adf78f5dcf07f28~mv2_1755803448396.png";
import { useLocation, Link } from "wouter";
import NavigationDropdown from "@/components/navigation-dropdown";
import { 
  Globe, Star, Users, Clock, ArrowRight, Calendar, 
  Headphones, VideoIcon, CheckCircle, MessageCircle,
  Facebook, Instagram, Linkedin, Youtube, Mail, Phone, Building,
  Gamepad2, Briefcase, Stethoscope, Home, TrendingUp, Scale
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
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/en/pricing" className="text-gray-700 hover:text-passport-blue transition-colors">
                  Planes y Precios
                </Link>
                <NavigationDropdown language="es" currentPath={location} />
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
                🇪🇸 Aprende Español
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
                  <Link href="#booking-calendars" className="block">
                    <div className="p-4 border-2 border-passport-blue rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
                      <div className="flex items-center mb-2">
                        <Users className="w-5 h-5 text-passport-blue mr-2" />
                        <h4 className="font-semibold text-gray-900">Clases para Adultos</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">Conversación profesional y inglés de negocios</p>
                    </div>
                  </Link>
                  <Link href="#ingles-para-ninos" className="block">
                    <div className="p-4 border-2 border-passport-blue rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
                      <div className="flex items-center mb-2">
                        <Star className="w-5 h-5 text-passport-blue mr-2" />
                        <h4 className="font-semibold text-gray-900">Clases para Niños</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">Aprendizaje divertido e interactivo para niños</p>
                    </div>
                  </Link>
                  <Link href="#programas-empresariales" className="block">
                    <div className="p-4 border-2 border-passport-orange rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors cursor-pointer">
                      <div className="flex items-center mb-2">
                        <Building className="w-5 h-5 text-passport-orange mr-2" />
                        <h4 className="font-semibold text-gray-900">Programas Empresariales</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">Inglés profesional para equipos corporativos</p>
                    </div>
                  </Link>
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">Starter Flow</h3>
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
                  onClick={() => window.open('https://buy.stripe.com/fZu5kE2Gw8zV2g49Cues004', '_blank')}
                  className="w-full bg-passport-blue hover:bg-blue-700 text-white py-2 font-semibold"
                >
                  Empezar Ahora
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-passport-blue transition-colors">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Momentum Plan</h3>
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
                  onClick={() => window.open('https://buy.stripe.com/eVq28s80Qg2n2g401Ues002', '_blank')}
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fluency Boost</h3>
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
                  onClick={() => window.open('https://buy.stripe.com/00w28s2Gw3fB1c0eWOes003', '_blank')}
                  className="w-full bg-passport-orange hover:bg-orange-600 text-white py-2 font-semibold"
                >
                  Empezar Ahora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Programas Especializados - New Design */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-20 md:space-y-24">
            
            {/* Inglés para Niños - Diseño Juguetón */}
            <Link href="/en/children" className="block group focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-3xl">
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden relative">
                
                {/* Header visual con degradado */}
                <div className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 p-8 relative">
                  {/* Stickers decorativos */}
                  <div className="absolute top-4 left-6 text-2xl animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>✏️</div>
                  <div className="absolute top-4 right-6 text-2xl animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}>✨</div>
                  <div className="absolute bottom-4 left-6 text-2xl animate-bounce" style={{animationDelay: '2s', animationDuration: '3s'}}>🎵</div>
                  <div className="absolute bottom-4 right-6 text-2xl animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3s'}}>📖</div>
                  
                  {/* Ícono principal grande */}
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:-translate-y-1 transition-transform duration-300">
                    <Star className="w-10 h-10 md:w-12 md:h-12 text-blue-500" />
                  </div>
                </div>
                
                <div className="p-10 md:p-16 text-center">
                  {/* Título con fuente juguetona */}
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6" style={{fontFamily: 'Fredoka One, cursive'}}>
                    Inglés para Niños
                  </h3>
                  
                  {/* Descripción */}
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                    Despierta el amor por el inglés en tu hijo con sesiones divertidas e interactivas diseñadas específicamente para jóvenes estudiantes de 5-17 años. Nuestros instructores nativos hacen el aprendizaje atractivo a través de juegos, canciones y actividades culturales.
                  </p>
                  
                  {/* Chips juguetones */}
                  <div className="flex flex-wrap justify-center gap-3 mb-8 md:gap-4">
                    <div className="hidden md:flex flex-wrap justify-center gap-4">
                      <span className="bg-gradient-to-r from-blue-100 to-cyan-100 border-2 border-blue-200 text-blue-700 px-5 py-3 rounded-full text-sm font-bold hover:bg-gradient-to-r hover:from-blue-200 hover:to-cyan-200 transition-all duration-300 flex items-center gap-2 shadow-md">
                        <Users className="w-4 h-4" />
                        Edades 5-17
                      </span>
                      <span className="bg-gradient-to-r from-blue-100 to-cyan-100 border-2 border-blue-200 text-blue-700 px-5 py-3 rounded-full text-sm font-bold hover:bg-gradient-to-r hover:from-blue-200 hover:to-cyan-200 transition-all duration-300 flex items-center gap-2 shadow-md">
                        <Gamepad2 className="w-4 h-4" />
                        Juegos Interactivos
                      </span>
                      <span className="bg-gradient-to-r from-blue-100 to-cyan-100 border-2 border-blue-200 text-blue-700 px-5 py-3 rounded-full text-sm font-bold hover:bg-gradient-to-r hover:from-blue-200 hover:to-cyan-200 transition-all duration-300 flex items-center gap-2 shadow-md">
                        <Globe className="w-4 h-4" />
                        Instructores Nativos
                      </span>
                      <span className="bg-gradient-to-r from-blue-100 to-cyan-100 border-2 border-blue-200 text-blue-700 px-5 py-3 rounded-full text-sm font-bold hover:bg-gradient-to-r hover:from-blue-200 hover:to-cyan-200 transition-all duration-300 flex items-center gap-2 shadow-md">
                        <Globe className="w-4 h-4" />
                        Aprendizaje Cultural
                      </span>
                    </div>
                    
                    {/* Mobile: Scroll horizontal */}
                    <div className="md:hidden flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory w-full">
                      <span className="bg-gradient-to-r from-blue-100 to-cyan-100 border-2 border-blue-200 text-blue-700 px-5 py-3 rounded-full text-sm font-bold hover:bg-gradient-to-r hover:from-blue-200 hover:to-cyan-200 transition-all duration-300 flex items-center gap-2 shadow-md snap-start flex-shrink-0">
                        <Users className="w-4 h-4" />
                        Edades 5-17
                      </span>
                      <span className="bg-gradient-to-r from-blue-100 to-cyan-100 border-2 border-blue-200 text-blue-700 px-5 py-3 rounded-full text-sm font-bold hover:bg-gradient-to-r hover:from-blue-200 hover:to-cyan-200 transition-all duration-300 flex items-center gap-2 shadow-md snap-start flex-shrink-0">
                        <Gamepad2 className="w-4 h-4" />
                        Juegos Interactivos
                      </span>
                      <span className="bg-gradient-to-r from-blue-100 to-cyan-100 border-2 border-blue-200 text-blue-700 px-5 py-3 rounded-full text-sm font-bold hover:bg-gradient-to-r hover:from-blue-200 hover:to-cyan-200 transition-all duration-300 flex items-center gap-2 shadow-md snap-start flex-shrink-0">
                        <Globe className="w-4 h-4" />
                        Instructores Nativos
                      </span>
                      <span className="bg-gradient-to-r from-blue-100 to-cyan-100 border-2 border-blue-200 text-blue-700 px-5 py-3 rounded-full text-sm font-bold hover:bg-gradient-to-r hover:from-blue-200 hover:to-cyan-200 transition-all duration-300 flex items-center gap-2 shadow-md snap-start flex-shrink-0">
                        <Globe className="w-4 h-4" />
                        Aprendizaje Cultural
                      </span>
                    </div>
                  </div>
                  
                  {/* Botón tipo app para niños */}
                  <div className="inline-block">
                    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 hover:from-blue-600 hover:via-purple-600 hover:to-blue-700 text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex items-center gap-4 group relative overflow-hidden">
                      <span className="relative z-10">Explorar Programas para Niños</span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                      {/* Efecto de rebote */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Programas Empresariales - Diseño Premium */}
            <Link href="/en/business" className="block group focus:outline-none focus:ring-4 focus:ring-amber-300 rounded-3xl">
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden relative">
                
                {/* Franja superior dorada */}
                <div className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 h-2 w-full"></div>
                
                {/* Decoración geométrica de fondo */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-10 left-10 w-32 h-32 border border-gray-200 rounded-full"></div>
                  <div className="absolute bottom-10 right-10 w-24 h-24 border border-gray-200 rounded-lg rotate-45"></div>
                  <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-gray-200 rounded-full"></div>
                  {/* Líneas diagonales sutiles */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-gray-50 to-transparent transform rotate-12"></div>
                  </div>
                </div>
                
                <div className="p-10 md:p-16 text-center relative z-10">
                  {/* Ícono principal premium */}
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:-translate-y-1 group-hover:shadow-3xl transition-all duration-300 relative">
                    <Briefcase className="w-10 h-10 md:w-12 md:h-12 text-white" />
                    {/* Sello profesional efecto */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
                  </div>
                  
                  {/* Título corporativo */}
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 tracking-tight">
                    Programas Empresariales de Inglés
                  </h3>
                  
                  {/* Descripción */}
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                    Eleva tu carrera con capacitación profesional en inglés diseñada para el mundo corporativo. Perfecto para ejecutivos, equipos de ventas y profesionales que trabajan con mercados de habla inglesa.
                  </p>
                  
                  {/* Chips corporativos */}
                  <div className="flex flex-wrap justify-center gap-3 mb-8 md:gap-4">
                    <div className="hidden md:flex flex-wrap justify-center gap-4">
                      <span className="bg-gradient-to-r from-gray-50 to-amber-50 border border-amber-200 text-amber-800 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-all duration-300 flex items-center gap-2 shadow-sm">
                        <Stethoscope className="w-4 h-4 stroke-1" />
                        Salud y Medicina
                      </span>
                      <span className="bg-gradient-to-r from-gray-50 to-amber-50 border border-amber-200 text-amber-800 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-all duration-300 flex items-center gap-2 shadow-sm">
                        <Home className="w-4 h-4 stroke-1" />
                        Bienes Raíces
                      </span>
                      <span className="bg-gradient-to-r from-gray-50 to-amber-50 border border-amber-200 text-amber-800 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-all duration-300 flex items-center gap-2 shadow-sm">
                        <TrendingUp className="w-4 h-4 stroke-1" />
                        Ventas y Marketing
                      </span>
                      <span className="bg-gradient-to-r from-gray-50 to-amber-50 border border-amber-200 text-amber-800 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-all duration-300 flex items-center gap-2 shadow-sm">
                        <Scale className="w-4 h-4 stroke-1" />
                        Legal y Derecho
                      </span>
                    </div>
                    
                    {/* Mobile: Scroll horizontal */}
                    <div className="md:hidden flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory w-full">
                      <span className="bg-gradient-to-r from-gray-50 to-amber-50 border border-amber-200 text-amber-800 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-all duration-300 flex items-center gap-2 shadow-sm snap-start flex-shrink-0">
                        <Stethoscope className="w-4 h-4 stroke-1" />
                        Salud y Medicina
                      </span>
                      <span className="bg-gradient-to-r from-gray-50 to-amber-50 border border-amber-200 text-amber-800 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-all duration-300 flex items-center gap-2 shadow-sm snap-start flex-shrink-0">
                        <Home className="w-4 h-4 stroke-1" />
                        Bienes Raíces
                      </span>
                      <span className="bg-gradient-to-r from-gray-50 to-amber-50 border border-amber-200 text-amber-800 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-all duration-300 flex items-center gap-2 shadow-sm snap-start flex-shrink-0">
                        <TrendingUp className="w-4 h-4 stroke-1" />
                        Ventas y Marketing
                      </span>
                      <span className="bg-gradient-to-r from-gray-50 to-amber-50 border border-amber-200 text-amber-800 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-all duration-300 flex items-center gap-2 shadow-sm snap-start flex-shrink-0">
                        <Scale className="w-4 h-4 stroke-1" />
                        Legal y Derecho
                      </span>
                    </div>
                  </div>
                  
                  {/* Botón premium con brillo animado */}
                  <div className="inline-block">
                    <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:via-yellow-600 hover:to-amber-700 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 group relative overflow-hidden">
                      <span className="relative z-10">Explorar Programas Empresariales</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                      {/* Efecto de brillo que cruza */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-in-out"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            
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