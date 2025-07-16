// Configuration SEO centralisée pour FormaPro by Accertif

export const SEO_CONFIG = {
  // Informations de base
  siteName: 'FormaPro by Accertif',
  siteUrl: 'https://www.formaprobyaccertif.fr',
  siteDescription: 'Organisme de formation professionnelle certifié Qualiopi spécialisé dans les Form\'actions certifiantes sur-mesure. Formations éligibles CPF en intelligence artificielle, langues étrangères, communication et community management.',
  
  // Contact
  contactEmail: 'hello@formaprobyaccertif.fr',
  contactPhone: '09 75 85 65 10',
  address: '905 Chemin de l\'Évêque, 82290 Montbeton, France',
  
  // Réseaux sociaux
  socialMedia: {
    linkedin: 'https://www.linkedin.com/company/93788178',
    facebook: 'https://www.facebook.com/formapro',
    twitter: 'https://twitter.com/formapro'
  },
  
  // Certification
  certification: {
    name: 'Certification Qualiopi',
    organization: 'France Compétences',
    url: 'https://irp.cdn-website.com/e0ab763a/files/uploaded/Certificat_Qualiopi_Sign%C3%A9_HD.pdf'
  },
  
  // Images par défaut
  defaultImages: {
    logo: '/images/logos/formapro-logo.png',
    ogImage: '/images/logos/formapro-og.jpg',
    favicon: '/iceberg.png'
  },
  
  // Mots-clés principaux
  mainKeywords: [
    'formation professionnelle',
    'CPF',
    'Qualiopi',
    'FormaPro by Accertif',
    'formation certifiée',
    'formation éligible CPF',
    'organisme de formation'
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