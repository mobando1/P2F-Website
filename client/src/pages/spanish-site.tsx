import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BookingForm from "@/components/booking-form";
import NewsletterSignup from "@/components/newsletter-signup";
import DiscountPopup from "@/components/discount-popup";
import HighLevelCalendar from "@/components/highlevel-calendar";
import passportLogo from "@assets/a1c5a1_9514ede9e3124d7a9adf78f5dcf07f28~mv2_1755803448396.png";
import spanishClassImage from "@assets/generated_images/Virtual_Spanish_language_class_f68ba791.png";

// Importar fotos de testimonios americanos
import benPhoto from "@assets/generated_images/Ben_Northrop_profile_photo_3a56904e.png";
import jaclynPhoto from "@assets/generated_images/Jaclyn_Blohm_profile_photo_a6995607.png";
import rebeccaPhoto from "@assets/generated_images/Rebecca_Unrath_profile_photo_db7568cc.png";
import { useLocation, Link } from "wouter";
import NavigationDropdown from "@/components/navigation-dropdown";
import { 
  Globe, Star, Users, Clock, ArrowRight, Calendar, 
  Headphones, VideoIcon, CheckCircle, MessageCircle,
  Facebook, Instagram, Linkedin, Youtube, Mail, Phone, Building,
  Gamepad2, Briefcase, Stethoscope, Home, TrendingUp, Scale
} from "lucide-react";

