# My React 16 App

Un projet minimal en React 16 avec :

- ✅ Composants React séparés
- ✅ Tests unitaires avec **Jest**
- ✅ Tests end-to-end avec **Playwright**
- ✅ Configuration Webpack + Babel

---

## 📦 Installation

```bash
npm install
```

---

## 🚀 Démarrage en développement

```bash
npm start
```

L'application sera disponible sur `http://localhost:8080`.

---

## ✅ Lancer les tests unitaires

```bash
npm test
```

> Les tests sont situés dans `src/__tests__/`.

---

## 🧪 Lancer les tests end-to-end (E2E)

```bash
npm run test:e2e
```

> Les tests sont situés dans `e2e/`.

⚠️ Assurez-vous que l'application est **lancée** sur `localhost:8080` avant d'exécuter les tests E2E.

---

## 📁 Structure du projet

```
my-react-app/
├── public/              # HTML de base
├── src/
│   ├── components/      # Composants React
│   ├── __tests__/       # Tests unitaires Jest
│   ├── styles/          # Fichiers CSS globaux
├── e2e/                 # Tests Playwright
├── webpack.config.js    # Configuration Webpack
├── playwright.config.js # Configuration Playwright
├── jest.config.js       # Configuration Jest
└── package.json
```

---

## 🧰 Dépendances principales

- **React 16.14**
- **Jest** pour les tests unitaires
- **Playwright** pour les tests E2E
- **Webpack** et **Babel** pour le bundling
