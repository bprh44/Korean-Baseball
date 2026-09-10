/**
 * ============================================================================
 * KBO — A Way Into Korea (한국으로 들어가는 길)
 * Application Controller & Cartography Engine
 * ============================================================================
 */

(function () {
  "use strict";

  // State
  let currentLang = localStorage.getItem("kbo_lang") || "ko";
  let activeEntryId = KBO_DATA.config?.defaultHeroEntry || "busan-lotte";
  let map = null;
  const markers = {};
  const railwayLayers = [];

  // DOM Elements
  const htmlRoot = document.documentElement;
  const clubStripContainer = document.getElementById("club-strip-container");
  const panelContent = document.getElementById("panel-content");
  const langToggleBtn = document.getElementById("lang-toggle-btn");
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");

  // South Korea Geographic Boundary (Maximized Country Bounds)
  const KOREA_BOUNDS = L.latLngBounds(
    [33.0, 124.5], // South-West corner (Jeju / Marado / Southwestern seas)
    [38.7, 131.0]  // North-East corner (Goseong / DMZ / Dokdo / Ulleungdo / East Sea)
  );

  /**
   * 1. Initialize Language State
   */
  function initLanguage() {
    htmlRoot.setAttribute("data-lang", currentLang);

    if (langToggleBtn) {
      langToggleBtn.addEventListener("click", () => {
        currentLang = currentLang === "en" ? "ko" : "en";
        htmlRoot.setAttribute("data-lang", currentLang);
        localStorage.setItem("kbo_lang", currentLang);
      });
    }
  }

  /**
   * Helper: Update dynamic minZoom so users cannot zoom out beyond South Korea maximized view
   */
  function updateKoreaZoomLimits() {
    if (!map) return;
    const fitZoom = map.getBoundsZoom(KOREA_BOUNDS, false);
    map.setMinZoom(fitZoom);
  }

  /**
   * Helper: Fit and center South Korea maximized within the map viewport
   */
  function fitSouthKoreaOverview(animate = false) {
    if (!map) return;
    map.fitBounds(KOREA_BOUNDS, {
      padding: [16, 16],
      animate: animate,
      duration: animate ? 1.2 : 0
    });
    updateKoreaZoomLimits();
  }

  /**
   * 2. Initialize Leaflet Map with CartoDB Positron & KTX Rail Arteries
   */
  function initMap() {
    map = L.map("korea-map", {
      zoomSnap: 0.1,
      zoomDelta: 0.5,
      maxBounds: KOREA_BOUNDS,
      maxBoundsViscosity: 1.0, // 100% rigid lock: user cannot drag or shift outside South Korea
      maxZoom: 18.5,
      zoomControl: false,
      attributionControl: true
    });

    // Custom Zoom Control at bottom right
    L.control.zoom({ position: "bottomright" }).addTo(map);

    // Initial fit to South Korea country view
    fitSouthKoreaOverview(false);

    // Recalculate minimum zoom bounds on container resize
    map.on("resize", () => {
      updateKoreaZoomLimits();
    });

    // National View Reset Button Listener
    const mapResetBtn = document.getElementById("map-reset-btn");
    if (mapResetBtn) {
      mapResetBtn.addEventListener("click", () => {
        fitSouthKoreaOverview(true);
      });
    }

    // Carto Basemaps API Key handling (Carto expects ?key=YOUR_KEY)
    const apiKey = KBO_DATA.config?.cartoApiKey?.trim();
    const apiKeyParam = apiKey ? `?key=${encodeURIComponent(apiKey)}` : "";

    if (apiKey) {
      console.log(`%c[Carto Map]%c API Key Active (?key=${apiKey.substring(0, 10)}...)`, "background: #1b2a4a; color: #fff; padding: 2px 6px; border-radius: 3px; font-weight: bold;", "color: #2d5a3f; font-weight: bold;");
    } else {
      console.log("[Carto Map] Using open public basemap.");
    }

    // Warm Minimal Carto Positron Layer
    L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}.png${apiKeyParam}`, {
      maxZoom: 19,
      subdomains: "abcd",
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions" target="_blank">CARTO</a>'
    }).addTo(map);

    // Add Carto Subtle Labels Layer on top of map
    L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/light_only_labels/{z}/{x}/{y}.png${apiKeyParam}`, {
      maxZoom: 19,
      subdomains: "abcd",
      opacity: 0.75
    }).addTo(map);

    // Render Exact OpenStreetMap KTX High-Speed Rail Tracks
    const railDataSource = (typeof KTX_OSM_TRACKS !== "undefined" && KTX_OSM_TRACKS) 
      ? KTX_OSM_TRACKS 
      : (KBO_DATA.railways || {});

    Object.entries(railDataSource).forEach(([key, rail]) => {
      const geometry = rail.segments || rail.coords;
      if (!geometry || geometry.length === 0) return;

      // 1. Crisp white track bed halo (matches map basemap perfectly)
      L.polyline(geometry, {
        color: "#ffffff",
        weight: 5,
        opacity: 0.95,
        lineCap: "round",
        lineJoin: "round",
        smoothFactor: 1
      }).addTo(map);

      // 2. High-speed track line
      const line = L.polyline(geometry, {
        color: rail.color || "#9e2a2b",
        weight: 3,
        opacity: 0.9,
        lineCap: "round",
        lineJoin: "round",
        smoothFactor: 1
      }).addTo(map);

      line.bindTooltip(`
        <div style="font-size: 0.76rem; font-weight: 700; color: #fff;">
          <span class="lang-en">${rail.nameEn}</span>
          <span class="lang-ko">${rail.nameKo}</span>
        </div>
      `, { sticky: true, className: "ballpark-tooltip" });

      railwayLayers.push(line);
    });

    // Render Major KTX High-Speed Rail Stations
    if (KBO_DATA.stations) {
      KBO_DATA.stations.forEach((station) => {
        const stationIcon = L.divIcon({
          className: "rail-station-node",
          html: `
            <div style="
              width: 8px;
              height: 8px;
              background: #ffffff;
              border: 2px solid ${station.type === 'junction' ? '#9e2a2b' : '#2a4a7b'};
              border-radius: 50%;
              box-shadow: 0 1px 3px rgba(0,0,0,0.25);
            "></div>
          `,
          iconSize: [8, 8],
          iconAnchor: [4, 4]
        });

        const stMarker = L.marker(station.coords, { icon: stationIcon }).addTo(map);
        stMarker.bindTooltip(`
          <div style="font-size: 0.72rem; font-weight: 600; text-align: center;">
            <span class="lang-en">🚆 ${station.nameEn}</span>
            <span class="lang-ko">🚆 ${station.nameKo}</span>
          </div>
        `, { direction: "top", offset: [0, -5], className: "ballpark-tooltip" });
      });
    }

    // Render Ballpark Markers
    Object.entries(KBO_DATA.entries).forEach(([id, item]) => {
      const emblem = item.emblemImg;
      const icon = L.divIcon({
        className: `ballpark-marker ${id === activeEntryId ? "active" : ""}`,
        id: `marker-${id}`,
        html: `
          <div class="marker-pin" style="--team-pri: ${item.primaryColor || '#1b2a4a'};" title="${item.teamNameKo} · ${item.stadiumKo}">
            ${emblem ? `<img src="${emblem}" alt="${item.teamNameKo}" class="marker-emblem-icon" />` : `<div class="marker-inner-dot"></div>`}
          </div>
        `,
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });

      const marker = L.marker(item.coords, { icon: icon }).addTo(map);

      // Tooltip with Bilingual City & Club
      marker.bindTooltip(`
        <div style="text-align: center;">
          <div style="font-weight: 700; color: #fff;">
            <span class="lang-en">${item.cityNameEn} · ${item.teamNameEn}</span>
            <span class="lang-ko">${item.cityNameKo} · ${item.teamNameKo}</span>
          </div>
          <div style="font-size: 0.68rem; opacity: 0.8;">
            <span class="lang-en">${item.stadiumEn}</span>
            <span class="lang-ko">${item.stadiumKo}</span>
          </div>
        </div>
      `, {
        direction: "top",
        offset: [0, -10],
        className: "ballpark-tooltip"
      });

      marker.on("click", () => selectEntry(id));
      markers[id] = marker;
    });
  }

  /**
   * 3. Build Top Navigation Strip (Current KBO Rankings Ribbon)
   */
  function initNavigation() {
    clubStripContainer.innerHTML = "";

    const order = KBO_DATA.rankingOrder || Object.keys(KBO_DATA.entries);

    order.forEach((id) => {
      const item = KBO_DATA.entries[id];
      if (!item) return;

      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = `club-chip ${id === activeEntryId ? "active" : ""}`;
      chip.id = `nav-chip-${id}`;
      chip.setAttribute("data-entry-id", id);
      chip.style.setProperty("--team-pri", item.primaryColor || "#1b2a4a");
      chip.style.setProperty("--team-sec", item.secondaryColor || "#736f66");

      const rank = item.rank || "";
      const logoContent = item.emblemImg
        ? `<img src="${item.emblemImg}" alt="${item.teamNameEn}" class="chip-emblem-img" loading="lazy" />`
        : (item.logoSvg || "");
      const shortCityEn = item.shortCityEn || item.cityNameEn.split(" ")[0];
      const shortCityKo = item.shortCityKo || item.cityNameKo.split(" ")[0];

      chip.innerHTML = `
        <span class="chip-rank">${rank}</span>
        <span class="chip-logo">${logoContent}</span>
        <span class="chip-sep">|</span>
        <span class="chip-team" style="color: ${item.primaryColor};">
          <span class="lang-en">${item.teamNameEn}</span>
          <span class="lang-ko">${item.teamNameKo}</span>
        </span>
        <span class="chip-sep">|</span>
        <span class="chip-city" style="color: ${item.secondaryColor};">
          <span class="lang-en">${shortCityEn}</span>
          <span class="lang-ko">${shortCityKo}</span>
        </span>
      `;

      chip.addEventListener("click", () => selectEntry(id));
      clubStripContainer.appendChild(chip);
    });
  }

  /**
   * 4. Render Editorial Panel (The Heart)
   */
  function renderEditorial(id) {
    const data = KBO_DATA.entries[id];
    if (!data) return;

    panelContent.innerHTML = `
      <!-- Discovery Eyebrow & City Heading -->
      <article class="entry-header">
        <div class="meta-eyebrow">
          <span class="lang-en">Travel Chapter · ${data.cityNameEn}</span>
          <span class="lang-ko">도시의 숨결과 골목의 기억 · ${data.cityNameKo}</span>
        </div>

        <div class="city-title-row">
          <div class="city-title-group">
            <h1 class="city-main-title">
              <span class="lang-en">${data.cityNameEn}</span>
              <span class="lang-ko">${data.cityNameKo}</span>
            </h1>
            <span class="city-hanja-tag">${data.cityHanja}</span>
          </div>
          ${data.emblemImg ? `
            <div class="editorial-team-emblem-wrap" title="${data.teamNameKo} (${data.teamNameEn})">
              <img src="${data.emblemImg}" alt="${data.teamNameEn}" class="editorial-team-emblem" />
            </div>
          ` : ""}
        </div>

        <div class="neighborhood-subtitle">
          <span class="lang-en">📍 ${data.neighborhoodEn}</span>
          <span class="lang-ko">📍 ${data.neighborhoodKo}</span>
        </div>
      </article>

      <!-- Subtle Ballpark Anchor -->
      <section class="ballpark-anchor-card">
        <div class="ballpark-anchor-header">
          ${data.emblemImg ? `<img src="${data.emblemImg}" alt="${data.teamNameEn}" class="ballpark-anchor-emblem" />` : ""}
          <div class="ballpark-name-badge">
            <span class="lang-en">⚾ ${data.teamNameEn} · ${data.stadiumEn}</span>
            <span class="lang-ko">⚾ ${data.teamNameKo} · ${data.stadiumKo}</span>
          </div>
        </div>
        <p class="ballpark-civic-note">
          <span class="lang-en">${data.civicAnchorEn}</span>
          <span class="lang-ko">${data.civicAnchorKo}</span>
        </p>
      </section>

      <!-- Photo Triptych (Place, Street, Food) -->
      <section class="photo-triptych" aria-label="City Photography Triptych">
        ${data.photos.map((photo, index) => `
          <div class="photo-card" data-photo-idx="${index}" title="Click to enlarge">
            <img src="${photo.src}" alt="${photo.labelEn}" loading="lazy" />
            <div class="photo-caption">
              <span class="lang-en">${photo.labelEn}</span>
              <span class="lang-ko">${photo.labelKo}</span>
            </div>
          </div>
        `).join("")}
      </section>

      <!-- Personal Travel Story (The Memoir) -->
      <section class="story-section">
        <div class="meta-eyebrow">
          <span class="lang-en">Personal Journal Entry</span>
          <span class="lang-ko">여행자의 기록</span>
        </div>
        <div class="story-body">
          <p class="lang-en">${data.storyEn}</p>
          <p class="lang-ko">${data.storyKo}</p>
        </div>
      </section>

      <!-- Ballpark Anthem & Chant Card -->
      <section class="anthem-card">
        <div class="anthem-header">
          <div class="anthem-title-group">
            <span class="anthem-badge">
              <span class="lang-en">Stadium Anthem & Rally Song</span>
              <span class="lang-ko">구장 시그니처 찬가</span>
            </span>
            <div class="anthem-name">
              <span class="lang-en">${data.anthem.titleEn}</span>
              <span class="lang-ko">${data.anthem.titleKo}</span>
            </div>
          </div>
          <span class="anthem-origin">
            <span class="lang-en">${data.anthem.originEn}</span>
            <span class="lang-ko">${data.anthem.originKo}</span>
          </span>
        </div>

        <p class="anthem-note">
          <span class="lang-en">${data.anthem.noteEn}</span>
          <span class="lang-ko">${data.anthem.noteKo}</span>
        </p>

        <div class="anthem-player">
          <iframe 
            src="https://www.youtube-nocookie.com/embed/${data.anthem.youtubeId}?start=${data.anthem.timestamp || 0}&rel=0" 
            title="${data.anthem.titleKo}" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>
      </section>

      <!-- "Hear the City" (도시의 말씨와 억양) -->
      <section class="audio-section">
        <div class="meta-eyebrow">
          <span class="lang-en">Hear the City · Local Dialect & Speech</span>
          <span class="lang-ko">도시의 말씨와 억양 · Hear the City</span>
        </div>

        <div class="phrase-grid">
          ${data.phrases.map((phrase, idx) => `
            <div class="phrase-card">
              <div class="phrase-info">
                <div class="phrase-korean">
                  <span>${phrase.ko}</span>
                  <span class="phrase-romaja">${phrase.romaja}</span>
                </div>
                <div class="phrase-meaning">
                  <span class="lang-en">${phrase.meaningEn} — <strong>${phrase.noteEn}</strong></span>
                  <span class="lang-ko">${phrase.descKo}</span>
                </div>
              </div>
              <button 
                type="button"
                class="play-speech-btn" 
                data-speech-text="${phrase.ko}" 
                aria-label="Listen to pronunciation"
                title="Play pronunciation">
                ▶
              </button>
            </div>
          `).join("")}
        </div>
      </section>
    `;

    // Attach Photo Click -> Lightbox
    panelContent.querySelectorAll(".photo-card").forEach((card) => {
      card.addEventListener("click", () => {
        const idx = parseInt(card.getAttribute("data-photo-idx"), 10);
        const photo = data.photos[idx];
        if (photo) {
          openLightbox(photo);
        }
      });
    });

    // Attach Speech Synthesis
    panelContent.querySelectorAll(".play-speech-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const text = btn.getAttribute("data-speech-text");
        playDialectVoice(text, btn);
      });
    });

    // Attach Ballpark Card Click -> Zoom in extra close
    const ballparkCard = panelContent.querySelector(".ballpark-anchor-card");
    if (ballparkCard) {
      ballparkCard.style.cursor = "pointer";
      ballparkCard.title = "Click to zoom into stadium field";
      ballparkCard.addEventListener("click", () => {
        if (map && data.coords) {
          map.flyTo(data.coords, 16.8, { duration: 1.2, easeLinearity: 0.2 });
        }
      });
    }

    // Scroll editorial panel to top on change
    panelContent.scrollTo({ top: 0, behavior: "smooth" });
  }

  /**
   * 5. Navigation & Marker Selection Logic
   */
  function selectEntry(id, forceCloseZoom = false) {
    if (!KBO_DATA.entries[id]) return;
    const isAlreadyActive = (activeEntryId === id);
    activeEntryId = id;

    // Update URL hash
    window.location.hash = id;

    // Update Nav Chips
    document.querySelectorAll(".club-chip").forEach((chip) => chip.classList.remove("active"));
    const activeChip = document.getElementById(`nav-chip-${id}`);
    if (activeChip) {
      activeChip.classList.add("active");
      activeChip.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }

    // Update Map Markers
    Object.keys(markers).forEach((key) => {
      const markerEl = markers[key].getElement();
      if (markerEl) markerEl.classList.remove("active");
    });
    const currentMarkerEl = markers[id].getElement();
    if (currentMarkerEl) currentMarkerEl.classList.add("active");

    // Fly map smoothly to location with close stadium zoom
    const entry = KBO_DATA.entries[id];
    if (map) {
      const targetZoom = (isAlreadyActive || forceCloseZoom) 
        ? 16.8 
        : (entry.zoomLevel || 15.6);

      map.flyTo(entry.coords, targetZoom, {
        duration: 1.5,
        easeLinearity: 0.2
      });
    }

    // Render Editorial content
    renderEditorial(id);
  }

  /**
   * 6. Speech Synthesis for Dialects
   */
  function playDialectVoice(text, buttonElement) {
    if (!("speechSynthesis" in window)) {
      alert("Speech synthesis is not supported in this browser.");
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ko-KR";
    utterance.rate = 0.82; // slightly slower for melodic regional cadence
    utterance.pitch = 0.95;

    // Try to find a natural Korean voice if available
    const voices = window.speechSynthesis.getVoices();
    const koreanVoice = voices.find((v) => v.lang.includes("ko") || v.lang.includes("KR"));
    if (koreanVoice) {
      utterance.voice = koreanVoice;
    }

    if (buttonElement) {
      buttonElement.classList.add("playing");
      utterance.onend = () => buttonElement.classList.remove("playing");
      utterance.onerror = () => buttonElement.classList.remove("playing");
    }

    window.speechSynthesis.speak(utterance);
  }

  /**
   * 7. Lightbox Modal Controller
   */
  function openLightbox(photo) {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.src = photo.src;
    lightboxCaption.innerHTML = `
      <span class="lang-en">${photo.labelEn}</span>
      <span class="lang-ko">${photo.labelKo}</span>
    `;
    lightboxModal.classList.add("active");
  }

  function closeLightbox() {
    if (lightboxModal) {
      lightboxModal.classList.remove("active");
    }
  }

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }
  if (lightboxModal) {
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  /**
   * 8. Bootstrapping
   */
  function init() {
    initLanguage();

    // Check if URL has hash anchor
    const hash = window.location.hash.replace("#", "");
    if (hash && KBO_DATA.entries[hash]) {
      activeEntryId = hash;
    }

    initMap();
    initNavigation();
    renderEditorial(activeEntryId);

    // Initial map view: If direct URL hash present, focus entry; otherwise maximize South Korea view
    if (hash && KBO_DATA.entries[hash]) {
      const initialEntry = KBO_DATA.entries[hash];
      if (initialEntry && map) {
        map.setView(initialEntry.coords, initialEntry.zoomLevel || 15.6);
      }
    } else {
      fitSouthKoreaOverview(false);
    }
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
