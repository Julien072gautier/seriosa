# Gestionnaire de Cookies FormaPro

## Vue d'ensemble

Le gestionnaire de cookies FormaPro est un système complet de gestion des consentements conforme au RGPD, intégré avec Google Consent Mode v2.

## Fonctionnalités

- ✅ **Conformité RGPD** : Tous les cookies sont refusés par défaut
- ✅ **Google Consent Mode v2** : Intégration native avec Google Analytics et GTM
- ✅ **Interface utilisateur** : Bandeau de consentement + modale de préférences
- ✅ **Persistance** : Sauvegarde des préférences dans localStorage
- ✅ **Gestion des cookies** : Suppression automatique des cookies non autorisés

## Structure des fichiers

```
app/
├── lib/
│   └── consent-google.ts          # Logique de gestion des consentements
├── hooks/
│   └── useConsent.ts              # Hook React pour l'interface
├── components/
│   ├── CookieBanner.tsx           # Bandeau de consentement principal
│   ├── ManageCookies.tsx          # Bouton de gestion (footer)
│   └── ConsentInitializer.tsx     # Initialisation au chargement
└── layout.tsx                     # Intégration dans l'app
```

## Configuration par défaut

### Paramètres initiaux
```typescript
const DEFAULT_CONSENT = {
  ad_storage: 'denied',           // Publicité : REFUSÉ
  ad_user_data: 'denied',         // Données publicitaires : REFUSÉ
  ad_personalization: 'denied',   // Personnalisation pub : REFUSÉ
  analytics_storage: 'denied',    // Analytics : REFUSÉ
  functionality_storage: 'denied', // Fonctionnel : REFUSÉ
  personalization_storage: 'denied', // Personnalisation : REFUSÉ
  security_storage: 'granted',    // Sécurité : ACCORDÉ (seul)
};
```

### Préférences utilisateur
```typescript
const preferences = {
  analytics: false,      // Cookies analytiques
  advertising: false,    // Cookies publicitaires
  functional: false,     // Cookies fonctionnels
};
```

## Utilisation

### 1. Le bandeau s'affiche automatiquement
- Au premier visit sur le site
- Si aucune préférence n'est sauvegardée

### 2. Actions disponibles
- **Tout accepter** : Active tous les cookies
- **Tout refuser** : Garde seulement les cookies essentiels
- **Personnaliser** : Ouvre la modale de préférences

### 3. Modale de préférences
- Toggle pour chaque catégorie de cookies
- Cookies fonctionnels toujours actifs (requis)
- Sauvegarde automatique des choix

### 4. Bouton de gestion (footer)
- Permet de rouvrir la modale à tout moment
- Accessible depuis toutes les pages

## Intégration avec Google Analytics

Le système est automatiquement intégré avec :
- **Google Tag Manager** : Configuration des consentements
- **Google Analytics** : Respect des préférences utilisateur
- **Google Ads** : Gestion des cookies publicitaires

## Personnalisation

### Couleurs
Les couleurs peuvent être modifiées dans les composants :
- `CookieBanner.tsx` : Couleurs du bandeau et de la modale
- `ManageCookies.tsx` : Couleurs du bouton footer

### Textes
Tous les textes sont en français et peuvent être modifiés directement dans les composants.

### Cookies gérés
La liste des cookies à supprimer peut être étendue dans `consent-google.ts` :
```typescript
// Cookies analytiques
cookiesToRemove.push('_ga', '_gid', '_gat', '_gat_gtag_', '_gclid');

// Cookies publicitaires  
cookiesToRemove.push('_fbp', '_fbc', '_gcl_au', '_gcl_aw', '_gcl_dc');
```

## Tests

### Réinitialiser les consentements
```javascript
// Dans la console du navigateur
localStorage.removeItem('formapro_cookie_consent');
localStorage.removeItem('formapro_cookie_preferences');
location.reload();
```

### Vérifier les consentements
```javascript
// Voir les préférences actuelles
console.log(JSON.parse(localStorage.getItem('formapro_cookie_preferences')));

// Voir les signaux Google Consent
console.log(window.dataLayer);
```

## Conformité RGPD

- ✅ **Opt-in** : Consentement explicite requis
- ✅ **Granularité** : Choix par catégorie de cookies
- ✅ **Révocabilité** : Possibilité de modifier à tout moment
- ✅ **Transparence** : Information claire sur l'usage des cookies
- ✅ **Minimisation** : Seuls les cookies nécessaires sont utilisés

## Support

Pour toute question ou modification, contacter l'équipe de développement FormaPro.
