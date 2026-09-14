# Product Requirements Document & System Design Document (PRD / SDD)
## Project: KBO — A Way Into Korea (한국으로 들어가는 길)

> **Document Type:** Unified Product Requirements & System Design Specification  
> **Status:** APPROVED & ACTIVE  
> **Version:** 2.2.0  
> **Target Environment:** Modern Web Browsers (Chrome, Edge, Safari, Firefox), Vanilla JavaScript (ES6+), Vanilla CSS3, HTML5  
> **Primary Location:** `d:/Vibe/Korean Baseball/`  
> **Last Updated:** 2026-09-14  

---

## 1. Executive Summary & Product Vision

### 1.1 Product Philosophy
**KBO — A Way Into Korea (한국으로 들어가는 길)** is an interactive, cartographic travel and cultural journal. Rather than functioning as a standard sports statistics dashboard, it uses Korea Baseball Organization (KBO) clubs and ballparks as physical and emotional anchor points to explore the host cities, urban history, local alleyways, regional food, dialects, and human memories across South Korea.

```
       [ KTX High-Speed Rail Spine (Seoul ⇄ Busan / Gwangju / Masan) ]
                                    │
    ┌───────────────────────────────┼───────────────────────────────┐
    ▼                               ▼                               ▼
[ 8 Metropolitan Cities + Jeju ] [ 10 Ballpark Anchors + Jeju ] [ Regional Culture & Food ]
  • Seoul (Jamsil/Gocheok)        • Jamsil (LG / Doosan)         • Chimaek, Gwangjang Market
  • Incheon (Port Gateway)        • Gocheok Dome (Kiwoom)        • Sinpo Dakgangjeong & Port
  • Suwon (Fortress City)         • Munhak (SSG)                 • Suwon Fried Whole Chicken
  • Daejeon (Rail Junction)       • Suwon kt wiz Park            • Sungsimdang Soboro Bakery
  • Daegu (Basin Capital)         • Eagles Park (Hanwha)         • Anjirang Gopchang Alley
  • Busan (Maritime Port)         • Lions Park (Samsung)         • Jagalchi Dwaeji-gukbap
  • Gwangju (Honam Plains)        • Sajik Stadium (Lotte)        • Songjeong Tteokgalbi & Duck Soup
  • Changwon/Masan (Coast)        • Champions Field (KIA)        • Odong-dong Agujjim Stew
  • Jeju Island (Volcanic Peak)   • NC Park (NC)                 • Jeju Black Pork & Hallabong
                                  • Hallasan (1,947m Peak)
```

### 1.2 Core Pillars
1. **Cartographic Depth (GIS)**: Custom Leaflet-powered CartoDB Positron basemap bounded strictly to the South Korean peninsula, layered with authentic OpenStreetMap KTX high-speed rail track alignments, junction geometry, and station nodes.
2. **Strict Data-Presentation Decoupling**: 100% of bilingual content, photo paths, YouTube timestamps, dialect phrases, civic anchors, and team metadata reside in a standalone data store (`js/data.js` and `data.json`).
3. **Instant Zero-Latency Bilingual Engine**: Real-time language switching (English ⇄ Korean) driven by root `data-lang` attributes without page reload or DOM re-rendering.
4. **Editorial "Warm Paper" Aesthetic**: Editorial typography (Noto Serif KR + Noto Sans KR), subdued parchment tones (`#f8f6f0`, `#f1ede3`), crimson and navy accents, and rich tactile micro-interactions.
5. **Multisensory Immersion**: Audio synthesis for authentic regional dialect phrases and pickoff chants via the Web SpeechSynthesis API and embedded chorus-synced stadium anthems.
6. **Local Asset Self-Sufficiency**: Fully offline-capable local asset architecture with structured drop folders for all 11 city chapters and club emblems.

---

## 2. System Architecture & File Directory Topology

