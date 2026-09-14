# 📷 Busan (부산광역시) · Lotte Giants (롯데 자이언츠)
## Travel Photography Drop Folder

Drop your 3 high-resolution photos for **Busan** directly into this folder, or specify image URLs in `data.json`.

---

### 📂 Recommended Filenames & Photo Slots

| Slot | Recommended Filename | Content Focus |
| :---: | :--- | :--- |
| **Photo 1** | `1_stadium.jpg` | **Stadium (PR) · Sajik Baseball Stadium, The World's Largest Karaoke** (야구장(공식PR) · 세계 최대의 야외 노래방, 부산 사직야구장) |
| **Photo 2** | `2_landmark.jpg` | **Landmark · Gwangandaegyo Bridge & Haeundae Marine City Skyline** (랜드마크 · 푸른 바다 위 광안대교와 해운대 마린시티) |
| **Photo 3** | `3_dish.jpg` | **Dish · Steaming Pork Soup (Dwaeji-gukbap) & Chilled Milmyeon** (대표음식 · 뽀얀 진국의 자갈치 돼지국밥 & 시원한 부산 밀면) |

> **Accepted formats**: `.jpg`, `.jpeg`, `.png`, or `.webp` (or online image URLs via `data.json`).

---

### ⚙️ How to Load Images in `data.json`

The webpage loads your images directly based off the values in `data.json`. You can point `src` to either a **local folder path** or an **online image URL**:

```json
"photos": [
  {
    "src": "images/cities/busan-lotte/1_stadium.jpg",
    "labelEn": "Stadium (PR) · Sajik Baseball Stadium, The World's Largest Karaoke",
    "labelKo": "야구장(공식PR) · 세계 최대의 야외 노래방, 부산 사직야구장"
  },
  {
    "src": "images/cities/busan-lotte/2_landmark.jpg",
    "labelEn": "Landmark · Gwangandaegyo Bridge & Haeundae Marine City Skyline",
    "labelKo": "랜드마크 · 푸른 바다 위 광안대교와 해운대 마린시티"
  },
  {
    "src": "images/cities/busan-lotte/3_dish.jpg",
    "labelEn": "Dish · Steaming Pork Soup (Dwaeji-gukbap) & Chilled Milmyeon",
    "labelKo": "대표음식 · 뽀얀 진국의 자갈치 돼지국밥 & 시원한 부산 밀면"
  }
]
```

---

### 💡 Best Practice Specifications
- **Orientation**: Landscape (horizontal) format.
- **Aspect Ratio**: 16:9 or 3:2 recommended.
- **Resolution**: 1200×800 px or higher for Retina screens and lightbox modal.
