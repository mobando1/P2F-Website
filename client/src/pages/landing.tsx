import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Star, Users, Clock, ArrowRight, CheckCircle, ChevronDown, BookOpen, Headphones, Award, TrendingUp, Play, Zap, Target, Shield, HelpCircle, Plus, Minus } from "lucide-react";
import passportLogo from "@assets/a1c5a1_9514ede9e3124d7a9adf78f5dcf07f28~mv2_1755803448396.png";
import newLearningImage from "@assets/generated_images/Student_learning_with_online_tutor_5c3a43c2.png";

// Componente FAQ Item
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-gray-200 rounded-2xl">
      <button 
        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-lg pr-4" style={{color: '#0A4A6E'}}>{question}</span>
        <div className="flex-shrink-0">
          {isOpen ? (
            <Minus className="w-5 h-5" style={{color: '#F59E1C'}} />
          ) : (
            <Plus className="w-5 h-5" style={{color: '#F59E1C'}} />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

// Componente CTA Slim reutilizable
const CTASlim = ({ text = "¿Listo? Elige tu idioma" }: { text?: string }) => {
  const [, navigate] = useLocation();
  
  return (
    <div className="bg-white py-6 border-t border-gray-100" style={{
      boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.05)'
    }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-lg font-semibold" style={{color: '#0A4A6E'}}>
            {text}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => navigate('/es')}
              className="px-8 py-3 text-lg font-bold rounded-full transition-all duration-300 hover:shadow-lg border-0"
              style={{
                background: 'linear-gradient(135deg, #F59E1C 0%, #fbbf24 100%)',
                color: 'white'
              }}
              data-testid="cta-slim-learn-spanish"
            >
              <span className="flex items-center gap-2">
                <span>🇪🇸</span>
                <span>Learn Spanish</span>
              </span>
            </Button>
            <Button 
              onClick={() => navigate('/en')}
              className="px-8 py-3 text-lg font-bold rounded-full transition-all duration-300 hover:shadow-lg border-0"
              style={{
                background: 'linear-gradient(135deg, #0A4A6E 0%, #1C7BB1 100%)',
                color: 'white'
              }}
              data-testid="cta-slim-aprende-ingles"
            >
              <span className="flex items-center gap-2">
                <span>🇺🇸</span>
                <span>Aprende Inglés</span>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente CTA móvil fijo
const MobileCTA = () => {
  const [, navigate] = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Mostrar CTA móvil después de scrollear 50vh
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-4" style={{
      background: 'linear-gradient(135deg, #0A4A6E 0%, #F59E1C 100%)'
    }}>
      <div className="flex gap-3">
        <Button 
          onClick={() => navigate('/es')}
          className="flex-1 py-4 text-lg font-bold rounded-full border-0 bg-white transition-all duration-300"
          style={{color: '#0A4A6E'}}
          data-testid="mobile-cta-learn-spanish"
        >
          <span className="flex items-center justify-center gap-2">
            <span>🇪🇸</span>
            <span>Learn Spanish</span>
          </span>
        </Button>
        
        <Button 
          onClick={() => navigate('/en')}
          className="flex-1 py-4 text-lg font-bold rounded-full border-0 bg-white transition-all duration-300"
          style={{color: '#0A4A6E'}}
          data-testid="mobile-cta-aprende-ingles"
        >
          <span className="flex items-center justify-center gap-2">
            <span>🇺🇸</span>
            <span>Aprende Inglés</span>
          </span>
        </Button>
      </div>
    </div>
  );
};

