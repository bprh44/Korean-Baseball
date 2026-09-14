/**
 * ============================================================================
 * KBO — A Way Into Korea (한국으로 들어가는 길)
 * Application Controller & Cartography Engine
 * ============================================================================
 */

(function () {
  "use strict";

  // State (Protected with try-catch for strict browser/iframe privacy settings)
  let currentLang = "ko";
  try {
    currentLang = localStorage.getItem("kbo_lang") || "ko";
  } catch (e) {
    currentLang = "ko";
  }
  let activeEntryId = (typeof KBO_DATA !== "undefined" && KBO_DATA.config?.defaultHeroEntry) || "suwon-kt";
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
        try {
          localStorage.setItem("kbo_lang", currentLang);
        } catch (e) {}
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

    // Carto Basemaps API Key handling (Reads from config, window, or URL ?cartoKey=...)
    const urlParams = new URLSearchParams(window.location.search);
    const apiKey = (urlParams.get("cartoKey") || window.CARTO_API_KEY || KBO_DATA.config?.cartoApiKey || "").trim();
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

      const displayNameEn = rail.nameEn || rail.nameKo || "KTX Rail Line";
      const displayNameKo = rail.nameKo || rail.nameEn || "KTX 고속철도 노선";

      line.bindTooltip(`
        <div style="font-size: 0.76rem; font-weight: 700; color: #fff;">
          <span class="lang-en">${displayNameEn}</span>
          <span class="lang-ko">${displayNameKo}</span>
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
      const isMountain = id === "jeju-hallasan";
      const markerPinContent = isMountain
        ? `<span style="font-size: 16px; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">⛰️</span>`
        : (emblem ? `<img src="${emblem}" alt="${item.teamNameKo}" class="marker-emblem-icon" />` : `<div class="marker-inner-dot"></div>`);

      const icon = L.divIcon({
        className: `ballpark-marker ${id === activeEntryId ? "active" : ""}`,
        id: `marker-${id}`,
        html: `
          <div class="marker-pin" style="--team-pri: ${item.primaryColor || '#1b2a4a'};" title="${item.teamNameKo} · ${item.stadiumKo}">
            ${markerPinContent}
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
      const isMountain = id === "jeju-hallasan";
      const logoContent = isMountain
        ? `<span style="font-size: 15px; margin-right: 2px;">⛰️</span>`
        : (item.emblemImg
            ? `<img src="${item.emblemImg}" alt="${item.teamNameEn}" class="chip-emblem-img" loading="lazy" />`
            : (item.logoSvg || ""));
      const shortCityEn = item.shortCityEn || item.cityNameEn.split(" ")[0];
      const shortCityKo = item.shortCityKo || item.cityNameKo.split(" ")[0];

      chip.innerHTML = `
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

    const formatCivicFacts = (text) => {
      if (!text) return "";
      const lines = (text.includes("\n") ? text.split("\n") : text.split(" · "))
        .map(line => line.trim())
        .filter(Boolean);

      return `
        <div class="civic-fact-grid">
          ${lines.map(line => {
            const clean = line.replace(/^[•\-\*]\s*/, "");
            const colonIdx = clean.indexOf(":");
            if (colonIdx > 0 && colonIdx < 35) {
              const key = clean.substring(0, colonIdx).trim();
              const val = clean.substring(colonIdx + 1).trim();
              return `
                <div class="civic-fact-row">
                  <span class="civic-fact-badge">${key}</span>
                  <span class="civic-fact-desc">${val}</span>
                </div>
              `;
            }
            return `
              <div class="civic-fact-row">
                <span class="civic-fact-bullet">•</span>
                <span class="civic-fact-desc">${clean}</span>
              </div>
            `;
          }).join("")}
        </div>
      `;
    };

    panelContent.innerHTML = `
      <!-- Discovery Eyebrow & City Heading -->
      <article class="entry-header">
        <div class="meta-eyebrow">
          <span class="lang-en">Travel Chapter · ${data.cityNameEn}</span>
          <span class="lang-ko">도시 여행 이야기 · ${data.cityNameKo}</span>
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
      </article>

      <!-- Ballpark & Corporate Fact Sheet -->
      <section class="ballpark-anchor-card">
        <div class="ballpark-anchor-header">
          ${data.emblemImg ? `<img src="${data.emblemImg}" alt="${data.teamNameEn}" class="ballpark-anchor-emblem" />` : ""}
          <div class="ballpark-name-badge">
            <span class="lang-en">⚾ ${data.teamNameEn} · ${data.stadiumEn}</span>
            <span class="lang-ko">⚾ ${data.teamNameKo} · ${data.stadiumKo}</span>
          </div>
        </div>
        <div class="ballpark-civic-facts">
          <div class="lang-en">${formatCivicFacts(data.civicAnchorEn)}</div>
          <div class="lang-ko">${formatCivicFacts(data.civicAnchorKo)}</div>
        </div>
      </section>

      <!-- Photo Triptych (Place, Street, Food) -->
      <section class="photo-triptych" aria-label="City Photography Triptych">
        ${data.photos.map((photo, index) => `
          <div class="photo-card" data-photo-idx="${index}" title="Click to enlarge">
            <img 
              src="${photo.src}" 
              alt="${photo.labelEn || photo.labelKo || 'City Photo'}" 
              loading="lazy" 
              referrerpolicy="no-referrer"
              onerror="if (!this.dataset.fallbackTried) { this.dataset.fallbackTried = 'true'; this.src = 'images/cities/${data.id}/${index + 1}_${index === 0 ? 'stadium' : index === 1 ? 'landmark' : 'dish'}.jpg'; }"
            />
            <div class="photo-caption">
              <div class="photo-caption-title">
                <span class="lang-en">${photo.labelEn || photo.labelKo || ""}</span>
                <span class="lang-ko">${photo.labelKo || photo.labelEn || ""}</span>
              </div>
            </div>
          </div>
        `).join("")}
      </section>

      <!-- Local Expressions & Pickoff Chants (Regional Dialect, Dining, Idiom, Cheer) -->
      <section class="audio-section">
        <div class="meta-eyebrow">
          <span class="lang-en">Local Expressions &amp; Stadium Chants</span>
          <span class="lang-ko">지역 방언 인사 &amp; 시그니처 응원</span>
        </div>

        <div class="phrase-grid">
          ${data.phrases.map((phrase, idx) => {
            const tMatch = phrase.youtubeUrl ? phrase.youtubeUrl.match(/[?&]t=(\d+)s?/) : null;
            const timeTag = tMatch ? ` (${Math.floor(parseInt(tMatch[1], 10) / 60)}:${String(parseInt(tMatch[1], 10) % 60).padStart(2, '0')})` : '';
            return `
            <div class="phrase-card">
              <div class="phrase-info">
                <div class="phrase-korean">
                  <span style="font-weight: 700; font-size: 1.05rem;">${phrase.ko}</span>
                </div>
                <div class="phrase-meaning" style="margin-top: 4px;">
                  <span class="lang-en">${phrase.meaningEn} — <strong>${phrase.noteEn}</strong></span>
                  <span class="lang-ko">${phrase.descKo}</span>
                </div>
                ${phrase.youtubeUrl ? `
                  <div class="phrase-yt-badge" style="margin-top: 8px;">
                    <a href="${phrase.youtubeUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 6px; font-size: 0.76rem; font-weight: 600; color: #dc2626; text-decoration: none; padding: 4px 10px; background: rgba(220, 38, 38, 0.07); border: 1px solid rgba(220, 38, 38, 0.22); border-radius: 6px; transition: background 0.15s, transform 0.15s;">
                      <span>▶️</span>
                      <span class="lang-en">Listen on YouTube${timeTag}</span>
                      <span class="lang-ko">유튜브에서 견제 응원 듣기${timeTag}</span>
                    </a>
                  </div>
                ` : ""}
              </div>
            </div>
          `;
          }).join("")}
        </div>
      </section>

      <!-- Ballpark Anthem & Chant Card (Final Section) -->
      ${data.anthem && data.anthem.titleKo ? `
      <section class="anthem-card" style="margin-top: 1.2rem;">
        <div class="anthem-header">
          <div class="anthem-title-group">
            <span class="anthem-badge">
              <span class="lang-en">Stadium Anthem &amp; Rally Song</span>
              <span class="lang-ko">야구장 대표 응원가</span>
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
      ` : ""}
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
      if (markers[key].setZIndexOffset) markers[key].setZIndexOffset(0);
    });
    const currentMarkerEl = markers[id].getElement();
    if (currentMarkerEl) currentMarkerEl.classList.add("active");
    if (markers[id].setZIndexOffset) markers[id].setZIndexOffset(1000);

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
   * 6. Lightbox Modal Controller
   */
  function openLightbox(photo) {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.setAttribute("referrerpolicy", "no-referrer");
    lightboxImg.src = photo.src;
    lightboxCaption.innerHTML = `
      <div class="lightbox-caption-text">
        <span class="lang-en">${photo.labelEn || photo.labelKo || ""}</span>
        <span class="lang-ko">${photo.labelKo || photo.labelEn || ""}</span>
      </div>
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

    // Force Leaflet tile geometry calculation after layout paints
    setTimeout(() => {
      if (map) map.invalidateSize();
    }, 200);
  }

  // ---------------------------------------------------------------------------
  // Async bootstrap: load data.json (editable text file) then start the app.
  // Falls back to the built-in KBO_DATA.entries when running as file:// or
  // if data.json is missing.
  // ---------------------------------------------------------------------------
  function bootstrap() {
    function applyJsonData(json) {
      if (json && typeof json === "object") {
        Object.keys(json).forEach(function (id) {
          if (KBO_DATA.entries[id]) {
            Object.assign(KBO_DATA.entries[id], json[id]);
          } else {
            KBO_DATA.entries[id] = json[id];
          }
        });
      }
    }

    // Attempt loading data.json with cache-busting timestamp
    fetch("data.json?t=" + Date.now())
      .then(function (res) {
        if (!res.ok) throw new Error("data.json HTTP " + res.status);
        return res.json();
      })
      .then(function (json) {
        applyJsonData(json);
        init();
      })
      .catch(function (err) {
        // Under file:// protocol or offline, browser blocks local fetch.
        // Check for latest live admin draft in localStorage:
        try {
          const draft = localStorage.getItem("kbo_admin_draft");
          if (draft && !draft.includes("ìˆ") && !draft.includes("ë§") && !draft.includes("â€")) {
            const parsed = JSON.parse(draft);
            if (parsed && typeof parsed === "object" && Object.keys(parsed).length > 0) {
              applyJsonData(parsed);
              console.info("Loaded live admin draft from browser memory");
              init();
              return;
            }
          }
        } catch (e) {}
        console.info("Using bundled data:", err ? err.message : "local");
        init();
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }
})();
