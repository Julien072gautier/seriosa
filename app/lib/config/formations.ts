import { Formation, Category } from './types';

const formationsConfig = {
  categories: [
    {
      id: 'Communication digitale et réseaux sociaux',
      name: 'Communication digitale et réseaux sociaux',
      description: 'Communication digitale et réseaux sociaux',
      icon: 'MessageSquare'
    },
    {
      id: 'Intelligence Artificielle',
      name: 'Intelligence Artificielle',
      description: 'Intelligence Artificielle',
      icon: 'Brain'
    },
    {
      id: 'Communication et prise de parole en public',
      name: 'Communication et prise de parole en public',
      description: 'Communication et prise de parole en public',
      icon: 'Users'
    },
    {
      id: 'Langues',
      name: 'Langues',
      description: 'Langues',
      icon: 'Globe'
    },
    {
      id: 'Développement commercial',
      name: 'Développement commercial',
      description: 'Développement commercial',
      icon: 'TrendingUp'
    }
  ] as Category[],
  
  formations: [
    {
      id: 'community-management',
      title: 'Développer son activité avec le Community Management',
      shortDescription: 'Maîtrisez les stratégies et outils du Community Management pour développer votre présence en ligne et accroître l\'engagement sur les réseaux sociaux.',
      fullDescription: 'Maîtrisez les stratégies et outils du Community Management pour développer votre présence en ligne, animer une communauté et accroître l\'engagement sur les réseaux sociaux.',
      slug: 'formation-community-management',
      category: 'Communication digitale et réseaux sociaux',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      duration: '21 heures',
      formateur: '',
      formationType: 'certifiante',
      prices: {
        individuel: { price: '2 450€*', label: 'Éligible CPF' },
        collectif: { price: '1 650€*', label: 'Éligible CPF' }
      },
      dates: {
        collectif: [],
        individuel: []
      },
      cpfEligible: true,
      features: [
        'Stratégie de contenu',
        'Animation de communauté',
        'Outils de gestion',
        'Mesure de performance'
      ],
      certifications: [
        'Webmarketing & Com - RS6452'
      ],
      objectives: [
        'Élaborer une stratégie de Community Management adaptée à vos objectifs',
        'Organiser l\'application opérationnelle d\'un projet de Community Management',
        'Suivre et évaluer l\'impact des actions mises en place'
      ],
      program: [
        {
          title: 'Module 1 : Définir sa stratégie de Community Management',
          items: [
            'Définir sa cible et ses objectifs sur les réseaux sociaux',
            'Intégrer le Community Management à sa stratégie globale',
            'Sélectionner les plateformes adaptées et définir son budget'
          ]
        },
        {
          title: 'Module 2 : Créer ses comptes sur les réseaux sociaux',
          items: [
            'Élaborer une charte graphique cohérente',
            'Créer et paramétrer ses comptes professionnels'
          ]
        },
        {
          title: 'Module 3 : Animer ses comptes sociaux',
          items: [
            'Concevoir un calendrier éditorial efficace',
            'Créer et publier du contenu engageant',
            'Comprendre les algorithmes et maximiser l\'engagement'
          ]
        },
        {
          title: 'Module 4 : Mettre en place des actions d\'acquisition d\'abonnés',
          items: [
            'Développer sa communauté naturellement',
            'Utiliser la publicité pour accélérer sa croissance'
          ]
        },
        {
          title: 'Module 5 : Mobiliser les compétences pour un projet de Community Management',
          items: [
            'Piloter son projet et organiser le travail des intervenants',
            'Sélectionner les outils et plateformes adaptés'
          ]
        },
        {
          title: 'Module 6 : Analyser les résultats de sa stratégie',
          items: [
            'Suivi des performances et analyse des indicateurs clés',
            'Proposition d\'axes d\'amélioration et optimisation du ROI'
          ]
        }
      ],
      publicVise: [
        'La formation et la certification s\'adressent aux dirigeants de petites entreprises et collaborateurs directs chargés de la communication marketing souhaitant mettre en place une stratégie de community management en vue de développer l\'activité de leur entreprise.'
      ],
      prerequis: [
        'Être utilisateur des réseaux sociaux',
        'Avoir un projet de communication digitale',
        'Justifier d\'un an d\'expérience professionnelle'
      ],
      teachingMethods: [
        'Approche théorique',
        'Exemples concrets et partages d\'expériences',
        'Cas pédagogiques en groupe',
        'Mises en situation et jeux de rôles'
      ],
      evaluationMethods: [
        'Évaluation des compétences entrée vs sortie',
        'Feuilles de présence',
        'Certificat de réalisation',
        'Épreuve de certification finale'
      ],
      accessibility: [
        'Formation accessible sous 15 jours après inscription',
        'Adaptations possibles sur demande pour les personnes en situation de handicap'
      ],
      certificationDetails: {
        name: 'Développer son activité avec le community management',
        code: 'RS6452',
        organization: 'Webmarketing & Com',
        organizationUrl: 'https://www.webmarketing-com.com/',
        description: 'Cette formation prépare à la certification « Développer son activité avec le Community Management » enregistrée à France Compétences sous le numéro RS6452 par l\'organisme certificateur Webmarketing & Com pour une durée de 3 ans en date du 21-12-2023',
        dureeEnregistrement: '3',
        dateEnregistrement: '21-12-2023',
        examDetails: {
          format: [
            'Mise en situation réelle portant sur l\'élaboration d\'une stratégie de community management avec remise de rapport et soutenance orale. Le candidat a 15 jours de préparation avant la remise de ses écrits. L\'écrit est ensuite suivi d\'une présentation orale de 25 minutes devant un jury'
          ],
          successRate: '100%'
        }
      },
      reasons: [
        {
          title: 'Relation client renforcée',
          description: 'Bâtissez une relation solide avec votre audience sur les réseaux sociaux',
          icon: 'Users'
        },
        {
          title: 'Visibilité accrue',
          description: 'Augmentez votre visibilité et votre crédibilité sur le marché',
          icon: 'Target'
        },
        {
          title: 'Engagement optimisé',
          description: 'Favorisez l\'engagement et la fidélisation de vos clients',
          icon: 'MessageSquare'
        },
        {
          title: 'E-réputation maîtrisée',
          description: 'Gérez efficacement votre réputation en ligne',
          icon: 'Star'
        }
      ],
      icon: 'MessageSquare'
    },
    {
      id: 'ia-vente',
      title: 'Intégrer l\'IA conversationnelle dans le cycle de vente',
      shortDescription: 'Maîtrisez l\'utilisation de l\'IA pour optimiser votre processus commercial et augmenter vos performances de vente dans un contexte professionnel.',
      fullDescription: 'Maîtrisez l\'utilisation de l\'IA pour optimiser votre processus commercial et augmenter vos performances de vente.',
      slug: 'formation-ia-vente',
      category: 'Intelligence Artificielle',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      duration: '21 heures',
      formateur: '',
      formationType: 'certifiante',
      prices: {
        individuel: { price: '2 450€*', label: 'Éligible CPF' },
        collectif: { price: '1 650€*', label: 'Éligible CPF' }
      },
      dates: {
        collectif: [],
        individuel: []
      },
      cpfEligible: true,
      features: [
        'IA conversationnelle',
        'Automatisation commerciale',
        'Outils de vente IA',
        'Optimisation des processus'
      ],
      certifications: [
        'Online Sales Success - RS6792'
      ],
      objectives: [
        'Identifier les opportunités d\'intégration de l\'IA dans le processus de vente',
        'Rédiger des prompts efficaces pour obtenir des réponses pertinentes des IA conversationnelles',
        'Améliorer la qualité des interactions en optimisant les réponses de l\'IA',
        'Respecter les normes de protection des données et d\'éthique dans l\'usage de l\'IA'
      ],
      program: [
        {
          title: 'Module 1 : Qu\'est-ce que l\'IA ?',
          items: [
            'Différence entre IA et automatisation',
            'Histoire et évolution de l\'IA dans la vente',
            'Réglementations française, européenne et internationale'
          ]
        },
        {
          title: 'Module 2 : L\'IA dans le cycle de vente',
          items: [
            'Comprendre le cycle de vente classique et son optimisation par l\'IA',
            'Sélection des outils IA adaptés à chaque étape du cycle de vente',
            'Définition des KPI pour mesurer l\'impact de l\'IA'
          ]
        },
        {
          title: 'Module 3 : Utiliser l\'IA dans la chaîne de valeur du cycle de vente',
          items: [
            'Qu\'est-ce qu\'un prompt et comment l\'optimiser ?',
            'La méthode AlFred pour la rédaction de prompts efficaces',
            'Utilisation concrète des IA dans des situations commerciales courantes'
          ]
        },
        {
          title: 'Module 4 : Automatiser sa veille commerciale & les tâches administratives',
          items: [
            'Automatiser la production administrative commerciale grâce à l\'IA',
            'Créer un enchaînement de tâches commerciales entièrement géré par l\'IA',
            'Gérer sa veille commerciale grâce à l\'IA'
          ]
        }
      ],
      publicVise: [
        'Commerciaux sédentaires ou vacataires',
        'Dirigeants souhaitant intégrer l\'IA dans leur stratégie commerciale'
      ],
      prerequis: [
        'Connaissances en vente requises',
        'Un entretien préalable avec un conseiller est obligatoire avant l\'inscription'
      ],
      teachingMethods: [
        'Blended learning avec 5 heures d\'e-learning et 16 heures de formation en live',
        'Accès privé à la plateforme SKILLUP by Accertif',
        'Cas pratiques, mises en situation et co-développement'
      ],
      evaluationMethods: [
        'Évaluation des compétences entrée vs sortie',
        'Feuilles de présence',
        'Certificat de réalisation',
        'Épreuve de certification finale'
      ],
      accessibility: [
        'Formation accessible sous 15 jours après inscription',
        'Adaptations possibles sur demande pour les personnes en situation de handicap'
      ],
      certificationDetails: {
        name: 'Intégrer l\'intelligence artificielle conversationnelle dans le cycle de vente',
        code: 'RS6792',
        organization: 'Online Sales Success',
        organizationUrl: 'https://online-sales-success.fr/',
        description: 'Cette formation prépare à la certification « Intégrer l\'intelligence artificielle conversationnelle dans le cycle de vente » enregistrée à France Compétences sous le numéro RS6792 par l\'organisme certificateur Online Sales Success pour une durée de 3 ans en date du 15-03-2024',
        dureeEnregistrement: '2',
        dateEnregistrement: '01-10-2024',
        examDetails: {
          format: [
            'Étude de cas et présentation devant le jury : le candidat doit identifier les situations professionnelles où l\'IA apporte une valeur ajoutée dans l\'acte de vente, puis rédiger un questionnement adapté à un logiciel d\'IA pour obtenir une réponse pertinente et exploitable. L\'épreuve inclut également l\'analyse de questionnements IA imparfaits et un QCM avec un taux de bonnes réponses minimum de 70%.'
          ],
          successRate: '60%'
        }
      },
      reasons: [
        {
          title: 'Gain de temps stratégique',
          description: 'Automatisez certaines tâches et optimisez le cycle de vente avec l\'IA',
          icon: 'Users'
        },
        {
          title: 'Décisions basées sur les données',
          description: 'Analysez les performances et ajustez vos stratégies grâce aux indicateurs pertinents',
          icon: 'Target'
        },
        {
          title: 'Interactions personnalisées',
          description: 'Adaptez chaque échange client grâce aux capacités conversationnelles de l\'IA',
          icon: 'MessageSquare'
        },
        {
          title: 'Efficacité commerciale améliorée',
          description: 'Automatisez certaines tâches et optimisez le cycle de vente avec l\'IA',
          icon: 'Star'
        }
      ],
      icon: 'Brain'
    },
    {
      id: 'communication-prise-parole',
      title: 'Communiquer avec impact à l\'oral en présentiel et à distance',
      shortDescription: 'Développez votre aisance orale, maîtrisez votre posture et captivez votre auditoire en toutes circonstances.',
      fullDescription: 'Développez votre aisance orale, maîtrisez votre posture et captivez votre auditoire en toutes circonstances.',
      slug: 'formation-communication-prise-parole',
      category: 'Communication et prise de parole en public',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      duration: '21 heures',
      formateur: '',
      formationType: 'certifiante',
      prices: {
        individuel: { price: '2 450€*', label: 'Éligible CPF' },
        collectif: { price: '1 650€*', label: 'Éligible CPF' }
      },
      dates: {
        collectif: [],
        individuel: []
      },
      cpfEligible: true,
      features: [
        'Prise de parole en public',
        'Communication non verbale',
        'Présentations efficaces',
        'Communication à distance'
      ],
      certifications: [
        'Pollen Conseil - RS6377'
      ],
      objectives: [
        'Concevoir la structure d\'une communication',
        'Énoncer un message de manière audible et impactante',
        'Mobiliser son corps et adapter sa posture selon l\'environnement et les interlocuteurs',
        'Illustrer son discours pour captiver et convaincre',
        'Gérer les interactions et répondre aux objections',
        'Adapter sa communication aux outils et contextes distanciels'
      ],
      program: [
        {
          title: 'Module 1 : Structurer sa pensée et le contenu de sa présentation',
          items: [
            'Adapter son intervention à son public et au contexte',
            'Définir le sujet, l\'objectif et structurer son discours',
            'Construire une progression logique et captivante',
            'Concevoir un support visuel épuré et impactant'
          ]
        },
        {
          title: 'Module 2 : Maîtriser sa posture et sa voix',
          items: [
            'Alignement Verbal - Visuel – Vocal',
            'Posture, gestuelle et cohérence du message',
            'Respiration et modulation de la voix',
            'Connexion avec l\'auditoire par le regard et le rythme'
          ]
        },
        {
          title: 'Module 3 : Répondre aux objections',
          items: [
            'Gérer et transformer les objections en opportunités',
            'Rebondir efficacement et obtenir l\'adhésion',
            'Techniques de questionnement et reformulation'
          ]
        },
        {
          title: 'Module 4 : Adapter sa prise de parole à un contexte distanciel',
          items: [
            'Créer un environnement engageant en visioconférence',
            'Dynamiser son intervention à distance',
            'Maintenir l\'interaction et capter l\'attention',
            'Conception de supports clairs et synthétiques'
          ]
        },
        {
          title: 'Module 5 : Renforcer confiance et affirmation de soi',
          items: [
            'Comprendre son profil d\'orateur et oser être soi-même',
            'Gérer le stress et les émotions',
            'Appliquer la règle des 3 P (Préparation, Pratique, Performance)',
            'Analyser ses interventions et s\'améliorer'
          ]
        },
        {
          title: 'Module 6 : Se rendre mémorable',
          items: [
            'Créer un lien avec son public et susciter l\'engagement',
            'Communiquer avec conviction et authenticité',
            'Développer son charisme et sa présence',
            'L\'énergie et l\'enthousiasme comme moteurs d\'influence'
          ]
        }
      ],
      publicVise: [
        'Commerciaux ou personnel de la relation client',
        'Managers en situation d\'entretien',
        'Responsables de services en réunion d\'équipe',
        'Chefs ou contributeurs de projet',
        'Dirigeants en situation de discours',
        'Demandeurs d\'emploi en entretien de recrutement'
      ],
      prerequis: [
        'Justifier d\'au moins 1 an d\'expérience professionnelle',
        'Pratiquer régulièrement des prises de parole en présentiel ou à distance'
      ],
      teachingMethods: [
        'Approche théorique',
        'Exemples concrets et partages d\'expériences',
        'Cas pédagogiques en groupe',
        'Mises en situation, jeux de rôles et co-développement'
      ],
      evaluationMethods: [
        'Évaluation des compétences entrée vs sortie',
        'Feuilles de présence',
        'Certificat de réalisation',
        'Épreuve de certification finale'
      ],
      accessibility: [
        'Formation accessible sous 15 jours après inscription',
        'Adaptations possibles sur demande pour les personnes en situation de handicap'
      ],
      certificationDetails: {
        name: 'Communiquer à l\'oral avec impact en présentiel et à distance',
        code: 'RS6377',
        organization: 'Pollen Conseil',
        organizationUrl: 'https://pollenconseil.com/',
        description: 'Cette formation prépare à la certification « Communiquer à l\'oral avec impact en présentiel et à distance » enregistrée à France Compétences sous le numéro RS6377 par l\'organisme certificateur Pollen Conseil pour une durée de 3 ans en date du 10-01-2024',
        dureeEnregistrement: '3',
        dateEnregistrement: '20-09-2023',
        examDetails: {
          format: [
            'Mise en situation professionnelle simulée : le candidat choisit une situation de communication qu\'il rencontre fréquemment parmi la prise de parole face à un public d\'au moins 2 personnes, la communication en face à face, ou la prise de parole face à un groupe de plus de 20 personnes en auditorium (discours ou conférence). L\'épreuve inclut également un questionnaire d\'évaluation des acquis.'
          ],
          successRate: '100%'
        }
      },
      reasons: [
        {
          title: 'Crédibilité renforcée',
          description: 'Affirmez votre expertise et gagnez en légitimité en captivant votre audience à l\'oral',
          icon: 'Users'
        },
        {
          title: 'Impact optimisé',
          description: 'Structurez clairement vos interventions pour capter et maintenir l\'attention de votre auditoire',
          icon: 'Target'
        },
        {
          title: 'Interaction maîtrisée',
          description: 'Gérez les objections avec assurance et favorisez des échanges fluides et constructifs',
          icon: 'MessageSquare'
        },
        {
          title: 'Présence affirmée',
          description: 'Adoptez posture, gestuelle et ton adaptés pour renforcer charisme et aisance orale',
          icon: 'Star'
        }
      ],
      icon: 'Users'
    },
    {
      id: 'allemand-professionnel',
      title: 'Allemand',
      shortDescription: 'Développez des automatismes de communication en allemand et renforcez votre impact professionnel dans un contexte germanophone.',
      fullDescription: 'Développez des automatismes de communication en allemand et renforcez votre impact professionnel dans un contexte germanophone.',
      slug: 'formation-allemand-professionnel',
      category: 'Langues',
      image: 'https://irp.cdn-website.com/e0ab763a/dms3rep/multi/Allemand.png',
      duration: '30 heures',
      formateur: '',
      formationType: 'certifiante',
      prices: {
        individuel: { price: '1 950€*', label: 'Éligible CPF' },
        collectif: { price: '1 250€*', label: 'Éligible CPF' }
      },
      dates: {
        collectif: [],
        individuel: []
      },
      cpfEligible: true,
      features: [
        'Communication professionnelle',
        'Vocabulaire métier',
        'Préparation aux certifications',
        'Mise en situation pratique'
      ],
      certifications: [
        'Lilate - RS6145'
      ],
      objectives: [
        "Accueillir une personne en allemand et comprendre ses besoins",
        "Recueillir des informations et poser des questions en allemand",
        "Transmettre des consignes et des instructions dans un cadre professionnel",
        "Consulter des documents en allemand et comprendre des messages audios"
      ],
      program: [
        {
          title: "Module 1 : Accueillir une personne",
          items: [
            "Se présenter et identifier son interlocuteur",
            "Comprendre et répondre à une demande simple",
            "Vocabulaire de l'accueil et formules de politesse"
          ]
        },
        {
          title: "Module 2 : Recueillir des informations",
          items: [
            "Poser des questions de manière appropriée",
            "Reformuler pour confirmer sa compréhension",
            "Prendre des notes efficaces en allemand"
          ]
        },
        {
          title: "Module 3 : Transmettre des consignes et informations",
          items: [
            "Donner des instructions en allemand",
            "Échanger avec un collègue ou un groupe",
            "Vérifier la compréhension mutuelle"
          ]
        },
        {
          title: "Module 4 : Consulter des documents et assister à des réunions",
          items: [
            "Comprendre des documents professionnels en allemand",
            "Participer activement à des réunions en allemand",
            "Comprendre et réagir à des messages audio"
          ]
        }
      ],
      publicVise: [
        "Toute personne amenée à communiquer en allemand dans un contexte professionnel",
        "Professionnels travaillant avec des partenaires germanophones"
      ],
      prerequis: [
        "Niveau A1 introductif ou A2 intermédiaire",
        "Test de niveau initial obligatoire"
      ],
      teachingMethods: [
        "Blended learning avec 20% d'e-learning et 80% de formation en live",
        "Exposés théoriques et mises en situation",
        "Études de cas et jeux de rôles",
        "Supports pédagogiques personnalisés"
      ],
      evaluationMethods: [
        "Audit de niveau initial",
        "Mini-tests de compréhension réguliers",
        "Feuilles de présence et certificat de réalisation",
        "Épreuve de certification"
      ],
      accessibility: [
        "Formation accessible sous 2 semaines après inscription",
        "Adaptations possibles sur demande pour les personnes en situation de handicap",
        "Assistance à la connexion en cas de visioconférence via Microsoft Teams"
      ],
      certificationDetails: {
        name: 'Allemand professionnel',
        code: 'RS6145',
        organization: 'Lilate',
        organizationUrl: 'https://www.lilate.org/',
        description: 'Cette formation prépare à la certification « Allemand professionnel » enregistrée à France Compétences sous le numéro RS6145 par l\'organisme certificateur Lilate pour une durée de 3 ans en date du 05-02-2024',
        dureeEnregistrement: '3',
        dateEnregistrement: '24-10-2022',
        examDetails: {
          format: [
            'Mise en situation sous forme d\'un échange continu avec l\'évaluateur sous le mode de la communication simulant des interactions de premier niveau, la retranscription d\'un message écrit, et des réponses écrites via l\'interface de communication et avec des consultations d\'extraits, suivies de questions/réponses'
          ],
          successRate: 'En attente'
        }
      },
      reasons: [
        {
          title: 'Ouverture internationale',
          description: 'Accédez à de nouvelles opportunités professionnelles à l\'international',
          icon: 'Globe'
        },
        {
          title: 'Efficacité professionnelle',
          description: 'Communiquez efficacement avec vos interlocuteurs germanophones',
          icon: 'MessageSquare'
        },
        {
          title: 'Progression garantie',
          description: 'Développez rapidement vos compétences grâce à une méthode éprouvée',
          icon: 'TrendingUp'
        },
        {
          title: 'Certification reconnue',
          description: 'Validez votre niveau avec une certification officielle',
          icon: 'Award'
        }
      ],
      icon: '🇩🇪'
    },
    {
      id: 'anglais-professionnel',
      title: 'Anglais',
      shortDescription: 'Développez des automatismes de communication en anglais et renforcez votre impact professionnel dans un contexte anglophone.',
      fullDescription: 'Développez des automatismes de communication en anglais et renforcez votre impact professionnel dans un contexte anglophone.',
      slug: 'formation-anglais-professionnel',
      category: 'Langues',
      image: 'https://irp.cdn-website.com/e0ab763a/dms3rep/multi/Anglais.png',
      duration: '30 heures',
      formateur: '',
      formationType: 'certifiante',
      prices: {
        individuel: { price: '1 950€*', label: 'Éligible CPF' },
        collectif: { price: '1 250€*', label: 'Éligible CPF' }
      },
      dates: {
        collectif: [],
        individuel: []
      },
      cpfEligible: true,
      features: [
        'Communication professionnelle',
        'Vocabulaire métier',
        'Préparation aux certifications',
        'Mise en situation pratique'
      ],
      certifications: [
        'Lilate - RS6118'
      ],
      objectives: [
        "Accueillir une personne en anglais et comprendre ses besoins",
        "Recueillir des informations et poser des questions en anglais",
        "Transmettre des consignes et des instructions dans un cadre professionnel",
        "Consulter des documents en anglais et comprendre des messages audios"
      ],
      program: [
        {
          title: "Module 1 : Accueillir une personne",
          items: [
            "Se présenter et identifier son interlocuteur",
            "Comprendre et répondre à une demande simple",
            "Vocabulaire de l'accueil et formules de politesse"
          ]
        },
        {
          title: "Module 2 : Recueillir des informations",
          items: [
            "Poser des questions de manière appropriée",
            "Reformuler pour confirmer sa compréhension",
            "Prendre des notes efficaces en anglais"
          ]
        },
        {
          title: "Module 3 : Transmettre des consignes et informations",
          items: [
            "Donner des instructions en anglais",
            "Échanger avec un collègue ou un groupe",
            "Vérifier la compréhension mutuelle"
          ]
        },
        {
          title: "Module 4 : Consulter des documents et assister à des réunions",
          items: [
            "Comprendre des documents professionnels en anglais",
            "Participer activement à des réunions en anglais",
            "Comprendre et réagir à des messages audio"
          ]
        }
      ],
      publicVise: [
        "Toute personne amenée à communiquer en anglais dans un contexte professionnel",
        "Professionnels travaillant avec des partenaires anglophones"
      ],
      prerequis: [
        "Niveau A1 introductif ou A2 intermédiaire",
        "Test de niveau initial obligatoire"
      ],
      teachingMethods: [
        "Blended learning avec 20% d'e-learning et 80% de formation en live",
        "Exposés théoriques et mises en situation",
        "Études de cas et jeux de rôles",
        "Supports pédagogiques personnalisés"
      ],
      evaluationMethods: [
        "Audit de niveau initial",
        "Mini-tests de compréhension réguliers",
        "Feuilles de présence et certificat de réalisation",
        "Épreuve de certification"
      ],
      accessibility: [
        "Formation accessible sous 2 semaines après inscription",
        "Adaptations possibles sur demande pour les personnes en situation de handicap",
        "Assistance à la connexion en cas de visioconférence via Microsoft Teams"
      ],
      certificationDetails: {
        name: 'Anglais professionnel',
        code: 'RS6118',
        organization: 'Lilate',
        organizationUrl: 'https://www.lilate.org/',
        description: 'Cette formation prépare à la certification « Anglais professionnel » enregistrée à France Compétences sous le numéro RS6118 par l\'organisme certificateur Lilate pour une durée de 3 ans en date du 12-02-2024',
        dureeEnregistrement: '3',
        dateEnregistrement: '24-10-2022',
        examDetails: {
          format: [
            'Mise en situation sous forme d\'un échange continu avec l\'évaluateur sous le mode de la communication simulant des interactions de premier niveau, la retranscription d\'un message écrit, et des réponses écrites via l\'interface de communication et avec des consultations d\'extraits, suivies de questions/réponses'
          ],
          successRate: '100%'
        }
      },
      reasons: [
        {
          title: 'Ouverture internationale',
          description: 'Accédez à de nouvelles opportunités professionnelles à l\'international',
          icon: 'Globe'
        },
        {
          title: 'Efficacité professionnelle',
          description: 'Communiquez efficacement avec vos interlocuteurs anglophones',
          icon: 'MessageSquare'
        },
        {
          title: 'Progression garantie',
          description: 'Développez rapidement vos compétences grâce à une méthode éprouvée',
          icon: 'TrendingUp'
        },
        {
          title: 'Certification reconnue',
          description: 'Validez votre niveau avec une certification officielle',
          icon: 'Award'
        }
      ],
      icon: '🇬🇧'
    },
    {
      id: 'arabe-professionnel',
      title: 'Arabe',
      shortDescription: 'Développez des automatismes de communication en arabe et renforcez votre impact professionnel dans un contexte arabophone.',
      fullDescription: 'Développez des automatismes de communication en arabe et renforcez votre impact professionnel dans un contexte arabophone.',
      slug: 'formation-arabe-professionnel',
      category: 'Langues',
      image: 'https://irp.cdn-website.com/e0ab763a/dms3rep/multi/Arabe.png',
      duration: '30 heures',
      formateur: '',
      formationType: 'certifiante',
      prices: {
        individuel: { price: '1 950€*', label: 'Éligible CPF' },
        collectif: { price: '1 250€*', label: 'Éligible CPF' }
      },
      dates: {
        collectif: [],
        individuel: []
      },
      cpfEligible: true,
      features: [
        'Communication professionnelle',
        'Vocabulaire métier',
        'Préparation aux certifications',
        'Mise en situation pratique'
      ],
      certifications: [
        'Lilate - RS6144'
      ],
      objectives: [
        "Accueillir une personne en arabe et comprendre ses besoins",
        "Recueillir des informations et poser des questions en arabe",
        "Transmettre des consignes et des instructions dans un cadre professionnel",
        "Consulter des documents en arabe et comprendre des messages audios"
      ],
      program: [
        {
          title: "Module 1 : Accueillir une personne",
          items: [
            "Se présenter et identifier son interlocuteur",
            "Comprendre et répondre à une demande simple",
            "Vocabulaire de l'accueil et formules de politesse"
          ]
        },
        {
          title: "Module 2 : Recueillir des informations",
          items: [
            "Poser des questions de manière appropriée",
            "Reformuler pour confirmer sa compréhension",
            "Prendre des notes efficaces en arabe"
          ]
        },
        {
          title: "Module 3 : Transmettre des consignes et informations",
          items: [
            "Donner des instructions en arabe",
            "Échanger avec un collègue ou un groupe",
            "Vérifier la compréhension mutuelle"
          ]
        },
        {
          title: "Module 4 : Consulter des documents et assister à des réunions",
          items: [
            "Comprendre des documents professionnels en arabe",
            "Participer activement à des réunions en arabe",
            "Comprendre et réagir à des messages audio"
          ]
        }
      ],
      publicVise: [
        "Toute personne amenée à communiquer en arabe dans un contexte professionnel",
        "Professionnels travaillant avec des partenaires arabophones"
      ],
      prerequis: [
        "Niveau A1 introductif ou A2 intermédiaire",
        "Test de niveau initial obligatoire"
      ],
      teachingMethods: [
        "Blended learning avec 20% d'e-learning et 80% de formation en live",
        "Exposés théoriques et mises en situation",
        "Études de cas et jeux de rôles",
        "Supports pédagogiques personnalisés"
      ],
      evaluationMethods: [
        "Audit de niveau initial",
        "Mini-tests de compréhension réguliers",
        "Feuilles de présence et certificat de réalisation",
        "Épreuve de certification"
      ],
      accessibility: [
        "Formation accessible sous 2 semaines après inscription",
        "Adaptations possibles sur demande pour les personnes en situation de handicap",
        "Assistance à la connexion en cas de visioconférence via Microsoft Teams"
      ],
      certificationDetails: {
        name: 'Arabe professionnel',
        code: 'RS6144',
        organization: 'Lilate',
        organizationUrl: 'https://www.lilate.org/',
        description: 'Cette formation prépare à la certification « Arabe professionnel » enregistrée à France Compétences sous le numéro RS6144 par l\'organisme certificateur Lilate pour une durée de 3 ans en date du 19-02-2024',
        dureeEnregistrement: '3',
        dateEnregistrement: '24-10-2022',
        examDetails: {
          format: [
            'Mise en situation sous forme d\'un échange continu avec l\'évaluateur sous le mode de la communication simulant des interactions de premier niveau, la retranscription d\'un message écrit, et des réponses écrites via l\'interface de communication et avec des consultations d\'extraits, suivies de questions/réponses'
          ],
          successRate: 'En attente'
        }
      },
      reasons: [
        {
          title: 'Ouverture internationale',
          description: 'Accédez à de nouvelles opportunités professionnelles à l\'international',
          icon: 'Globe'
        },
        {
          title: 'Efficacité professionnelle',
          description: 'Communiquez efficacement avec vos interlocuteurs arabophones',
          icon: 'MessageSquare'
        },
        {
          title: 'Progression garantie',
          description: 'Développez rapidement vos compétences grâce à une méthode éprouvée',
          icon: 'TrendingUp'
        },
        {
          title: 'Certification reconnue',
          description: 'Validez votre niveau avec une certification officielle',
          icon: 'Award'
        }
      ],
      icon: '🇸🇦'
    },
    {
      id: 'espagnol-professionnel',
      title: 'Espagnol',
      shortDescription: 'Développez des automatismes de communication en espagnol et renforcez votre impact professionnel dans un contexte hispanophone.',
      fullDescription: 'Développez des automatismes de communication en espagnol et renforcez votre impact professionnel dans un contexte hispanophone.',
      slug: 'formation-espagnol-professionnel',
      category: 'Langues',
      image: 'https://irp.cdn-website.com/e0ab763a/dms3rep/multi/Espagnol.png',
      duration: '30 heures',
      formateur: '',
      formationType: 'certifiante',
      prices: {
        individuel: { price: '1 950€*', label: 'Éligible CPF' },
        collectif: { price: '1 250€*', label: 'Éligible CPF' }
      },
      dates: {
        collectif: [],
        individuel: []
      },
      cpfEligible: true,
      features: [
        'Communication professionnelle',
        'Vocabulaire métier',
        'Préparation aux certifications',
        'Mise en situation pratique'
      ],
      certifications: [
        'Lilate - RS6139'
      ],
      objectives: [
        "Accueillir une personne en espagnol et comprendre ses besoins",
        "Recueillir des informations et poser des questions en espagnol",
        "Transmettre des consignes et des instructions dans un cadre professionnel",
        "Consulter des documents en espagnol et comprendre des messages audios"
      ],
      program: [
        {
          title: "Module 1 : Accueillir une personne",
          items: [
            "Se présenter et identifier son interlocuteur",
            "Comprendre et répondre à une demande simple",
            "Vocabulaire de l'accueil et formules de politesse"
          ]
        },
        {
          title: "Module 2 : Recueillir des informations",
          items: [
            "Poser des questions de manière appropriée",
            "Reformuler pour confirmer sa compréhension",
            "Prendre des notes efficaces en espagnol"
          ]
        },
        {
          title: "Module 3 : Transmettre des consignes et informations",
          items: [
            "Donner des instructions en espagnol",
            "Échanger avec un collègue ou un groupe",
            "Vérifier la compréhension mutuelle"
          ]
        },
        {
          title: "Module 4 : Consulter des documents et assister à des réunions",
          items: [
            "Comprendre des documents professionnels en espagnol",
            "Participer activement à des réunions en espagnol",
            "Comprendre et réagir à des messages audio"
          ]
        }
      ],
      publicVise: [
        "Toute personne amenée à communiquer en espagnol dans un contexte professionnel",
        "Professionnels travaillant avec des partenaires hispanophones"
      ],
      prerequis: [
        "Niveau A1 introductif ou A2 intermédiaire",
        "Test de niveau initial obligatoire"
      ],
      teachingMethods: [
        "Blended learning avec 20% d'e-learning et 80% de formation en live",
        "Exposés théoriques et mises en situation",
        "Études de cas et jeux de rôles",
        "Supports pédagogiques personnalisés"
      ],
      evaluationMethods: [
        "Audit de niveau initial",
        "Mini-tests de compréhension réguliers",
        "Feuilles de présence et certificat de réalisation",
        "Épreuve de certification"
      ],
      accessibility: [
        "Formation accessible sous 2 semaines après inscription",
        "Adaptations possibles sur demande pour les personnes en situation de handicap",
        "Assistance à la connexion en cas de visioconférence via Microsoft Teams"
      ],
      certificationDetails: {
        name: 'Espagnol professionnel',
        code: 'RS6139',
        organization: 'Lilate',
        organizationUrl: 'https://www.lilate.org/',
        description: 'Cette formation prépare à la certification « Espagnol professionnel » enregistrée à France Compétences sous le numéro RS6139 par l\'organisme certificateur Lilate pour une durée de 3 ans en date du 26-02-2024',
        dureeEnregistrement: '3',
        dateEnregistrement: '24-10-2022',
        examDetails: {
          format: [
            'Mise en situation sous forme d\'un échange continu avec l\'évaluateur sous le mode de la communication simulant des interactions de premier niveau, la retranscription d\'un message écrit, et des réponses écrites via l\'interface de communication et avec des consultations d\'extraits, suivies de questions/réponses'
          ],
          successRate: '100%'
        }
      },
      reasons: [
        {
          title: 'Ouverture internationale',
          description: 'Accédez à de nouvelles opportunités professionnelles à l\'international',
          icon: 'Globe'
        },
        {
          title: 'Efficacité professionnelle',
          description: 'Communiquez efficacement avec vos interlocuteurs hispanophones',
          icon: 'MessageSquare'
        },
        {
          title: 'Progression garantie',
          description: 'Développez rapidement vos compétences grâce à une méthode éprouvée',
          icon: 'TrendingUp'
        },
        {
          title: 'Certification reconnue',
          description: 'Validez votre niveau avec une certification officielle',
          icon: 'Award'
        }
      ],
      icon: '🇪🇸'
    },
    {
      id: 'francais-professionnel',
      title: 'Français (FLE)',
      shortDescription: 'Développez des automatismes de communication en français et renforcez votre impact professionnel dans un contexte francophone.',
      fullDescription: 'Développez vos compétences en français pour une meilleure intégration professionnelle et sociale. Formation adaptée aux besoins spécifiques de votre secteur d\'activité.',
      slug: 'formation-francais-professionnel',
      category: 'Langues',
      image: 'https://irp.cdn-website.com/e0ab763a/dms3rep/multi/Fran%C3%A7ais-61b9e88d.png',
      duration: '30 heures',
      formateur: '',
      formationType: 'certifiante',
      prices: {
        individuel: { price: '1 950€*', label: 'Éligible CPF' },
        collectif: { price: '1 250€*', label: 'Éligible CPF' }
      },
      dates: {
        collectif: [],
        individuel: []
      },
      cpfEligible: true,
      features: [
        'Communication professionnelle',
        'Vocabulaire métier',
        'Préparation aux certifications',
        'Mise en situation pratique'
      ],
      certifications: [
        'Lilate - RS6916'
      ],
      objectives: [
        "Accueillir une personne en français et comprendre ses besoins",
        "Recueillir des informations et poser des questions en français",
        "Transmettre des consignes et des instructions dans un cadre professionnel",
        "Consulter des documents en français et comprendre des messages audios"
      ],
      program: [
        {
          title: "Module 1 : Accueillir une personne",
          items: [
            "Se présenter et identifier son interlocuteur",
            "Comprendre et répondre à une demande simple",
            "Vocabulaire de l'accueil et formules de politesse"
          ]
        },
        {
          title: "Module 2 : Recueillir des informations",
          items: [
            "Poser des questions de manière appropriée",
            "Reformuler pour confirmer sa compréhension",
            "Prendre des notes efficaces en français"
          ]
        },
        {
          title: "Module 3 : Transmettre des consignes et informations",
          items: [
            "Donner des instructions en français",
            "Échanger avec un collègue ou un groupe",
            "Vérifier la compréhension mutuelle"
          ]
        },
        {
          title: "Module 4 : Consulter des documents et assister à des réunions",
          items: [
            "Comprendre des documents professionnels en français",
            "Participer activement à des réunions en français",
            "Comprendre et réagir à des messages audio"
          ]
        }
      ],
      publicVise: [
        "Toute personne amenée à communiquer en français dans un contexte professionnel",
        "Professionnels travaillant avec des partenaires francophones"
      ],
      prerequis: [
        "Niveau A1 introductif ou A2 intermédiaire",
        "Test de niveau initial obligatoire"
      ],
      teachingMethods: [
        "Blended learning avec 20% d'e-learning et 80% de formation en live",
        "Exposés théoriques et mises en situation",
        "Études de cas et jeux de rôles",
        "Supports pédagogiques personnalisés"
      ],
      evaluationMethods: [
        "Audit de niveau initial",
        "Mini-tests de compréhension réguliers",
        "Feuilles de présence et certificat de réalisation",
        "Épreuve de certification"
      ],
      accessibility: [
        "Formation accessible sous 2 semaines après inscription",
        "Adaptations possibles sur demande pour les personnes en situation de handicap",
        "Assistance à la connexion en cas de visioconférence via Microsoft Teams"
      ],
      certificationDetails: {
        name: 'Français professionnel',
        code: 'RS6916',
        organization: 'Lilate',
        organizationUrl: 'https://www.lilate.org/',
        description: 'Cette formation prépare à la certification « Français professionnel » enregistrée à France Compétences sous le numéro RS6916 par l\'organisme certificateur Lilate pour une durée de 3 ans en date du 05-03-2024',
        dureeEnregistrement: '3',
        dateEnregistrement: '28-11-2024',
        examDetails: {
          format: [
            'Mise en situation sous forme d\'un échange continu avec l\'évaluateur sous le mode de la communication simulant des interactions de premier niveau, la retranscription d\'un message écrit, et des réponses écrites via l\'interface de communication et avec des consultations d\'extraits, suivies de questions/réponses'
          ],
          successRate: 'En attente'
        }
      },
      reasons: [
        {
          title: 'Ouverture internationale',
          description: 'Accédez à de nouvelles opportunités professionnelles à l\'international',
          icon: 'Globe'
        },
        {
          title: 'Efficacité professionnelle',
          description: 'Communiquez efficacement avec vos interlocuteurs francophones',
          icon: 'MessageSquare'
        },
        {
          title: 'Progression garantie',
          description: 'Développez rapidement vos compétences grâce à une méthode éprouvée',
          icon: 'TrendingUp'
        },
        {
          title: 'Certification reconnue',
          description: 'Validez votre niveau avec une certification officielle',
          icon: 'Award'
        }
      ],
      icon: '🇫🇷'
    },
    {
      id: 'italien-professionnel',
      title: 'Italien',
      shortDescription: 'Développez des automatismes de communication en italien et renforcez votre impact professionnel dans un contexte italophone.',
      fullDescription: 'Développez des automatismes de communication en italien et renforcez votre impact professionnel dans un contexte italophone.',
      slug: 'formation-italien-professionnel',
      category: 'Langues',
      image: 'https://irp.cdn-website.com/e0ab763a/dms3rep/multi/Italien.png',
      duration: '30 heures',
      formateur: '',
      formationType: 'certifiante',
      prices: {
        individuel: { price: '1 950€*', label: 'Éligible CPF' },
        collectif: { price: '1 250€*', label: 'Éligible CPF' }
      },
      dates: {
        collectif: [],
        individuel: []
      },
      cpfEligible: true,
      features: [
        'Communication professionnelle',
        'Vocabulaire métier',
        'Préparation aux certifications',
        'Mise en situation pratique'
      ],
      certifications: [
        'Lilate - RS6140'
      ],
      objectives: [
        "Accueillir une personne en italien et comprendre ses besoins",
        "Recueillir des informations et poser des questions en italien",
        "Transmettre des consignes et des instructions dans un cadre professionnel",
        "Consulter des documents en italien et comprendre des messages audios"
      ],
      program: [
        {
          title: "Module 1 : Accueillir une personne",
          items: [
            "Se présenter et identifier son interlocuteur",
            "Comprendre et répondre à une demande simple",
            "Vocabulaire de l'accueil et formules de politesse"
          ]
        },
        {
          title: "Module 2 : Recueillir des informations",
          items: [
            "Poser des questions de manière appropriée",
            "Reformuler pour confirmer sa compréhension",
            "Prendre des notes efficaces en italien"
          ]
        },
        {
          title: "Module 3 : Transmettre des consignes et informations",
          items: [
            "Donner des instructions en italien",
            "Échanger avec un collègue ou un groupe",
            "Vérifier la compréhension mutuelle"
          ]
        },
        {
          title: "Module 4 : Consulter des documents et assister à des réunions",
          items: [
            "Comprendre des documents professionnels en italien",
            "Participer activement à des réunions en italien",
            "Comprendre et réagir à des messages audio"
          ]
        }
      ],
      publicVise: [
        "Toute personne amenée à communiquer en italien dans un contexte professionnel",
        "Professionnels travaillant avec des partenaires italophones"
      ],
      prerequis: [
        "Niveau A1 introductif ou A2 intermédiaire",
        "Test de niveau initial obligatoire"
      ],
      teachingMethods: [
        "Blended learning avec 20% d'e-learning et 80% de formation en live",
        "Exposés théoriques et mises en situation",
        "Études de cas et jeux de rôles",
        "Supports pédagogiques personnalisés"
      ],
      evaluationMethods: [
        "Audit de niveau initial",
        "Mini-tests de compréhension réguliers",
        "Feuilles de présence et certificat de réalisation",
        "Épreuve de certification"
      ],
      accessibility: [
        "Formation accessible sous 2 semaines après inscription",
        "Adaptations possibles sur demande pour les personnes en situation de handicap",
        "Assistance à la connexion en cas de visioconférence via Microsoft Teams"
      ],
      certificationDetails: {
        name: 'Italien professionnel',
        code: 'RS6140',
        organization: 'Lilate',
        organizationUrl: 'https://www.lilate.org/',
        description: 'Cette formation prépare à la certification « Italien professionnel » enregistrée à France Compétences sous le numéro RS6140 par l\'organisme certificateur Lilate pour une durée de 3 ans en date du 12-03-2024',
        dureeEnregistrement: '3',
        dateEnregistrement: '24-10-2022',
        examDetails: {
          format: [
            'Mise en situation sous forme d\'un échange continu avec l\'évaluateur sous le mode de la communication simulant des interactions de premier niveau, la retranscription d\'un message écrit, et des réponses écrites via l\'interface de communication et avec des consultations d\'extraits, suivies de questions/réponses'
          ],
          successRate: 'En attente'
        }
      },
      reasons: [
        {
          title: 'Ouverture internationale',
          description: 'Accédez à de nouvelles opportunités professionnelles à l\'international',
          icon: 'Globe'
        },
        {
          title: 'Efficacité professionnelle',
          description: 'Communiquez efficacement avec vos interlocuteurs italophones',
          icon: 'MessageSquare'
        },
        {
          title: 'Progression garantie',
          description: 'Développez rapidement vos compétences grâce à une méthode éprouvée',
          icon: 'TrendingUp'
        },
        {
          title: 'Certification reconnue',
          description: 'Validez votre niveau avec une certification officielle',
          icon: 'Award'
        }
      ],
      icon: '🇮🇹'
    },
    {
      id: 'chinois-professionnel',
      title: 'Chinois',
      shortDescription: 'Développez des automatismes de communication en chinois et renforcez votre impact professionnel dans un contexte sinophone.',
      fullDescription: 'Développez des automatismes de communication en chinois et renforcez votre impact professionnel dans un contexte sinophone.',
      slug: 'formation-chinois-professionnel',
      category: 'Langues',
      image: 'https://irp.cdn-website.com/e0ab763a/dms3rep/multi/Chinois.png',
      duration: '30 heures',
      formateur: '',
      formationType: 'certifiante',
      prices: {
        individuel: { price: '1 950€*', label: 'Éligible CPF' },
        collectif: { price: '1 250€*', label: 'Éligible CPF' }
      },
      dates: {
        collectif: [],
        individuel: []
      },
      cpfEligible: true,
      features: [
        'Communication professionnelle',
        'Vocabulaire métier',
        'Préparation aux certifications',
        'Mise en situation pratique'
      ],
      certifications: [
        'Lilate - RS6142'
      ],
      objectives: [
        "Accueillir une personne en chinois et comprendre ses besoins",
        "Recueillir des informations et poser des questions en chinois",
        "Transmettre des consignes et des instructions dans un cadre professionnel",
        "Consulter des documents en chinois et comprendre des messages audios"
      ],
      program: [
        {
          title: "Module 1 : Accueillir une personne",
          items: [
            "Se présenter et identifier son interlocuteur",
            "Comprendre et répondre à une demande simple",
            "Vocabulaire de l'accueil et formules de politesse"
          ]
        },
        {
          title: "Module 2 : Recueillir des informations",
          items: [
            "Poser des questions de manière appropriée",
            "Reformuler pour confirmer sa compréhension",
            "Prendre des notes efficaces en chinois"
          ]
        },
        {
          title: "Module 3 : Transmettre des consignes et informations",
          items: [
            "Donner des instructions en chinois",
            "Échanger avec un collègue ou un groupe",
            "Vérifier la compréhension mutuelle"
          ]
        },
        {
          title: "Module 4 : Consulter des documents et assister à des réunions",
          items: [
            "Comprendre des documents professionnels en chinois",
            "Participer activement à des réunions en chinois",
            "Comprendre et réagir à des messages audio"
          ]
        }
      ],
      publicVise: [
        "Toute personne amenée à communiquer en chinois dans un contexte professionnel",
        "Professionnels travaillant avec des partenaires sinophones"
      ],
      prerequis: [
        "Niveau A1 introductif ou A2 intermédiaire",
        "Test de niveau initial obligatoire"
      ],
      teachingMethods: [
        "Blended learning avec 20% d'e-learning et 80% de formation en live",
        "Exposés théoriques et mises en situation",
        "Études de cas et jeux de rôles",
        "Supports pédagogiques personnalisés"
      ],
      evaluationMethods: [
        "Audit de niveau initial",
        "Mini-tests de compréhension réguliers",
        "Feuilles de présence et certificat de réalisation",
        "Épreuve de certification"
      ],
      accessibility: [
        "Formation accessible sous 2 semaines après inscription",
        "Adaptations possibles sur demande pour les personnes en situation de handicap",
        "Assistance à la connexion en cas de visioconférence via Microsoft Teams"
      ],
      certificationDetails: {
        name: 'Chinois professionnel',
        code: 'RS6142',
        organization: 'Lilate',
        organizationUrl: 'https://www.lilate.org/',
        description: 'Cette formation prépare à la certification « Chinois professionnel » enregistrée à France Compétences sous le numéro RS6142 par l\'organisme certificateur Lilate pour une durée de 3 ans en date du 19-03-2024',
        dureeEnregistrement: '3',
        dateEnregistrement: '24-10-2022',
        examDetails: {
          format: [
            'Mise en situation sous forme d\'un échange continu avec l\'évaluateur sous le mode de la communication simulant des interactions de premier niveau, la retranscription d\'un message écrit, et des réponses écrites via l\'interface de communication et avec des consultations d\'extraits, suivies de questions/réponses'
          ],
          successRate: 'En attente'
        }
      },
      reasons: [
        {
          title: 'Ouverture internationale',
          description: 'Accédez à de nouvelles opportunités professionnelles à l\'international',
          icon: 'Globe'
        },
        {
          title: 'Efficacité professionnelle',
          description: 'Communiquez efficacement avec vos interlocuteurs sinophones',
          icon: 'MessageSquare'
        },
        {
          title: 'Progression garantie',
          description: 'Développez rapidement vos compétences grâce à une méthode éprouvée',
          icon: 'TrendingUp'
        },
        {
          title: 'Certification reconnue',
          description: 'Validez votre niveau avec une certification officielle',
          icon: 'Award'
        }
      ],
      icon: '🇨🇳'
    },
    {
      id: 'japonais-professionnel',
      title: 'Japonais',
      shortDescription: 'Développez des automatismes de communication en japonais et renforcez votre impact professionnel dans un contexte japonophone.',
      fullDescription: 'Développez des automatismes de communication en japonais et renforcez votre impact professionnel dans un contexte japonophone.',
      slug: 'formation-japonais-professionnel',
      category: 'Langues',
      image: 'https://irp.cdn-website.com/e0ab763a/dms3rep/multi/Japonais.png',
      duration: '30 heures',
      formateur: '',
      formationType: 'certifiante',
      prices: {
        individuel: { price: '1 950€*', label: 'Éligible CPF' },
        collectif: { price: '1 250€*', label: 'Éligible CPF' }
      },
      dates: {
        collectif: [],
        individuel: []
      },
      cpfEligible: true,
      features: [
        'Communication professionnelle',
        'Vocabulaire métier',
        'Préparation aux certifications',
        'Mise en situation pratique'
      ],
      certifications: [
        'Lilate - RS6141'
      ],
      objectives: [
        "Accueillir une personne en japonais et comprendre ses besoins",
        "Recueillir des informations et poser des questions en japonais",
        "Transmettre des consignes et des instructions dans un cadre professionnel",
        "Consulter des documents en japonais et comprendre des messages audios"
      ],
      program: [
        {
          title: "Module 1 : Accueillir une personne",
          items: [
            "Se présenter et identifier son interlocuteur",
            "Comprendre et répondre à une demande simple",
            "Vocabulaire de l'accueil et formules de politesse"
          ]
        },
        {
          title: "Module 2 : Recueillir des informations",
          items: [
            "Poser des questions de manière appropriée",
            "Reformuler pour confirmer sa compréhension",
            "Prendre des notes efficaces en japonais"
          ]
        },
        {
          title: "Module 3 : Transmettre des consignes et informations",
          items: [
            "Donner des instructions en japonais",
            "Échanger avec un collègue ou un groupe",
            "Vérifier la compréhension mutuelle"
          ]
        },
        {
          title: "Module 4 : Consulter des documents et assister à des réunions",
          items: [
            "Comprendre des documents professionnels en japonais",
            "Participer activement à des réunions en japonais",
            "Comprendre et réagir à des messages audio"
          ]
        }
      ],
      publicVise: [
        "Toute personne amenée à communiquer en japonais dans un contexte professionnel",
        "Professionnels travaillant avec des partenaires japonophones"
      ],
      prerequis: [
        "Niveau A1 introductif ou A2 intermédiaire",
        "Test de niveau initial obligatoire"
      ],
      teachingMethods: [
        "Blended learning avec 20% d'e-learning et 80% de formation en live",
        "Exposés théoriques et mises en situation",
        "Études de cas et jeux de rôles",
        "Supports pédagogiques personnalisés"
      ],
      evaluationMethods: [
        "Audit de niveau initial",
        "Mini-tests de compréhension réguliers",
        "Feuilles de présence et certificat de réalisation",
        "Épreuve de certification"
      ],
      accessibility: [
        "Formation accessible sous 2 semaines après inscription",
        "Adaptations possibles sur demande pour les personnes en situation de handicap",
        "Assistance à la connexion en cas de visioconférence via Microsoft Teams"
      ],
      certificationDetails: {
        name: 'Japonais professionnel',
        code: 'RS6141',
        organization: 'Lilate',
        organizationUrl: 'https://www.lilate.org/',
        description: 'Cette formation prépare à la certification « Japonais professionnel » enregistrée à France Compétences sous le numéro RS6141 par l\'organisme certificateur Lilate pour une durée de 3 ans en date du 26-03-2024',
        dureeEnregistrement: '3',
        dateEnregistrement: '24-10-2022',
        examDetails: {
          format: [
            'Mise en situation sous forme d\'un échange continu avec l\'évaluateur sous le mode de la communication simulant des interactions de premier niveau, la retranscription d\'un message écrit, et des réponses écrites via l\'interface de communication et avec des consultations d\'extraits, suivies de questions/réponses'
          ],
          successRate: 'En attente'
        }
      },
      reasons: [
        {
          title: 'Ouverture internationale',
          description: 'Accédez à de nouvelles opportunités professionnelles à l\'international',
          icon: 'Globe'
        },
        {
          title: 'Efficacité professionnelle',
          description: 'Communiquez efficacement avec vos interlocuteurs japonophones',
          icon: 'MessageSquare'
        },
        {
          title: 'Progression garantie',
          description: 'Développez rapidement vos compétences grâce à une méthode éprouvée',
          icon: 'TrendingUp'
        },
        {
          title: 'Certification reconnue',
          description: 'Validez votre niveau avec une certification officielle',
          icon: 'Award'
        }
      ],
      icon: '🇯🇵'
    },
    {
      id: 'portugais-professionnel',
      title: 'Portugais',
      shortDescription: 'Développez des automatismes de communication en portugais et renforcez votre impact professionnel dans un contexte lusophone.',
      fullDescription: 'Développez des automatismes de communication en portugais et renforcez votre impact professionnel dans un contexte lusophone.',
      slug: 'formation-portugais-professionnel',
      category: 'Langues',
      image: 'https://irp.cdn-website.com/e0ab763a/dms3rep/multi/Portugais.png',
      duration: '30 heures',
      formateur: '',
      formationType: 'certifiante',
      prices: {
        individuel: { price: '1 950€*', label: 'Éligible CPF' },
        collectif: { price: '1 250€*', label: 'Éligible CPF' }
      },
      dates: {
        collectif: [],
        individuel: []
      },
      cpfEligible: true,
      features: [
        'Communication professionnelle',
        'Vocabulaire métier',
        'Préparation aux certifications',
        'Mise en situation pratique'
      ],
      certifications: [
        'Lilate - RS6143'
      ],
      objectives: [
        "Accueillir une personne en portugais et comprendre ses besoins",
        "Recueillir des informations et poser des questions en portugais",
        "Transmettre des consignes et des instructions dans un cadre professionnel",
        "Consulter des documents en portugais et comprendre des messages audios"
      ],
      program: [
        {
          title: "Module 1 : Accueillir une personne",
          items: [
            "Se présenter et identifier son interlocuteur",
            "Comprendre et répondre à une demande simple",
            "Vocabulaire de l'accueil et formules de politesse"
          ]
        },
        {
          title: "Module 2 : Recueillir des informations",
          items: [
            "Poser des questions de manière appropriée",
            "Reformuler pour confirmer sa compréhension",
            "Prendre des notes efficaces en portugais"
          ]
        },
        {
          title: "Module 3 : Transmettre des consignes et informations",
          items: [
            "Donner des instructions en portugais",
            "Échanger avec un collègue ou un groupe",
            "Vérifier la compréhension mutuelle"
          ]
        },
        {
          title: "Module 4 : Consulter des documents et assister à des réunions",
          items: [
            "Comprendre des documents professionnels en portugais",
            "Participer activement à des réunions en portugais",
            "Comprendre et réagir à des messages audio"
          ]
        }
      ],
      publicVise: [
        "Toute personne amenée à communiquer en portugais dans un contexte professionnel",
        "Professionnels travaillant avec des partenaires lusophones"
      ],
      prerequis: [
        "Niveau A1 introductif ou A2 intermédiaire",
        "Test de niveau initial obligatoire"
      ],
      teachingMethods: [
        "Blended learning avec 20% d'e-learning et 80% de formation en live",
        "Exposés théoriques et mises en situation",
        "Études de cas et jeux de rôles",
        "Supports pédagogiques personnalisés"
      ],
      evaluationMethods: [
        "Audit de niveau initial",
        "Mini-tests de compréhension réguliers",
        "Feuilles de présence et certificat de réalisation",
        "Épreuve de certification"
      ],
      accessibility: [
        "Formation accessible sous 2 semaines après inscription",
        "Adaptations possibles sur demande pour les personnes en situation de handicap",
        "Assistance à la connexion en cas de visioconférence via Microsoft Teams"
      ],
      certificationDetails: {
        name: 'Portugais professionnel',
        code: 'RS6143',
        organization: 'Lilate',
        organizationUrl: 'https://www.lilate.org/',
        description: 'Cette formation prépare à la certification « Portugais professionnel » enregistrée à France Compétences sous le numéro RS6143 par l\'organisme certificateur Lilate pour une durée de 3 ans en date du 02-04-2024',
        dureeEnregistrement: '3',
        dateEnregistrement: '24-10-2022',
        examDetails: {
          format: [
            'Mise en situation sous forme d\'un échange continu avec l\'évaluateur sous le mode de la communication simulant des interactions de premier niveau, la retranscription d\'un message écrit, et des réponses écrites via l\'interface de communication et avec des consultations d\'extraits, suivies de questions/réponses'
          ],
          successRate: '100%'
        }
      },
      reasons: [
        {
          title: 'Ouverture internationale',
          description: 'Accédez à de nouvelles opportunités professionnelles à l\'international',
          icon: 'Globe'
        },
        {
          title: 'Efficacité professionnelle',
          description: 'Communiquez efficacement avec vos interlocuteurs lusophones',
          icon: 'MessageSquare'
        },
        {
          title: 'Progression garantie',
          description: 'Développez rapidement vos compétences grâce à une méthode éprouvée',
          icon: 'TrendingUp'
        },
        {
          title: 'Certification reconnue',
          description: 'Validez votre niveau avec une certification officielle',
          icon: 'Award'
        }
      ],
      icon: '🇵🇹'
    },
    {
      id: 'russe-professionnel',
      title: 'Russe',
      shortDescription: 'Développez des automatismes de communication en russe et renforcez votre impact professionnel dans un contexte russophone.',
      fullDescription: 'Développez des automatismes de communication en russe et renforcez votre impact professionnel dans un contexte russophone.',
      slug: 'formation-russe-professionnel',
      category: 'Langues',
      image: 'https://irp.cdn-website.com/e0ab763a/dms3rep/multi/Russe.png',
      duration: '30 heures',
      formateur: '',
      formationType: 'certifiante',
      prices: {
        individuel: { price: '1 950€*', label: 'Éligible CPF' },
        collectif: { price: '1 250€*', label: 'Éligible CPF' }
      },
      dates: {
        collectif: [],
        individuel: []
      },
      cpfEligible: true,
      features: [
        'Communication professionnelle',
        'Vocabulaire métier',
        'Préparation aux certifications',
        'Mise en situation pratique'
      ],
      certifications: [
        'Lilate - RS6146'
      ],
      objectives: [
        "Accueillir une personne en russe et comprendre ses besoins",
        "Recueillir des informations et poser des questions en russe",
        "Transmettre des consignes et des instructions dans un cadre professionnel",
        "Consulter des documents en russe et comprendre des messages audios"
      ],
      program: [
        {
          title: "Module 1 : Accueillir une personne",
          items: [
            "Se présenter et identifier son interlocuteur",
            "Comprendre et répondre à une demande simple",
            "Vocabulaire de l'accueil et formules de politesse"
          ]
        },
        {
          title: "Module 2 : Recueillir des informations",
          items: [
            "Poser des questions de manière appropriée",
            "Reformuler pour confirmer sa compréhension",
            "Prendre des notes efficaces en russe"
          ]
        },
        {
          title: "Module 3 : Transmettre des consignes et informations",
          items: [
            "Donner des instructions en russe",
            "Échanger avec un collègue ou un groupe",
            "Vérifier la compréhension mutuelle"
          ]
        },
        {
          title: "Module 4 : Consulter des documents et assister à des réunions",
          items: [
            "Comprendre des documents professionnels en russe",
            "Participer activement à des réunions en russe",
            "Comprendre et réagir à des messages audio"
          ]
        }
      ],
      publicVise: [
        "Toute personne amenée à communiquer en russe dans un contexte professionnel",
        "Professionnels travaillant avec des partenaires russophones"
      ],
      prerequis: [
        "Niveau A1 introductif ou A2 intermédiaire",
        "Test de niveau initial obligatoire"
      ],
      teachingMethods: [
        "Blended learning avec 20% d'e-learning et 80% de formation en live",
        "Exposés théoriques et mises en situation",
        "Études de cas et jeux de rôles",
        "Supports pédagogiques personnalisés"
      ],
      evaluationMethods: [
        "Audit de niveau initial",
        "Mini-tests de compréhension réguliers",
        "Feuilles de présence et certificat de réalisation",
        "Épreuve de certification"
      ],
      accessibility: [
        "Formation accessible sous 2 semaines après inscription",
        "Adaptations possibles sur demande pour les personnes en situation de handicap",
        "Assistance à la connexion en cas de visioconférence via Microsoft Teams"
      ],
      certificationDetails: {
        name: 'Russe professionnel',
        code: 'RS6146',
        organization: 'Lilate',
        organizationUrl: 'https://www.lilate.org/',
        description: 'Cette formation prépare à la certification « Russe professionnel » enregistrée à France Compétences sous le numéro RS6146 par l\'organisme certificateur Lilate pour une durée de 3 ans en date du 09-04-2024',
        dureeEnregistrement: '3',
        dateEnregistrement: '24-10-2022',
        examDetails: {
          format: [
            'Mise en situation sous forme d\'un échange continu avec l\'évaluateur sous le mode de la communication simulant des interactions de premier niveau, la retranscription d\'un message écrit, et des réponses écrites via l\'interface de communication et avec des consultations d\'extraits, suivies de questions/réponses'
          ],
          successRate: 'En attente'
        }
      },
      reasons: [
        {
          title: 'Ouverture internationale',
          description: 'Accédez à de nouvelles opportunités professionnelles à l\'international',
          icon: 'Globe'
        },
        {
          title: 'Efficacité professionnelle',
          description: 'Communiquez efficacement avec vos interlocuteurs russophones',
          icon: 'MessageSquare'
        },
        {
          title: 'Progression garantie',
          description: 'Développez rapidement vos compétences grâce à une méthode éprouvée',
          icon: 'TrendingUp'
        },
        {
          title: 'Certification reconnue',
          description: 'Validez votre niveau avec une certification officielle',
          icon: 'Award'
        }
      ],
      icon: '🇷🇺'
    },
    {
      id: 'langue-des-signes',
      title: 'Langue des Signes (LSF)',
      shortDescription: 'Développez des automatismes de communication en LSF et renforcez votre impact professionnel avec les personnes sourdes et malentendantes.',
      fullDescription: 'Acquérez les bases de la communication en Langue des Signes Française (LSF) pour interagir efficacement avec les personnes sourdes et malentendantes dans un contexte professionnel.',
      slug: 'formation-langue-des-signes',
      category: 'Langues',
      image: 'https://irp.cdn-website.com/e0ab763a/dms3rep/multi/LSF.png',
      duration: '30 heures',
      formateur: '',
      formationType: 'certifiante',
      prices: {
        individuel: { price: '1 950€*', label: 'Éligible CPF' },
        collectif: { price: '1 250€*', label: 'Éligible CPF' }
      },
      dates: {
        collectif: [],
        individuel: []
      },
      cpfEligible: true,
      features: [
        'Communication en LSF',
        'Vocabulaire professionnel',
        'Préparation aux certifications',
        'Mise en situation pratique'
      ],
      certifications: [
        'Lilate - RS6796'
      ],
      objectives: [
        "Accueillir une personne en LSF et comprendre ses besoins",
        "Recueillir des informations et poser des questions en LSF",
        "Transmettre des consignes et des instructions dans un cadre professionnel",
        "Consulter des documents et comprendre des messages visuels"
      ],
      program: [
        {
          title: "Module 1 : Accueillir une personne",
          items: [
            "Se présenter et identifier son interlocuteur",
            "Comprendre et répondre à une demande simple",
            "Vocabulaire de l'accueil et formules de politesse"
          ]
        },
        {
          title: "Module 2 : Recueillir des informations",
          items: [
            "Poser des questions de manière appropriée",
            "Reformuler pour confirmer sa compréhension",
            "Prendre des notes efficaces en LSF"
          ]
        },
        {
          title: "Module 3 : Transmettre des consignes et informations",
          items: [
            "Donner des instructions en LSF",
            "Échanger avec un collègue ou un groupe",
            "Vérifier la compréhension mutuelle"
          ]
        },
        {
          title: "Module 4 : Consulter des documents et assister à des réunions",
          items: [
            "Comprendre des documents professionnels",
            "Participer activement à des réunions en LSF",
            "Comprendre et réagir à des messages visuels"
          ]
        }
      ],
      publicVise: [
        "Toute personne amenée à communiquer en LSF dans un contexte professionnel",
        "Professionnels travaillant avec des personnes sourdes et malentendantes"
      ],
      prerequis: [
        "Niveau A1 introductif ou A2 intermédiaire",
        "Test de niveau initial obligatoire"
      ],
      teachingMethods: [
        "Blended learning avec 20% d'e-learning et 80% de formation en live",
        "Exposés théoriques et mises en situation",
        "Études de cas et jeux de rôles",
        "Supports pédagogiques personnalisés"
      ],
      evaluationMethods: [
        "Audit de niveau initial",
        "Mini-tests de compréhension réguliers",
        "Feuilles de présence et certificat de réalisation",
        "Épreuve de certification"
      ],
      accessibility: [
        "Formation accessible sous 2 semaines après inscription",
        "Adaptations possibles sur demande pour les personnes en situation de handicap",
        "Assistance à la connexion en cas de visioconférence via Microsoft Teams"
      ],
      certificationDetails: {
        name: 'Langue des signes française',
        code: 'RS6796',
        organization: 'Lilate',
        organizationUrl: 'https://www.lilate.org/',
        description: 'Cette formation prépare à la certification « Langue des signes française » enregistrée à France Compétences sous le numéro RS6796 par l\'organisme certificateur Lilate pour une durée de 3 ans en date du 16-04-2024',
        dureeEnregistrement: '3',
        dateEnregistrement: '01-10-2024',
        examDetails: {
          format: [
            'Mise en situation sous forme d\'un échange continu avec l\'évaluateur sous le mode de la communication simulant des interactions de premier niveau, la retranscription d\'un message écrit, et des réponses écrites via l\'interface de communication et avec des consultations d\'extraits, suivies de questions/réponses'
          ],
          successRate: 'En attente'
        }
      },
      reasons: [
        {
          title: 'Ouverture internationale',
          description: 'Accédez à de nouvelles opportunités professionnelles à l\'international',
          icon: 'Globe'
        },
        {
          title: 'Efficacité professionnelle',
          description: 'Communiquez efficacement avec les personnes sourdes et malentendantes',
          icon: 'MessageSquare'
        },
        {
          title: 'Progression garantie',
          description: 'Développez rapidement vos compétences grâce à une méthode éprouvée',
          icon: 'TrendingUp'
        },
        {
          title: 'Certification reconnue',
          description: 'Validez votre niveau avec une certification officielle',
          icon: 'Award'
        }
      ],
      icon: '🤟'
    },
      
  ] as Formation[]
};

export default formationsConfig;