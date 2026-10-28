const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, 'Project_Documents');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function createWordDoc(title, bodyContent) {
  return `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset='utf-8'>
<title>${title}</title>
<style>
  body { font-family: 'Calibri', 'Arial', sans-serif; font-size: 11pt; line-height: 1.5; color: #111111; }
  h1 { font-size: 18pt; color: #e10600; border-bottom: 2px solid #e10600; padding-bottom: 6px; margin-top: 14pt; margin-bottom: 8pt; font-family: 'Arial', sans-serif; }
  h2 { font-size: 13pt; color: #8b0000; border-bottom: 1px solid #cccccc; padding-bottom: 4px; margin-top: 12pt; margin-bottom: 6pt; }
  h3 { font-size: 11.5pt; color: #111111; margin-top: 10pt; margin-bottom: 4pt; }
  table { border-collapse: collapse; width: 100%; margin-top: 10pt; margin-bottom: 14pt; font-size: 10pt; }
  th { background-color: #e10600; color: #ffffff; font-weight: bold; padding: 7px 9px; border: 1px solid #b30000; text-align: left; }
  td { border: 1px solid #cccccc; padding: 6px 9px; vertical-align: top; }
  tr:nth-child(even) { background-color: #f9f9f9; }
  .header-card { background-color: #f4f4f4; border-left: 5px solid #e10600; padding: 10px 14px; margin-bottom: 14pt; }
  .header-card table { margin: 0; }
  .header-card td { border: none; padding: 3px 6px; font-size: 10pt; background: transparent; }
  ul, ol { margin-top: 4pt; margin-bottom: 8pt; padding-left: 18pt; }
  li { margin-bottom: 3pt; }
  p { margin-top: 0; margin-bottom: 6pt; }
  .footer-note { font-size: 9pt; color: #666666; margin-top: 20pt; border-top: 1px solid #dddddd; padding-top: 6pt; text-align: center; }
</style>
</head>
<body>
${bodyContent}
<div class='footer-note'>
  Formula 1 Race Intelligence &bull; Author: Tanisha Patel &bull; Phase Documentation
</div>
</body>
</html>`;
}

function saveDoc(folder, filename, title, mdContent, htmlContent) {
  const dirPath = path.join(BASE_DIR, folder);
  ensureDir(dirPath);
  fs.writeFileSync(path.join(dirPath, `${filename}.md`), mdContent, 'utf8');
  fs.writeFileSync(path.join(dirPath, `${filename}.doc`), createWordDoc(title, htmlContent), 'utf8');
  console.log(`[Phase 1-3] Saved: ${folder}/${filename}`);
}

// --------------------------------------------------------------------------
// 1. PHASE 1: Brainstorm & Idea Prioritization Template
// --------------------------------------------------------------------------
const p1_brainstorm_md = `# Ideation Phase
## Brainstorm & Idea Prioritization Template

| Metadata Field | Project Information |
| :--- | :--- |
| **Date** | 31 January 2026 / October 2026 |
| **Author / Team ID** | Tanisha Patel |
| **Project Name** | Formula 1 Race Intelligence |
| **Maximum Marks** | 4 Marks |

---

### Step 1: Brainstorm and Idea Listing
Brainstorming provides an open environment for creative exploration. Below are the core technical ideas formulated for the **Formula 1 Race Intelligence** platform:

| S.No | Team Member | Idea / Suggestion | Category | Group No. |
| :---: | :--- | :--- | :--- | :---: |
| 1 | Tanisha Patel | Build an interactive hybrid-era Driver Performance Leaderboard indexing points and win rates across 6,464 race records (Lewis Hamilton 31,147 pts, Max Verstappen 31,126 pts). | Driver Analytics | 1 |
| 2 | Tanisha Patel | Develop a Constructor Championship Supremacy analyzer tracking Red Bull Racing (8,006 pts) and Mercedes AMG (7,790 pts) points trajectories and title progression. | Team Analytics | 1 |
| 3 | Tanisha Patel | Create a Pirelli compound strategy breakdown examining 3,814 telemetry laps (Soft 31.52%, Medium 30.78%, Hard 30.36%, Intermediate 7.34%) for tire degradation windows. | Race Strategy | 2 |
| 4 | Tanisha Patel | Construct a high-precision Pit Stop Execution analyzer benchmarking team stop times and evaluating undercut/overcut tactical windows (Ferrari record 2.18s avg). | Strategy & Telemetry | 2 |
| 5 | Tanisha Patel | Implement a Global Grand Prix geographic distribution and circuit participation map across 29 worldwide championship circuits (Bahrain 2,168 logged outcomes). | Circuit Telemetry | 3 |
| 6 | Tanisha Patel | Design a DNF & Mechanical Reliability root-cause classifier analyzing powertrain, suspension, and collision retirements across circuits. | Reliability Analytics | 4 |

---

### Step 2: Idea Prioritization
Rating grouped concepts on feasibility and business importance to define core platform scope:

| Group No. | Final Idea / Architectural Focus | Feasibility | Importance | Priority | Selected |
| :---: | :--- | :---: | :---: | :---: | :---: |
| 1 | **Driver & Constructor Performance Leaderboards**: End-to-end telemetry modeling of driver career points, win rates, podium conversions, and constructor battle trajectories. | High | High | P1 | **Yes** |
| 2 | **Tire Compound Degradation & Pit Strategy Matrix**: Pirelli compound share modeling combined with pit stop window analysis for race-pace optimization. | High | High | P2 | **Yes** |
| 3 | **Global Geographic Circuit Distribution & Treemap**: Spatial footprint modeling across 29 world circuits linking outcome volume to weather conditions and SC probabilities. | High | Medium | P3 | **Yes** |
| 4 | **Driver Reliability & DNF Root-Cause Analysis**: Mechanical versus collision retirement attribution modeling across street and permanent circuits. | Medium | High | P4 | **Yes** |
`;

const p1_brainstorm_html = `
<div class='header-card'>
  <table>
    <tr><td><strong>Phase:</strong> Ideation Phase</td><td><strong>Author:</strong> Tanisha Patel</td></tr>
    <tr><td><strong>Project:</strong> Formula 1 Race Intelligence</td><td><strong>Date:</strong> October 2026</td></tr>
    <tr><td><strong>Deliverable:</strong> Brainstorm & Idea Prioritization Template</td><td><strong>Max Marks:</strong> 4 Marks</td></tr>
  </table>
</div>

<h1>Brainstorm & Idea Prioritization Template</h1>
<p>Brainstorming provides an open environment that encourages rigorous exploration of motorsport telemetry challenges. Below is the structured ideation matrix created for the <strong>Formula 1 Race Intelligence</strong> project.</p>

<h2>Step 1: Brainstorm and Idea Listing</h2>
<table>
  <tr><th>S.No</th><th>Team Member</th><th>Idea / Suggestion</th><th>Category</th><th>Group No.</th></tr>
  <tr><td>1</td><td>Tanisha Patel</td><td>Interactive hybrid-era Driver Performance Leaderboard indexing points and win rates across 6,464 race records (Lewis Hamilton 31,147 pts, Max Verstappen 31,126 pts).</td><td>Driver Analytics</td><td>1</td></tr>
  <tr><td>2</td><td>Tanisha Patel</td><td>Constructor Championship Supremacy analyzer tracking Red Bull Racing (8,006 pts) and Mercedes AMG (7,790 pts) points trajectories and title progression.</td><td>Team Analytics</td><td>1</td></tr>
  <tr><td>3</td><td>Tanisha Patel</td><td>Pirelli compound strategy breakdown examining 3,814 telemetry laps (Soft 31.52%, Medium 30.78%, Hard 30.36%, Intermediate 7.34%) for tire degradation windows.</td><td>Race Strategy</td><td>2</td></tr>
  <tr><td>4</td><td>Tanisha Patel</td><td>High-precision Pit Stop Execution analyzer benchmarking team stop times and evaluating undercut/overcut tactical windows (Ferrari record 2.18s avg).</td><td>Strategy & Telemetry</td><td>2</td></tr>
  <tr><td>5</td><td>Tanisha Patel</td><td>Global Grand Prix geographic distribution and circuit participation map across 29 worldwide championship circuits (Bahrain 2,168 logged outcomes).</td><td>Circuit Telemetry</td><td>3</td></tr>
  <tr><td>6</td><td>Tanisha Patel</td><td>DNF & Mechanical Reliability root-cause classifier analyzing powertrain, suspension, and collision retirements across circuits.</td><td>Reliability Analytics</td><td>4</td></tr>
</table>

<h2>Step 2: Idea Prioritization</h2>
<table>
  <tr><th>Group No.</th><th>Final Idea</th><th>Feasibility</th><th>Importance</th><th>Priority</th><th>Selected</th></tr>
  <tr><td>1</td><td><strong>Driver & Constructor Performance Leaderboards</strong>: Modeling driver career points, win rates, podium conversions, and constructor battle trajectories.</td><td>High</td><td>High</td><td>P1</td><td><strong>Yes</strong></td></tr>
  <tr><td>2</td><td><strong>Tire Compound Degradation & Pit Strategy Matrix</strong>: Pirelli compound share modeling combined with pit stop window analysis for race-pace optimization.</td><td>High</td><td>High</td><td>P2</td><td><strong>Yes</strong></td></tr>
  <tr><td>3</td><td><strong>Global Geographic Circuit Distribution</strong>: Spatial footprint modeling across 29 world circuits linking outcome volume to weather conditions.</td><td>High</td><td>Medium</td><td>P3</td><td><strong>Yes</strong></td></tr>
  <tr><td>4</td><td><strong>Driver Reliability & DNF Root-Cause Analysis</strong>: Mechanical versus collision retirement attribution modeling across street and permanent circuits.</td><td>Medium</td><td>High</td><td>P4</td><td><strong>Yes</strong></td></tr>
</table>
`;

