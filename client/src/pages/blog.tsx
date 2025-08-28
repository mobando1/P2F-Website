import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Globe, Star } from "lucide-react";
import passportLogo from "@assets/a1c5a1_9514ede9e3124d7a9adf78f5dcf07f28~mv2_1755803448396.png";
import { Link } from "wouter";

interface BlogProps {
  language: 'en' | 'es';
}

export default function Blog({ language }: BlogProps) {
  const content = language === 'en' ? {
    title: "Spanish Learning Resources",
    subtitle: "Accelerate your Spanish learning journey with our expert tips, cultural insights, and practical guides.",
    articles: [
      {
        title: "Essential Business Spanish Phrases for Professionals",
        description: "Master the key phrases and expressions you need to succeed in Spanish-speaking business environments.",
        category: "Business Spanish • 5 min read",
        icon: MessageCircle
      },
      {
        title: "Cultural Differences: Mexico vs Colombia vs Argentina",
        description: "Understand the cultural nuances and regional differences that will help you connect better with native speakers.",
        category: "Culture • 7 min read",
        icon: Globe
      },
      {
        title: "How to Help Your Child Learn Spanish at Home",
        description: "Practical tips and fun activities to support your child's Spanish learning journey between classes.",
        category: "Kids Learning • 4 min read",
        icon: Star
      }
    ],
    cta: "Start Learning Today",
    nav: {
      home: "Home",
      pricing: "Plans & Pricing",
      children: "Spanish for Children",
      business: "Business Programs",
      team: "Team",
      blog: "Blog"
    }
  } : {
    title: "Recursos para Aprender Inglés",
    subtitle: "Acelera tu aprendizaje del inglés con nuestros consejos de expertos, conocimientos culturales y guías prácticas.",
    articles: [
      {
        title: "Frases Esenciales de Inglés de Negocios para Profesionales",
        description: "Domina las frases y expresiones clave que necesitas para tener éxito en ambientes empresariales de habla inglesa.",
        category: "Inglés de Negocios • 5 min de lectura",
        icon: MessageCircle
      },
      {
        title: "Diferencias Culturales: Estados Unidos vs Canadá vs Reino Unido",
        description: "Entiende los matices culturales y diferencias regionales que te ayudarán a conectar mejor con hablantes nativos.",
        category: "Cultura • 7 min de lectura",
        icon: Globe
      },
      {
        title: "Cómo Ayudar a tu Hijo a Aprender Inglés en Casa",
        description: "Consejos prácticos y actividades divertidas para apoyar el viaje de aprendizaje de inglés de tu hijo entre clases.",
        category: "Aprendizaje Infantil • 4 min de lectura",
        icon: Star
      }
    ],
    cta: "Comenzar a Aprender Hoy",
    nav: {
      home: "Inicio",
      pricing: "Planes y Precios",
      children: "Inglés para Niños",
      business: "Programas Empresariales",
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
              <Link href={`${basePath}/children`} className="text-gray-700 hover:text-passport-blue">
                {content.nav.children}
              </Link>
              <Link href={`${basePath}/business`} className="text-gray-700 hover:text-passport-blue">
                {content.nav.business}
              </Link>
              <Link href={`${basePath}/team`} className="text-gray-700 hover:text-passport-blue">
                {content.nav.team}
              </Link>
              <Link href={`${basePath}/blog`} className="text-passport-blue font-semibold">
                {content.nav.blog}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {content.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {content.subtitle}
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
            {content.articles.map((article, index) => {
              const colors = ['bg-passport-orange', 'bg-passport-blue', 'bg-green-500'];
              const Icon = article.icon;
              
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${colors[index]} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {article.description}
                    </p>
                    <div className="text-sm text-passport-blue font-semibold">
                      {article.category}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Link href={`${basePath}/pricing`}>
              <Button className="bg-passport-blue hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                {content.cta}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}