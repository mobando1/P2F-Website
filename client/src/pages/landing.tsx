import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Star, Users, Clock, Heart, Zap, Sparkles } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 relative overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-green-400/40 rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 bg-orange-400/35 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 right-16 w-16 h-16 bg-blue-400/40 rotate-12 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-pink-300/50 rotate-45 animate-spin" style={{ animationDelay: '1.5s', animationDuration: '8s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-purple-300/25 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-7xl w-full">
          <div className="text-center mb-20">
            <div className="relative mb-12">
              <img src={passportLogo} alt="Passport to Fluency" className="h-28 mx-auto brightness-0 invert animate-fade-in drop-shadow-2xl" />
              <div className="absolute -top-4 -right-4 animate-bounce">
                <Sparkles className="w-8 h-8 text-yellow-300" />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black font-poppins text-white mb-8 animate-fade-in relative">
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                Tu Aventura
              </span>
              <br />
              <span className="text-white drop-shadow-lg">
                Idiomática
              </span>
              <div className="absolute -top-6 right-0 animate-spin" style={{ animationDuration: '10s' }}>
                <Zap className="w-12 h-12 text-yellow-400" />
              </div>
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-bold text-white/90 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              🚀 Your Language Adventure Starts Here
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Conecta con coaches nativos increíbles y transforma tu vida aprendiendo un nuevo idioma de forma divertida y personalizada
            </p>

            {/* Language detection notification - more fun */}
            {detectedLanguage && (
              <div className="bg-white/20 backdrop-blur-lg border-2 border-white/30 rounded-3xl px-8 py-4 text-white text-sm mb-12 inline-flex items-center animate-fade-in shadow-2xl" style={{ animationDelay: '0.6s' }}>
                <Globe className="w-5 h-5 mr-3 animate-spin" style={{ animationDuration: '3s' }} />
                <span className="font-semibold">¡Hola! Detectamos que hablas {detectedLanguage} 👋</span>
              </div>
            )}

            {/* Fun stats with emojis */}
            <div className="flex flex-wrap justify-center gap-8 mb-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 text-center min-w-[140px] hover:scale-110 transition-transform duration-300">
                <div className="text-4xl mb-2">🎉</div>
                <div className="text-3xl font-black text-white">1000+</div>
                <div className="text-white/80 text-sm font-medium">Estudiantes Felices</div>
              </div>
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 text-center min-w-[140px] hover:scale-110 transition-transform duration-300">
                <div className="text-4xl mb-2">⭐</div>
                <div className="text-3xl font-black text-white">4.9</div>
                <div className="text-white/80 text-sm font-medium">Rating Increíble</div>
              </div>
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 text-center min-w-[140px] hover:scale-110 transition-transform duration-300">
                <div className="text-4xl mb-2">⚡</div>
                <div className="text-3xl font-black text-white">40</div>
                <div className="text-white/80 text-sm font-medium">Min de Diversión</div>
              </div>
            </div>
          </div>
        
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Spanish Learning Card */}
            <div 
              className="group cursor-pointer animate-fade-in"
              onClick={() => navigate('/en')}
              style={{ animationDelay: '1s' }}
            >
              <div className="bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 p-1 rounded-3xl hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-red-500/25">
                <div className="bg-white rounded-3xl p-8 h-full relative overflow-hidden">
                  <div className="absolute top-4 right-4 opacity-20 text-8xl">🌮</div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-yellow-500 rounded-2xl mb-6 mx-auto text-4xl shadow-lg">
                      🇪🇸
                    </div>
                    
                    <h2 className="text-3xl font-black text-gray-800 mb-4 group-hover:text-red-600 transition-colors">
                      ¡Aprende Español!
                    </h2>
                    
                    <div className="bg-red-50 rounded-2xl p-4 mb-6">
                      <p className="text-gray-700 font-medium">
                        🔥 Coaches nativos latinoamericanos <br/>
                        ⚡ Sesiones súper personalizadas <br/>
                        💯 Resultados garantizados
                      </p>
                    </div>
                    
                    <div className="flex justify-center gap-4 mb-6">
                      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl px-4 py-2 text-sm font-bold">
                        40 min 🕒
                      </div>
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl px-4 py-2 text-sm font-bold">
                        95% éxito 🎯
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white py-4 rounded-2xl font-black text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      ¡Vamos a Hablar Español! 🚀
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* English Learning Card */}
            <div 
              className="group cursor-pointer animate-fade-in"
              onClick={() => navigate('/es')}
              style={{ animationDelay: '1.2s' }}
            >
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-1 rounded-3xl hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-blue-500/25">
                <div className="bg-white rounded-3xl p-8 h-full relative overflow-hidden">
                  <div className="absolute top-4 right-4 opacity-20 text-8xl">🍔</div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6 mx-auto text-4xl shadow-lg">
                      🇺🇸
                    </div>
                    
                    <h2 className="text-3xl font-black text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                      Learn English Now!
                    </h2>
                    
                    <div className="bg-blue-50 rounded-2xl p-4 mb-6">
                      <p className="text-gray-700 font-medium">
                        🔥 Native English speakers <br/>
                        ⚡ Super personalized sessions <br/>
                        💯 Amazing results guaranteed
                      </p>
                    </div>
                    
                    <div className="flex justify-center gap-4 mb-6">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl px-4 py-2 text-sm font-bold">
                        40 min 🕒
                      </div>
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl px-4 py-2 text-sm font-bold">
                        95% success 🎯
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-2xl font-black text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      Let's Speak English! 🚀
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '1.4s' }}>
              <p className="text-white font-medium text-lg mb-2">
                🌟 ¡Elige tu aventura idiomática!
              </p>
              <p className="text-white/80 text-sm">
                Choose your language adventure • Escoge tu aventura de idiomas
              </p>
            </div>
            
            {/* Floating hearts animation */}
            <div className="mt-8 flex justify-center space-x-4 animate-fade-in" style={{ animationDelay: '1.6s' }}>
              <Heart className="w-6 h-6 text-pink-300 animate-bounce" style={{ animationDelay: '0s' }} />
              <Heart className="w-6 h-6 text-red-300 animate-bounce" style={{ animationDelay: '0.3s' }} />
              <Heart className="w-6 h-6 text-pink-300 animate-bounce" style={{ animationDelay: '0.6s' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}