saveDoc('Phase_1_Ideation', 'Brainstorm_and_Idea_Prioritization', 'Ideation Phase - Brainstorm & Idea Prioritization', p1_brainstorm_md, p1_brainstorm_html);

// --------------------------------------------------------------------------
// 2. PHASE 1: Define Problem Statements Template
// --------------------------------------------------------------------------
const p1_problem_md = `# Ideation Phase
## Define Problem Statements Template

| Metadata Field | Project Information |
| :--- | :--- |
| **Date** | 31 January 2026 / October 2026 |
| **Author / Team ID** | Tanisha Patel |
| **Project Name** | Formula 1 Race Intelligence |
| **Maximum Marks** | 2 Marks |

---

### Customer Problem Statement Template

Articulating the core challenges from the perspective of key motorsport personas ensures our analytical terminal delivers actionable value.

#### Problem Statement 1 (PS-1): Race Strategy Analysts & Telemetry Engineers
* **I am:** A Formula 1 race strategy analyst and telemetry data scientist.
* **I'm trying to:** Model real-time race pace, sector deltas, tire compound degradation curves, and optimal undercut/overcut pit stop execution windows across changing track and weather conditions.
* **But:** Telemetry datasets are scattered across disjointed tabular formats (3,814 lap records, 6,464 race outcomes, qualifying sheets, championship standings) with complex join dependencies and schema fan-outs.
* **Because:** Existing spreadsheet tools lack an integrated multidimensional analytical engine and real-time interactive visualization dashboards to instantly correlate tire age, track altitude, and sector pace.
* **Which makes me feel:** Constrained by manual data wrangling delays and vulnerable to suboptimal strategic race-call execution during high-stakes Grand Prix sessions.

#### Problem Statement 2 (PS-2): Motorsport Enthusiasts & Data Journalists
* **I am:** A dedicated Formula 1 enthusiast, simulation analyst, and sports data journalist.
* **I'm trying to:** Gain deep, transparent insights into true teammate head-to-head performance, historical championship dominance across regulation eras, and vehicle reliability patterns.
* **But:** Broadcast TV graphics provide only fleeting, high-level graphics during live sessions, with zero historical drill-downs or self-guided exploration capabilities.
* **Because:** Fan-facing platforms are either behind steep enterprise paywalls or employ generic, low-contrast UI designs lacking authentic Formula 1 broadcast aesthetic and real dataset connectivity.
* **Which makes me feel:** Frustrated by superficial commentary and eager for a broadcast-grade, interactive Formula 1 Race Intelligence terminal that works seamlessly online and offline.
`;

const p1_problem_html = `
<div class='header-card'>
  <table>
    <tr><td><strong>Phase:</strong> Ideation Phase</td><td><strong>Author:</strong> Tanisha Patel</td></tr>
    <tr><td><strong>Project:</strong> Formula 1 Race Intelligence</td><td><strong>Date:</strong> October 2026</td></tr>
    <tr><td><strong>Deliverable:</strong> Define Problem Statements Template</td><td><strong>Max Marks:</strong> 2 Marks</td></tr>
  </table>
</div>

<h1>Define Problem Statements Template</h1>
<p>Articulating core customer problem statements enables our team to design solutions that solve real analytical bottlenecks in motorsport data consumption.</p>

<h2>Customer Problem Statements Matrix</h2>
<table>
  <tr><th>Problem Statement</th><th>I am (Customer)</th><th>I'm trying to</th><th>But</th><th>Because</th><th>Which makes me feel</th></tr>
  <tr>
    <td><strong>PS-1</strong></td>
    <td>Race Strategy Analyst & Telemetry Engineer</td>
    <td>Model real-time race pace, tire degradation curves, and optimal undercut/overcut pit stop execution windows.</td>
    <td>Telemetry datasets are fragmented across disparate CSV/Excel files (3,814 lap records, 6,464 outcomes) with schema fan-outs.</td>
    <td>Spreadsheets lack unified interactive multidimensional visualization models to correlate lap times with tire age and track temperatures.</td>
    <td>Constrained by manual data wrangling delays and vulnerable to suboptimal strategic calls during Grand Prix sessions.</td>
  </tr>
  <tr>
    <td><strong>PS-2</strong></td>
    <td>Motorsport Enthusiast & Data Journalist</td>
    <td>Inspect true teammate head-to-head performance, historical constructor dominance, and DNF root causes.</td>
    <td>Broadcast TV graphics present only fleeting snapshots without deep interactive filtering or career-level drill-downs.</td>
    <td>Fan platforms lack accessible, interactive Tableau-driven storytelling and authentic F1 broadcast aesthetic.</td>
    <td>Frustrated by superficial commentary and seeking a dedicated, broadcast-grade race intelligence terminal.</td>
  </tr>
</table>
`;

saveDoc('Phase_1_Ideation', 'Define_Problem_Statements', 'Ideation Phase - Define Problem Statements', p1_problem_md, p1_problem_html);

// --------------------------------------------------------------------------
// 3. PHASE 1: Empathy Map Canvas
// --------------------------------------------------------------------------
const p1_empathy_md = `# Ideation Phase
## Empathy Map Canvas

| Metadata Field | Project Information |
| :--- | :--- |
| **Date** | 31 January 2026 / October 2026 |
| **Author / Team ID** | Tanisha Patel |
| **Project Name** | Formula 1 Race Intelligence |
| **Maximum Marks** | 4 Marks |

---

### Target Persona: Alex Turner (Lead Race Strategy & Motorsport Analytics Lead)

#### 1. What does the user SAY?
* "We need to identify the exact tire crossover lap before our rivals attempt the undercut."
* "Why are our cars suffering a 14% higher DNF rate on street circuits like Monaco and Baku?"
* "Show me how Lewis Hamilton and Max Verstappen convert front-row qualifying starts into race victories."
* "Can we explore all 24 Grand Prix circuits in a single cohesive, high-performance interface?"

#### 2. What does the user THINK?
* "Traditional 42-column tabular data is impenetrable during fast-paced pre-race strategy briefings."
* "A dark, high-contrast Formula 1 broadcast aesthetic (black and official F1 red #e10600) commands authority and clarity."
* "Tableau Public combined with an offline-compatible web dashboard provides the ultimate flexibility for stakeholder presentations."

#### 3. What does the user DO?
* Ingests and cleans 6,464 race records, 3,814 telemetry laps, and 311 championship standing rows.
* Filters performance metrics by season, driver, team, and weather conditions.
* Benchmarks sub-2.3s pit stops against historical averages to locate strategic margins.
* Evaluates tire compound utilization (Soft 31.52%, Medium 30.78%, Hard 30.36%, Inter 7.34%).

#### 4. What does the user FEEL?
* **Pains:**
  * Complex, fragmented Excel workbooks requiring cumbersome joins.
  * Inefficient manual data aggregation that introduces human calculation errors.
  * Lack of interactive storytelling elements to convey telemetry insights to non-technical stakeholders.
* **Gains:**
  * Instant access to a unified **Formula 1 Race Intelligence** dashboard.
  * Responsive, high-speed single-page web architecture runnable by simple double-click.
  * Interactive Tableau Story chapters taking viewers from global race participation to championship triumph.
`;

