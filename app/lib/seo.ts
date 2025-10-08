import type { Metadata } from 'next'

interface SEOData {
  title: string
  description: string
  keywords: string[]
  canonical?: string
  ogImage?: string
  type?: 'website' | 'article'
  structuredData?: any
}

// Données des formations pour le SEO
export const formationData = {
  'anglais-professionnel': {
    name: 'Anglais Professionnel',
    shortDescription: 'Développez des automatismes de communication en anglais et renforcez votre impact professionnel à l\'international.',
    fullDescription: 'Formation professionnelle en anglais certifiée LILATE - RS6118. Développez vos compétences linguistiques pour communiquer efficacement en anglais dans un contexte professionnel. Formation éligible CPF.',
    keywords: ['anglais professionnel', 'formation anglais', 'certification LILATE', 'anglais entreprise', 'communication internationale'],
    duration: '30 heures',
    price: '1950€',
    skills: ['Communication en anglais', 'Vocabulaire professionnel', 'Grammaire anglaise', 'Présentation en anglais'],
    image: '/images/formations/anglais-og.jpg',
    certification: 'LILATE - RS6118'
  },
  'allemand-professionnel': {
    name: 'Allemand Professionnel',
    shortDescription: 'Maîtrisez l\'allemand professionnel pour développer vos relations commerciales et votre carrière.',
    fullDescription: 'Formation professionnelle en allemand pour améliorer vos compétences linguistiques en contexte professionnel. Formation éligible CPF.',
    keywords: ['allemand professionnel', 'formation allemand', 'allemand entreprise', 'communication allemande'],
    duration: '30 heures',
    price: '1950€',
    skills: ['Communication en allemand', 'Vocabulaire professionnel', 'Grammaire allemande'],
    image: '/images/formations/allemand-og.jpg',
    certification: 'Certification professionnelle'
  },
  'espagnol-professionnel': {
    name: 'Espagnol Professionnel',
    shortDescription: 'Développez vos compétences en espagnol pour élargir vos opportunités professionnelles.',
    fullDescription: 'Formation professionnelle en espagnol pour communiquer efficacement dans un contexte professionnel hispanophone. Formation éligible CPF.',
    keywords: ['espagnol professionnel', 'formation espagnol', 'espagnol entreprise', 'communication espagnole'],
    duration: '30 heures',
    price: '1950€',
    skills: ['Communication en espagnol', 'Vocabulaire professionnel', 'Grammaire espagnole'],
    image: '/images/formations/espagnol-og.jpg',
    certification: 'Certification professionnelle'
  },
  'communication-prise-parole': {
    name: 'Communication et Prise de Parole',
    shortDescription: 'Maîtrisez l\'art de la communication et de la prise de parole en public.',
    fullDescription: 'Formation professionnelle en communication et techniques de prise de parole en public. Développez votre charisme et votre impact lors de présentations. Formation éligible CPF.',
    keywords: ['communication', 'prise de parole', 'présentation', 'charisme', 'leadership'],
    duration: '30 heures',
    price: '1950€',
    skills: ['Prise de parole en public', 'Communication non verbale', 'Présentation', 'Leadership'],
    image: '/images/formations/communication-og.jpg',
    certification: 'Certification professionnelle'
  },
  'ia-vente': {
    name: 'IA et Vente',
    shortDescription: 'Intégrez l\'intelligence artificielle dans vos stratégies de vente et de marketing.',
    fullDescription: 'Formation professionnelle en intelligence artificielle appliquée à la vente et au marketing. Découvrez les outils IA pour optimiser vos performances commerciales. Formation éligible CPF.',
    keywords: ['intelligence artificielle', 'IA vente', 'marketing digital', 'outils IA', 'vente'],
    duration: '30 heures',
    price: '1950€',
    skills: ['Intelligence artificielle', 'Outils IA', 'Marketing digital', 'Stratégies de vente'],
    image: '/images/formations/ia-og.jpg',
    certification: 'Certification professionnelle'
  },
  'community-management': {
    name: 'Community Management',
    shortDescription: 'Maîtrisez la gestion de communautés et l\'animation de réseaux sociaux.',
    fullDescription: 'Formation professionnelle en community management et gestion de réseaux sociaux. Apprenez à créer et animer des communautés en ligne. Formation éligible CPF.',
    keywords: ['community management', 'réseaux sociaux', 'animation communauté', 'social media'],
    duration: '30 heures',
    price: '1950€',
    skills: ['Community Management', 'Réseaux sociaux', 'Animation de communauté', 'Content marketing'],
    image: '/images/formations/community-og.jpg',
    certification: 'Certification professionnelle'
  }
}

