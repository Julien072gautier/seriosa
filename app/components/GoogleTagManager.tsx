'use client'

import Script from 'next/script'

export function GoogleTagManager() {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

  if (!GTM_ID) {
    return null
  }

  return (
    <>
      {/* Google Consent Mode V2 - Configuration par défaut */}
      <Script
        id="gtm-consent-mode"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          
          // Configuration par défaut - tous les consentements refusés
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied',
            'functionality_storage': 'denied',
            'personalization_storage': 'denied',
            'security_storage': 'granted',
            'wait_for_update': 500
          });
          `
        }}
      />
      
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  )
}