```
d:/Vibe/Korean Baseball/
├── .gitignore                      # Git exclusion rules (credentials, OS, logs)
├── index.html                      # Main application shell & bilingual markup hierarchy
├── admin.html                      # Administrative content editing & curation dashboard
├── PRD_SDD.md                      # Unified Product Requirements & System Design Document
├── README.md                       # User guide & content editing instructions
├── data.json                       # Canonical JSON store for all 11 chapters
├── entry_template.json             # Schema template for adding new chapters
├── css/
│   └── style.css                   # Design system, tokens, split-viewport, responsive layout
├── js/
│   ├── railways.js                 # Surveyor-accurate OpenStreetMap rail geometry (KTX_OSM_TRACKS)
│   ├── data.js                     # Content store: 11 chapters, stations, anthems, dialects
│   └── app.js                      # Application controller, Leaflet GIS engine, speech synthesizer
└── images/
    ├── README.md                   # Top-level asset directory instructions
    ├── logos/                      # Official KBO Club PNG Emblems (2026 Season)
    │   ├── emblem_HH.png           # Hanwha Eagles (Daejeon)
    │   ├── emblem_HT.png           # KIA Tigers (Gwangju)
    │   ├── emblem_KT.png           # KT Wiz (Suwon)
    │   ├── emblem_LG.png           # LG Twins (Seoul Jamsil)
    │   ├── emblem_LT.png           # Lotte Giants (Busan)
    │   ├── emblem_NC.png           # NC Dinos (Changwon)
    │   ├── emblem_OB.png           # Doosan Bears (Seoul Jamsil)
    │   ├── emblem_SK.png           # SSG Landers (Incheon)
    │   ├── emblem_SS.png           # Samsung Lions (Daegu)
    │   └── emblem_WO.png           # Kiwoom Heroes (Seoul Gocheok)
    └── cities/                     # 📷 Local Travel Photography Drop Folders (11 Chapters)
        ├── README.md               # Master city photography drop guide
        ├── suwon-kt/               # Suwon: 1_stadium.jpg, 2_landmark.jpg, 3_dish.jpg, README.md
        ├── daegu-samsung/          # Daegu: 1_stadium.jpg, 2_landmark.jpg, 3_dish.jpg, README.md
        ├── seoul-jamsil-lg/        # Seoul (LG): 1_stadium.jpg, 2_landmark.jpg, 3_dish.jpg, README.md
        ├── gwangju-kia/            # Gwangju: 1_stadium.jpg, 2_landmark.jpg, 3_dish.jpg, README.md
        ├── seoul-jamsil-doosan/    # Seoul (Doosan): 1_stadium.jpg, 2_landmark.jpg, 3_dish.jpg, README.md
        ├── changwon-nc/            # Changwon: 1_stadium.jpg, 2_landmark.jpg, 3_dish.jpg, README.md
        ├── daejeon-hanwha/         # Daejeon: 1_stadium.jpg, 2_landmark.jpg, 3_dish.jpg, README.md
        ├── busan-lotte/            # Busan: 1_stadium.jpg, 2_landmark.jpg, 3_dish.jpg, README.md
        ├── incheon-ssg/            # Incheon: 1_stadium.jpg, 2_landmark.jpg, 3_dish.jpg, README.md
        ├── seoul-gocheok-kiwoom/   # Seoul (Kiwoom): 1_stadium.jpg, 2_landmark.jpg, 3_dish.jpg, README.md
        └── jeju-hallasan/          # Jeju Island: 1_peak.jpg, 2_landmark.jpg, 3_dish.jpg, README.md
```

---

## 3. Product Functional Requirements (FR)

