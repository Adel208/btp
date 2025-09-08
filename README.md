# 🏗️ BTP Pro - Site Web d'Agence de Construction

Un site web moderne et interactif pour une agence BTP avec des animations GSAP avancées et une charte graphique professionnelle.

## ✨ Fonctionnalités

### 🎨 Design & Interface
- **Charte graphique professionnelle** adaptée au secteur BTP
- **Navigation moderne et interactive** avec effet de transparence
- **Design responsive** optimisé pour tous les appareils
- **Typographie élégante** avec Google Fonts (Inter + Playfair Display)

### 🎭 Animations GSAP
- **Animations de chargement** fluides et élégantes
- **Effets de scroll** avec ScrollTrigger
- **Animations au hover** sur tous les éléments interactifs
- **Transitions parallax** sur l'image hero
- **Compteurs animés** pour les statistiques
- **Particules flottantes** décoratives

### 📱 Responsive Design
- **Mobile-first** approach
- **Menu hamburger** animé pour mobile
- **Grilles adaptatives** pour tous les écrans
- **Optimisation tactile** pour les interactions

## 🚀 Technologies Utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec variables CSS
- **JavaScript ES6+** - Interactions avancées
- **GSAP 3.12.2** - Animations professionnelles
- **Google Fonts** - Typographie premium
- **ScrollTrigger** - Animations au scroll

## 📁 Structure du Projet

```
btp/
├── index.html          # Page principale
├── styles.css          # Styles CSS
├── script.js           # Animations JavaScript
└── README.md           # Documentation
```

## 🎯 Sections du Site

1. **Hero** - Présentation principale avec CTA
2. **Services** - 6 services principaux du BTP
3. **Projets** - Galerie de réalisations récentes
4. **À Propos** - Histoire et statistiques de l'entreprise
5. **Contact** - Formulaire et informations de contact
6. **Footer** - Liens et informations complémentaires

## 🎨 Charte Graphique

### Couleurs
- **Primaire** : `#1a365d` (Bleu foncé professionnel)
- **Secondaire** : `#2d3748` (Gris foncé)
- **Accent** : `#f6ad55` (Orange construction)
- **Texte** : `#2d3748` / `#718096` / `#ffffff`

### Typographie
- **Titres** : Playfair Display (serif élégant)
- **Corps** : Inter (sans-serif moderne)

## 🚀 Installation & Utilisation

1. **Téléchargez** tous les fichiers dans un dossier
2. **Ouvrez** `index.html` dans votre navigateur
3. **Profitez** des animations et interactions !

### Pour le développement :
```bash
# Serveur local simple
python -m http.server 8000
# ou
npx serve .
```

## 📱 Compatibilité

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile (iOS/Android)

## 🎭 Animations Incluses

- **Chargement progressif** des éléments
- **Scroll smooth** entre sections
- **Effets parallax** sur l'image hero
- **Animations de cartes** au scroll
- **Compteurs animés** des statistiques
- **Hover effects** sur tous les éléments
- **Menu mobile** avec transitions fluides
- **Particules flottantes** décoratives

## 🔧 Personnalisation

### Modifier les couleurs :
Éditez les variables CSS dans `styles.css` :
```css
:root {
    --primary-color: #votre-couleur;
    --accent-color: #votre-accent;
}
```

### Ajouter des animations :
Utilisez GSAP dans `script.js` :
```javascript
gsap.to('.element', {
    duration: 1,
    x: 100,
    ease: 'power2.out'
});
```

## 📈 Performance

- **Optimisation des animations** GSAP
- **Lazy loading** des éléments
- **Pause automatique** quand l'onglet n'est pas visible
- **CSS optimisé** avec variables et transitions GPU

## 🎯 SEO & Accessibilité

- **Structure HTML sémantique**
- **Alt texts** pour les images
- **Navigation clavier** fonctionnelle
- **Contraste** respecté pour l'accessibilité

## 📞 Support

Pour toute question ou personnalisation, n'hésitez pas à modifier le code selon vos besoins !

---

**Développé avec ❤️ pour le secteur BTP**
