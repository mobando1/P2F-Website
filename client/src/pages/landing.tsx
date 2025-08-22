import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Star, Users, Clock } from "lucide-react";
import passportLogo from "@assets/a1c5a1_9514ede9e3124d7a9adf78f5dcf07f28~mv2_1755803448396.png";

export default function Landing() {
  const [, navigate] = useLocation();
  const [detectedLanguage, setDetectedLanguage] = useState<string>('');

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('es')) {
      setDetectedLanguage('español');
    } else if (browserLang.startsWith('en')) {
      setDetectedLanguage('English');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-passport-orange/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-passport-blue/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <img src={passportLogo} alt="Passport to Fluency" className="h-24 mx-auto mb-8 brightness-0 invert animate-fade-in" />
            
            <h1 className="text-5xl md:text-7xl font-bold font-poppins text-white mb-6 animate-fade-in">
              Choose Your Path
            </h1>
            <h2 className="text-3xl md:text-4xl font-poppins text-white/80 mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Escoge Tu Camino
            </h2>
            <p className="text-xl md:text-2xl text-white/70 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Aprende el idioma que transformará tu vida con coaches reales y clases personalizadas online
            </p>

            {/* Language detection notification */}
            {detectedLanguage && (
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white/80 text-sm mb-8 inline-block animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Globe className="inline-block w-4 h-4 mr-2" />
                Hemos detectado que tu idioma es {detectedLanguage} • We detected your language is {detectedLanguage}
              </div>
            )}

            {/* Stats bar */}
            <div className="flex justify-center gap-8 mb-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-passport-orange mr-2" />
                  <span className="text-3xl font-bold text-white">1000+</span>
                </div>
                <div className="text-white/70 text-sm">Estudiantes • Students</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-3xl font-bold text-white">4.9</span>
                </div>
                <div className="text-white/70 text-sm">Rating • Calificación</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-3xl font-bold text-white">40</span>
                </div>
                <div className="text-white/70 text-sm">Min Clases • Min Classes</div>
              </div>
            </div>
          </div>
        
          <div className="grid md:grid-cols-2 gap-8">
            {/* Spanish Site - For English speakers learning Spanish */}
            <Card 
              className="group hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 border-0 bg-white/95 backdrop-blur-sm relative overflow-hidden animate-fade-in"
              onClick={() => navigate('/en')}
              style={{ animationDelay: '1s' }}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600"></div>
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6">🇪🇸</div>
                <h2 className="text-3xl font-bold text-passport-gray mb-4">
                  Learn Spanish
                </h2>
                <p className="text-gray-600 mb-6">
                  Native Spanish instructors for English speakers. Master Spanish with personalized 1-on-1 coaching sessions.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-passport-blue">40</div>
                    <div className="text-xs text-gray-600">min sessions</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-xs text-gray-600">success rate</div>
                  </div>
                </div>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center justify-center text-gray-600">
                    <span className="w-2 h-2 bg-passport-orange rounded-full mr-3"></span>
                    <span>Native Latin American coaches</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <span className="w-2 h-2 bg-passport-orange rounded-full mr-3"></span>
                    <span>100% virtual classes</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <span className="w-2 h-2 bg-passport-orange rounded-full mr-3"></span>
                    <span>Flexible scheduling</span>
                  </div>
                </div>
                <Button className="w-full passport-blue text-white hover:bg-blue-700 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                  Start Learning Spanish →
                </Button>
              </CardContent>
            </Card>

            {/* English Site - For Spanish speakers learning English */}
            <Card 
              className="group hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 border-0 bg-white/95 backdrop-blur-sm relative overflow-hidden animate-fade-in"
              onClick={() => navigate('/es')}
              style={{ animationDelay: '1.2s' }}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-800 via-red-600 to-blue-800"></div>
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6">🇺🇸</div>
                <h2 className="text-3xl font-bold text-passport-gray mb-4">
                  Aprende Inglés
                </h2>
                <p className="text-gray-600 mb-6">
                  Instructores nativos de inglés para hispanohablantes. Domina el inglés con sesiones de coaching personalizadas 1-a-1.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-passport-orange">40</div>
                    <div className="text-xs text-gray-600">min sesiones</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-xs text-gray-600">tasa de éxito</div>
                  </div>
                </div>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center justify-center text-gray-600">
                    <span className="w-2 h-2 bg-passport-blue rounded-full mr-3"></span>
                    <span>Coaches nativos angloparlantes</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <span className="w-2 h-2 bg-passport-blue rounded-full mr-3"></span>
                    <span>Clases 100% virtuales</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <span className="w-2 h-2 bg-passport-blue rounded-full mr-3"></span>
                    <span>Horarios flexibles</span>
                  </div>
                </div>
                <Button className="w-full passport-orange text-white hover:bg-orange-600 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                  Comenzar a Aprender Inglés →
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-white/70 text-sm animate-fade-in" style={{ animationDelay: '1.4s' }}>
              Choose your preferred language to continue • Elige tu idioma preferido para continuar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}