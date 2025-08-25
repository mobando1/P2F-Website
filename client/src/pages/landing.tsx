import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Star, Users, Clock, ArrowRight } from "lucide-react";
import passportLogo from "@assets/a1c5a1_9514ede9e3124d7a9adf78f5dcf07f28~mv2_1755803448396.png";

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
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <img src={passportLogo} alt="Passport to Fluency" className="h-16 mx-auto mb-8" />
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            <span className="text-passport-blue">Habla </span>
            <span className="italic text-passport-orange">como un nativo</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Clases personalizadas 1-a-1 con instructores nativos, 
            <span className="font-semibold"> disponibles 24/7</span>
          </p>

          {/* Language detection */}
          {detectedLanguage && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 text-blue-800 text-sm mb-8 inline-flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              Detectamos que hablas {detectedLanguage} • We detected your language is {detectedLanguage}
            </div>
          )}

          {/* Social proof */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-gray-600">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1 text-passport-blue" />
              <strong className="text-gray-900">1,000+</strong> estudiantes activos
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
        </div>

        {/* Main Options */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Spanish Learning Card */}
          <Card 
            className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-passport-orange"
            onClick={() => navigate('/es')}
          >
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center text-3xl">
                  🇪🇸
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Learn Spanish
                </h2>
                
                <p className="text-gray-600 mb-6">
                  Native Spanish instructors for English speakers. Master Spanish with personalized 1-on-1 coaching.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-passport-orange">40</div>
                      <div className="text-xs text-gray-600">min sessions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">95%</div>
                      <div className="text-xs text-gray-600">success rate</div>
                    </div>
                  </div>
                </div>
                
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-passport-orange rounded-full mr-3"></div>
                    Native Latin American coaches
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-passport-orange rounded-full mr-3"></div>
                    100% virtual classes
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-passport-orange rounded-full mr-3"></div>
                    Flexible scheduling
                  </li>
                </ul>
                
                <Button className="w-full bg-passport-orange hover:bg-orange-600 text-white py-3 font-semibold">
                  Start Learning Spanish
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* English Learning Card */}
          <Card 
            className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-passport-blue"
            onClick={() => navigate('/en')}
          >
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                  🇺🇸
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Aprende Inglés
                </h2>
                
                <p className="text-gray-600 mb-6">
                  Instructores nativos de inglés para hispanohablantes. Domina el inglés con coaching personalizado 1-a-1.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-passport-blue">40</div>
                      <div className="text-xs text-gray-600">min sesiones</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">95%</div>
                      <div className="text-xs text-gray-600">tasa de éxito</div>
                    </div>
                  </div>
                </div>
                
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-passport-blue rounded-full mr-3"></div>
                    Coaches nativos angloparlantes
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-passport-blue rounded-full mr-3"></div>
                    Clases 100% virtuales
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-passport-blue rounded-full mr-3"></div>
                    Horarios flexibles
                  </li>
                </ul>
                
                <Button className="w-full bg-passport-blue hover:bg-blue-700 text-white py-3 font-semibold">
                  Comenzar a Aprender Inglés
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-600">
            Elige tu idioma preferido para continuar • Choose your preferred language to continue
          </p>
        </div>
      </div>
    </div>
  );
}