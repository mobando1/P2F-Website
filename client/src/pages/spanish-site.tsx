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
import spanishClassImage from "@assets/generated_images/Virtual_Spanish_language_class_f68ba791.png";

// Importar imágenes corporativas
import passportImage from "@assets/Corporate Image Sept 2025 (6)_1756765151457.png";
import airplaneImage from "@assets/Corporate Image Sept 2025 (7)_1756765151458.png";
import airplaneCleanImage from "@assets/Corporate Image Sept 2025 (8)_1756765151458.png";
import laptopImage from "@assets/Corporate Image Sept 2025 (9)_1756765151458.png";
import worldImage from "@assets/Corporate Image Sept 2025 (10)_1756765151458.png";
import bookImage from "@assets/Corporate Image Sept 2025 (11)_1756765151459.png";
import passportVariantImage from "@assets/Corporate Image Sept 2025 (12)_1756765151459.png";

// Importar fotos de testimonios americanos
import benPhoto from "@assets/My Project from Passport2Fluency_1757071035990.png";
import jaclynPhoto from "@assets/Screenshot Mar 6 9 54 AM from Passport2Fluency (1)_1757071113091.jpg";
import rebeccaPhoto from "@assets/WhatsApp Image Jul 4 2023 from Passport2Fluency (1)_1757071144459.jpeg";
import { useLocation, Link } from "wouter";
import NavigationDropdown from "@/components/navigation-dropdown";
import HowItWorksTimeline from "@/components/how-it-works-timeline";
import PlanPreview from "@/components/plan-preview";
import PricingCards from "@/components/pricing-cards";
import { offerSpanish as c } from "@/content/offer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import {
  Globe, Star, Users, Clock, ArrowRight, ClipboardCheck,
  CheckCircle,
  Facebook, Instagram, Linkedin, Youtube, Mail, Building, Menu
} from "lucide-react";

/** Renamed from `booking-calendars` when the trial became a diagnostic. */
const DIAGNOSTIC_ANCHOR = "diagnostic";

