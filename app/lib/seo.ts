interface SEOData {
  title: string
  description: string
  keywords: string[]
  canonical?: string
  ogImage?: string
  type?: 'website' | 'article'
  structuredData?: any
}

export function generateFormationSEO(formationName: string, formationData: any): SEOData {
  return {
    title: `Formation ${formationName} | FormaPro`,
    description: `Formation professionnelle ${formationName} certifiée Qualiopi. ${formationData.shortDescription} Éligible CPF. Inscrivez-vous dès maintenant.`,
    keywords: [
      `formation ${formationName.toLowerCase()}`,
      'formation professionnelle',
      'CPF',
      'Qualiopi',
      'certification',
      ...formationData.keywords
    ],
    canonical: `/formation/${formationData.slug}`,
    ogImage: formationData.image || '/images/formations/default-og.jpg',
    type: 'article',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": `Formation ${formationName}`,
      "description": formationData.fullDescription,
      "provider": {
        "@type": "EducationalOrganization",
        "name": "FormaPro",
        "url": "https://www.formapro.fr"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": ["blended", "online"],
        "courseWorkload": formationData.duration,
        "instructor": {
          "@type": "Person",
          "name": "Équipe FormaPro"
        }
      },
      "offers": {
        "@type": "Offer",
        "price": formationData.price,
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "url": `https://www.formapro.fr/formation/${formationData.slug}`
      },
      "educationalCredentialAwarded": "Certification professionnelle",
      "teaches": formationData.skills
    }
  }
}

export function generatePageSEO(pageType: string, customData?: any): SEOData {
  const baseSEO = {
    website: {
      title: 'FormaPro - Formation Professionnelle de Qualité | Certifiée Qualiopi',
      description: 'FormaPro propose des formations professionnelles certifiées Qualiopi dans de nombreux domaines. Formations éligibles CPF avec un accompagnement personnalisé.',
      keywords: ['formation professionnelle', 'CPF', 'Qualiopi', 'intelligence artificielle', 'langues étrangères', 'communication']
    },
    formations: {
      title: 'Toutes nos Formations Professionnelles | FormaPro',
      description: 'Découvrez toutes nos formations professionnelles certifiées Qualiopi : IA, langues étrangères, communication, community management. Éligibles CPF.',
      keywords: ['formations professionnelles', 'liste formations', 'catalogue formation', 'CPF', 'Qualiopi']
    },
    contact: {
      title: 'Contactez-nous | FormaPro',
      description: 'Contactez FormaPro pour plus d\'informations sur nos formations professionnelles. Notre équipe vous accompagne dans votre projet de formation.',
      keywords: ['contact FormaPro', 'information formation', 'conseiller formation', 'accompagnement']
    },
    about: {
      title: 'À Propos de FormaPro | Organisme de Formation Certifié',
      description: 'FormaPro by Accertif est un organisme de formation certifié Qualiopi. Découvrez notre histoire, nos valeurs et notre engagement qualité.',
      keywords: ['FormaPro Accertif', 'organisme formation', 'Qualiopi', 'à propos', 'certification qualité']
    }
  }

  return baseSEO[pageType as keyof typeof baseSEO] || baseSEO.website
}

export function generateBreadcrumbStructuredData(breadcrumbs: Array<{name: string, url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://www.formapro.fr${item.url}`
    }))
  }
}
