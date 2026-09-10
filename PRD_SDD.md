# Product Requirements Document & System Design Document (PRD / SDD)
## Project: KBO — A Way Into Korea (한국으로 들어가는 길)

> **Document Type:** Unified Product Requirements & System Design Specification  
> **Status:** APPROVED & ACTIVE  
> **Version:** 2.0.0  
> **Target Environment:** Modern Web Browsers (Chrome, Edge, Safari, Firefox), Vanilla JavaScript (ES6+), Vanilla CSS3, HTML5  
> **Primary Location:** `d:/Vibe/Korean Baseball/`  
> **Last Updated:** 2026-09-11  

---

## 1. Executive Summary & Product Vision

### 1.1 Product Philosophy
**KBO — A Way Into Korea (한국으로 들어가는 길)** is an interactive, cartographic travel and cultural journal. Rather than functioning as a standard sports statistics dashboard, it uses Korea Baseball Organization (KBO) clubs and ballparks as physical and emotional anchor points to explore the 8 host cities, urban history, local alleyways, regional food, dialects, and human memories across South Korea.

```
       [ KTX High-Speed Rail Spine (Seoul ⇄ Busan / Gwangju / Masan) ]
                                    │
    ┌───────────────────────────────┼───────────────────────────────┐
    ▼                               ▼                               ▼
[ 8 Metropolitan Cities ]   [ 10 Ballpark Anchors ]     [ Regional Culture & Food ]
  • Seoul (Jamsil/Gocheok)    • Jamsil (LG / Doosan)      • Chimaek, Gwangjang Market
  • Incheon (Port Gateway)    • Gocheok Dome (Kiwoom)     • Sinpo Dakgangjeong & Port
  • Suwon (Fortress City)     • Munhak (SSG)              • Suwon Fried Whole Chicken
  • Daejeon (Rail Junction)   • Suwon kt wiz Park         • Sungsimdang Soboro Bakery
  • Daegu (Basin Capital)     • Eagles Park (Hanwha)      • Anjirang Gopchang Alley
  • Busan (Maritime Port)     • Lions Park (Samsung)      • Jagalchi Dwaeji-gukbap
  • Gwangju (Honam Plains)    • Sajik Stadium (Lotte)     • Yangnim-dong Duck Soup
  • Changwon/Masan (Coast)    • Champions Field (KIA)     • Odong-dong Agujjim Stew
                              • NC Park (NC)
```

### 1.2 Core Pillars
1. **Cartographic Depth (GIS)**: Custom Leaflet-powered CartoDB Positron basemap bounded strictly to the South Korean peninsula, layered with authentic OpenStreetMap KTX high-speed rail track alignments and station nodes.
2. **Strict Data-Presentation Decoupling**: 100% of bilingual content, photo paths, YouTube timestamps, dialect phrases, and team metadata reside in a standalone data store (`js/data.js`).
3. **Instant Zero-Latency Bilingual Engine**: Real-time language switching (English ⇄ Korean) driven by root `data-lang` attributes without page reload or DOM re-rendering.
4. **Editorial "Warm Paper" Aesthetic**: Editorial typography (Noto Serif KR + Noto Sans KR), subdued parchment tones (`#f8f6f0`, `#f1ede3`), crimson and navy accents, and rich tactile micro-interactions.
5. **Multisensory Immersion**: Audio synthesis for authentic regional dialect phrases ("Hear the City") via the Web SpeechSynthesis API and embedded chorus-synced stadium anthems.

---

## 2. System Architecture & File Directory Topology