export default function SpanishSite() {
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

  const goToEnglishSite = () => {
    navigate('/en');
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
                <Link href="/es/pricing" className="text-gray-700 hover:text-passport-orange transition-colors">
                  Plans & Pricing
                </Link>
                <NavigationDropdown language="en" currentPath="/es" />
                <Link href="/es/team" className="text-gray-700 hover:text-passport-orange transition-colors">
                  Team
                </Link>
                <Link href="/es/blog" className="text-gray-700 hover:text-passport-orange transition-colors">
                  Blog
                </Link>
              </nav>
              
              {/* Language Toggle Button - Always Visible */}
              <Button 
                onClick={goToEnglishSite}
                variant="outline" 
                size="sm"
                className="border-passport-blue text-passport-blue hover:bg-passport-blue hover:text-white"
              >
                🇺🇸 Learn English
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
                        href="/es/pricing" 
                        className="text-gray-700 hover:text-passport-orange transition-colors py-2 text-lg border-b border-gray-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Plans & Pricing
                      </Link>
                      
                      <div className="border-b border-gray-100 pb-2">
                        <div className="text-gray-700 py-2 text-lg mb-2">Programs</div>
                        <div className="pl-4 space-y-3">
                          <Link 
                            href="/es" 
                            className="block text-gray-600 hover:text-passport-orange transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Spanish for Adults
                          </Link>
                          <Link 
                            href="/es/children" 
                            className="block text-gray-600 hover:text-passport-orange transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Spanish for Children
                          </Link>
                          <Link 
                            href="/es/business" 
                            className="block text-gray-600 hover:text-passport-orange transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Spanish for Companies
                          </Link>
                        </div>
                      </div>
                      
                      <Link 
                        href="/es/team" 
                        className="text-gray-700 hover:text-passport-orange transition-colors py-2 text-lg border-b border-gray-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Team
                      </Link>
                      
                      <Link 
                        href="/es/blog" 
                        className="text-gray-700 hover:text-passport-orange transition-colors py-2 text-lg border-b border-gray-100"
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
      <section className="relative py-8 md:py-12 bg-gradient-to-b from-orange-50 to-white overflow-hidden">
        {/* Corporate background elements */}
        <div className="absolute top-8 left-8 opacity-8 z-0 hidden md:block">
          <img
            src={passportImage}
            alt=""
            className="w-32 h-32 object-contain transform rotate-12 rounded-3xl"
            loading="lazy"
          />
        </div>
        <div className="absolute bottom-8 right-8 opacity-10 z-0 hidden lg:block">
          <img
            src={worldImage}
            alt=""
            className="w-40 h-40 object-contain rounded-3xl"
            loading="lazy"
          />
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-6 z-0 hidden xl:block">
          <img
            src={bookImage}
            alt=""
            className="w-24 h-24 object-contain transform -rotate-12 rounded-3xl"
            loading="lazy"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center bg-orange-100 text-orange-800 rounded-full px-4 py-2 text-sm mb-6">
                <Globe className="w-4 h-4 mr-2" />
                {c.hero.badge}
              </div>
            </div>

            <FadeIn>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-8">
                <span className="text-passport-orange">{c.hero.h1Line1}</span><br />
                <span className="italic text-passport-blue">{c.hero.h1Line2}</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-10 max-w-2xl mx-auto">
                {c.hero.sub}
                <span className="font-semibold">{c.hero.subBold}</span>
              </p>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-10 md:mb-12 text-sm text-gray-600">
                <div className="flex items-center">
                  <ClipboardCheck className="w-4 h-4 mr-1 text-passport-orange" />
                  {c.hero.trust[0].label}<strong className="text-gray-900">{c.hero.trust[0].strong}</strong>{c.hero.trust[0].after}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1 text-passport-orange" />
                  {c.hero.trust[1].label}<strong className="text-gray-900">{c.hero.trust[1].strong}</strong>{c.hero.trust[1].after}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-passport-blue" />
                  {c.hero.trust[2].label}<strong className="text-gray-900">{c.hero.trust[2].strong}</strong>{c.hero.trust[2].after}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                <Button
                  onClick={() => handleBookingClick('adult')}
                  className="bg-passport-orange hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold"
                  size="lg"
                >
                  {c.hero.ctaPrimary}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  onClick={() => scrollToSection('your-plan')}
                  variant="outline"
                  className="border-passport-orange text-passport-orange hover:bg-passport-orange hover:text-white px-8 py-4 text-lg font-semibold"
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
      
      
      {/* How it Works - Timeline Visual */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white">
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

      {/* What's inside your Flight Plan — the section that makes the promise believable */}
      <PlanPreview content={c.planPreview} accent="orange" id="your-plan" />
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
      {/* Diagnostic — formerly "Booking Calendars" */}
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
            {/* Adults */}
            <div className="bg-gray-50 rounded-2xl p-8 h-full flex flex-col">
              <div className="text-center mb-6 min-h-[160px] flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-passport-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 min-h-[64px] flex items-center justify-center">
                    {c.diagnostic.cards[0].title}
                  </h3>
                </div>
                <p className="text-gray-600">{c.diagnostic.cards[0].body}</p>
              </div>
              <div className="flex-1">
                <BookingCTA language="en" type="adult" />
              </div>
            </div>

            {/* Kids */}
            <div className="bg-gray-50 rounded-2xl p-8 h-full flex flex-col">
              <div className="text-center mb-6 min-h-[160px] flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-passport-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 min-h-[64px] flex items-center justify-center">
                    {c.diagnostic.cards[1].title}
                  </h3>
                </div>
                <p className="text-gray-600">{c.diagnostic.cards[1].body}</p>
              </div>
              <div className="flex-1">
                <BookingCTA language="en" type="child" />
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
      <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
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
                    src={benPhoto}
                    alt="Ben Northrop"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Ben Northrop</div>
                    <div className="text-sm text-gray-600">🇺🇸 San Diego</div>
                    <div className="text-xs font-medium text-gray-500 italic mt-1">
                      Español para Adultos
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
                  "I decided to learn Spanish because most of my friends were from all over South America. When we would go out salsa dancing, everyone was speaking Spanish, and I wanted to join in! Passport2Fluency personalizes lessons for my specific needs!"
                </p>
              </CardContent>
            </Card></StaggerItem>

            <StaggerItem><Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={jaclynPhoto}
                    alt="Jaclyn Blohm"
                    className="w-12 h-12 rounded-full mr-4"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center 30%',
                      transform: 'scale(1.2)',
                      transformOrigin: 'center'
                    }}
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Jaclyn Blohm</div>
                    <div className="text-sm text-gray-600">🇺🇸 Corpus Christi</div>
                    <div className="text-xs font-medium text-gray-500 italic mt-1">
                      Español Intensivo
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
                  "I wanted to improve my Spanish to communicate with my family members and for travel. I chose Passport2fluency because I needed something virtual. My wonderful instructor Valentina makes things clear and sets me up for success!"
                </p>
              </CardContent>
            </Card></StaggerItem>

            <StaggerItem><Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={rebeccaPhoto}
                    alt="Rebecca Unrath"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Rebecca Unrath</div>
                    <div className="text-sm text-gray-600">🇺🇸 New Jersey</div>
                    <div className="text-xs font-medium text-gray-500 italic mt-1">
                      Español para Niños
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
                  "As a parent with Argentine and Cuban heritage, it was important that my twins maintain a strong connection to their roots and learn Spanish fluently. The interactive lessons and culturally relevant content have truly captivated my kids' interest."
                </p>
              </CardContent>
            </Card></StaggerItem>
          </StaggerContainer>
        </div>
      </section>
      {/* Plans & Pricing */}
      <PricingCards
        offerId="spanish"
        content={c.pricing}
        diagnosticAnchor={DIAGNOSTIC_ANCHOR}
        id="plans-pricing"
      />
      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <NewsletterSignup language="en" className="max-w-2xl mx-auto" />
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-passport-orange">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              {c.finalCta.title}
            </h2>
            <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
              {c.finalCta.subtitle}
            </p>
          </FadeIn>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <Button
              onClick={() => handleBookingClick('adult')}
              className="bg-white text-passport-orange hover:bg-gray-100 px-8 py-4 text-lg font-semibold w-full sm:w-auto"
              size="lg"
            >
              <Users className="w-5 h-5 mr-2" />
              {c.finalCta.btnAdult}
            </Button>
            <Button
              onClick={() => handleBookingClick('child')}
              className="bg-white text-passport-orange hover:bg-gray-100 px-8 py-4 text-lg font-semibold w-full sm:w-auto"
              size="lg"
            >
              <Star className="w-5 h-5 mr-2" />
              {c.finalCta.btnChild}
            </Button>
          </div>
          {/* The group-class objection, answered head on. */}
          <p className="text-orange-50 mt-6 text-base max-w-2xl mx-auto">
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
                <li><button onClick={() => scrollToSection('how-it-works')} className="hover:text-white transition-colors">{c.footer.linkHowItWorks}</button></li>
                <li><button onClick={() => scrollToSection('your-plan')} className="hover:text-white transition-colors">{c.planName}</button></li>
                <li><button onClick={() => scrollToSection('plans-pricing')} className="hover:text-white transition-colors">{c.footer.linkPricing}</button></li>
                <li><button onClick={() => scrollToSection(DIAGNOSTIC_ANCHOR)} className="hover:text-white transition-colors">{c.footer.linkDiagnostic}</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-white transition-colors">{c.footer.linkTestimonials}</button></li>
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
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
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
      {/* Discount Popup for Spanish learners */}
      {showDiscountPopup && (
        <DiscountPopup
          language="en"
          onClose={handleDiscountClose}
          onSubscribe={handleDiscountSubscribe}
        />
      )}
    </div>
  );
}