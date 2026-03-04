import { Users, Settings, Clock, DollarSign, MessageCircle, Zap } from "lucide-react";

interface FeaturesSectionProps {
  t: (key: string) => string;
}

export default function FeaturesSection({ t }: FeaturesSectionProps) {
  const features = [
    {
      icon: Users,
      titleKey: 'features.nativeCoaches.title',
      descKey: 'features.nativeCoaches.description',
      color: 'text-passport-blue',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Settings,
      titleKey: 'features.personalized.title',
      descKey: 'features.personalized.description',
      color: 'text-passport-orange',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Clock,
      titleKey: 'features.saveTime.title',
      descKey: 'features.saveTime.description',
      color: 'text-passport-blue',
      bgColor: 'bg-blue-50'
    },
    {
      icon: DollarSign,
      titleKey: 'features.affordable.title',
      descKey: 'features.affordable.description',
      color: 'text-passport-orange',
      bgColor: 'bg-orange-50'
    },
    {
      icon: MessageCircle,
      titleKey: 'features.practical.title',
      descKey: 'features.practical.description',
      color: 'text-passport-blue',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Zap,
      titleKey: 'features.efficient.title',
      descKey: 'features.efficient.description',
      color: 'text-passport-orange',
      bgColor: 'bg-orange-50'
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-passport-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-passport-gray mb-4 animate-fade-in">
            {t('features.title')}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`text-2xl ${feature.color}`} size={24} />
                </div>
                <h3 className="text-xl font-semibold text-passport-gray mb-4">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-gray-600">
                  {t(feature.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