export function generateFormationSEO(formationSlug: string): SEOData {
  const formation = formationData[formationSlug as keyof typeof formationData]
  
  if (!formation) {
    return {
      title: 'Service | Seriosa 2.0',
      description: 'Formation professionnelle certifiée Qualiopi éligible CPF.',
      keywords: ['formation professionnelle', 'CPF', 'Qualiopi'],
      canonical: `/formation/${formationSlug}`,
      type: 'article'
    }
  }

  return {
    title: `Service ${formation.name} | Seriosa 2.0`,
    description: `Formation professionnelle ${formation.name} certifiée Qualiopi. ${formation.shortDescription} Éligible CPF. Inscrivez-vous dès maintenant.`,
    keywords: [
      `formation ${formation.name.toLowerCase()}`,
      'formation professionnelle',
      'CPF',
      'Qualiopi',
      'certification',
      ...formation.keywords
    ],
    canonical: `/formation/${formationSlug}`,
    ogImage: formation.image,
    type: 'article',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": `Formation ${formation.name}`,
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
  }
}

export function generatePageSEO(pageType: string, customData?: any): SEOData {
  const baseSEO = {
    website: {
      title: 'Seriosa 2.0 - Cabinet de conseil RSE et développement durable | Certifié Qualiopi',
      description: 'Seriosa 2.0 est un cabinet de conseil RSE et développement durable. Nous accompagnons les entreprises dans leur transition écologique et sociale.',
      keywords: ['formation professionnelle', 'CPF', 'Qualiopi', 'intelligence artificielle', 'langues étrangères', 'communication']
    },
    formations: {
      title: 'Toutes nos Formations | Seriosa 2.0',
      description: 'Découvrez toutes nos formations : audit, stratégie, transition écologique, développement social, formation. Organisme de formation certifié Qualiopi.',
      keywords: ['formations professionnelles', 'liste formations', 'catalogue formation', 'CPF', 'Qualiopi']
    },
    contact: {
      title: 'Contactez-nous | Seriosa 2.0',
      description: 'Contactez Seriosa 2.0 pour plus d\'informations sur nos services RSE. Notre équipe vous accompagne dans votre transition écologique et sociale.',
      keywords: ['contact Seriosa', 'information RSE', 'conseiller RSE', 'accompagnement']
    },
    about: {
      title: 'À Propos de Seriosa 2.0 | Cabinet de Conseil RSE Certifié',
      description: 'Seriosa 2.0 est un cabinet de conseil RSE et développement durable certifié Qualiopi. Découvrez notre histoire, nos valeurs et notre engagement.',
      keywords: ['Seriosa 2.0', 'cabinet conseil RSE', 'Qualiopi', 'à propos', 'certification qualité']
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
      "item": `https://www.seriosa.fr${item.url}`
    }))
  }
}

export function generateAllFormationsMetadata() {
  const formations = Object.keys(formationData)
  const metadata: Record<string, Metadata> = {}
  
  formations.forEach(slug => {
    const seoData = generateFormationSEO(slug)
    const formation = formationData[slug as keyof typeof formationData]
    
    metadata[slug] = {
      title: seoData.title,
      description: seoData.description,
      keywords: seoData.keywords,
      openGraph: {
        title: seoData.title,
        description: seoData.description,
        url: `https://www.seriosa.fr/service/${slug}`,
        type: 'article',
        images: [
          {
            url: seoData.ogImage || `/images/formations/${slug}-og.jpg`,
            width: 1200,
            height: 630,
            alt: `Service ${formation?.name} - Seriosa 2.0`,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: seoData.title,
        description: seoData.description,
        images: [seoData.ogImage || `/images/formations/${slug}-og.jpg`],
      },
      alternates: {
        canonical: `https://www.seriosa.fr/service/${slug}`,
      },
    }
  })
  
  return metadata
}

// Fonction pour obtenir les métadonnées d'une formation spécifique
export function getFormationMetadata(slug: string): Metadata {
  const seoData = generateFormationSEO(slug)
  const formation = formationData[slug as keyof typeof formationData]
  
  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      url: `https://www.seriosa.fr/service/${slug}`,
      type: 'article',
      images: [
        {
          url: seoData.ogImage || `/images/formations/${slug}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `Service ${formation?.name} - Seriosa 2.0`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoData.title,
      description: seoData.description,
      images: [seoData.ogImage || `/images/formations/${slug}-og.jpg`],
    },
    alternates: {
      canonical: `https://www.seriosa.fr/service/${slug}`,
    },
  }
}
