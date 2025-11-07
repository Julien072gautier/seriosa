import { Formation, Category } from './types';

const formationsConfig = {
  categories: [
    {
      id: 'Démarche RSE',
      name: 'Démarche RSE',
      description: 'Formation des équipes aux enjeux RSE',
      icon: 'BookOpen'
    }
  ] as Category[],
  
  formations: [
    {
      id: 'formation-comprendre-rse',
      title: 'Pourquoi et comment la RSE ?',
      shortDescription: 'Comprenez les enjeux et les principes fondamentaux de la Responsabilité Sociétale des Entreprises (RSE).',
      fullDescription: 'La Responsabilité Sociétale des Entreprises (RSE) n\'est plus un simple concept mais une nécessité stratégique pour les entreprises modernes. Cette formation vous permet de comprendre les enjeux RSE, de réaliser un diagnostic de votre entreprise et d\'élaborer des stratégies d\'action concrètes et efficaces. Vous apprendrez à identifier les leviers d\'amélioration prioritaires et à mobiliser vos parties prenantes pour une transformation durable réussie.',
      slug: 'formation-pourquoi-comment-rse',
      category: 'Démarche RSE',
      image: '/pourquoi.png',
      duration: '4h',
      formateur: 'Olivier GUYOT',
      formationType: 'non-certifiante',
      prices: {
        individuel: { price: '650€ HT', label: '' },
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
      shortDescription: 'Réaliser un état des lieux RSE pour identifier vos forces, faiblesses et priorités d\'action.',
      fullDescription: 'Apprenez à réaliser un véritable état des lieux RSE de votre organisation afin d\'évaluer vos pratiques actuelles, repérer vos marges de progrès et définir des actions prioritaires. Grâce à des outils simples et concrets, cette formation vous guide pas à pas vers une démarche structurée et adaptée à votre réalité.',
      slug: 'formation-diagnostic-rse',
      category: 'Démarche RSE',
      image: '/diagnostique.png',
      duration: '4h',
      formateur: 'Olivier GUYOT',
      formationType: 'non-certifiante',
      prices: {
        individuel: { price: '650€ HT', label: '' },
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
        'Comprendre l\'utilité du diagnostic RSE dans une démarche de développement durable.',
        'Savoir réaliser un état des lieux structuré des pratiques sociales, environnementales et économiques.',
        'Maîtriser les outils d\'analyse et de cartographie des parties prenantes pour identifier les actions prioritaires.',
        'Être capable de synthétiser les résultats du diagnostic et de définir les premiers axes d\'amélioration.'
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
        'Dirigeant entreprise, chargé de communication, responsables ou collaborateurs impliqués dans le développement, la communication ou la gestion interne',
        'Responsables de collectivités, agents territoriaux ou représentants d\'organismes publics',
        'Dirigeant, responsable d\'association'
      ],
      prerequis: [
        'Aucun si aucune connaissance RSE - commencer par la formation pourquoi et comment la RSE'
      ],
      teachingMethods: [
        'Apports théoriques illustrés par des exemples concrets issus de PME, associations et collectivités.',
        'Études de cas réels pour comprendre les leviers et obstacles d\'une démarche RSE.',
        'Travaux de groupe et échanges d\'expériences favorisant la co-construction et l\'intelligence collective.',
        'Auto-diagnostic et plan d\'action personnalisé pour chaque participant.'
      ],
      evaluationMethods: [
        'Analyse des besoins : Questionnaire préalable',
        'Évaluation des acquis : Test d\'entrée, test de sortie',
        'Attestation de formation : Certificat de réalisation'
      ],
      accessibility: [
        "Formation accessible sous 15 jours après inscription.",
        "Adaptation des conditions d'examen aux personnes en situation de handicap",
        "Le référent handicap prendra en compte dès l'inscription du candidat sa situation de handicap, si celle-ci est mentionnée. Il sera alors proposé au candidat un entretien afin d'envisager avec lui les aménagements qui pourront être apportés."
      ],
      reasons: [
        {
          title: 'Faire le point',
          description: 'Réaliser un état des lieux clair et objectif de vos pratiques actuelles',
          icon: 'FileCheck'
        },
        {
          title: 'Comprendre vos enjeux',
          description: 'Identifier les priorités sociales, environnementales et économiques propres à votre structure.',
          icon: 'Target'
        },
        {
          title: 'Utiliser les bons outils',
          description: 'Découvrir des méthodes simples pour analyser, cartographier et prioriser vos actions.',
          icon: 'Search'
        },
        {
          title: 'Préparer la suite',
          description: 'Poser les bases d\'une stratégie RSE solide et cohérente avec vos objectifs.',
          icon: 'ArrowRight'
        }
      ],
      icon: 'Search'
    },
    {
      id: 'formation-strategie-rse',
      title: 'La stratégie RSE',
      shortDescription: 'Construire une stratégie RSE claire, alignée sur vos valeurs et vos objectifs.',
      fullDescription: 'Apprenez à transformer votre diagnostic RSE en une véritable stratégie durable. Cette formation vous guide pour définir vos priorités, fixer des objectifs mesurables et intégrer la RSE au cœur de votre modèle économique. Vous découvrirez comment piloter vos actions, suivre vos indicateurs et mobiliser vos équipes autour d\'une vision responsable et partagée.',
      slug: 'formation-strategie-rse',
      category: 'Démarche RSE',
      image: '/strategie.png',
      duration: '4h',
      formateur: 'Olivier GUYOT',
      formationType: 'non-certifiante',
      prices: {
        individuel: { price: '650€ HT', label: '' },
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
        'Comprendre les principes et les enjeux d\'une stratégie RSE intégrée.',
        'Savoir définir des objectifs RSE pertinents et alignés sur la vision de l\'entreprise.',
        'Élaborer une feuille de route RSE opérationnelle avec des indicateurs de suivi.',
        'Mobiliser les équipes et parties prenantes autour d\'une démarche cohérente et durable.'
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
        'Dirigeant entreprise, chargé de communication, responsables ou collaborateurs impliqués dans le développement, la communication ou la gestion interne',
        'Responsables de collectivités, agents territoriaux ou représentants d\'organismes publics',
        'Dirigeant, responsable d\'association'
      ],
      prerequis: [
        'Aucun si aucune connaissance RSE - commencer par la formation pourquoi et comment la RSE'
      ],
      teachingMethods: [
        'Apports théoriques illustrés par des exemples concrets issus de PME, associations et collectivités.',
        'Études de cas réels pour comprendre les leviers et obstacles d\'une démarche RSE.',
        'Travaux de groupe et échanges d\'expériences favorisant la co-construction et l\'intelligence collective.',
        'Auto-diagnostic et plan d\'action personnalisé pour chaque participant.'
      ],
      evaluationMethods: [
        'Analyse des besoins : Questionnaire préalable',
        'Évaluation des acquis : Test d\'entrée, test de sortie',
        'Attestation de formation : Certificat de réalisation'
      ],
      accessibility: [
        "Formation accessible sous 15 jours après inscription.",
        "Adaptation des conditions d'examen aux personnes en situation de handicap",
        "Le référent handicap prendra en compte dès l'inscription du candidat sa situation de handicap, si celle-ci est mentionnée. Il sera alors proposé au candidat un entretien afin d'envisager avec lui les aménagements qui pourront être apportés."
      ],
      reasons: [
        {
          title: 'Passer du constat à l\'action',
          description: 'Transformer votre diagnostic en une stratégie concrète et ambitieuse.',
          icon: 'ArrowRight'
        },
        {
          title: 'Aligner valeurs et performance',
          description: 'Faire de la RSE un levier de cohérence entre vos engagements et vos objectifs économiques.',
          icon: 'Target'
        },
        {
          title: 'Piloter efficacement',
          description: 'Mettre en place des indicateurs et outils de suivi pour mesurer vos progrès.',
          icon: 'BarChart'
        },
        {
          title: 'Fédérer vos équipes',
          description: 'Impliquer vos collaborateurs et partenaires autour d\'un projet commun et porteur de sens.',
          icon: 'Users'
        }
      ],
      icon: 'Brain'
    },
    {
      id: 'formation-evenement-eco-responsable',
      title: 'Organiser un événement éco-responsable et impactant',
      shortDescription: 'Apprendre à concevoir, organiser et valoriser un événement aligné avec les valeurs du développement durable.',
      fullDescription: 'De la conception à la mise en œuvre, apprenez à organiser des événements éco-responsables qui allient sens, convivialité et impact. Cette formation vous guide dans toutes les étapes : définition des objectifs, gestion des partenaires, logistique durable, communication responsable et évaluation post-événement. Idéal pour allier performance, engagement et plaisir collectif.',
      slug: 'formation-evenement-eco-responsable',
      category: 'Démarche RSE',
      image: '/evenement.png',
      duration: '4h',
      formateur: 'Olivier GUYOT',
      formationType: 'non-certifiante',
      prices: {
        individuel: { price: '650€ HT', label: '' },
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
        'Conception événement éco-responsable',
        'Gestion logistique durable',
        'Communication responsable',
        'Évaluation post-événement'
      ],
      certifications: [],
      objectives: [
        'Comprendre les principes et enjeux d\'un événement éco-responsable.',
        'Savoir concevoir et planifier un événement intégrant des critères environnementaux, sociaux et économiques durables.',
        'Identifier les leviers de communication et de valorisation d\'un événement responsable.',
        'Être capable d\'évaluer l\'impact global de l\'événement et de proposer des pistes d\'amélioration pour les éditions futures.'
      ],
      program: [
        {
          title: 'Événementiel 1 : Concevoir un événement impactant',
          items: [
            'Définir objectifs, budget et planification : préciser la finalité de l\'événement (visibilité, cohésion, collecte de fonds, notoriété), établir un budget réaliste et construire une feuille de route claire.',
            'Attribuer rôles et responsabilités : organiser l\'équipe autour de missions précises (logistique, communication, partenaires, animation) pour éviter les zones d\'ombre et les doublons.',
            'Intégrer sécurité, accessibilité et gestion des risques : anticiper les aspects réglementaires (assurances, autorisations), veiller à l\'accueil de tous les publics (handicap, familles) et prévoir des solutions en cas d\'imprévus.'
          ]
        },
        {
          title: 'Événementiel 2 : Promotion & animation le jour J',
          items: [
            'Plan de communication avant/après l\'événement : préparer une campagne de visibilité (réseaux sociaux, affichage, invitations), valoriser les partenaires et organiser un plan de remerciement et de suivi après l\'événement.',
            'Organisation opérationnelle du jour J : gérer l\'accueil, la signalétique, les bénévoles et les prestataires pour fluidifier l\'expérience des participants.',
            'Mesurer l\'impact et assurer le suivi post-événement : évaluer la réussite (participation, satisfaction, retombées presse et réseaux sociaux), tirer des enseignements et capitaliser pour les éditions futures.'
          ]
        }
      ],
      publicVise: [
        'Dirigeant entreprise, chargé de communication, responsables ou collaborateurs impliqués dans le développement, la communication ou la gestion interne',
        'Responsables de collectivités, agents territoriaux ou représentants d\'organismes publics',
        'Dirigeant, responsable d\'association'
      ],
      prerequis: [
        'Aucun'
      ],
      teachingMethods: [
        'Apports théoriques illustrés par des exemples concrets issus de PME, associations et collectivités.',
        'Études de cas réels pour comprendre les leviers et obstacles d\'une démarche RSE.',
        'Travaux de groupe et échanges d\'expériences favorisant la co-construction et l\'intelligence collective.',
        'Auto-diagnostic et plan d\'action personnalisé pour chaque participant.'
      ],
      evaluationMethods: [
        'Analyse des besoins : Questionnaire préalable',
        'Évaluation des acquis : Test d\'entrée, test de sortie',
        'Attestation de formation : Certificat de réalisation'
      ],
      accessibility: [
        "Formation accessible sous 15 jours après inscription.",
        "Adaptation des conditions d'examen aux personnes en situation de handicap",
        "Le référent handicap prendra en compte dès l'inscription du candidat sa situation de handicap, si celle-ci est mentionnée. Il sera alors proposé au candidat un entretien afin d'envisager avec lui les aménagements qui pourront être apportés."
      ],
      reasons: [
        {
          title: 'Donner du sens à vos événements',
          description: 'Intégrer les valeurs du développement durable dans chaque étape de votre organisation.',
          icon: 'Target'
        },
        {
          title: 'Allier impact et convivialité',
          description: 'Créer des moments marquants qui rassemblent tout en respectant l\'environnement et les participants.',
          icon: 'Users'
        },
        {
          title: 'Optimiser vos ressources',
          description: 'Apprendre à gérer budget, logistique et partenaires dans une logique responsable et efficace.',
          icon: 'DollarSign'
        },
        {
          title: 'Valoriser votre engagement',
          description: 'Communiquer sur vos actions éco-responsables et renforcer votre image d\'acteur engagé.',
          icon: 'Star'
        }
      ],
      icon: 'Calendar'
    },
    {
      id: 'formation-mecenat',
      title: 'Les différentes formes de mécénat',
      shortDescription: 'Découvrir les différentes formes de mécénat et apprendre à bâtir une stratégie d\'engagement efficace.',
      fullDescription: 'Explorez toutes les formes de mécénat – financier, en nature, de compétences ou technologique – et comprenez comment les utiliser pour renforcer votre impact social tout en valorisant votre image. Cette formation vous aide à structurer une démarche de mécénat alignée avec vos valeurs, vos ressources et vos objectifs stratégiques.',
      slug: 'formation-mecenat',
      category: 'Démarche RSE',
      image: '/mecenat.png',
      duration: '4h',
      formateur: 'Olivier GUYOT',
      formationType: 'non-certifiante',
      prices: {
        individuel: { price: '650€ HT', label: '' },
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
        'Formes de mécénat',
        'Stratégie d\'engagement',
        'Avantages fiscaux',
        'Mesure d\'impact'
      ],
      certifications: [],
      objectives: [
        'Comprendre les principes et les finalités du mécénat dans une stratégie de responsabilité sociale.',
        'Identifier et distinguer les différentes formes de mécénat (financier, de compétences, en nature, technologique).',
        'Connaître les avantages fiscaux et les impacts économiques, sociaux et d\'image pour l\'organisation.',
        'Être capable de concevoir et mettre en œuvre une stratégie de mécénat efficace et mesurable.'
      ],
      program: [
        {
          title: 'A/ Qu\'est-ce que le mécénat ?',
          items: [
            'Définition du mécénat.',
            'Distinction entre mécénat, sponsoring et partenariats.',
            'Les acteurs du mécénat : entreprises, particuliers, fondations, etc.'
          ]
        },
        {
          title: 'B/ Les différentes formes de mécénat',
          items: [
            'Mécénat financier : dons et subventions.',
            'Mécénat de compétences : contribution des savoir-faire professionnels.',
            'Mécénat en nature : dons de biens ou services.',
            'Mécénat technologique et numérique.'
          ]
        },
        {
          title: 'C/ Avantages et incitations fiscales du mécénat',
          items: [
            'Les avantages fiscaux pour les entreprises.',
            'Les conditions pour bénéficier des avantages fiscaux.',
            'Impacts économiques et sociaux du mécénat sur l\'entreprise.'
          ]
        },
        {
          title: 'D/ Comment mettre en place une stratégie de mécénat efficace ?',
          items: [
            'Définir les objectifs et les causes soutenues.',
            'Élaborer un plan d\'action.',
            'Mesurer l\'impact du mécénat : outils et indicateurs clés.',
            'Étude de cas : présentation d\'une entreprise ayant une stratégie de mécénat efficace.'
          ]
        }
      ],
      publicVise: [
        'Dirigeant entreprise, chargé de communication, responsables ou collaborateurs impliqués dans le développement, la communication ou la gestion interne',
        'Responsables de collectivités, agents territoriaux ou représentants d\'organismes publics',
        'Dirigeant, responsable d\'association'
      ],
      prerequis: [
        'Aucun'
      ],
      teachingMethods: [
        'Apports théoriques illustrés par des exemples concrets issus de PME, associations et collectivités.',
        'Études de cas réels pour comprendre les leviers et obstacles d\'une démarche RSE.',
        'Travaux de groupe et échanges d\'expériences favorisant la co-construction et l\'intelligence collective.',
        'Auto-diagnostic et plan d\'action personnalisé pour chaque participant.'
      ],
      evaluationMethods: [
        'Analyse des besoins : Questionnaire préalable',
        'Évaluation des acquis : Test d\'entrée, test de sortie',
        'Attestation de formation : Certificat de réalisation'
      ],
      accessibility: [
        "Formation accessible sous 15 jours après inscription.",
        "Adaptation des conditions d'examen aux personnes en situation de handicap",
        "Le référent handicap prendra en compte dès l'inscription du candidat sa situation de handicap, si celle-ci est mentionnée. Il sera alors proposé au candidat un entretien afin d'envisager avec lui les aménagements qui pourront être apportés."
      ],
      reasons: [
        {
          title: 'Comprendre les enjeux du mécénat',
          description: 'Faire la différence entre mécénat, sponsoring et partenariat pour choisir la bonne approche.',
          icon: 'BookOpen'
        },
        {
          title: 'Découvrir toutes les formes possibles',
          description: 'Financier, de compétences, en nature ou technologique : identifier celle qui correspond le mieux à votre structure.',
          icon: 'Search'
        },
        {
          title: 'Valoriser votre engagement',
          description: 'Apprendre à mettre en avant vos actions de mécénat pour renforcer votre image et votre ancrage local.',
          icon: 'Star'
        },
        {
          title: 'Agir avec sens et stratégie',
          description: 'Construire une démarche cohérente, alignée avec vos valeurs et vos objectifs de développement.',
          icon: 'Target'
        }
      ],
      icon: 'Heart'
    },
    {
      id: 'formation-communication-rse',
      title: 'Communiquer sa RSE avec impact',
      shortDescription: 'Apprendre à construire une communication claire, cohérente et engagée autour de sa démarche RSE.',
      fullDescription: 'Définissez votre stratégie de communication RSE et apprenez à faire passer vos messages avec justesse et impact. De la définition des cibles à la création de contenus engageants, cette formation vous aide à valoriser vos actions responsables, renforcer la cohérence de vos messages et donner du sens à votre communication.',
      slug: 'formation-communication-rse',
      category: 'Démarche RSE',
      image: '/communication.png',
      duration: '4h',
      formateur: 'Olivier GUYOT',
      formationType: 'non-certifiante',
      prices: {
        individuel: { price: '650€ HT', label: '' },
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
        'Stratégie de communication RSE',
        'Création de contenus engageants',
        'Plan de communication',
        'Valorisation des actions'
      ],
      certifications: [],
      objectives: [
        'Comprendre les enjeux et les spécificités de la communication responsable.',
        'Être capable de définir une stratégie de communication RSE claire et cohérente.',
        'Savoir concevoir des contenus percutants, authentiques et adaptés à ses publics cibles.',
        'Mettre en place un plan de communication RSE structuré et mesurable dans le temps.'
      ],
      program: [
        {
          title: 'Communication 1 : Poser son message et sa stratégie',
          items: [
            'Clarifier sa proposition de valeur et son message clé : apprendre à exprimer clairement ce qui différencie son organisation, en quelques phrases simples, compréhensibles et percutantes.',
            'Identifier les cibles et les canaux prioritaires : construire une cartographie de ses publics (clients, partenaires, bénévoles, financeurs…) et sélectionner les supports adaptés (réseaux sociaux, presse locale, emailing, bouche-à-oreille…).',
            'Construire un plan de communication sur 3 mois : définir des objectifs réalistes, un calendrier cohérent et des indicateurs de suivi pour mesurer la progression.'
          ]
        },
        {
          title: 'Communication 2 : Contenus qui convertissent',
          items: [
            'Écrire des posts et emails impactants : maîtriser les bases du storytelling, capter l\'attention dès la première phrase et inciter à l\'action avec un ton adapté à chaque cible.',
            'Créer des visuels adaptés aux réseaux sociaux : découvrir des outils simples pour produire des visuels attractifs (carrousels, affiches, stories) même sans compétences de graphiste.',
            'Mettre en place un calendrier éditorial opérationnel : planifier la diffusion des messages, équilibrer les formats (texte, image, vidéo), gérer la fréquence de publication et anticiper les temps forts.'
          ]
        }
      ],
      publicVise: [
        'Dirigeant entreprise, chargé de communication, responsables ou collaborateurs impliqués dans le développement, la communication ou la gestion interne',
        'Responsables de collectivités, agents territoriaux ou représentants d\'organismes publics',
        'Dirigeant, responsable d\'association'
      ],
      prerequis: [
        'Aucun'
      ],
      teachingMethods: [
        'Apports théoriques illustrés par des exemples concrets issus de PME, associations et collectivités.',
        'Études de cas réels pour comprendre les leviers et obstacles d\'une démarche RSE.',
        'Travaux de groupe et échanges d\'expériences favorisant la co-construction et l\'intelligence collective.',
        'Auto-diagnostic et plan d\'action personnalisé pour chaque participant.'
      ],
      evaluationMethods: [
        'Analyse des besoins : Questionnaire préalable',
        'Évaluation des acquis : Test d\'entrée, test de sortie',
        'Attestation de formation : Certificat de réalisation'
      ],
      accessibility: [
        "Formation accessible sous 15 jours après inscription.",
        "Adaptation des conditions d'examen aux personnes en situation de handicap",
        "Le référent handicap prendra en compte dès l'inscription du candidat sa situation de handicap, si celle-ci est mentionnée. Il sera alors proposé au candidat un entretien afin d'envisager avec lui les aménagements qui pourront être apportés."
      ],
      reasons: [
        {
          title: 'Clarifier votre message',
          description: 'Exprimer simplement votre vision, vos valeurs et vos engagements RSE.',
          icon: 'MessageSquare'
        },
        {
          title: 'Structurer votre stratégie',
          description: 'Définir vos cibles, vos canaux et un plan de communication cohérent et réaliste.',
          icon: 'Target'
        },
        {
          title: 'Créer du contenu engageant',
          description: 'Apprendre à rédiger, illustrer et diffuser des messages percutants et authentiques.',
          icon: 'PenTool'
        },
        {
          title: 'Valoriser vos actions responsables',
          description: 'Renforcer votre crédibilité et votre attractivité auprès de vos partenaires et du public.',
          icon: 'Star'
        }
      ],
      icon: 'MessageSquare'
    }
  ]
};

export default formationsConfig;