```
d:/Vibe/Korean Baseball/
├── .gitignore                  # Git exclusion rules (credentials, OS, logs)
├── index.html                  # Main application shell & bilingual markup hierarchy
├── PRD_SDD.md                  # Unified Product Requirements & System Design Document
├── README.md                   # User guide & content editing instructions
├── css/
│   └── style.css               # Complete design system, tokens, split-viewport, responsive layout
├── js/
│   ├── railways.js             # High-precision OpenStreetMap KTX track geometry (KTX_OSM_TRACKS)
│   ├── data.js                 # Content store: 10 clubs, stories, photo triptychs, anthems, dialects
│   └── app.js                  # Application controller, Leaflet GIS engine, speech synthesizer, router
└── images/
    ├── README.txt              # Photographic directory guidelines (landscape, street, food)
    └── logos/                  # Official KBO Club PNG Emblems (2026 Season)
        ├── emblem_HH.png       # Hanwha Eagles (Daejeon)
        ├── emblem_HT.png       # KIA Tigers (Gwangju)
        ├── emblem_KT.png       # KT Wiz (Suwon)
        ├── emblem_LG.png       # LG Twins (Seoul Jamsil)
        ├── emblem_LT.png       # Lotte Giants (Busan)
        ├── emblem_NC.png       # NC Dinos (Changwon)
        ├── emblem_OB.png       # Doosan Bears (Seoul Jamsil)
        ├── emblem_SK.png       # SSG Landers (Incheon)
        ├── emblem_SS.png       # Samsung Lions (Daegu)
        └── emblem_WO.png       # Kiwoom Heroes (Seoul Gocheok)
```

---

## 3. Product Functional Requirements (FR)

| ID | Module | Description | Technical Implementation |
|---|---|---|---|
| **FR-01** | **Bilingual Engine** | Toggle entire interface between Korean (`ko`) and English (`en`) instantly without page reload. State persists in `localStorage` (`kbo_lang`). | Root `<html data-lang="ko">` attribute. CSS rules show/hide `.lang-en` and `.lang-ko` via `display: none` / `display: inline` / `display: block`. |
| **FR-02** | **Map Viewport** | Interactive map rendered on left viewport (desktop 1.15fr). Must lock bounds to South Korea (`KOREA_BOUNDS`) with `maxBoundsViscosity: 1.0` so user cannot pan outside the country. | Leaflet.js with Carto Positron basemap tiles (`light_nolabels` + `light_only_labels`). Dynamic `minZoom` calculation on resize. |
| **FR-03** | **KTX Rail Overlay** | Display the surveyor-accurate KTX high-speed rail lines and Gyeongin line as multi-segment polylines with crisp white track beds. | OpenStreetMap geometric segments in `KTX_OSM_TRACKS` rendered via dual `L.polyline` (white halo + color track line). |
| **FR-04** | **Ballpark Markers** | Display 10 clickable ballpark pins with team primary color borders, official emblem images, and bilingual hover tooltips. Clicking centers and zooms map. | Leaflet `L.divIcon` with circular `.marker-pin` enclosing `.marker-emblem-icon` or dot fallback. |
| **FR-05** | **Standings Ribbon** | Top horizontal scrollable strip displaying all 10 clubs in current league ranking order with rank number, emblem, team name, and city. | Dynamically injected `<button class="club-chip">` with keyboard navigation and active state styling. |
| **FR-06** | **Editorial Journal** | Right viewport (0.85fr) rendering the active city/club chapter: Eyebrow, City Title (with Hanja tag & high-res emblem), Neighborhood subtitle, Ballpark Anchor Card, Photo Triptych, Travel Memoir, Stadium Anthem, and Dialect Cards. | Semantic HTML generation in `app.js:renderEditorial()` reading strictly from `KBO_DATA.entries[id]`. |
| **FR-07** | **Photo Lightbox** | Clicking any photo in the 3-photo triptych opens a high-resolution, darkened modal lightbox with caption. | Modal `#lightbox-modal` with click-to-close, close button (`&times;`), and `Escape` key listener. |
| **FR-08** | **Stadium Anthem** | Embedded YouTube player configured with `youtube-nocookie.com`, custom start timestamp (jumping directly to the chorus), and rally notes. | Dynamic `<iframe>` injection with `start=${anthem.timestamp}` and zero related video pollution. |
| **FR-09** | **Hear the City** | 3 dialect cards per city (Greeting, "Have you eaten?", Local catchphrase). Clicking ▶ speaks the Korean text using natural native pronunciation. | Web SpeechSynthesis API (`speechSynthesis.speak()`) using Korean `ko-KR` voice synthesis with pulse animation on the active button. |
| **FR-10** | **Deep Linking & Keys** | URL hash syncing (`#busan-lotte`, `#suwon-kt`), browser history navigation, and keyboard shortcuts (`ArrowLeft`/`ArrowRight` to cycle teams, `L` to toggle language, `Esc` to close modal). | `window.location.hash`, `popstate` listener, and global `keydown` event dispatcher. |

