import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import passportLogo from "@assets/a1c5a1_9514ede9e3124d7a9adf78f5dcf07f28~mv2_1755803448396.png";

export default function Landing() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-passport-blue via-blue-600 to-passport-orange flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <img src={passportLogo} alt="Passport to Fluency" className="h-20 mx-auto mb-8 brightness-0 invert" />
          <h1 className="text-4xl md:text-6xl font-bold font-poppins text-white mb-6">
            Passport to Fluency
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Choose your language learning journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Spanish Site - For English speakers learning Spanish */}
          <Card 
            className="group hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 border-0 bg-white/95 backdrop-blur-sm"
            onClick={() => navigate('/en')}
          >
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-6">🇺🇸</div>
              <h2 className="text-3xl font-bold text-passport-gray mb-4">
                Learn Spanish
              </h2>
              <p className="text-gray-600 mb-6">
                Native Spanish instructors for English speakers. Master Spanish with personalized 1-on-1 coaching sessions.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <span>✓ Native Latin American coaches</span>
                </div>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <span>✓ Flexible virtual classes</span>
                </div>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <span>✓ Results guaranteed</span>
                </div>
              </div>
              <Button className="w-full passport-blue text-white hover:bg-blue-700 py-6 text-lg font-semibold">
                Start Learning Spanish
              </Button>
            </CardContent>
          </Card>

          {/* English Site - For Spanish speakers learning English */}
          <Card 
            className="group hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 border-0 bg-white/95 backdrop-blur-sm"
            onClick={() => navigate('/es')}
          >
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-6">🇪🇸</div>
              <h2 className="text-3xl font-bold text-passport-gray mb-4">
                Aprende Inglés
              </h2>
              <p className="text-gray-600 mb-6">
                Instructores nativos de inglés para hispanohablantes. Domina el inglés con sesiones de coaching personalizadas 1-a-1.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <span>✓ Coaches nativos angloparlantes</span>
                </div>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <span>✓ Clases virtuales flexibles</span>
                </div>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <span>✓ Resultados garantizados</span>
                </div>
              </div>
              <Button className="w-full passport-orange text-white hover:bg-orange-600 py-6 text-lg font-semibold">
                Comenzar a Aprender Inglés
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-white/70 text-sm">
            Choose your preferred language to continue • Elige tu idioma preferido para continuar
          </p>
        </div>
      </div>
    </div>
  );
}
