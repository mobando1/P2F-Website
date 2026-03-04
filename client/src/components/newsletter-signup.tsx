import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";

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

        {/* Use real HighLevel forms for both languages */}
        {language === 'en' ? (
          <div className="min-h-[300px] md:min-h-[400px]">
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/IT3EmBJlzLa0VUEN4IiS"
                    style="width:100%;height:400px;border:none;border-radius:8px"
                    id="inline-IT3EmBJlzLa0VUEN4IiS_${Date.now()}" 
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Newsletter subscription"
                    data-height="400"
                    data-layout-iframe-id="inline-IT3EmBJlzLa0VUEN4IiS"
                    data-form-id="IT3EmBJlzLa0VUEN4IiS"
                    title="Newsletter subscription"
                  ></iframe>
                  <script src="https://link.msgsndr.com/js/form_embed.js"></script>
                `
              }}
            />
          </div>
        ) : (
          <div className="min-h-[300px] md:min-h-[400px]">
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/VsFcVGunIocpad9n8R2u"
                    style="width:100%;height:400px;border:none;border-radius:8px"
                    id="inline-VsFcVGunIocpad9n8R2u_${Date.now()}" 
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Newsletter subscription - CLASES DE INGLES"
                    data-height="400"
                    data-layout-iframe-id="inline-VsFcVGunIocpad9n8R2u"
                    data-form-id="VsFcVGunIocpad9n8R2u"
                    title="Newsletter subscription - CLASES DE INGLES"
                  ></iframe>
                  <script src="https://link.msgsndr.com/js/form_embed.js"></script>
                `
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}