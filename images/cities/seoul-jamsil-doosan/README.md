# 📷 Seoul (Jamsil) (서울특별시 (잠실)) · Doosan Bears (두산 베어스)
## Travel Photography Drop Folder

Drop your 3 high-resolution photos for **Seoul (Jamsil)** directly into this folder, or specify image URLs in `data.json`.

---

### 📂 Recommended Filenames & Photo Slots

| Slot | Recommended Filename | Content Focus |
| :---: | :--- | :--- |
| **Photo 1** | `1_stadium.jpg` | **Stadium (PR) · Jamsil Baseball Stadium Covered in Navy Bears Flags** (야구장(공식PR) · 잠실 야구장을 뒤덮은 최강두산 네이비 물결) |
| **Photo 2** | `2_landmark.jpg` | **Landmark · Dongdaemun Design Plaza (DDP) & Doosan Tower** (랜드마크 · 미래지향적 동대문 DDP와 야경을 밝히는 두산타워) |
| **Photo 3** | `3_dish.jpg` | **Dish · Sizzling Crispy Seoul Pork Bindaetteok & Jamsil Chimaek** (대표음식 · 종로 녹두 빈대떡 & 야구장 필수 명물 삼겹살 정식) |

> **Accepted formats**: `.jpg`, `.jpeg`, `.png`, or `.webp` (or online image URLs via `data.json`).

---

### ⚙️ How to Load Images in `data.json`

The webpage loads your images directly based off the values in `data.json`. You can point `src` to either a **local folder path** or an **online image URL**:

```json
"photos": [
  {
    "src": "images/cities/seoul-jamsil-doosan/1_stadium.jpg",
    "labelEn": "Stadium (PR) · Jamsil Baseball Stadium Covered in Navy Bears Flags",
    "labelKo": "야구장(공식PR) · 잠실 야구장을 뒤덮은 최강두산 네이비 물결"
  },
  {
    "src": "images/cities/seoul-jamsil-doosan/2_landmark.jpg",
    "labelEn": "Landmark · Dongdaemun Design Plaza (DDP) & Doosan Tower",
    "labelKo": "랜드마크 · 미래지향적 동대문 DDP와 야경을 밝히는 두산타워"
  },
  {
    "src": "images/cities/seoul-jamsil-doosan/3_dish.jpg",
    "labelEn": "Dish · Sizzling Crispy Seoul Pork Bindaetteok & Jamsil Chimaek",
    "labelKo": "대표음식 · 종로 녹두 빈대떡 & 야구장 필수 명물 삼겹살 정식"
  }
]
```

---

### 💡 Best Practice Specifications
- **Orientation**: Landscape (horizontal) format.
- **Aspect Ratio**: 16:9 or 3:2 recommended.
- **Resolution**: 1200×800 px or higher for Retina screens and lightbox modal.
