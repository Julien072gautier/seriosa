'use client';

import { useEffect } from 'react';
import { initializeGoogleConsent, loadConsentPreferences, updateGoogleConsent } from '../lib/consent-google';

/**
 * Composant pour initialiser le système de consentement au chargement de la page
 * Doit être chargé avant GTM pour configurer les consentements par défaut
 */
export default function ConsentInitializer() {
  useEffect(() => {
    // Initialiser Google Consent Mode avec les paramètres par défaut
    initializeGoogleConsent();
    
    // Charger les préférences sauvegardées si elles existent
    const savedPreferences = loadConsentPreferences();
    if (savedPreferences) {
      // Appliquer les préférences sauvegardées
      updateGoogleConsent(savedPreferences);
    }
  }, []);

  // Ce composant ne rend rien visuellement
  return null;
}
