import { useState, useEffect } from 'react';
import { STATS_CONFIG } from '../lib/stats-config';

export const useStatsAnimation = (isVisible: boolean) => {
  const [count1, setCount1] = useState(0); // apprenantsFormes
  const [count2, setCount2] = useState(0); // satisfaction
  const [count3, setCount3] = useState(0); // financement
  const [count4, setCount4] = useState(0); // recommandation
  const [count5, setCount5] = useState(0); // expertiseFormateurs

  useEffect(() => {
    if (isVisible) {
      const duration = STATS_CONFIG.animationDuration;
      const interval = STATS_CONFIG.animationInterval;
      
      // Counter pour apprenants formés
      let startTime1: number | null = null;
      const targetCount1 = STATS_CONFIG.hero.apprenantsFormes;
      const animateCount1 = (timestamp: number) => {
        if (!startTime1) startTime1 = timestamp;
        const progress = timestamp - startTime1;
        const percentage = Math.min(progress / duration, 1);
        setCount1(Math.floor(percentage * targetCount1));
        if (percentage < 1) {
          requestAnimationFrame(animateCount1);
        }
      };
      requestAnimationFrame(animateCount1);
      
      // Counter pour nouvelles compétences
      let startTime2: number | null = null;
      const targetCount2 = STATS_CONFIG.hero.nouvellesCompetences;
      const animateCount2 = (timestamp: number) => {
        if (!startTime2) startTime2 = timestamp;
        const progress = timestamp - startTime2;
        const percentage = Math.min(progress / duration, 1);
        setCount2(Math.floor(percentage * targetCount2));
        if (percentage < 1) {
          requestAnimationFrame(animateCount2);
        }
      };
      requestAnimationFrame(animateCount2);
      
      // Counter pour financement
      let startTime3: number | null = null;
      const targetCount3 = STATS_CONFIG.hero.financement;
      const animateCount3 = (timestamp: number) => {
        if (!startTime3) startTime3 = timestamp;
        const progress = timestamp - startTime3;
        const percentage = Math.min(progress / duration, 1);
        setCount3(Math.floor(percentage * targetCount3));
        if (percentage < 1) {
          requestAnimationFrame(animateCount3);
        }
      };
      requestAnimationFrame(animateCount3);
      
      // Counter pour recommandation
      let startTime4: number | null = null;
      const targetCount4 = STATS_CONFIG.recommandation;
      const animateCount4 = (timestamp: number) => {
        if (!startTime4) startTime4 = timestamp;
        const progress = timestamp - startTime4;
        const percentage = Math.min(progress / duration, 1);
        setCount4(Math.floor(percentage * targetCount4));
        if (percentage < 1) {
          requestAnimationFrame(animateCount4);
        }
      };
      requestAnimationFrame(animateCount4);
      
      // Counter pour expertise formateurs
      let startTime5: number | null = null;
      const targetCount5 = STATS_CONFIG.expertiseFormateurs;
      const animateCount5 = (timestamp: number) => {
        if (!startTime5) startTime5 = timestamp;
        const progress = timestamp - startTime5;
        const percentage = Math.min(progress / duration, 1);
        setCount5(Math.floor(percentage * targetCount5));
        if (percentage < 1) {
          requestAnimationFrame(animateCount5);
        }
      };
      requestAnimationFrame(animateCount5);
    }
  }, [isVisible]);

  return {
    count1, // apprenants formés
    count2, // satisfaction
    count3, // financement
    count4, // recommandation
    count5, // expertise formateurs
  };
};
