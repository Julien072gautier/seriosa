// Types pour la configuration des formations
export interface Formation {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  slug: string;
  category: string;
  image: string;
  duration: string;
  formateur: string;
  prices: {
    individuel: { price: string; label: string };
    collectif: { price: string; label: string };
  };
  dates: {
    collectif: string[];
    individuel: string[];
  };
  cpfEligible: boolean;
  features: string[];
  certifications?: string[];
  objectives: string[];
  program: {
    title: string;
    items: string[];
  }[];
  publicVise: string[];
  prerequis: string[];
  teachingMethods: string[];
  evaluationMethods: string[];
  // Type de formation : certifiante, partenariat, ou non-certifiante
  formationType: 'certifiante' | 'partenariat' | 'non-certifiante';
  certificationDetails?: {
    name: string;
    code: string;
    organization: string;
    organizationUrl?: string;
    partenaire?: string;
    partenaireUrl?: string;
    partenaireLogo?: string;
    description?: string;
    titre?: string; // Pour les formations RNCP
    dureeEnregistrement?: string;
    dateEnregistrement?: string;
    examDetails?: {
      format: string[];
      successRate: string;
    };
  };
  accessibility: string[];
  reasons: {
    title: string;
    description: string;
    icon: string;
  }[];
  icon?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface FormationsConfig {
  categories: Category[];
  formations: Formation[];
}

export interface ThemeConfig {
  brand: {
    primaryColor: string;
    secondaryColor: string;
  };
}