| ID | Module | Description | Technical Implementation |
|---|---|---|---|
| **FR-01** | **Bilingual Engine** | Toggle entire interface between Korean (`ko`) and English (`en`) instantly without page reload. State persists in `localStorage` (`kbo_lang`). | Root `<html data-lang="ko">` attribute. CSS rules show/hide `.lang-en` and `.lang-ko` via `display: none` / `display: inline` / `display: block`. |
| **FR-02** | **Map Viewport** | Interactive map rendered on left viewport (desktop 1.15fr). Must lock bounds to South Korea (`KOREA_BOUNDS`) with `maxBoundsViscosity: 1.0` so user cannot pan outside the country. | Leaflet.js with Carto Positron basemap tiles (`light_nolabels` + `light_only_labels`). Dynamic `minZoom` calculation on resize. |
| **FR-03** | **KTX Rail Overlay** | Display surveyor-accurate KTX high-speed rail lines, conventional spine, and Gyeongjeon branch as multi-segment polylines with crisp white track beds. | OpenStreetMap geometric segments in `KTX_OSM_TRACKS` rendered via dual `L.polyline` (white halo + color track line). |
| **FR-04** | **Ballpark Markers** | Display clickable pins for all 10 KBO ballparks plus the Jeju Hallasan landmark pin. Pins show team emblem badges or mountain symbols. | Leaflet `L.divIcon` with circular `.marker-pin` enclosing `.marker-emblem-icon` or emoji symbol. |
| **FR-05** | **Standings Ribbon** | Top horizontal scrollable strip displaying all 10 clubs in standings order with emblem, team name, and city (format: `logo | team name | city`), plus Hallasan anchor. | Dynamically injected `<button class="club-chip">` with keyboard navigation and active state styling. |
| **FR-06** | **Editorial Journal** | Right viewport (0.85fr) rendering the active chapter: Eyebrow, City Title (Hanja tag & emblem), Ballpark Anchor Card (with parsed corporate/civic badges), 3-Photo Triptych, 4-Item Dialect Cards with YouTube pickoff links, and Stadium Anthem. | Semantic HTML generation in `app.js:renderEditorial()` reading strictly from `KBO_DATA.entries[id]`. |
| **FR-07** | **Photo Lightbox** | Clicking any photo in the 3-photo triptych opens a high-resolution, darkened modal lightbox with caption. | Modal `#lightbox-modal` with click-to-close, close button (`&times;`), and `Escape` key listener. |
| **FR-08** | **Stadium Anthem** | Embedded YouTube player configured with `youtube-nocookie.com`, custom start timestamp (jumping directly to the chorus), and rally notes. | Dynamic `<iframe>` injection with `start=${anthem.timestamp}` and zero related video pollution. |
| **FR-09** | **Hear the City & Pickoff Chants** | 3 dialect & phrase cards per chapter (Greeting, "Have you eaten?", Local catchphrase / Pickoff chant). KBO clubs feature deep-linked YouTube video timestamps jumping directly to the club's iconic check-throw chant (Lotte `0:00`, LG `0:07`, Hanwha `0:16`, KIA `0:23`, Samsung `0:31`, Kiwoom `0:46`, NC `0:58`, Doosan `1:12`, SSG `1:20`, KT `1:25`). | Dynamic YouTube URL parameter `&t=...s` with auto-calculated `(m:ss)` time badges in the UI. |
| **FR-10** | **Deep Linking & Keys** | URL hash syncing (`#busan-lotte`, `#suwon-kt`, `#jeju-hallasan`), browser history navigation, and keyboard shortcuts (`ArrowLeft`/`ArrowRight` to cycle teams, `L` to toggle language, `Esc` to close modal). | `window.location.hash`, `popstate` listener, and global `keydown` event dispatcher. |
| **FR-11** | **Local Image Drops** | Drop-in photo replacement via local folders (`images/cities/<entry_id>/`). When files are replaced, the app serves them directly without code modifications. | Local relative image URLs (`images/cities/...`) resolving directly via standard static web server. |

---

## 4. Technical System Design & Component Specifications

### 4.1 Data Architecture (`js/data.js` & `data.json`)

`KBO_DATA` is the single source of truth for the entire application.

