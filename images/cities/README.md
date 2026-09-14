# 📷 City & Ballpark Travel Photography Directory

Welcome to the travel photography repository for **KBO — A Way Into Korea**.

This directory contains dedicated drop folders for all **11 clubs, cities, and regions**. The webpage automatically loads images based off the paths or URLs configured in `data.json`.

---

## 📂 Directory Structure

```
images/cities/
├── suwon-kt/                 # Suwon (KT Wiz · Suwon kt wiz Park)
├── daegu-samsung/            # Daegu (Samsung Lions · Daegu Samsung Lions Park)
├── seoul-jamsil-lg/          # Seoul Jamsil (LG Twins · Jamsil Baseball Stadium)
├── gwangju-kia/              # Gwangju (KIA Tigers · Gwangju-KIA Champions Field)
├── seoul-jamsil-doosan/      # Seoul Jamsil (Doosan Bears · Jamsil Baseball Stadium)
├── changwon-nc/              # Changwon Masan (NC Dinos · Changwon NC Park)
├── daejeon-hanwha/           # Daejeon (Hanwha Eagles · Hanwha Life Ballpark)
├── busan-lotte/              # Busan (Lotte Giants · Sajik Baseball Stadium)
├── incheon-ssg/              # Incheon (SSG Landers · Incheon SSG Landers Field)
├── seoul-gocheok-kiwoom/     # Seoul Gocheok (Kiwoom Heroes · Gocheok Sky Dome)
└── jeju-hallasan/            # Jeju Island (Bonus Chapter · Hallasan Peak)
```

---

## 🖼️ The 3-Photo Triptych Per City

Each chapter features an interactive 3-photo triptych card layout in the right-hand editorial journal. For each city, 3 photos are displayed:

| Slot | Filename | Content Focus |
| :---: | :--- | :--- |
| **Photo 1** | `1_stadium.jpg` (or `1_peak.jpg`) | **Stadium / Main Anchor** (Ballpark exterior/interior, crowd, or mountain summit) |
| **Photo 2** | `2_landmark.jpg` | **Landmark / Culture** (Historic fortress, coastal bridge, observatory tower, scenic bay) |
| **Photo 3** | `3_dish.jpg` | **Local Delicacy / Street Food** (Regional specialty dish, traditional market alley food) |

---

## ⚙️ Loading Images via `data.json`

The webpage displays photos based directly on the `src` values specified in `data.json`. You can provide either **local folder paths** or **online image URLs**:

```json
"photos": [
  {
    "src": "images/cities/busan-lotte/1_stadium.jpg",
    "labelEn": "Stadium (PR) · Sajik Baseball Stadium",
    "labelKo": "야구장(공식PR) · 부산 사직야구장"
  },
  {
    "src": "images/cities/busan-lotte/2_landmark.jpg",
    "labelEn": "Landmark · Gwangandaegyo Bridge & Marine City",
    "labelKo": "랜드마크 · 광안대교와 해운대 마린시티"
  },
  {
    "src": "images/cities/busan-lotte/3_dish.jpg",
    "labelEn": "Dish · Steaming Pork Soup (Dwaeji-gukbap)",
    "labelKo": "대표음식 · 자갈치 돼지국밥"
  }
]
```

---

## 💡 Image Specifications
- **Orientation**: Landscape (horizontal) format.
- **Recommended Ratio**: 16:9, 3:2, or 4:3.
- **Resolution**: 1200×800 px or higher for crisp display on Retina screens and fullscreen lightbox modal.
- **Supported Formats**: `.jpg`, `.jpeg`, `.png`, `.webp` (or online image URLs).
