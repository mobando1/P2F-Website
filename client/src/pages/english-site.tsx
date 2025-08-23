import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BookingForm from "@/components/booking-form";
import NewsletterSignup from "@/components/newsletter-signup";
import DiscountPopup from "@/components/discount-popup";
import HighLevelCalendar from "@/components/highlevel-calendar";
import passportLogo from "@assets/a1c5a1_9514ede9e3124d7a9adf78f5dcf07f28~mv2_1755803448396.png";
import { useLocation } from "wouter";
import { 
  Globe, Star, Users, Clock, ArrowRight, Calendar, 
  Headphones, VideoIcon, CheckCircle, MessageCircle,
  Facebook, Instagram, Linkedin, Youtube, Mail, Phone 
} from "lucide-react";

export default function EnglishSite() {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingType, setBookingType] = useState<'adult' | 'child'>('adult');
  const [showDiscountPopup, setShowDiscountPopup] = useState(false);
  const [, navigate] = useLocation();

  // Show discount popup after 30 seconds or on scroll
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem('discountPopupShown')) {
        setShowDiscountPopup(true);
      }
    }, 30000);

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
    setBookingType(type);
    setShowBookingForm(true);
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
                <button 
                  onClick={() => scrollToSection('como-funciona')}
                  className="text-gray-700 hover:text-passport-blue transition-colors"
                >
                  Cómo Funciona
                </button>
                <button 
                  onClick={() => scrollToSection('precios')}
                  className="text-gray-700 hover:text-passport-blue transition-colors"
                >
                  Precios
                </button>
                <button 
                  onClick={() => scrollToSection('testimonios')}
                  className="text-gray-700 hover:text-passport-blue transition-colors"
                >
                  Testimonios
                </button>
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
              <span className="text-passport-blue">Speak English</span><br />
              <span className="italic text-passport-orange">like a native</span>
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
                <p className="text-gray-600">
                  Únete a tu clase por Zoom desde cualquier dispositivo. Tu instructor te estará esperando.
                </p>
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
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Prueba tu primera clase gratis
                </h3>
                <p className="text-gray-600 mb-6">
                  Sin compromiso. Conoce tu instructor y experimenta nuestro método personalizado.
                </p>
                <Button 
                  onClick={() => handleBookingClick('adult')}
                  className="bg-passport-orange hover:bg-orange-600 text-white w-full py-3 text-lg font-semibold"
                >
                  Reservar Clase Gratuita
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="precios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Planes Simples y Transparentes
            </h2>
            <p className="text-xl text-gray-600">
              Sin contratos ni letras pequeñas. Cancela cuando quieras.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-passport-blue transition-colors">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">1 Clase por Semana</h3>
                <div className="text-3xl font-bold text-passport-blue mb-2">$119.96</div>
                <div className="text-gray-600 mb-1">por mes</div>
                <div className="text-sm text-gray-500 mb-6">$29.99 por clase</div>
                <p className="text-sm text-gray-600 mb-6">Perfecto para mantener progreso constante</p>
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
                <p className="text-sm text-gray-600 mb-6">Ideal para mejora rápida y conversación semanal</p>
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
                <p className="text-sm text-gray-600 mb-6">Para estudiantes serios que quieren resultados rápidos</p>
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
                  "Decidí aprender inglés porque muchos de mis amigos son de Sudamérica y cuando salimos a bailar salsa, todos hablan inglés. ¡Passport2Fluency personaliza las lecciones para mis necesidades específicas!"
                </p>
                <div className="font-semibold text-gray-900">Carlos Martínez</div>
                <div className="text-sm text-gray-600">Profesional, Miami</div>
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
                  "Necesitaba mejorar mi inglés para comunicarme mejor con mi familia y por mis viajes. Elegí Passport2fluency porque necesitaba algo virtual. ¡Mi instructora Valentina es maravillosa!"
                </p>
                <div className="font-semibold text-gray-900">Lucía Fernández</div>
                <div className="text-sm text-gray-600">Empresaria, Texas</div>
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
                  "Como madre con herencia argentina y cubana, era importante que mis hijos mantuvieran conexión con su patrimonio. El programa ha sido un cambio total - contenido culturalmente relevante que realmente cautiva su interés."
                </p>
                <div className="font-semibold text-gray-900">Rebecca Santos</div>
                <div className="text-sm text-gray-600">Madre, Nueva Jersey</div>
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

      {/* CTA Section */}
      <section className="py-20 bg-passport-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para hablar inglés con confianza?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a más de 1,000 latinos que ya están mejorando su inglés con nosotros
          </p>
          <Button 
            onClick={() => handleBookingClick('adult')}
            className="bg-white text-passport-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            size="lg"
          >
            Reservar Clase Gratuita
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
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

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Reservar Clase Gratuita</h2>
                <button 
                  onClick={() => setShowBookingForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              <HighLevelCalendar language="es" type={bookingType} />
            </div>
          </div>
        </div>
      )}

      {/* Discount Popup */}
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