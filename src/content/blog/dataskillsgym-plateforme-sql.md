
---
title: "Data Skills Gym : Plateforme Interactive d'Entraînement SQL & Pandas"
description: "Application interactive conçue avec Streamlit et DuckDB pour maîtriser les fonctions window, JOINs et agrégations complexes en SQL et Pandas."
pubDate: 2026-08-15
---

# 🏋️‍♂️ Data Skills Gym — Entraînement SQL & Pandas

**Data Skills Gym** est une plateforme d'apprentissage interactive pensée pour aider les développeurs et Data Analysts à renforcer leurs compétences en SQL avancé et en manipulation de DataFrames Pandas. Grâce à une exécution en temps réel, l'application permet de tester des requêtes complexes, de visualiser les résultats immédiatement et de comprendre l'équivalence entre SQL et Python.

---

## 🎯 Objectifs et Valeur Ajoutée

* **Évaluation Immédiate :** Moteur SQL embarqué permettant la validation en temps réel des requêtes soumises.
* **Double Approche SQL vs Pandas :** Comparaison directe de la syntaxe SQL déclarative avec les méthodes procédurales de Pandas sur un même jeu de données.
* **Apprentissage Structuré :** Exercices classés par niveau de difficulté, couvrant les fonctions de fenêtrage (`OVER`, `PARTITION BY`), les jointures (`INNER`, `CROSS`) et les agrégations complexes.

---

## 🛠️ Stack Technique & Architecture

* **Moteur OLAP :** **DuckDB** pour l'exécution ultra-rapide des requêtes SQL in-memory.
* **Interface Utilisateur :** **Streamlit** pour une UI réactive, intégrant l'affichage dynamique des tables et des erreurs de syntaxe.
* **Traitements de Données :** Python 3.8+ et Pandas.

```text
DataSkillsGym/
├── data/           # Base de données analytique DuckDB
├── modules/        # Exercices par catégorie (JOINs, Windows, Aggregations)
│   ├── exos_joins.py
│   └── exos_windows.py
├── app.py          # Application principale Streamlit
├── create_data.py  # Generation et initialisation du jeu de données
└── test_data.py    # Validation et tests unitaires

```

---

## 📚 Parcours de Formation

### 1. Jointures Avancées (JOINs)

* **CROSS JOIN :** Produits cartésiens et cas d'usage analytiques.
* **INNER JOIN :** Jointures multi-conditions et filtrage avancé.

### 2. Fonctions de Fenêtrage (Window Functions)

* **Clause `OVER()` :** Calculs d'agrégations glissantes sans réduction du nombre de lignes.
* **Clause `PARTITION BY` :** Segmentation des jeux de données et calculs intra-groupes.

### 3. Agrégations & Groupements

* **`GROUP BY` & Aggregations :** Utilisation avancée des fonctions d'agrégation et équivalents Pandas.

---

## 🔗 Code Source

* **Dépôt GitHub :** [DataSkillsGym sur GitHub](https://www.google.com/search?q=https://github.com/jihed01/DataSkillsGym)