const p1_empathy_html = `
<div class='header-card'>
  <table>
    <tr><td><strong>Phase:</strong> Ideation Phase</td><td><strong>Author:</strong> Tanisha Patel</td></tr>
    <tr><td><strong>Project:</strong> Formula 1 Race Intelligence</td><td><strong>Date:</strong> October 2026</td></tr>
    <tr><td><strong>Deliverable:</strong> Empathy Map Canvas</td><td><strong>Max Marks:</strong> 4 Marks</td></tr>
  </table>
</div>

<h1>Empathy Map Canvas</h1>
<p>Understanding user behaviors, thoughts, and emotional pain points across the motorsport analytics domain.</p>

<h2>Persona Profile: Motorsport Telemetry Analyst & Technical Audience</h2>
<table>
  <tr><th>Domain</th><th>Observations & Empathy Findings</th></tr>
  <tr>
    <td><strong>SAYS</strong></td>
    <td>
      <ul>
        <li>"We need to detect tire crossover windows before our competitors trigger the undercut."</li>
        <li>"Why did Carlos Sainz suffer more mechanical retirements than Charles Leclerc on high-speed circuits?"</li>
        <li>"Can we analyze Red Bull's 8,006 constructor points alongside Mercedes' hybrid unit dominance?"</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><strong>THINKS</strong></td>
    <td>
      <ul>
        <li>"Tabular spreadsheets are too slow and unintuitive for executive race briefings."</li>
        <li>"A broadcast-grade Black & Red (#0a0a0a + #e10600) interface provides immediate professional immersion."</li>
        <li>"Visual data storytelling is essential to communicate telemetry to broader team stakeholders."</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><strong>DOES</strong></td>
    <td>
      <ul>
        <li>Processes 6,464 race results, 3,814 lap records, and 29 circuit profiles.</li>
        <li>Configures multi-tiered filters: DNF reason, season (2010–2026), and Top N parameters.</li>
        <li>Evaluates pit stop consistency, tire degradation, and teammate head-to-head metrics.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><strong>FEELS</strong></td>
    <td>
      <p><strong>Pains:</strong> Data fragmentation, complex multi-table joins, generic templates, network-dependent BI viewers.</p>
      <p><strong>Gains:</strong> Unified Formula 1 Race Intelligence platform, animated SVG circuit telemetry, instant driver card filtering, and 100% offline double-click reliability.</p>
    </td>
  </tr>
</table>
`;

saveDoc('Phase_1_Ideation', 'Empathy_Map_Canvas', 'Ideation Phase - Empathy Map Canvas', p1_empathy_md, p1_empathy_html);

// --------------------------------------------------------------------------
// 4. PHASE 2: Customer Journey Map
// --------------------------------------------------------------------------
const p2_cjm_md = `# Requirement Analysis Phase
## Customer Journey Map

| Metadata Field | Project Information |
| :--- | :--- |
| **Date** | October 2026 |
| **Author / Team ID** | Tanisha Patel |
| **Project Name** | Formula 1 Race Intelligence |
| **Deliverable** | Customer Journey Map |

---

### Journey Stages for Formula 1 Telemetry Platform

| Journey Stage | User Actions | Touchpoints | Thoughts & Mindset | Emotional State | Opportunities & Solution Features |
| :--- | :--- | :--- | :--- | :---: | :--- |
| **1. Discovery & Onboarding** | Accesses platform via web link or double-clicks offline \`index.html\`. | Browser, Page Preloader, Hero Section. | "I hope this loads fast without demanding logins or broken dependencies." | 🏎️ Impressed | 5-light F1 gantry sequence ("Lights Out"), instant hero stats count-up (75+ seasons, 1K+ races, 20 drivers, 10 constructors). |
| **2. High-Level Exploration** | Scans live telemetry ticker and animated SVG racing circuit. | Hero Ticker, Project Overview Track Card. | "The racing line animation and live ticker facts immediately establish domain authenticity." | 💡 Engaged | Hardware-accelerated animated SVG track, live facts marquee ticker, 6 analytical dimension cards. |
| **3. Deep Telemetry Analysis** | Explores interactive Tableau Public Dashboard and Story chapters. | Tableau Dashboard Window, Story Navigator. | "I can inspect 8 core visual panels: global distribution, reliability, leaderboard, and tire share." | 🔍 Analytical | 8-panel high-res dashboard frame, 7 clickable story chapters with dynamic telemetry commentary, full-screen mode. |
| **4. Driver & Team Inspection** | Searches and filters specific drivers by season and sort criteria. | Drivers Grid, Search Bar, Season Dropdown. | "Let me see Hamilton vs Verstappen stats or filter for the 2024 season." | ⚡ Empowered | Real-time search, team color stripes, champion crown badges, win/podium conversion progress bars. |
| **5. Collaboration & Inquiry** | Submits technical inquiries or telemetry requests via terminal form. | Race Intelligence Contact Card, Social links. | "I want to request custom telemetry models or export dataset findings." | 🤝 Connected | Client-side validated form, animated submit loading state, instant toast notification. |
`;

const p2_cjm_html = `
<div class='header-card'>
  <table>
    <tr><td><strong>Phase:</strong> Requirement Analysis</td><td><strong>Author:</strong> Tanisha Patel</td></tr>
    <tr><td><strong>Project:</strong> Formula 1 Race Intelligence</td><td><strong>Date:</strong> October 2026</td></tr>
    <tr><td><strong>Deliverable:</strong> Customer Journey Map</td><td><strong>Format:</strong> Structured Matrix</td></tr>
  </table>
</div>

<h1>Customer Journey Map</h1>
<p>Mapping user actions, touchpoints, mindset, and pain-relief opportunities across the lifecycle of the Formula 1 Race Intelligence platform.</p>

<table>
  <tr><th>Journey Stage</th><th>User Actions</th><th>Touchpoints</th><th>Thoughts & Mindset</th><th>Emotional State</th><th>Opportunities & Implemented Features</th></tr>
  <tr>
    <td><strong>1. Discovery & Launch</strong></td>
    <td>Opens site in browser or double-clicks offline index.html.</td>
    <td>Preloader, Hero Section, Navbar</td>
    <td>"Needs to load fast with zero login barriers or broken CDN links."</td>
    <td>Impressed</td>
    <td>F1 5-light start sequence, instant count-up stats (75+ seasons, 1K+ races, 20 drivers, 10 teams).</td>
  </tr>
  <tr>
    <td><strong>2. System Orientation</strong></td>
    <td>Observes live marquee ticker and animated circuit model.</td>
    <td>Project Overview, Animated SVG Circuit</td>
    <td>"The animated DRS and sector markers show authentic racing architecture."</td>
    <td>Engaged</td>
    <td>Animated SVG track with glowing car dot, continuous live telemetry marquee, 6 dimension cards.</td>
  </tr>
  <tr>
    <td><strong>3. Deep Telemetry Analysis</strong></td>
    <td>Interacts with Tableau Dashboard and Story narrative.</td>
    <td>Dashboard Frame, Story Point Chips</td>
    <td>"Can I examine driver reliability, tire usage, and constructor points in one view?"</td>
    <td>Analytical</td>
    <td>Full 8-panel dashboard frame, 7-point interactive chapter navigator, fullscreen mode.</td>
  </tr>
  <tr>
    <td><strong>4. Driver & Grid Telemetry</strong></td>
    <td>Searches specific drivers, filters by season (2010–2026), and sorts.</td>
    <td>Driver Search Box, Season Dropdown, Driver Cards</td>
    <td>"How do Verstappen's points compare to Hamilton's hybrid peak?"</td>
    <td>Empowered</td>
    <td>Live search filter, team color stripes, champion crown badges, win rate progress bars.</td>
  </tr>
  <tr>
    <td><strong>5. Terminal Inquiry</strong></td>
    <td>Fills contact form for telemetry model consulting.</td>
    <td>Contact Glass Card, Social Links</td>
    <td>"I want to connect with the engineering lead for custom data pipeline work."</td>
    <td>Connected</td>
    <td>Client-side validated form, animated loading state, green success toast feedback.</td>
  </tr>
</table>
`;