export default function Landing() {
  const [, navigate] = useLocation();
  const [detectedLanguage, setDetectedLanguage] = useState<string | null>(null);

  useEffect(() => {
    // Simple language detection based on browser language
    const browserLanguage = navigator.language || navigator.languages?.[0];
    
    if (browserLanguage?.startsWith('es')) {
      setDetectedLanguage('español');
    } else {
      setDetectedLanguage('English');
    }
  }, []);

  return (
    <div className="min-h-screen overflow-hidden relative" style={{
      background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #fff7ed 100%)'
    }}>
      {/* Subtle background waves */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A4A6E' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Decorative Passport Element - Top Right */}
      <div className="absolute top-20 right-10 hidden lg:block opacity-20 animate-pulse">
        <div className="w-32 h-40 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-2xl transform rotate-12" style={{
          background: 'linear-gradient(135deg, #0A4A6E 0%, #1C7BB1 100%)'
        }}>
          <div className="p-4 text-center">
            <div className="text-yellow-400 font-black text-sm mb-2">PASSPORT</div>
            <div className="w-8 h-8 mx-auto mb-2 rounded-full border-2 border-yellow-400 flex items-center justify-center">
              <Globe className="w-4 h-4 text-yellow-400" />
            </div>
            <div className="text-yellow-400 font-bold text-xs italic">Fluency</div>
          </div>
        </div>
      </div>

      {/* Decorative Passport Element - Bottom Left */}
      <div className="absolute bottom-32 left-10 hidden lg:block opacity-15">
        <div className="w-24 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-xl transform -rotate-12" style={{
          background: 'linear-gradient(135deg, #F59E1C 0%, #ea580c 100%)'
        }}>
          <div className="p-3 text-center">
            <div className="text-white font-black text-xs mb-1">PASSPORT</div>
            <div className="w-6 h-6 mx-auto mb-1 rounded-full border-2 border-white flex items-center justify-center">
              <Globe className="w-3 h-3 text-white" />
            </div>
            <div className="text-white font-bold text-xs italic">Fluency</div>
          </div>
        </div>
      </div>
      {/* Top Navigation Bar */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <img src={passportLogo} alt="Passport to Fluency" className="h-10" />
          
          {/* Language detection in top right */}
          {detectedLanguage && (
            <div className="bg-blue-100 border border-blue-200 rounded-lg px-3 py-1 text-blue-800 text-sm flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              {detectedLanguage === 'español' ? 'Español' : 'English'}
            </div>
          )}
        </div>
      </div>

      {/* Hero Section - Preply Style Layout */}
      <div className="container mx-auto px-6 pb-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-[calc(100vh-200px)]">
          
          {/* Left Side - Hero Text */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              <span style={{color: '#0A4A6E'}}>Habla como un </span>
              <span className="italic text-6xl md:text-8xl" style={{color: '#F59E1C'}}>nativo</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-lg mb-4">
              Clases personalizadas 1-a-1 con instructores nativos
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 max-w-lg">
              <p className="text-blue-800 font-semibold text-lg">
                Selecciona el idioma que quieres aprender:
              </p>
            </div>

            {/* CTA Buttons - Elegant Pill Style */}
            <div className="space-y-6">
              <Button 
                onClick={() => navigate('/es')}
                className="w-full sm:w-auto px-12 py-6 text-2xl font-bold rounded-full transition-all duration-500 hover:shadow-2xl transform hover:scale-105 border-0 relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #F59E1C 0%, #fbbf24 100%)',
                  color: 'white',
                  boxShadow: '0 8px 32px rgba(245, 158, 28, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #ea580c 0%, #f59e0c 100%)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(245, 158, 28, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #F59E1C 0%, #fbbf24 100%)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(245, 158, 28, 0.3)';
                }}
                data-testid="button-learn-spanish"
              >
                <span className="flex items-center justify-center gap-3">
                  <span className="text-2xl">🇪🇸</span>
                  <span>Learn Spanish</span>
                  <ArrowRight className="w-6 h-6" />
                </span>
              </Button>
              
              <Button 
                onClick={() => navigate('/en')}
                className="w-full sm:w-auto px-12 py-6 text-2xl font-bold rounded-full transition-all duration-500 hover:shadow-2xl transform hover:scale-105 border-0 relative overflow-hidden group ml-0 sm:ml-6"
                style={{
                  background: 'linear-gradient(135deg, #0A4A6E 0%, #1C7BB1 100%)',
                  color: 'white',
                  boxShadow: '0 8px 32px rgba(10, 74, 110, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #1C7BB1 0%, #3b82f6 100%)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(10, 74, 110, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #0A4A6E 0%, #1C7BB1 100%)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(10, 74, 110, 0.3)';
                }}
                data-testid="button-aprende-ingles"
              >
                <span className="flex items-center justify-center gap-3">
                  <span className="text-2xl">🇺🇸</span>
                  <span>Aprende Inglés</span>
                  <ArrowRight className="w-6 h-6" />
                </span>
              </Button>
            </div>

            {/* Micro-indicador scroll */}
            <div className="text-center mt-8 animate-bounce">
              <p className="text-sm text-gray-600 mb-2">Desliza ↓ para ver cómo funciona</p>
              <ChevronDown className="w-6 h-6 mx-auto" style={{color: '#0A4A6E'}} />
            </div>
          </div>

          {/* Right Side - Single Large Image like Preply */}
          <div className="flex justify-center lg:justify-end animate-slide-right">
            <div className="bg-white rounded-3xl p-4 shadow-2xl" style={{
              background: 'linear-gradient(135deg, rgba(245, 158, 28, 0.05) 0%, rgba(10, 74, 110, 0.05) 100%)',
              border: '3px solid white'
            }}>
              <img 
                src={newLearningImage} 
                alt="Clases de idiomas virtuales 1-a-1 con instructores nativos" 
                className="w-96 h-80 md:w-[500px] md:h-[400px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Primera sección después del hero - Mantener stats pero no fixed */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center max-w-4xl">
              {/* Stat 1 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2" style={{background: 'linear-gradient(135deg, #0A4A6E, #1C7BB1)'}}>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-black" style={{color: '#0A4A6E'}}>1,000+</div>
                <div className="text-xs text-gray-500 font-medium">estudiantes activos</div>
              </div>
              
              {/* Stat 2 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2" style={{background: 'linear-gradient(135deg, #F59E1C, #fbbf24)'}}>
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-black" style={{color: '#F59E1C'}}>300K+</div>
                <div className="text-xs text-gray-500 font-medium">clases completadas</div>
              </div>
              
              {/* Stat 3 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2" style={{background: 'linear-gradient(135deg, #0A4A6E, #1C7BB1)'}}>
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-black" style={{color: '#0A4A6E'}}>40+</div>
                <div className="text-xs text-gray-500 font-medium">idiomas disponibles</div>
              </div>
              
              {/* Stat 4 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2" style={{background: 'linear-gradient(135deg, #F59E1C, #fbbf24)'}}>
                  <Star className="w-6 h-6 text-white fill-current" />
                </div>
                <div className="text-3xl md:text-4xl font-black" style={{color: '#F59E1C'}}>4.9</div>
                <div className="text-xs text-gray-500 font-medium">calificación promedio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Slim #1 */}
      <CTASlim />
      
      {/* Sección 2: Cómo funciona */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{color: '#0A4A6E'}}>
              ¿Cómo funciona?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              En 3 sencillos pasos estarás conversando como un nativo
            </p>
          </div>
          
          {/* Timeline Desktop */}
          <div className="hidden md:block relative">
            {/* Línea ondulada */}
            <div className="absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2" style={{
              background: 'linear-gradient(90deg, #0A4A6E 0%, #1C7BB1 50%, #F59E1C 100%)',
              borderRadius: '10px'
            }}></div>
            
            <div className="grid grid-cols-3 gap-8 relative z-10">
              {/* Paso 1 */}
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center bg-white shadow-lg" style={{
                    background: 'linear-gradient(135deg, #0A4A6E 0%, #1C7BB1 100%)'
                  }}>
                    <span className="text-3xl">🌍</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{
                    background: '#F59E1C'
                  }}>1</div>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#0A4A6E'}}>Elige tu idioma</h3>
                <p className="text-gray-600">Selecciona el idioma que quieres aprender y tu nivel actual</p>
              </div>
              
              {/* Paso 2 */}
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center bg-white shadow-lg" style={{
                    background: 'linear-gradient(135deg, #1C7BB1 0%, #F59E1C 100%)'
                  }}>
                    <span className="text-3xl">📹</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{
                    background: '#F59E1C'
                  }}>2</div>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#0A4A6E'}}>Conéctate por video</h3>
                <p className="text-gray-600">Programa tu clase y conéctate con un instructor nativo</p>
              </div>
              
              {/* Paso 3 */}
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center bg-white shadow-lg" style={{
                    background: 'linear-gradient(135deg, #F59E1C 0%, #fbbf24 100%)'
                  }}>
                    <span className="text-3xl">💬</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{
                    background: '#F59E1C'
                  }}>3</div>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#0A4A6E'}}>Practica y mejora</h3>
                <p className="text-gray-600">Recibe feedback en tiempo real y mejora tu fluidez</p>
              </div>
            </div>
          </div>
          
          {/* Timeline Mobile - Vertical */}
          <div className="md:hidden space-y-8">
            {[1, 2, 3].map((step, index) => {
              const icons = ['🌍', '📹', '💬'];
              const titles = ['Elige tu idioma', 'Conéctate por video', 'Practica y mejora'];
              const descriptions = [
                'Selecciona el idioma que quieres aprender y tu nivel actual',
                'Programa tu clase y conéctate con un instructor nativo', 
                'Recibe feedback en tiempo real y mejora tu fluidez'
              ];
              
              return (
                <div key={step} className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{
                      background: step === 1 ? 'linear-gradient(135deg, #0A4A6E 0%, #1C7BB1 100%)' :
                                  step === 2 ? 'linear-gradient(135deg, #1C7BB1 0%, #F59E1C 100%)' :
                                              'linear-gradient(135deg, #F59E1C 0%, #fbbf24 100%)'
                    }}>
                      <span className="text-2xl">{icons[index]}</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-xs" style={{
                      background: '#F59E1C'
                    }}>{step}</div>
                    {step < 3 && (
                      <div className="absolute top-16 left-1/2 w-1 h-8 -translate-x-1/2" style={{
                        background: 'linear-gradient(180deg, #0A4A6E 0%, #F59E1C 100%)'
                      }}></div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{color: '#0A4A6E'}}>{titles[index]}</h3>
                    <p className="text-gray-600">{descriptions[index]}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* CTA Slim #2 */}
      <CTASlim text="¿Te gusta el proceso? ¡Empezemos!" />
      
      {/* Sección 3: Prueba social - Reviews */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{color: '#0A4A6E'}}>
              Lo que dicen nuestros estudiantes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Más de 1,000 estudiantes han transformado su fluidez con nosotros
            </p>
          </div>

          {/* Grid de testimonios */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "María González",
                country: "🇲🇽 México",
                rating: 5,
                text: "En 3 meses pasé de básico a conversacional. Los instructores son increíbles y las clases muy dinámicas.",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b642?w=64&h=64&fit=crop&crop=face"
              },
              {
                name: "David Chen",
                country: "🇺🇸 Estados Unidos", 
                rating: 5,
                text: "Aprender español nunca fue tan fácil. El método 1-a-1 hace toda la diferencia.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
              },
              {
                name: "Ana Rodríguez",
                country: "🇨🇴 Colombia",
                rating: 5,
                text: "Perfect for busy professionals. I improved my English speaking confidence dramatically.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
              },
              {
                name: "James Wilson",
                country: "🇬🇧 Reino Unido",
                rating: 5,
                text: "Los horarios flexibles me permitieron mantener mis clases incluso con mi trabajo demandante.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
              },
              {
                name: "Sofia Martínez",
                country: "🇦🇷 Argentina",
                rating: 5,
                text: "My English pronunciation improved so much! Native speakers make all the difference.",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face"
              },
              {
                name: "Michael Johnson",
                country: "🇨🇦 Canadá",
                rating: 5,
                text: "Excelente plataforma. En 6 meses logré el nivel que necesitaba para mi trabajo en México.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold" style={{color: '#0A4A6E'}}>{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.country}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" style={{color: '#F59E1C'}} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>

          {/* Video testimonios destacados */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative bg-gray-100 rounded-2xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
              <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{
                    background: 'linear-gradient(135deg, #1C7BB1 0%, #0A4A6E 100%)'
                  }}>
                    <div className="w-0 h-0 border-l-[12px] border-r-0 border-b-[8px] border-t-[8px] border-l-white border-r-transparent border-t-transparent border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-lg font-semibold" style={{color: '#0A4A6E'}}>Historia de éxito: Carlos</p>
                  <p className="text-sm text-gray-600">De principiante a avanzado en 8 meses</p>
                </div>
              </div>
            </div>
            
            <div className="relative bg-gray-100 rounded-2xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
              <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-200">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{
                    background: 'linear-gradient(135deg, #F59E1C 0%, #ea580c 100%)'
                  }}>
                    <div className="w-0 h-0 border-l-[12px] border-r-0 border-b-[8px] border-t-[8px] border-l-white border-r-transparent border-t-transparent border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-lg font-semibold" style={{color: '#0A4A6E'}}>Success Story: Emma</p>
                  <p className="text-sm text-gray-600">From shy to confident speaker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Slim #3 */}
      <CTASlim text="¿Quieres resultados como estos?" />
      
      {/* Sección 4: Instructores nativos */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{color: '#0A4A6E'}}>
              Conoce a tus instructores nativos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profesionales certificados de Latinoamérica y Estados Unidos listos para ayudarte
            </p>
          </div>

          {/* Grid 2x3 de instructores */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Carmen Ruiz",
                country: "🇲🇽 México",
                specialty: "Conversación",
                experience: "5 años exp.",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
                focus: ["Conversación", "Cultura"]
              },
              {
                name: "Miguel Torres",
                country: "🇨🇴 Colombia", 
                specialty: "Empresarial",
                experience: "8 años exp.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
                focus: ["Empresarial", "Exámenes"]
              },
              {
                name: "Sarah Johnson",
                country: "🇺🇸 Estados Unidos",
                specialty: "Pronunciación",
                experience: "6 años exp.",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b642?w=200&h=200&fit=crop&crop=face",
                focus: ["Conversación", "Pronunciación"]
              },
              {
                name: "Diego Morales",
                country: "🇦🇷 Argentina",
                specialty: "Gramática",
                experience: "7 años exp.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
                focus: ["Gramática", "Exámenes"]
              },
              {
                name: "Emily Davis",
                country: "🇨🇦 Canadá",
                specialty: "TOEFL/IELTS",
                experience: "9 años exp.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
                focus: ["Exámenes", "Empresarial"]
              },
              {
                name: "Roberto Silva",
                country: "🇪🇸 España",
                specialty: "Literatura",
                experience: "4 años exp.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
                focus: ["Conversación", "Cultura"]
              }
            ].map((instructor, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 hover:shadow-xl transition-all duration-300 group">
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <img 
                      src={instructor.image} 
                      alt={instructor.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg" style={{
                      background: 'linear-gradient(135deg, #F59E1C 0%, #fbbf24 100%)'
                    }}>
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-1" style={{color: '#0A4A6E'}}>{instructor.name}</h4>
                  <p className="text-sm text-gray-600 mb-1">{instructor.country}</p>
                  <p className="text-sm font-semibold mb-3" style={{color: '#F59E1C'}}>{instructor.specialty}</p>
                  <p className="text-xs text-gray-500 mb-4">{instructor.experience}</p>
                  
                  {/* Chips de enfoque */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {instructor.focus.map((focus, focusIndex) => (
                      <span 
                        key={focusIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full"
                        style={{
                          backgroundColor: focus === 'Conversación' ? '#0A4A6E' :
                                         focus === 'Empresarial' ? '#1C7BB1' :
                                         focus === 'Exámenes' ? '#F59E1C' :
                                         focus === 'Pronunciación' ? '#ea580c' :
                                         focus === 'Gramática' ? '#0A4A6E' :
                                         focus === 'Cultura' ? '#fbbf24' : '#6b7280',
                          color: 'white'
                        }}
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Card "Conoce más instructores" */}
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-3xl p-8 text-center border-2 border-dashed hover:shadow-xl transition-all duration-300 cursor-pointer group" style={{
              borderColor: '#F59E1C'
            }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{
                background: 'linear-gradient(135deg, #F59E1C 0%, #fbbf24 100%)'
              }}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2" style={{color: '#0A4A6E'}}>¿Quieres conocer más coaches?</h4>
              <p className="text-gray-600 text-sm mb-4">Tenemos más de 50 instructores nativos especializados en diferentes áreas</p>
              <div className="inline-flex items-center font-semibold" style={{color: '#F59E1C'}}>
                <span>Ver catálogo completo</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Slim #4 */}
      <CTASlim text="¡Elige tu instructor ideal!" />
      
      {/* Sección 5: Beneficios/Resultados */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{color: '#0A4A6E'}}>
              ¿Por qué elegir Passport to Fluency?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los resultados hablan por sí solos. Esto es lo que lograrás con nosotros
            </p>
          </div>

          {/* Grid 2x2 de beneficios */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Progreso 3x más rápido",
                description: "Método personalizado que acelera tu aprendizaje comparado con apps tradicionales",
                color: '#0A4A6E'
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "100% enfoque en tus metas",
                description: "Clases diseñadas específicamente para tus objetivos profesionales o personales",
                color: '#F59E1C'
              },
              {
                icon: <Headphones className="w-8 h-8" />,
                title: "Fluidez conversacional",
                description: "Practica con nativos reales, no con robots. Desarrolla confianza al hablar",
                color: '#1C7BB1'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Garantía de progreso",
                description: "Si no ves mejora en 30 días, te devolvemos tu dinero sin preguntas",
                color: '#F59E1C'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center group hover:shadow-xl p-6 rounded-3xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{
                  background: `linear-gradient(135deg, ${benefit.color} 0%, ${benefit.color}dd 100%)`
                }}>
                  <div style={{color: 'white'}}>{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{color: '#0A4A6E'}}>{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          {/* Métricas de resultados */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8" style={{color: '#0A4A6E'}}>Resultados reales de nuestros estudiantes</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-black mb-2" style={{color: '#F59E1C'}}>89%</div>
                <div className="text-sm text-gray-600">mejora su confianza al hablar</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black mb-2" style={{color: '#0A4A6E'}}>3.2x</div>
                <div className="text-sm text-gray-600">más rápido que apps</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black mb-2" style={{color: '#F59E1C'}}>95%</div>
                <div className="text-sm text-gray-600">completan su programa</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black mb-2" style={{color: '#0A4A6E'}}>30</div>
                <div className="text-sm text-gray-600">días promedio para fluidez</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Slim #5 */}
      <CTASlim text="¿Listo para estos resultados?" />
      
      {/* Sección 6: Demo de clase */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{color: '#0A4A6E'}}>
              Mira cómo es una clase real
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              3 minutos que cambiarán tu perspectiva sobre aprender idiomas
            </p>
          </div>

          {/* Video principal */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{
                    background: 'linear-gradient(135deg, #0A4A6E 0%, #1C7BB1 100%)'
                  }}>
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{color: '#0A4A6E'}}>Clase de Conversación con Carmen</h3>
                  <p className="text-gray-600">Estudiante intermedio mejorando pronunciación • 3:42 min</p>
                </div>
              </div>
              
              {/* Overlay de información */}
              <div className="absolute bottom-0 left-0 right-0 p-6" style={{
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))'
              }}>
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm">EN VIVO</span>
                    </div>
                    <span className="text-sm">👥 2.3K visualizaciones</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    <span className="text-sm">4.9 • Carmen R.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Características de la clase */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Feedback instantáneo",
                description: "Corrección en tiempo real de pronunciación y gramática"
              },
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: "Material personalizado",
                description: "Contenido adaptado a tus intereses y nivel actual"
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Certificación incluida",
                description: "Recibe certificados por cada nivel completado"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{
                  background: 'linear-gradient(135deg, #F59E1C 0%, #fbbf24 100%)'
                }}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h4 className="font-bold mb-2" style={{color: '#0A4A6E'}}>{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Slim #6 */}
      <CTASlim text="¡Reserva tu primera clase gratis!" />
      
      {/* Sección 7: Planes (teaser) */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{color: '#0A4A6E'}}>
              Planes que se adaptan a ti
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible, accesible y diseñado para tu éxito
            </p>
          </div>

          {/* Tarjetas de planes simplificadas */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Plan Básico */}
            <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2" style={{color: '#0A4A6E'}}>Plan Casual</h3>
                <div className="mb-6">
                  <span className="text-4xl font-black" style={{color: '#F59E1C'}}>$25</span>
                  <span className="text-gray-600">/clase</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5" style={{color: '#F59E1C'}} />
                    <span className="text-gray-700">Clases de 60 minutos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5" style={{color: '#F59E1C'}} />
                    <span className="text-gray-700">Horarios flexibles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5" style={{color: '#F59E1C'}} />
                    <span className="text-gray-700">Material incluido</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600">Perfecto para probar nuestro método</p>
              </div>
            </div>
            
            {/* Plan Popular */}
            <div className="relative bg-white rounded-3xl p-8 border-2 hover:shadow-2xl transition-all duration-300" style={{
              borderColor: '#F59E1C'
            }}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-2 text-sm font-bold text-white rounded-full" style={{
                  background: 'linear-gradient(135deg, #F59E1C 0%, #ea580c 100%)'
                }}>MÁS POPULAR</span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2" style={{color: '#0A4A6E'}}>Plan Intensivo</h3>
                <div className="mb-2">
                  <span className="text-4xl font-black" style={{color: '#F59E1C'}}>$20</span>
                  <span className="text-gray-600">/clase</span>
                </div>
                <div className="text-sm text-gray-500 mb-6">4 clases/mes • $80/mes</div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5" style={{color: '#F59E1C'}} />
                    <span className="text-gray-700">Todo del plan Casual</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5" style={{color: '#F59E1C'}} />
                    <span className="text-gray-700">Plan de estudio personalizado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5" style={{color: '#F59E1C'}} />
                    <span className="text-gray-700">Acceso a grabaciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5" style={{color: '#F59E1C'}} />
                    <span className="text-gray-700">Chat 24/7 con tu instructor</span>
                  </li>
                </ul>
                <p className="text-sm" style={{color: '#F59E1C'}}>Ahorra $20/mes • Progreso garantizado</p>
              </div>
            </div>
            
            {/* Plan Premium */}
            <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2" style={{color: '#0A4A6E'}}>Plan Inmersión</h3>
                <div className="mb-2">
                  <span className="text-4xl font-black" style={{color: '#F59E1C'}}>$15</span>
                  <span className="text-gray-600">/clase</span>
                </div>
                <div className="text-sm text-gray-500 mb-6">12 clases/mes • $180/mes</div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5" style={{color: '#F59E1C'}} />
                    <span className="text-gray-700">Todo del plan Intensivo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5" style={{color: '#F59E1C'}} />
                    <span className="text-gray-700">Clases grupales gratis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5" style={{color: '#F59E1C'}} />
                    <span className="text-gray-700">Preparación para exámenes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5" style={{color: '#F59E1C'}} />
                    <span className="text-gray-700">Certificado oficial</span>
                  </li>
                </ul>
                <p className="text-sm" style={{color: '#F59E1C'}}>Máximo ahorro • Resultados en 30 días</p>
              </div>
            </div>
          </div>

          {/* Call-to-action de planes */}
          <div className="text-center">
            <div className="bg-gradient-to-r p-8 rounded-3xl" style={{
              background: 'linear-gradient(135deg, #0A4A6E 0%, #F59E1C 100%)'
            }}>
              <h3 className="text-2xl font-bold text-white mb-4">🎁 Primera clase GRATIS + 50% descuento en tu primer mes</h3>
              <p className="text-blue-100 mb-6">Oferta válida solo por tiempo limitado. No se requiere tarjeta de crédito.</p>
              <Button 
                className="px-8 py-4 text-lg font-bold rounded-full bg-white hover:bg-gray-100 transition-all duration-300"
                style={{color: '#0A4A6E'}}
              >
                <span className="flex items-center gap-2">
                  <span>Empezar ahora GRATIS</span>
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Slim #7 */}
      <CTASlim text="¿Cuál plan es perfecto para ti?" />
      
      {/* Sección 8: FAQ */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{color: '#0A4A6E'}}>
              Preguntas frecuentes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Resolvemos todas tus dudas antes de empezar
            </p>
          </div>

          {/* Grid de FAQs */}
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "¿Necesito experiencia previa para empezar?",
                answer: "No necesitas experiencia previa. Nuestros instructores están capacitados para trabajar con estudiantes de todos los niveles, desde principiantes absolutos hasta avanzados. En tu primera clase evaluamos tu nivel y creamos un plan personalizado."
              },
              {
                question: "¿Cómo funciona la garantía de progreso?",
                answer: "Si después de 4 clases (30 días) sientes que no has progresado, te devolvemos el 100% de tu dinero sin hacer preguntas. Estamos tan seguros de nuestro método que podemos ofrecer esta garantía."
              },
              {
                question: "¿Qué pasa si necesito cancelar una clase?",
                answer: "Puedes cancelar o reprogramar tu clase hasta 24 horas antes sin penalización. Si cancelas con menos de 24 horas, la clase se considera utilizada, pero ofrecemos flexibilidad en casos de emergencia."
              },
              {
                question: "¿Los instructores están disponibles en mi horario?",
                answer: "Sí, tenemos instructores nativos en diferentes zonas horarias. Trabajamos con horarios desde las 6 AM hasta las 11 PM (hora del Pacífico), incluyendo fines de semana. Puedes reservar clases con hasta una semana de anticipación."
              },
              {
                question: "¿Qué tecnología necesito para las clases?",
                answer: "Solo necesitas una computadora, tableta o teléfono con conexión a internet estable, micrófono y cámara. Usamos plataformas sencillas como Zoom o Google Meet. Te ayudamos con la configuración en tu primera clase."
              },
              {
                question: "¿Ofrecen certificados al completar el programa?",
                answer: "Sí, al completar cada nivel recibes un certificado digital que puedes compartir en LinkedIn y usar para propósitos académicos o profesionales. Los certificados están respaldados por nuestros instructores certificados."
              },
              {
                question: "¿Puedo cambiar de instructor si no me adapto?",
                answer: "Por supuesto. Entendemos que la conexión con tu instructor es clave para el aprendizaje. Puedes solicitar un cambio en cualquier momento y te ayudaremos a encontrar el instructor perfecto para tu estilo de aprendizaje."
              },
              {
                question: "¿Qué incluye el material de estudio?",
                answer: "Cada clase incluye material personalizado: presentaciones, ejercicios, audios para práctica, y acceso a nuestra biblioteca de recursos. También recibes grabaciones de tus clases para repasar (en planes Intensivo e Inmersión)."
              }
            ].map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          
          {/* Card de soporte adicional */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-200">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{
                background: 'linear-gradient(135deg, #F59E1C 0%, #fbbf24 100%)'
              }}>
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{color: '#0A4A6E'}}>¿Tienes otra pregunta?</h3>
              <p className="text-gray-600 mb-4">Nuestro equipo de soporte está disponible 24/7 para ayudarte</p>
              <Button 
                className="px-6 py-2 rounded-full border-2 bg-transparent hover:bg-gray-50 transition-all duration-300"
                style={{
                  borderColor: '#F59E1C',
                  color: '#F59E1C'
                }}
              >
                Contactar soporte
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Final Grande - Con fondo de pasaporte */}
      <div className="relative py-20 overflow-hidden" style={{
        background: 'linear-gradient(135deg, #0A4A6E 0%, #1C7BB1 50%, #F59E1C 100%)'
      }}>
        {/* Fondo de pasaporte decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 transform rotate-12">
            <img src={passportLogo} alt="Passport" className="w-32 h-32" />
          </div>
          <div className="absolute bottom-10 right-10 transform -rotate-12">
            <img src={passportLogo} alt="Passport" className="w-40 h-40" />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45">
            <img src={passportLogo} alt="Passport" className="w-64 h-64 opacity-50" />
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              ¡Tu pasaporte a la fluidez te está esperando!
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
              Miles de estudiantes ya transformaron su vida profesional y personal. 
              <br />
              <strong>Tú puedes ser el siguiente.</strong>
            </p>
            
            {/* CTAs grandes lado a lado */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
              <Button 
                onClick={() => navigate('/es')}
                className="px-12 py-6 text-2xl font-bold rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 border-0 bg-white"
                style={{color: '#0A4A6E'}}
                data-testid="final-cta-learn-spanish"
              >
                <span className="flex items-center gap-3">
                  <span className="text-3xl">🇪🇸</span>
                  <span>Learn Spanish</span>
                  <ArrowRight className="w-8 h-8" />
                </span>
              </Button>
              
              <Button 
                onClick={() => navigate('/en')}
                className="px-12 py-6 text-2xl font-bold rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 border-0 bg-white"
                style={{color: '#0A4A6E'}}
                data-testid="final-cta-aprende-ingles"
              >
                <span className="flex items-center gap-3">
                  <span className="text-3xl">🇺🇸</span>
                  <span>Aprende Inglés</span>
                  <ArrowRight className="w-8 h-8" />
                </span>
              </Button>
            </div>
            
            {/* Incentivos finales */}
            <div className="grid md:grid-cols-3 gap-6 text-white">
              <div className="flex items-center gap-3 justify-center">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                <span>Primera clase GRATIS</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                <span>50% descuento primer mes</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                <span>Garantía de progreso 30 días</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer simple */}
      <div className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <img src={passportLogo} alt="Passport to Fluency" className="h-12" />
            </div>
            <p className="text-gray-600 mb-4">© 2024 Passport to Fluency. Todos los derechos reservados.</p>
            <div className="flex justify-center gap-8 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-700 transition-colors">Términos y Condiciones</a>
              <a href="#" className="hover:text-gray-700 transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-gray-700 transition-colors">Soporte</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA móvil fijo */}
      <MobileCTA />
    </div>
  );
}