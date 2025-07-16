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
      title: 'Formation | FormaPro by Accertif',
      description: 'Formation professionnelle certifiée Qualiopi éligible CPF.',
      keywords: ['formation professionnelle', 'CPF', 'Qualiopi'],
      canonical: `/formation/${formationSlug}`,
      type: 'article'
    }
  }

  return {
    title: `Formation ${formation.name} | FormaPro by Accertif`,
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
        "name": "FormaPro by Accertif",
        "url": "https://www.formaprobyaccertif.fr"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": ["blended", "online", "offline"],
        "courseWorkload": formation.duration,
        "instructor": {
          "@type": "Person",
          "name": "Équipe FormaPro by Accertif"
        }
      },
      "offers": {
        "@type": "Offer",
        "price": formation.price,
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "url": `https://www.formaprobyaccertif.fr/formation/${formationSlug}`
      },
      "educationalCredentialAwarded": formation.certification,
      "teaches": formation.skills,
      "image": formation.image,
      "url": `https://www.formaprobyaccertif.fr/formation/${formationSlug}`
    }
  }
}

export function generatePageSEO(pageType: string, customData?: any): SEOData {
  const baseSEO = {
    website: {
      title: 'FormaPro by Accertif - Formation Professionnelle de Qualité | Certifiée Qualiopi',
      description: 'FormaPro by Accertif propose des formations professionnelles certifiées Qualiopi dans de nombreux domaines. Formations éligibles CPF avec un accompagnement personnalisé.',
      keywords: ['formation professionnelle', 'CPF', 'Qualiopi', 'intelligence artificielle', 'langues étrangères', 'communication']
    },
    formations: {
      title: 'Toutes nos Formations Professionnelles | FormaPro by Accertif',
      description: 'Découvrez toutes nos formations professionnelles certifiées Qualiopi : IA, langues étrangères, communication, community management. Éligibles CPF.',
      keywords: ['formations professionnelles', 'liste formations', 'catalogue formation', 'CPF', 'Qualiopi']
    },
    contact: {
      title: 'Contactez-nous | FormaPro by Accertif',
      description: 'Contactez FormaPro by Accertif pour plus d\'informations sur nos formations professionnelles. Notre équipe vous accompagne dans votre projet de formation.',
      keywords: ['contact FormaPro', 'information formation', 'conseiller formation', 'accompagnement']
    },
    about: {
      title: 'À Propos de FormaPro by Accertif | Organisme de Formation Certifié',
      description: 'FormaPro by Accertif est un organisme de formation certifié Qualiopi. Découvrez notre histoire, nos valeurs et notre engagement qualité.',
      keywords: ['FormaPro by Accertif', 'organisme formation', 'Qualiopi', 'à propos', 'certification qualité']
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
      "item": `https://www.formaprobyaccertif.fr${item.url}`
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
        url: `https://www.formaprobyaccertif.fr/formation/${slug}`,
        type: 'article',
        images: [
          {
            url: seoData.ogImage || `/images/formations/${slug}-og.jpg`,
            width: 1200,
            height: 630,
            alt: `Formation ${formation?.name} - FormaPro by Accertif`,
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
        canonical: `https://www.formaprobyaccertif.fr/formation/${slug}`,
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
      url: `https://www.formaprobyaccertif.fr/formation/${slug}`,
      type: 'article',
      images: [
        {
          url: seoData.ogImage || `/images/formations/${slug}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `Formation ${formation?.name} - FormaPro by Accertif`,
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
      canonical: `https://www.formaprobyaccertif.fr/formation/${slug}`,
    },
  }
}
