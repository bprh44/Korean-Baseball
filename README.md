# ⚾ KBO — A Way Into Korea (한국으로 들어가는 길)

> **"A journey through Korea told through the cities, people, food, sounds, and memories I've encountered—with KBO baseball quietly connecting the map together."**

---

## 🧭 Project Philosophy

**KBO — A Way Into Korea** is an interactive travel and cultural storytelling magazine rather than a sports statistics dashboard:
1. **The Cities & Distinct Neighborhoods**: From the hillside roads of Busan to the unhurried bakeries of Daejeon, the tech-worker alleys of Guro, and the historic fortress gates of Suwon.
2. **The Quiet Thread of Baseball**: 10 KBO clubs and ballparks act as physical and emotional anchor points across the Korean peninsula (plus Jeju Island Hallasan).
3. **Instant Bilingual Voice**: Real-time switching between English personal memoirs and Korean literary translations (`data-lang`).
4. **Precision Cartography & Rail**: A warm parchment map featuring surveyor-accurate OpenStreetMap KTX high-speed rail track geometry with 0.0m junction gaps.
5. **Sounds, Dialects & Stadium Cheers**: High-quality speech synthesis for regional expressions and chorus-synced embedded stadium anthems with pickoff chant deep links.
6. **Zero External Build Step**: Pure HTML5, Vanilla CSS3, and ES6 JavaScript.

---

## 📂 File Architecture

```text
Korean Baseball/
├── .gitignore              # Git ignore rules for OS, credentials, and local logs
├── index.html              # Main magazine interface (split-screen map & editorial panel)
├── admin.html              # Administrative visual content editor with live preview & auto-save
├── PRD_SDD.md              # 📄 Unified Product Requirements & System Design Specification
├── README.md               # User guide & curation walkthrough
├── data.json               # Canonical JSON data store for all 11 chapters
├── entry_template.json     # Standardized JSON schema for adding new chapters
├── server.py               # Python HTTP server with auto-save API & strict referrer policy
├── server.ps1              # Native PowerShell HTTP server with auto-save API
├── start_server.bat        # One-click Windows launcher (starts server & opens browser)
├── css/
│   └── style.css           # Warm paper aesthetic, typography scale, responsive layout
├── js/
│   ├── railways.js         # 🚆 Precision OpenStreetMap KTX high-speed rail track geometry
│   ├── data.js             # 🌟 Decoupled bilingual data store (11 chapters, stations, anthems)
│   └── app.js              # Leaflet cartography engine, SpeechSynthesis, lightbox, hash routing
└── images/
    ├── logos/              # ⚾ Official 2026 KBO club emblems (emblem_*.png)
    └── cities/             # 📷 11 Chapter image drop folders (1_stadium.jpg, 2_landmark.jpg, 3_dish.jpg)
```

---

## 🚀 How to Run Locally

### Recommended: One-Click Launcher (`start_server.bat`)
Double-click `start_server.bat` in the project root. It will:
1. Detect Python (or fallback to native PowerShell).
2. Start the local HTTP server at `http://localhost:8000`.
3. Set `Referrer-Policy: strict-origin-when-cross-origin` to ensure YouTube embeds play without restriction (preventing YouTube Error 153).
4. Launch `http://localhost:8000/admin.html` and `http://localhost:8000/` in your default browser.

```cmd
start_server.bat
```

### Manual Command Line
```bash
# Python:
python server.py

# Or PowerShell:
powershell -ExecutionPolicy Bypass -File server.ps1
```

> [!NOTE]
> Opening `index.html` directly via `file:///` works for mapping and speech synthesis, but YouTube blocks embedded video playback on `file://` URIs with Error 153. Running via `start_server.bat` or `http://localhost:8000` is recommended for the complete multimedia experience.

---

## 🛠️ How to Customize Your Travel Journal

### Method A: Interactive Admin Dashboard (`admin.html`)
Open `http://localhost:8000/admin.html` while the server is running:
- **Visual Form Editor**: Edit city names, civic/chaebol history bullets, ballpark details, colors, and coordinates.
- **Smart YouTube Ingestion**: Simply paste any YouTube URL (or 11-char ID); the editor automatically extracts video IDs and timestamps (e.g., `?t=30s`, `?start=90`).
- **Live Video & SVG Previews**: Real-time iframe preview and club emblem badge rendering.
- **Auto-Save & File Sync**: Click **Save Changes** (or press `Ctrl+S`). The server saves directly to `data.json` and updates `js/data.js` automatically.

---

### Method B: Drop-In Photography Replacement
Each of the 11 city chapters has a dedicated folder inside `images/cities/`:
* `1_stadium.jpg` (or `1_peak.jpg` for Jeju): Ballpark / Landmark Anchor.
* `2_landmark.jpg`: Iconic Regional Landmark or Cityscape.
* `3_dish.jpg`: Regional Signature Food or Market Specialty.

Replace any file inside `images/cities/<entry_id>/` with your own JPG photograph using the same file name, and the app will immediately display your photo!

---

### Method C: Dialects & Stadium Cheers
Each chapter features 4 curated dialect expressions and chants:
1. **Greeting 사투리** (e.g., *"마, 밥 묵었나?"*)
2. **"Have you eaten?"** regional inquiry
3. **Iconic regional catchphrase / idiom**
4. **Signature ballpark cheer / pickoff chant** with a direct YouTube button jumping to the exact audio moment.

Clicking the speech button (▶) speaks the Korean phrase with authentic intonation via the browser's Web SpeechSynthesis API.

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `L` | Toggle language between Korean (한국어) and English |
| `ArrowLeft` / `ArrowRight` | Cycle through previous / next city chapter in standings order |
| `Escape` | Close the high-resolution photo lightbox modal |
