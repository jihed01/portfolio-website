```markdown
---
title: "Pipeline de Données ETL & Analytics du Trafic Retail"
description: "Architecture complète d'un pipeline de données pour l'analyse du trafic en magasin : ingestion, détection d'anomalies, orchestration Airflow, API FastAPI et dashboard Streamlit."
pubDate: 2026-08-15
---

# 📊 Pipeline de Données pour l'Analyse du Trafic en Magasin

Ce projet implémente une pipeline de données automatisée pour l'analyse du trafic de visiteurs dans des magasins de détail. Le système couvre l'ensemble de la chaîne de valeur Data Engineering : ingestion de fichiers CSV bruts, transformations, détection d'anomalies de fréquentation, exposition via API REST et visualisation interactive.

---

## 🏗️ Architecture du Système

### Stack Technique

* **Traitement & Ingestion :** Python, Pandas, format de stockage **Parquet**.
* **Orchestration :** Apache Airflow (planification et exécution des DAGs).
* **API Backend :** FastAPI & Uvicorn (exposition REST).
* **Visualisation & Analytics :** Streamlit, Plotly.
* **Qualité & CI/CD :** Pytest, GitHub Actions.

### Flux de Données (Data Flow)

```text
📁 Données Brutes (CSV)
    ↓
🔄 Ingestion & Fusion (Python / Pandas)
    ↓
🧮 Agrégation Journalière
    ↓
📊 Calcul Moyenne Mobile (4 semaines)
    ↓
🚨 Détection d'Anomalies (Seuil ±50%)
    ↓
💾 Stockage Optimisé (Parquet)
    ↓
🌐 API REST (FastAPI)
    ↓
📱 Dashboard Interactif (Streamlit + Plotly)

```

---

## ⚙️ Implémentation Technique

### 1. Détection d'Anomalies de Trafic

La détection repose sur le calcul de la variation relative par rapport à la moyenne mobile glissante des 4 dernières semaines. Tout écart supérieur à **±50%** déclenche un drapeau d'anomalie :

```python
# Calcul de la variation relative par rapport à la moyenne mobile 4 semaines
pct_change = (valeur_actuelle - moyenne_mobile) / moyenne_mobile * 100

# Seuil d'alerte : variation absolue > 50%
anomalie = abs(pct_change) > 50

```

### 2. Format de Stockage (Parquet)

Le stockage des données traitées utilise le format columnar **Parquet** pour maximiser les performances :

* **Performance :** Vitesse de lecture/écriture jusqu'à 10 fois plus rapide que le CSV.
* **Compression :** Réduction de **70% à 90%** du volume de stockage.
* **Typage strict :** Conservation des types nativement (`datetime`, `int`, `float`).

### 3. Orchestration avec Apache Airflow

Un DAG quotidien assure le séquencement et l'exécution sans échec des tâches d'ingestion, d'agrégation et d'alerte :

```python
from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime

with DAG(
    'traffic_analysis_pipeline',
    schedule_interval='@daily',
    start_date=datetime(2025, 1, 1),
    catchup=False,
) as dag:

    ingest_data = PythonOperator(
        task_id='ingest_csv_files',
        python_callable=load_and_merge_data
    )

    process_data = PythonOperator(
        task_id='process_and_aggregate',
        python_callable=calculate_metrics
    )

    detect_anomalies = PythonOperator(
        task_id='detect_anomalies',
        python_callable=anomaly_detection
    )

    ingest_data >> process_data >> detect_anomalies

```

### 4. Endpoints API (FastAPI)

Le backend REST autorise l'accès aux données agrégées :

* `GET /api/traffic/{store_id}` : Récupération du trafic journalier d'un magasin.
* `GET /api/anomalies` : Liste des anomalies détectées sur une période.
* `GET /api/metrics/{store_id}/{sensor_id}` : Métriques détaillées par capteur.

---

## 📱 Dashboard Interactif Streamlit

L'application Streamlit fournit une interface d'exploration pour les équipes opérationnelles :

* **Filtres Dynamiques :** Sélection du magasin, filtrage par capteur spécifique (IDs normalisés 0 à 7) et ajustement de la granularité (semaine / mois).
* **Visualisations Avancées :**
* Courbe d'évolution du trafic journalier.
* Comparaison directe entre le trafic réel et la moyenne mobile sur 4 semaines.
* Mises en évidence visuelles des points d'anomalies sur le graphique.


* **Métriques Clés (KPIs) :** Trafic moyen, pics d'affluence (maximum/minimum) et statistiques par période.

---

## 💼 Cas d'Usage Métier

1. **Surveillance Opérationnelle :** Monitoring en temps réel de la fréquentation des magasins et détection des baisses ou pics anormaux.
2. **Optimisation des RH :** Planification des effectifs en caisse et en rayon basée sur les périodes de forte affluence.
3. **Analyse d'Impact Marketing :** Mesure de l'efficacité des promotions sur l'augmentation du trafic piéton.

---

## 🔗 Liens & Code Source

* **Code source GitHub :** [Data-pipeline sur GitHub](https://www.google.com/search?q=https://github.com/jihed01/Data-pipeline)

```

```