---

## 4. Technical System Design & Component Specifications

### 4.1 Data Architecture (`js/data.js`)

`KBO_DATA` is the single source of truth for the entire application.

```typescript
interface KBODataStore {
  config: {
    cartoApiKey: string;        // Carto basemap API key (optional, fallback to open public)
    defaultHeroEntry: string;   // Initial selected team ID (e.g. "suwon-kt")
  };
  rankingOrder: string[];       // 10 team IDs in official standings order
  railways: Record<string, RailwayDefinition>; // Fallback railway coordinates
  stations: StationNode[];      // 19 High-Speed Railway station nodes
  entries: Record<string, KBOClubEntry>; // 10 comprehensive bilingual club chapters
}

interface KBOClubEntry {
  id: string;                   // Unique slug (e.g. "busan-lotte")
  rank: number;                 // League ranking position (1-10)
  primaryColor: string;         // Official team primary hex (e.g. "#002955")
  secondaryColor: string;       // Official team secondary hex (e.g. "#D00F31")
  shortCityEn: string;          // Short English city label (e.g. "Busan")
  shortCityKo: string;          // Short Korean city label (e.g. "부산")
  emblemImg: string;            // Local path to emblem (e.g. "images/logos/emblem_LT.png")
  logoSvg: string;              // Scalable inline SVG fallback
  cityKey: string;              // City group key (e.g. "busan")
  cityNameEn: string;           // Full English city name
  cityNameKo: string;           // Full Korean city name
  cityHanja: string;            // Traditional Hanja glyphs (e.g. "釜山 廣域市")
  neighborhoodEn: string;       // English neighborhood and civic landmarks
  neighborhoodKo: string;       // Korean neighborhood and civic landmarks
  teamNameEn: string;           // English team name (e.g. "Lotte Giants")
  teamNameKo: string;           // Korean team name (e.g. "롯데 자이언츠")
  stadiumEn: string;            // English ballpark name (e.g. "Sajik Baseball Stadium")
  stadiumKo: string;            // Korean ballpark name (e.g. "사직야구장")
  coords: [number, number];     // [Latitude, Longitude] of home ballpark
  zoomLevel: number;            // Optimal Leaflet flyTo zoom level (15.5 - 16.0)
  civicAnchorEn: string;        // Civic and urban history connection (English)
  civicAnchorKo: string;        // Civic and urban history connection (Korean)
  storyEn: string;              // Personal travel memoir (English)
  storyKo: string;              // Literary Korean translation of memoir
  photos: PhotoItem[];          // 3 items: [Place/Landscape, Street/People, Food/Drink]
  anthem: AnthemItem;           // Stadium anthem metadata & YouTube player parameters
  phrases: DialectPhrase[];     // 3 regional dialect phrases for speech synthesis
}
```

### 4.2 KBO Team Master Mapping & Asset Directory

