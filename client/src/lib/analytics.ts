// Google Analytics 4 event tracking helper
// Replace G-XXXXXXXXXX in index.html with your actual Measurement ID

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

// Pre-defined events for type safety
export const analytics = {
  bookingSubmitted: (language: string, studentType: string) =>
    trackEvent("booking_submitted", { language, student_type: studentType }),

  newsletterSignup: (language: string) =>
    trackEvent("newsletter_signup", { language }),

  discountPopupShown: (language: string) =>
    trackEvent("discount_popup_shown", { language }),

  discountPopupClosed: (language: string) =>
    trackEvent("discount_popup_closed", { language }),

  discountPopupSubmitted: (language: string) =>
    trackEvent("discount_popup_submitted", { language }),

  ctaClicked: (ctaName: string, language: string) =>
    trackEvent("cta_clicked", { cta_name: ctaName, language }),

  pricingPlanClicked: (planName: string, language: string) =>
    trackEvent("pricing_plan_clicked", { plan_name: planName, language }),

  languageSelected: (language: string) =>
    trackEvent("language_selected", { language }),

  chatbotOpened: () =>
    trackEvent("chatbot_opened"),

  contactFormSubmitted: (language: string) =>
    trackEvent("contact_form_submitted", { language }),

  pageViewed: (pageName: string, language: string) =>
    trackEvent("custom_page_view", { page_name: pageName, language }),
};
