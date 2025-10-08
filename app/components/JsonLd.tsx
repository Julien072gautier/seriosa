import { formationData } from '../lib/seo'

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Seriosa 2.0",
    "alternateName": ["Seriosa", "Seriosa RSE"],
    "description": "Cabinet de conseil RSE et développement durable certifié Qualiopi. Accompagnement des entreprises dans leur transition écologique et sociale.",
    "url": "https://www.seriosa.fr",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.seriosa.fr/logo.jpg",
      "width": 120,
      "height": 40
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33-XX-XX-XX-XX-XX",
      "email": "olivier.guyot@seriosa.fr",
      "contactType": "Customer Service",
      "availableLanguage": ["French"],
      "areaServed": "FR",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR",
      "addressLocality": "France"
    },
    "sameAs": [
      "https://www.linkedin.com/company/seriosa2.0",
      "https://www.facebook.com/seriosa2.0",
      "https://twitter.com/seriosa2.0"
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "name": "Certification Qualiopi",
      "credentialCategory": "Certification qualité",
      "recognizedBy": {
        "@type": "Organization",
        "name": "France Compétences"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "serviceType": "Conseil RSE et développement durable",
    "offers": [
      {
        "@type": "Course",
        "name": "Audit et diagnostic RSE",
        "description": "Service d'audit et diagnostic RSE complet pour évaluer la maturité de votre entreprise",
        "provider": {
          "@type": "Organization",
          "name": "Seriosa 2.0"
        },
        "serviceType": "Conseil RSE",
        "teaches": ["Audit RSE", "Diagnostic environnemental", "Évaluation sociale"]
      },
      {
        "@type": "Course",
        "name": "Stratégie et gouvernance RSE",
        "description": "Service de définition de stratégie RSE et gouvernance pour votre entreprise",
        "provider": {
          "@type": "Organization",
          "name": "Seriosa 2.0"
        },
        "serviceType": "Conseil RSE",
        "teaches": ["Stratégie RSE", "Gouvernance", "Pilotage RSE"]
      },
      {
        "@type": "Course",
        "name": "Transition écologique",
        "description": "Service d'accompagnement transition écologique et environnementale",
        "provider": {
          "@type": "Organization",
          "name": "Seriosa 2.0"
        },
        "serviceType": "Conseil RSE",
        "teaches": ["Bilan carbone", "Éco-conception", "Énergies renouvelables"]
      },
      {
        "@type": "Course",
        "name": "Développement social et sociétal",
        "description": "Service de développement social et sociétal pour votre entreprise",
        "provider": {
          "@type": "Organization",
          "name": "Seriosa 2.0"
        },
        "serviceType": "Conseil RSE",
        "teaches": ["Diversité", "Inclusion", "Bien-être au travail"]
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function FormationJsonLd({ formationSlug }: { formationSlug: string }) {
  const formation = formationData[formationSlug as keyof typeof formationData]
  
  if (!formation) {
    return null
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": `Service ${formation.name}`,
    "description": formation.fullDescription,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Seriosa 2.0",
      "url": "https://www.seriosa.fr"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": ["blended", "online", "offline"],
      "courseWorkload": formation.duration,
      "instructor": {
        "@type": "Person",
        "name": "Équipe Seriosa 2.0"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": formation.price,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": `https://www.seriosa.fr/service/${formationSlug}`
    },
    "educationalCredentialAwarded": formation.certification,
    "teaches": formation.skills,
    "image": formation.image,
    "url": `https://www.seriosa.fr/service/${formationSlug}`
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
