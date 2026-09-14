# 📷 Suwon (수원특례시) · KT Wiz (KT 위즈)
## Travel Photography Drop Folder

Drop your 3 high-resolution photos for **Suwon** directly into this folder, or specify image URLs in `data.json`.

---

### 📂 Recommended Filenames & Photo Slots

| Slot | Recommended Filename | Content Focus |
| :---: | :--- | :--- |
| **Photo 1** | `1_stadium.jpg` | **Stadium (PR) · Suwon kt wiz Park Under Sunset Lights** (야구장(공식PR) · 노을빛 아래 빛나는 수원 kt wiz 파크) |
| **Photo 2** | `2_landmark.jpg` | **Landmark · UNESCO Hwaseong Fortress Secret Sluice Gate (Hwahongmun)** (랜드마크 · 유네스코 수원화성 화홍문과 방화수류정) |
| **Photo 3** | `3_dish.jpg` | **Dish · Crispy Cauldron Fried Whole Chicken (Suwon Tongdak)** (대표음식 · 바삭한 가마솥 수원 통닭 & 수원 왕갈비) |

> **Accepted formats**: `.jpg`, `.jpeg`, `.png`, or `.webp` (or online image URLs via `data.json`).

---

### ⚙️ How to Load Images in `data.json`

The webpage loads your images directly based off the values in `data.json`. You can point `src` to either a **local folder path** or an **online image URL**:

```json
"photos": [
  {
    "src": "images/cities/suwon-kt/1_stadium.jpg",
    "labelEn": "Stadium (PR) · Suwon kt wiz Park Under Sunset Lights",
    "labelKo": "야구장(공식PR) · 노을빛 아래 빛나는 수원 kt wiz 파크"
  },
  {
    "src": "images/cities/suwon-kt/2_landmark.jpg",
    "labelEn": "Landmark · UNESCO Hwaseong Fortress Secret Sluice Gate (Hwahongmun)",
    "labelKo": "랜드마크 · 유네스코 수원화성 화홍문과 방화수류정"
  },
  {
    "src": "images/cities/suwon-kt/3_dish.jpg",
    "labelEn": "Dish · Crispy Cauldron Fried Whole Chicken (Suwon Tongdak)",
    "labelKo": "대표음식 · 바삭한 가마솥 수원 통닭 & 수원 왕갈비"
  }
]
```

---

### 💡 Best Practice Specifications
- **Orientation**: Landscape (horizontal) format.
- **Aspect Ratio**: 16:9 or 3:2 recommended.
- **Resolution**: 1200×800 px or higher for Retina screens and lightbox modal.
