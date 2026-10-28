/**
 * FORMULA 1 RACE INTELLIGENCE - INTERACTIVE JAVASCRIPT
 * Comprehensive Frontend Engine & Telemetry Visualizer
 * Developed by: Tanisha Patel (Tableau: tanisha patel)
 */

// =============================================================================
// 1. TABLEAU PUBLIC EMBED CONFIGURATION
// Configured for Tanisha Patel's Published Tableau Workbooks
// =============================================================================
const DASHBOARD_URL = "https://prod-in-a.online.tableau.com/#/site/tanishapatelsk-aac6bafda5/views/F1RaceIntelligenceDashboard_2/FORMULA1RACEINTELLIGENCEDASHBOARD";
const STORY_URL = "https://prod-in-a.online.tableau.com/#/site/tanishapatelsk-aac6bafda5/views/F1RaceIntelligenceDashboard_2/Formula1RaceIntelligenceFromGlobalOverviewtoChampionshipSuccess";

// 9 Story scenes definitions for interactive chapter navigator
const STORY_POINTS_DATA = [
  {
    title: "Scene 1: KPI Summary Cards (4 Core Operational Metrics)",
    caption: "Foundation telemetry metrics establishing 10 Competing Teams, 17 Hybrid-Era Seasons (2010–2026), 6,464 Logged Race Outcomes, and 29 Worldwide Circuits."
  },
  {
    title: "Scene 2: Global Driver Distribution Across Grand Prix Nations",
    caption: "Dark Mapbox geographic projection mapping global driver origin clusters, international expansion, and race density across 29 worldwide Grand Prix host circuits."
  },
  {
    title: "Scene 3: Country-wise Race Participation",
    caption: "Participation volume treemap led by Bahrain International Circuit (2,168 outcomes), United States (400), Monaco (328), Spain (328), Brazil (308), and Canada (308)."
  },
  {
    title: "Scene 4: Team Championship Performance Analysis",
    caption: "Constructor championship points trajectory across hybrid regulation cycles, featuring Red Bull Racing's 8,006 accumulated haul and Mercedes-AMG's 7,790 points."
  },
  {
    title: "Scene 5: Driver Reliability Analysis",
    caption: "Stacked bar chart breakdown colored by DNF Reason (Engine, Collision, Transmission, Suspension, Brakes), demonstrating a 91.4% modern grid completion benchmark."
  },
  {
    title: "Scene 6: Driver Performance Leaderboard",
    caption: "Dynamic Top N vertical bar chart controlled by the Top N Parameter (default: 10), led by Lewis Hamilton (31,147 pts), Max Verstappen (31,126 pts), and Charles Leclerc (27,673 pts)."
  },
  {
    title: "Scene 7: Podium Achievements by Driver and Team",
    caption: "Packed bubble visualization sized by SUM(Podiums), comparing podium finishing frequency and clustering across top drivers and constructor pairings."
  },
  {
    title: "Scene 8: Tyre Compound Usage Distribution",
    caption: "Pirelli compound strategy matrix pie chart: Soft compound represents 31.52% of all telemetry laps, Medium accounts for 30.78%, Hard for 30.36%, and Intermediate for 7.34%."
  },
  {
    title: "Scene 9: Team Performance Ranking",
    caption: "Horizontal bar chart sorted descending by points, ranking all 10 active constructors across race pace deltas, pit stop execution consistency, and aerodynamic efficiency metrics."
  }
];

