# 📷 Incheon (인천광역시) · SSG Landers (SSG 랜더스)
## Travel Photography Drop Folder

Drop your 3 high-resolution photos for **Incheon** directly into this folder, or specify image URLs in `data.json`.

---

### 📂 Recommended Filenames & Photo Slots

| Slot | Recommended Filename | Content Focus |
| :---: | :--- | :--- |
| **Photo 1** | `1_stadium.jpg` | **Stadium (PR) · Incheon SSG Landers Field Featuring the World-Record Big Board** (야구장(공식PR) · 세계 최대 빅보드 전광판의 인천SSG랜더스필드) |
| **Photo 2** | `2_landmark.jpg` | **Landmark · Songdo Central Park & Incheon Grand Bridge Over the Yellow Sea** (랜드마크 · 서해를 가로지르는 인천대교 & 송도 센트럴파크) |
| **Photo 3** | `3_dish.jpg` | **Dish · Glazed Spicy Sweet Fried Chicken (Sinpo Dakgangjeong)** (대표음식 · 바삭하고 매콤달콤한 신포시장 닭강정 & 차이나타운 짜장면) |

> **Accepted formats**: `.jpg`, `.jpeg`, `.png`, or `.webp` (or online image URLs via `data.json`).

---

### ⚙️ How to Load Images in `data.json`

The webpage loads your images directly based off the values in `data.json`. You can point `src` to either a **local folder path** or an **online image URL**:

```json
"photos": [
  {
    "src": "images/cities/incheon-ssg/1_stadium.jpg",
    "labelEn": "Stadium (PR) · Incheon SSG Landers Field Featuring the World-Record Big Board",
    "labelKo": "야구장(공식PR) · 세계 최대 빅보드 전광판의 인천SSG랜더스필드"
  },
  {
    "src": "images/cities/incheon-ssg/2_landmark.jpg",
    "labelEn": "Landmark · Songdo Central Park & Incheon Grand Bridge Over the Yellow Sea",
    "labelKo": "랜드마크 · 서해를 가로지르는 인천대교 & 송도 센트럴파크"
  },
  {
    "src": "images/cities/incheon-ssg/3_dish.jpg",
    "labelEn": "Dish · Glazed Spicy Sweet Fried Chicken (Sinpo Dakgangjeong)",
    "labelKo": "대표음식 · 바삭하고 매콤달콤한 신포시장 닭강정 & 차이나타운 짜장면"
  }
]
```

---

### 💡 Best Practice Specifications
- **Orientation**: Landscape (horizontal) format.
- **Aspect Ratio**: 16:9 or 3:2 recommended.
- **Resolution**: 1200×800 px or higher for Retina screens and lightbox modal.
