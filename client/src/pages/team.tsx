import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Users, Star, Globe, Menu } from "lucide-react";
import NavigationDropdown from "@/components/navigation-dropdown";
import passportLogo from "@assets/a1c5a1_9514ede9e3124d7a9adf78f5dcf07f28~mv2_1755803448396.png";
import gloriaPhoto from "@assets/WhatsApp Image 2025-09-03 at 12.02.07_1756923396368.jpeg";
import carolinaPhoto from "@assets/WhatsApp Image 2025-09-03 at 11.55.04_1756923430351.jpeg";
import felipePhoto from "@assets/WhatsApp Image 2025-09-11 at 17.14.57_1757644653196.jpeg";
import evelynPhoto from "@assets/WhatsApp Image 2025-09-11 at 17.26.34_1757644698073.jpeg";
import { Link } from "wouter";

interface TeamProps {
  language: 'en' | 'es';
}

export default function Team({ language }: TeamProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const content = language === 'en' ? {
    title: "Meet Your Spanish Coaches",
    subtitle: "Learn from experienced native instructors from across Latin America who are passionate about sharing their language and culture.",
    instructors: [
      {
        name: "Carolina Perilla",
        role: "Lead Instructor • Colombia",
        description: "International Relations graduate with a Master's in English Teaching Methodology and 15+ years of experience. Currently pursuing a Doctorate in Educational Sciences. Specializes in bilingual education and cross-cultural communication.",
        credentials: "🎓 Doctorate Student Educational Sciences • 🌍 Trilingual (Spanish/English C1/French B2) • 📚 M.A. English Teaching Methodology"
      },
      {
        name: "Evelyn Salcedo", 
        role: "Spanish Language Specialist • Venezuela",
        description: "Passionate about languages and connecting people across cultures. 5+ years of experience teaching Spanish and English to children, youth, and adults. Helps students discover and enjoy Spanish through natural, practical, and fluent learning methods.",
        credentials: "🌍 Cultural Connection Expert • 📚 5+ Years Multi-Age Teaching • 🎯 Natural Language Learning Specialist"
      },
      {
        name: "Diego Felipe Rodríguez Martínez",
        role: "Spanish Instructor & Education Specialist • Colombia", 
        description: "Physical Education professor with a Master's in Physical Culture Pedagogy and currently pursuing a PhD in Education. Expert in creating engaging, active learning environments for Spanish instruction.",
        credentials: "🎓 PhD Student in Education • 🏃‍♂️ M.A. Physical Culture Pedagogy • 📚 Spanish & Physical Education Specialist"
      },
      {
        name: "Gloria Cardona",
        role: "Children's Specialist • Colombia",
        description: "Elementary education specialist with 8+ years making Spanish fun for kids. Expert in interactive games and storytelling methods.",
        credentials: "🎈 Kids Spanish Expert • 🎭 Interactive Learning Specialist"
      },
      {
        name: "Johanna Pacheco",
        role: "Cultural Immersion Expert • Colombia",
        description: "Anthropology graduate specializing in Colombian and Latin American culture. Helps students understand regional dialects and customs.",
        credentials: "🌎 Cultural Expert • 📖 B.A. Anthropology Universidad Nacional"
      }
    ],
    whyDifferent: "Why Our Instructors Make the Difference",
    stats: [
      { value: "100%", label: "Native Speakers" },
      { value: "5+ years", label: "Teaching Experience" },
      { value: "8 Countries", label: "Latin American Representation" }
    ],
    nav: {
      home: "Home",
      pricing: "Plans & Pricing",
      children: "Spanish for Children",
      business: "Spanish for Companies",
      team: "Team",
      blog: "Blog"
    }
  } : {
    title: "Conoce a Tus Instructores de Inglés",
    subtitle: "Aprende con instructores nativos americanos experimentados que son apasionados por compartir su idioma y cultura.",
    instructors: [
      {
        name: "Carolina Perilla",
        role: "Instructora Principal • Colombia",
        description: "Licenciada en Relaciones Internacionales con Maestría en Didáctica del Inglés y 15+ años de experiencia. Actualmente cursando Doctorado en Ciencias de la Educación. Se especializa en educación bilingüe y comunicación intercultural.",
        credentials: "🎓 Doctoranda en Ciencias de la Educación • 🌍 Trilingüe (Español/Inglés C1/Francés B2) • 📚 M.A. Didáctica del Inglés"
      },
      {
        name: "Evelyn Salcedo",
        role: "Especialista en Idiomas • Venezuela",
        description: "¡Hola! Me apasiona el mundo de los idiomas y la magia de conectar con personas de diferentes culturas. Desde hace 5 años acompaño a niños, jóvenes y adultos en su camino de aprendizaje de inglés y español. Mi objetivo es que aprendas de manera natural, práctica y fluida.",
        credentials: "🌍 Experta en Conexión Cultural • 📚 5+ Años Enseñando Multi-Edades • 🎯 Especialista en Aprendizaje Natural"
      },
      {
        name: "Diego Felipe Rodríguez Martínez",
        role: "Instructor de Inglés y Especialista en Educación • Colombia",
        description: "Profesor de Educación Física con Maestría en Pedagogía de la Cultura Física y actualmente estudiante de PhD en Educación. Experto en crear ambientes de aprendizaje activos y dinámicos para la enseñanza del inglés.",
        credentials: "🎓 Estudiante de PhD en Educación • 🏃‍♂️ M.A. Pedagogía de la Cultura Física • 📚 Especialista en Inglés y Educación Física"
      },
      {
        name: "Gloria Cardona",
        role: "Especialista en Niños • Colombia",
        description: "Especialista en educación primaria con más de 8 años haciendo el inglés divertido para niños. Experta en juegos interactivos y métodos de narración.",
        credentials: "🎈 Experta en Inglés para Niños • 🎭 Especialista en Aprendizaje Interactivo"
      },
      {
        name: "Johanna Pacheco",
        role: "Experta en Inmersión Cultural • Colombia",
        description: "Graduada en Antropología especializada en cultura americana. Ayuda a estudiantes a entender dialectos regionales y costumbres estadounidenses.",
        credentials: "🌎 Experta Cultural • 📖 B.A. Antropología Universidad Nacional"
      }
    ],
    whyDifferent: "Por Qué Nuestros Instructores Hacen la Diferencia",
    stats: [
      { value: "100%", label: "Hablantes Nativos" },
      { value: "5+ años", label: "Experiencia Docente" }, 
      { value: "50 Estados", label: "Representación Americana" }
    ],
    nav: {
      home: "Inicio",
      pricing: "Planes y Precios",
      children: "Inglés para Niños",
      business: "Inglés para Empresas",
      team: "Equipo",
      blog: "Blog"
    }
  };

  const basePath = language === 'en' ? '/es' : '/en';

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href={basePath}>
                <img src={passportLogo} alt="Passport to Fluency" className="h-10 w-auto" />
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link href={basePath} className="text-gray-700 hover:text-passport-blue">
                  {content.nav.home}
                </Link>
                <Link href={`${basePath}/pricing`} className="text-gray-700 hover:text-passport-blue">
                  {content.nav.pricing}
                </Link>
                <NavigationDropdown language={language} currentPath={`${basePath}/team`} />
                <Link href={`${basePath}/team`} className="text-passport-blue font-semibold">
                  {content.nav.team}
                </Link>
                <Link href={`${basePath}/blog`} className="text-gray-700 hover:text-passport-blue">
                  {content.nav.blog}
                </Link>
              </div>
              
              {/* Language Toggle Button - Always Visible */}
              <Button 
                onClick={() => window.location.href = language === 'en' ? '/en' : '/es'}
                variant="outline" 
                size="sm"
                className={`border-passport-${language === 'en' ? 'blue' : 'orange'} text-passport-${language === 'en' ? 'blue' : 'orange'} hover:bg-passport-${language === 'en' ? 'blue' : 'orange'} hover:text-white`}
              >
                {language === 'en' ? '🇺🇸 Learn English' : '🇪🇸 Aprende Español'}
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
                        href={basePath}
                        className="text-gray-700 hover:text-passport-blue transition-colors py-2 text-lg border-b border-gray-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {content.nav.home}
                      </Link>
                      
                      <Link 
                        href={`${basePath}/pricing`}
                        className="text-gray-700 hover:text-passport-blue transition-colors py-2 text-lg border-b border-gray-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {content.nav.pricing}
                      </Link>
                      
                      <div className="border-b border-gray-100 pb-2">
                        <div className="text-gray-700 py-2 text-lg mb-2">{language === 'en' ? 'Programs' : 'Programas'}</div>
                        <div className="pl-4 space-y-3">
                          <Link 
                            href={`${basePath}/children`}
                            className="block text-gray-600 hover:text-passport-blue transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {content.nav.children}
                          </Link>
                          <Link 
                            href={`${basePath}/business`}
                            className="block text-gray-600 hover:text-passport-blue transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {content.nav.business}
                          </Link>
                        </div>
                      </div>
                      
                      <Link 
                        href={`${basePath}/team`}
                        className="text-passport-blue font-semibold transition-colors py-2 text-lg border-b border-gray-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {content.nav.team}
                      </Link>
                      
                      <Link 
                        href={`${basePath}/blog`}
                        className="text-gray-700 hover:text-passport-blue transition-colors py-2 text-lg border-b border-gray-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {content.nav.blog}
                      </Link>
                      
                      {/* Language Switch in Mobile Menu */}
                      <Button 
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          window.location.href = language === 'en' ? '/en' : '/es';
                        }}
                        variant="outline" 
                        size="sm"
                        className={`border-passport-${language === 'en' ? 'blue' : 'orange'} text-passport-${language === 'en' ? 'blue' : 'orange'} hover:bg-passport-${language === 'en' ? 'blue' : 'orange'} hover:text-white mt-4`}
                      >
                        {language === 'en' ? '🇺🇸 Learn English' : '🇪🇸 Aprende Español'}
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {content.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {content.subtitle}
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {content.instructors.map((instructor, index) => {
              const bgColors = ['bg-gradient-to-br from-passport-blue to-blue-600', 'bg-gradient-to-br from-passport-orange to-orange-600', 'bg-gradient-to-br from-green-500 to-green-600', 'bg-gradient-to-br from-purple-500 to-purple-600', 'bg-gradient-to-br from-pink-500 to-pink-600'];
              const icons = [Users, Star, Globe, Users, Star];
              const Icon = icons[index];
              const photos = [carolinaPhoto, evelynPhoto, felipePhoto, gloriaPhoto, null];
              
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    {photos[index] ? (
                      <div className="w-24 h-24 mx-auto mb-4">
                        <img 
                          src={photos[index]} 
                          alt={instructor.name}
                          className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                          style={{
                            objectPosition: index === 0 ? 'center 20%' : // Carolina - centrar cara más arriba
                                          index === 2 ? 'center 30%' : // Felipe - centrar cara
                                          'center center'  // Otros - posición normal
                          }}
                          data-testid={`img-instructor-${instructor.name.toLowerCase().replace(/\s+/g, '-')}`}
                        />
                      </div>
                    ) : (
                      <div className={`w-24 h-24 ${bgColors[index]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{instructor.name}</h3>
                    <p className="text-passport-orange font-semibold mb-3">{instructor.role}</p>
                    <p className="text-gray-600 mb-4">
                      {instructor.description}
                    </p>
                    <div className="text-sm text-gray-500">
                      {instructor.credentials}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-passport-blue to-passport-orange rounded-2xl p-8 text-white max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">{content.whyDifferent}</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                {content.stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href={`${basePath}/pricing`}>
              <Button className="bg-passport-blue hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                {language === 'en' ? 'Start Learning Today' : 'Comenzar a Aprender Hoy'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}