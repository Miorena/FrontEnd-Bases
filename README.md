# Learn bases of FrontEnd

Petit projet d'initiation aux bases du HTML et CSS, réalisé pour progresser sur le frontend. Il s'agit d'une page vitrine fictive ("DesignAcademy") sans direction artistique préétablie : l'objectif est avant tout de pratiquer les fondamentaux (structure sémantique, Flexbox, Grid, variables CSS) plutôt que d'obtenir un design fini.

## 🎯 Objectif du projet

Reprendre les bases HTML/CSS pas à pas, en construisant une page composant par composant (navbar, hero, section services...), afin de mieux comprendre *pourquoi* on écrit tel ou tel code, plutôt que de simplement reproduire un tutoriel.

## 🛠️ Technologies utilisées

- **HTML5** — structure sémantique (`header`, `main`, `section`, `nav`)
- **CSS3** — Flexbox, CSS Grid, variables CSS (custom properties), transitions
- **[Font Awesome](https://fontawesome.com/)** — icônes (via CDN)
- **Google Fonts** — police [Poppins](https://fonts.google.com/specimen/Poppins)
- Illustrations vectorielles [unDraw](https://undraw.co/illustrations)

## 📄 Structure de la page

- **Navbar** — logo, menu de navigation, bouton d'action, avec ombre douce et coins arrondis
- **Hero** — titre, texte de présentation, bouton CTA, illustration (mise en page deux colonnes via Flexbox)
- **Services** — 3 cartes (Design UI, HTML & CSS, Portfolio) alignées en grille via CSS Grid

## 🎨 Palette de couleurs

Palette monochromatique rouge/bordeaux, générée avec [Coolors](https://coolors.co/), gérée via variables CSS :

| Variable | Couleur | Usage |
|---|---|---|
| `--color-dark` | `#880d1e` | Éléments principaux (titre, logo, bouton CTA) |
| `--color-medium` | `#dd2d4a` | Éléments secondaires (liens, titres de section, icônes) |
| `--color-light` | `#f26a8d` | États hover |
| `--color-white` | `#ffffff` | Fond des cartes / header |
| `--color-background` | `#f7f7f7` | Fond général de la page |
| `--color-medium-gray` | `#777777` | Texte secondaire (paragraphes) |

## 📁 Fichiers

```
├── index.html
├── style.css
└── images/
    └── modern desktop computer-bro.png
```

## 🚀 Lancer le projet

Ouvrir `index.html` dans un navigateur, ou servir le dossier avec une extension type Live Server pour un rechargement automatique.

## 📚 Notions pratiquées

- Structure HTML sémantique et validité (ex : contenu correct d'un `<ul>`)
- Flexbox (alignement, répartition de l'espace avec `flex`)
- CSS Grid (`grid-template-columns`) pour une grille de cartes
- Variables CSS (`:root`, `var()`)
- `box-shadow`, `border-radius` pour un style "soft UI"
- Gestion d'images (`object-fit`, dimensionnement, centrage)
- Hiérarchie de couleurs et contraste/accessibilité
