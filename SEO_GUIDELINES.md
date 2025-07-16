# Guide SEO - FormaPro by Accertif

## 🎯 Objectif
Ce guide présente les bonnes pratiques SEO mises en place pour optimiser le référencement naturel du site FormaPro by Accertif.

## 📋 Optimisations réalisées

### 1. **Uniformisation du domaine**
- ✅ Domaine principal : `formaprobyaccertif.fr`
- ✅ Correction de toutes les URLs dans le code
- ✅ Sitemap et robots.txt mis à jour

### 2. **Métadonnées optimisées**
- ✅ Balises title et description uniques pour chaque page
- ✅ Mots-clés ciblés et pertinents
- ✅ Open Graph et Twitter Cards configurés
- ✅ URLs canoniques définies

### 3. **Données structurées (JSON-LD)**
- ✅ Organisation éducative (EducationalOrganization)
- ✅ Cours de formation (Course)
- ✅ Informations de contact et horaires
- ✅ Évaluations et certifications

### 4. **Sitemap complet**
- ✅ Toutes les pages de formation incluses
- ✅ Priorités et fréquences de mise à jour définies
- ✅ Page de demande de formation ajoutée

### 5. **Maillage interne**
- ✅ Footer enrichi avec liens vers formations populaires
- ✅ Navigation interne optimisée
- ✅ Liens contextuels entre pages

## 🔧 Configuration technique

### Fichiers de configuration
- `app/lib/seo.ts` : Générateur de métadonnées SEO
- `app/lib/seo-config.ts` : Configuration centralisée
- `app/components/JsonLd.tsx` : Données structurées

### Variables d'environnement requises
```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GOOGLE_VERIFICATION=google-site-verification-code
```

## 📝 Bonnes pratiques pour l'équipe

### Ajouter une nouvelle formation

1. **Ajouter les données dans `app/lib/seo.ts`** :
```typescript
'nouvelle-formation': {
  name: 'Nouvelle Formation',
  shortDescription: 'Description courte optimisée SEO',
  fullDescription: 'Description complète pour les données structurées',
  keywords: ['mots-clés', 'pertinents', 'formation'],
  duration: '30 heures',
  price: '1950€',
  skills: ['Compétence 1', 'Compétence 2'],
  image: '/images/formations/nouvelle-formation-og.jpg',
  certification: 'Certification'
}
```

2. **Créer la page avec métadonnées** :
```typescript
import { getFormationMetadata } from '../../lib/seo'

export const metadata: Metadata = getFormationMetadata('nouvelle-formation')
```

3. **Ajouter au sitemap** :
```typescript
{
  url: `${baseUrl}/formation/nouvelle-formation`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.8,
}
```

### Optimiser les images
- ✅ Utiliser des balises alt descriptives
- ✅ Optimiser la taille des images
- ✅ Utiliser des formats modernes (WebP)
- ✅ Lazy loading pour les images

### Contenu SEO
- ✅ Titres H1 uniques par page
- ✅ Structure hiérarchique des titres (H1 > H2 > H3)
- ✅ Mots-clés naturels dans le contenu
- ✅ Liens internes pertinents

## 📊 Monitoring SEO

### Outils recommandés
- Google Search Console
- Google Analytics 4
- Lighthouse (performance)
- GTmetrix (vitesse)

### Métriques à surveiller
- Positionnement des mots-clés
- Taux de clics (CTR)
- Temps de chargement
- Core Web Vitals

## 🚀 Prochaines étapes

### Optimisations futures
- [ ] Ajouter des avis clients structurés
- [ ] Créer des pages de blog/articles
- [ ] Optimiser les images avec WebP
- [ ] Implémenter le lazy loading
- [ ] Ajouter des breadcrumbs structurés

### Maintenance
- [ ] Vérifier régulièrement les erreurs 404
- [ ] Mettre à jour le sitemap
- [ ] Surveiller les performances
- [ ] Analyser les mots-clés

## 📞 Support

Pour toute question sur le SEO :
- Consulter ce guide
- Vérifier la documentation Next.js
- Contacter l'équipe technique

---

*Dernière mise à jour : ${new Date().toLocaleDateString('fr-FR')}* 