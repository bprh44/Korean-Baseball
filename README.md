# ⚾ KBO — A Way Into Korea (한국으로 들어가는 길)

> **"A journey through Korea told through the cities, people, food, sounds, and memories I've encountered—with KBO baseball quietly connecting the map together."**

---

## 🧭 Project Philosophy

This is an **interactive travel and storytelling magazine** rather than a sports statistics dashboard. It celebrates:
1. **The 8 Cities & Distinct Neighborhoods**: From the hillside roads of Busan to the unhurried bakeries of Daejeon, the tech-worker alleys of Guro, and the historic fortress gates of Suwon.
2. **The Quiet Thread of Baseball**: 10 KBO clubs and ballparks act as the anchor points connecting the physical journey across the Korean peninsula.
3. **Bilingual Editorial Voice**: Instant seamless switching between English personal memoirs and Korean literary translations.
4. **Cartography & Transit**: A warm paper map styled with the high-speed KTX railway spine.
5. **Sounds & Dialects**: Interactive "Hear the City" regional speech cards and signature stadium anthem singalongs.

---

## 📂 File Architecture

```text
Korean Baseball/
├── .gitignore              # Git ignore rules for OS, credentials, and local logs
├── index.html              # Main magazine interface (split-screen map & editorial panel)
├── PRD_SDD.md              # 📄 Unified Product Requirements & System Design Specification
├── README.md               # User guide & customization walkthrough
├── css/
│   └── style.css           # Warm paper aesthetic, typography scale, responsive split-view, KTX lines
├── js/
│   ├── railways.js         # 🚆 Precision OpenStreetMap KTX high-speed rail track geometry
│   ├── data.js             # 🌟 Decoupled bilingual data store (stories, photos, anthems, dialects)
│   └── app.js              # Leaflet cartography engine, SpeechSynthesis, lightbox, hash routing
└── images/
    ├── README.txt          # Photo placement conventions (Place, Street, Food)
    └── logos/              # ⚾ Official 2026 KBO club emblems (emblem_*.png)
```

---

## 🛠️ How to Customize Your Travel Journal

The website was built with **strict data decoupling**. You never need to touch `index.html` or `style.css` to update your stories or add personal photos.

### 1. Adding Your Own Photographs
Each entry has a **Photo Triptych** consisting of 3 photos:
* `(1)` **Place / Landscape**: The skyline, harbor, mountain, or landmark.
* `(2)` **Street / People**: Everyday alleyways, markets, evening neon.
* `(3)` **Food / Culture**: Regional cuisine, local drinks, market delicacies.

To use your own photos:
1. Save your photos into the corresponding folder inside `images/` (e.g. `images/busan/landscape.jpg`, `images/busan/market.jpg`, `images/busan/dwaejigukbap.jpg`).
2. Open [`js/data.js`](file:///d:/Vibe/Korean%20Baseball/js/data.js) and update the `src` paths and captions:
```javascript
photos: [
  {
    src: "images/busan/landscape.jpg",
    labelEn: "Place · Sanbok-doro Hillside Road at Twilight",
    labelKo: "장소 · 영도 산복도로에서 바라본 해질녘 부산항"
  },
  {
    src: "images/busan/market.jpg",
    labelEn: "Street · Jagalchi Fishmongers & Evening Stalls",
    labelKo: "거리 · 자갈치 어시장 골목의 저녁 풍경"
  },
  {
    src: "images/busan/dwaejigukbap.jpg",
    labelEn: "Food · Steaming Pork Rice Soup in Nampo-dong",
    labelKo: "음식 · 남포동 골목의 뜨끈한 돼지국밥"
  }
]
```

---

### 2. Updating Your Personal Stories
In [`js/data.js`](file:///d:/Vibe/Korean%20Baseball/js/data.js), locate any entry (e.g. `"daejeon-hanwha"`) and edit `storyEn` and `storyKo`:

```javascript
storyEn: "Your personal 3-4 sentence memoir of what you discovered in this city...",
storyKo: "한국어 번역 또는 한국어로 남긴 개인적인 여행 기록..."
```

---

### 3. Customizing Stadium Anthems & YouTube Timestamps
To change a stadium rally song or update the starting point:
```javascript
anthem: {
  titleEn: "Busan Seagulls (Busan Galmaegi)",
  titleKo: "부산 갈매기",
  originEn: "Moon Sung-jae 1982 classic · Anthem of Busan",
  originKo: "문성재 원곡 · 부산 시민의 애국가",
  noteEn: "Singalong starts as night falls over the stadium...",
  noteKo: "7회 말 끝남과 동시에 온 사직구장을 흔드는 영혼가...",
  youtubeId: "r2Yn-M7K-d4",  // YouTube Video ID
  timestamp: 15               // Seconds to skip directly into the chorus
}
```

---

### 4. Customizing Dialect Phrases ("Hear the City")
Edit the 3 phrases per city (Greeting, "Have you eaten?", Local signature expression):
```javascript
phrases: [
  {
    ko: "마, 부산 아이가!",
    romaja: "Ma, Busan aiga!",
    meaningEn: "Hey, this is Busan after all!",
    descKo: "사직 관중석과 포장마차 어디서나 울려 퍼지는 자부심",
    noteEn: "The iconic Busan exclamation of local pride."
  }
]
```
The play button (▶) automatically speaks the phrase using high-quality Korean speech synthesis with regional tone pacing.

---

## 🚀 How to Run Locally

You can open [`index.html`](file:///d:/Vibe/Korean%20Baseball/index.html) directly in any modern web browser, or serve it using any lightweight local server (such as VS Code Live Server or Python `python -m http.server 8000`).
