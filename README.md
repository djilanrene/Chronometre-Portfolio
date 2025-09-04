# Chronometre

![License](https://img.shields.io/badge/license-MIT-blue.svg)![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

> Un chronomètre simple et fonctionnel, entièrement réalisé en HTML, CSS et JavaScript pur, avec des contrôles au clavier.

Ce projet est une application web de chronomètre qui permet de mesurer le temps écoulé avec précision. L'interface est épurée et responsive, et l'application peut être contrôlée à la fois par la souris et par des raccourcis clavier intuitifs.

---

## 📋 Table des Matières

1.  [Aperçu du Projet](#-aperçu-du-projet)
2.  [Fonctionnalités](#-fonctionnalités)
3.  [Technologies Utilisées](#-technologies-utilisées)
4.  [Installation et Lancement](#-installation-et-lancement)
5.  [Utilisation](#-utilisation)
6.  [Défis et Apprentissages](#-défis-et-apprentissages)
7.  [Améliorations Possibles](#-améliorations-possibles)
8.  [Auteur](#-auteur)
9.  [Licence](#-licence)

---

## 🚀 Aperçu du Projet

Ce chronomètre a été développé comme un exercice pratique pour maîtriser les bases de la manipulation du DOM et de la gestion des événements en JavaScript.

*(Conseil : Vous pouvez convertir votre vidéo de démo en GIF avec un outil en ligne comme Ezgif et l'insérer ici en remplaçant le lien `demo.gif`)*

![GIF de démonstration du projet](./demo.gif)
*Démonstration des fonctionnalités de démarrage, d'arrêt et de réinitialisation du chronomètre.*

---

## ✨ Fonctionnalités

*   **Démarrage du chronomètre** : Lance le comptage du temps.
*   **Arrêt du chronomètre** : Met le temps en pause à sa valeur actuelle.
*   **Réinitialisation** : Remet le compteur à zéro.
*   **Affichage détaillé** : Le temps est affiché en heures, minutes, secondes et dixièmes de seconde (ms).
*   **Raccourcis clavier** :
    *   `Barre d'espace` pour **Démarrer**.
    *   `Entrée` pour **Arrêter**.
    *   `0` pour **Réinitialiser**.

---

## 🛠️ Technologies Utilisées

Ce projet a été construit sans aucun framework, en utilisant uniquement les technologies web de base.

*   **Frontend**
    *   HTML5
    *   CSS3 (avec une utilisation de Flexbox pour le layout responsive)
    *   JavaScript (ES6+)
*   **Outils de développement**
    *   Git & GitHub pour le versioning

---

## ⚙️ Installation et Lancement

Le projet est entièrement statique et ne nécessite aucune installation de dépendances.

1.  **Clonez le dépôt :**
    ```bash
    git clone https://github.com/djilanrene/Chronometre-Portfolio.git
    ```

2.  **Accédez au dossier du projet :**
    ```bash
    cd Chronometre-Portfolio
    ```

3.  **Ouvrez le fichier `index.html` :**
    Ouvrez simplement le fichier `index.html` dans votre navigateur web. L'application est prête à être utilisée.

---

## 📖 Utilisation

Une fois la page ouverte, interagissez avec le chronomètre via les boutons ou le clavier :

*   **Bouton "Start" / Touche `Espace`** : Démarre le chronomètre. Le bouton est désactivé pendant le fonctionnement pour éviter les lancements multiples.
*   **Bouton "Stop" / Touche `Entrée`** : Arrête le chronomètre. Le bouton "Start" est alors réactivé.
*   **Bouton "Reset" / Touche `0`** : Remet le chronomètre à `0h : 0min : 0s : 0ms` et le stoppe s'il était en cours d'exécution.

---

## 🧠 Défis et Apprentissages

**Défi : Gestion des `setInterval` multiples**

Le principal défi technique rencontré a été un bug lié aux raccourcis clavier. Un appui répété sur la `Barre d'espace` créait plusieurs instances de `setInterval` en parallèle. Le chronomètre s'accélérait de manière visible, et seul l'identifiant du dernier intervalle était conservé, rendant les fonctions `stop()` et `reset()` inefficaces sur les premiers intervalles lancés.

**Solution :**
La solution a consisté à implémenter une gestion d'état simple. Avant de créer un `setInterval`, la fonction `start()` vérifie désormais si le bouton "Start" est désactivé (`disabled`). Si c'est le cas, cela signifie qu'un chronomètre est déjà en cours, et un nouvel intervalle ne sera pas créé. Ce "verrou" garantit qu'une seule instance du chronomètre tourne à la fois.

**Apprentissages :**
*   **JavaScript Asynchrone :** Compréhension approfondie du fonctionnement de `setInterval()` et de l'importance de `clearInterval()` pour éviter les fuites de mémoire et les bugs de comportement.
*   **Gestion d'état :** Utilisation des propriétés d'éléments du DOM (comme `disabled`) pour contrôler la logique de l'application.
*   **Événements du clavier :** Implémentation de `window.addEventListener('keydown', ...)` pour créer une expérience utilisateur plus riche.
*   **CSS Flexbox :** Utilisation de Flexbox pour centrer les éléments et créer une mise en page flexible et responsive, comme détaillé dans les commentaires du fichier `styles.css`.

---

## 🔮 Améliorations Possibles

- [ ] **Ajouter une fonction "Tour" (Lap Timer)** : Permettre à l'utilisateur d'enregistrer des temps intermédiaires sans arrêter le chronomètre principal.
- [ ] **Sauvegarde locale** : Utiliser le `localStorage` du navigateur pour conserver le temps même après avoir rechargé la page.
- [ ] **Améliorer l'affichage** : S'assurer que les nombres ont toujours deux chiffres (ex: `01` au lieu de `1`) pour un affichage plus stable.
- [ ] **Accessibilité (a11y)** : Ajouter des attributs ARIA pour rendre l'application plus accessible aux lecteurs d'écran.

---

## 👤 Auteur

*   **René DJILAN**
*   GitHub : [@djilanrene](https://github.com/djilanrene)

---

## 📜 Licence

Ce projet est distribué sous la licence MIT.
