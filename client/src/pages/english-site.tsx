import { useState } from "react";
import { useTranslation } from "@/lib/translations";
import LanguageToggle from "@/components/language-toggle";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import PricingSection from "@/components/pricing-section";
import TestimonialsSection from "@/components/testimonials-section";
import BookingForm from "@/components/booking-form";
import { Button } from "@/components/ui/button";
import passportLogo from "@assets/a1c5a1_9514ede9e3124d7a9adf78f5dcf07f28~mv2_1755803448396.png";
import { useLocation } from "wouter";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, Clock } from "lucide-react";

export default function EnglishSite() {
  const [language, setLanguage] = useState<'en'>('en');
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingType, setBookingType] = useState<'adult' | 'child'>('adult');
  const { t } = useTranslation(language);
  const [, navigate] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookingClick = (type: 'adult' | 'child' = 'adult') => {
    setBookingType(type);
    setShowBookingForm(true);
  };

  const handlePlanSelect = (planId: string) => {
    // In a real app, this would redirect to payment processing
    console.log('Plan selected:', planId);
    alert('Redirecting to payment system...');
  };

  const goToSpanishSite = () => {
    navigate('/es');
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      <LanguageToggle 
        currentLanguage={language} 
        onLanguageChange={() => goToSpanishSite()}
      />

      <Navigation 
        t={t} 
        onSectionClick={scrollToSection}
        onBookingClick={() => handleBookingClick('adult')}
      />

      <HeroSection 
        t={t}
        language={language}
        onBookingClick={() => handleBookingClick('adult')}
        onPlansClick={() => scrollToSection('planes')}
      />

      <FeaturesSection t={t} />

      {/* Program Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins text-passport-gray mb-4 animate-fade-in">
              {t('programs.title')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Adult learning Spanish online" 
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-passport-blue to-transparent opacity-30 rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{t('programs.adults.title')}</h3>
                <p className="mb-4">{t('programs.adults.description')}</p>
                <Button 
                  onClick={() => scrollToSection('planes')}
                  className="passport-orange text-white hover:bg-orange-600"
                >
                  {t('programs.adults.cta')}
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Children learning Spanish online" 
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-passport-orange to-transparent opacity-30 rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{t('programs.children.title')}</h3>
                <p className="mb-4">{t('programs.children.description')}</p>
                <Button 
                  onClick={() => scrollToSection('planes')}
                  className="passport-blue text-white hover:bg-blue-700"
                >
                  {t('programs.children.cta')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PricingSection 
        t={t}
        onPlanSelect={handlePlanSelect}
        currency="$"
      />

      {/* Teachers Section */}
      <section id="coaches" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <img 
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400"
              alt="Professional Spanish teachers team" 
              className="w-full h-64 object-cover rounded-2xl shadow-lg mb-8 animate-fade-in"
            />
            
            <h2 className="text-4xl font-bold font-poppins text-passport-gray mb-4 animate-fade-in">
              {t('teachers.title')}
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in">{t('teachers.subtitle')}</p>
            
            <Button 
              className="passport-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-6 animate-fade-in"
            >
              {t('teachers.cta')}
            </Button>
          </div>
        </div>
      </section>

      <TestimonialsSection t={t} language={language} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-passport-blue to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 animate-fade-in">
            {t('cta.title')}
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <Button 
              onClick={() => handleBookingClick('adult')}
              className="passport-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-all duration-200 transform hover:scale-105 animate-fade-in"
            >
              {t('cta.adults')}
            </Button>
            <Button 
              onClick={() => handleBookingClick('child')}
              className="bg-white text-passport-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 animate-fade-in"
            >
              {t('cta.children')}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-passport-gray text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img 
                src={passportLogo}
                alt="Passport to Fluency Logo" 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-300 mb-6">
                {t('footer.description')}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-passport-orange transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-passport-orange transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-passport-orange transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-passport-orange transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('inicio')}
                    className="text-gray-300 hover:text-passport-orange transition-colors"
                  >
                    {t('nav.home')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('como-funciona')}
                    className="text-gray-300 hover:text-passport-orange transition-colors"
                  >
                    {t('nav.howItWorks')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('planes')}
                    className="text-gray-300 hover:text-passport-orange transition-colors"
                  >
                    {t('nav.plans')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('coaches')}
                    className="text-gray-300 hover:text-passport-orange transition-colors"
                  >
                    {t('nav.teachers')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('testimonios')}
                    className="text-gray-300 hover:text-passport-orange transition-colors"
                  >
                    {t('nav.testimonials')}
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center gap-2">
                  <Mail size={16} />
                  info@passport2fluency.com
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} />
                  +1 (555) 123-4567
                </p>
                <p className="flex items-center gap-2">
                  <Clock size={16} />
                  {t('footer.schedule')}
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-12 pt-8 text-center">
            <p className="text-gray-400">{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>

      {showBookingForm && (
        <BookingForm 
          t={t}
          language={language}
          studentType={bookingType}
          onClose={() => setShowBookingForm(false)}
        />
      )}
    </div>
  );
}
