interface TestimonialsSectionProps {
  t: (key: string) => string;
  language: 'es' | 'en';
}

export default function TestimonialsSection({ t, language }: TestimonialsSectionProps) {
  const testimonials = language === 'es' ? [
    {
      name: "Ana García",
      location: "Madrid, España",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      content: "Decidí aprender inglés porque trabajo en una empresa internacional. Passport2Fluency me ha ayudado enormemente a ganar confianza en mis presentaciones en inglés. Los profesores personalizan cada lección según mis necesidades profesionales."
    },
    {
      name: "Carlos Rodríguez",
      location: "Barcelona, España",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      content: "¡Mi experiencia con Passport2fluency ha sido increíble! Necesitaba mejorar mi inglés para mis estudios de MBA. Los horarios flexibles y la atención personalizada han sido perfectos para mi agenda ocupada."
    },
    {
      name: "María López",
      location: "Valencia, España",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      content: "Como madre de dos niños, era importante para mí que mis hijos aprendieran inglés desde pequeños. Los profesores de Passport2Fluency han hecho que el aprendizaje sea divertido e interactivo para ellos."
    }
  ] : [
    {
      name: "Ben Northrop",
      location: "San Diego, CA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      content: "I decided to learn Spanish because most of my friends were from all over South America. When we would go out salsa dancing together, everyone was speaking Spanish, and I wanted to join in! I enjoy Passport2Fluency because the coach personalizes the lessons for my specific needs."
    },
    {
      name: "Jaclyn Blohm",
      location: "Corpus Christi, TX",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b069?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      content: "¡Hola! I decided to make it a point to improve my Spanish this year! A lot of my family members are fluent & I really want to make an effort to communicate with them! I have been having such a pleasant experience learning Spanish with Passport2fluency!"
    },
    {
      name: "Rebecca Unrath",
      location: "New Jersey",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      content: "I'm incredibly thrilled with the language learning journey my twins have embarked on with your company. As the child of an Argentine father and Cuban mother, it was important to me that they maintain a strong connection to their heritage and learn Spanish fluently."
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-passport-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-passport-gray mb-4 animate-fade-in">
            {t('testimonials.title')}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={testimonial.image}
                alt={`${testimonial.name} testimonial`}
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold text-passport-gray mb-2 text-center">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4 text-center">
                {testimonial.location}
              </p>
              <p className="text-gray-600 italic text-center leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
