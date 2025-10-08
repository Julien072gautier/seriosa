// Configuration SEO centralisée pour Seriosa 2.0

export const SEO_CONFIG = {
  // Informations de base
  siteName: 'Seriosa 2.0',
  siteUrl: 'https://www.seriosa.fr',
  siteDescription: 'Cabinet de conseil spécialisé en RSE (Responsabilité Sociétale des Entreprises) et développement durable. Accompagnement des entreprises dans leur transition écologique et sociale.',
  
  // Contact
  contactEmail: 'olivier.guyot@seriosa.fr',
  contactPhone: '07 76 95 70 38',
  address: '31 rue Chevalier Paul 83000 Toulon',
  
  // Réseaux sociaux
  socialMedia: {
    linkedin: 'https://www.linkedin.com/company/93788178',
    facebook: 'https://www.facebook.com/seriosa2.0',
    twitter: 'https://twitter.com/seriosa2.0'
  },
  
  // Certification
  certification: {
    name: 'Certification Qualiopi',
    organization: 'France Compétences',
    url: 'https://irp.cdn-website.com/e0ab763a/files/uploaded/Certificat_Qualiopi_Sign%C3%A9_HD.pdf'
  },
  
  // Images par défaut
  defaultImages: {
    logo: '/logo.jpg',
    ogImage: '/logo.jpg',
    favicon: '/logo.jpg'
  },
  
  // Mots-clés principaux
  mainKeywords: [
    'RSE',
    'responsabilité sociétale',
    'développement durable',
    'Seriosa 2.0',
    'conseil RSE',
    'transition écologique',
    'cabinet de conseil'
  ],
  
  // Horaires d'ouverture
  businessHours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00'
  },
  
  // Évaluations (à mettre à jour avec de vraies données)
  ratings: {
    average: 4.8,
    count: 150,
    bestRating: 5,
    worstRating: 1
  }
}

// Fonction pour générer l'URL canonique
export function getCanonicalUrl(path: string = ''): string {
  return `${SEO_CONFIG.siteUrl}${path}`
}

// Fonction pour générer les métadonnées Open Graph
export function generateOpenGraphData(title: string, description: string, path: string = '', image?: string) {
  return {
    title,
    description,
    url: getCanonicalUrl(path),
    siteName: SEO_CONFIG.siteName,
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: image || SEO_CONFIG.defaultImages.ogImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  }
}

// Fonction pour générer les métadonnées Twitter
export function generateTwitterData(title: string, description: string, image?: string) {
  return {
    card: 'summary_large_image',
    title,
    description,
    images: [image || SEO_CONFIG.defaultImages.ogImage],
  }
} 