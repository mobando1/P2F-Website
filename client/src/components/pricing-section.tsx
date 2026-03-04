import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingSectionProps {
  t: (key: string) => string;
  onPlanSelect: (plan: string) => void;
  currency: string;
}

export default function PricingSection({ t, onPlanSelect, currency }: PricingSectionProps) {
  const plans = [
    {
      id: 'plan1',
      frequency: t('pricing.plan1.frequency'),
      price: currency === '€' ? '€119.96' : '$119.96',
      period: t('pricing.plan1.period'),
      perClass: currency === '€' ? '€29.99/clase' : '$29.99/class',
      description: t('pricing.plan1.description'),
      cta: t('pricing.plan1.cta'),
      features: [
        `1 ${t('pricing.features.classesPerWeek')} (4 ${t('pricing.features.classesPerMonth')})`,
        t('pricing.features.privateSessions'),
        t('pricing.features.flexibleScheduling'),
        t('pricing.features.cancelAnytime'),
        t('pricing.features.teacherSupport'),
        t('pricing.features.noContract')
      ]
    },
    {
      id: 'plan2',
      frequency: t('pricing.plan2.frequency'),
      price: currency === '€' ? '€219.99' : '$219.99',
      period: t('pricing.plan2.period'),
      perClass: currency === '€' ? '€27.50/clase' : '$27.50/class',
      description: t('pricing.plan2.description'),
      cta: t('pricing.plan2.cta'),
      popular: t('pricing.plan2.popular'),
      features: [
        `2 ${t('pricing.features.classesPerWeek')} (8 ${t('pricing.features.classesPerMonth')})`,
        t('pricing.features.privateSessions'),
        t('pricing.features.flexibleScheduling'),
        t('pricing.features.cancelAnytime'),
        t('pricing.features.teacherSupport'),
        t('pricing.features.noContract')
      ]
    },
    {
      id: 'plan3',
      frequency: t('pricing.plan3.frequency'),
      price: currency === '€' ? '€299.99' : '$299.99',
      period: t('pricing.plan3.period'),
      perClass: currency === '€' ? '€24.99/clase' : '$24.99/class',
      description: t('pricing.plan3.description'),
      cta: t('pricing.plan3.cta'),
      features: [
        `3 ${t('pricing.features.classesPerWeek')} (12 ${t('pricing.features.classesPerMonth')})`,
        t('pricing.features.privateSessions'),
        t('pricing.features.flexibleScheduling'),
        t('pricing.features.cancelAnytime'),
        t('pricing.features.teacherSupport'),
        t('pricing.features.noContract')
      ]
    }
  ];

  return (
    <section id="planes" className="py-20 bg-passport-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-passport-gray mb-4 animate-fade-in">
            {t('pricing.title')}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <div 
              key={plan.id}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border animate-fade-in ${
                plan.popular ? 'border-2 border-passport-orange relative transform scale-105' : 'border-gray-200'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 passport-orange text-white px-6 py-2 rounded-full text-sm font-semibold">
                  {plan.popular}
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-passport-gray mb-2">
                  {plan.frequency}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-passport-blue">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">
                    {plan.period}
                  </span>
                </div>
                <div className="text-lg text-passport-orange font-semibold mb-6">
                  {plan.perClass}
                </div>
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <Check className="text-green-500 mr-3 flex-shrink-0" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={() => onPlanSelect(plan.id)}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'passport-orange text-white hover:bg-orange-600'
                    : 'passport-blue text-white hover:bg-blue-700'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