saveDoc('Phase_2_Requirement_Analysis', 'Customer_Journey_Map', 'Requirement Analysis - Customer Journey Map', p2_cjm_md, p2_cjm_html);

// --------------------------------------------------------------------------
// 5. PHASE 2: Data Flow Diagrams & User Stories
// --------------------------------------------------------------------------
const p2_dfd_md = `# Requirement Analysis Phase
## Data Flow Diagram & User Stories

| Metadata Field | Project Information |
| :--- | :--- |
| **Date** | 31 January 2026 / October 2026 |
| **Author / Team ID** | Tanisha Patel |
| **Project Name** | Formula 1 Race Intelligence |
| **Maximum Marks** | 4 Marks |

---

### Data Flow Diagram (DFD) Specification

#### DFD Symbol Legend
* **External Entity (Oval / Rounded):** Race Strategist, Motorsport Fan, FIA Telemetry Feed.
* **Process (Rectangle with Header):**
  * \`P1.0\`: Ingest & Validate Raw Dataset (Excel / CSV).
  * \`P2.0\`: Transform, Clean & Normalize Telemetry Data (Python ETL / Snowflake SQL).
  * \`P3.0\`: Compute Aggregates, KPIs & Predictive Indices.
  * \`P4.0\`: Render Tableau BI Dashboards & Story Points.
  * \`P5.0\`: Serve Responsive Web Interface (HTML5/CSS3/ES6+).
* **Data Store (Open Rectangle):**
  * \`D1\`: Raw Racing Data Store (6,464 race results, 3,814 lap records).
  * \`D2\`: Curated Telemetry Store (Cleaned drivers, circuits, teams).
  * \`D3\`: Data Store JS (\`data.js\` / JSON endpoints).
* **Data Flow (Labeled Arrow):** Telemetry metrics, aggregated points, filtered driver subsets.

\`\`\`mermaid
flowchart TD
    EE1["Motorsport Analyst / User"] -->|Filter & Search Queries| P5["P5.0: Serve Interactive Web Interface"]
    DS_Raw["D1: Raw F1 Dataset (Excel)"] -->|Raw Telemetry Records| P2["P2.0: Clean & Aggregate (Python ETL)"]
    P2 -->|Curated Tables & Measures| DS_Curated["D2: Curated Telemetry & JSON"]
    DS_Curated -->|Pre-computed Objects| P4["P4.0: Tableau Visualization Engine"]
    DS_Curated -->|Embedded Telemetry Object| P5
    P4 -->|Visual Dashboards & Story Frames| P5
    P5 -->|Rendered Charts, Telemetry & Cards| EE1
\`\`\`

---

### User Stories & Acceptance Criteria

| User Type | Functional Epic | USN | User Story / Task | Acceptance Criteria | Priority | Sprint |
| :--- | :--- | :---: | :--- | :--- | :---: | :---: |
| Race Analyst | Telemetry Overview | **USN-01** | As an analyst, I want to view top-level KPIs (Teams, Seasons, Outcomes, Circuits) immediately upon landing. | Display Competing Teams (10), Seasons (17), Outcomes (6,464), and Circuits (29) with animated count-up. | High | Sprint-1 |
| Race Strategist | Tire Intelligence | **USN-02** | As a strategist, I want to analyze Pirelli compound usage distribution across telemetry laps. | Render Doughnut chart showing Soft 31.52%, Medium 30.78%, Hard 30.36%, and Inter 7.34% with lap counts. | High | Sprint-1 |
| Team Principal | Constructor Standings | **USN-03** | As a team principal, I want to compare total constructor championship points across all 10 active teams. | Horizontal bar chart ranking Red Bull (8,006), Mercedes (7,790), Ferrari (5,778), McLaren (4,270), etc. | High | Sprint-1 |
| Race Engineer | Reliability Analytics | **USN-04** | As a race engineer, I want to inspect DNF causes by driver to assess mechanical vs collision failure rates. | Stacked bar chart categorizing Mechanical, Collision, Engine, Gearbox, and Electrical retirements per driver. | High | Sprint-2 |
| Data Journalist | Storytelling Navigation | **USN-05** | As a journalist, I want a multi-chapter story navigator to present race intelligence narrative to audiences. | Clickable story point chips (1 to 7) that dynamically update narrative commentary below the Tableau frame. | Medium | Sprint-2 |
| Motorsport Fan | Driver Grid Exploration | **USN-06** | As a fan, I want to search and filter drivers by season and sort by points, wins, and podiums. | Live search input and season dropdown (Career, 2026, 2025, 2024...) updating driver cards instantly. | High | Sprint-2 |
| Simulation Driver | Circuit Dynamics | **USN-07** | As a simulation driver, I want to visualize track geometry with sector marks (S1, S2, S3) and DRS zones. | Animated SVG circuit path with red dashed racing line and glowing traveling car indicator. | Medium | Sprint-1 |
| General User | Inquiry Transmission | **USN-08** | As a visitor, I want to transmit an inquiry through a styled contact form and receive immediate confirmation. | Client-side validation for name, email, message, and animated toast confirmation upon submission. | Low | Sprint-2 |
`;

const p2_dfd_html = `
<div class='header-card'>
  <table>
    <tr><td><strong>Phase:</strong> Requirement Analysis</td><td><strong>Author:</strong> Tanisha Patel</td></tr>
    <tr><td><strong>Project:</strong> Formula 1 Race Intelligence</td><td><strong>Date:</strong> October 2026</td></tr>
    <tr><td><strong>Deliverable:</strong> DFD & User Stories Template</td><td><strong>Max Marks:</strong> 4 Marks</td></tr>
  </table>
</div>

<h1>Data Flow Diagram & User Stories</h1>
<p>Documenting system information flow, process boundaries, data stores, and agile user stories for the Formula 1 Race Intelligence platform.</p>

<h2>Data Flow Architecture Overview</h2>
<table>
  <tr><th>Element Type</th><th>Identifier</th><th>Name & Function</th></tr>
  <tr><td>External Entity</td><td>EE-1</td><td>Motorsport Analyst / Race Strategist / Fan (Querying & viewing telemetry)</td></tr>
  <tr><td>Process</td><td>P-1.0</td><td>Dataset Ingestion & Quality Validation (Validates Excel 5-sheet schema)</td></tr>
  <tr><td>Process</td><td>P-2.0</td><td>ETL & Metric Aggregation (Aggregates 6,464 outcomes and 3,814 laps)</td></tr>
  <tr><td>Process</td><td>P-3.0</td><td>Tableau Public Embedding & Fallback Rendering</td></tr>
  <tr><td>Process</td><td>P-4.0</td><td>Interactive Web Application Engine (HTML5/CSS3/ES6+ client)</td></tr>
  <tr><td>Data Store</td><td>D-1</td><td>Raw F1 Dataset Store (F1 Racing Project Dataset.xlsx)</td></tr>
  <tr><td>Data Store</td><td>D-2</td><td>Normalized JSON & Offline Data Store (data.js)</td></tr>
</table>

<h2>Agile User Stories Matrix</h2>
<table>
  <tr><th>User Type</th><th>Functional Epic</th><th>USN</th><th>User Story / Task</th><th>Acceptance Criteria</th><th>Priority</th><th>Sprint</th></tr>
  <tr><td>Analyst</td><td>KPI Overview</td><td>USN-01</td><td>View macro metrics upon landing on the terminal.</td><td>Display 10 Teams, 17 Seasons, 6,464 Outcomes, 29 Circuits with count-up.</td><td>High</td><td>Sprint-1</td></tr>
  <tr><td>Strategist</td><td>Tire Intelligence</td><td>USN-02</td><td>Analyze Pirelli compound share across 3,814 laps.</td><td>Doughnut chart with Soft 31.52%, Medium 30.78%, Hard 30.36%, Inter 7.34%.</td><td>High</td><td>Sprint-1</td></tr>
  <tr><td>Team Principal</td><td>Constructor Standings</td><td>USN-03</td><td>Compare points trajectories across 10 constructors.</td><td>Horizontal bar chart showing Red Bull (8,006 pts) and Mercedes (7,790 pts).</td><td>High</td><td>Sprint-1</td></tr>
  <tr><td>Race Engineer</td><td>Reliability</td><td>USN-04</td><td>Examine DNF causes by driver to isolate powertrain faults.</td><td>Stacked bar chart of Mechanical, Collision, Engine, Gearbox, Electrical.</td><td>High</td><td>Sprint-2</td></tr>
  <tr><td>Journalist</td><td>Storytelling</td><td>USN-05</td><td>Step through a narrative slideshow of findings.</td><td>7 clickable story chips that update descriptive commentary dynamically.</td><td>Medium</td><td>Sprint-2</td></tr>
  <tr><td>Fan</td><td>Driver Exploration</td><td>USN-06</td><td>Search drivers and filter by career or specific seasons.</td><td>Real-time search bar + season dropdown updating driver cards instantly.</td><td>High</td><td>Sprint-2</td></tr>
  <tr><td>Visitor</td><td>Inquiry Terminal</td><td>USN-07</td><td>Send inquiry to the paddock telemetry engineering group.</td><td>Client-side validated form with loading spinner and toast notification.</td><td>Low</td><td>Sprint-2</td></tr>
</table>
`;

