import { Formation, Category } from './types';

const formationsConfig = {
  categories: [
    {
      id: 'Audit et diagnostic RSE',
      name: 'Audit et diagnostic RSE',
      description: 'Évaluation de la maturité RSE de votre entreprise',
      icon: 'Search'
    },
    {
      id: 'Stratégie et gouvernance',
      name: 'Stratégie et gouvernance',
      description: 'Définition de votre stratégie RSE et gouvernance',
      icon: 'Target'
    },
    {
      id: 'Environnement et transition écologique',
      name: 'Environnement et transition écologique',
      description: 'Accompagnement transition écologique et environnementale',
      icon: 'Leaf'
    },
    {
      id: 'Social et sociétal',
      name: 'Social et sociétal',
      description: 'Développement social et sociétal de votre entreprise',
      icon: 'Users'
    },
    {
      id: 'Formation et sensibilisation',
      name: 'Formation et sensibilisation',
      description: 'Formation des équipes aux enjeux RSE',
      icon: 'BookOpen'
    }
  ] as Category[],
  
  formations: [
    {
      id: 'audit-rse',
      title: 'Audit et diagnostic RSE complet',
      shortDescription: 'Évaluez la maturité RSE de votre entreprise et identifiez les axes d\'amélioration prioritaires pour votre transition écologique et sociale.',
      fullDescription: 'Notre audit RSE complet vous permet d\'évaluer la maturité de votre entreprise sur les enjeux environnementaux, sociaux et de gouvernance, et d\'identifier les leviers d\'action prioritaires.',
      slug: 'service-audit-rse',
      category: 'Audit et diagnostic RSE',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      duration: '2-4 semaines',
      formateur: 'Olivier GUYOT',
      formationType: 'service',
      prices: {
        individuel: { price: 'Sur devis', label: 'Personnalisé' },
        collectif: { price: 'Sur devis', label: 'Personnalisé' }
      },
      dates: {
        collectif: [],
        individuel: []
      },
      cpfEligible: false,
      features: [
        'Diagnostic complet',
        'Plan d\'action personnalisé',
        'Benchmarking sectoriel',
        'Accompagnement priorisation'
      ],
      certifications: [
        'Certification Qualiopi'
      ],
      objectives: [
        'Évaluer la maturité RSE de votre entreprise selon les standards internationaux',
        'Identifier les enjeux prioritaires environnementaux, sociaux et de gouvernance',
        'Définir un plan d\'action structuré et priorisé',
        'Mesurer l\'impact de vos actions actuelles'
      ],
      program: [
        {
          title: 'Phase 1 : Collecte et analyse des données',
          items: [
            'Analyse documentaire (politiques, procédures, rapports)',
            'Entretiens avec les parties prenantes internes',
            'Étude des pratiques sectorielles et benchmarking',
            'Cartographie des enjeux spécifiques à votre secteur'
          ]
        },
        {
          title: 'Phase 2 : Diagnostic approfondi',
          items: [
            'Évaluation selon les piliers RSE (Environnement, Social, Gouvernance)',
            'Analyse des risques et opportunités',
            'Identification des points forts et axes d\'amélioration',
            'Scoring selon les référentiels internationaux (ISO 26000, GRI)'
          ]
        },
        {
          title: 'Phase 3 : Recommandations stratégiques',
          items: [
            'Priorisation des actions selon l\'impact et la faisabilité',
            'Définition d\'un plan d\'action structuré',
            'Estimation des coûts et bénéfices',
            'Calendrier de mise en œuvre recommandé'
          ]
        },
        {
          title: 'Phase 4 : Restitution et accompagnement',
          items: [
            'Présentation des résultats et recommandations',
            'Formation des équipes aux enjeux identifiés',
            'Mise en place d\'indicateurs de suivi',
            'Accompagnement initial de la mise en œuvre'
          ]
        }
      ],
      publicVise: [
        'Dirigeants d\'entreprises de toutes tailles souhaitant évaluer leur maturité RSE',
        'Responsables RSE, QHSE, ou développement durable',
        'Organisations en démarche de certification ou labellisation',
        'Entreprises soumises à des obligations de reporting extra-financier'
      ],
      prerequis: [
        'Aucun prérequis technique',
        'Engagement de la direction dans la démarche',
        'Mobilisation des équipes pour les entretiens'
      ],
      teachingMethods: [
        'Audit documentaire approfondi',
        'Entretiens individuels et collectifs',
        'Analyse comparative sectorielle',
        'Ateliers de co-construction'
      ],
      evaluationMethods: [
        'Rapport d\'audit détaillé',
        'Plan d\'action priorisé',
        'Indicateurs de suivi personnalisés',
        'Présentation orale des résultats'
      ],
      accessibility: [
        'Service accessible en présentiel et à distance',
        'Adaptation possible selon les contraintes de l\'entreprise'
      ],
      certificationDetails: {
        name: 'Audit RSE complet',
        code: 'SERIOSA-AUDIT-001',
        organization: 'Seriosa 2.0',
        organizationUrl: 'https://www.seriosa.fr',
        description: 'Service d\'audit RSE complet conforme aux standards internationaux et aux exigences réglementaires françaises et européennes.',
        dureeEnregistrement: '3',
        dateEnregistrement: '01-01-2024',
        examDetails: {
          format: [
            'Livrable : Rapport d\'audit complet avec plan d\'action priorisé et indicateurs de suivi personnalisés'
          ],
          successRate: '100%'
        }
      },
      reasons: [
        {
          title: 'Vision claire de votre maturité RSE',
          description: 'Obtenez une évaluation objective de votre positionnement RSE',
          icon: 'Search'
        },
        {
          title: 'Plan d\'action priorisé',
          description: 'Définissez une feuille de route claire et réalisable',
          icon: 'Target'
        },
        {
          title: 'Conformité réglementaire',
          description: 'Anticipez les obligations légales et réglementaires',
          icon: 'Shield'
        },
        {
          title: 'Performance durable',
          description: 'Optimisez votre performance économique et votre impact positif',
          icon: 'TrendingUp'
        }
      ],
      icon: 'Search'
    },
    {
      id: 'strategie-rse',
      title: 'Définition de stratégie RSE et gouvernance',
      shortDescription: 'Définissez une stratégie RSE alignée avec vos objectifs business et mettez en place une gouvernance efficace pour piloter votre transformation durable.',
      fullDescription: 'Accompagnement dans la définition d\'une stratégie RSE structurée et la mise en place d\'une gouvernance adaptée pour piloter efficacement votre transformation durable.',
      slug: 'service-strategie-rse',
      category: 'Stratégie et gouvernance',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      duration: '3-6 mois',
      formateur: 'Olivier GUYOT',
      formationType: 'service',
      prices: {
        individuel: { price: 'Sur devis', label: 'Personnalisé' },
        collectif: { price: 'Sur devis', label: 'Personnalisé' }
      },
      dates: {
        collectif: [],
        individuel: []
      },
      cpfEligible: false,
      features: [
        'Stratégie RSE personnalisée',
        'Gouvernance adaptée',
        'Pilotage et suivi',
        'Formation des équipes dirigeantes'
      ],
      certifications: [
        'Certification Qualiopi'
      ],
      objectives: [
        'Définir une vision RSE alignée avec la stratégie business',
        'Mettre en place une gouvernance RSE efficace',
        'Intégrer la RSE dans la culture d\'entreprise',
        'Développer un système de pilotage et de reporting'
      ],
      program: [
        {
          title: 'Phase 1 : Diagnostic et vision stratégique',
          items: [
            'Analyse de la maturité RSE actuelle',
            'Identification des enjeux prioritaires',
            'Définition de la vision et des objectifs RSE',
            'Alignement avec la stratégie business'
          ]
        },
        {
          title: 'Phase 2 : Architecture de gouvernance',
          items: [
            'Conception de l\'organigramme RSE',
            'Définition des rôles et responsabilités',
            'Mise en place des instances de pilotage',
            'Intégration dans les processus décisionnels'
          ]
        },
        {
          title: 'Phase 3 : Plan d\'action et feuille de route',
          items: [
            'Priorisation des actions selon l\'impact',
            'Définition des jalons et échéances',
            'Allocation des ressources nécessaires',
            'Communication interne et externe'
          ]
        },
        {
          title: 'Phase 4 : Mise en œuvre et suivi',
          items: [
            'Accompagnement du déploiement',
            'Formation des équipes dirigeantes',
            'Mise en place d\'indicateurs de suivi',
            'Reporting et communication des résultats'
          ]
        }
      ],
      publicVise: [
        'Dirigeants d\'entreprises souhaitant structurer leur démarche RSE',
        'Comités de direction et conseils d\'administration',
        'Responsables RSE, développement durable ou QHSE',
        'Organisations en phase de transformation durable'
      ],
      prerequis: [
        'Engagement fort de la direction',
        'Volonté de transformation organisationnelle',
        'Mobilisation des équipes clés'
      ],
      teachingMethods: [
        'Ateliers de co-construction stratégique',
        'Accompagnement personnalisé',
        'Formation des équipes dirigeantes',
        'Mise en place d\'outils de pilotage'
      ],
      evaluationMethods: [
        'Stratégie RSE formalisée',
        'Architecture de gouvernance définie',
        'Plan d\'action détaillé',
        'Système de pilotage opérationnel'
      ],
      accessibility: [
        'Service accessible en présentiel et à distance',
        'Adaptation selon les contraintes organisationnelles'
      ],
      certificationDetails: {
        name: 'Stratégie RSE et gouvernance',
        code: 'SERIOSA-STRAT-001',
        organization: 'Seriosa 2.0',
        organizationUrl: 'https://www.seriosa.fr',
        description: 'Service d\'accompagnement stratégique RSE conforme aux meilleures pratiques internationales et aux exigences réglementaires.',
        dureeEnregistrement: '3',
        dateEnregistrement: '01-01-2024',
        examDetails: {
          format: [
            'Livrable : Stratégie RSE formalisée, architecture de gouvernance et plan d\'action détaillé'
          ],
          successRate: '100%'
        }
      },
      reasons: [
        {
          title: 'Vision stratégique claire',
          description: 'Définissez une direction RSE alignée avec vos objectifs business',
          icon: 'Target'
        },
        {
          title: 'Gouvernance efficace',
          description: 'Mettez en place une organisation adaptée au pilotage RSE',
          icon: 'Users'
        },
        {
          title: 'Transformation durable',
          description: 'Intégrez la RSE dans votre culture d\'entreprise',
          icon: 'Leaf'
        },
        {
          title: 'Performance mesurable',
          description: 'Développez un système de pilotage et de reporting efficace',
          icon: 'TrendingUp'
        }
      ],
      icon: 'Target'
    },
    {
      id: 'transition-ecologique',
      title: 'Accompagnement transition écologique et environnementale',
      shortDescription: 'Accompagnez votre entreprise dans sa transition écologique avec des solutions concrètes pour réduire votre empreinte environnementale et optimiser vos performances durables.',
      fullDescription: 'Service d\'accompagnement personnalisé pour la transition écologique de votre entreprise, incluant la réduction de l\'empreinte carbone, l\'optimisation énergétique et l\'intégration des enjeux environnementaux.',
      slug: 'service-transition-ecologique',
      category: 'Environnement et transition écologique',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      duration: '6-12 mois',
      formateur: 'Olivier GUYOT',
      formationType: 'service',
      prices: {
        individuel: { price: 'Sur devis', label: 'Personnalisé' },
        collectif: { price: 'Sur devis', label: 'Personnalisé' }
      },
      dates: {
        collectif: [],
        individuel: []
      },
      cpfEligible: false,
      features: [
        'Bilan carbone complet',
        'Plan de réduction d\'émissions',
        'Optimisation énergétique',
        'Formation des équipes'
      ],
      certifications: [
        'Certification Qualiopi'
      ],
      objectives: [
        'Réaliser un bilan carbone complet de votre entreprise',
        'Définir un plan de réduction des émissions de GES',
        'Optimiser la consommation énergétique et les ressources',
        'Intégrer les enjeux environnementaux dans les processus métier'
      ],
      program: [
        {
          title: 'Phase 1 : Diagnostic environnemental',
          items: [
            'Bilan carbone complet (scope 1, 2, 3)',
            'Analyse de la consommation énergétique',
            'Évaluation de la gestion des déchets',
            'Audit des pratiques environnementales'
          ]
        },
        {
          title: 'Phase 2 : Plan d\'action environnemental',
          items: [
            'Définition des objectifs de réduction',
            'Priorisation des actions selon l\'impact',
            'Estimation des investissements et ROI',
            'Calendrier de mise en œuvre'
          ]
        },
        {
          title: 'Phase 3 : Mise en œuvre et accompagnement',
          items: [
            'Accompagnement des équipes internes',
            'Formation aux bonnes pratiques',
            'Mise en place d\'indicateurs de suivi',
            'Optimisation continue des processus'
          ]
        },
        {
          title: 'Phase 4 : Mesure et communication',
          items: [
            'Suivi des performances environnementales',
            'Reporting et communication des résultats',
            'Amélioration continue',
            'Valorisation des actions menées'
          ]
        }
      ],
      publicVise: [
        'Entreprises soucieuses de leur impact environnemental',
        'Organisations soumises à des obligations réglementaires',
        'Dirigeants engagés dans la transition écologique',
        'Responsables environnement, QHSE ou RSE'
      ],
      prerequis: [
        'Engagement de la direction dans la démarche',
        'Mobilisation des équipes concernées',
        'Accès aux données de consommation et d\'activité'
      ],
      teachingMethods: [
        'Audit environnemental approfondi',
        'Ateliers de co-construction',
        'Formation des équipes',
        'Accompagnement personnalisé'
      ],
      evaluationMethods: [
        'Bilan carbone détaillé',
        'Plan d\'action environnemental',
        'Indicateurs de suivi personnalisés',
        'Rapport de performance environnementale'
      ],
      accessibility: [
        'Service accessible en présentiel et à distance',
        'Adaptation selon les contraintes opérationnelles'
      ],
      certificationDetails: {
        name: 'Accompagnement transition écologique',
        code: 'SERIOSA-ENV-001',
        organization: 'Seriosa 2.0',
        organizationUrl: 'https://www.seriosa.fr',
        description: 'Service d\'accompagnement transition écologique conforme aux standards internationaux et aux exigences réglementaires françaises et européennes.',
        dureeEnregistrement: '3',
        dateEnregistrement: '01-01-2024',
        examDetails: {
          format: [
            'Livrable : Bilan carbone, plan d\'action environnemental et système de suivi des performances'
          ],
          successRate: '100%'
        }
      },
      reasons: [
        {
          title: 'Réduction d\'empreinte carbone',
          description: 'Diminuez significativement votre impact environnemental',
          icon: 'Leaf'
        },
        {
          title: 'Optimisation énergétique',
          description: 'Réduisez vos coûts énergétiques et améliorez votre efficacité',
          icon: 'Zap'
        },
        {
          title: 'Conformité réglementaire',
          description: 'Anticipez et respectez les obligations environnementales',
          icon: 'Shield'
        },
        {
          title: 'Performance durable',
          description: 'Intégrez la performance environnementale dans votre stratégie',
          icon: 'TrendingUp'
        }
      ],
      icon: 'Leaf'
    },
    {
      id: 'developpement-social',
      title: 'Développement social et sociétal',
      shortDescription: 'Renforcez l\'impact social et sociétal de votre entreprise en développant des pratiques responsables et en créant de la valeur partagée avec vos parties prenantes.',
      fullDescription: 'Accompagnement dans le développement de pratiques sociales et sociétales responsables, incluant la diversité, l\'inclusion, les conditions de travail et l\'engagement sociétal.',
      slug: 'service-developpement-social',
      category: 'Social et sociétal',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      duration: '4-8 mois',
      formateur: 'Olivier GUYOT',
      formationType: 'service',
      prices: {
        individuel: { price: 'Sur devis', label: 'Personnalisé' },
        collectif: { price: 'Sur devis', label: 'Personnalisé' }
      },
      dates: {
        collectif: [],
        individuel: []
      },
      cpfEligible: false,
      features: [
        'Politique diversité et inclusion',
        'Amélioration conditions de travail',
        'Engagement sociétal',
        'Formation des managers'
      ],
      certifications: [
        'Certification Qualiopi'
      ],
      objectives: [
        'Développer une politique de diversité et d\'inclusion',
        'Améliorer les conditions de travail et le bien-être des salariés',
        'Renforcer l\'engagement sociétal de l\'entreprise',
        'Créer de la valeur partagée avec les parties prenantes'
      ],
      program: [
        {
          title: 'Phase 1 : Diagnostic social et sociétal',
          items: [
            'Audit des pratiques RH et sociales',
            'Analyse de la diversité et de l\'inclusion',
            'Évaluation des conditions de travail',
            'Cartographie des parties prenantes'
          ]
        },
        {
          title: 'Phase 2 : Définition de la stratégie sociale',
          items: [
            'Élaboration d\'une politique diversité et inclusion',
            'Amélioration des conditions de travail',
            'Développement de l\'engagement sociétal',
            'Création de programmes d\'impact social'
          ]
        },
        {
          title: 'Phase 3 : Mise en œuvre et formation',
          items: [
            'Formation des managers et équipes RH',
            'Déploiement des nouvelles pratiques',
            'Communication interne et externe',
            'Accompagnement du changement'
          ]
        },
        {
          title: 'Phase 4 : Suivi et amélioration continue',
          items: [
            'Mise en place d\'indicateurs sociaux',
            'Suivi des performances et satisfaction',
            'Amélioration continue des pratiques',
            'Reporting et communication des résultats'
          ]
        }
      ],
      publicVise: [
        'Entreprises soucieuses de leur impact social',
        'Organisations en démarche d\'amélioration des conditions de travail',
        'Dirigeants engagés dans la diversité et l\'inclusion',
        'Responsables RH, RSE ou développement durable'
      ],
      prerequis: [
        'Engagement de la direction dans la démarche',
        'Mobilisation des équipes RH et managers',
        'Ouverture au changement organisationnel'
      ],
      teachingMethods: [
        'Audit social approfondi',
        'Ateliers de co-construction',
        'Formation des équipes',
        'Accompagnement personnalisé'
      ],
      evaluationMethods: [
        'Diagnostic social détaillé',
        'Plan d\'action social et sociétal',
        'Indicateurs de suivi personnalisés',
        'Rapport de performance sociale'
      ],
      accessibility: [
        'Service accessible en présentiel et à distance',
        'Adaptation selon les contraintes organisationnelles'
      ],
      certificationDetails: {
        name: 'Développement social et sociétal',
        code: 'SERIOSA-SOC-001',
        organization: 'Seriosa 2.0',
        organizationUrl: 'https://www.seriosa.fr',
        description: 'Service d\'accompagnement développement social et sociétal conforme aux standards internationaux et aux exigences réglementaires.',
        dureeEnregistrement: '3',
        dateEnregistrement: '01-01-2024',
        examDetails: {
          format: [
            'Livrable : Plan d\'action social et sociétal avec indicateurs de suivi et formation des équipes'
          ],
          successRate: '100%'
        }
      },
      reasons: [
        {
          title: 'Diversité et inclusion',
          description: 'Développez une culture d\'entreprise inclusive et diverse',
          icon: 'Users'
        },
        {
          title: 'Bien-être au travail',
          description: 'Améliorez les conditions de travail et la satisfaction des salariés',
          icon: 'Heart'
        },
        {
          title: 'Engagement sociétal',
          description: 'Renforcez votre impact positif sur la société',
          icon: 'Globe'
        },
        {
          title: 'Performance sociale',
          description: 'Créez de la valeur partagée avec vos parties prenantes',
          icon: 'TrendingUp'
        }
      ],
      icon: 'Users'
    },
    {
      id: 'formation-rse',
      title: 'Formation et sensibilisation aux enjeux RSE',
      shortDescription: 'Formez vos équipes aux enjeux RSE et développez une culture d\'entreprise responsable pour accélérer votre transformation durable.',
      fullDescription: 'Programmes de formation personnalisés pour sensibiliser et former vos équipes aux enjeux RSE, favorisant l\'adoption de pratiques responsables et l\'engagement collectif.',
      slug: 'service-formation-rse',
      category: 'Formation et sensibilisation',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      duration: '1-3 mois',
      formateur: 'Olivier GUYOT',
      formationType: 'service',
      prices: {
        individuel: { price: 'Sur devis', label: 'Personnalisé' },
        collectif: { price: 'Sur devis', label: 'Personnalisé' }
      },
      dates: {
        collectif: [],
        individuel: []
      },
      cpfEligible: false,
      features: [
        'Formation sur-mesure',
        'Sensibilisation aux enjeux',
        'Ateliers pratiques',
        'Suivi et évaluation'
      ],
      certifications: [
        'Certification Qualiopi'
      ],
      objectives: [
        'Sensibiliser les équipes aux enjeux RSE et développement durable',
        'Former aux bonnes pratiques environnementales, sociales et éthiques',
        'Développer une culture d\'entreprise responsable',
        'Favoriser l\'engagement et l\'adoption de comportements durables'
      ],
      program: [
        {
          title: 'Module 1 : Sensibilisation aux enjeux RSE',
          items: [
            'Comprendre les enjeux environnementaux, sociaux et de gouvernance',
            'Impact des entreprises sur la société et l\'environnement',
            'Réglementation et obligations légales',
            'Opportunités business de la RSE'
          ]
        },
        {
          title: 'Module 2 : Bonnes pratiques environnementales',
          items: [
            'Réduction de l\'empreinte carbone',
            'Gestion des déchets et économie circulaire',
            'Optimisation énergétique',
            'Éco-gestes au quotidien'
          ]
        },
        {
          title: 'Module 3 : Enjeux sociaux et éthiques',
          items: [
            'Diversité et inclusion',
            'Conditions de travail et bien-être',
            'Éthique des affaires',
            'Relations avec les parties prenantes'
          ]
        },
        {
          title: 'Module 4 : Mise en pratique et engagement',
          items: [
            'Ateliers de co-construction',
            'Définition d\'actions concrètes',
            'Plan d\'engagement personnel',
            'Suivi et amélioration continue'
          ]
        }
      ],
      publicVise: [
        'Toutes les équipes d\'entreprise en démarche RSE',
        'Managers et dirigeants',
        'Responsables RH, RSE ou développement durable',
        'Organisations souhaitant sensibiliser leurs collaborateurs'
      ],
      prerequis: [
        'Aucun prérequis technique',
        'Ouverture aux enjeux de développement durable',
        'Engagement de la direction dans la démarche'
      ],
      teachingMethods: [
        'Formation interactive et participative',
        'Ateliers pratiques et mises en situation',
        'Cas d\'études et exemples concrets',
        'Accompagnement personnalisé'
      ],
      evaluationMethods: [
        'Évaluation des acquis',
        'Plan d\'action personnel',
        'Suivi de l\'engagement',
        'Certificat de participation'
      ],
      accessibility: [
        'Formation accessible en présentiel et à distance',
        'Adaptation selon les contraintes organisationnelles'
      ],
      certificationDetails: {
        name: 'Formation et sensibilisation RSE',
        code: 'SERIOSA-FORM-001',
        organization: 'Seriosa 2.0',
        organizationUrl: 'https://www.seriosa.fr',
        description: 'Programme de formation RSE personnalisé conforme aux standards internationaux et aux exigences réglementaires.',
        dureeEnregistrement: '3',
        dateEnregistrement: '01-01-2024',
        examDetails: {
          format: [
            'Livrable : Programme de formation personnalisé avec supports pédagogiques et suivi des acquis'
          ],
          successRate: '100%'
        }
      },
      reasons: [
        {
          title: 'Sensibilisation efficace',
          description: 'Développez la conscience RSE de vos équipes',
          icon: 'BookOpen'
        },
        {
          title: 'Culture responsable',
          description: 'Intégrez les valeurs RSE dans votre culture d\'entreprise',
          icon: 'Users'
        },
        {
          title: 'Engagement collectif',
          description: 'Favorisez l\'adoption de comportements durables',
          icon: 'Heart'
        },
        {
          title: 'Performance durable',
          description: 'Accélérez votre transformation RSE grâce à l\'engagement des équipes',
          icon: 'TrendingUp'
        }
      ],
      icon: 'BookOpen'
    },
  ] as Formation[]
};

export default formationsConfig;