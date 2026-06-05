import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Gift, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { analytics } from "@/lib/analytics";

interface DiscountPopupProps {
  language: 'en' | 'es';
  onClose: () => void;
  onSubscribe: (email: string) => void;
}

export default function DiscountPopup({ language, onClose, onSubscribe }: DiscountPopupProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    analytics.discountPopupShown(language);
  }, [language]);

  const texts = {
    en: {
      title: "🎉 Special Offer!",
      subtitle: "Get 10% OFF your first month",
      description: "Join thousands learning English with native instructors!",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      phonePlaceholder: "Your phone number",
      ctaButton: "Claim 10% Discount",
      submitting: "Sending...",
      noThanks: "No thanks",
      successTitle: "Discount Secured! 🎊",
      successMessage: "We'll contact you shortly with your discount code and booking details.",
    },
    es: {
      title: "🎉 ¡Oferta Especial!",
      subtitle: "Obtén 10% de DESCUENTO en tu primer mes",
      description: "¡Únete a miles aprendiendo inglés con instructores nativos!",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "Tu email",
      phonePlaceholder: "Tu número de teléfono",
      ctaButton: "Reclamar 10% Descuento",
      submitting: "Enviando...",
      noThanks: "No gracias",
      successTitle: "¡Descuento Asegurado! 🎊",
      successMessage: "Te contactaremos pronto con tu código de descuento e instrucciones de reserva.",
    }
  };

  const t = texts[language];

  const handleClose = () => {
    analytics.discountPopupClosed(language);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !phone || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, phone, language, source: 'discount_popup' }),
      });
    } catch (error) {
      console.error('Discount popup submission error:', error);
    } finally {
      setIsSubmitting(false);
    }

    analytics.discountPopupSubmitted(language);
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
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-white rounded-2xl max-w-md w-full p-8 text-center relative"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {t.successTitle}
          </h3>
          <p className="text-gray-600">
            {t.successMessage}
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white rounded-2xl max-w-lg w-full p-6 relative max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={handleClose}
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

        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.namePlaceholder}
          />
          <Input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.emailPlaceholder}
          />
          <Input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={t.phonePlaceholder}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full passport-orange hover:bg-orange-600 text-white text-lg py-6 rounded-xl"
          >
            {isSubmitting ? t.submitting : t.ctaButton}
          </Button>

          <button
            type="button"
            onClick={handleClose}
            className="w-full text-gray-500 hover:text-gray-700 text-sm py-2 transition-colors"
          >
            {t.noThanks}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