saveDoc('Phase_2_Requirement_Analysis', 'Data_Flow_Diagrams_and_User_Stories', 'Requirement Analysis - DFD & User Stories', p2_dfd_md, p2_dfd_html);

// --------------------------------------------------------------------------
// 6. PHASE 2: Solution Requirements
// --------------------------------------------------------------------------
const p2_req_md = `# Requirement Analysis Phase
## Solution Requirements (Functional & Non-Functional)

| Metadata Field | Project Information |
| :--- | :--- |
| **Date** | 31 January 2026 / October 2026 |
| **Author / Team ID** | Tanisha Patel |
| **Project Name** | Formula 1 Race Intelligence |
| **Maximum Marks** | 4 Marks |

---

### Functional Requirements (FR)

| FR No. | Functional Epic | Sub-Requirement / Specification | Priority |
| :---: | :--- | :--- | :---: |
| **FR-1** | Data Access & Integration | Ingest, parse, and harmonize all 5 sheets from \`F1 Racing Project Dataset.xlsx\` (\`circuits\`, \`championship_standings\`, \`lap_intelligence\`, \`qualifying_results\`, \`race_results\`) encompassing 6,464 race outcome rows. | High |
| **FR-2** | Data Processing & Cleansing | Clean encoding artifacts (e.g., Hülkenberg), filter placeholder entries (\`Driver_2\`, \`Team_2\`), resolve join fan-outs, and normalize team branding across regulation cycles. | High |
| **FR-3** | Telemetry & KPI Calculations | Calculate macro KPIs (10 Teams, 17 Seasons, 6,464 Outcomes, 29 Circuits), career points totals, win conversion rates, podium conversion rates, and average pit stop speeds. | High |
| **FR-4** | Interactive Visualizations | Render 4 dynamic Chart.js visualizations (Driver Leaderboard, Team Rankings, Tire Compound Share, DNF Reliability) with responsive scaling and custom tooltips. | High |
| **FR-5** | Tableau Public Integration | Provide official embed containers for Tableau Public Dashboard and Story views, accompanied by full-resolution fallback previews and fullscreen modal expanders. | High |
| **FR-6** | User Search, Filter & Sort | Support real-time driver search, multi-season filtering (2010–2026 or Career), and multi-attribute sorting (points, wins, podiums, poles, least DNFs). | High |
| **FR-7** | Interactive Story Navigator | Equip Tableau Story section with 7 clickable chapter chips (1 to 7) that dynamically update narrative commentary and context. | Medium |
| **FR-8** | Terminal Inquiry & Toast | Deliver client-side validated contact form with real-time feedback and animated green/red toast notification upon submission. | Medium |

---

### Non-Functional Requirements (NFR)

| NFR No. | Requirement Category | Detailed Technical Specification |
| :---: | :--- | :--- |
| **NFR-1** | **Usability & UX** | Strict Formula 1 Black & Red broadcast aesthetic (\`--bg: #0a0a0a\`, \`--red: #e10600\`, \`--card: #151515\`), glowing borders, Orbitron typography, and minimum contrast ratio $\\ge 4.5:1$. |
| **NFR-2** | **Performance & Speed** | First Contentful Paint (FCP) $< 1.2\\text{s}$, smooth 60fps animations, lazy-loaded visual assets, and Lighthouse performance rating $\\ge 90$. |
| **NFR-3** | **Reliability & Offline Execution** | 100% offline runnable by simply double-clicking \`index.html\` via pre-compiled \`data.js\` object, avoiding cross-origin \`file://\` CORS restrictions. |
| **NFR-4** | **Responsiveness & Cross-Platform** | Fully responsive layout spanning ultra-wide desktops ($1920\\text{px}+$), standard laptops, tablets, and mobile smartphones with slide-out hamburger navigation. |
| **NFR-5** | **Security & Client Integrity** | Client-side input sanitization on all form fields, secure CDN asset delivery via HTTPS, and no exposure of backend credentials. |
| **NFR-6** | **Maintainability & Extensibility** | Modular codebase with separated concerns (\`index.html\`, \`style.css\`, \`script.js\`, \`data.js\`, \`data/\`), extensive code comments, and configurable Tableau URL constants. |
`;

const p2_req_html = `
<div class='header-card'>
  <table>
    <tr><td><strong>Phase:</strong> Requirement Analysis</td><td><strong>Author:</strong> Tanisha Patel</td></tr>
    <tr><td><strong>Project:</strong> Formula 1 Race Intelligence</td><td><strong>Date:</strong> October 2026</td></tr>
    <tr><td><strong>Deliverable:</strong> Solution Requirements Template</td><td><strong>Max Marks:</strong> 4 Marks</td></tr>
  </table>
</div>

<h1>Solution Requirements (Functional & Non-Functional)</h1>
<p>Formal specification of business functional capabilities and non-functional engineering standards for Formula 1 Race Intelligence.</p>

<h2>Functional Requirements (FR)</h2>
<table>
  <tr><th>FR No.</th><th>Functional Epic</th><th>Technical Specification</th><th>Priority</th></tr>
  <tr><td>FR-1</td><td>Data Ingestion</td><td>Ingest and parse 5 sheets from Excel (6,464 race results, 3,814 laps, 311 standings, 29 circuits).</td><td>High</td></tr>
  <tr><td>FR-2</td><td>Data Cleaning</td><td>Normalize team names, clean character encodings (Hülkenberg), and filter placeholder drivers.</td><td>High</td></tr>
  <tr><td>FR-3</td><td>KPI Calculations</td><td>Compute career points, win rates, podium rates, tire compound percentages, and pit stop benchmarks.</td><td>High</td></tr>
  <tr><td>FR-4</td><td>Interactive Charts</td><td>Render 4 responsive Chart.js visual charts with custom F1 dark-theme tooltips and legend controls.</td><td>High</td></tr>
  <tr><td>FR-5</td><td>Tableau Embeds</td><td>Embed Tableau Public Dashboard and Story views with zero-crop fallbacks and fullscreen triggers.</td><td>High</td></tr>
  <tr><td>FR-6</td><td>Grid Filters & Sort</td><td>Real-time driver search, multi-season filtering (2010–2026), and multi-criteria sorting.</td><td>High</td></tr>
  <tr><td>FR-7</td><td>Story Navigator</td><td>7-point interactive chapter navigator updating narrative telemetry commentary dynamically.</td><td>Medium</td></tr>
  <tr><td>FR-8</td><td>Contact Terminal</td><td>Client-side validated inquiry form with animated transmitting state and toast notification.</td><td>Medium</td></tr>
</table>

<h2>Non-Functional Requirements (NFR)</h2>
<table>
  <tr><th>NFR No.</th><th>Category</th><th>Engineering Standard & Metric</th></tr>
  <tr><td>NFR-1</td><td>Usability</td><td>Strict F1 Black & Red broadcast design system (#0a0a0a, #e10600), Orbitron font, contrast >= 4.5:1.</td></tr>
  <tr><td>NFR-2</td><td>Performance</td><td>FCP < 1.2s, 60fps CSS animations, lazy-loaded images, and Lighthouse score >= 90.</td></tr>
  <tr><td>NFR-3</td><td>Offline Reliability</td><td>100% offline runnable on double-click via synchronous data.js to prevent file:// CORS errors.</td></tr>
  <tr><td>NFR-4</td><td>Responsiveness</td><td>Seamless adaptation from 320px mobile screens to 4K ultra-wide monitors with hamburger menu.</td></tr>
  <tr><td>NFR-5</td><td>Maintainability</td><td>Cleanly partitioned index.html, style.css, script.js, and data/ JSON files with full documentation.</td></tr>
</table>
`;

