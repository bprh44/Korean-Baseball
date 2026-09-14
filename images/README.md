# 🖼️ Application Image Assets (`images/`)

This directory houses visual graphic assets for **KBO — A Way Into Korea**, organized into two core subdirectories:

---

## 📁 Subdirectory Overview

```
images/
├── cities/               # 📷 Travel & ballpark photos for each city/chapter
│   ├── suwon-kt/
│   ├── daegu-samsung/
│   ├── seoul-jamsil-lg/
│   ├── gwangju-kia/
│   ├── seoul-jamsil-doosan/
│   ├── changwon-nc/
│   ├── daejeon-hanwha/
│   ├── busan-lotte/
│   ├── incheon-ssg/
│   ├── seoul-gocheok-kiwoom/
│   ├── jeju-hallasan/
│   └── README.md         # City photography guide
│
└── logos/                # ⚾ Official club crests and emblems (PNG/SVG)
    ├── emblem_HH.png     # Hanwha Eagles
    ├── emblem_HT.png     # KIA Tigers
    ├── emblem_KT.png     # KT Wiz
    ├── emblem_LG.png     # LG Twins
    ├── emblem_LT.png     # Lotte Giants
    ├── emblem_NC.png     # NC Dinos
    ├── emblem_OB.png     # Doosan Bears
    ├── emblem_SK.png     # SSG Landers
    ├── emblem_SS.png     # Samsung Lions
    └── emblem_WO.png     # Kiwoom Heroes
```

---

## 📷 How Images Are Loaded

The application loads images based directly on the `photos` array in `data.json`.

1. To use **local files**: Drop your photos into the respective city folder (e.g. `images/cities/changwon-nc/1_stadium.jpg`) and set `"src": "images/cities/changwon-nc/1_stadium.jpg"` in `data.json`.
2. To use **web URLs**: Put the direct image link (e.g. `"src": "https://..."`) in `data.json`.

---

## 💡 Image Specifications
- **File Formats**: `.jpg`, `.jpeg`, `.png`, or `.webp`
- **Orientation**: Landscape (horizontal)
- **Aspect Ratio**: 16:9 or 3:2 recommended
- **Optimal Resolution**: 1200×800 px to 1600×900 px