// Fallback dataset in case data.js is not loaded
const DEFAULT_F1_DATA = {
  kpis: {
    competing_teams: 10,
    seasons_in_play: 17,
    race_outcomes_logged: 6464,
    circuits_showcased: 29
  },
  tableau_leaderboard: [
    { driver: "Lewis Hamilton", points: 31147, team: "Mercedes", color: "#00A19B" },
    { driver: "Max Verstappen", points: 31126, team: "Red Bull Racing", color: "#3671C6" },
    { driver: "Charles Leclerc", points: 27673, team: "Ferrari", color: "#E8002D" },
    { driver: "Lando Norris", points: 26408, team: "McLaren", color: "#FF8000" },
    { driver: "Yuki Tsunoda", points: 14438, team: "RB (AlphaTauri)", color: "#6692FF" },
    { driver: "Esteban Ocon", points: 14205, team: "Alpine", color: "#0093CC" },
    { driver: "Carlos Sainz", points: 11004, team: "Ferrari", color: "#E8002D" },
    { driver: "Fernando Alonso", points: 1353, team: "Aston Martin", color: "#229971" }
  ],
  team_rankings: [
    { team: "Red Bull Racing", points: 8006, color: "#3671C6" },
    { team: "Mercedes", points: 7790, color: "#00A19B" },
    { team: "Ferrari", points: 5778, color: "#E8002D" },
    { team: "McLaren", points: 4270, color: "#FF8000" },
    { team: "Alpine", points: 1947, color: "#0093CC" },
    { team: "Aston Martin", points: 1181, color: "#229971" },
    { team: "Williams", points: 1057, color: "#64C4FF" },
    { team: "RB (AlphaTauri)", points: 923, color: "#6692FF" },
    { team: "Haas", points: 591, color: "#B6BABD" },
    { team: "Kick Sauber", points: 363, color: "#52E252" }
  ],
  tyre_distribution: [
    { compound: "Soft", percent: 31.52, color: "#e10600" },
    { compound: "Medium", percent: 30.78, color: "#ffd400" },
    { compound: "Hard", percent: 30.36, color: "#ffffff" },
    { compound: "Intermediate", percent: 7.34, color: "#22c55e" }
  ]
};

// Initialize active dataset
const telemetryData = (typeof F1_DATA !== 'undefined') ? F1_DATA : DEFAULT_F1_DATA;

// =============================================================================
// 2. DOCUMENT READY & INITIALIZATION
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initPreloader();
  initNavbar();
  initCounters();
  initTableauEmbeds();
  initStoryNavigator();
  initLightbox();
  initCharts();
  initDriversGrid();
  initContactForm();
  initBackToTop();
  initScrollAnimations();
});

// =============================================================================
// 3. F1 RACING LIGHT SEQUENCE PRELOADER ("LIGHTS OUT")
// =============================================================================
function initPreloader() {
  const preloader = document.getElementById("preloader");
  const statusText = document.getElementById("preloaderStatus");
  if (!preloader) return;

  const lights = [
    document.getElementById("light1"),
    document.getElementById("light2"),
    document.getElementById("light3"),
    document.getElementById("light4"),
    document.getElementById("light5")
  ];

  let currentLight = 0;
  const lightInterval = 320; // 320ms per red light

  const stepTimer = setInterval(() => {
    if (currentLight < lights.length) {
      if (lights[currentLight]) {
        lights[currentLight].classList.add("active");
      }
      currentLight++;
      if (statusText) {
        statusText.textContent = `FORMATION LAP COMPLETE [${currentLight}/5]`;
      }
    } else {
      clearInterval(stepTimer);
      // Brief random suspense delay before lights out (like real F1)
      setTimeout(() => {
        lights.forEach(l => l && l.classList.remove("active"));
        if (statusText) {
          statusText.textContent = "LIGHTS OUT AND AWAY WE GO!";
          statusText.classList.add("lights-out");
        }
        setTimeout(() => {
          preloader.classList.add("fade-out");
        }, 500);
      }, 700);
    }
  }, lightInterval);

  // Quick skip on click or keypress
  preloader.addEventListener("click", () => {
    clearInterval(stepTimer);
    preloader.classList.add("fade-out");
  });

  // Safety fallback after 3 seconds
  setTimeout(() => {
    if (!preloader.classList.contains("fade-out")) {
      preloader.classList.add("fade-out");
    }
  }, 3200);
}