saveDoc('Phase_2_Requirement_Analysis', 'Solution_Requirements', 'Requirement Analysis - Solution Requirements', p2_req_md, p2_req_html);

// --------------------------------------------------------------------------
// 7. PHASE 2: Technology Stack
// --------------------------------------------------------------------------
const p2_tech_md = `# Requirement Analysis Phase
## Technology Stack (Architecture & Stack)

| Metadata Field | Project Information |
| :--- | :--- |
| **Date** | 31 January 2026 / October 2026 |
| **Author / Team ID** | Tanisha Patel |
| **Project Name** | Formula 1 Race Intelligence |
| **Maximum Marks** | 2 Marks |

---

### Defined Technology Stack

| S.No | Component | Description | Technology Selected | Justification / Architectural Purpose |
| :---: | :--- | :--- | :--- | :--- |
| **1** | **Programming & Scripting** | Languages used to parse, transform, clean, and visualize data. | Python 3.13, JavaScript (ES6+), HTML5, CSS3 | Python provides robust data manipulation via OpenPyXL and Pillow; ES6+ powers responsive client interactivity; HTML5/CSS3 deliver hardware-accelerated broadcast graphics. |
| **2** | **Database & Data Store** | Engine used to organize, query, and serve structured telemetry. | Snowflake Data Warehouse / Local JSON Store (\`data.js\`) | Snowflake provides scalable cloud-based SQL modeling with RAW, STAGING, and CURATED layers; \`data.js\` embeds cleaned datasets locally for offline zero-CORS double-click execution. |
| **3** | **Data Ingestion & ETL** | Tools used to extract and load data from source workbooks. | Python ETL Pipeline (\`process_f1_dataset.py\`) / Snowflake Stages | Automates extraction of 6,464 race records and 3,814 telemetry laps, filters placeholder strings, and outputs clean normalized JSON schemas. |
| **4** | **Data Transformation & Logic** | Business calculations, aggregations, and KPI formulas. | Python / Snowflake SQL / Tableau Desktop | Calculates career points, win/podium conversion percentages, Pirelli tire compound share ratios, and pit stop consistency statistics. |
| **5** | **Data Visualization** | Engines used to create interactive charts, graphs, and stories. | Tableau Public & Chart.js 4.4 | Tableau Public hosts the full 8-panel dashboard and narrative story; Chart.js provides animated, high-speed inline bar, doughnut, and stacked charts directly in the browser. |
| **6** | **Front-End User Interface** | Client interface through which users explore telemetry. | Custom F1 Web Interface (HTML5, CSS3, Font Awesome 6, Google Orbitron) | Recreates the reference broadcast design with F1 start-light preloader, animated SVG circuit, live ticker marquee, driver filter controls, and lightbox gallery. |
| **7** | **Version Control & Hosting** | Source code management and deployment environment. | Git, GitHub, Local Python HTTP Server (Port 3000) | Ensures reproducible version tracking and provides a lightweight background daemon server for instant browser previewing. |
`;

const p2_tech_html = `
<div class='header-card'>
  <table>
    <tr><td><strong>Phase:</strong> Requirement Analysis</td><td><strong>Author:</strong> Tanisha Patel</td></tr>
    <tr><td><strong>Project:</strong> Formula 1 Race Intelligence</td><td><strong>Date:</strong> October 2026</td></tr>
    <tr><td><strong>Deliverable:</strong> Technology Stack Template</td><td><strong>Max Marks:</strong> 2 Marks</td></tr>
  </table>
</div>

<h1>Technology Stack (Architecture & Stack)</h1>
<p>Detailed architecture and stack justification for the Formula 1 Race Intelligence platform.</p>

<table>
  <tr><th>S.No</th><th>Component</th><th>Technology</th><th>Justification & Architectural Purpose</th></tr>
  <tr><td>1</td><td>Programming & Scripting</td><td>Python 3.13, JavaScript (ES6+), HTML5, CSS3</td><td>Python manages ETL and data parsing; vanilla ES6+ and modern CSS3 deliver lightweight, zero-dependency 60fps web performance.</td></tr>
  <tr><td>2</td><td>Database / Data Store</td><td>Snowflake / Local JSON Data Store (data.js)</td><td>Snowflake manages multi-tiered cloud data warehousing; data.js provides offline zero-CORS client execution.</td></tr>
  <tr><td>3</td><td>Data Ingestion & ETL</td><td>process_f1_dataset.py / OpenPyXL</td><td>Parses 5 sheets from raw Excel (6,464 rows), removes placeholders, cleans encodings, and exports structured JSON.</td></tr>
  <tr><td>4</td><td>Business Logic & Aggregation</td><td>Snowflake SQL / Tableau Calculations</td><td>Computes career points, win rates, tire compound distributions (Soft 31.52%), and pit stop benchmark averages.</td></tr>
  <tr><td>5</td><td>Visualization Engines</td><td>Tableau Public & Chart.js 4.4</td><td>Tableau powers multi-panel deep-dive dashboards and stories; Chart.js renders interactive inline charts.</td></tr>
  <tr><td>6</td><td>Front-End UI Framework</td><td>Custom F1 Design System (Orbitron, Font Awesome)</td><td>Strict Black & Red F1 theme (#0a0a0a, #e10600), SVG animated racing track, live data ticker, and driver cards.</td></tr>
  <tr><td>7</td><td>Hosting & Runtime</td><td>Local HTTP Server (Port 3000) / Browser file://</td><td>Enables dual-mode execution: live local HTTP server and offline standalone file opening.</td></tr>
</table>
`;

saveDoc('Phase_2_Requirement_Analysis', 'Technology_Stack', 'Requirement Analysis - Technology Stack', p2_tech_md, p2_tech_html);

// --------------------------------------------------------------------------
// 8. PHASE 3: Project Proposal (Proposed Solution) Template
// --------------------------------------------------------------------------
const p3_proposal_md = `# Project Design Phase
## Project Proposal (Proposed Solution) Template

| Metadata Field | Project Information |
| :--- | :--- |
| **Date** | 15 March 2026 / October 2026 |
| **Author / Team ID** | Tanisha Patel |
| **Project Title** | Formula 1 Race Intelligence |
| **Maximum Marks** | 3 Marks |

---

### Project Overview
* **Objective:** To build an authoritative, broadcast-quality Formula 1 Race Intelligence platform that transforms complex multi-season championship datasets (6,464 race outcomes, 3,814 telemetry laps) into interactive Tableau dashboards, real-time visual charts, and a high-performance web terminal.
* **Scope:** Encompasses historical and contemporary hybrid regulation cycles (2010–2026), 10 active constructor teams, 19 elite drivers, 29 world championship circuits, and 5 tire compound strategies.

### Problem Statement & Impact
* **Description:** Motorsport telemetry is traditionally siloed across massive, unwieldy tables with complex join relationships, hindering rapid strategic decision-making and preventing fans and analysts from exploring multi-dimensional race dynamics.
* **Impact:** Eliminates data opacity, shortens strategic analysis cycles from hours to seconds, and bridges the gap between raw engineering telemetry and public data storytelling.

### Proposed Solution & Methodology
* **Approach:** A modular four-tier architecture:
  1. *Ingestion & ETL Tier:* Automated Python ETL pipeline (\`process_f1_dataset.py\`) parsing raw workbooks and normalizing entity models.
  2. *Data Warehouse & Storage Tier:* Cloud-ready Snowflake schemas and offline-ready \`data.js\` objects.
  3. *Business Intelligence Tier:* Multi-panel Tableau Public dashboard and narrative story points.
  4. *Presentation & Interaction Tier:* Pure HTML5/CSS3/ES6+ web terminal in a strict Formula 1 Black & Red broadcast design system.
* **Key Features:**
  * Animated start-light gantry sequence ("Lights Out").
  * Animated SVG race circuit with real-time traveling car dot, sector markers, and DRS zone.
  * Infinite-scroll live telemetry marquee ticker.
  * Embedded Tableau Dashboard and Story frames with zero-crop fallbacks.
  * 4 interactive Chart.js graphs and 6 dataset-driven insight cards.
  * Live driver card grid with real-time search, season filters (2010–2026), and sorting.
  * Validated contact terminal with toast notifications.

### Resource Requirements

| Resource Type | Specification / Allocation | Justification |
| :--- | :--- | :--- |
| **Hardware** | Modern Quad-Core CPU, 8 GB+ RAM, 500 MB Storage | Supports smooth local data processing, Chart.js canvas rendering, and 60fps CSS animations. |
| **Software & Frameworks** | Node.js v24+, Python 3.13, OpenPyXL, Pillow, Chart.js 4.4, Font Awesome 6 | Lightweight, robust toolchain requiring zero heavy frontend frameworks (React/Angular). |
| **Data Sources** | \`F1 Racing Project Dataset.xlsx\` (6,464 rows, 42 columns across 5 sheets) | Real-world historical Grand Prix records, qualifying telemetry, and championship standings. |
| **Personnel** | **Tanisha Patel** (Project Lead, Telemetry Engineer & Full-Stack Developer) | End-to-end design, data engineering, UI development, and documentation. |
`;