export default function SpanishSite() {
  // Removed modal state - now using integrated calendars
  const [showDiscountPopup, setShowDiscountPopup] = useState(false);
  const [, navigate] = useLocation();

  // Show discount popup after 7 seconds or on scroll for Spanish learners
  useEffect(() => {
    // Clear any previous popup state for testing
    localStorage.removeItem('discountPopupShown');
    
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
    const calendarSection = document.querySelector('#booking-calendars');
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiscountSubscribe = (email: string) => {
    // TODO: Integrate with HighLevel newsletter
    localStorage.setItem('discountPopupShown', 'true');
    console.log('Discount subscription:', email);
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
            <div className="flex items-center space-x-6">
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
              <Button 
                onClick={goToEnglishSite}
                variant="outline" 
                size="sm"
                className="border-passport-blue text-passport-blue hover:bg-passport-blue hover:text-white"
              >
                🇺🇸 Learn English
              </Button>
            </div>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center bg-orange-100 text-orange-800 rounded-full px-4 py-2 text-sm mb-6">
                <Globe className="w-4 h-4 mr-2" />
                For English speakers who want to master Spanish
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="text-passport-orange">Speak Spanish</span><br />
              <span className="italic text-passport-blue">like a native</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Personalized 1-on-1 classes with native Latin American instructors. 
              <span className="font-semibold"> Available 24/7, from anywhere.</span>
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1 text-passport-orange" />
                <strong className="text-gray-900">1,000+</strong> English speakers learning
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1 text-yellow-500" />
                <strong className="text-gray-900">4.9</strong> average rating
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1 text-passport-blue" />
                <strong className="text-gray-900">40-minute</strong> classes
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                onClick={() => handleBookingClick('adult')}
                className="bg-passport-orange hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold"
                size="lg"
              >
                Book Free Class
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                onClick={() => scrollToSection('how-it-works')}
                variant="outline" 
                className="border-passport-orange text-passport-orange hover:bg-passport-orange hover:text-white px-8 py-4 text-lg font-semibold"
                size="lg"
              >
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* How it Works - Timeline Visual */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Just 3 simple steps to start speaking Spanish with confidence
            </p>
          </div>

          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:block max-w-6xl mx-auto">
            <div className="relative">
              
              {/* Línea conectora horizontal con gradiente dinámico */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-900 via-blue-500 to-orange-400 transform -translate-y-1/2 z-0 rounded-full opacity-70" style={{background: 'linear-gradient(to right, #0A4A6E 0%, #1C7BB1 50%, #F59E1C 100%)'}}></div>
              
              {/* Grid de pasos */}
              <div className="grid grid-cols-3 gap-8 relative z-10">
                
                {/* Paso 1 - Azul */}
                <div className="text-center group">
                  <div className="relative mb-8">
                    {/* Círculo principal con ícono */}
                    <div className="w-24 h-24 bg-gradient-to-br rounded-full flex items-center justify-center mx-auto relative group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300 group-hover:shadow-blue-500/50" style={{background: 'linear-gradient(135deg, #0A4A6E 0%, #1C7BB1 100%)'}}>
                      <Calendar className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-200" />
                      
                      {/* Badge numérico en esquina superior derecha */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200" style={{background: 'linear-gradient(135deg, #083344 0%, #0A4A6E 100%)'}}>
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Schedule your class
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Pick the time that works best for you. Available 24/7, even last minute bookings.
                  </p>
                </div>

                {/* Paso 2 - Verde */}
                <div className="text-center group">
                  <div className="relative mb-8">
                    {/* Círculo principal con ícono */}
                    <div className="w-24 h-24 bg-gradient-to-br rounded-full flex items-center justify-center mx-auto relative group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300 group-hover:shadow-cyan-400/50" style={{background: 'linear-gradient(135deg, #1C7BB1 0%, #3DB5E6 100%)'}}>
                      <VideoIcon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-200" />
                      
                      {/* Badge numérico en esquina superior derecha */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200" style={{background: 'linear-gradient(135deg, #155e8a 0%, #1C7BB1 100%)'}}>
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Connect via video
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Join your class through Google Meet from any device. Your instructor will be waiting for you.
                  </p>
                </div>

                {/* Paso 3 - Naranja */}
                <div className="text-center group">
                  <div className="relative mb-8">
                    {/* Círculo principal con ícono */}
                    <div className="w-24 h-24 bg-gradient-to-br rounded-full flex items-center justify-center mx-auto relative group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300 group-hover:shadow-orange-400/50" style={{background: 'linear-gradient(135deg, #F59E1C 0%, #F9B949 100%)'}}>
                      <MessageCircle className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-200" />
                      
                      {/* Badge numérico en esquina superior derecha */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200" style={{background: 'linear-gradient(135deg, #ea580c 0%, #F59E1C 100%)'}}>
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Practice and improve
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Real conversation with instant feedback. Your progress is automatically tracked.
                  </p>
                </div>
                
              </div>
            </div>
          </div>

          {/* Mobile: Timeline Vertical */}
          <div className="md:hidden max-w-lg mx-auto">
            <div className="relative">
              
              {/* Línea vertical recta con gradiente */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b rounded-full opacity-70" style={{background: 'linear-gradient(to bottom, #0A4A6E 0%, #1C7BB1 50%, #F59E1C 100%)'}}></div>
              
              <div className="space-y-12">
                
                {/* Paso 1 - Azul */}
                <div className="flex items-start gap-6 group">
                  {/* Círculo con timeline */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center relative group-hover:shadow-lg transition-all duration-300 group-hover:shadow-blue-500/50" style={{background: 'linear-gradient(135deg, #0A4A6E 0%, #1C7BB1 100%)'}}>
                      <Calendar className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
                      
                      {/* Badge numérico */}
                      <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200" style={{background: 'linear-gradient(135deg, #083344 0%, #0A4A6E 100%)'}}>
                        <span className="text-white font-bold text-xs">1</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contenido */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Schedule your class
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Pick the time that works best for you. Available 24/7, even last minute bookings.
                    </p>
                  </div>
                </div>

                {/* Paso 2 - Verde */}
                <div className="flex items-start gap-6 group">
                  {/* Círculo con timeline */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center relative group-hover:shadow-lg transition-all duration-300 group-hover:shadow-cyan-400/50" style={{background: 'linear-gradient(135deg, #1C7BB1 0%, #3DB5E6 100%)'}}>
                      <VideoIcon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
                      
                      {/* Badge numérico */}
                      <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200" style={{background: 'linear-gradient(135deg, #155e8a 0%, #1C7BB1 100%)'}}>
                        <span className="text-white font-bold text-xs">2</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contenido */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Connect via video
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Join your class through Google Meet from any device. Your instructor will be waiting for you.
                    </p>
                  </div>
                </div>

                {/* Paso 3 - Naranja */}
                <div className="flex items-start gap-6 group">
                  {/* Círculo con timeline */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center relative group-hover:shadow-lg transition-all duration-300 group-hover:shadow-orange-400/50" style={{background: 'linear-gradient(135deg, #F59E1C 0%, #F9B949 100%)'}}>
                      <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
                      
                      {/* Badge numérico */}
                      <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200" style={{background: 'linear-gradient(135deg, #ea580c 0%, #F59E1C 100%)'}}>
                        <span className="text-white font-bold text-xs">3</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contenido */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Practice and improve
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Real conversation with instant feedback. Your progress is automatically tracked.
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Passport to Fluency?
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Native Latin American instructors
                    </h3>
                    <p className="text-gray-600">
                      All our teachers are native Spanish speakers from Latin America, with experience teaching English speakers.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Super flexible scheduling
                    </h3>
                    <p className="text-gray-600">
                      Book classes whenever you want, even 15 minutes in advance. Available 24/7 to fit your busy life.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Personalized method
                    </h3>
                    <p className="text-gray-600">
                      Each class adapts to your level and goals. Practical focus on real everyday conversation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Guaranteed progress
                    </h3>
                    <p className="text-gray-600">
                      95% of our students improve their fluency in the first 4 weeks or we give you your money back.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Try your first class free
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  Choose between our specialized programs
                </p>
                <div className="grid gap-4">
                  <Link href="#booking-calendars" className="block">
                    <div className="p-4 border-2 border-passport-orange rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors cursor-pointer">
                      <div className="flex items-center mb-2">
                        <Users className="w-5 h-5 text-passport-orange mr-2" />
                        <h4 className="font-semibold text-gray-900">Adult Classes</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">Professional conversation and business Spanish</p>
                    </div>
                  </Link>
                  <Link href="#spanish-for-children" className="block">
                    <div className="p-4 border-2 border-passport-orange rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors cursor-pointer">
                      <div className="flex items-center mb-2">
                        <Star className="w-5 h-5 text-passport-orange mr-2" />
                        <h4 className="font-semibold text-gray-900">Kids Classes</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">Fun, interactive learning for children</p>
                    </div>
                  </Link>
                  <Link href="#business-programs" className="block">
                    <div className="p-4 border-2 border-passport-blue rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
                      <div className="flex items-center mb-2">
                        <Building className="w-5 h-5 text-passport-blue mr-2" />
                        <h4 className="font-semibold text-gray-900">Spanish for Companies</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">Professional Spanish for corporate teams</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Booking Calendars */}
      <section id="booking-calendars" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Schedule Your Free Trial Class
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the program that best fits your needs. Same pricing, specialized teaching approach for each age group.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            {/* Adult Calendar */}
            <div className="bg-gray-50 rounded-2xl p-8 h-full flex flex-col">
              <div className="text-center mb-6 min-h-[160px] flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-passport-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 min-h-[64px] flex items-center justify-center">
                    Adult Spanish Classes
                  </h3>
                </div>
                <p className="text-gray-600">
                  Professional conversation, business Spanish, and cultural immersion
                </p>
              </div>
              <div className="flex-1">
                <HighLevelCalendar language="en" type="adult" className="bg-white" />
              </div>
            </div>

            {/* Kids Calendar */}
            <div className="bg-gray-50 rounded-2xl p-8 h-full flex flex-col">
              <div className="text-center mb-6 min-h-[160px] flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-passport-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 min-h-[64px] flex items-center justify-center">
                    Kids Spanish Classes
                  </h3>
                </div>
                <p className="text-gray-600">
                  Fun, interactive learning designed specifically for children ages 5-17
                </p>
              </div>
              <div className="flex-1">
                <HighLevelCalendar language="en" type="child" className="bg-white" />
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                <span className="font-semibold text-green-800">100% Risk-Free Trial</span>
              </div>
              <p className="text-green-700">
                No payment required • Meet your instructor first • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Plans & Pricing */}
      <section id="plans-pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Find the Perfect Plan to Speak Spanish Confidently
            </h2>
            <p className="text-xl text-gray-600">
              Personalized 1-on-1 coaching with native Latin American instructors. No contracts or fine print. Cancel anytime.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-passport-orange transition-colors">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Starter Flow</h3>
                <div className="text-3xl font-bold text-passport-orange mb-2">$119.96</div>
                <div className="text-gray-600 mb-1">per month</div>
                <div className="text-sm text-gray-500 mb-6">$29.99 per class</div>
                <p className="text-sm text-gray-600 mb-6">Perfect for maintaining steady progress with native coaches</p>
                <ul className="text-left space-y-2 mb-8 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    1 class per week (4 per month)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Private 1-on-1 sessions (40 min)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Native Latin American instructors
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    100% virtual - save time
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Flexible scheduling 24/7
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    No contract - Cancel anytime
                  </li>
                </ul>
                <Button 
                  onClick={() => window.open('https://buy.stripe.com/14AaEYa8Y4jFcUI01Ues007', '_blank')}
                  className="w-full bg-passport-orange hover:bg-orange-600 text-white py-2 font-semibold"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-passport-orange transition-colors">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Momentum Plan</h3>
                <div className="text-3xl font-bold text-passport-orange mb-2">$219.99</div>
                <div className="text-gray-600 mb-1">per month</div>
                <div className="text-sm text-gray-500 mb-6">$27.50 per class</div>
                <p className="text-sm text-gray-600 mb-6">Best for fast improvement and consistent conversation practice</p>
                <ul className="text-left space-y-2 mb-8 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    2 classes per week (8 per month)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Private 1-on-1 sessions (40 min)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Flexible scheduling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Cancel anytime
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Teacher support
                  </li>
                </ul>
                <Button 
                  onClick={() => window.open('https://buy.stripe.com/aFa9AU80Q3fB9Iwg0Ses008', '_blank')}
                  className="w-full bg-passport-orange hover:bg-orange-600 text-white py-2 font-semibold"
                >
                  Choose This Plan
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-passport-blue bg-blue-50 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-passport-blue text-white px-3 py-1 rounded-full text-xs font-semibold">
                  MOST POPULAR
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fluency Boost</h3>
                <div className="text-3xl font-bold text-passport-blue mb-2">$299.99</div>
                <div className="text-gray-600 mb-1">per month</div>
                <div className="text-sm text-gray-500 mb-6">$24.99 per class</div>
                <p className="text-sm text-gray-600 mb-6">For serious learners who want maximum results and cultural immersion</p>
                <ul className="text-left space-y-2 mb-8 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    3 classes per week (12 per month)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Private 1-on-1 sessions (40 min)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Flexible scheduling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Cancel anytime
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Teacher support
                  </li>
                </ul>
                <Button 
                  onClick={() => window.open('https://buy.stripe.com/4gM28sa8Yg2nbQE8yqes009', '_blank')}
                  className="w-full bg-passport-blue hover:bg-blue-700 text-white py-2 font-semibold"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={benPhoto} 
                    alt="Ben Northrop"
                    className="w-12 h-12 rounded-full object-cover mr-4"
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
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={jaclynPhoto} 
                    alt="Jaclyn Blohm"
                    className="w-12 h-12 rounded-full object-cover mr-4"
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
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={rebeccaPhoto} 
                    alt="Rebecca Unrath"
                    className="w-12 h-12 rounded-full object-cover mr-4"
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
            </Card>
          </div>
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <NewsletterSignup language="en" className="max-w-2xl mx-auto" />
        </div>
      </section>
      {/* Free Trial Section */}
      <section className="py-20 bg-passport-orange">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to speak Spanish with confidence?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join over 1,000 English speakers who are already improving their Spanish with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <Button 
              onClick={() => handleBookingClick('adult')}
              className="bg-white text-passport-orange hover:bg-gray-100 px-8 py-4 text-lg font-semibold w-full sm:w-auto"
              size="lg"
            >
              <Users className="w-5 h-5 mr-2" />
              Adult Classes
            </Button>
            <Button 
              onClick={() => handleBookingClick('child')}
              className="bg-white text-passport-orange hover:bg-gray-100 px-8 py-4 text-lg font-semibold w-full sm:w-auto"
              size="lg"
            >
              <Star className="w-5 h-5 mr-2" />
              Kids Classes
            </Button>
          </div>
          <p className="text-orange-100 mt-4 text-sm">
            Same great pricing, specialized teaching approach
          </p>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src={passportLogo} alt="Passport to Fluency" className="h-10 brightness-0 invert mb-4" />
              <p className="text-gray-400">
                Learn Spanish with native Latin American instructors, 24/7.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('how-it-works')} className="hover:text-white transition-colors">How It Works</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">Pricing</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-white transition-colors">Testimonials</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@passporttofluency.com
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (555) 123-4567
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
            <p>&copy; 2025 Passport to Fluency. All rights reserved.</p>
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