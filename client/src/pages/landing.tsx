import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Star, Users, Clock, ArrowRight, CheckCircle, ChevronDown, BookOpen, Headphones, Award, TrendingUp, Play, Zap, Target, Shield, HelpCircle, Plus, Minus, X } from "lucide-react";
import passportLogo from "@assets/a1c5a1_9514ede9e3124d7a9adf78f5dcf07f28~mv2_1755803448396.png";
import newLearningImage from "@assets/generated_images/Student_learning_with_online_tutor_5c3a43c2.png";
import corporateTeamImage from "@assets/generated_images/Corporate_team_video_conference_9293db31.png";

// Importar imágenes corporativas
import passportImage from "@assets/Corporate Image Sept 2025 (6)_1756765151457.png";
import airplaneImage from "@assets/Corporate Image Sept 2025 (7)_1756765151458.png";
import airplaneCleanImage from "@assets/Corporate Image Sept 2025 (8)_1756765151458.png";
import laptopImage from "@assets/Corporate Image Sept 2025 (9)_1756765151458.png";
import worldImage from "@assets/Corporate Image Sept 2025 (10)_1756765151458.png";
import bookImage from "@assets/Corporate Image Sept 2025 (11)_1756765151459.png";
import passportVariantImage from "@assets/Corporate Image Sept 2025 (12)_1756765151459.png";

// Importar fotos de perfil naturales
import mariaPhoto from "@assets/generated_images/Natural_Mexican_woman_profile_photo_a042573d.png";
import davidPhoto from "@assets/generated_images/Natural_American_Asian_man_profile_e793c084.png";
import anaPhoto from "@assets/generated_images/Natural_Colombian_woman_profile_photo_a01aa6f6.png";
import jamesPhoto from "@assets/generated_images/Natural_British_man_profile_photo_54616502.png";
import sofiaPhoto from "@assets/generated_images/Natural_Argentine_woman_profile_photo_05ca56e0.png";
import michaelPhoto from "@assets/generated_images/Natural_Canadian_man_profile_photo_2ed22db8.png";

