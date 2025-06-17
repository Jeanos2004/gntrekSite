# 🏔️ GNTREK - Plateforme de Randonnées Guidées Premium

Une application web moderne et élégante pour la gestion et la réservation de randonnées guidées en montagne.

## ✨ Fonctionnalités

### 🎨 Design Premium
- **Interface moderne** avec glassmorphisme et animations fluides
- **Design responsive** optimisé pour tous les appareils
- **Thème sombre** avec gradients et effets visuels avancés
- **Animations Framer Motion** pour une expérience utilisateur immersive

### 🗺️ Pages Principales
- **🏠 Accueil** - Landing page avec présentation des services
- **📝 Inscription** - Formulaire d'inscription complet avec validation
- **💳 Paiement** - Système de paiement avec plans d'abonnement
- **🗺️ Carte Interactive** - Carte des randonnées avec filtres
- **ℹ️ Informations** - À propos, équipe et valeurs
- **📸 Galerie** - Galerie photos avec modal et filtres
- **⚙️ Administration** - Dashboard admin avec statistiques

### 🛠️ Technologies Utilisées

#### Frontend
- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique pour la robustesse
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations et transitions
- **Lucide React** - Icônes modernes
- **Radix UI** - Composants accessibles

#### Animations & Effets
- **GSAP** - Animations avancées
- **React Spring** - Animations physiques
- **React Three Fiber** - Effets 3D
- **Parallax** - Effets de profondeur

## 🚀 Installation

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation des dépendances
```bash
cd gntrek
npm install
```

### Lancement en développement
```bash
npm run dev
```

L'application sera accessible sur `http://localhost:3000`

### Build de production
```bash
npm run build
npm start
```

## 📁 Structure du Projet

```
gntrek/
├── src/
│   ├── app/                    # Pages Next.js (App Router)
│   │   ├── page.tsx           # Page d'accueil
│   │   ├── inscription/       # Page d'inscription
│   │   ├── paiement/          # Page de paiement
│   │   ├── carte/             # Carte interactive
│   │   ├── infos/             # Page d'informations
│   │   ├── galerie/           # Galerie photos
│   │   ├── admin/             # Dashboard admin
│   │   ├── layout.tsx         # Layout principal
│   │   └── globals.css        # Styles globaux
│   ├── components/            # Composants réutilisables
│   │   ├── layout/            # Composants de mise en page
│   │   │   └── Navbar.tsx     # Barre de navigation
│   │   └── ui/                # Composants UI
│   └── lib/                   # Utilitaires et configurations
├── public/                    # Assets statiques
│   └── images/               # Images du projet
├── tailwind.config.ts        # Configuration Tailwind
├── next.config.js            # Configuration Next.js
└── package.json              # Dépendances et scripts
```

## 🎨 Design System

### Couleurs
- **Primaire** : Bleu (`#3B82F6`) à Violet (`#8B5CF6`)
- **Fond** : Noir (`#0F172A`) avec gradients
- **Texte** : Blanc et gris clair
- **Accents** : Vert, Jaune, Rouge selon le contexte

### Typographie
- **Police** : Inter (Google Fonts)
- **Hiérarchie** : Titres, sous-titres, corps de texte
- **Tailles** : Responsive avec Tailwind

### Composants
- **Glassmorphisme** : Effet de verre avec backdrop-blur
- **Boutons** : Gradients avec hover effects
- **Cartes** : Bordures arrondies avec ombres
- **Formulaires** : Inputs stylisés avec focus states

## 🔧 Configuration

### Tailwind CSS
Le projet utilise Tailwind CSS avec une configuration personnalisée pour :
- Couleurs personnalisées
- Animations custom
- Utilitaires glassmorphisme
- Responsive design

### Framer Motion
Animations configurées pour :
- Transitions de page
- Effets de hover
- Animations d'entrée
- Micro-interactions

## 📱 Responsive Design

L'application est entièrement responsive avec :
- **Mobile First** : Optimisé pour les petits écrans
- **Tablet** : Adaptation pour tablettes
- **Desktop** : Interface complète pour grands écrans
- **Navigation** : Menu hamburger sur mobile

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Déployer le dossier .next
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔮 Roadmap

### Phase 1 - MVP ✅
- [x] Design system et composants
- [x] Pages principales
- [x] Responsive design
- [x] Animations de base

### Phase 2 - Fonctionnalités Avancées
- [ ] Intégration Firebase
- [ ] Authentification utilisateur
- [ ] Base de données temps réel
- [ ] Système de réservation

### Phase 3 - Optimisations
- [ ] PWA (Progressive Web App)
- [ ] SEO avancé
- [ ] Performance optimisations
- [ ] Tests automatisés

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👥 Équipe

- **Design & Développement** : GNTREK Team
- **Technologies** : Next.js, TypeScript, Tailwind CSS
- **Inspiration** : Design moderne et minimaliste

## 📞 Contact

- **Email** : contact@gntrek.fr
- **Site Web** : [gntrek.fr](https://gntrek.fr)
- **GitHub** : [github.com/gntrek](https://github.com/gntrek)

---

**GNTREK** - Découvrez la montagne autrement 🏔️