// =============================================================================
// 4. NAVBAR SCROLL & ACTIVE LINK HIGHLIGHTING
// =============================================================================
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Sticky blur enhancement on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      const icon = hamburgerBtn.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
      }
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        const icon = hamburgerBtn.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-xmark");
        }
      });
    });
  }

  // Active link highlight on scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      const href = link.getAttribute("href");
      if (href === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

// =============================================================================
// 5. ANIMATED NUMBER COUNTERS (HERO STATS)
// =============================================================================
function initCounters() {
  const counterEls = document.querySelectorAll("[data-counter]");
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counterEls.forEach(el => {
          const target = parseInt(el.getAttribute("data-counter"), 10);
          const suffix = el.getAttribute("data-suffix") || "";
          const customFormat = el.getAttribute("data-format");
          const duration = 1800; // ms
          const start = 0;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad
            const easeOut = 1 - (1 - progress) * (1 - progress);
            const currentVal = Math.floor(easeOut * target);

            if (customFormat && progress >= 1) {
              el.textContent = customFormat;
            } else {
              el.textContent = currentVal.toLocaleString() + suffix;
            }

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            }
          }
          requestAnimationFrame(updateCounter);
        });
      }
    });
  }, { threshold: 0.3 });

  const heroSection = document.getElementById("home");
  if (heroSection) observer.observe(heroSection);
}

// =============================================================================
// 6. TABLEAU PUBLIC EMBEDDING & FALLBACK HANDLING
// =============================================================================
function formatTableauEmbedUrl(url) {
  if (!url) return "";
  let base = url.split("?")[0].replace(/\/+$/, "");
  if (base.includes("/#/site/")) {
    base = base.replace("/#/site/", "/t/");
  }
  return `${base}?:embed=yes&:showVizHome=no&:toolbar=yes&:tabs=no&:showAppBanner=false`;
}

function initTableauEmbeds() {
  const dashboardContainer = document.getElementById("tableauDashboardContainer");
  const storyContainer = document.getElementById("tableauStoryContainer");
  const fullscreenDashboardBtn = document.getElementById("openFullscreenDashboard");
  const fullscreenStoryBtn = document.getElementById("openFullscreenStory");
  const externalDashboardBtn = document.getElementById("openExternalDashboard");
  const externalStoryBtn = document.getElementById("openExternalStory");

  // Check if live Tableau Dashboard URL is provided
  const isRealDashboardUrl = DASHBOARD_URL && 
    DASHBOARD_URL.startsWith("http") && 
    !DASHBOARD_URL.includes("PASTE_YOUR_");

  if (isRealDashboardUrl && dashboardContainer) {
    const embedUrl = formatTableauEmbedUrl(DASHBOARD_URL);
    dashboardContainer.innerHTML = `
      <div class="tableau-iframe-frame">
        <iframe src="${embedUrl}"
                width="100%" height="860" frameborder="0"
                style="border:none; width:100%; min-height:860px; height:860px; display:block; background:#0a0a0f;"
                allowfullscreen="true"
                loading="lazy"
                title="Tableau Public Formula 1 Race Intelligence Dashboard"></iframe>
      </div>
    `;
  }

  // Check if live Tableau Story URL is provided
  const isRealStoryUrl = STORY_URL && 
    STORY_URL.startsWith("http") && 
    !STORY_URL.includes("PASTE_YOUR_");

  if (isRealStoryUrl && storyContainer) {
    const embedUrl = formatTableauEmbedUrl(STORY_URL);
    storyContainer.innerHTML = `
      <div class="tableau-iframe-frame">
        <iframe src="${embedUrl}"
                width="100%" height="860" frameborder="0"
                style="border:none; width:100%; min-height:860px; height:860px; display:block; background:#0a0a0f;"
                allowfullscreen="true"
                loading="lazy"
                title="Tableau Public Formula 1 Story"></iframe>
      </div>
    `;
  }

  // Fullscreen & External navigation listeners
  if (fullscreenDashboardBtn) {
    fullscreenDashboardBtn.addEventListener("click", () => {
      if (isRealDashboardUrl) {
        window.open(DASHBOARD_URL, "_blank");
      } else {
        const viewport = document.getElementById("dashboardViewport");
        if (viewport) {
          if (!document.fullscreenElement) {
            viewport.requestFullscreen().catch(() => window.open("assets/dashboard-preview.png", "_blank"));
          } else {
            document.exitFullscreen();
          }
        }
      }
    });
  }

  if (fullscreenStoryBtn) {
    fullscreenStoryBtn.addEventListener("click", () => {
      if (isRealStoryUrl) {
        window.open(STORY_URL, "_blank");
      }
    });
  }

  if (externalDashboardBtn) {
    externalDashboardBtn.addEventListener("click", () => {
      if (isRealDashboardUrl) window.open(DASHBOARD_URL, "_blank");
    });
  }

  if (externalStoryBtn) {
    externalStoryBtn.addEventListener("click", () => {
      if (isRealStoryUrl) window.open(STORY_URL, "_blank");
    });
  }
}

