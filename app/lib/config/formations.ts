import { Formation, Category } from './types';

const formationsConfig = {
  categories: [
    {
      id: 'Formation et sensibilisation',
      name: 'Formation et sensibilisation',
      description: 'Formation des équipes aux enjeux RSE',
      icon: 'BookOpen'
    }
  ] as Category[],
  
  formations: [
    {
      id: 'formation-comprendre-rse',
      title: 'Pourquoi et comment la RSE ?',
      shortDescription: 'Comprenez les enjeux et les principes fondamentaux de la Responsabilité Sociétale des Entreprises (RSE) et apprenez à identifier et prioriser les actions RSE adaptées à votre PME.',
      fullDescription: 'La Responsabilité Sociétale des Entreprises (RSE) n\'est plus un simple concept mais une nécessité stratégique pour les entreprises modernes. Cette formation vous permet de comprendre les enjeux RSE, de réaliser un diagnostic de votre entreprise et d\'élaborer des stratégies d\'action concrètes et efficaces. Vous apprendrez à identifier les leviers d\'amélioration prioritaires et à mobiliser vos parties prenantes pour une transformation durable réussie.',
      slug: 'formation-pourquoi-comment-rse',
      category: 'Formation et sensibilisation',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      duration: '4h',
      formateur: 'Olivier GUYOT',
      formationType: 'non-certifiante',
      prices: {
        individuel: { price: 'Dès 650€ HT', label: '' },
        collectif: { price: 'Dès 2700€ HT', label: '' }
      },
      dates: {
        collectif: [
          "Sur demande"
        ],
        individuel: [
          "Sur demande"
        ]
      },
      cpfEligible: false,
      features: [
        'Formation sur-mesure',
        'Sensibilisation aux enjeux',
        'Ateliers pratiques',
        'Suivi et évaluation'
      ],
      certifications: [],
      objectives: [
        'Comprendre les enjeux et les principes fondamentaux de la Responsabilité Sociétale des Entreprises (RSE)',
        'Savoir identifier et prioriser les actions RSE adaptées à une PME',
        'Connaître la mise en place d\'actions RSE concrètes et efficaces au sein de son entreprise'
      ],
      program: [
        {
          title: 'A/ Comprendre la RSE',
          items: [
            'Définition et Importance de la RSE',
            'Les Différents Axes de la RSE',
            'Cas d\'Entreprises Exemplaires'
          ]
        },
        {
          title: 'B/ Diagnostic RSE',
          items: [
            'Étapes du Diagnostic RSE',
            'Identification des Leviers d\'Amélioration',
            'Analyse des Risques et des Bénéfices'
          ]
        },
        {
          title: 'C/ Stratégies et Plans d\'Action RSE',
          items: [
            'Définition d\'Objectifs RSE SMART',
            'Élaboration d\'un Plan d\'Action RSE',
            'Mobilisation des Parties Prenantes'
          ]
        }
      ],
      publicVise: [
        'Dirigeants de PME souhaitant comprendre et implémenter la RSE',
        'Responsables RSE, QHSE ou développement durable',
        'Managers et cadres impliqués dans la transformation durable',
        'Consultants et formateurs en RSE'
      ],
      prerequis: [
        'Aucun prérequis technique',
        'Intérêt pour les enjeux de développement durable',
        'Expérience professionnelle en entreprise recommandée'
      ],
      teachingMethods: [
        'Formation interactive et participative',
        'Ateliers pratiques et mises en situation',
        'Cas d\'études d\'entreprises exemplaires',
        'Travaux de groupe et co-construction'
      ],
      evaluationMethods: [
        'Quiz de validation des acquis',
        'Élaboration d\'un diagnostic RSE personnel',
        'Présentation d\'un plan d\'action RSE',
        'Attestation de participation délivrée'
      ],
      accessibility: [
        "Formation accessible sous 15 jours après inscription.",
        "Adaptation des conditions d'examen aux personnes en situation de handicap",
        "Le référent handicap prendra en compte dès l'inscription du candidat sa situation de handicap, si celle-ci est mentionnée. Il sera alors proposé au candidat un entretien afin d'envisager avec lui les aménagements qui pourront être apportés."
      ],
      reasons: [
        {
          title: 'Compréhension des enjeux',
          description: 'Maîtrisez les fondamentaux de la RSE et ses implications business',
          icon: 'BookOpen'
        },
        {
          title: 'Diagnostic personnalisé',
          description: 'Apprenez à évaluer la maturité RSE de votre entreprise',
          icon: 'Search'
        },
        {
          title: 'Plan d\'action concret',
          description: 'Définissez des actions RSE adaptées à votre contexte',
          icon: 'Target'
        },
        {
          title: 'Mobilisation des équipes',
          description: 'Développez les compétences pour engager vos parties prenantes',
          icon: 'Users'
        }
      ],
      icon: 'BookOpen'
    },
    {
      id: 'formation-diagnostic-rse',
      title: 'Le diagnostic RSE',
      shortDescription: 'Maîtrisez les outils et méthodes pour réaliser un diagnostic RSE complet, identifier les enjeux prioritaires et cartographier vos parties prenantes pour une stratégie de développement durable efficace.',
      fullDescription: 'Le diagnostic RSE est une étape fondamentale pour toute entreprise souhaitant s\'engager dans une démarche de responsabilité sociétale. Cette formation vous permet de maîtriser les outils d\'analyse, de cartographier les parties prenantes, de réaliser un audit RSE complet et d\'identifier les actions prioritaires. Vous apprendrez à synthétiser les résultats et à élaborer une stratégie de développement durable adaptée à votre contexte.',
      slug: 'formation-diagnostic-rse',
      category: 'Formation et sensibilisation',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      duration: '4h',
      formateur: 'Olivier GUYOT',
      formationType: 'non-certifiante',
      prices: {
        individuel: { price: 'Dès 650€ HT', label: '' },
        collectif: { price: 'Dès 2700€ HT', label: '' }
      },
      dates: {
        collectif: [
          "Sur demande"
        ],
        individuel: [
          "Sur demande"
        ]
      },
      cpfEligible: false,
      features: [
        'Formation sur-mesure',
        'Outils d\'analyse RSE',
        'Ateliers pratiques',
        'Suivi et évaluation'
      ],
      certifications: [],
      objectives: [
        'Comprendre l\'utilité du diagnostic dans la stratégie de développement durable',
        'Savoir utiliser des outils d\'analyse, cartographier les parties prenantes, réaliser un audit RSE, et identifier les actions prioritaires',
        'Synthétiser les résultats du diagnostic'
      ],
      program: [
        {
          title: 'A/ Rappel sur la RSE',
          items: [
            'Retour sur la présentation générale de la RSE',
            'Objectifs du Diagnostic RSE'
          ]
        },
        {
          title: 'B/ Les grands principes du Diagnostic RSE',
          items: [
            'Les 7 questions centrales de la RSE selon l\'ISO 26000',
            'Outils et méthodes de diagnostic RSE'
          ]
        },
        {
          title: 'C/ Étapes clés du Diagnostic RSE',
          items: [
            'Identification des parties prenantes',
            'Analyse des enjeux prioritaires pour la PME',
            'Enjeux environnementaux et sociaux spécifiques à la région',
            'Audit interne et externe'
          ]
        }
      ],
      publicVise: [
        'Dirigeants de PME souhaitant réaliser un diagnostic RSE',
        'Responsables RSE, QHSE ou développement durable',
        'Managers et cadres impliqués dans la transformation durable',
        'Consultants et formateurs en RSE'
      ],
      prerequis: [
        'Aucun prérequis technique',
        'Intérêt pour les enjeux de développement durable',
        'Expérience professionnelle en entreprise recommandée'
      ],
      teachingMethods: [
        'Formation interactive et participative',
        'Ateliers pratiques et mises en situation',
        'Cas d\'études d\'entreprises exemplaires',
        'Travaux de groupe et co-construction'
      ],
      evaluationMethods: [
        'Quiz de validation des acquis',
        'Élaboration d\'un diagnostic RSE personnel',
        'Présentation d\'un plan d\'action RSE',
        'Attestation de participation délivrée'
      ],
      accessibility: [
        "Formation accessible sous 15 jours après inscription.",
        "Adaptation des conditions d'examen aux personnes en situation de handicap",
        "Le référent handicap prendra en compte dès l'inscription du candidat sa situation de handicap, si celle-ci est mentionnée. Il sera alors proposé au candidat un entretien afin d'envisager avec lui les aménagements qui pourront être apportés."
      ],
      reasons: [
        {
          title: 'Maîtrise des outils',
          description: 'Apprenez à utiliser les outils d\'analyse et de diagnostic RSE',
          icon: 'Search'
        },
        {
          title: 'Cartographie des parties prenantes',
          description: 'Identifiez et cartographiez vos parties prenantes clés',
          icon: 'Users'
        },
        {
          title: 'Audit complet',
          description: 'Réalisez un audit RSE interne et externe efficace',
          icon: 'FileCheck'
        },
        {
          title: 'Actions prioritaires',
          description: 'Identifiez et priorisez les actions RSE adaptées à votre contexte',
          icon: 'Target'
        }
      ],
      icon: 'Search'
    },
    {
      id: 'formation-strategie-rse',
      title: 'La stratégie RSE',
      shortDescription: 'Acquérez les fondamentaux pour élaborer et mettre en œuvre une stratégie RSE personnalisée, intégrant les enjeux économiques, sociaux et environnementaux spécifiques à votre PME.',
      fullDescription: 'L\'élaboration d\'une stratégie RSE est essentielle pour positionner votre entreprise comme un acteur responsable et performant. Cette formation vous guidera à travers les étapes clés de la conception d\'une stratégie RSE, de l\'intégration dans votre modèle d\'affaires à la mesure de sa performance. Vous apprendrez à définir des objectifs clairs, à élaborer une feuille de route et à communiquer efficacement vos engagements.',
      slug: 'formation-strategie-rse',
      category: 'Formation et sensibilisation',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      duration: '4h',
      formateur: 'Olivier GUYOT',
      formationType: 'non-certifiante',
      prices: {
        individuel: { price: 'Dès 650€ HT', label: '' },
        collectif: { price: 'Dès 2700€ HT', label: '' }
      },
      dates: {
        collectif: [
          "Sur demande"
        ],
        individuel: [
          "Sur demande"
        ]
      },
      cpfEligible: false,
      features: [
        'Élaboration de stratégie',
        'Définition d\'objectifs SMART',
        'Mesure de performance RSE',
        'Communication des engagements'
      ],
      certifications: [],
      objectives: [
        'Acquisition des fondamentaux de la stratégie RSE',
        'Capacité à élaborer une stratégie RSE personnalisée',
        'Maîtrise des outils de suivi et de mesure de la performance RSE'
      ],
      program: [
        {
          title: 'A/ Introduction à la Stratégie RSE',
          items: [
            'Qu\'est-ce qu\'une stratégie RSE et pourquoi est-elle importante pour les PME ?',
            'Intégration de la RSE dans le modèle d\'affaires',
            'Les enjeux économiques, sociaux et environnementaux locaux (contextualisation pour les PME varoises)',
            'Objectifs à atteindre avec une stratégie RSE'
          ]
        },
        {
          title: 'B/ Élaboration d\'une Stratégie RSE',
          items: [
            'Étapes de création d\'une stratégie RSE pour les PME',
            'Méthodes d\'intégration de la RSE dans la stratégie globale'
          ]
        },
        {
          title: 'C/ Définir sa Stratégie RSE',
          items: [
            'Diagnostique stratégique',
            'Élaboration d\'une feuille de route stratégique'
          ]
        },
        {
          title: 'D/ Mesure et Suivi des Performances RSE',
          items: [
            'Outils de mesure et indicateurs clés de performance (KPI) RSE',
            'Communication interne et externe des résultats'
          ]
        }
      ],
      publicVise: [
        'Dirigeants de PME souhaitant définir leur stratégie RSE',
        'Responsables RSE, QHSE ou développement durable',
        'Managers et cadres impliqués dans la stratégie durable',
        'Consultants en RSE'
      ],
      prerequis: [
        'Aucun prérequis technique',
        'Intérêt pour les enjeux de développement durable',
        'Expérience professionnelle en entreprise recommandée'
      ],
      teachingMethods: [
        'Formation interactive et participative',
        'Ateliers pratiques et mises en situation',
        'Cas d\'études et retours d\'expérience',
        'Travaux de groupe et co-construction'
      ],
      evaluationMethods: [
        'Quiz de validation des acquis',
        'Élaboration d\'une ébauche de stratégie RSE',
        'Présentation d\'une feuille de route stratégique',
        'Attestation de participation délivrée'
      ],
      accessibility: [
        "Formation accessible sous 15 jours après inscription.",
        "Adaptation des conditions d'examen aux personnes en situation de handicap",
        "Le référent handicap prendra en compte dès l'inscription du candidat sa situation de handicap, si celle-ci est mentionnée. Il sera alors proposé au candidat un entretien afin d'envisager avec lui les aménagements qui pourront être apportés."
      ],
      reasons: [
        {
          title: 'Vision stratégique',
          description: 'Définissez une stratégie RSE alignée avec les objectifs de votre PME',
          icon: 'Target'
        },
        {
          title: 'Performance durable',
          description: 'Intégrez la RSE pour améliorer la performance globale de votre entreprise',
          icon: 'Star'
        },
        {
          title: 'Engagement et communication',
          description: 'Apprenez à mobiliser vos équipes et à communiquer vos engagements RSE',
          icon: 'MessageSquare'
        },
        {
          title: 'Mesure d\'impact',
          description: 'Maîtrisez les outils pour suivre et évaluer l\'impact de votre stratégie',
          icon: 'FileCheck'
        }
      ],
      icon: 'Brain'
    }
  ]
};

export default formationsConfig;
