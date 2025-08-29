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
      background: '#ffffff'
    }}>

      {/* Top Navigation Bar */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <img src={passportLogo} alt="Passport to Fluency" className="h-16" />
          
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
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              <span style={{color: '#0A4A6E'}}>Learn faster with your best </span>
              <span style={{color: '#F59E1C'}}>language tutor.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mb-8">
              Personalized 1-on-1 lessons with native speakers from around the world.
            </p>

            {/* CTA principal - estilo Preply */}
            <Button 
              onClick={() => navigate('/es')}
              className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg mb-4 mr-4"
              style={{
                background: '#F59E1C',
                color: 'white'
              }}
              data-testid="button-get-started-spanish"
            >
              Learn Spanish
            </Button>
            
            <Button 
              onClick={() => navigate('/en')}
              className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg border-2"
              style={{
                background: 'transparent',
                color: '#0A4A6E',
                borderColor: '#0A4A6E'
              }}
              data-testid="button-get-started-english"
            >
              Aprende Inglés
            </Button>
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

      {/* Estadísticas prominentes - estilo Preply */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2" style={{color: '#0A4A6E'}}>1,000+</div>
              <div className="text-gray-600 font-medium">Experienced tutors</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2" style={{color: '#0A4A6E'}}>300,000+</div>
              <div className="text-gray-600 font-medium">5-star tutor reviews</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2" style={{color: '#0A4A6E'}}>40+</div>
              <div className="text-gray-600 font-medium">Languages taught</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2" style={{color: '#0A4A6E'}}>180+</div>
              <div className="text-gray-600 font-medium">Tutor nationalities</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2" style={{color: '#0A4A6E'}}>4.9</div>
              <div className="text-gray-600 font-medium">on the App Store</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sección principal - estilo Preply */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{color: '#0A4A6E'}}>
              Progress starts with the right tutor
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              2M+ learners. Over 1,000 tutors. Progress that's personal (and proven).
            </p>
          </div>
          
          {/* Imagen central como Preply */}
          <div className="flex justify-center mb-12">
            <img 
              src={newLearningImage} 
              alt="Real person learning with tutor" 
              className="w-full max-w-2xl h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4" style={{color: '#0A4A6E'}}>
              97% of learners say practicing with a real person is very important to their progress.
            </h3>
            <p className="text-gray-600 italic">From the 2025 Passport to Fluency Study</p>
          </div>
        </div>
      </div>
      
      {/* Cómo funciona - simplificado estilo Preply */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-6" style={{color: '#0A4A6E'}}>
              How Passport to Fluency works:
            </h2>
          </div>
          
          {/* 3 pasos simplificados como Preply */}
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=120&fit=crop&crop=face" 
                  alt="Find your tutor" 
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm" style={{color: '#0A4A6E'}}>Carmen</h4>
                    <p className="text-xs text-gray-600">Spanish tutor</p>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 fill-current mr-1" style={{color: '#F59E1C'}} />
                    <span className="text-xs">4.9</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{color: '#0A4A6E'}}>1. Find your tutor.</h3>
              <p className="text-gray-600">We'll connect you with a tutor who motivates, challenges, and supports you.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
                <img 
                  src={newLearningImage} 
                  alt="Start learning" 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{color: '#0A4A6E'}}>2. Start learning.</h3>
              <p className="text-gray-600">Your tutor will tailor every lesson to your learning goals.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
                <div className="h-32 bg-green-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl mb-2">📈</div>
                    <p className="text-sm font-semibold" style={{color: '#0A4A6E'}}>Progress Tracking</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{color: '#0A4A6E'}}>3. Make progress every week.</h3>
              <p className="text-gray-600">Build lasting confidence, one conversation at a time.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Garantía simple como Preply */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{color: '#0A4A6E'}}>
            Lessons you'll love. Guaranteed.
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Try another tutor for free if you're not satisfied.
          </p>
          
          <Button 
            onClick={() => navigate('/es')}
            className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg mr-4"
            style={{
              background: '#F59E1C',
              color: 'white'
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
      
      {/* Footer simple como Preply */}
      <div className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <img src={passportLogo} alt="Passport to Fluency" className="h-12" />
            </div>
            <p className="text-gray-600 mb-4">© 2024 Passport to Fluency. All rights reserved.</p>
            <div className="flex justify-center gap-8 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-700 transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-gray-700 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-700 transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}