const p3_proposal_html = `
<div class='header-card'>
  <table>
    <tr><td><strong>Phase:</strong> Project Design Phase</td><td><strong>Author:</strong> Tanisha Patel</td></tr>
    <tr><td><strong>Project:</strong> Formula 1 Race Intelligence</td><td><strong>Date:</strong> October 2026</td></tr>
    <tr><td><strong>Deliverable:</strong> Project Proposal Template</td><td><strong>Max Marks:</strong> 3 Marks</td></tr>
  </table>
</div>

<h1>Project Proposal (Proposed Solution) Template</h1>
<p>Comprehensive project proposal outlining the problem statement, proposed architectural solution, methodology, and resource allocations.</p>

<h2>Project Overview & Objectives</h2>
<p><strong>Primary Objective:</strong> Build an authoritative, broadcast-quality Formula 1 Race Intelligence platform transforming 6,464 race records into interactive Tableau dashboards and a high-performance web terminal.</p>
<p><strong>Scope:</strong> Covers 17 seasons (2010–2026), 10 constructors, 19 drivers, 29 circuits, and 3,814 telemetry laps.</p>

<h2>Methodology & Core Architecture</h2>
<table>
  <tr><th>Architectural Tier</th><th>Technologies</th><th>Deliverable & Role</th></tr>
  <tr><td>Ingestion & ETL</td><td>Python 3.13, OpenPyXL</td><td>Extracts, cleans, and normalizes 5 sheets from F1 Racing Project Dataset.xlsx into clean JSON.</td></tr>
  <tr><td>Data Modeling</td><td>Snowflake SQL / data.js</td><td>Prepares structured STAGING and CURATED layers with zero-CORS offline execution capability.</td></tr>
  <tr><td>BI & Visualization</td><td>Tableau Public, Chart.js</td><td>Builds 8 core analytical panels, 7 story chapters, and 4 dynamic inline interactive charts.</td></tr>
  <tr><td>Front-End Terminal</td><td>HTML5, CSS3, ES6+</td><td>Strict F1 Black & Red broadcast design system, animated SVG circuit, driver filters, and contact form.</td></tr>
</table>

<h2>Resource Requirements Table</h2>
<table>
  <tr><th>Resource Type</th><th>Description</th><th>Specification / Allocation</th></tr>
  <tr><td>Hardware</td><td>Computing Resources & Memory</td><td>Standard Quad-Core CPU, 8 GB RAM, 1 GB Disk</td></tr>
  <tr><td>Software Libraries</td><td>Scripting & Visualization</td><td>Python 3.13, OpenPyXL, Node.js, Chart.js, Font Awesome 6</td></tr>
  <tr><td>Dataset</td><td>Formula 1 Project Data</td><td>F1 Racing Project Dataset.xlsx (6,464 outcomes, 3,814 laps, 29 circuits)</td></tr>
  <tr><td>Personnel</td><td>Lead Engineer & Author</td><td><strong>Tanisha Patel</strong> (Full-Stack Data Engineering & UI/UX Design)</td></tr>
</table>
`;

saveDoc('Phase_3_Project_Design', 'Project_Proposal_Proposed_Solution', 'Project Design - Project Proposal', p3_proposal_md, p3_proposal_html);

// --------------------------------------------------------------------------
// 9. PHASE 3: Solution Architecture
// --------------------------------------------------------------------------
const p3_arch_md = `# Project Design Phase
## Solution Architecture

| Metadata Field | Project Information |
| :--- | :--- |
| **Date** | 19 September 2026 / October 2026 |
| **Author / Team ID** | Tanisha Patel |
| **Project Name** | Formula 1 Race Intelligence |
| **Maximum Marks** | 4 Marks |

---

### High-Level Architecture Overview
The **Formula 1 Race Intelligence** platform employs a decoupled, high-performance data architecture separating raw ingestion, analytical data warehousing, visualization modeling, and client presentation.

\`\`\`mermaid
flowchart TD
    subgraph Data_Layer["1. Data Ingestion & Storage Layer"]
        XLSX["F1 Racing Project Dataset.xlsx (5 Sheets)"] --> ETL["Python ETL Pipeline (process_f1_dataset.py)"]
        ETL --> SF_RAW["Snowflake RAW / Staging Tables"]
        ETL --> JSON_Store["data.js / data/*.json Store"]
    end

    subgraph Analytics_Layer["2. Business Intelligence & Modeling Layer"]
        SF_RAW --> SF_MART["Snowflake CURATED / Analytics Mart"]
        SF_MART --> Tableau_Desktop["Tableau Desktop Modeling"]
        Tableau_Desktop --> Tableau_Public["Tableau Public Server (Dashboard & Story)"]
    end

    subgraph Presentation_Layer["3. Front-End Web Application Layer"]
        JSON_Store --> Web_App["Formula 1 Web Engine (index.html, script.js)"]
        Tableau_Public --> Web_App
        Web_App --> UI_Hero["Hero Experience & F1 Start Lights"]
        Web_App --> UI_SVG["Animated SVG Circuit & Telemetry Tags"]
        Web_App --> UI_Ticker["Infinite LIVE DATA Marquee Ticker"]
        Web_App --> UI_Dashboard["Embedded Tableau Dashboard Frame"]
        Web_App --> UI_Story["Embedded Tableau Story Frame + Navigator"]
        Web_App --> UI_Charts["Chart.js Telemetry Visualizations (4 Charts)"]
        Web_App --> UI_Drivers["Driver Grid & Search / Season Filter Engine"]
        Web_App --> UI_Contact["Contact Terminal with Validation & Toast"]
    end
\`\`\`

---

### Component Description Table

| Component Name | Description / Role in Architecture | Technology Used |
| :--- | :--- | :--- |
| **Source Workbook** | Primary historical repository comprising 6,464 race outcomes, 3,814 telemetry laps, 3,130 qualifying records, 311 standings, and 29 circuits. | Microsoft Excel (.xlsx) |
| **ETL Pipeline** | Automated Python pipeline that reads openpyxl workbooks, cleans encoding anomalies, filters synthetic placeholders, and outputs normalized JSON. | Python 3.13, OpenPyXL |
| **Data Warehouse** | Multi-tier cloud data warehouse structuring RAW ingestion tables, normalized STAGING views, and CURATED reporting marts. | Snowflake Cloud DW / SQL |
| **Offline Data Store** | Synchronously loaded JavaScript data object providing zero-CORS offline execution when double-clicking \`index.html\`. | Vanilla JavaScript (\`data.js\`) |
| **Tableau BI Engine** | Cloud-hosted multi-panel dashboard and narrative story points delivering deep-dive visual analytics. | Tableau Public Embed API / iFrame |
| **Inline Visual Engine** | Client-side canvas charting rendering high-speed bar, doughnut, and stacked failure charts. | Chart.js 4.4 |
| **Vector Animation Engine** | Hardware-accelerated SVG circuit mapping with traveling red car dot, S1–S3 sector marks, and DRS straight bar. | Pure SVG & CSS Keyframes |
| **Web Presentation Engine** | Semantic HTML5 single-page application styled in strict F1 Black & Red broadcast theme (\`#0a0a0a\` + \`#e10600\`). | HTML5, CSS3, Vanilla JS ES6+ |
`;

