'use client'

// Fonction pour tracker les événements Google Analytics
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Fonctions spécifiques pour tracker les conversions importantes
export const trackFormationView = (formationName: string) => {
  trackEvent('view_formation', 'formations', formationName)
}

export const trackFormationInterest = (formationName: string) => {
  trackEvent('formation_interest', 'conversions', formationName)
}

export const trackContactForm = (source: string) => {
  trackEvent('contact_form_submit', 'conversions', source)
}

export const trackCallbackRequest = () => {
  trackEvent('callback_request', 'conversions', 'phone_callback')
}

export const trackCPFClick = (formationName: string) => {
  trackEvent('cpf_click', 'conversions', formationName)
}

export const trackExternalLink = (destination: string) => {
  trackEvent('external_link_click', 'engagement', destination)
}

// Fonction pour tracker les conversions Google Ads
export const trackGoogleAdsConversion = (conversionLabel: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}/${conversionLabel}`,
      value: value,
      currency: 'EUR'
    })
  }
}

// Types pour TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}