// =============================================================================
// 7. STORY POINTS INTERACTIVE NAVIGATOR
// =============================================================================
function initStoryNavigator() {
  const chipsRow = document.getElementById("storyChipsRow");
  const captionText = document.getElementById("storyCaptionText");
  if (!chipsRow || !captionText) return;

  const chips = chipsRow.querySelectorAll(".story-chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      const idx = parseInt(chip.getAttribute("data-point"), 10);
      if (STORY_POINTS_DATA[idx]) {
        captionText.textContent = `${STORY_POINTS_DATA[idx].title} — ${STORY_POINTS_DATA[idx].caption}`;
      }
    });
  });
}

// =============================================================================
// 8. LIGHTBOX MODAL FOR GALLERY
// =============================================================================
let currentLightboxIndex = 0;
const galleryItems = [
  { src: "assets/dashboard-preview.png", caption: "Tableau Public Dashboard: Full Telemetry & Analytics Hub" },
  { src: "assets/story-preview.png", caption: "Tableau Story: From Global Overview to Championship Success" },
  { src: "assets/hero-reference.png", caption: "Hero Experience & Live Race Analytics Platform" },
  { src: "assets/project-reference.png", caption: "Project Overview & Circuit Strategy Architecture" },
  { src: "assets/dimensions-reference.png", caption: "Intelligence Dimensions & Analytical Domains" },
  { src: "assets/dashboard-frame-reference.png", caption: "Race Intelligence Dashboard Window Interface" },
  { src: "assets/story-frame-reference.png", caption: "Tableau Story Frame Interface" }
];

function initLightbox() {
  const modal = document.getElementById("lightboxModal");
  const modalImg = document.getElementById("lightboxImg");
  const modalCaption = document.getElementById("lightboxCaption");
  const closeBtn = document.getElementById("lightboxCloseBtn");
  const prevBtn = document.getElementById("lightboxPrevBtn");
  const nextBtn = document.getElementById("lightboxNextBtn");
  const cards = document.querySelectorAll(".gallery-card");

  if (!modal || !modalImg) return;

  function openLightbox(index) {
    currentLightboxIndex = index;
    const item = galleryItems[index];
    if (item) {
      modalImg.src = item.src;
      modalCaption.textContent = item.caption;
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  function closeLightbox() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  function showNext() {
    currentLightboxIndex = (currentLightboxIndex + 1) % galleryItems.length;
    openLightbox(currentLightboxIndex);
  }

  function showPrev() {
    currentLightboxIndex = (currentLightboxIndex - 1 + galleryItems.length) % galleryItems.length;
    openLightbox(currentLightboxIndex);
  }

  cards.forEach((card, index) => {
    card.addEventListener("click", () => openLightbox(index));
  });

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (nextBtn) nextBtn.addEventListener("click", showNext);
  if (prevBtn) prevBtn.addEventListener("click", showPrev);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  });
}

