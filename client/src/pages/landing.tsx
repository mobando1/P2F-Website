import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Star, Users, Clock, ArrowRight, CheckCircle } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-b from-[#FDF8F3] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Curved wave background */}
        <div className="absolute top-0 left-0 w-full h-96 opacity-30">
          <svg viewBox="0 0 1200 320" className="w-full h-full">
            <path fill="url(#waveGradient)" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,170.7C960,181,1056,171,1152,165.3L1200,160L1200,0L1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1C7BB1" stopOpacity="0.1"/>
                <stop offset="50%" stopColor="#F59E1C" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#0A4A6E" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Floating globe illustration */}
        <div className="absolute top-20 right-10 w-32 h-32 opacity-20 animate-pulse">
          <div className="w-full h-full rounded-full border-4 border-passport-blue" style={{background: 'conic-gradient(from 0deg, #1C7BB1, #F59E1C, #0A4A6E, #1C7BB1)'}}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <img src={passportLogo} alt="Passport to Fluency" className="h-16 mx-auto mb-8" />
          
          {/* Enhanced typography with hierarchy */}
          <h1 className="mb-4 relative">
            <span className="block text-5xl md:text-7xl font-black" style={{color: '#0A4A6E'}}>
              Habla
            </span>
            <span className="block text-2xl md:text-3xl font-normal text-gray-500 my-2">
              como un
            </span>
            <span className="block text-5xl md:text-7xl font-black italic bg-gradient-to-r from-[#F59E1C] via-[#F9B949] to-[#F59E1C] bg-clip-text text-transparent animate-gradient-x">
              nativo
            </span>
            
            {/* Decorative curve behind title */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-96 h-32 opacity-30 -z-10">
              <svg viewBox="0 0 400 120" className="w-full h-full">
                <path stroke="url(#titleGradient)" strokeWidth="3" fill="none" d="M50,60 Q200,20 350,60 Q200,100 50,60" opacity="0.6"/>
                <defs>
                  <linearGradient id="titleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1C7BB1"/>
                    <stop offset="50%" stopColor="#F59E1C"/>
                    <stop offset="100%" stopColor="#0A4A6E"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Clases personalizadas 1-a-1 con instructores nativos, 
            <span className="font-semibold text-[#0A4A6E]"> disponibles 24/7</span>
          </p>

          {/* Enhanced language detection */}
          {detectedLanguage && (
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-full px-6 py-3 text-blue-800 text-sm mb-8 inline-flex items-center shadow-lg hover:shadow-xl transition-all duration-300">
              <Globe className="w-5 h-5 mr-2 text-[#1C7BB1]" />
              <span className="font-semibold">Detectamos que hablas {detectedLanguage} • We detected your language is {detectedLanguage}</span>
            </div>
          )}

          {/* Enhanced social proof badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg flex items-center border-2 border-blue-100 hover:border-[#1C7BB1] transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1C7BB1] to-[#0A4A6E] rounded-full flex items-center justify-center mr-3">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-[#0A4A6E]">1,000+</div>
                <div className="text-xs text-gray-600 font-semibold">estudiantes activos</div>
              </div>
            </div>
            
            <div className="bg-white rounded-full px-6 py-3 shadow-lg flex items-center border-2 border-yellow-100 hover:border-yellow-400 transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-3">
                <Star className="w-5 h-5 text-white fill-current" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-[#0A4A6E]">4.9</div>
                <div className="text-xs text-gray-600 font-semibold">calificación promedio</div>
              </div>
            </div>
            
            <div className="bg-white rounded-full px-6 py-3 shadow-lg flex items-center border-2 border-orange-100 hover:border-[#F59E1C] transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-[#F59E1C] to-[#ea580c] rounded-full flex items-center justify-center mr-3">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-[#0A4A6E]">40</div>
                <div className="text-xs text-gray-600 font-semibold">minutos por clase</div>
              </div>
            </div>
          </div>
        </div>

        {/* Connection line between sections */}
        <div className="flex justify-center mb-16">
          <div className="w-32 h-1 bg-gradient-to-r from-[#1C7BB1] via-[#F59E1C] to-[#0A4A6E] rounded-full opacity-60"></div>
        </div>

        {/* Main Options */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Spanish Learning Card - Enhanced */}
          <Card 
            className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 bg-white rounded-3xl overflow-hidden relative hover:-translate-y-2 animate-slide-left"
            onClick={() => navigate('/es')}
          >
            {/* Decorative top border */}
            <div className="h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-red-600"></div>
            
            <CardContent className="p-8 relative">
              {/* Decorative background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-red-400 to-yellow-400"></div>
              </div>
              
              <div className="text-center relative z-10">
                {/* Enhanced flag icon */}
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-100 via-yellow-50 to-red-100 rounded-full flex items-center justify-center text-4xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 border-4 border-white">
                  🇪🇸
                </div>
                
                <h2 className="text-3xl font-bold mb-3" style={{color: '#0A4A6E'}}>
                  Learn Spanish
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Native Spanish instructors for English speakers. Master Spanish with personalized 1-on-1 coaching.
                </p>
                
                {/* Enhanced stats section */}
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-5 mb-6 border border-orange-100">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#F59E1C]">40</div>
                      <div className="text-xs text-gray-600 font-semibold">min sessions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">95%</div>
                      <div className="text-xs text-gray-600 font-semibold">success rate</div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced feature list */}
                <ul className="text-sm text-gray-700 space-y-3 mb-8">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#F59E1C] mr-3 flex-shrink-0" />
                    <span className="font-medium">Native Latin American coaches</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#F59E1C] mr-3 flex-shrink-0" />
                    <span className="font-medium">100% virtual classes</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#F59E1C] mr-3 flex-shrink-0" />
                    <span className="font-medium">Flexible scheduling</span>
                  </li>
                </ul>
                
                {/* Enhanced CTA button */}
                <Button className="w-full bg-gradient-to-r from-[#F59E1C] to-[#ea580c] hover:from-[#ea580c] hover:to-[#F59E1C] text-white py-4 font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 group">
                  <span className="flex items-center justify-center">
                    Start Learning Spanish
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* English Learning Card - Enhanced */}
          <Card 
            className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 bg-white rounded-3xl overflow-hidden relative hover:-translate-y-2 animate-slide-right"
            onClick={() => navigate('/en')}
          >
            {/* Decorative top border */}
            <div className="h-2 bg-gradient-to-r from-blue-600 via-red-500 to-blue-800"></div>
            
            <CardContent className="p-8 relative">
              {/* Decorative background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
              </div>
              
              <div className="text-center relative z-10">
                {/* Enhanced flag icon */}
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-100 via-red-50 to-blue-100 rounded-full flex items-center justify-center text-4xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 border-4 border-white">
                  🇺🇸
                </div>
                
                <h2 className="text-3xl font-bold mb-3" style={{color: '#1C7BB1'}}>
                  Aprende Inglés
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Instructores nativos de inglés para hispanohablantes. Domina el inglés con coaching personalizado 1-a-1.
                </p>
                
                {/* Enhanced stats section */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-5 mb-6 border border-blue-100">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#1C7BB1]">40</div>
                      <div className="text-xs text-gray-600 font-semibold">min sesiones</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">95%</div>
                      <div className="text-xs text-gray-600 font-semibold">tasa de éxito</div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced feature list */}
                <ul className="text-sm text-gray-700 space-y-3 mb-8">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#1C7BB1] mr-3 flex-shrink-0" />
                    <span className="font-medium">Coaches nativos angloparlantes</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#1C7BB1] mr-3 flex-shrink-0" />
                    <span className="font-medium">Clases 100% virtuales</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#1C7BB1] mr-3 flex-shrink-0" />
                    <span className="font-medium">Horarios flexibles</span>
                  </li>
                </ul>
                
                {/* Enhanced CTA button */}
                <Button className="w-full bg-gradient-to-r from-[#1C7BB1] to-[#0A4A6E] hover:from-[#0A4A6E] hover:to-[#1C7BB1] text-white py-4 font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 group">
                  <span className="flex items-center justify-center">
                    Comenzar a Aprender Inglés
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
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