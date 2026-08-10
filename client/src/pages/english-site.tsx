import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import NewsletterSignup from "@/components/newsletter-signup";
import DiscountPopup from "@/components/discount-popup";
import BookingCTA from "@/components/booking-cta";
import passportLogo from "@assets/a1c5a1_9514ede9e3124d7a9adf78f5dcf07f28~mv2_1755803448396.png";
import englishClassImage from "@assets/generated_images/Virtual_English_language_class_a7fc49c2.png";

// Importar imágenes corporativas
import passportImage from "@assets/Corporate Image Sept 2025 (6)_1756765151457.png";
import airplaneImage from "@assets/Corporate Image Sept 2025 (7)_1756765151458.png";
import airplaneCleanImage from "@assets/Corporate Image Sept 2025 (8)_1756765151458.png";
import laptopImage from "@assets/Corporate Image Sept 2025 (9)_1756765151458.png";
import worldImage from "@assets/Corporate Image Sept 2025 (10)_1756765151458.png";
import bookImage from "@assets/Corporate Image Sept 2025 (11)_1756765151459.png";
import passportVariantImage from "@assets/Corporate Image Sept 2025 (12)_1756765151459.png";

// Importar fotos de testimonios latinos
import mariaPhoto from "@assets/generated_images/María_González_profile_photo_452eb39f.png";
import carlosPhoto from "@assets/generated_images/Carlos_Mendoza_profile_photo_e93c28e4.png";
import anaPhoto from "@assets/generated_images/Ana_Rodriguez_profile_photo_f1c9b450.png";
import { useLocation, Link } from "wouter";
import NavigationDropdown from "@/components/navigation-dropdown";
import HowItWorksTimeline from "@/components/how-it-works-timeline";
import PlanPreview from "@/components/plan-preview";
import PricingCards from "@/components/pricing-cards";
import { offerEnglish as c } from "@/content/offer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import {
  Globe, Star, Users, Clock, ArrowRight, ClipboardCheck,
  CheckCircle,
  Facebook, Instagram, Linkedin, Youtube, Mail, Building, Menu
} from "lucide-react";

/** Renamed from `booking-calendars` when the trial became a diagnostic. */
const DIAGNOSTIC_ANCHOR = "diagnostico";

