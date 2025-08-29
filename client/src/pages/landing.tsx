import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Star, Users, Clock, ArrowRight } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
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
              <span style={{color: '#0A4A6E'}}>Habla como un</span>
              <span className="block italic" style={{color: '#F59E1C'}}>nativo</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-lg mb-4">
              Clases personalizadas 1-a-1 con instructores nativos
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 max-w-lg">
              <p className="text-blue-800 font-semibold text-lg">
                Selecciona el idioma que quieres aprender:
              </p>
            </div>

            {/* CTA Buttons - Prominent Brand Colors */}
            <div className="space-y-6">
              <Button 
                onClick={() => navigate('/es')}
                className="w-full sm:w-auto px-12 py-6 text-2xl font-black rounded-2xl transition-all duration-300 hover:shadow-2xl transform hover:scale-105 border-4"
                style={{backgroundColor: '#F59E1C', borderColor: '#ea580c', color: 'white'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ea580c'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F59E1C'}
                data-testid="button-learn-spanish"
              >
                🇪🇸 Learn Spanish →
              </Button>
              
              <Button 
                onClick={() => navigate('/en')}
                className="w-full sm:w-auto px-12 py-6 text-2xl font-black rounded-2xl transition-all duration-300 hover:shadow-2xl transform hover:scale-105 border-4 ml-0 sm:ml-6"
                style={{backgroundColor: '#0A4A6E', borderColor: '#1C7BB1', color: 'white'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1C7BB1'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0A4A6E'}
                data-testid="button-aprende-ingles"
              >
                🇺🇸 Aprende Inglés →
              </Button>
            </div>
          </div>

          {/* Right Side - Realistic Images */}
          <div className="relative flex justify-center lg:justify-end animate-slide-right">
            <div className="relative">
              {/* Main large image */}
              <div className="relative z-10 bg-white rounded-3xl p-6 shadow-2xl transform rotate-3">
                <img 
                  src={newLearningImage} 
                  alt="Clases de idiomas virtuales 1-a-1" 
                  className="w-80 h-64 object-cover rounded-2xl"
                />
              </div>
              
              {/* Smaller overlapping image - Brand colors */}
              <div className="absolute -top-8 -left-8 z-20 bg-white rounded-2xl p-4 shadow-2xl transform -rotate-6">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full mx-auto mb-2 flex items-center justify-center" style={{background: 'linear-gradient(135deg, #0A4A6E, #F59E1C)'}}>
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-bold" style={{color: '#0A4A6E'}}>1K+ activos</div>
                  </div>
                </div>
              </div>
              
              {/* Third decorative element */}
              <div className="absolute -bottom-4 -right-4 z-15 rounded-xl p-3 shadow-xl" style={{backgroundColor: '#F59E1C'}}>
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6 text-white" />
                  <span className="font-bold text-white">4.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Section - White Background like Preply */}
      <div className="bg-white py-8 absolute bottom-0 w-full">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Stat 1 */}
            <div>
              <div className="text-2xl md:text-3xl font-bold" style={{color: '#0A4A6E'}}>1,000+</div>
              <div className="text-sm text-gray-600">estudiantes activos</div>
            </div>
            
            {/* Stat 2 */}
            <div>
              <div className="text-2xl md:text-3xl font-bold" style={{color: '#F59E1C'}}>300,000+</div>
              <div className="text-sm text-gray-600">clases completadas</div>
            </div>
            
            {/* Stat 3 */}
            <div>
              <div className="text-2xl md:text-3xl font-bold" style={{color: '#0A4A6E'}}>40+</div>
              <div className="text-sm text-gray-600">idiomas disponibles</div>
            </div>
            
            {/* Stat 4 */}
            <div>
              <div className="text-2xl md:text-3xl font-bold" style={{color: '#F59E1C'}}>4.9 ⭐</div>
              <div className="text-sm text-gray-600">calificación promedio</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}