```typescript
interface KBODataStore {
  config: {
    cartoApiKey: string;        // Carto basemap API key (optional, fallback to open public)
    defaultHeroEntry: string;   // Initial selected team ID (e.g. "suwon-kt")
  };
  rankingOrder: string[];       // 10 team IDs in official standings order
  railways: Record<string, RailwayDefinition>; // Fallback railway coordinates
  stations: StationNode[];      // 20 High-Speed Railway station nodes (snapped to tracks)
  entries: Record<string, KBOClubEntry>; // 11 comprehensive bilingual chapters
}

interface StationNode {
  nameEn: string;               // e.g. "Seoul Station"
  nameKo: string;               // e.g. "서울역 (KTX)"
  coords: [number, number];     // [Latitude, Longitude] on rail track centerline
  type: "ktx" | "junction";     // Station node styling category
}

interface KBOClubEntry {
  id: string;                   // Unique slug (e.g. "busan-lotte", "jeju-hallasan")
  rank: number;                 // League ranking position (1-10, 99 for bonus)
  primaryColor: string;         // Official team primary hex (e.g. "#002955")
  secondaryColor: string;       // Official team secondary hex (e.g. "#D00F31")
  shortCityEn: string;          // Short English city label (e.g. "Busan")
  shortCityKo: string;          // Short Korean city label (e.g. "부산")
  emblemImg: string;            // Local path to emblem (e.g. "images/logos/emblem_LT.png")
  logoSvg: string;              // Scalable inline SVG fallback
  cityKey: string;              // City group key (e.g. "busan", "jeju")
  cityNameEn: string;           // Full English city name
  cityNameKo: string;           // Full Korean city name
  cityHanja: string;            // Traditional Hanja glyphs (e.g. "釜山")
  teamNameEn: string;           // English team name (e.g. "Lotte Giants")
  teamNameKo: string;           // Korean team name (e.g. "롯데 자이언츠")
  stadiumEn: string;            // English ballpark name (e.g. "Sajik Baseball Stadium")
  stadiumKo: string;            // Korean ballpark name (e.g. "사직야구장")
  coords: [number, number];     // [Latitude, Longitude] of home ballpark
  zoomLevel: number;            // Optimal Leaflet flyTo zoom level (13.5 - 16.5)
  civicAnchorEn: string;        // Bulleted Chaebol corporate facts: founded, industries, KRW value (English)
  civicAnchorKo: string;        // Bulleted Chaebol corporate facts: founded, industries, KRW value (Korean)
  photos: PhotoItem[];          // 3 items: [Stadium/Peak, Landmark/Culture, Dish/Food]
  phrases: DialectPhrase[];     // 4 items: [1: Hello 사투리, 2: Have you eaten?, 3: Unique regional phrase, 4: Baseball chant]
  anthem: AnthemItem;           // Stadium anthem metadata & YouTube player parameters (Final Section)
}

interface PhotoItem {
  src: string;                  // Local path: "images/cities/<entry_id>/1_stadium.jpg"
  labelEn: string;              // Bilingual English caption
  labelKo: string;              // Bilingual Korean caption
  sourceUrl?: string;           // Direct citation / attribution URL for image credit
}
```

### 4.2 KBO Master Mapping & Chapter Directory

| Chapter Slug (`id`) | Team Name | Stadium / Landmark | Coordinates | Primary Color | Emblem Asset |
|---|---|---|---|---|---|
| `suwon-kt` | KT Wiz (KT 위즈) | Suwon kt wiz Park | `[37.2997, 127.0097]` | `#000000` / `#EC1C24` | `images/logos/emblem_KT.png` |
| `daegu-samsung` | Samsung Lions (삼성 라이온즈) | Daegu Samsung Lions Park | `[35.8411, 128.6815]` | `#074CA1` | `images/logos/emblem_SS.png` |
| `seoul-jamsil-lg` | LG Twins (LG 트윈스) | Jamsil Stadium (3rd Base) | `[37.5126, 127.0715]` | `#C30037` | `images/logos/emblem_LG.png` |
| `gwangju-kia` | KIA Tigers (KIA 타이거즈) | Champions Field | `[35.1682, 126.8891]` | `#C70125` | `images/logos/emblem_HT.png` |
| `seoul-jamsil-doosan` | Doosan Bears (두산 베어스) | Jamsil Stadium (1st Base) | `[37.5121, 127.0728]` | `#131230` | `images/logos/emblem_OB.png` |
| `changwon-nc` | NC Dinos (NC 다이노스) | Changwon NC Park | `[35.2225, 128.5824]` | `#071D49` | `images/logos/emblem_NC.png` |
| `daejeon-hanwha` | Hanwha Eagles (한화 이글스) | Hanwha Life Ballpark | `[36.3164, 127.4312]` | `#F37321` | `images/logos/emblem_HH.png` |
| `busan-lotte` | Lotte Giants (롯데 자이언츠) | Sajik Baseball Stadium | `[35.1940, 129.0615]` | `#002955` | `images/logos/emblem_LT.png` |
| `incheon-ssg` | SSG Landers (SSG 랜더스) | Incheon SSG Landers Field | `[37.4370, 126.6933]` | `#CE0E2D` | `images/logos/emblem_SK.png` |
| `seoul-gocheok-kiwoom` | Kiwoom Heroes (키움 히어로즈) | Gocheok Sky Dome | `[37.4982, 126.8671]` | `#570514` | `images/logos/emblem_WO.png` |
| `jeju-hallasan` | Bonus — Hallasan (한라산) | Hallasan Summit (1,947 m) | `[33.3617, 126.5292]` | `#2d6a4f` | *Inline Mountain SVG* |