export default function EnglishSite() {
  // Removed modal state - now using integrated calendars
  const [showDiscountPopup, setShowDiscountPopup] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, navigate] = useLocation();

  // Show the sample-plan popup after 7 seconds or on scroll.
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem('discountPopupShown')) {
        setShowDiscountPopup(true);
      }
    }, 7000);

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5 && !localStorage.getItem('discountPopupShown')) {
        setShowDiscountPopup(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookingClick = (type: 'adult' | 'child' = 'adult') => {
    const calendarSection = document.querySelector(`#${DIAGNOSTIC_ANCHOR}`);
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiscountSubscribe = (email: string) => {
    localStorage.setItem('discountPopupShown', 'true');
  };

  const handleDiscountClose = () => {
    setShowDiscountPopup(false);
    localStorage.setItem('discountPopupShown', 'true');
  };

  const goToSpanishSite = () => {
    navigate('/es');
  };

  const goToLanding = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img 
                src={passportLogo} 
                alt="Passport to Fluency" 
                className="h-10 cursor-pointer" 
                onClick={goToLanding}
              />
            </div>
            <div className="flex items-center space-x-4">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/en/pricing" className="text-gray-700 hover:text-passport-blue transition-colors">
                  Planes y Precios
                </Link>
                <NavigationDropdown language="es" currentPath="/en" />
                <Link href="/en/team" className="text-gray-700 hover:text-passport-blue transition-colors">
                  Equipo
                </Link>
                <Link href="/en/blog" className="text-gray-700 hover:text-passport-blue transition-colors">
                  Blog
                </Link>
              </nav>
              
              {/* Language Toggle Button - Always Visible */}
              <Button 
                onClick={goToSpanishSite}
                variant="outline" 
                size="sm"
                className="border-passport-orange text-passport-orange hover:bg-passport-orange hover:text-white"
              >
                🇪🇸 Aprende Español
              </Button>
              
              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="sm" className="p-2">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-72">
                    <div className="flex flex-col space-y-6 mt-8">
                      <Link 
                        href="/en/pricing" 
                        className="text-gray-700 hover:text-passport-blue transition-colors py-2 text-lg border-b border-gray-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Planes y Precios
                      </Link>
                      
                      <div className="border-b border-gray-100 pb-2">
                        <div className="text-gray-700 py-2 text-lg mb-2">Programas</div>
                        <div className="pl-4 space-y-3">
                          <Link 
                            href="/en" 
                            className="block text-gray-600 hover:text-passport-blue transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Inglés para Adultos
                          </Link>
                          <Link 
                            href="/en/children" 
                            className="block text-gray-600 hover:text-passport-blue transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Inglés para Niños
                          </Link>
                          <Link 
                            href="/en/business" 
                            className="block text-gray-600 hover:text-passport-blue transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Inglés para Empresas
                          </Link>
                        </div>
                      </div>
                      
                      <Link 
                        href="/en/team" 
                        className="text-gray-700 hover:text-passport-blue transition-colors py-2 text-lg border-b border-gray-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Equipo
                      </Link>
                      
                      <Link 
                        href="/en/blog" 
                        className="text-gray-700 hover:text-passport-blue transition-colors py-2 text-lg border-b border-gray-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Blog
                      </Link>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative py-8 md:py-12 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        {/* Corporate background elements */}
        <div className="absolute top-8 right-8 opacity-8 z-0 hidden md:block">
          <img
            src={passportVariantImage}
            alt=""
            className="w-32 h-32 object-contain transform -rotate-12 rounded-3xl"
            loading="lazy"
          />
        </div>
        <div className="absolute bottom-8 left-8 opacity-10 z-0 hidden lg:block">
          <img
            src={airplaneCleanImage}
            alt=""
            className="w-36 h-36 object-contain transform rotate-6 rounded-3xl"
            loading="lazy"
          />
        </div>
        <div className="absolute top-1/3 left-1/4 opacity-6 z-0 hidden xl:block">
          <img
            src={laptopImage}
            alt=""
            className="w-28 h-28 object-contain transform rotate-12 rounded-3xl"
            loading="lazy"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm mb-6">
                <Globe className="w-4 h-4 mr-2" />
                {c.hero.badge}
              </div>
            </div>

            <FadeIn>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-8">
                <span className="text-passport-blue">{c.hero.h1Line1}</span><br />
                <span className="italic text-passport-orange">{c.hero.h1Line2}</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-10 max-w-2xl mx-auto">
                {c.hero.sub}
                <span className="font-semibold">{c.hero.subBold}</span>
              </p>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-10 md:mb-12 text-sm text-gray-600">
                <div className="flex items-center">
                  <ClipboardCheck className="w-4 h-4 mr-1 text-passport-blue" />
                  {c.hero.trust[0].label}<strong className="text-gray-900">{c.hero.trust[0].strong}</strong>{c.hero.trust[0].after}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1 text-passport-blue" />
                  {c.hero.trust[1].label}<strong className="text-gray-900">{c.hero.trust[1].strong}</strong>{c.hero.trust[1].after}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-passport-orange" />
                  {c.hero.trust[2].label}<strong className="text-gray-900">{c.hero.trust[2].strong}</strong>{c.hero.trust[2].after}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                <Button
                  onClick={() => handleBookingClick('adult')}
                  className="bg-passport-blue hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
                  size="lg"
                >
                  {c.hero.ctaPrimary}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  onClick={() => scrollToSection('tu-plan')}
                  variant="outline"
                  className="border-passport-blue text-passport-blue hover:bg-passport-blue hover:text-white px-8 py-4 text-lg font-semibold"
                  size="lg"
                >
                  {c.hero.ctaSecondary}
                </Button>
              </div>
              {/* The only place on the page that mentions cost. Deliberately
                  small and below the fold of the decision. */}
              <p className="text-sm text-gray-500">{c.hero.ctaNote}</p>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* Cómo Funciona - Timeline Visual */}
      <section id="como-funciona" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.15] tracking-tight mb-5">
                {c.howItWorks.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                {c.howItWorks.subtitle}
              </p>
            </div>
          </FadeIn>

          <HowItWorksTimeline steps={c.howItWorks.steps} />
        </div>
      </section>

      {/* Qué hay dentro de tu Plan de Vuelo — la sección que hace creíble la promesa */}
      <PlanPreview content={c.planPreview} accent="blue" id="tu-plan" />
      {/* Features */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-[1.2] tracking-tight mb-5">
                {c.whyUs.title}
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <ul className="space-y-6">
                {c.whyUs.bullets.map((b) => (
                  <li key={b.title} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{b.title}</h3>
                      <p className="text-gray-600">{b.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {c.whyUs.card.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center">{c.whyUs.card.subtitle}</p>
                <div className="grid gap-4">
                  {c.whyUs.card.tiles.map((tile, i) => {
                    const Icon = [Users, Star, Building][i] ?? Users;
                    const orange = tile.accent === "orange";
                    return (
                      <Link key={tile.title} href={tile.href} className="block">
                        <div
                          className={`p-4 border-2 rounded-lg transition-colors cursor-pointer ${
                            orange
                              ? "border-passport-orange bg-orange-50 hover:bg-orange-100"
                              : "border-passport-blue bg-blue-50 hover:bg-blue-100"
                          }`}
                        >
                          <div className="flex items-center mb-2">
                            <Icon className={`w-5 h-5 mr-2 ${orange ? "text-passport-orange" : "text-passport-blue"}`} />
                            <h4 className="font-semibold text-gray-900">{tile.title}</h4>
                          </div>
                          <p className="text-sm text-gray-600">{tile.body}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          </FadeIn>
        </div>
      </section>
      {/* Diagnóstico — antes "Booking Calendars" */}
      {/* Legacy anchor: ads and emails still point at #booking-calendars. */}
      <span id="booking-calendars" aria-hidden="true" />
      <section id={DIAGNOSTIC_ANCHOR} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-[1.2] tracking-tight mb-5">
                {c.diagnostic.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                {c.diagnostic.subtitle}
              </p>
            </div>
          </FadeIn>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
            {/* Adultos */}
            <div className="bg-gray-50 rounded-2xl p-8 h-full flex flex-col">
              <div className="text-center mb-6 min-h-[160px] flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-passport-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 min-h-[64px] flex items-center justify-center">
                    {c.diagnostic.cards[0].title}
                  </h3>
                </div>
                <p className="text-gray-600">{c.diagnostic.cards[0].body}</p>
              </div>
              <div className="flex-1">
                <BookingCTA language="es" type="adult" />
              </div>
            </div>

            {/* Niños */}
            <div className="bg-gray-50 rounded-2xl p-8 h-full flex flex-col">
              <div className="text-center mb-6 min-h-[160px] flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-passport-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 min-h-[64px] flex items-center justify-center">
                    {c.diagnostic.cards[1].title}
                  </h3>
                </div>
                <p className="text-gray-600">{c.diagnostic.cards[1].body}</p>
              </div>
              <div className="flex-1">
                <BookingCTA language="es" type="child" />
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                <span className="font-semibold text-green-800">{c.diagnostic.risk.badge}</span>
              </div>
              <p className="text-green-700">{c.diagnostic.risk.line}</p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section id="testimonios" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-[1.2] tracking-tight mb-5">
                {c.testimonials.title}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                {c.testimonials.subtitle}
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4 md:gap-8">
            <StaggerItem><Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={mariaPhoto}
                    alt="María González"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">María González</div>
                    <div className="text-sm text-gray-600">🇲🇽 Ciudad de México</div>
                    <div className="text-xs font-medium text-gray-500 italic mt-1">
                      Inglés para Adultos
                    </div>
                  </div>
                  <div className="ml-auto flex text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
                <p className="text-gray-700">
                  "Necesitaba mejorar mi inglés para avanzar en mi carrera. Con Passport2Fluency, mi confianza al hablar inglés mejoró increíblemente en solo 3 meses. ¡Ahora puedo participar en reuniones internacionales sin problemas!"
                </p>
              </CardContent>
            </Card></StaggerItem>

            <StaggerItem><Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={anaPhoto}
                    alt="Ana Rodríguez"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Ana Rodríguez</div>
                    <div className="text-sm text-gray-600">🇦🇷 Los Angeles</div>
                    <div className="text-xs font-medium text-gray-500 italic mt-1">
                      Inglés para Niños
                    </div>
                  </div>
                  <div className="ml-auto flex text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
                <p className="text-gray-700">
                  "Mis hijos estudian en una escuela bilingüe y yo no podía ayudarlos con sus tareas en inglés. Después de 6 meses con Passport2Fluency, ahora puedo ayudarlos y hasta leer cuentos en inglés. ¡Es increíble!"
                </p>
              </CardContent>
            </Card></StaggerItem>

            <StaggerItem><Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={carlosPhoto}
                    alt="Carlos Mendoza"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Carlos Mendoza</div>
                    <div className="text-sm text-gray-600">🇨🇴 Phoenix</div>
                    <div className="text-xs font-medium text-gray-500 italic mt-1">
                      Inglés Intensivo
                    </div>
                  </div>
                  <div className="ml-auto flex text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
                <p className="text-gray-700">
                  "Tengo un restaurante y muchos clientes hablan inglés. Antes perdía ventas porque no podía comunicarme bien. Ahora, después de estudiar con Passport2Fluency, mis ventas han aumentado 40% ¡y tengo más confianza!"
                </p>
              </CardContent>
            </Card></StaggerItem>
          </StaggerContainer>
        </div>
      </section>
      {/* Planes y Precios */}
      <PricingCards
        offerId="english"
        content={c.pricing}
        diagnosticAnchor={DIAGNOSTIC_ANCHOR}
        id="planes-precios"
      />
      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <NewsletterSignup language="es" className="max-w-2xl mx-auto" />
        </div>
      </section>
      {/* CTA final */}
      <section className="py-16 md:py-24 bg-passport-blue">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              {c.finalCta.title}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {c.finalCta.subtitle}
            </p>
          </FadeIn>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <Button
              onClick={() => handleBookingClick('adult')}
              className="bg-white text-passport-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold w-full sm:w-auto"
              size="lg"
            >
              <Users className="w-5 h-5 mr-2" />
              {c.finalCta.btnAdult}
            </Button>
            <Button
              onClick={() => handleBookingClick('child')}
              className="bg-white text-passport-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold w-full sm:w-auto"
              size="lg"
            >
              <Star className="w-5 h-5 mr-2" />
              {c.finalCta.btnChild}
            </Button>
          </div>
          {/* La objeción de las clases grupales, respondida de frente. */}
          <p className="text-blue-100 mt-6 text-base max-w-2xl mx-auto">
            <span className="font-semibold text-white">{c.finalCta.objection.bold}</span>
            {c.finalCta.objection.rest}
          </p>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div>
              <img src={passportLogo} alt="Passport to Fluency" className="h-10 brightness-0 invert mb-4" loading="lazy" />
              <p className="text-gray-400">{c.footer.tagline}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">{c.footer.quickLinks}</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('como-funciona')} className="hover:text-white transition-colors">{c.footer.linkHowItWorks}</button></li>
                <li><button onClick={() => scrollToSection('tu-plan')} className="hover:text-white transition-colors">{c.planName}</button></li>
                <li><button onClick={() => scrollToSection('planes-precios')} className="hover:text-white transition-colors">{c.footer.linkPricing}</button></li>
                <li><button onClick={() => scrollToSection(DIAGNOSTIC_ANCHOR)} className="hover:text-white transition-colors">{c.footer.linkDiagnostic}</button></li>
                <li><button onClick={() => scrollToSection('testimonios')} className="hover:text-white transition-colors">{c.footer.linkTestimonials}</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">{c.footer.contact}</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@passporttofluency.com
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Youtube className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>{c.footer.copyright}</p>
          </div>
        </div>
      </footer>
      {/* Modal removed - calendars now integrated directly in page */}
      {/* Discount Popup */}
      {/* Discount Popup for English learners */}
      {showDiscountPopup && (
        <DiscountPopup
          language="es"
          onClose={handleDiscountClose}
          onSubscribe={handleDiscountSubscribe}
        />
      )}
    </div>
  );
}