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
    price: '650€ HT',
    skills: ['Compréhension RSE', 'Identification des enjeux', 'Priorisation des actions', 'Stratégie PME'],
    image: '/pourquoi.png',
    certification: 'Formation non-certifiante'
  },
  'formation-diagnostic-rse': {
    name: 'Le diagnostic RSE',
    shortDescription: 'Réaliser un état des lieux RSE pour identifier vos forces, faiblesses et priorités d\'action.',
    fullDescription: 'Apprenez à réaliser un véritable état des lieux RSE de votre organisation afin d\'évaluer vos pratiques actuelles, repérer vos marges de progrès et définir des actions prioritaires. Grâce à des outils simples et concrets, cette formation vous guide pas à pas vers une démarche structurée et adaptée à votre réalité.',
    keywords: ['diagnostic RSE', 'audit RSE', 'parties prenantes', 'formation RSE', 'outils RSE', 'analyse RSE', 'état des lieux RSE', 'cartographie parties prenantes'],
    duration: '4h',
    price: '650€ HT',
    skills: ['Diagnostic RSE', 'État des lieux structuré', 'Cartographie parties prenantes', 'Analyse des enjeux', 'Synthèse des résultats'],
    image: '/diagnostique.png',
    certification: 'Formation non-certifiante'
  },
  'formation-strategie-rse': {
    name: 'La stratégie RSE',
    shortDescription: 'Construire une stratégie RSE claire, alignée sur vos valeurs et vos objectifs.',
    fullDescription: 'Apprenez à transformer votre diagnostic RSE en une véritable stratégie durable. Cette formation vous guide pour définir vos priorités, fixer des objectifs mesurables et intégrer la RSE au cœur de votre modèle économique. Vous découvrirez comment piloter vos actions, suivre vos indicateurs et mobiliser vos équipes autour d\'une vision responsable et partagée.',
    keywords: ['stratégie RSE', 'élaboration stratégie', 'performance RSE', 'formation RSE', 'mesure RSE', 'KPI RSE', 'feuille de route RSE', 'objectifs RSE'],
    duration: '4h',
    price: '650€ HT',
    skills: ['Élaboration stratégie RSE', 'Définition objectifs RSE', 'Feuille de route opérationnelle', 'Mobilisation équipes', 'Mesure performance RSE'],
    image: '/strategie.png',
    certification: 'Formation non-certifiante'
  },
  'formation-evenement-eco-responsable': {
    name: 'Organiser un événement éco-responsable et impactant',
    shortDescription: 'Apprendre à concevoir, organiser et valoriser un événement aligné avec les valeurs du développement durable.',
    fullDescription: 'De la conception à la mise en œuvre, apprenez à organiser des événements éco-responsables qui allient sens, convivialité et impact. Cette formation vous guide dans toutes les étapes : définition des objectifs, gestion des partenaires, logistique durable, communication responsable et évaluation post-événement. Idéal pour allier performance, engagement et plaisir collectif.',
    keywords: ['événement éco-responsable', 'organisation événement', 'événementiel durable', 'formation événement', 'communication responsable', 'logistique durable', 'développement durable'],
    duration: '4h',
    price: '650€ HT',
    skills: ['Conception événement éco-responsable', 'Planification événement durable', 'Communication responsable', 'Évaluation impact', 'Gestion logistique durable'],
    image: '/evenement.png',
    certification: 'Formation non-certifiante'
  },
  'formation-mecenat': {
    name: 'Les différentes formes de mécénat',
    shortDescription: 'Découvrir les différentes formes de mécénat et apprendre à bâtir une stratégie d\'engagement efficace.',
    fullDescription: 'Explorez toutes les formes de mécénat – financier, en nature, de compétences ou technologique – et comprenez comment les utiliser pour renforcer votre impact social tout en valorisant votre image. Cette formation vous aide à structurer une démarche de mécénat alignée avec vos valeurs, vos ressources et vos objectifs stratégiques.',
    keywords: ['mécénat', 'mécénat financier', 'mécénat de compétences', 'mécénat en nature', 'mécénat technologique', 'avantages fiscaux mécénat', 'stratégie mécénat', 'responsabilité sociale'],
    duration: '4h',
    price: '650€ HT',
    skills: ['Comprendre le mécénat', 'Formes de mécénat', 'Avantages fiscaux', 'Stratégie mécénat', 'Mesure impact'],
    image: '/mecenat.png',
    certification: 'Formation non-certifiante'
  },
  'formation-communication-rse': {
    name: 'Communiquer sa RSE avec impact',
    shortDescription: 'Apprendre à construire une communication claire, cohérente et engagée autour de sa démarche RSE.',
    fullDescription: 'Définissez votre stratégie de communication RSE et apprenez à faire passer vos messages avec justesse et impact. De la définition des cibles à la création de contenus engageants, cette formation vous aide à valoriser vos actions responsables, renforcer la cohérence de vos messages et donner du sens à votre communication.',
    keywords: ['communication RSE', 'stratégie communication', 'communication responsable', 'contenus RSE', 'plan communication', 'valorisation RSE', 'storytelling RSE'],
    duration: '4h',
    price: '650€ HT',
    skills: ['Stratégie communication RSE', 'Création contenus', 'Plan communication', 'Storytelling', 'Calendrier éditorial'],
    image: '/communication.png',
    certification: 'Formation non-certifiante'
  }
}

export function generateFormationSEO(formationSlug: string): SEOData {
  const formation = formationData[formationSlug as keyof typeof formationData]
  
  if (!formation) {
    return {
      title: 'Formation | Seriosa 2.0',
      description: 'Formation professionnelle certifiée Qualiopi éligible CPF.',
      keywords: ['formation professionnelle', 'CPF', 'Qualiopi'],
      canonical: `/formation/${formationSlug}`,
      type: 'article'
    }
  }

  return {
    title: `Formation ${formation.name} | Seriosa 2.0`,
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
            alt: `Formation ${formation?.name} - Seriosa 2.0`,
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
      url: `https://www.seriosa.fr/formation/${slug}`,
      type: 'article',
      images: [
        {
          url: seoData.ogImage || `/images/formations/${slug}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `Formation ${formation?.name} - Seriosa 2.0`,
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
}
