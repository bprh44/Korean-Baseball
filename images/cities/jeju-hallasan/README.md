# 📷 Jeju Island (제주특별자치도) · Bonus — Hallasan (보너스 — 한라산)
## Travel Photography Drop Folder

Drop your 3 high-resolution photos for **Jeju Island** directly into this folder, or specify image URLs in `data.json`.

---

### 📂 Recommended Filenames & Photo Slots

| Slot | Recommended Filename | Content Focus |
| :---: | :--- | :--- |
| **Photo 1** | `1_peak.jpg` | **Mountain Peak (PR) · Hallasan Baengnokdam Summit Crater (1,947 m)** (명산 정상(공식PR) · 한라산 해발 1,947m 백록담 분화구의 장관) |
| **Photo 2** | `2_landmark.jpg` | **Landmark · UNESCO Seongsan Ilchulbong (Sunrise Peak) & Emerald Coast** (랜드마크 · 유네스코 세계자연유산 성산일출봉과 푸른 바다) |
| **Photo 3** | `3_dish.jpg` | **Dish · Thick Charcoal Grilled Jeju Black Pork (Heukdwaeji)** (대표음식 · 멜젓에 콕 찍어 먹는 쫄깃한 제주 흑돼지 구이 & 전복죽) |

> **Accepted formats**: `.jpg`, `.jpeg`, `.png`, or `.webp` (or online image URLs via `data.json`).

---

### ⚙️ How to Load Images in `data.json`

The webpage loads your images directly based off the values in `data.json`. You can point `src` to either a **local folder path** or an **online image URL**:

```json
"photos": [
  {
    "src": "images/cities/jeju-hallasan/1_peak.jpg",
    "labelEn": "Mountain Peak (PR) · Hallasan Baengnokdam Summit Crater (1,947 m)",
    "labelKo": "명산 정상(공식PR) · 한라산 해발 1,947m 백록담 분화구의 장관"
  },
  {
    "src": "images/cities/jeju-hallasan/2_landmark.jpg",
    "labelEn": "Landmark · UNESCO Seongsan Ilchulbong (Sunrise Peak) & Emerald Coast",
    "labelKo": "랜드마크 · 유네스코 세계자연유산 성산일출봉과 푸른 바다"
  },
  {
    "src": "images/cities/jeju-hallasan/3_dish.jpg",
    "labelEn": "Dish · Thick Charcoal Grilled Jeju Black Pork (Heukdwaeji)",
    "labelKo": "대표음식 · 멜젓에 콕 찍어 먹는 쫄깃한 제주 흑돼지 구이 & 전복죽"
  }
]
```

---

### 💡 Best Practice Specifications
- **Orientation**: Landscape (horizontal) format.
- **Aspect Ratio**: 16:9 or 3:2 recommended.
- **Resolution**: 1200×800 px or higher for Retina screens and lightbox modal.
