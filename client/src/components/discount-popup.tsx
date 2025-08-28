import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Gift, Timer, CheckCircle } from "lucide-react";

interface DiscountPopupProps {
  language: 'en' | 'es';
  onClose: () => void;
  onSubscribe: (email: string) => void;
}

export default function DiscountPopup({ language, onClose, onSubscribe }: DiscountPopupProps) {
  const [email, setEmail] = useState("");
  // Removed timer functionality as requested
  const [isSubmitted, setIsSubmitted] = useState(false);

  const texts = {
    en: {
      title: "🎉 Special Offer!",
      subtitle: "Get 10% OFF your first month",
      description: "Join thousands learning English with native instructors!",
      timer: "Offer expires in:",
      emailPlaceholder: "Enter your email",
      ctaButton: "Claim 10% Discount",
      noThanks: "No thanks",
      successTitle: "Discount Secured! 🎊",
      successMessage: "Check your email for the discount code and booking instructions.",
      features: [
        "Native American instructors",
        "1-on-1 personalized classes",
        "Flexible scheduling 24/7"
      ]
    },
    es: {
      title: "🎉 ¡Oferta Especial!",
      subtitle: "Obtén 10% de DESCUENTO en tu primer mes",
      description: "Únete a miles aprendiendo inglés con instructores nativos!",
      timer: "La oferta expira en:",
      emailPlaceholder: "Ingresa tu email",
      ctaButton: "Reclamar 10% Descuento",
      noThanks: "No gracias",
      successTitle: "¡Descuento Asegurado! 🎊",
      successMessage: "Revisa tu email para el código de descuento e instrucciones de reserva.",
      features: [
        "Instructores nativos americanos",
        "Clases personalizadas 1-a-1",
        "Horarios flexibles 24/7"
      ]
    }
  };

  const t = texts[language];

  // Timer removed as requested

  // Timer formatting removed

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    onSubscribe(email);
    setIsSubmitted(true);
    
    // Close popup after showing success message
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center relative animate-in fade-in zoom-in duration-300">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {t.successTitle}
          </h3>
          <p className="text-gray-600">
            {t.successMessage}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-sm w-full p-6 relative animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-passport-blue to-passport-orange rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold bg-gradient-to-r from-passport-blue to-passport-orange bg-clip-text text-transparent mb-2">
            {t.title}
          </h3>
          
          <p className="text-lg font-semibold text-passport-orange mb-2">
            {t.subtitle}
          </p>
          
          <p className="text-gray-600 text-sm">
            {t.description}
          </p>
        </div>

        {/* Timer removed as requested */}
        {/* HighLevel form integration for discount popup */}
        <div className="space-y-4">
          <div className="min-h-[250px] -mx-2 -mb-2">
            {language === 'es' ? (
              <div 
                dangerouslySetInnerHTML={{
                  __html: `
                    <iframe
                      src="https://api.leadconnectorhq.com/widget/form/4jKIDLnqJmvyS6yhYdly"
                      style="width:100%;height:250px;border:none;border-radius:12px"
                      id="inline-4jKIDLnqJmvyS6yhYdly" 
                      data-layout="{'id':'INLINE'}"
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="neverDeactivate"
                      data-deactivation-value=""
                      data-form-name="Newsletter subscription - POP UP - CLASES DE INGLES"
                      data-height="250"
                      data-layout-iframe-id="inline-4jKIDLnqJmvyS6yhYdly"
                      data-form-id="4jKIDLnqJmvyS6yhYdly"
                      title="Newsletter subscription - POP UP - CLASES DE INGLES">
                    </iframe>
                    <script src="https://link.msgsndr.com/js/form_embed.js"></script>
                  `
                }}
              />
            ) : (
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/FTuj7n9Kp5GYdlbLyyI7"
                style={{
                  width: '100%',
                  height: '250px',
                  border: 'none',
                  borderRadius: '12px',
                  backgroundColor: '#f9fafb'
                }}
                loading="lazy"
                title="Newsletter Subscription"
                allow="clipboard-write"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
              />
            )}
          </div>
          
          <button
            type="button"
            onClick={onClose}
            className="w-full text-gray-500 hover:text-gray-700 text-sm py-2 transition-colors"
          >
            {t.noThanks}
          </button>
        </div>
      </div>
    </div>
  );
}