---

## 5. Cartography & High-Speed Rail GIS Engine

### 5.1 Geographic Boundaries & Strict Lockdown
To maintain an authentic national portrait of South Korea and prevent disorientation:
- **South-West Anchor**: `[33.0, 124.5]` (Jeju / Marado / Southwestern coastal archipelago)
- **North-East Anchor**: `[38.7, 131.0]` (Goseong / DMZ / Dokdo / Ulleungdo / East Sea)
- **Viscosity**: `maxBoundsViscosity: 1.0` locks the viewport 100% inside South Korea.
- **Dynamic MinZoom Calculation**: On map resize, `map.getBoundsZoom(KOREA_BOUNDS, false)` dynamically recalculates `minZoom` to prevent grey unrendered outer bounds.

### 5.2 Complete Railway Network Architecture (`js/railways.js`)

The railway system adheres to **Option 1 (Realistic Physical Infrastructure)**, displaying both high-speed tracks and active conventional passenger arteries:

| Track ID | Line Name (Ko / En) | Color | Segments / Points | Description & Junctions |
| :--- | :--- | :---: | :---: | :--- |
| `ktxGyeongbu` | KTX 경부고속선<br>KTX Gyeongbu HSR | `#9e2a2b`<br>(Dark Red) | 1,352 segs<br>5,227 pts | High-speed dedicated line (Seoul $\leftrightarrow$ Busan via Singyeongju & Ulsan). Includes the **Siheung Connection Line** (`시흥연결선`) bridging Gwangmyeong Station to Geumcheon-gu Office on `gyeongbuMain` with 0.0m junction gap. |
| `gyeongbuMain` | 경부선 (대구-밀양-부산)<br>Gyeongbu Mainline | `#2d6a4f`<br>(Dark Green) | 1,465 segs<br>12,821 pts | Historic conventional mainline (Seoul $\leftrightarrow$ Busan via Suwon, Daejeon, Daegu, Miryang, Samnangjin, and Gupo). |
| `ktxGyeongjeon` | 경전선 (삼랑진분기-창원-마산)<br>Gyeongjeon Line | `#2d6a4f`<br>(Dark Green) | 1 seg<br>426 pts | Official OSM Relation `8839114` (Ref: `307`, 48.50 km). Branches off `gyeongbuMain` at **Samnangjin Junction** (`[35.3995, 128.8482]`, **0.0m gap**), crosses Nakdong River, runs through Jinyeong, Jinrye, **Changwon-Jungang**, **Changwon**, and terminates at **Masan Station**. |
| `ktxHonam` | KTX 호남고속선<br>KTX Honam HSR | `#2a4a7b`<br>(Dark Blue) | 568 segs<br>1,973 pts | Dedicated southwestern high-speed line. Branches from `ktxGyeongbu` at **Osong Junction** (`[36.6248, 127.3225]`, **0.0m gap**) south to Iksan, Jeongeup, and Gwangju-Songjeong. |
| `ktxSuseo` | KTX 수서평택고속선<br>Suseo High-Speed Railway | `#9e2a2b`<br>(Dark Red) | 54 segs<br>431 pts | SRT high-speed corridor from Suseo Station through Dongtan, merging into `ktxGyeongbu` at **Pyeongtaek Junction** (`[36.9515, 127.0706]`, **0.0m gap**). |
| `incheonLine` | 경인선 (인천축)<br>Gyeongin Rail Axis | `#8c6239`<br>(Brown) | 95 segs<br>1,335 pts | Historic 1899 harbor railway line connecting Guro Junction (Seoul) to Incheon Port. |

