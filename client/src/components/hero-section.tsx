import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  t: (key: string) => string;
  onBookingClick: () => void;
  onPlansClick: () => void;
  language: 'es' | 'en';
}

export default function HeroSection({ t, onBookingClick, onPlansClick, language }: HeroSectionProps) {
  const heroImage = language === 'es' 
    ? "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    : "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600";

  const bgImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080";

  return (
    <section id="inicio" className="relative bg-gradient-to-br from-passport-blue to-blue-700 text-white overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center" 
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 leading-tight animate-fade-in">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button 
                onClick={onBookingClick}
                className="passport-orange text-white px-4 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-all duration-200 transform hover:scale-105"
              >
                {t('hero.ctaPrimary')}
              </Button>
              <Button 
                onClick={onPlansClick}
                variant="outline"
                className="border-2 border-white text-white px-4 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-passport-blue transition-all duration-200"
              >
                {t('hero.ctaSecondary')}
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <img 
              src={heroImage}
              alt="English teacher conducting online lesson" 
              className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
            />
            
            <div className="absolute -top-4 -left-4 bg-white text-passport-blue p-4 rounded-xl shadow-lg animate-fade-in">
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-sm">{t('hero.statsStudents')}</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 passport-orange text-white p-4 rounded-xl shadow-lg animate-fade-in">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm">{t('hero.statsSuccess')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