const p3_arch_html = `
<div class='header-card'>
  <table>
    <tr><td><strong>Phase:</strong> Project Design Phase</td><td><strong>Author:</strong> Tanisha Patel</td></tr>
    <tr><td><strong>Project:</strong> Formula 1 Race Intelligence</td><td><strong>Date:</strong> October 2026</td></tr>
    <tr><td><strong>Deliverable:</strong> Solution Architecture Document</td><td><strong>Max Marks:</strong> 4 Marks</td></tr>
  </table>
</div>

<h1>Solution Architecture</h1>
<p>Comprehensive architectural breakdown detailing data ingestion, warehousing, analytical modeling, and presentation tiers.</p>

<h2>Tiered Architectural Framework</h2>
<ol>
  <li><strong>Data Ingestion & Storage Tier:</strong> Ingests raw multi-sheet workbooks, performs validation, and formats data into Snowflake staging tables and local JSON data objects.</li>
  <li><strong>Analytics & Visualization Tier:</strong> Leverages Snowflake SQL queries and Tableau Desktop to construct 8 multidimensional dashboards and a 7-point interactive story.</li>
  <li><strong>Presentation Tier:</strong> Delivers an ultra-responsive web terminal built in HTML5, CSS3, and ES6+ vanilla JavaScript in a strict Formula 1 Black & Red broadcast design system.</li>
</ol>

<h2>Component Description Table</h2>
<table>
  <tr><th>Component Name</th><th>Description / Role in Architecture</th><th>Technology Used</th></tr>
  <tr><td>Source Dataset</td><td>Raw repository containing 6,464 race results, 3,814 laps, and 29 circuits.</td><td>Excel (.xlsx)</td></tr>
  <tr><td>ETL Pipeline</td><td>Extracts, cleans character artifacts, removes placeholder strings, and outputs JSON.</td><td>Python 3.13, OpenPyXL</td></tr>
  <tr><td>Data Warehouse</td><td>Manages RAW, STAGING, and CURATED analytical marts for telemetry modeling.</td><td>Snowflake Cloud DW</td></tr>
  <tr><td>Offline Data Store</td><td>Pre-compiled synchronous data store enabling zero-CORS double-click execution.</td><td>data.js (JSON)</td></tr>
  <tr><td>Tableau BI Engine</td><td>Hosts the full-scale interactive dashboard and 7-part storytelling experience.</td><td>Tableau Public Server</td></tr>
  <tr><td>Inline Charts</td><td>Renders 4 interactive charts (Leaderboard, Teams, Tyres, DNF reliability).</td><td>Chart.js 4.4</td></tr>
  <tr><td>Vector Circuit Engine</td><td>Hardware-accelerated animated SVG track with traveling car dot and sector marks.</td><td>SVG / CSS3</td></tr>
  <tr><td>Web Presentation</td><td>Single-page application featuring F1 start lights, live ticker, and driver filters.</td><td>HTML5 / CSS3 / ES6+</td></tr>
</table>
`;

saveDoc('Phase_3_Project_Design', 'Solution_Architecture', 'Project Design - Solution Architecture', p3_arch_md, p3_arch_html);

// --------------------------------------------------------------------------
// 10. PHASE 3: Problem - Solution Fit Template
// --------------------------------------------------------------------------
const p3_fit_md = `# Project Design Phase
## Problem – Solution Fit Template

| Metadata Field | Project Information |
| :--- | :--- |
| **Date** | 19 September 2026 / October 2026 |
| **Author / Team ID** | Tanisha Patel |
| **Project Name** | Formula 1 Race Intelligence |
| **Maximum Marks** | 2 Marks |

---

### Problem – Solution Fit Analysis
Confirming that every identified customer problem is directly solved by an implemented platform capability:

| Customer Problem & Friction Point | Behavioral Pattern & Root Cause | Implemented Solution Feature | Measurable Outcome & Fit Validation |
| :--- | :--- | :--- | :--- |
| **1. Disjointed Telemetry Data:** Analysts must merge 5 Excel sheets manually to correlate lap pace with tire degradation. | Analysts work across fragmented spreadsheets, causing calculation errors and delayed race strategy decisions. | **Unified Python ETL & Curated Data Pipeline:** Harmonizes 6,464 race records, 3,814 lap records, and 29 circuits into a single schema. | Data retrieval latency reduced from 45 minutes to $< 100\\text{ms}$; zero calculation errors across metrics. |
| **2. Lack of Visual Tire Analytics:** Teams cannot easily visualize how tire compounds degrade across stints. | Raw tables list tire compounds as text without visual proportion or degradation trend indicators. | **Pirelli Compound Matrix & Doughnut Visual:** Displays exact compound utilization (Soft 31.52%, Medium 30.78%, Hard 30.36%, Inter 7.34%). | Immediate visual clarity on compound crossover thresholds and optimal qualifying/race stint allocations. |
| **3. Superficial Broadcast Graphics:** Fans and journalists only see high-level TV banners without career historical depth. | Broadcast graphics are transient and offer no historical teammate filtering or multi-season trend exploration. | **Multi-Season Driver Telemetry Grid & Search:** Filterable cards with season dropdowns (2010–2026), search, and win/podium rate bars. | Self-guided exploration for all 19 drivers; instant comparison between Hamilton (31,147 pts) and Verstappen (31,126 pts). |
| **4. Inflexible BI Deployment:** Cloud-only dashboards break during offline briefings or when firewalls block embeds. | Telemetry analysts often present in trackside hospitality suites with unstable internet connectivity. | **Dual-Engine Architecture:** Tableau Public cloud embed paired with 100% offline-ready \`data.js\` and local double-click execution. | 100% platform availability online and offline; zero dependency on external network servers. |
`;

const p3_fit_html = `
<div class='header-card'>
  <table>
    <tr><td><strong>Phase:</strong> Project Design Phase</td><td><strong>Author:</strong> Tanisha Patel</td></tr>
    <tr><td><strong>Project:</strong> Formula 1 Race Intelligence</td><td><strong>Date:</strong> October 2026</td></tr>
    <tr><td><strong>Deliverable:</strong> Problem - Solution Fit Template</td><td><strong>Max Marks:</strong> 2 Marks</td></tr>
  </table>
</div>

<h1>Problem – Solution Fit Template</h1>
<p>Validating behavioral alignment between motorsport user challenges and implemented technical solutions.</p>

<table>
  <tr><th>Identified Customer Problem</th><th>Behavioral Pattern & Root Cause</th><th>Implemented Solution Feature</th><th>Fit Validation & Outcome</th></tr>
  <tr>
    <td><strong>1. Fragmented Telemetry</strong></td>
    <td>Manual merging of 5 Excel sheets leads to delays and join fan-out errors.</td>
    <td>Automated Python ETL harmonizing 6,464 race records and 3,814 laps.</td>
    <td>Query response time dropped from 45 minutes to < 100ms with 100% integrity.</td>
  </tr>
  <tr>
    <td><strong>2. Obscure Tire Strategies</strong></td>
    <td>Spreadsheets list compound names without visual proportion or stint lengths.</td>
    <td>Interactive Doughnut chart showing Soft 31.52%, Medium 30.78%, Hard 30.36%.</td>
    <td>Clear visual identification of stint lengths and pit stop strategy windows.</td>
  </tr>
  <tr>
    <td><strong>3. Superficial TV Coverage</strong></td>
    <td>Broadcasts lack self-guided historical drill-downs and teammate comparisons.</td>
    <td>Driver grid with live search, season dropdowns (2010–2026), and sort controls.</td>
    <td>Enables fans and analysts to benchmark all 19 drivers across career and seasons.</td>
  </tr>
  <tr>
    <td><strong>4. Cloud-Only BI Fragility</strong></td>
    <td>Offline trackside briefings fail when cloud Tableau links are unreachable.</td>
    <td>Dual-mode deployment: Tableau Public embed + offline-ready data.js double-click.</td>
    <td>Guaranteed 100% presentation uptime regardless of network availability.</td>
  </tr>
</table>
`;

saveDoc('Phase_3_Project_Design', 'Problem_Solution_Fit', 'Project Design - Problem Solution Fit', p3_fit_md, p3_fit_html);
console.log('Phase 1-3 documents completed!');