### 5.3 Station Node Alignment Logic
All 20 high-speed rail stations are calculated using **orthogonal vector projection onto line segments**:
$$t = \text{clamp}\left(\frac{\vec{AP} \cdot \vec{AB}}{\|\vec{AB}\|^2}, 0, 1\right), \quad P' = A + t \cdot \vec{AB}$$
Every station dot in `KBO_DATA.stations` sits at **0.0 meters offset** directly on its railway track centerline.

---

## 6. How to Prompt Gemini for Travel & Ballpark Images

To generate or source high-quality, culturally authentic photos for each city chapter, use the structured prompt templates below.

### 6.1 The 3-Slot Visual Formula
For every chapter, you need three distinct photographs:
1. **Slot 1 (`1_stadium.jpg` or `1_peak.jpg`)**: Main Ballpark / Landmark Anchor (wide architectural or vibrant crowd atmosphere).
2. **Slot 2 (`2_landmark.jpg`)**: Iconic Regional Landmark or Cityscape (cultural heritage, waterfront, skyline).
3. **Slot 3 (`3_dish.jpg`)**: Representative Regional Food (sizzling, authentic food close-up in traditional cookware or vibrant alleyway).

### 6.2 Master Prompt Template for Gemini
```text
Role: Professional architectural and travel documentary photographer.
Subject: [Describe subject: e.g., Daegu Samsung Lions Park / Masan Bay / Sizzling Makchang]
Location: [City name], South Korea.
Scene Details: [Key physical characteristics: e.g., distinctive octagonal diamond canopy, twilight sky, fans in team jerseys]
Composition: Wide 16:9 landscape aspect ratio, rule-of-thirds, clean leading lines.
Lighting: Warm golden hour twilight or vibrant stadium floodlights, authentic natural color grading.
Style: Realistic editorial photography, National Geographic travel documentary quality, crisp focus, shallow depth of field for food shots.
Negative Constraints: No CGI, no cartoon or AI distortions, no text overlays, no watermarks, no blur.
```

### 6.3 Concrete Examples by Slot

#### Example: Slot 1 (Ballpark) — Daegu Samsung Lions Park
> *"High-resolution, realistic editorial photograph of Daegu Samsung Lions Park in Daegu, South Korea during a warm summer evening game. The unique octagonal blue-accented ballpark architecture is captured from behind home plate showing the pristine emerald field, glowing floodlights, and enthusiastic fans holding blue cheering sticks. Cinematic golden-hour lighting, 16:9 landscape orientation, crisp documentary photo."*

#### Example: Slot 2 (Landmark) — UNESCO Hwaseong Fortress (Suwon)
> *"Photographic travel documentary shot of Hwahongmun (the secret seven-arch water sluice gate) and Banghwasuryujeong pavilion along the UNESCO World Heritage Hwaseong Fortress in Suwon, South Korea. Clear mountain water flows through the stone arches with ancient willow trees reflecting in the pond at dusk. Warm lantern illumination, 16:9 landscape format, National Geographic quality."*

#### Example: Slot 3 (Dish) — Sizzling Anjirang Makchang (Daegu)
> *"Close-up mouthwatering food photography of thick-cut beef and pork intestine (makchang) sizzling over charcoal on a round cast-iron grill in Daegu's famous Anjirang Gopchang Alley. Golden-brown crispy edges, smoke gently wafting, served with side dishes of spicy fermented doenjang dipping sauce, garlic cloves, and fresh perilla leaves. Authentic Korean street food aesthetic, shallow depth of field, 16:9 landscape."*

