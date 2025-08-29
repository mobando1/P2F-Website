import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BookingForm from "@/components/booking-form";
import NewsletterSignup from "@/components/newsletter-signup";
import DiscountPopup from "@/components/discount-popup";
import HighLevelCalendar from "@/components/highlevel-calendar";
import passportLogo from "@assets/a1c5a1_9514ede9e3124d7a9adf78f5dcf07f28~mv2_1755803448396.png";
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
                <NavigationDropdown language="en" currentPath={location} />
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      {/* How it Works - Clean & Dynamic Design */}
      <section id="how-it-works" className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Just 3 simple steps to start speaking Spanish with confidence
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            
            {/* Desktop: Layout en zigzag */}
            <div className="hidden md:block space-y-16">
              
              {/* Paso 1 - Left aligned */}
              <div className="flex items-center gap-12">
                <div className="flex-1 text-right">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-blue-100 hover:border-blue-300 group cursor-pointer relative">
                    
                    {/* Número grande y protagonista */}
                    <div className="absolute -left-6 top-1/2 transform -translate-y-1/2">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300">
                        <span className="text-white font-black text-2xl">1</span>
                      </div>
                    </div>
                    
                    <div className="ml-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Schedule your class
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        Pick the time that works best for you. Available 24/7, even last minute bookings.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Ícono central */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 group">
                    <Calendar className="w-12 h-12 text-white group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                </div>
                
                <div className="flex-1"></div>
              </div>
              
              {/* Paso 2 - Right aligned */}
              <div className="flex items-center gap-12">
                <div className="flex-1"></div>
                
                {/* Ícono central */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 group relative">
                    <VideoIcon className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
                    {/* Efecto pulsante de play */}
                    <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-110 group-hover:animate-ping transition-transform duration-300"></div>
                  </div>
                </div>
                
                <div className="flex-1 text-left">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-green-100 hover:border-green-300 group cursor-pointer relative">
                    
                    {/* Número grande y protagonista */}
                    <div className="absolute -right-6 top-1/2 transform -translate-y-1/2">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300">
                        <span className="text-white font-black text-2xl">2</span>
                      </div>
                    </div>
                    
                    <div className="mr-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Connect via video
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        Join your class through Google Meet from any device. Your instructor will be waiting for you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Paso 3 - Left aligned */}
              <div className="flex items-center gap-12">
                <div className="flex-1 text-right">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-orange-100 hover:border-orange-300 group cursor-pointer relative">
                    
                    {/* Número grande y protagonista */}
                    <div className="absolute -left-6 top-1/2 transform -translate-y-1/2">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300">
                        <span className="text-white font-black text-2xl">3</span>
                      </div>
                    </div>
                    
                    <div className="ml-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Practice and improve
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        Real conversation with instant feedback. Your progress is automatically tracked.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Ícono central */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 hover:animate-bounce transition-all duration-300 group">
                    <MessageCircle className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                
                <div className="flex-1"></div>
              </div>
              
            </div>
            
            {/* Mobile: Timeline vertical con conectores */}
            <div className="md:hidden space-y-8">
              
              {/* Paso 1 */}
              <div className="flex items-start gap-6 group">
                {/* Timeline con número */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-black text-xl">1</span>
                  </div>
                  <div className="w-1 h-12 bg-gradient-to-b from-blue-400 to-green-400 mt-4"></div>
                </div>
                
                {/* Contenido */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex-1 border border-blue-100 hover:border-blue-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Schedule your class
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Pick the time that works best for you. Available 24/7, even last minute bookings.
                  </p>
                </div>
              </div>
              
              {/* Paso 2 */}
              <div className="flex items-start gap-6 group">
                {/* Timeline con número */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-black text-xl">2</span>
                  </div>
                  <div className="w-1 h-12 bg-gradient-to-b from-green-400 to-orange-400 mt-4"></div>
                </div>
                
                {/* Contenido */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex-1 border border-green-100 hover:border-green-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                      <VideoIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Connect via video
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Join your class through Google Meet from any device. Your instructor will be waiting for you.
                  </p>
                </div>
              </div>
              
              {/* Paso 3 */}
              <div className="flex items-start gap-6 group">
                {/* Timeline con número */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-black text-xl">3</span>
                  </div>
                </div>
                
                {/* Contenido */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex-1 border border-orange-100 hover:border-orange-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Practice and improve
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Real conversation with instant feedback. Your progress is automatically tracked.
                  </p>
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
                        <h4 className="font-semibold text-gray-900">Business Programs</h4>
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
      
      {/* Programas Especializados - New Design */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-20 md:space-y-24">
            
            {/* Spanish for Children - Diseño Juguetón */}
            <Link href="/es/children" className="block group focus:outline-none focus:ring-4 focus:ring-orange-300 rounded-3xl">
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden relative">
                
                {/* Header visual con degradado */}
                <div className="bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-300 p-8 relative">
                  {/* Stickers decorativos */}
                  <div className="absolute top-4 left-6 text-2xl animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>✏️</div>
                  <div className="absolute top-4 right-6 text-2xl animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}>✨</div>
                  <div className="absolute bottom-4 left-6 text-2xl animate-bounce" style={{animationDelay: '2s', animationDuration: '3s'}}>🎵</div>
                  <div className="absolute bottom-4 right-6 text-2xl animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3s'}}>📖</div>
                  
                  {/* Ícono principal grande */}
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:-translate-y-1 transition-transform duration-300">
                    <Star className="w-10 h-10 md:w-12 md:h-12 text-orange-500" />
                  </div>
                </div>
                
                <div className="p-10 md:p-16 text-center">
                  {/* Título con fuente juguetona */}
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6" style={{fontFamily: 'Fredoka One, cursive'}}>
                    Spanish for Children
                  </h3>
                  
                  {/* Descripción */}
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                    Spark your child's love for Spanish with fun, interactive sessions designed specifically for young learners aged 5-17. Our experienced coaches make learning engaging through games, songs, and cultural activities.
                  </p>
                  
                  {/* Chips juguetones */}
                  <div className="flex flex-wrap justify-center gap-3 mb-8 md:gap-4">
                    <div className="hidden md:flex flex-wrap justify-center gap-4">
                      <span className="bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-200 text-orange-700 px-5 py-3 rounded-full text-sm font-bold hover:bg-gradient-to-r hover:from-orange-200 hover:to-yellow-200 transition-all duration-300 flex items-center gap-2 shadow-md">
                        <Users className="w-4 h-4" />
                        Ages 5-17
                      </span>
                      <span className="bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-200 text-orange-700 px-5 py-3 rounded-full text-sm font-bold hover:bg-gradient-to-r hover:from-orange-200 hover:to-yellow-200 transition-all duration-300 flex items-center gap-2 shadow-md">
                        <Gamepad2 className="w-4 h-4" />
                        Interactive Games
                      </span>
                      <span className="bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-200 text-orange-700 px-5 py-3 rounded-full text-sm font-bold hover:bg-gradient-to-r hover:from-orange-200 hover:to-yellow-200 transition-all duration-300 flex items-center gap-2 shadow-md">
                        <Globe className="w-4 h-4" />
                        Native Instructors
                      </span>
                      <span className="bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-200 text-orange-700 px-5 py-3 rounded-full text-sm font-bold hover:bg-gradient-to-r hover:from-orange-200 hover:to-yellow-200 transition-all duration-300 flex items-center gap-2 shadow-md">
                        <Globe className="w-4 h-4" />
                        Cultural Learning
                      </span>
                    </div>
                    
                    {/* Mobile: Scroll horizontal */}
                    <div className="md:hidden flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory w-full">
                      <span className="bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-200 text-orange-700 px-5 py-3 rounded-full text-sm font-bold hover:bg-gradient-to-r hover:from-orange-200 hover:to-yellow-200 transition-all duration-300 flex items-center gap-2 shadow-md snap-start flex-shrink-0">
                        <Users className="w-4 h-4" />
                        Ages 5-17
                      </span>
                      <span className="bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-200 text-orange-700 px-5 py-3 rounded-full text-sm font-bold hover:bg-gradient-to-r hover:from-orange-200 hover:to-yellow-200 transition-all duration-300 flex items-center gap-2 shadow-md snap-start flex-shrink-0">
                        <Gamepad2 className="w-4 h-4" />
                        Interactive Games
                      </span>
                      <span className="bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-200 text-orange-700 px-5 py-3 rounded-full text-sm font-bold hover:bg-gradient-to-r hover:from-orange-200 hover:to-yellow-200 transition-all duration-300 flex items-center gap-2 shadow-md snap-start flex-shrink-0">
                        <Globe className="w-4 h-4" />
                        Native Instructors
                      </span>
                      <span className="bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-200 text-orange-700 px-5 py-3 rounded-full text-sm font-bold hover:bg-gradient-to-r hover:from-orange-200 hover:to-yellow-200 transition-all duration-300 flex items-center gap-2 shadow-md snap-start flex-shrink-0">
                        <Globe className="w-4 h-4" />
                        Cultural Learning
                      </span>
                    </div>
                  </div>
                  
                  {/* Botón tipo app para niños */}
                  <div className="inline-block">
                    <div className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 hover:from-orange-600 hover:via-red-600 hover:to-orange-700 text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex items-center gap-4 group relative overflow-hidden">
                      <span className="relative z-10">Explore Kids Programs</span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                      {/* Efecto de rebote */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Business Spanish Programs - Diseño Premium */}
            <Link href="/es/business" className="block group focus:outline-none focus:ring-4 focus:ring-amber-300 rounded-3xl">
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden relative">
                
                {/* Franja superior dorada */}
                <div className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 h-2 w-full"></div>
                
                {/* Decoración geométrica de fondo */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-10 left-10 w-32 h-32 border border-gray-200 rounded-full"></div>
                  <div className="absolute bottom-10 right-10 w-24 h-24 border border-gray-200 rounded-lg rotate-45"></div>
                  <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-gray-200 rounded-full"></div>
                  {/* Líneas diagonales sutiles */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-gray-50 to-transparent transform rotate-12"></div>
                  </div>
                </div>
                
                <div className="p-10 md:p-16 text-center relative z-10">
                  {/* Ícono principal premium */}
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:-translate-y-1 group-hover:shadow-3xl transition-all duration-300 relative">
                    <Briefcase className="w-10 h-10 md:w-12 md:h-12 text-white" />
                    {/* Sello profesional efecto */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
                  </div>
                  
                  {/* Título corporativo */}
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 tracking-tight">
                    Business Spanish Programs
                  </h3>
                  
                  {/* Descripción */}
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                    Transform your career with professional Spanish training designed for the corporate world. Perfect for executives, sales teams, and professionals working with Spanish-speaking markets.
                  </p>
                  
                  {/* Chips corporativos */}
                  <div className="flex flex-wrap justify-center gap-3 mb-8 md:gap-4">
                    <div className="hidden md:flex flex-wrap justify-center gap-4">
                      <span className="bg-gradient-to-r from-gray-50 to-amber-50 border border-amber-200 text-amber-800 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-all duration-300 flex items-center gap-2 shadow-sm">
                        <Stethoscope className="w-4 h-4 stroke-1" />
                        Healthcare & Medical
                      </span>
                      <span className="bg-gradient-to-r from-gray-50 to-amber-50 border border-amber-200 text-amber-800 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-all duration-300 flex items-center gap-2 shadow-sm">
                        <Home className="w-4 h-4 stroke-1" />
                        Real Estate
                      </span>
                      <span className="bg-gradient-to-r from-gray-50 to-amber-50 border border-amber-200 text-amber-800 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-all duration-300 flex items-center gap-2 shadow-sm">
                        <TrendingUp className="w-4 h-4 stroke-1" />
                        Sales & Marketing
                      </span>
                      <span className="bg-gradient-to-r from-gray-50 to-amber-50 border border-amber-200 text-amber-800 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-all duration-300 flex items-center gap-2 shadow-sm">
                        <Scale className="w-4 h-4 stroke-1" />
                        Legal & Law
                      </span>
                    </div>
                    
                    {/* Mobile: Scroll horizontal */}
                    <div className="md:hidden flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory w-full">
                      <span className="bg-gradient-to-r from-gray-50 to-amber-50 border border-amber-200 text-amber-800 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-all duration-300 flex items-center gap-2 shadow-sm snap-start flex-shrink-0">
                        <Stethoscope className="w-4 h-4 stroke-1" />
                        Healthcare & Medical
                      </span>
                      <span className="bg-gradient-to-r from-gray-50 to-amber-50 border border-amber-200 text-amber-800 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-all duration-300 flex items-center gap-2 shadow-sm snap-start flex-shrink-0">
                        <Home className="w-4 h-4 stroke-1" />
                        Real Estate
                      </span>
                      <span className="bg-gradient-to-r from-gray-50 to-amber-50 border border-amber-200 text-amber-800 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-all duration-300 flex items-center gap-2 shadow-sm snap-start flex-shrink-0">
                        <TrendingUp className="w-4 h-4 stroke-1" />
                        Sales & Marketing
                      </span>
                      <span className="bg-gradient-to-r from-gray-50 to-amber-50 border border-amber-200 text-amber-800 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-all duration-300 flex items-center gap-2 shadow-sm snap-start flex-shrink-0">
                        <Scale className="w-4 h-4 stroke-1" />
                        Legal & Law
                      </span>
                    </div>
                  </div>
                  
                  {/* Botón premium con brillo animado */}
                  <div className="inline-block">
                    <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:via-yellow-600 hover:to-amber-700 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 group relative overflow-hidden">
                      <span className="relative z-10">Explore Business Programs</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                      {/* Efecto de brillo que cruza */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-in-out"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            
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
                <div className="flex text-yellow-400 mb-4">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-gray-700 mb-4">
                  "I decided to learn Spanish because most of my friends were from all over South America. When we would go out salsa dancing, everyone was speaking Spanish, and I wanted to join in! Passport2Fluency personalizes lessons for my specific needs!"
                </p>
                <div className="font-semibold text-gray-900">Ben Northrop</div>
                <div className="text-sm text-gray-600">Professional, San Diego</div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex text-yellow-400 mb-4">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-gray-700 mb-4">
                  "I wanted to improve my Spanish to communicate with my family members and for travel. I chose Passport2fluency because I needed something virtual. My wonderful instructor Valentina makes things clear and sets me up for success!"
                </p>
                <div className="font-semibold text-gray-900">Jaclyn Blohm</div>
                <div className="text-sm text-gray-600">Business Owner, Corpus Christi</div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex text-yellow-400 mb-4">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-gray-700 mb-4">
                  "As a parent with Argentine and Cuban heritage, it was important that my twins maintain a strong connection to their roots and learn Spanish fluently. The interactive lessons and culturally relevant content have truly captivated my kids' interest."
                </p>
                <div className="font-semibold text-gray-900">Rebecca Unrath</div>
                <div className="text-sm text-gray-600">Mother, New Jersey</div>
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