# 📷 Seoul (Jamsil) (서울특별시 (잠실)) · LG Twins (LG 트윈스)
## Travel Photography Drop Folder

Drop your 3 high-resolution photos for **Seoul (Jamsil)** directly into this folder, or specify image URLs in `data.json`.

---

### 📂 Recommended Filenames & Photo Slots

| Slot | Recommended Filename | Content Focus |
| :---: | :--- | :--- |
| **Photo 1** | `1_stadium.jpg` | **Stadium (PR) · Historic Jamsil Baseball Stadium Packed with Fans** (야구장(공식PR) · 유광점퍼의 물결, 만원 관중의 잠실야구장) |
| **Photo 2** | `2_landmark.jpg` | **Landmark · N Seoul Tower Overlooking the Han River Basin** (랜드마크 · 서울의 중심 남산서울타워와 한강 야경 파노라마) |
| **Photo 3** | `3_dish.jpg` | **Dish · Crispy Han River Chimaek (Chicken & Cold Beer)** (대표음식 · 바삭한 한강 치맥 & 광장시장 마약김밥) |

> **Accepted formats**: `.jpg`, `.jpeg`, `.png`, or `.webp` (or online image URLs via `data.json`).

---

### ⚙️ How to Load Images in `data.json`

The webpage loads your images directly based off the values in `data.json`. You can point `src` to either a **local folder path** or an **online image URL**:

```json
"photos": [
  {
    "src": "images/cities/seoul-jamsil-lg/1_stadium.jpg",
    "labelEn": "Stadium (PR) · Historic Jamsil Baseball Stadium Packed with Fans",
    "labelKo": "야구장(공식PR) · 유광점퍼의 물결, 만원 관중의 잠실야구장"
  },
  {
    "src": "images/cities/seoul-jamsil-lg/2_landmark.jpg",
    "labelEn": "Landmark · N Seoul Tower Overlooking the Han River Basin",
    "labelKo": "랜드마크 · 서울의 중심 남산서울타워와 한강 야경 파노라마"
  },
  {
    "src": "images/cities/seoul-jamsil-lg/3_dish.jpg",
    "labelEn": "Dish · Crispy Han River Chimaek (Chicken & Cold Beer)",
    "labelKo": "대표음식 · 바삭한 한강 치맥 & 광장시장 마약김밥"
  }
]
```

---

### 💡 Best Practice Specifications
- **Orientation**: Landscape (horizontal) format.
- **Aspect Ratio**: 16:9 or 3:2 recommended.
- **Resolution**: 1200×800 px or higher for Retina screens and lightbox modal.