// =============================================================================
// 9. DATASET VISUALIZATIONS (CHART.JS)
// =============================================================================
function initCharts() {
  // Chart.js global theme configuration
  Chart.defaults.color = "#9a9a9a";
  Chart.defaults.font.family = "'Inter', sans-serif";
  Chart.defaults.font.size = 11;

  // Chart 1: Driver Performance Leaderboard (Bar)
  const driverCtx = document.getElementById("driverLeaderboardChart");
  if (driverCtx) {
    const boardData = telemetryData.tableau_leaderboard || [
      { driver: "Lewis Hamilton", points: 31147 },
      { driver: "Max Verstappen", points: 31126 },
      { driver: "Charles Leclerc", points: 27673 },
      { driver: "Lando Norris", points: 26408 },
      { driver: "Yuki Tsunoda", points: 14438 },
      { driver: "Esteban Ocon", points: 14205 },
      { driver: "Carlos Sainz", points: 11004 },
      { driver: "Fernando Alonso", points: 1353 }
    ];

    new Chart(driverCtx, {
      type: "bar",
      data: {
        labels: boardData.map(d => d.driver),
        datasets: [{
          label: "Points Index",
          data: boardData.map(d => d.points),
          backgroundColor: [
            "#ffd400", // Hamilton gold
            "#b388ff", // Verstappen purple
            "#ff9800", // Leclerc orange
            "#4caf50", // Norris green
            "#ff80ab", // Tsunoda pink
            "#e53935", // Ocon red
            "#42a5f5", // Sainz blue
            "#26a69a"  // Alonso teal
          ],
          borderRadius: 4,
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#181818",
            titleFont: { family: "'Orbitron', sans-serif" },
            borderColor: "rgba(225,6,0,0.4)",
            borderWidth: 1,
            padding: 10
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              maxRotation: 35,
              minRotation: 20,
              font: { family: "'Rajdhani', sans-serif", size: 10 }
            }
          },
          y: {
            grid: { color: "rgba(255, 255, 255, 0.05)" },
            ticks: {
              callback: val => val >= 1000 ? `${(val / 1000).toFixed(0)}K` : val
            }
          }
        }
      }
    });
  }

  // Chart 2: Team Performance Ranking (Horizontal Bar)
  const teamCtx = document.getElementById("teamRankingChart");
  if (teamCtx) {
    const teams = telemetryData.team_rankings || [];
    new Chart(teamCtx, {
      type: "bar",
      data: {
        labels: teams.map(t => t.team),
        datasets: [{
          axis: "y",
          label: "Constructor Points",
          data: teams.map(t => t.points),
          backgroundColor: teams.map(t => t.color || "#e10600"),
          borderRadius: 4
        }]
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#181818",
            titleFont: { family: "'Orbitron', sans-serif" },
            borderColor: "rgba(225,6,0,0.4)",
            borderWidth: 1
          }
        },
        scales: {
          x: {
            grid: { color: "rgba(255, 255, 255, 0.05)" },
            ticks: { callback: val => `${val} pts` }
          },
          y: {
            grid: { display: false },
            ticks: { font: { family: "'Rajdhani', sans-serif", size: 11, weight: "bold" } }
          }
        }
      }
    });
  }

  // Chart 3: Tyre Compound Share (Doughnut)
  const tyreCtx = document.getElementById("tyreShareChart");
  if (tyreCtx) {
    const tyres = telemetryData.tyre_distribution || [];
    new Chart(tyreCtx, {
      type: "doughnut",
      data: {
        labels: tyres.map(t => `${t.compound} (${t.percent}%)`),
        datasets: [{
          data: tyres.map(t => t.percent),
          backgroundColor: ["#e10600", "#ffd400", "#ffffff", "#22c55e"],
          borderColor: "#151515",
          borderWidth: 3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              boxWidth: 12,
              padding: 14,
              font: { family: "'Orbitron', sans-serif", size: 10 }
            }
          },
          tooltip: {
            backgroundColor: "#181818",
            titleFont: { family: "'Orbitron', sans-serif" },
            borderColor: "rgba(225,6,0,0.4)",
            borderWidth: 1,
            callbacks: {
              label: ctx => ` ${ctx.label}: ${ctx.raw}% share`
            }
          }
        },
        cutout: "62%"
      }
    });
  }

  // Chart 4: Driver Reliability & DNFs (Stacked Bar)
  const relCtx = document.getElementById("driverReliabilityChart");
  if (relCtx) {
    const relData = telemetryData.driver_reliability ? telemetryData.driver_reliability.slice(0, 8) : [
      { driver: "Carlos Sainz", breakdown: { Mechanical: 14, Collision: 10, Engine: 6, Gearbox: 4 } },
      { driver: "Charles Leclerc", breakdown: { Mechanical: 12, Collision: 8, Engine: 5, Gearbox: 3 } },
      { driver: "Fernando Alonso", breakdown: { Mechanical: 15, Collision: 5, Engine: 4, Gearbox: 1 } },
      { driver: "Sergio Perez", breakdown: { Mechanical: 11, Collision: 9, Engine: 5, Gearbox: 4 } },
      { driver: "Max Verstappen", breakdown: { Mechanical: 10, Collision: 6, Engine: 3, Gearbox: 1 } },
      { driver: "Lewis Hamilton", breakdown: { Mechanical: 8, Collision: 4, Engine: 2, Gearbox: 1 } }
    ];

    const reasons = ["Mechanical", "Collision", "Engine", "Gearbox", "Electrical"];
    const reasonColors = ["#e10600", "#ffd400", "#ff8000", "#00e5ff", "#9c27b0"];

    const datasets = reasons.map((reason, i) => ({
      label: reason,
      data: relData.map(d => (d.breakdown && d.breakdown[reason]) ? d.breakdown[reason] : 0),
      backgroundColor: reasonColors[i],
      borderRadius: 2
    }));

    new Chart(relCtx, {
      type: "bar",
      data: {
        labels: relData.map(d => d.driver.split(" ")[1] || d.driver),
        datasets: datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              boxWidth: 10,
              padding: 10,
              font: { family: "'Rajdhani', sans-serif", size: 10 }
            }
          },
          tooltip: {
            backgroundColor: "#181818",
            borderColor: "rgba(225,6,0,0.4)",
            borderWidth: 1
          }
        },
        scales: {
          x: {
            stacked: true,
            grid: { display: false },
            ticks: { font: { family: "'Rajdhani', sans-serif", size: 10, weight: "bold" } }
          },
          y: {
            stacked: true,
            grid: { color: "rgba(255, 255, 255, 0.05)" },
            ticks: { stepSize: 5 }
          }
        }
      }
    });
  }
}

