// Configuration centralisée des statistiques FORMAPRO
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
    apprenantsFormes: 415,
    nouvellesCompetences: 98, // Bottom affiche aussi "nouvelles compétences"
    recommandation: 100,
    expertiseFormateurs: 98,
    labels: {
      apprenantsFormes: "apprenants formés",
      nouvellesCompetences: "ont acquis de nouvelles compétences",
      recommandation: "recommandent nos formations",
      expertiseFormateurs: "soulignent l'expertise des formateurs"
    }
  }
};

// Fonction utilitaire pour obtenir les statistiques
export const getStats = () => STATS_CONFIG;

// Fonction pour mettre à jour les statistiques (pour usage futur)
export const updateStats = (newStats: Partial<typeof STATS_CONFIG>) => {
  Object.assign(STATS_CONFIG, newStats);
};
