# 🏎️ FORMULA 1 RACE INTELLIGENCE DASHBOARD
### Enterprise Motorsport Telemetry & Championship Analytics Engine
**Author & Lead Architect:** [Tanisha Patel](https://public.tableau.com/app/profile/tanisha.patel)  
**Tableau Author Profile:** `tanisha patel`  
**Tableau Cloud Site:** `tanishapatelsk-aac6bafda5` (`prod-in-a.online.tableau.com`)  
**Published Workbook:** `F1 Race Intelligence Dashboard_2`  

[![Tableau Dashboard](https://img.shields.io/badge/Tableau-Live_Dashboard-E97627?style=for-the-badge&logo=tableau&logoColor=white)](https://prod-in-a.online.tableau.com/#/site/tanishapatelsk-aac6bafda5/views/F1RaceIntelligenceDashboard_2/FORMULA1RACEINTELLIGENCEDASHBOARD)
[![Tableau Story](https://img.shields.io/badge/Tableau_Story-9--Scene_Narrative-22C55E?style=for-the-badge&logo=tableau&logoColor=white)](https://prod-in-a.online.tableau.com/#/site/tanishapatelsk-aac6bafda5/views/F1RaceIntelligenceDashboard_2/Formula1RaceIntelligenceFromGlobalOverviewtoChampionshipSuccess)
[![Python](https://img.shields.io/badge/Python-3.13-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![Flask](https://img.shields.io/badge/Flask-Web_Service-000000?style=for-the-badge&logo=flask&logoColor=white)](https://palletsprojects.com/p/flask/)
[![Theme](https://img.shields.io/badge/Theme-F1_Dark_Obsidian_%26_Crimson-E10600?style=for-the-badge)](#)

---

## 📌 Project Overview

The **Formula 1 Race Intelligence Dashboard** is an enterprise-grade motorsport telemetry platform that synthesizes **17 championship seasons (2010–2026)**, **6,464 race outcomes**, and **~13,750 connected data records** into actionable visual intelligence. 

Engineered by **Tanisha Patel**, the project combines **Tableau**'s visual compute engine with a robust **Python Flask** service layer and a broadcast-inspired dark user interface (`#0a0a0f` Obsidian + `#e10600` F1 Crimson). It provides race strategists, analysts, and motorsport enthusiasts with instant access to championship trajectories, tyre wear degradation profiles, and reliability diagnostics.

---

## 📊 Live Interactive Tableau Workbooks

* 🏁 **Interactive Telemetry Dashboard:**  
  [FORMULA 1 RACE INTELLIGENCE DASHBOARD](https://prod-in-a.online.tableau.com/#/site/tanishapatelsk-aac6bafda5/views/F1RaceIntelligenceDashboard_2/FORMULA1RACEINTELLIGENCEDASHBOARD)
* 📖 **9-Scene Championship Narrative Story:**  
  [Formula 1 Race Intelligence: From Global Overview to Championship Success](https://prod-in-a.online.tableau.com/#/site/tanishapatelsk-aac6bafda5/views/F1RaceIntelligenceDashboard_2/Formula1RaceIntelligenceFromGlobalOverviewtoChampionshipSuccess)

---

## 🎯 4 Core Operational KPIs

```
+------------------------------------------------------------------------------------+
| 🏁 Competing Teams: 10              | 📅 Seasons in Play: 17 (2010–2026)           |
+-------------------------------------+----------------------------------------------+
| 🏎️ Race Outcomes Logged: 6,464      | 🌍 Circuits Showcased: 29                    |
+------------------------------------------------------------------------------------+
```

---

## 🔬 5 Core Telemetry Pillars

1. **Global Race & Circuit Overview:** Spatial telemetry across 29 host circuits worldwide, mapping race volumes, track topology, and continental racing clusters led by Bahrain (2,168 logged outcomes) and the USA (400 outcomes).
2. **Driver Performance & Grid Leaderboards:** Dynamic Top-N parameter scoring (default: 10) benchmarking drivers across career points, qualifying-to-race pace conversions, and podium finishes.
3. **Constructor Championship Rivalry:** Historical trajectory tracking constructor championship supremacy between Red Bull Racing (8,006 pts) and Mercedes-AMG (7,790 pts) across 17 competitive seasons.
4. **Pit Stop & Tyre Strategy Analysis:** Pirelli compound share analysis across Soft (31.52%), Medium (30.78%), Hard (30.36%), and Inter (7.34%), mapping stint windows and thermal degradation curves.
5. **Reliability, DNF & Attrition Diagnostics:** Root-cause attrition diagnostics segmenting mechanical and collision failures (Engine, Transmission, Suspension, Brakes, Collision) confirming the 91.4% grid finish rate benchmark.

---

## 📈 9 Unique Tableau Visualizations

The published workbook contains 9 distinct, purpose-built visualizations:
1. **KPI Summary Cards:** High-level operational metrics (10 Teams, 17 Seasons, 6,464 Outcomes, 29 Circuits).
2. **Global Driver Distribution Across Grand Prix Nations:** Dark Mapbox geographic projection mapping driver nationalities and racing volumes across 29 host nations.
3. **Driver Reliability Analysis:** Stacked horizontal bar chart colored by `Dnf Reason` (Engine, Collision, Transmission, Suspension, Brakes, Overheating).
4. **Driver Performance Leaderboard:** Dynamic vertical bar chart controlled by the `Top N Parameter` (default: 10), led by Hamilton, Verstappen, Leclerc, and Norris.
5. **Team Performance Ranking:** Horizontal bar chart sorted descending by points ranking constructor supremacy across the hybrid era.
6. **Team Championship Performance Analysis:** Vertical bar chart from `championship_standings` displaying seasonal dominance shifts.
7. **Tyre Compound Usage Distribution:** Circular pie chart breaking down Pirelli telemetry: Soft (31.52%), Medium (30.78%), Hard (30.36%), and Inter (7.34%).
8. **Country-wise Race Participation:** Proportional treemap / highlight table led by Bahrain (2,168), USA (400), Monaco (328), Spain (328), and Brazil (308).
9. **Podium Achievements by Driver and Team:** Packed bubble chart sized by `SUM(Podiums)` illustrating top-3 finishes by driver and constructor.

---

## 🛠️ Technology Stack & Architecture

```
Architecture Diagram
+-------------------------------------------------------------------------------+
|  DATA ENGINEERING LAYER                                                       |
|  - F1 Racing Project Dataset.xlsx (5 connected sheets, ~13,750 rows)           |
|  - Python ETL / Data Validation Pipeline                                      |
+-------------------------------------------------------------------------------+
                                      │
                                      ▼
+-------------------------------------------------------------------------------+
|  TABLEAU ANALYTICS ENGINE                                                     |
|  - Logical Layer Relationships (circuit_id, race_id, season, driver)           |
|  - Calculated Fields: [Is DNF], [Cumulative Points], [Reliability Rate %]     |
|  - Parameters: [Top N Parameter] (Integer 5-20, default: 10)                  |
|  - Published to Tableau Cloud / Public: F1 Race Intelligence Dashboard_2      |
+-------------------------------------------------------------------------------+
                                      │
                                      ▼
+-------------------------------------------------------------------------------+
|  WEB SERVICE & EMBED APPLICATION LAYER                                        |
|  - Python Flask Web Server (app.py) & REST API endpoints                      |
|  - Jinja2 Template (templates/index.html) with configurable Tableau URLs      |
|  - Dark F1 Broadcast UI: HTML5, CSS3 Glassmorphism, Vanilla ES6+, Chart.js    |
|  - macOS Window Telemetry Frames, Interactive 9-Scene Story Navigator         |
+-------------------------------------------------------------------------------+
```

---

## ⚡ How to Run the Application

The application supports **both** a full Flask web server and instant offline double-click viewing:

### Method 1: Python Flask Server (Recommended)

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
2. **Start the Flask application:**
   ```bash
   python app.py
   ```
   *(Or double-click `run.bat` on Windows)*
3. **Open in your web browser:**
   ```
   http://127.0.0.1:5000
   ```

### Method 2: Offline Direct Browser Execution (Zero Server / Zero CORS)

Simply double-click `index.html` in Windows Explorer or open it in any modern browser. All pre-computed telemetry is bundled in `data.js`, and live Tableau embeds will automatically stream over HTTPS.

---

## 🔌 REST API Endpoints (Flask)

| Endpoint | Method | Response Description |
| :--- | :---: | :--- |
| `/api/health` | `GET` | Service status, author name (**Tanisha Patel**), and version info. |
| `/api/config` | `GET` | Current active Tableau URLs, workbook name, and metadata. |
| `/api/telemetry` | `GET` | Aggregated 4 Core KPIs and analytical dimensions. |
| `/api/circuits` | `GET` | Catalog of all 29 world circuits with coordinates. |
| `/api/drivers` | `GET` | Driver career records and telemetry rankings. |

---

## 📁 Repository Structure

```
├── app.py                     # Primary Flask web application server
├── templates/
│   └── index.html             # Flask Jinja2 web template
├── static/
│   ├── css/style.css          # F1 dark telemetry stylesheet
│   ├── js/script.js           # Interactive controller & Tableau embed injector
│   ├── js/data.js             # Pre-compiled telemetry data object
│   ├── assets/                # Preview images & reference captures
│   └── data/                  # Granular JSON telemetry files
├── requirements.txt           # Python dependency specifications
├── run.bat                    # Windows one-click startup launcher
├── index.html                 # Standalone static distribution file
├── style.css                  # Design system stylesheet
├── script.js                  # Frontend controller logic
├── data.js                    # Telemetry data feed
├── F1 Racing Project Dataset.xlsx # Master 5-sheet Formula 1 dataset
├── PROJECT_DOCUMENTATION.md   # Comprehensive technical project documentation
└── README.md                  # This README file
```

---

## 👤 Author & Credits

* **Author & Lead Architect:** **Tanisha Patel**
* **Tableau Profile:** [@tanisha patel](https://public.tableau.com/app/profile/tanisha.patel)
* **Academic Submission:** October 2026

---

## ⚖️ Educational Disclaimer

*This project is an independent educational and academic analytics platform developed by Tanisha Patel. Formula 1, F1, FIA, and related marks are trademarks of Formula One Licensing B.V. Not affiliated with or endorsed by Formula 1 companies.*
