// Configuration centralisée des statistiques FORMAPRO
export const STATS_CONFIG = {
  // Statistiques principales
  apprenantsFormes: 415,
  satisfaction: 98,
  financement: 100,
  recommandation: 100,
  expertiseFormateurs: 98,
  
  // Métadonnées
  apprenantsFormesLabel: "apprenants formés",
  satisfactionLabel: "ont acquis de nouvelles compétences",
  financementLabel: "finançable",
  recommandationLabel: "recommandent nos formations",
  expertiseFormateursLabel: "soulignent l'expertise des formateurs",
  
  // Animation
  animationDuration: 2000, // 2 secondes
  animationInterval: 20, // Mise à jour toutes les 20ms
};

// Fonction utilitaire pour obtenir les statistiques
export const getStats = () => STATS_CONFIG;

// Fonction pour mettre à jour les statistiques (pour usage futur)
export const updateStats = (newStats: Partial<typeof STATS_CONFIG>) => {
  Object.assign(STATS_CONFIG, newStats);
};
