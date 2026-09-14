# 📷 Daejeon (대전광역시) · Hanwha Eagles (한화 이글스)
## Travel Photography Drop Folder

Drop your 3 high-resolution photos for **Daejeon** directly into this folder, or specify image URLs in `data.json`.

---

### 📂 Recommended Filenames & Photo Slots

| Slot | Recommended Filename | Content Focus |
| :---: | :--- | :--- |
| **Photo 1** | `1_stadium.jpg` | **Stadium (PR) · Cozy Daejeon Hanwha Life Ballpark Filled with Orange** (야구장(공식PR) · 주황빛 물결, 대전 한화생명 이글스파크) |
| **Photo 2** | `2_landmark.jpg` | **Landmark · Hanbit Tower & Expo Bridge at Gapcheon River** (랜드마크 · 대전 엑스포 한빛탑과 갑천 엑스포다리 야경) |
| **Photo 3** | `3_dish.jpg` | **Dish · Sungsimdang Fried Soboro Bread & Spicy Kalguksu** (대표음식 · 성심당 바삭한 튀김소보로 & 얼큰 칼국수) |

> **Accepted formats**: `.jpg`, `.jpeg`, `.png`, or `.webp` (or online image URLs via `data.json`).

---

### ⚙️ How to Load Images in `data.json`

The webpage loads your images directly based off the values in `data.json`. You can point `src` to either a **local folder path** or an **online image URL**:

```json
"photos": [
  {
    "src": "images/cities/daejeon-hanwha/1_stadium.jpg",
    "labelEn": "Stadium (PR) · Cozy Daejeon Hanwha Life Ballpark Filled with Orange",
    "labelKo": "야구장(공식PR) · 주황빛 물결, 대전 한화생명 이글스파크"
  },
  {
    "src": "images/cities/daejeon-hanwha/2_landmark.jpg",
    "labelEn": "Landmark · Hanbit Tower & Expo Bridge at Gapcheon River",
    "labelKo": "랜드마크 · 대전 엑스포 한빛탑과 갑천 엑스포다리 야경"
  },
  {
    "src": "images/cities/daejeon-hanwha/3_dish.jpg",
    "labelEn": "Dish · Sungsimdang Fried Soboro Bread & Spicy Kalguksu",
    "labelKo": "대표음식 · 성심당 바삭한 튀김소보로 & 얼큰 칼국수"
  }
]
```

---

### 💡 Best Practice Specifications
- **Orientation**: Landscape (horizontal) format.
- **Aspect Ratio**: 16:9 or 3:2 recommended.
- **Resolution**: 1200×800 px or higher for Retina screens and lightbox modal.