| Team Slug (`id`) | Team Name | Home Stadium | Coordinates | Primary Color | Emblem Asset |
|---|---|---|---|---|---|
| `suwon-kt` | KT Wiz (KT 위즈) | Suwon kt wiz Park | `[37.2997, 127.0097]` | `#EC1C24` | `images/logos/emblem_KT.png` |
| `daegu-samsung` | Samsung Lions (삼성 라이온즈) | Daegu Samsung Lions Park | `[35.8411, 128.6815]` | `#074CA1` | `images/logos/emblem_SS.png` |
| `seoul-jamsil-lg` | LG Twins (LG 트윈스) | Jamsil Stadium (3rd Base Side / 3루측) | `[37.5126, 127.0711]` | `#C30037` | `images/logos/emblem_LG.png` |
| `gwangju-kia` | KIA Tigers (KIA 타이거즈) | Gwangju-Kia Champions Field | `[35.1682, 126.8891]` | `#C70125` | `images/logos/emblem_HT.png` |
| `seoul-jamsil-doosan` | Doosan Bears (두산 베어스) | Jamsil Stadium (1st Base Side / 1루측) | `[37.5118, 127.0727]` | `#131230` | `images/logos/emblem_OB.png` |
| `changwon-nc` | NC Dinos (NC 다이노스) | Changwon NC Park | `[35.2225, 128.5824]` | `#071D49` | `images/logos/emblem_NC.png` |
| `daejeon-hanwha` | Hanwha Eagles (한화 이글스) | Hanwha Life Eagles Park | `[36.3171, 127.4291]` | `#F37321` | `images/logos/emblem_HH.png` |
| `busan-lotte` | Lotte Giants (롯데 자이언츠) | Sajik Baseball Stadium | `[35.1940, 129.0615]` | `#002955` | `images/logos/emblem_LT.png` |
| `incheon-ssg` | SSG Landers (SSG 랜더스) | Incheon SSG Landers Field | `[37.4370, 126.6933]` | `#CE0E2D` | `images/logos/emblem_SK.png` |
| `seoul-gocheok-kiwoom` | Kiwoom Heroes (키움 히어로즈) | Gocheok Sky Dome | `[37.4982, 126.8671]` | `#570514` | `images/logos/emblem_WO.png` |

---

## 5. UI/UX Design System & Styling Tokens

### 5.1 CSS Custom Properties (`css/style.css`)

```css
:root {
  /* Warm Parchment Editorial Palette */
  --bg-canvas: #f8f6f0;           /* Global background */
  --bg-panel: #fcfbfa;            /* Editorial journal panel */
  --bg-card: #f3efe6;             /* Card background */
  --bg-card-hover: #ede8dc;       /* Hover card state */
  
  /* Ink & Typography */
  --ink-primary: #1a1917;         /* High-contrast body text */
  --ink-secondary: #4a4741;       /* Subheadings & captions */
  --ink-muted: #736f66;           /* Metadata and footnotes */
  --ink-faint: #a8a49a;           /* Dividers and borders */
  
  /* Accent Colors */
  --accent-crimson: #9e2a2b;      /* Primary national highlight / active states */
  --accent-navy: #1b2a4a;         /* Deep classical maritime navy */
  --accent-gold: #c69214;          /* Hanja & antique tags */
  
  /* Borders & Dividers */
  --border-soft: rgba(0, 0, 0, 0.07);
  --border-strong: rgba(0, 0, 0, 0.14);
  
  /* Typography Scale */
  --font-serif: "Noto Serif KR", "Batang", "Songti SC", Georgia, serif;
  --font-sans: "Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  
  /* Motion & Transitions */
  --trans-fast: 0.18s cubic-bezier(0.4, 0, 0.2, 1);
  --trans-smooth: 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 5.2 Split-Screen Layout Grid
```css
.app-viewport {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  height: calc(100vh - 108px);
  position: relative;
  overflow: hidden;
}

/* Tablet & Mobile Breakpoints */
@media (max-width: 1024px) {
  .app-viewport {
    grid-template-columns: 1fr;
    grid-template-rows: 420px 1fr;
    height: calc(100vh - 108px);
    overflow-y: auto;
  }
}
@media (max-width: 640px) {
  .app-viewport {
    grid-template-rows: 320px 1fr;
    height: calc(100vh - 120px);
  }
}
```

---

## 6. Cartography & High-Speed Rail GIS Engine

### 6.1 Geographic Boundaries & Strict Lockdown
To maintain an authentic national portrait of South Korea and prevent disorientation:
- **South-West Anchor**: `[33.0, 124.5]` (Jeju / Marado / Southwestern coastal archipelago)
- **North-East Anchor**: `[38.7, 131.0]` (Goseong / DMZ / Dokdo / Ulleungdo / East Sea)
- **Viscosity**: `maxBoundsViscosity: 1.0` locks the viewport 100% inside South Korea.
- **Dynamic MinZoom Calculation**: On map resize, `map.getBoundsZoom(KOREA_BOUNDS, false)` dynamically recalculates `minZoom` to prevent grey unrendered outer bounds.

### 6.2 High-Speed Railway (KTX) Line Hierarchy
1. **KTX Gyeongbu HSR (서울-대전-동대구-신경주-울산-부산)**: Primary red axis (`#9e2a2b`).
2. **KTX Suseo HSR (수서-동탄-평택지제)**: Southeastern Seoul junction (`#9e2a2b`).
3. **KTX Honam HSR (오송-공주-익산-정읍-광주송정-목포)**: Blue southwestern plains axis (`#2a4a7b`).
4. **KTX Gyeongjeon Line (동대구-밀양-창원중앙-마산)**: Green southern coastal branch (`#2d6a4f`).
5. **Gyeongin Axis (서울-영등포-구로-인천항)**: Historic 1899 harbor railway line (`#8c6239`).

