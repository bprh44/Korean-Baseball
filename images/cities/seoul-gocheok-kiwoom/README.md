# 📷 Seoul (Gocheok) (서울특별시 (고척)) · Kiwoom Heroes (키움 히어로즈)
## Travel Photography Drop Folder

Drop your 3 high-resolution photos for **Seoul (Gocheok)** directly into this folder, or specify image URLs in `data.json`.

---

### 📂 Recommended Filenames & Photo Slots

| Slot | Recommended Filename | Content Focus |
| :---: | :--- | :--- |
| **Photo 1** | `1_stadium.jpg` | **Stadium (PR) · Gocheok Sky Dome, Korea's Only Indoor Ballpark** (야구장(공식PR) · 대한민국 유일의 돔 야구장, 고척스카이돔) |
| **Photo 2** | `2_landmark.jpg` | **Landmark · Anyangcheon River Walkway & Guro Digital Complex** (랜드마크 · 안양천 벚꽃 수변 산책로와 구로 디지털밸리) |
| **Photo 3** | `3_dish.jpg` | **Dish · Crispy Dakgangjeong & Gocheok Dome Cream Shrimp** (대표음식 · 돔구장 명물 크림새우 & 바삭한 신도림 닭강정) |

> **Accepted formats**: `.jpg`, `.jpeg`, `.png`, or `.webp` (or online image URLs via `data.json`).

---

### ⚙️ How to Load Images in `data.json`

The webpage loads your images directly based off the values in `data.json`. You can point `src` to either a **local folder path** or an **online image URL**:

```json
"photos": [
  {
    "src": "images/cities/seoul-gocheok-kiwoom/1_stadium.jpg",
    "labelEn": "Stadium (PR) · Gocheok Sky Dome, Korea's Only Indoor Ballpark",
    "labelKo": "야구장(공식PR) · 대한민국 유일의 돔 야구장, 고척스카이돔"
  },
  {
    "src": "images/cities/seoul-gocheok-kiwoom/2_landmark.jpg",
    "labelEn": "Landmark · Anyangcheon River Walkway & Guro Digital Complex",
    "labelKo": "랜드마크 · 안양천 벚꽃 수변 산책로와 구로 디지털밸리"
  },
  {
    "src": "images/cities/seoul-gocheok-kiwoom/3_dish.jpg",
    "labelEn": "Dish · Crispy Dakgangjeong & Gocheok Dome Cream Shrimp",
    "labelKo": "대표음식 · 돔구장 명물 크림새우 & 바삭한 신도림 닭강정"
  }
]
```

---

### 💡 Best Practice Specifications
- **Orientation**: Landscape (horizontal) format.
- **Aspect Ratio**: 16:9 or 3:2 recommended.
- **Resolution**: 1200×800 px or higher for Retina screens and lightbox modal.
