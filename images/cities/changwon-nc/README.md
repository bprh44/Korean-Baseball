# 📷 Changwon (Masan Heritage) (창원특례시 (구 마산)) · NC Dinos (NC 다이노스)
## Travel Photography Drop Folder

Drop your 3 high-resolution photos for **Changwon (Masan Heritage)** directly into this folder, or specify image URLs in `data.json`.

---

### 📂 Recommended Filenames & Photo Slots

| Slot | Recommended Filename | Content Focus |
| :---: | :--- | :--- |
| **Photo 1** | `1_stadium.jpg` | **Changwon NC Park** () |
| **Photo 2** | `2_landmark.jpg` | **Gyeonghwa Station Cherry Blossom Train Corridor** () |
| **Photo 3** | `3_dish.jpg` | **Baseball bbq** () |

> **Accepted formats**: `.jpg`, `.jpeg`, `.png`, or `.webp` (or online image URLs via `data.json`).

---

### ⚙️ How to Load Images in `data.json`

The webpage loads your images directly based off the values in `data.json`. You can point `src` to either a **local folder path** or an **online image URL**:

```json
"photos": [
  {
    "src": "https://www.ncdinos.com/assets/images/sub/img_changwonpark_02.png",
    "labelEn": "Changwon NC Park",
    "labelKo": ""
  },
  {
    "src": "https://www.gettyimages.com/detail/photo/cherry-blossom-and-train-in-spring-in-korea-is-the-royalty-free-image/2140779452",
    "labelEn": "Gyeonghwa Station Cherry Blossom Train Corridor",
    "labelKo": ""
  },
  {
    "src": "https://m.blog.naver.com/s2rlfwk/223080545233?view=img_24",
    "labelEn": "Baseball bbq",
    "labelKo": ""
  }
]
```

---

### 💡 Best Practice Specifications
- **Orientation**: Landscape (horizontal) format.
- **Aspect Ratio**: 16:9 or 3:2 recommended.
- **Resolution**: 1200×800 px or higher for Retina screens and lightbox modal.
