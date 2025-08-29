import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Star, Users, Clock, ArrowRight, CheckCircle } from "lucide-react";
import passportLogo from "@assets/a1c5a1_9514ede9e3124d7a9adf78f5dcf07f28~mv2_1755803448396.png";
import newLearningImage from "@assets/generated_images/Language_learning_photo_composition_f9db4f87.png";

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
          </div>

          {/* Right Side - Realistic Images */}
          <div className="relative flex justify-center lg:justify-end animate-slide-right">
            <div className="relative">
              {/* Main large image */}
              <div className="relative z-10 bg-white rounded-3xl p-2 shadow-xl transform rotate-3" style={{
                background: 'linear-gradient(135deg, rgba(10, 74, 110, 0.1) 0%, rgba(245, 158, 28, 0.1) 100%)',
                border: '3px solid white'
              }}>
                <img 
                  src={newLearningImage} 
                  alt="Clases de idiomas virtuales 1-a-1" 
                  className="w-80 h-64 object-cover rounded-2xl"
                />
              </div>
              
              {/* Smaller overlapping image - Elegant frame */}
              <div className="absolute -top-8 -left-8 z-20 bg-white rounded-2xl p-3 shadow-xl transform -rotate-6" style={{
                border: '2px solid white',
                background: 'linear-gradient(135deg, rgba(245, 158, 28, 0.05) 0%, rgba(10, 74, 110, 0.05) 100%)'
              }}>
                <div className="w-28 h-28 bg-white rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center" style={{background: 'linear-gradient(135deg, #0A4A6E, #F59E1C)'}}>
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xs font-bold" style={{color: '#0A4A6E'}}>1K+ activos</div>
                  </div>
                </div>
              </div>
              
              {/* Third decorative element */}
              <div className="absolute -bottom-4 -right-4 z-15 bg-white rounded-xl p-3 shadow-xl" style={{
                border: '2px solid white',
                background: 'linear-gradient(135deg, #F59E1C 0%, #fbbf24 100%)'
              }}>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-white fill-current" />
                  <span className="font-bold text-white text-sm">4.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Section - White Background like Preply */}
      <div className="bg-white py-8 absolute bottom-0 w-full">
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
    </div>
  );
}