---

## 7. Speech Synthesis & Audio Engine ("Hear the City")

The application uses the browser's native `window.speechSynthesis` API with custom acoustic modulation:
1. Filters available voices for `lang.includes("ko")` or `lang.includes("KR")`.
2. Sets speech rate to `0.88` (clear, deliberate regional cadence) and pitch to `1.02`.
3. Attaches visual pulse animation (`.play-speech-btn.playing`) for the duration of the utterance (`onstart` / `onend` / `onerror`).
4. Gracefully falls back if system speech synthesizers are disabled or pending.

---

## 8. Asset Reproduction & Build Runbook

### 8.1 Downloading KBO Official Team Emblems
To reproduce or refresh the 2026 KBO regular season emblem assets into `images/logos/`, run the following PowerShell script:

```powershell
# Set working directory to project root or images/logos/
$targetDir = "d:\Vibe\Korean Baseball\images\logos"
if (-not (Test-Path $targetDir)) { New-Item -ItemType Directory -Path $targetDir -Force }

$teams = @('WO', 'LG', 'HT', 'SS', 'SK', 'KT', 'LT', 'NC', 'OB', 'HH')
$baseUrl = "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/emblem/regular/2026/emblem_{0}.png"

foreach ($team in $teams) {
    $url = [string]::Format($baseUrl, $team)
    $outPath = Join-Path $targetDir "emblem_$team.png"
    Invoke-WebRequest -Uri $url -OutFile $outPath
    Write-Host "Downloaded: $outPath"
}
```

Or via Python 3:
```python
import os
import urllib.request

teams = ["WO", "LG", "HT", "SS", "SK", "KT", "LT", "NC", "OB", "HH"]
base_url = "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/emblem/regular/2026/emblem_{}.png"
out_dir = r"d:\Vibe\Korean Baseball\images\logos"

os.makedirs(out_dir, exist_ok=True)
for team in teams:
    url = base_url.format(team)
    filename = os.path.join(out_dir, f"emblem_{team}.png")
    urllib.request.urlretrieve(url, filename)
    print(f"Successfully downloaded {filename}")
```

### 8.2 Running the Application Locally
Since the application uses standard modern web APIs (ES6 modules, Leaflet GIS via CDN, Web Speech, and Leaflet Tile Layers), it requires no compile step:

```bash
# Option 1: Python built-in HTTP server
cd "d:/Vibe/Korean Baseball"
python -m http.server 8000

# Option 2: Node.js http-server / npx serve
npx serve .

# Option 3: Direct Browser File Load
# Simply double-click index.html or open file:///d:/Vibe/Korean Baseball/index.html
```

---

## 9. Verification & Quality Assurance Checklist

- [x] **Zero Build Dependencies**: Pure HTML5, Vanilla CSS3, and ES6 JavaScript.
- [x] **Dynamic Script Cache-Busting**: `index.html` loads `railways.js` -> `data.js` -> `app.js` with `?t=Date.now()` timestamps to prevent stale cached data during live edits.
- [x] **Strict Geographic Enclosure**: Users cannot pan away into the Pacific or China; map is locked securely to South Korea.
- [x] **High-Resolution Emblems**: All 10 team badges render cleanly across top ribbon, map markers, and editorial headers.
- [x] **Bilingual Completeness**: 100% of all UI strings, city stories, ballpark civic notes, dialect explanations, and anthem summaries exist in both English and Korean.
- [x] **Keyboard Accessibility**: Supports Left/Right arrow cycling, `L` language toggling, and `Esc` modal dismissals.
