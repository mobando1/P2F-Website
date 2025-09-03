import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Star, Globe } from "lucide-react";
import NavigationDropdown from "@/components/navigation-dropdown";
import passportLogo from "@assets/a1c5a1_9514ede9e3124d7a9adf78f5dcf07f28~mv2_1755803448396.png";
import { Link } from "wouter";

interface TeamProps {
  language: 'en' | 'es';
}

export default function Team({ language }: TeamProps) {
  const content = language === 'en' ? {
    title: "Meet Your Spanish Coaches",
    subtitle: "Learn from experienced native instructors from across Latin America who are passionate about sharing their language and culture.",
    instructors: [
      {
        name: "Carolina Perilla",
        role: "Lead Instructor • Colombia",
        description: "Master's in Spanish Literature with 10+ years teaching Spanish to professionals. Specializes in advanced grammar and Latin American cultural immersion.",
        credentials: "💼 Advanced Spanish Expert • 🎓 M.A. Literatura Universidad Javeriana"
      },
      {
        name: "Evelyn Salcedo", 
        role: "Business Spanish Specialist • Venezuela",
        description: "Former corporate trainer with expertise in business Spanish and professional communication. Helps executives master workplace Spanish.",
        credentials: "🌟 Corporate Training Expert • 🎯 Business Communication Methods"
      },
      {
        name: "Felipe Rodríguez",
        role: "Conversation Expert • Colombia", 
        description: "Certified Spanish teacher focused on conversational fluency and pronunciation. Creates dynamic speaking environments for rapid improvement.",
        credentials: "🌍 Conversation Specialist • 📚 DELE Certified Instructor"
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
        description: "Maestría en Literatura Española con más de 10 años enseñando inglés a profesionales. Se especializa en gramática avanzada e inmersión cultural americana.",
        credentials: "💼 Experta en Inglés Avanzado • 🎓 M.A. Literatura Universidad Javeriana"
      },
      {
        name: "Evelyn Salcedo",
        role: "Especialista en Inglés de Negocios • Venezuela",
        description: "Ex-entrenadora corporativa con experiencia en inglés empresarial y comunicación profesional. Ayuda a ejecutivos a dominar el inglés laboral.",
        credentials: "🌟 Experta en Capacitación Corporativa • 🎯 Métodos de Comunicación Empresarial"
      },
      {
        name: "Felipe Rodríguez",
        role: "Experto en Conversación • Colombia",
        description: "Instructor certificado enfocado en fluidez conversacional y pronunciación. Crea ambientes dinámicos para mejorar rápidamente el inglés hablado.",
        credentials: "🌍 Especialista en Conversación • 📚 Instructor Certificado TOEFL"
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
              
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-24 h-24 ${bgColors[index]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-12 h-12 text-white" />
                    </div>
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