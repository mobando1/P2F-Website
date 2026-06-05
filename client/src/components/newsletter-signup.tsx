import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";
import { analytics } from "@/lib/analytics";

interface NewsletterSignupProps {
  language: 'en' | 'es';
  className?: string;
}

export default function NewsletterSignup({ language, className = "" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState("");

  const texts = {
    en: {
      title: "Stay updated with Spanish learning tips",
      subtitle: "Get weekly tips, resources, and exclusive offers delivered to your inbox",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email address",
      button: "Subscribe",
      buttonLoading: "Subscribing...",
      successMessage: "Thanks for subscribing! Check your email for confirmation.",
      errorMessage: "Something went wrong. Please try again.",
      privacyText: "We respect your privacy. Unsubscribe anytime."
    },
    es: {
      title: "Mantente actualizado con consejos para aprender inglés",
      subtitle: "Recibe consejos semanales, recursos y ofertas exclusivas en tu bandeja de entrada",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "Tu dirección de email",
      button: "Suscribirse",
      buttonLoading: "Suscribiendo...",
      successMessage: "¡Gracias por suscribirte! Revisa tu email para confirmar.",
      errorMessage: "Algo salió mal. Por favor intenta de nuevo.",
      privacyText: "Respetamos tu privacidad. Puedes cancelar en cualquier momento."
    }
  };

  const t = texts[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setStatus('loading');

    try {
      // TODO: Replace with actual HighLevel endpoint
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          language,
          source: 'website'
        }),
      });

      if (response.ok) {
        analytics.newsletterSignup(language);
        setStatus('success');
        setMessage(t.successMessage);
        setEmail("");
        setName("");
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      setStatus('error');
      setMessage(t.errorMessage);
    }
  };

  return (
    <div className={`bg-gray-50 p-8 rounded-2xl ${className}`}>
      <div className="max-w-md mx-auto text-center">
        <div className="w-12 h-12 bg-passport-blue rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-6 h-6 text-white" />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {t.title}
        </h3>
        
        <p className="text-gray-600 mb-6">
          {t.subtitle}
        </p>

        {status === 'success' ? (
          <div className="flex items-center justify-center gap-2 text-green-600 bg-green-50 rounded-lg p-4">
            <CheckCircle className="w-5 h-5 shrink-0" />
            <span className="text-sm font-medium">{message}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 text-left">
            <Input
              type="text"
              required
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

            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-600 text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{message}</span>
              </div>
            )}

            <Button
              type="submit"
              disabled={status === 'loading'}
              className="w-full passport-blue hover:bg-blue-700 text-white py-6 rounded-xl"
            >
              {status === 'loading' ? t.buttonLoading : t.button}
            </Button>

            <p className="text-xs text-gray-500 text-center">{t.privacyText}</p>
          </form>
        )}
      </div>
    </div>
  );
}