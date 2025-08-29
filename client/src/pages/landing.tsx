import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Star, Users, Clock, ArrowRight } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 overflow-hidden">
      {/* Top Navigation Bar */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <img src={passportLogo} alt="Passport to Fluency" className="h-10" />
          
          {/* Language detection in top right */}
          {detectedLanguage && (
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 text-white text-sm flex items-center">
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
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              Habla como un
              <span className="block text-yellow-300 italic">nativo</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-lg">
              Clases personalizadas 1-a-1 con instructores nativos
            </p>

            {/* CTA Buttons - Preply Style */}
            <div className="space-y-4">
              <Button 
                onClick={() => navigate('/es')}
                className="bg-black hover:bg-gray-800 text-white px-10 py-5 text-xl font-bold rounded-full transition-all duration-300 hover:shadow-2xl transform hover:scale-105 w-full sm:w-auto"
                data-testid="button-learn-spanish"
              >
                Learn Spanish →
              </Button>
              
              <Button 
                onClick={() => navigate('/en')}
                className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 px-10 py-5 text-xl font-bold rounded-full transition-all duration-300 backdrop-blur-sm transform hover:scale-105 w-full sm:w-auto ml-0 sm:ml-4"
                data-testid="button-aprende-ingles"
              >
                Aprende Inglés →
              </Button>
            </div>
          </div>

          {/* Right Side - Realistic Images */}
          <div className="relative flex justify-center lg:justify-end animate-slide-right">
            <div className="relative">
              {/* Main large image */}
              <div className="relative z-10 bg-white rounded-3xl p-6 shadow-2xl transform rotate-3">
                <img 
                  src={onlineLearningImage} 
                  alt="Clases de idiomas virtuales 1-a-1" 
                  className="w-80 h-64 object-cover rounded-2xl"
                />
              </div>
              
              {/* Smaller overlapping image - simulating Preply's style */}
              <div className="absolute -top-8 -left-8 z-20 bg-white rounded-2xl p-4 shadow-2xl transform -rotate-6">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-bold text-gray-700">1K+ activos</div>
                  </div>
                </div>
              </div>
              
              {/* Third decorative element */}
              <div className="absolute -bottom-4 -right-4 z-15 bg-yellow-300 rounded-xl p-3 shadow-xl">
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6 text-yellow-600" />
                  <span className="font-bold text-gray-800">4.9</span>
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
              <div className="text-2xl md:text-3xl font-bold text-gray-800">1,000+</div>
              <div className="text-sm text-gray-600">estudiantes activos</div>
            </div>
            
            {/* Stat 2 */}
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800">300,000+</div>
              <div className="text-sm text-gray-600">clases completadas</div>
            </div>
            
            {/* Stat 3 */}
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800">40+</div>
              <div className="text-sm text-gray-600">idiomas disponibles</div>
            </div>
            
            {/* Stat 4 */}
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800">4.9 ⭐</div>
              <div className="text-sm text-gray-600">calificación promedio</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}