// =============================================================================
// 10. DRIVERS SECTION (GRID, SEARCH, FILTERS)
// =============================================================================
function initDriversGrid() {
  const grid = document.getElementById("driversGrid");
  const searchInput = document.getElementById("driverSearchInput");
  const seasonSelect = document.getElementById("seasonFilterSelect");
  const sortSelect = document.getElementById("sortFilterSelect");

  if (!grid) return;

  const driversList = telemetryData.drivers || [];

  function renderGrid() {
    const searchTerm = (searchInput ? searchInput.value : "").trim().toLowerCase();
    const selectedSeason = seasonSelect ? seasonSelect.value : "all";
    const sortBy = sortSelect ? sortSelect.value : "points";

    // Filter by search and season
    let filtered = driversList.filter(d => {
      const matchSearch = d.name.toLowerCase().includes(searchTerm) ||
                          d.team.toLowerCase().includes(searchTerm);
      if (!matchSearch) return false;
      if (selectedSeason !== "all") {
        const s = parseInt(selectedSeason, 10);
        return d.seasons && d.seasons.includes(s);
      }
      return true;
    });

    // Compute stats based on season or career
    const processed = filtered.map(d => {
      if (selectedSeason === "all") {
        return {
          ...d,
          displayPoints: d.points,
          displayWins: d.wins,
          displayPodiums: d.podiums,
          displayPoles: d.pole_positions,
          displayDnfs: d.dnfs,
          isChampion: d.championships > 0
        };
      } else {
        const s = parseInt(selectedSeason, 10);
        const sStats = (d.by_season && d.by_season[s]) ? d.by_season[s] : {
          points: 0, wins: 0, podiums: 0, pole_positions: 0, dnfs: 0, champion: 0
        };
        return {
          ...d,
          displayPoints: sStats.points,
          displayWins: sStats.wins,
          displayPodiums: sStats.podiums,
          displayPoles: sStats.pole_positions,
          displayDnfs: sStats.dnfs,
          isChampion: sStats.champion === 1
        };
      }
    });

    // Sort drivers
    processed.sort((a, b) => {
      if (sortBy === "wins") return b.displayWins - a.displayWins;
      if (sortBy === "podiums") return b.displayPodiums - a.displayPodiums;
      if (sortBy === "poles") return b.displayPoles - a.displayPoles;
      if (sortBy === "dnfs") return a.displayDnfs - b.displayDnfs;
      return b.displayPoints - a.displayPoints;
    });

    if (processed.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 48px; color: #777;">
          <i class="fa-solid fa-triangle-exclamation" style="font-size: 28px; color: var(--red); margin-bottom: 12px; display: block;"></i>
          No drivers matched the active filters.
        </div>
      `;
      return;
    }

    grid.innerHTML = processed.map(d => {
      const initials = d.name.split(" ").map(w => w[0]).join("").substring(0, 2);
      const winRate = d.races > 0 ? ((d.wins / d.races) * 100).toFixed(1) : 0;
      const podiumRate = d.races > 0 ? ((d.podiums / d.races) * 100).toFixed(1) : 0;

      return `
        <div class="driver-card">
          <div class="driver-card-stripe" style="background-color: ${d.color};"></div>
          
          <div class="driver-card-header">
            <div class="driver-avatar-box" style="border-color: ${d.color};">
              ${initials}
            </div>
            ${d.isChampion ? `
              <div class="champion-crown-badge">
                <i class="fa-solid fa-crown"></i> ${d.championships > 0 ? `${d.championships}x CHAMP` : 'CHAMPION'}
              </div>
            ` : ''}
          </div>

          <h3 class="driver-name">${d.name}</h3>
          <div class="driver-team" style="color: ${d.color};">${d.team}</div>

          <div class="driver-stats-matrix">
            <div class="driver-stat-col">
              <div class="num text-red">${d.displayPoints.toLocaleString()}</div>
              <div class="lbl">POINTS</div>
            </div>
            <div class="driver-stat-col">
              <div class="num">${d.displayWins}</div>
              <div class="lbl">WINS</div>
            </div>
            <div class="driver-stat-col">
              <div class="num">${d.displayPodiums}</div>
              <div class="lbl">PODIUMS</div>
            </div>
          </div>

          <div class="driver-progress-row">
            <div class="progress-item-bar">
              <span>Poles: ${d.displayPoles}</span>
              <span>DNFs: ${d.displayDnfs}</span>
            </div>
            <div class="progress-item-bar">
              <span>Win Rate</span>
              <div class="progress-track">
                <div class="progress-fill" style="width: ${Math.min(winRate * 2, 100)}%;"></div>
              </div>
              <span>${winRate}%</span>
            </div>
            <div class="progress-item-bar">
              <span>Podium Rate</span>
              <div class="progress-track">
                <div class="progress-fill" style="width: ${Math.min(podiumRate * 1.5, 100)}%; background: #ffd400;"></div>
              </div>
              <span>${podiumRate}%</span>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  renderGrid();

  if (searchInput) searchInput.addEventListener("input", renderGrid);
  if (seasonSelect) seasonSelect.addEventListener("change", renderGrid);
  if (sortSelect) sortSelect.addEventListener("change", renderGrid);
}

// =============================================================================
// 11. CONTACT FORM WITH CLIENT-SIDE VALIDATION & TOAST
// =============================================================================
function initContactForm() {
  const form = document.getElementById("contactForm");
  const toast = document.getElementById("toastBox");
  const toastMsg = document.getElementById("toastMessage");
  const submitBtn = document.getElementById("btnSubmitForm");

  if (!form) return;

  function showToast(message, isSuccess = true) {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = message;
    toast.style.borderColor = isSuccess ? "var(--green)" : "var(--red)";
    toast.style.boxShadow = isSuccess ? 
      "0 10px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(34, 197, 94, 0.4)" :
      "0 10px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(225, 6, 0, 0.4)";
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 4000);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("contactName");
    const emailInput = document.getElementById("contactEmail");
    const msgInput = document.getElementById("contactMessage");

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const msg = msgInput ? msgInput.value.trim() : "";

    // Validation
    if (!name || !email || !msg) {
      showToast("Please fill in all required telemetry fields.", false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast("Please enter a valid telemetry contact email.", false);
      return;
    }

    // Submit state animation
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> TRANSMITTING...`;
    }

    setTimeout(() => {
      showToast(`Telemetry transmission confirmed, ${name}! Paddock team notified.`);
      form.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> TRANSMIT TELEMETRY`;
      }
    }, 1200);
  });
}

// =============================================================================
// 12. FLOATING BACK TO TOP BUTTON
// =============================================================================
function initBackToTop() {
  const btn = document.getElementById("backToTopBtn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// =============================================================================
// 13. SCROLL REVEALS & INTERSECTION OBSERVER
// =============================================================================
function initScrollAnimations() {
  const revealElements = document.querySelectorAll(
    ".dimension-card, .project-feature-item, .insight-card, .chart-card, .gallery-card, .window-frame-container"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}
