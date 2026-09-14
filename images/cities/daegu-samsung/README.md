# 📷 Daegu (대구광역시) · Samsung Lions (삼성 라이온즈)
## Travel Photography Drop Folder

Drop your 3 high-resolution photos for **Daegu** directly into this folder, or specify image URLs in `data.json`.

---

### 📂 Recommended Filenames & Photo Slots

| Slot | Recommended Filename | Content Focus |
| :---: | :--- | :--- |
| **Photo 1** | `1_stadium.jpg` | **Stadium (PR) · Daegu Samsung Lions Park Octagonal Diamond** (야구장(공식PR) · 팔각형 다이아몬드 대구 삼성 라이온즈 파크) |
| **Photo 2** | `2_landmark.jpg` | **Landmark · Daegu 83 Tower & Apsan Sunset View** (랜드마크 · 대구 전경을 한눈에 담는 83타워 & 앞산 야경) |
| **Photo 3** | `3_dish.jpg` | **Dish · Sizzling Grilled Beef Intestine (Anjirang Gopchang & Makchang)** (대표음식 · 안지랑 골목의 쫄깃한 막창구이 & 생고기 뭉티기) |

> **Accepted formats**: `.jpg`, `.jpeg`, `.png`, or `.webp` (or online image URLs via `data.json`).

---

### ⚙️ How to Load Images in `data.json`

The webpage loads your images directly based off the values in `data.json`. You can point `src` to either a **local folder path** or an **online image URL**:

```json
"photos": [
  {
    "src": "images/cities/daegu-samsung/1_stadium.jpg",
    "labelEn": "Stadium (PR) · Daegu Samsung Lions Park Octagonal Diamond",
    "labelKo": "야구장(공식PR) · 팔각형 다이아몬드 대구 삼성 라이온즈 파크"
  },
  {
    "src": "images/cities/daegu-samsung/2_landmark.jpg",
    "labelEn": "Landmark · Daegu 83 Tower & Apsan Sunset View",
    "labelKo": "랜드마크 · 대구 전경을 한눈에 담는 83타워 & 앞산 야경"
  },
  {
    "src": "images/cities/daegu-samsung/3_dish.jpg",
    "labelEn": "Dish · Sizzling Grilled Beef Intestine (Anjirang Gopchang & Makchang)",
    "labelKo": "대표음식 · 안지랑 골목의 쫄깃한 막창구이 & 생고기 뭉티기"
  }
]
```

---

### 💡 Best Practice Specifications
- **Orientation**: Landscape (horizontal) format.
- **Aspect Ratio**: 16:9 or 3:2 recommended.
- **Resolution**: 1200×800 px or higher for Retina screens and lightbox modal.
