# 📷 Gwangju (광주광역시) · KIA Tigers (KIA 타이거즈)
## Travel Photography Drop Folder

Drop your 3 high-resolution photos for **Gwangju** directly into this folder, or specify image URLs in `data.json`.

---

### 📂 Recommended Filenames & Photo Slots

| Slot | Recommended Filename | Content Focus |
| :---: | :--- | :--- |
| **Photo 1** | `1_stadium.jpg` | **Stadium (PR) · Modern Gwangju-KIA Champions Field** (야구장(공식PR) · 호남 야구의 성지, 광주-기아 챔피언스 필드) |
| **Photo 2** | `2_landmark.jpg` | **Landmark · Columnar Basalt Formations of Mount Mudeung (Seoseokdae)** (랜드마크 · 유네스코 지질공원 무등산 서석대와 입석대 주상절리) |
| **Photo 3** | `3_dish.jpg` | **Dish · Rich Savory Perilla Duck Soup & Songjeong Tteokgalbi** (대표음식 · 구수한 들깨 오리탕 & 송정 떡갈비 한상차림) |

> **Accepted formats**: `.jpg`, `.jpeg`, `.png`, or `.webp` (or online image URLs via `data.json`).

---

### ⚙️ How to Load Images in `data.json`

The webpage loads your images directly based off the values in `data.json`. You can point `src` to either a **local folder path** or an **online image URL**:

```json
"photos": [
  {
    "src": "images/cities/gwangju-kia/1_stadium.jpg",
    "labelEn": "Stadium (PR) · Modern Gwangju-KIA Champions Field",
    "labelKo": "야구장(공식PR) · 호남 야구의 성지, 광주-기아 챔피언스 필드"
  },
  {
    "src": "https://maps.app.goo.gl/JmLKYjUu9YPRb2Je7",
    "labelEn": "Landmark · Columnar Basalt Formations of Mount Mudeung (Seoseokdae)",
    "labelKo": "랜드마크 · 유네스코 지질공원 무등산 서석대와 입석대 주상절리"
  },
  {
    "src": "images/cities/gwangju-kia/3_dish.jpg",
    "labelEn": "Dish · Rich Savory Perilla Duck Soup & Songjeong Tteokgalbi",
    "labelKo": "대표음식 · 구수한 들깨 오리탕 & 송정 떡갈비 한상차림"
  }
]
```

---

### 💡 Best Practice Specifications
- **Orientation**: Landscape (horizontal) format.
- **Aspect Ratio**: 16:9 or 3:2 recommended.
- **Resolution**: 1200×800 px or higher for Retina screens and lightbox modal.
