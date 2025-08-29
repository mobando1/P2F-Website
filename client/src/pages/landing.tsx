import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Star, Users, Clock, ArrowRight, CheckCircle } from "lucide-react";
import passportLogo from "@assets/a1c5a1_9514ede9e3124d7a9adf78f5dcf07f28~mv2_1755803448396.png";
import onlineLearningImage from "@assets/generated_images/Online_language_learning_setup_dadfcf8f.png";

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

      <div className="container mx-auto px-4 py-4 relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-8 animate-fade-in">
          <img src={passportLogo} alt="Passport to Fluency" className="h-12 mx-auto mb-6" />
          
          {/* Compact single-line title */}
          <h1 className="mb-3 flex items-center justify-center gap-2 flex-wrap">
            <span className="text-3xl md:text-5xl font-black" style={{color: '#0A4A6E'}}>
              Habla
            </span>
            <span className="text-lg md:text-2xl font-normal text-gray-500">
              como un
            </span>
            <span className="text-3xl md:text-5xl font-black italic" style={{color: '#F59E1C'}}>
              nativo
            </span>
          </h1>
          
          {/* Compact subtitle */}
          <p className="text-base md:text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
            Clases personalizadas 1-a-1 con instructores nativos, 
            <span className="font-semibold text-[#0A4A6E]">disponibles 24/7</span>
          </p>

          {/* Minimal social proof - single line */}
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
            <div className="flex items-center text-gray-600">
              <Users className="w-4 h-4 mr-2" style={{color: '#0A4A6E'}} />
              <strong className="text-[#0A4A6E]">1,000+</strong> estudiantes activos
            </div>
            <div className="flex items-center text-gray-600">
              <Star className="w-4 h-4 mr-2" style={{color: '#0A4A6E'}} />
              <strong className="text-[#0A4A6E]">4.9</strong> calificación promedio
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-2" style={{color: '#0A4A6E'}} />
              <strong className="text-[#0A4A6E]">40</strong> minutos por clase
            </div>
          </div>

          {/* Compact language detection */}
          {detectedLanguage && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-blue-800 text-xs mb-4 inline-flex items-center">
              <Globe className="w-3 h-3 mr-2" />
              Detectamos que hablas {detectedLanguage} • We detected your language is {detectedLanguage}
            </div>
          )}
        </div>

        {/* Online Learning Visual */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-2xl">
            <img 
              src={onlineLearningImage} 
              alt="Clases de idiomas virtuales 1-a-1 con instructores nativos" 
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Main Options - Moved up to be visible above the fold */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Spanish Learning Card - Compact */}
          <Card 
            className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-[#F59E1C] bg-white rounded-2xl overflow-hidden relative animate-slide-left"
            onClick={() => navigate('/es')}
          >
            <CardContent className="p-6">
              <div className="text-center">
                {/* Compact flag icon */}
                <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center text-3xl border-2 border-red-100">
                  🇪🇸
                </div>
                
                <h2 className="text-2xl font-bold mb-3" style={{color: '#0A4A6E'}}>
                  Learn Spanish
                </h2>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Native Spanish instructors for English speakers. Master Spanish with personalized 1-on-1 coaching.
                </p>
                
                {/* Compact stats */}
                <div className="bg-orange-50 rounded-lg p-3 mb-4 border border-orange-100">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#F59E1C]">40</div>
                      <div className="text-xs text-gray-600">min sessions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">95%</div>
                      <div className="text-xs text-gray-600">success rate</div>
                    </div>
                  </div>
                </div>
                
                {/* Compact feature list */}
                <ul className="text-xs text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#F59E1C] rounded-full mr-2"></div>
                    Native Latin American coaches
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#F59E1C] rounded-full mr-2"></div>
                    100% virtual classes
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#F59E1C] rounded-full mr-2"></div>
                    Flexible scheduling
                  </li>
                </ul>
                
                {/* Compact CTA button */}
                <Button className="w-full bg-[#F59E1C] hover:bg-[#ea580c] text-white py-3 font-bold rounded-lg transition-all duration-300 hover:shadow-lg">
                  Start Learning Spanish
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* English Learning Card - Compact */}
          <Card 
            className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-[#1C7BB1] bg-white rounded-2xl overflow-hidden relative animate-slide-right"
            onClick={() => navigate('/en')}
          >
            <CardContent className="p-6">
              <div className="text-center">
                {/* Compact flag icon */}
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center text-3xl border-2 border-blue-100">
                  🇺🇸
                </div>
                
                <h2 className="text-2xl font-bold mb-3" style={{color: '#1C7BB1'}}>
                  Aprende Inglés
                </h2>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Instructores nativos de inglés para hispanohablantes. Domina el inglés con coaching personalizado 1-a-1.
                </p>
                
                {/* Compact stats */}
                <div className="bg-blue-50 rounded-lg p-3 mb-4 border border-blue-100">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#1C7BB1]">40</div>
                      <div className="text-xs text-gray-600">min sesiones</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">95%</div>
                      <div className="text-xs text-gray-600">tasa de éxito</div>
                    </div>
                  </div>
                </div>
                
                {/* Compact feature list */}
                <ul className="text-xs text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#1C7BB1] rounded-full mr-2"></div>
                    Coaches nativos angloparlantes
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#1C7BB1] rounded-full mr-2"></div>
                    Clases 100% virtuales
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#1C7BB1] rounded-full mr-2"></div>
                    Horarios flexibles
                  </li>
                </ul>
                
                {/* Compact CTA button */}
                <Button className="w-full bg-[#1C7BB1] hover:bg-[#0A4A6E] text-white py-3 font-bold rounded-lg transition-all duration-300 hover:shadow-lg">
                  Comenzar a Aprender Inglés
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Compact Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Elige tu idioma preferido para continuar • Choose your preferred language to continue
          </p>
        </div>
      </div>
    </div>
  );
}