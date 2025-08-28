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
  Facebook, Instagram, Linkedin, Youtube, Mail, Phone, Building
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
      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Just 3 simple steps to start speaking Spanish with confidence
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:border-passport-orange transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-passport-orange" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">1. Schedule your class</h3>
                <p className="text-gray-600">
                  Pick the time that works best for you. Available 24/7, even last minute bookings.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-passport-orange transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <VideoIcon className="w-8 h-8 text-passport-orange" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">2. Connect via video</h3>
                <p className="text-gray-600">Join your class through Google Meet from any device. Your instructor will be waiting for you.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-passport-orange transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-passport-orange" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">3. Practice and improve</h3>
                <p className="text-gray-600">
                  Real conversation with instant feedback. Your progress is automatically tracked.
                </p>
              </CardContent>
            </Card>
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
                  <div className="p-4 border-2 border-passport-orange rounded-lg bg-orange-50">
                    <div className="flex items-center mb-2">
                      <Users className="w-5 h-5 text-passport-orange mr-2" />
                      <h4 className="font-semibold text-gray-900">Adult Classes</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Professional conversation and business Spanish</p>
                  </div>
                  <div className="p-4 border-2 border-passport-orange rounded-lg bg-orange-50">
                    <div className="flex items-center mb-2">
                      <Star className="w-5 h-5 text-passport-orange mr-2" />
                      <h4 className="font-semibold text-gray-900">Kids Classes</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Fun, interactive learning for children</p>
                  </div>
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">1 Class per Week</h3>
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
                  onClick={() => handleBookingClick('adult')}
                  className="w-full bg-passport-orange hover:bg-orange-600 text-white py-2 font-semibold"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-passport-orange transition-colors">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">2 Classes per Week</h3>
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
                  onClick={() => handleBookingClick('adult')}
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">3 Classes per Week</h3>
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
                  onClick={() => handleBookingClick('adult')}
                  className="w-full bg-passport-blue hover:bg-blue-700 text-white py-2 font-semibold"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Spanish for Children */}
      <section id="spanish-for-children" className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Spanish for Children
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Spark your child's love for Spanish with fun, interactive sessions designed specifically for young learners aged 5-17.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="mb-8">
                <div className="w-16 h-16 bg-passport-orange rounded-full flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Fun, Interactive Learning That Works
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Our experienced coaches provide personalized attention and engaging activities to build essential language skills in a vibrant learning environment.
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Age-Appropriate Curriculum</h4>
                    <p className="text-gray-600">Specially designed lessons that match your child's developmental stage and learning style.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Interactive Games & Activities</h4>
                    <p className="text-gray-600">Learning through play with songs, stories, and cultural activities that keep kids engaged.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Patient Native Instructors</h4>
                    <p className="text-gray-600">Experienced teachers who specialize in working with children and creating a supportive environment.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Cultural Connection</h4>
                    <p className="text-gray-600">Develop appreciation for Latin American cultures while building language skills and confidence.</p>
                  </div>
                </li>
              </ul>

              <Button 
                onClick={() => handleBookingClick('child')}
                className="bg-passport-orange hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold"
                size="lg"
              >
                <Star className="w-5 h-5 mr-2" />
                Book Free Trial for Kids
              </Button>
            </div>

            {/* Testimonial */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-gray-700 mb-6 text-lg italic">
                "I'm incredibly thrilled with the language learning journey my twins have embarked on with Passport to Fluency. The interactive lessons, engaging activities, and culturally relevant content have truly captivated my kids' interest and enthusiasm. They are not only learning the language but also developing a deep appreciation for their cultural roots."
              </p>
              <div className="font-semibold text-gray-900">Rebecca Unrath</div>
              <div className="text-sm text-gray-600">Parent of twins, New Jersey</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-3">
                <Star className="w-6 h-6 text-blue-500 mr-2" />
                <span className="font-semibold text-blue-800">Perfect for Ages 5-17</span>
              </div>
              <p className="text-blue-700">
                Same affordable pricing as adult classes • Specialized teaching methods for children • Fun and educational approach
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Programs */}
      <section id="business-programs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Business Spanish Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elevate your career and expand your business opportunities with professional Spanish training designed for the corporate world.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Main Value Proposition */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-16 h-16 bg-passport-blue rounded-full flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Transform Your Business Communication
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Connect with Spanish-speaking clients, colleagues, and markets with confidence. Our business-focused curriculum covers industry-specific vocabulary and professional communication skills.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Industry-specific vocabulary and terminology</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Professional presentation and negotiation skills</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Cultural business etiquette and practices</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-passport-blue to-blue-600 rounded-xl p-6 text-white">
                  <h4 className="text-xl font-semibold mb-4">Popular Industries:</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>• Healthcare & Medical</div>
                    <div>• Legal & Law</div>
                    <div>• Real Estate</div>
                    <div>• Banking & Finance</div>
                    <div>• Sales & Marketing</div>
                    <div>• Hospitality & Tourism</div>
                    <div>• Education</div>
                    <div>• Technology</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Program Options */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 hover:border-passport-blue transition-colors">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <Users className="w-12 h-12 text-passport-blue mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900">Individual Executive Coaching</h3>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Personalized curriculum based on your industry and role</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Flexible scheduling around your busy executive schedule</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Real business scenarios and case studies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Accelerated learning for immediate business impact</span>
                    </li>
                  </ul>
                  <Button 
                    onClick={() => handleBookingClick('adult')}
                    className="w-full bg-passport-blue hover:bg-blue-700 text-white"
                  >
                    Start Executive Program
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-passport-orange transition-colors">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <Building className="w-12 h-12 text-passport-orange mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900">Corporate Team Training</h3>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Group sessions designed for teams and departments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Company-specific vocabulary and procedures</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Consistent learning outcomes across your organization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Volume discounts and flexible billing options</span>
                    </li>
                  </ul>
                  <Button 
                    onClick={() => handleBookingClick('adult')}
                    className="w-full bg-passport-orange hover:bg-orange-600 text-white"
                  >
                    Get Corporate Quote
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Success Story */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Success Stories</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex text-yellow-400 mb-4">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <p className="text-lg text-gray-700 mb-6 italic">
                    "Within 3 months, I went from basic Spanish to confidently leading client meetings in Spanish. Our Hispanic client base has grown 40% since I started the program, and I attribute much of that success to being able to build authentic relationships."
                  </p>
                  <div className="font-semibold text-gray-900">Michael Thompson</div>
                  <div className="text-sm text-gray-600">Senior Sales Director, Austin Real Estate Group</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Business Impact Metrics:</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Client Satisfaction</span>
                      <span className="font-semibold text-green-600">+35%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">New Market Opportunities</span>
                      <span className="font-semibold text-green-600">+50%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Team Communication</span>
                      <span className="font-semibold text-green-600">+45%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Revenue Growth</span>
                      <span className="font-semibold text-green-600">+40%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Your Spanish Coaches
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from experienced native instructors from across Latin America who are passionate about sharing their language and culture.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-passport-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Maria Rodriguez</h3>
                <p className="text-passport-orange font-semibold mb-3">Lead Instructor • Colombia</p>
                <p className="text-gray-600 mb-4">
                  Master's in Education with 8+ years teaching Spanish to professionals. Specializes in business communication and cultural immersion.
                </p>
                <div className="text-sm text-gray-500">
                  💼 Business Spanish Expert • 🎓 M.Ed Universidad Nacional
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-passport-orange to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Carlos Martinez</h3>
                <p className="text-passport-blue font-semibold mb-3">Children's Specialist • Mexico</p>
                <p className="text-gray-600 mb-4">
                  Former elementary teacher with a passion for making Spanish fun and engaging for young learners through games and storytelling.
                </p>
                <div className="text-sm text-gray-500">
                  🌟 Kids Spanish Expert • 🎯 Interactive Learning Methods
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ana Gutierrez</h3>
                <p className="text-passport-orange font-semibold mb-3">Cultural Expert • Argentina</p>
                <p className="text-gray-600 mb-4">
                  Linguistics graduate focused on cultural nuances and regional variations. Helps students understand Spanish-speaking cultures.
                </p>
                <div className="text-sm text-gray-500">
                  🌍 Cultural Immersion • 📚 B.A. Linguistics
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-passport-blue to-passport-orange rounded-2xl p-8 text-white max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Why Our Instructors Make the Difference</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm">Native Speakers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">5+ years</div>
                  <div className="text-sm">Teaching Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">8 Countries</div>
                  <div className="text-sm">Latin American Representation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Spanish Learning Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Accelerate your Spanish learning journey with our expert tips, cultural insights, and practical guides.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-passport-orange rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Essential Business Spanish Phrases for Professionals
                </h3>
                <p className="text-gray-600 mb-4">
                  Master the key phrases and expressions you need to succeed in Spanish-speaking business environments.
                </p>
                <div className="text-sm text-passport-blue font-semibold">
                  Business Spanish • 5 min read
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-passport-blue rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Cultural Differences: Mexico vs Colombia vs Argentina
                </h3>
                <p className="text-gray-600 mb-4">
                  Understand the cultural nuances and regional differences that will help you connect better with native speakers.
                </p>
                <div className="text-sm text-passport-blue font-semibold">
                  Culture • 7 min read
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How to Help Your Child Learn Spanish at Home
                </h3>
                <p className="text-gray-600 mb-4">
                  Practical tips and fun activities to support your child's Spanish learning journey between classes.
                </p>
                <div className="text-sm text-passport-blue font-semibold">
                  Kids Learning • 4 min read
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              onClick={() => handleBookingClick('adult')}
              className="bg-passport-blue hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
            >
              Start Learning Today
            </Button>
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