// Configuration centralisée des statistiques Seriosa 2.0
export const STATS_CONFIG = {
  // Statistiques principales
  apprenantsFormes: 415,
  satisfaction: 98,
  nouvellesCompetences: 98,
  financement: 100,
  recommandation: 100,
  expertiseFormateurs: 98,
  
  // Métadonnées
  apprenantsFormesLabel: "apprenants formés",
  nouvellesCompetencesLabel: "ont acquis de nouvelles compétences",
  financementLabel: "finançable",
  recommandationLabel: "recommandent nos formations",
  expertiseFormateursLabel: "soulignent l'expertise des formateurs",
  
  // Animation
  animationDuration: 2000, // 2 secondes
  animationInterval: 20, // Mise à jour toutes les 20ms
  
  // Groupes de statistiques pour différents affichages
  hero: {
    apprenantsFormes: 415,
    nouvellesCompetences: 98, // Hero affiche "nouvelles compétences"
    financement: 100,
    labels: {
      apprenantsFormes: "apprenants formés",
      nouvellesCompetences: "ont acquis de nouvelles compétences", 
      financement: "finançable"
    }
  },
  
  bottom: {
    apprenantsFormes: 100, // 100 % de nos formations intègrent une approche RSE
    nouvellesCompetences: 280000, // 280 000 PME à accompagner dans la région Sud
    recommandation: 100, // 100% recommandent nos formations
    expertiseFormateurs: 70, // 70 % des jeunes actifs choisissent une entreprise engagée
    labels: {
      apprenantsFormes: "de nos formations intègrent une approche RSE",
      nouvellesCompetences: "PME à accompagner dans la région Sud",
      recommandation: "recommandent nos formations",
      expertiseFormateurs: "des jeunes actifs choisissent une entreprise engagée"
    }
  }
};

// Fonction utilitaire pour obtenir les statistiques
export const getStats = () => STATS_CONFIG;

// Fonction pour mettre à jour les statistiques (pour usage futur)
export const updateStats = (newStats: Partial<typeof STATS_CONFIG>) => {
  Object.assign(STATS_CONFIG, newStats);
};