// Componente FAQ Item
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-gray-200 rounded-2xl">
      <button 
        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-lg pr-4" style={{color: '#0A4A6E'}}>{question}</span>
        <div className="flex-shrink-0">
          {isOpen ? (
            <Minus className="w-5 h-5" style={{color: '#F59E1C'}} />
          ) : (
            <Plus className="w-5 h-5" style={{color: '#F59E1C'}} />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

// Componente CTA Slim reutilizable
const CTASlim = ({ 
  text = "¿Listo? Elige tu idioma", 
  onLanguageSelect 
}: { 
  text?: string;
  onLanguageSelect?: (language: 'spanish' | 'english', route: string) => void;
}) => {
  const [, navigate] = useLocation();
  
  const handleClick = (language: 'spanish' | 'english', route: string) => {
    if (onLanguageSelect) {
      onLanguageSelect(language, route);
    } else {
      navigate(route);
    }
  };
  
  return (
    <div className="bg-white py-6 border-t border-gray-100" style={{
      boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.05)'
    }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-lg font-semibold" style={{color: '#0A4A6E'}}>
            {text}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => handleClick('spanish', '/es')}
              className="px-8 py-3 text-lg font-bold rounded-full transition-all duration-300 hover:shadow-lg border-0"
              style={{
                background: 'linear-gradient(135deg, #F59E1C 0%, #fbbf24 100%)',
                color: 'white'
              }}
              data-testid="cta-slim-learn-spanish"
            >
              <span className="flex items-center gap-2">
                <span>🇪🇸</span>
                <span>Learn Spanish</span>
              </span>
            </Button>
            <Button 
              onClick={() => handleClick('english', '/en')}
              className="px-8 py-3 text-lg font-bold rounded-full transition-all duration-300 hover:shadow-lg border-0"
              style={{
                background: 'linear-gradient(135deg, #0A4A6E 0%, #1C7BB1 100%)',
                color: 'white'
              }}
              data-testid="cta-slim-aprende-ingles"
            >
              <span className="flex items-center gap-2">
                <span>🇺🇸</span>
                <span>Aprende Inglés</span>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente CTA móvil fijo
const MobileCTA = ({ 
  onLanguageSelect 
}: { 
  onLanguageSelect?: (language: 'spanish' | 'english', route: string) => void;
}) => {
  const [, navigate] = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Mostrar CTA móvil después de scrollear 50vh
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (language: 'spanish' | 'english', route: string) => {
    if (onLanguageSelect) {
      onLanguageSelect(language, route);
    } else {
      navigate(route);
    }
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-4" style={{
      background: 'linear-gradient(135deg, #0A4A6E 0%, #F59E1C 100%)'
    }}>
      <div className="flex gap-3">
        <Button 
          onClick={() => handleClick('spanish', '/es')}
          className="flex-1 py-4 text-lg font-bold rounded-full border-0 bg-white transition-all duration-300"
          style={{color: '#0A4A6E'}}
          data-testid="mobile-cta-learn-spanish"
        >
          <span className="flex items-center justify-center gap-2">
            <span>🇪🇸</span>
            <span>Learn Spanish</span>
          </span>
        </Button>
        
        <Button 
          onClick={() => handleClick('english', '/en')}
          className="flex-1 py-4 text-lg font-bold rounded-full border-0 bg-white transition-all duration-300"
          style={{color: '#0A4A6E'}}
          data-testid="mobile-cta-aprende-ingles"
        >
          <span className="flex items-center justify-center gap-2">
            <span>🇺🇸</span>
            <span>Aprende Inglés</span>
          </span>
        </Button>
      </div>
    </div>
  );
};

// Componente Popup Adaptativo de Email
const EmailPopup = ({ 
  selectedLanguage, 
  currentLang, 
  showInitial = true, 
  showOnLanguageChange = false, 
  onClose 
}: { 
  selectedLanguage: 'spanish' | 'english' | null;
  currentLang: 'es' | 'en';
  showInitial?: boolean;
  showOnLanguageChange?: boolean;
  onClose?: () => void;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Inicializar popup cuando se cumplen las condiciones
  useEffect(() => {
    if (showInitial || showOnLanguageChange) {
      // Asegurar que el script esté disponible sin afectar el estado
      const ensureScriptLoaded = () => {
        const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
        if (!existingScript) {
          const script = document.createElement('script');
          script.src = 'https://link.msgsndr.com/js/form_embed.js';
          script.async = true;
          script.onload = () => {
            console.log('HighLevel form script loaded');
          };
          document.body.appendChild(script);
        }
      };

      // Cargar script inmediatamente
      ensureScriptLoaded();
      
      // Mostrar popup después de 7 segundos
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, [showInitial, showOnLanguageChange]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
      if (onClose) onClose();
    }, 500);
  };

  // No renderizar nada hasta que esté completamente listo
  if (!isVisible) return null;

  // Determinar el contenido del popup según el idioma actual de la página
  const isEnglishLang = currentLang === 'en';
  
  // Contenido adaptado al idioma actual de la página
  const popupContent = {
    title: isEnglishLang 
      ? "🎯 Special Offer - 10% OFF!" 
      : "🎯 ¡Oferta Especial - 10% de Descuento!",
    subtitle: isEnglishLang
      ? "Get 10% discount on your first month of any plan!"
      : "¡Obtén 10% de descuento en tu primer mes de cualquier plan!",
    description: showOnLanguageChange
      ? (isEnglishLang 
          ? "Perfect timing! Since you're interested in this language, here's a special offer just for you!"
          : "¡Momento perfecto! Como te interesa este idioma, ¡aquí tienes una oferta especial solo para ti!")
      : (isEnglishLang
          ? "Join thousands of students who are already learning with native instructors. Limited time offer!"
          : "Únete a miles de estudiantes que ya están aprendiendo con instructores nativos. ¡Oferta por tiempo limitado!")
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
      isClosing ? 'animate-out fade-out zoom-out-95 duration-500' : 'animate-in fade-in zoom-in-95 duration-700'
    }`}>
      {/* Overlay */}
      <div 
        className={`absolute inset-0 bg-black ${
          isClosing ? 'opacity-0' : 'opacity-50'
        } transition-opacity duration-700`}
        onClick={handleClose}
      />
      
      {/* Popup Modal */}
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 relative z-10 overflow-hidden"
           style={{ maxHeight: '90vh' }}>
          
          {/* Header con gradiente de marca */}
          <div className="relative p-6 text-center text-white"
               style={{
                 background: 'linear-gradient(135deg, #0A4A6E 0%, #F59E1C 100%)'
               }}>
            {/* Botón cerrar */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
              data-testid="popup-close-button"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h2 className="text-2xl font-bold mb-2">{popupContent.title}</h2>
            <p className="text-lg opacity-90">{popupContent.subtitle}</p>
          </div>

          {/* Contenido del popup */}
          <div className="p-6 pb-0">
            <p className="text-gray-600 text-center mb-4 leading-relaxed">
              {popupContent.description}
            </p>
            
            {/* Iframe del formulario */}
            <div className="w-full h-60 rounded-2xl overflow-hidden">
              {showOnLanguageChange && isEnglishLang ? (
                // Formulario para clases de español (cuando cambian a inglés)
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/r72pdx393rz9MNYsoTjZ"
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: '20px'
                  }}
                  id="inline-r72pdx393rz9MNYsoTjZ"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Newsletter subscription - POP UP - CLASES DE ESPAÑOL - LANDING"
                  data-height="220"
                  data-layout-iframe-id="inline-r72pdx393rz9MNYsoTjZ"
                  data-form-id="r72pdx393rz9MNYsoTjZ"
                  title="Newsletter subscription - POP UP - CLASES DE ESPAÑOL - LANDING"
                />
              ) : (
                // Formulario por defecto para clases de inglés
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/kE3wnjGXhaeQvy1S6FPd"
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: '20px'
                  }}
                  id="inline-kE3wnjGXhaeQvy1S6FPd"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Newsletter subscription - POP UP - CLASES DE INGLES - Copy"
                  data-height="220"
                  data-layout-iframe-id="inline-kE3wnjGXhaeQvy1S6FPd"
                  data-form-id="kE3wnjGXhaeQvy1S6FPd"
                  title="Newsletter subscription - POP UP - CLASES DE INGLES - Copy"
                />
              )}
            </div>
          </div>
        </div>
    </div>
  );
};

export default function Landing() {
  const [, navigate] = useLocation();
  const [detectedLanguage, setDetectedLanguage] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<'spanish' | 'english' | null>(null);
  const [currentLang, setCurrentLang] = useState<'es' | 'en'>('es');
  const [initialPopupClosed, setInitialPopupClosed] = useState(false);
  const [languageChangedAfterClose, setLanguageChangedAfterClose] = useState(false);

  useEffect(() => {
    // Simple language detection based on browser language
    const browserLanguage = navigator.language || navigator.languages?.[0];
    
    if (browserLanguage?.startsWith('es')) {
      setDetectedLanguage('español');
      setCurrentLang('es');
    } else {
      setDetectedLanguage('English');
      setCurrentLang('en');
    }
  }, []);

  // Función para manejar la selección de idioma y navegar
  const handleLanguageSelection = (language: 'spanish' | 'english', route: string) => {
    setSelectedLanguage(language);
    navigate(route);
  };

  // Función para cambiar el idioma de la página
  const toggleLanguage = () => {
    setCurrentLang(currentLang === 'es' ? 'en' : 'es');
    setDetectedLanguage(currentLang === 'es' ? 'English' : 'español');
    
    // Si el popup inicial fue cerrado, marcar que hubo cambio de idioma
    if (initialPopupClosed) {
      setLanguageChangedAfterClose(true);
    }
  };

  // Función para manejar el cierre del popup inicial
  const handleInitialPopupClose = () => {
    setInitialPopupClosed(true);
    setLanguageChangedAfterClose(false);
  };

  // Función para manejar el cierre del popup por cambio de idioma
  const handleLanguageChangePopupClose = () => {
    setLanguageChangedAfterClose(false);
  };

  // Traducciones del contenido
  const content = {
    es: {
      heroTitle: "Habla como un",
      heroTitleItalic: "nativo",
      heroSubtitle: "Clases personalizadas 1-a-1 con instructores nativos",
      selectLanguageTitle: "Selecciona el idioma que quieres aprender:",
      selectLanguageSubtitle: "↓ Elige tu próximo paso hacia la fluidez ↓",
      scrollIndicator: "Desliza ↓ para ver cómo funciona",
      learnSpanishBtn: "Learn Spanish",
      learnEnglishBtn: "Aprende Inglés",
      // Estadísticas
      stat1: "estudiantes activos",
      stat2: "clases completadas", 
      stat3: "especialistas nativos",
      stat4: "calificación promedio",
      // Cómo funciona
      howItWorksTitle: "¿Cómo funciona?",
      howItWorksSubtitle: "En 3 sencillos pasos estarás conversando como un nativo",
      step1Title: "Elige tu idioma",
      step1Desc: "Selecciona el idioma que quieres aprender y tu nivel actual",
      step2Title: "Conéctate por video",
      step2Desc: "Programa tu clase y conéctate con un instructor nativo",
      step3Title: "Practica y mejora",
      step3Desc: "Recibe feedback en tiempo real y mejora tu fluidez",
      // Testimonios
      testimonialsTitle: "Lo que dicen nuestros estudiantes",
      testimonialsSubtitle: "Más de 1,000 estudiantes han transformado su fluidez con nosotros",
      // Empresas
      businessTitle: "Inglés y Español para Equipos de Empresa",
      businessSubtitle: "Programas corporativos personalizados que impulsan la comunicación global de tu equipo.",
      businessStat1: "+100 empresas confían en nosotros",
      businessStat2: "4.9 promedio en tutorías",
      businessStat3: "90% de satisfacción",
      businessBenefit1Title: "Flexibilidad 24/7",
      businessBenefit1Desc: "Para equipos globales",
      businessBenefit2Title: "Capacitación específica",
      businessBenefit2Desc: "Por rol: ventas, legal, salud, tecnología",
      businessBenefit3Title: "Reportes claros",
      businessBenefit3Desc: "De progreso en dashboard interno",
      businessBenefit4Title: "Escalabilidad completa",
      businessBenefit4Desc: "Con ejercicios, módulos y seguimiento",
      businessCta: "Conoce Programas Empresariales",
      // Secciones adicionales
      ctaReady: "¿Listo? Elige tu idioma",
      ctaLike: "¿Te gusta el proceso? ¡Empezemos!",
      finalCtaTitle: "¡Tu pasaporte a la fluidez te está esperando!",
      finalCtaSubtitle: "Miles de estudiantes ya transformaron su vida profesional y personal.",
      finalCtaBold: "Tú puedes ser el siguiente.",
      incentive1: "Primera clase GRATIS",
      incentive2: "Profesores nativos certificados",
      incentive3: "Garantía de progreso 30 días",
      footerRights: "© 2024 Passport2Fluency. Todos los derechos reservados.",
      footerTerms: "Términos y Condiciones",
      footerPrivacy: "Política de Privacidad",
      footerSupport: "Soporte",
    },
    en: {
      heroTitle: "Speak like a",
      heroTitleItalic: "native",
      heroSubtitle: "Personalized 1-on-1 classes with native instructors",
      selectLanguageTitle: "Select the language you want to learn:",
      selectLanguageSubtitle: "↓ Choose your next step towards fluency ↓",
      scrollIndicator: "Scroll ↓ to see how it works",
      learnSpanishBtn: "Learn Spanish",
      learnEnglishBtn: "Aprende Inglés",
      // Estadísticas
      stat1: "active students",
      stat2: "completed classes",
      stat3: "native specialists", 
      stat4: "average rating",
      // Cómo funciona
      howItWorksTitle: "How it works?",
      howItWorksSubtitle: "In 3 simple steps you'll be speaking like a native",
      step1Title: "Choose your language",
      step1Desc: "Select the language you want to learn and your current level",
      step2Title: "Connect by video",
      step2Desc: "Schedule your class and connect with a native instructor",
      step3Title: "Practice and improve",
      step3Desc: "Receive real-time feedback and improve your fluency",
      // Testimonios
      testimonialsTitle: "What our students say",
      testimonialsSubtitle: "Over 1,000 students have transformed their fluency with us",
      // Empresas
      businessTitle: "English and Spanish for Corporate Teams",
      businessSubtitle: "Customized corporate programs that boost your team's global communication.",
      businessStat1: "+100 companies trust us",
      businessStat2: "4.9 average in tutoring",
      businessStat3: "90% satisfaction rate",
      businessBenefit1Title: "24/7 Flexibility",
      businessBenefit1Desc: "For global teams",
      businessBenefit2Title: "Role-specific training",
      businessBenefit2Desc: "Sales, legal, healthcare, technology",
      businessBenefit3Title: "Clear reports",
      businessBenefit3Desc: "Progress tracking in internal dashboard",
      businessBenefit4Title: "Complete scalability",
      businessBenefit4Desc: "With exercises, modules and monitoring",
      businessCta: "Book a Demo",
      // Secciones adicionales
      ctaReady: "Ready? Choose your language",
      ctaLike: "Like the process? Let's get started!",
      finalCtaTitle: "Your passport to fluency is waiting for you!",
      finalCtaSubtitle: "Thousands of students have already transformed their professional and personal lives.",
      finalCtaBold: "You could be next.",
      incentive1: "First class FREE",
      incentive2: "Experienced qualified teachers",
      incentive3: "30-day progress guarantee",
      footerRights: "© 2024 Passport2Fluency. All rights reserved.",
      footerTerms: "Terms and Conditions",
      footerPrivacy: "Privacy Policy",
      footerSupport: "Support",
    }
  };

  const t = content[currentLang];

  return (
    <div className="min-h-screen overflow-hidden relative" style={{
      background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #fff7ed 100%)'
    }}>

      {/* Top Navigation Bar */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <img src={passportLogo} alt="Passport to Fluency" className="h-16" />
          
          {/* Language toggle button */}
          {detectedLanguage && (
            <button 
              onClick={toggleLanguage}
              className="bg-blue-100 border border-blue-200 rounded-lg px-3 py-1 text-blue-800 text-sm flex items-center hover:bg-blue-200 transition-colors duration-200 cursor-pointer"
              data-testid="language-toggle-button"
            >
              <Globe className="w-4 h-4 mr-2" />
              <span>{currentLang === 'es' ? 'Español' : 'English'}</span>
              <span className="ml-2 text-xs opacity-60">
                {currentLang === 'es' ? '→ EN' : '→ ES'}
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Hero Section - Preply Style Layout */}
      <div className="container mx-auto px-6 pb-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          
          {/* Left Side - Hero Text */}
          <div className="space-y-8 animate-fade-in order-1 lg:order-1">
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              <span style={{color: '#0A4A6E'}}>{t.heroTitle} </span>
              <span className="italic text-6xl md:text-8xl" style={{color: '#F59E1C'}}>{t.heroTitleItalic}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-lg mb-6">
              {t.heroSubtitle}
            </p>
            
            {/* Llamada de acción elegante */}
            <div className="mb-8 max-w-lg">
              <div className="relative bg-gradient-to-r from-blue-50 to-orange-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300" style={{
                background: 'linear-gradient(135deg, rgba(10, 74, 110, 0.08) 0%, rgba(245, 158, 28, 0.08) 100%)'
              }}>
                {/* Pequeño indicador visual */}
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full" style={{
                  background: '#F59E1C',
                  boxShadow: '0 0 0 4px rgba(245, 158, 28, 0.2)'
                }}></div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2" style={{color: '#0A4A6E'}}>
                    {t.selectLanguageTitle}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t.selectLanguageSubtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Elegant Pill Style con mejor espaciado */}
            <div className="space-y-6">
              <Button 
                onClick={() => handleLanguageSelection('spanish', '/es')}
                className="w-full sm:w-auto px-12 py-6 text-2xl font-bold rounded-full transition-all duration-500 hover:shadow-2xl transform hover:scale-105 border-0 relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #F59E1C 0%, #fbbf24 100%)',
                  color: 'white',
                  boxShadow: '0 8px 32px rgba(245, 158, 28, 0.3)'
                }}
                data-testid="button-learn-spanish"
              >
                <span className="flex items-center justify-center gap-3">
                  <span className="text-2xl">🇪🇸</span>
                  <span>{t.learnSpanishBtn}</span>
                  <ArrowRight className="w-6 h-6" />
                </span>
              </Button>
              
              <Button 
                onClick={() => handleLanguageSelection('english', '/en')}
                className="w-full sm:w-auto px-12 py-6 text-2xl font-bold rounded-full transition-all duration-500 hover:shadow-2xl transform hover:scale-105 border-0 relative overflow-hidden group ml-0 sm:ml-6"
                style={{
                  background: 'linear-gradient(135deg, #0A4A6E 0%, #1C7BB1 100%)',
                  color: 'white',
                  boxShadow: '0 8px 32px rgba(10, 74, 110, 0.3)'
                }}
                data-testid="button-aprende-ingles"
              >
                <span className="flex items-center justify-center gap-3">
                  <span className="text-2xl">🇺🇸</span>
                  <span>{t.learnEnglishBtn}</span>
                  <ArrowRight className="w-6 h-6" />
                </span>
              </Button>
            </div>

            {/* Micro-indicador scroll */}
            <div className="text-center mt-12 animate-bounce">
              <p className="text-sm text-gray-600 mb-2">{t.scrollIndicator}</p>
              <ChevronDown className="w-6 h-6 mx-auto" style={{color: '#0A4A6E'}} />
            </div>
          </div>

          {/* Right Side - Improved Visual Design with Corporate Elements */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-2 mt-8 lg:mt-0">
            <div className="relative">
              {/* Passport Corporate Image as floating background element */}
              <div className="absolute -top-16 -left-12 opacity-10 z-0 hidden md:block">
                <img 
                  src={passportImage} 
                  alt="" 
                  className="w-40 h-40 object-contain transform rotate-12"
                />
              </div>
              
              {/* World/Globe image on the right */}
              <div className="absolute -bottom-8 -right-8 opacity-15 z-0 hidden lg:block">
                <img 
                  src={worldImage} 
                  alt="" 
                  className="w-32 h-32 object-contain"
                />
              </div>
              
              {/* Decorative background circle */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-20" style={{
                background: 'linear-gradient(135deg, #F59E1C 0%, #fbbf24 100%)'
              }}></div>
              
              <div className="bg-white rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-shadow duration-500 relative z-10" style={{
                background: 'linear-gradient(135deg, rgba(245, 158, 28, 0.03) 0%, rgba(10, 74, 110, 0.03) 100%)',
                border: '2px solid rgba(255, 255, 255, 0.8)'
              }}>
                <img 
                  src={newLearningImage} 
                  alt="Clases de idiomas virtuales 1-a-1 con instructores nativos" 
                  className="w-72 h-56 sm:w-80 sm:h-64 md:w-[420px] md:h-[320px] object-cover rounded-2xl"
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Primera sección después del hero - Estadísticas con mejor layout */}
      <div className="bg-white py-4 md:py-6 mt-2 md:mt-0">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center max-w-5xl">
              {/* Stat 1 */}
              <div className="flex flex-col items-center p-3 md:p-4 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center mb-3 md:mb-4" style={{background: 'linear-gradient(135deg, #0A4A6E, #1C7BB1)'}}>
                  <Users className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" />
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-black mb-2" style={{color: '#0A4A6E'}}>500+</div>
                <div className="text-xs md:text-xs text-gray-600 font-medium">{t.stat1}</div>
              </div>
              
              {/* Stat 2 */}
              <div className="flex flex-col items-center p-3 md:p-4 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center mb-3 md:mb-4" style={{background: 'linear-gradient(135deg, #F59E1C, #fbbf24)'}}>
                  <CheckCircle className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" />
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-black mb-2" style={{color: '#F59E1C'}}>100K+</div>
                <div className="text-xs md:text-xs text-gray-600 font-medium">{t.stat2}</div>
              </div>
              
              {/* Stat 3 */}
              <div className="flex flex-col items-center p-3 md:p-4 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center mb-3 md:mb-4" style={{background: 'linear-gradient(135deg, #0A4A6E, #1C7BB1)'}}>
                  <Globe className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" />
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-black mb-2" style={{color: '#0A4A6E'}}>EN-ES</div>
                <div className="text-xs md:text-xs text-gray-600 font-medium">{t.stat3}</div>
              </div>
              
              {/* Stat 4 */}
              <div className="flex flex-col items-center p-3 md:p-4 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center mb-3 md:mb-4" style={{background: 'linear-gradient(135deg, #F59E1C, #fbbf24)'}}>
                  <Star className="w-3 h-3 md:w-3.5 md:h-3.5 text-white fill-current" />
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-black mb-2" style={{color: '#F59E1C'}}>4.9</div>
                <div className="text-xs md:text-xs text-gray-600 font-medium">{t.stat4}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      
      {/* Sección 2: Cómo funciona */}
      <div className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{color: '#0A4A6E'}}>
              {t.howItWorksTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.howItWorksSubtitle}
            </p>
          </div>
          
          {/* Timeline Desktop */}
          <div className="hidden md:block relative">
            {/* Línea ondulada */}
            <div className="absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2" style={{
              background: 'linear-gradient(90deg, #0A4A6E 0%, #1C7BB1 50%, #F59E1C 100%)',
              borderRadius: '10px'
            }}></div>
            
            <div className="grid grid-cols-3 gap-8 relative z-10">
              {/* Paso 1 */}
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center bg-white shadow-lg" style={{
                    background: 'linear-gradient(135deg, #0A4A6E 0%, #1C7BB1 100%)'
                  }}>
                    <span className="text-3xl">🌍</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{
                    background: '#F59E1C'
                  }}>1</div>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#0A4A6E'}}>{t.step1Title}</h3>
                <p className="text-gray-600">{t.step1Desc}</p>
              </div>
              
              {/* Paso 2 */}
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center bg-white shadow-lg" style={{
                    background: 'linear-gradient(135deg, #1C7BB1 0%, #F59E1C 100%)'
                  }}>
                    <span className="text-3xl">📹</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{
                    background: '#F59E1C'
                  }}>2</div>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#0A4A6E'}}>{t.step2Title}</h3>
                <p className="text-gray-600">{t.step2Desc}</p>
              </div>
              
              {/* Paso 3 */}
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center bg-white shadow-lg" style={{
                    background: 'linear-gradient(135deg, #F59E1C 0%, #fbbf24 100%)'
                  }}>
                    <span className="text-3xl">💬</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{
                    background: '#F59E1C'
                  }}>3</div>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#0A4A6E'}}>{t.step3Title}</h3>
                <p className="text-gray-600">{t.step3Desc}</p>
              </div>
            </div>
          </div>
          
          {/* Timeline Mobile - Vertical */}
          <div className="md:hidden space-y-8">
            {[1, 2, 3].map((step, index) => {
              const icons = ['🌍', '📹', '💬'];
              const titles = [t.step1Title, t.step2Title, t.step3Title];
              const descriptions = [t.step1Desc, t.step2Desc, t.step3Desc];
              
              return (
                <div key={step} className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{
                      background: step === 1 ? 'linear-gradient(135deg, #0A4A6E 0%, #1C7BB1 100%)' :
                                  step === 2 ? 'linear-gradient(135deg, #1C7BB1 0%, #F59E1C 100%)' :
                                              'linear-gradient(135deg, #F59E1C 0%, #fbbf24 100%)'
                    }}>
                      <span className="text-2xl">{icons[index]}</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-xs" style={{
                      background: '#F59E1C'
                    }}>{step}</div>
                    {step < 3 && (
                      <div className="absolute top-16 left-1/2 w-1 h-8 -translate-x-1/2" style={{
                        background: 'linear-gradient(180deg, #0A4A6E 0%, #F59E1C 100%)'
                      }}></div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{color: '#0A4A6E'}}>{titles[index]}</h3>
                    <p className="text-gray-600">{descriptions[index]}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* CTA Slim #2 */}
      <CTASlim text={t.ctaLike} onLanguageSelect={handleLanguageSelection} />
      
      {/* Sección 3: Prueba social - Reviews */}
      <div className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{color: '#0A4A6E'}}>
              {t.testimonialsTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.testimonialsSubtitle}
            </p>
          </div>

          {/* Grid de testimonios */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "María González",
                country: "🇲🇽 México",
                program: "Inglés para Adultos",
                rating: 5,
                text: "En 3 meses pasé de básico a conversacional. Los instructores son increíbles y las clases muy dinámicas.",
                image: mariaPhoto
              },
              {
                name: "David Chen",
                country: "🇺🇸 Estados Unidos", 
                program: "Español para Adultos",
                rating: 5,
                text: "Aprender español nunca fue tan fácil. El método 1-a-1 hace toda la diferencia.",
                image: davidPhoto
              },
              {
                name: "Ana Rodríguez",
                country: "🇨🇴 Colombia",
                program: "Inglés Intensivo",
                rating: 5,
                text: "Perfect for busy professionals. I improved my English speaking confidence dramatically.",
                image: anaPhoto
              },
              {
                name: "James Wilson",
                country: "🇬🇧 Reino Unido",
                program: "Español Intensivo",
                rating: 5,
                text: "Los horarios flexibles me permitieron mantener mis clases incluso con mi trabajo demandante.",
                image: jamesPhoto
              },
              {
                name: "Sofia Martínez",
                country: "🇦🇷 Argentina",
                program: "Inglés para Adultos",
                rating: 5,
                text: "My English pronunciation improved so much! Native speakers make all the difference.",
                image: sofiaPhoto
              },
              {
                name: "Michael Johnson",
                country: "🇨🇦 Canadá",
                program: "Español para Adultos",
                rating: 5,
                text: "Excelente plataforma. En 6 meses logré el nivel que necesitaba para mi trabajo en México.",
                image: michaelPhoto
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold" style={{color: '#0A4A6E'}}>{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.country}</p>
                    <p className="text-xs font-medium text-gray-500 italic mt-1">
                      {testimonial.program}
                    </p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" style={{color: '#F59E1C'}} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sección Empresas - Estilo Preply Mejorado */}
      <div className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Contenido izquierdo */}
            <div className="max-w-xl">
              {/* Badge corporativo */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 mb-6">
                <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#0A4A6E'}}></div>
                <span className="text-sm font-semibold" style={{color: '#0A4A6E'}}>
                  {currentLang === 'es' ? 'Soluciones Empresariales' : 'Enterprise Solutions'}
                </span>
              </div>

              {/* Título principal */}
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight" style={{color: '#0A4A6E'}}>
                {t.businessTitle}
              </h2>
              
              {/* Descripción */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t.businessSubtitle}
              </p>
              
              {/* Beneficios clave */}
              <div className="space-y-4 mb-8">
                {[
                  {
                    text: currentLang === 'es' 
                      ? 'Capacitación especializada por industria' 
                      : 'Industry-specific training programs'
                  },
                  {
                    text: currentLang === 'es' 
                      ? 'Horarios flexibles para equipos globales' 
                      : 'Flexible schedules for global teams'
                  },
                  {
                    text: currentLang === 'es' 
                      ? 'Reportes detallados de progreso' 
                      : 'Detailed progress reports'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* Botón CTA */}
              <div className="flex justify-start">
                <Button 
                  className="px-8 py-4 text-lg font-semibold rounded-xl text-white border-0 transition-all duration-300 hover:shadow-lg"
                  style={{background: '#0A4A6E'}}
                  data-testid="business-book-demo"
                >
                  {t.businessCta}
                </Button>
              </div>
            </div>

            {/* Visual complementario mejorado con elementos corporativos */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Laptop corporate image as background element */}
                <div className="absolute -top-8 -left-8 opacity-8 z-0">
                  <img 
                    src={laptopImage} 
                    alt="" 
                    className="w-36 h-36 object-contain transform -rotate-12"
                  />
                </div>
                
                {/* Airplane image for global reach */}
                <div className="absolute -bottom-6 -right-6 opacity-12 z-0">
                  <img 
                    src={airplaneCleanImage} 
                    alt="" 
                    className="w-28 h-28 object-contain transform rotate-6"
                  />
                </div>
                
                {/* Elementos decorativos sutiles */}
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full opacity-10" style={{
                  background: 'linear-gradient(135deg, #0A4A6E, #F59E1C)'
                }}></div>
                
                <div className="relative bg-white rounded-3xl p-8 shadow-xl z-10">
                  <img 
                    src={corporateTeamImage} 
                    alt="Equipo corporativo en videollamada global" 
                    className="w-full max-w-lg h-auto object-contain rounded-2xl"
                  />
                  
                  {/* Badge flotante */}
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-sm font-semibold text-gray-700">
                        {currentLang === 'es' ? 'En vivo' : 'Live'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final Grande - Con fondo de pasaporte */}
      <div className="relative py-8 md:py-12 overflow-hidden" style={{
        background: 'linear-gradient(135deg, #0A4A6E 0%, #1C7BB1 50%, #F59E1C 100%)'
      }}>        
        {/* Passport background elements */}
        <div className="absolute top-8 left-8 opacity-5 z-0 hidden md:block">
          <img 
            src={passportVariantImage} 
            alt="" 
            className="w-48 h-48 object-contain transform rotate-12"
          />
        </div>
        <div className="absolute bottom-8 right-8 opacity-5 z-0 hidden lg:block">
          <img 
            src={bookImage} 
            alt="" 
            className="w-40 h-40 object-contain transform -rotate-12"
          />
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-3 z-0 hidden xl:block">
          <img 
            src={airplaneImage} 
            alt="" 
            className="w-32 h-32 object-contain transform rotate-45"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              {t.finalCtaTitle}
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
              {t.finalCtaSubtitle}
              <br />
              <strong>{t.finalCtaBold}</strong>
            </p>
            
            {/* CTAs grandes lado a lado */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
              <Button 
                onClick={() => handleLanguageSelection('spanish', '/es')}
                className="px-12 py-6 text-2xl font-bold rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 border-0 bg-white"
                style={{color: '#0A4A6E'}}
                data-testid="final-cta-learn-spanish"
              >
                <span className="flex items-center gap-3">
                  <span className="text-3xl">🇪🇸</span>
                  <span>{t.learnSpanishBtn}</span>
                  <ArrowRight className="w-8 h-8" />
                </span>
              </Button>
              
              <Button 
                onClick={() => handleLanguageSelection('english', '/en')}
                className="px-12 py-6 text-2xl font-bold rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 border-0 bg-white"
                style={{color: '#0A4A6E'}}
                data-testid="final-cta-aprende-ingles"
              >
                <span className="flex items-center gap-3">
                  <span className="text-3xl">🇺🇸</span>
                  <span>{t.learnEnglishBtn}</span>
                  <ArrowRight className="w-8 h-8" />
                </span>
              </Button>
            </div>
            
            {/* Incentivos finales */}
            <div className="grid md:grid-cols-3 gap-6 text-white">
              <div className="flex items-center gap-3 justify-center">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                <span>{t.incentive1}</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                <span>{t.incentive2}</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                <span>{t.incentive3}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer simple */}
      <div className="bg-white py-4 md:py-6 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <img src={passportLogo} alt="Passport to Fluency" className="h-12" />
            </div>
            <p className="text-gray-600 mb-4">{t.footerRights}</p>
            <div className="flex justify-center gap-8 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-700 transition-colors">{t.footerTerms}</a>
              <a href="#" className="hover:text-gray-700 transition-colors">{t.footerPrivacy}</a>
              <a href="#" className="hover:text-gray-700 transition-colors">{t.footerSupport}</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA móvil fijo */}
      <MobileCTA onLanguageSelect={handleLanguageSelection} />
      
      {/* Popup de Email Adaptativo */}
      {/* Popup inicial (aparece después de 7 segundos si no se ha cerrado) */}
      {!initialPopupClosed && (
        <EmailPopup 
          selectedLanguage={selectedLanguage} 
          currentLang={currentLang}
          showInitial={true}
          showOnLanguageChange={false}
          onClose={handleInitialPopupClose}
        />
      )}
      
      {/* Popup por cambio de idioma (aparece cuando cambian idioma después de cerrar el inicial) */}
      {languageChangedAfterClose && (
        <EmailPopup 
          selectedLanguage={selectedLanguage} 
          currentLang={currentLang}
          showInitial={false}
          showOnLanguageChange={true}
          onClose={handleLanguageChangePopupClose}
        />
      )}
    </div>
  );
}