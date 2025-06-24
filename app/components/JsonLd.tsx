export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "FormaPro",
    "alternateName": "FormaPro Formation",
    "description": "Centre de formation professionnelle certifié Qualiopi proposant des formations dans l'intelligence artificielle, les langues étrangères, la communication et le community management.",
    "url": "https://www.formapro.fr",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.formapro.fr/images/logos/formapro-logo.png"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33-XX-XX-XX-XX-XX",
      "contactType": "Customer Service",
      "availableLanguage": ["French"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR",
      "addressLocality": "France"
    },
    "sameAs": [
      "https://www.linkedin.com/company/formapro",
      "https://www.facebook.com/formapro",
      "https://twitter.com/formapro"
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "name": "Certification Qualiopi",
      "credentialCategory": "Certification qualité"
    },
    "offers": [
      {
        "@type": "Course",
        "name": "Formation IA et Vente",
        "description": "Formation professionnelle en intelligence artificielle appliquée à la vente",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "FormaPro"
        }
      },
      {
        "@type": "Course",
        "name": "Formation Communication et Prise de Parole",
        "description": "Formation professionnelle en communication et techniques de prise de parole en public",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "FormaPro"
        }
      },
      {
        "@type": "Course",
        "name": "Formation Community Management",
        "description": "Formation professionnelle en gestion de communautés et réseaux sociaux",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "FormaPro"
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
