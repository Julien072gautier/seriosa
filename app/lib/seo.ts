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

// Données des formations RSE pour le SEO
export const formationData = {
  'pourquoi-comment-rse': {
    name: 'Pourquoi et comment la RSE',
    shortDescription: 'Comprenez les enjeux et les principes fondamentaux de la RSE et apprenez à identifier et prioriser les actions adaptées à votre PME.',
    fullDescription: 'Formation RSE pour comprendre les enjeux et principes fondamentaux de la responsabilité sociétale des entreprises. Apprenez à identifier et prioriser les actions RSE adaptées à votre PME. Formation non-certifiante.',
    keywords: ['RSE', 'responsabilité sociétale', 'formation RSE', 'développement durable', 'PME', 'transition écologique'],
    duration: '4h',
    price: 'Dès 650€ HT',
    skills: ['Compréhension RSE', 'Identification des enjeux', 'Priorisation des actions', 'Stratégie PME'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    certification: 'Formation non-certifiante'
  },
  'formation-diagnostic-rse': {
    name: 'Le diagnostic RSE',
    shortDescription: 'Maîtrisez les outils et méthodes pour réaliser un diagnostic RSE complet et identifier les enjeux prioritaires de votre entreprise.',
    fullDescription: 'Formation RSE pour maîtriser les outils et méthodes de diagnostic RSE. Apprenez à cartographier les parties prenantes, réaliser un audit RSE complet et identifier les actions prioritaires. Formation non-certifiante.',
    keywords: ['diagnostic RSE', 'audit RSE', 'parties prenantes', 'formation RSE', 'outils RSE', 'analyse RSE'],
    duration: '4h',
    price: 'Dès 650€ HT',
    skills: ['Diagnostic RSE', 'Cartographie parties prenantes', 'Audit RSE', 'Analyse des enjeux'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    certification: 'Formation non-certifiante'
  },
  'formation-strategie-rse': {
    name: 'La stratégie RSE',
    shortDescription: 'Acquérez les fondamentaux pour élaborer et mettre en œuvre une stratégie RSE personnalisée et mesurer sa performance.',
    fullDescription: 'Formation RSE pour élaborer et mettre en œuvre une stratégie RSE personnalisée. Intégrez les enjeux économiques, sociaux et environnementaux et mesurez la performance de votre stratégie. Formation non-certifiante.',
    keywords: ['stratégie RSE', 'élaboration stratégie', 'performance RSE', 'formation RSE', 'mesure RSE', 'KPI RSE'],
    duration: '4h',
    price: 'Dès 650€ HT',
    skills: ['Élaboration stratégie RSE', 'Définition objectifs', 'Mesure performance', 'Communication RSE'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    certification: 'Formation non-certifiante'
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
        "url": `https://www.seriosa.fr/formation/${formationSlug}`
      },
      "educationalCredentialAwarded": formation.certification,
      "teaches": formation.skills,
      "image": formation.image,
      "url": `https://www.seriosa.fr/formation/${formationSlug}`
    }
  }
}

export function generatePageSEO(pageType: string, customData?: any): SEOData {
  const baseSEO = {
    website: {
      title: 'Seriosa 2.0 - Cabinet de conseil RSE et développement durable | Certifié Qualiopi',
      description: 'Seriosa 2.0 est un cabinet de conseil RSE et développement durable. Nous accompagnons les entreprises dans leur transition écologique et sociale.',
      keywords: ['RSE', 'responsabilité sociétale', 'développement durable', 'conseil RSE', 'transition écologique', 'PME']
    },
    formations: {
      title: 'Formations RSE | Seriosa 2.0',
      description: 'Découvrez nos formations RSE : diagnostic RSE, stratégie RSE, sensibilisation RSE. Formations non-certifiantes adaptées aux PME.',
      keywords: ['formations RSE', 'formation responsabilité sociétale', 'diagnostic RSE', 'stratégie RSE', 'PME']
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
        url: `https://www.seriosa.fr/formation/${slug}`,
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
        canonical: `https://www.seriosa.fr/formation/${slug}`,
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