---

## 7. Complete Reproduction & Build Runbook

### 7.1 Automated Directory & Image Scaffolding
To regenerate all 11 drop folders and download the starter image assets, run:

```python
import os, json, urllib.request

base_dir = r"d:\Vibe\Korean Baseball\images\cities"
with open(r"d:\Vibe\Korean Baseball\data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

headers = {"User-Agent": "Mozilla/5.0"}
for entry_id, entry in data.items():
    folder = os.path.join(base_dir, entry_id)
    os.makedirs(folder, exist_ok=True)
    is_mtn = (entry_id == "jeju-hallasan")
    fnames = ["1_peak.jpg" if is_mtn else "1_stadium.jpg", "2_landmark.jpg", "3_dish.jpg"]
    for i, p in enumerate(entry.get("photos", [])):
        fname = fnames[i]
        out_path = os.path.join(folder, fname)
        if not os.path.exists(out_path):
            req = urllib.request.Request(p["src"], headers=headers)
            with urllib.request.urlopen(req) as resp, open(out_path, "wb") as out:
                out.write(resp.read())
            print(f"Downloaded: {out_path}")
```

### 7.2 Downloading Official KBO Team Emblems
```python
import os, urllib.request

teams = ["WO", "LG", "HT", "SS", "SK", "KT", "LT", "NC", "OB", "HH"]
base_url = "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/emblem/regular/2026/emblem_{}.png"
out_dir = r"d:\Vibe\Korean Baseball\images\logos"
os.makedirs(out_dir, exist_ok=True)

for team in teams:
    url = base_url.format(team)
    dest = os.path.join(out_dir, f"emblem_{team}.png")
    urllib.request.urlretrieve(url, dest)
    print(f"Saved: {dest}")
```

### 7.3 Extracting Official KTX Rail Geometry (Overpass API)
To re-extract the exact Gyeongjeon Line branch from OpenStreetMap Relation `8839114`:
```python
import urllib.request, json

query = """[out:json][timeout:60]; relation(8839114); out geom;"""
headers = {"User-Agent": "KBOApp/1.0", "Accept": "application/json"}
req = urllib.request.Request("https://overpass-api.de/api/interpreter", data=query.encode("utf-8"), headers=headers)
with urllib.request.urlopen(req) as resp:
    osm_data = json.loads(resp.read().decode("utf-8"))
# Ways 0 to 72 form the contiguous Samnangjin -> Masan line.
```

### 7.4 Running Locally
```bash
# Run using any static HTTP server from project root:
cd "d:/Vibe/Korean Baseball"
python -m http.server 8000
# Open http://localhost:8000
```

---

## 8. Verification & Quality Assurance Checklist

- [x] **Zero Build Dependencies**: Pure HTML5, Vanilla CSS3, and ES6 JavaScript.
- [x] **Continuous Track Geometry**: All rail junctions (`ktxSuseo`, `ktxHonam`, `ktxGyeongjeon`, and `ktxGyeongbu` Siheung link) meet with **0.0m gaps**.
- [x] **20 Aligned Stations**: Every station node is centered precisely on its railway track centerline.
- [x] **11 Offline-Ready Drop Folders**: Complete with localized `README.md` and active starter images.
- [x] **Complete Image Citations & Attribution Logs**: Fully documented Unsplash source IDs and licenses across all 11 city `README.md` files with structured tables for logging user-replaced photos.
- [x] **Dynamic Script Cache-Busting**: `index.html` loads scripts with `?t=Date.now()` to prevent stale browser caching.
- [x] **Geographic Enclosure**: Locked to South Korea bounds (`[33.0, 124.5]` to `[38.7, 131.0]`).
- [x] **Bilingual Completeness**: 100% of all UI strings, civic facts, highlights, anthems, and dialects exist in both English and Korean.
