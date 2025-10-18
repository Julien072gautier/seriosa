# Checklist - Mise à jour des formations

## 📋 À chaque création ou modification de formation, mettre à jour :

### 1. **Fichier de configuration principal**
- [ ] `app/lib/config/formations.ts`
  - Ajouter/modifier la formation dans le tableau `formations`
  - Vérifier que tous les champs sont remplis (title, slug, description, etc.)
  - S'assurer que le `slug` correspond à l'URL souhaitée

### 2. **SEO et métadonnées**
- [ ] `app/lib/seo.ts`
  - Ajouter/modifier l'entrée dans `formationData` avec le bon slug
  - Mettre à jour : name, shortDescription, fullDescription, keywords
  - Vérifier l'image et la certification
  - S'assurer que l'URL pointe vers `/formation/[slug]`

- [ ] `app/sitemap.ts`
  - Ajouter/modifier l'URL de la formation dans le sitemap
  - Vérifier que l'URL correspond au slug de la formation

### 3. **Composants d'affichage**
- [ ] `app/components/FormationPage.tsx`
  - Vérifier que les métadonnées SEO sont correctement utilisées
  - S'assurer que le titre et la description s'affichent correctement

- [ ] `app/components/FormationCard.tsx`
  - Vérifier l'affichage des cartes de formation
  - S'assurer que les liens pointent vers les bonnes URLs

- [ ] `app/components/HomePage.tsx`
  - Mettre à jour la section "top 3" si nécessaire
  - Vérifier les liens vers les nouvelles formations

### 4. **Formulaire de contact**
- [ ] `app/components/ContactForm.tsx`
  - Vérifier que le nom de la formation est correctement transmis
  - Tester l'envoi d'email avec le nom de formation

### 5. **Pages de listing**
- [ ] `app/formations/page.tsx`
  - Vérifier que la nouvelle formation apparaît dans la liste
  - S'assurer que les filtres fonctionnent correctement

### 6. **Tests et validation**
- [ ] Tester l'affichage de la page de formation
- [ ] Vérifier que les liens fonctionnent
- [ ] Tester le formulaire de contact
- [ ] Vérifier les métadonnées SEO (title, description)
- [ ] Tester la navigation depuis la page d'accueil

### 7. **Déploiement**
- [ ] Vérifier que le build fonctionne : `npm run build`
- [ ] Tester en local : `npm run dev`
- [ ] Déployer sur l'environnement de production

## 🔍 Vérifications spécifiques pour les formations RSE

### Formations non-certifiantes
- [ ] Vérifier que `formationType: 'non-certifiante'`
- [ ] S'assurer que `cpfEligible: false`
- [ ] Vérifier la section accessibilité
- [ ] S'assurer qu'aucune certification n'est affichée

### Formations certifiantes
- [ ] Vérifier que `formationType: 'certifiante'`
- [ ] S'assurer que `cpfEligible: true` si applicable
- [ ] Vérifier les détails de certification
- [ ] S'assurer que les sections certification s'affichent

## 📝 Notes importantes

- **Slugs** : Doivent être cohérents entre `formations.ts`, `seo.ts` et `sitemap.ts`
- **Images** : Utiliser des URLs d'images valides (Unsplash ou images locales)
- **Descriptions** : Les descriptions courtes et longues doivent être différentes
- **Mots-clés** : Inclure des mots-clés pertinents pour le SEO
- **Accessibilité** : Vérifier que le contenu est accessible et bien formaté

## 🚨 Erreurs courantes à éviter

- Oublier de mettre à jour le sitemap
- Incohérence entre les slugs dans différents fichiers
- Images cassées ou non accessibles
- Métadonnées SEO manquantes ou incorrectes
- Liens cassés vers les formations
- Oublier de tester le formulaire de contact
