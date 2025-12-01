# Reels UI Clone 🎬

This is a frontend project that recreates a **Reels / Shorts style interface** using **HTML, SCSS, and JavaScript**.  
It simulates how platforms like **YouTube Shorts**, **Instagram Reels**, and **TikTok** work from the frontend side by focusing on the UI, layout, scrolling behavior, and basic interactions (like, follow, etc.).

---

## 🎯 Features

- Vertical, full-height **reel scrolling** with `scroll-snap` for a smooth swipe-like experience.
- Each reel:
  - Autoplays in a loop (`autoplay`, `loop`, `muted`, `playsinline` behavior).
  - Shows **user profile**, **caption**, and **action panel** (like, comment, share, more).
- Reels data is generated dynamically from a **JavaScript array of objects**.
- Uses **Pexels images** as profile pictures for a realistic look.
- **Responsive phone-style layout** inside a centered 375px container.
- Custom styling with **SCSS nesting** for clean and structured styles.

---

## 🛠 Tech Stack

- **HTML5**
- **SCSS** (compiled to CSS)
- **Vanilla JavaScript (ES6+)**
- **Remix Icon** for icons  
  `https://cdn.jsdelivr.net/npm/remixicon@4.7.0/fonts/remixicon.css`

---

## 📁 Folder Structure

```bash
project/
├── index.html
├── style.css        # compiled from SCSS
├── style.scss       # main SCSS source
├── script.js        # JS logic for rendering reels
└── Videos/          # local MP4 files
    ├── 1.mp4
    ├── 2.mp4
    ├── 3.mp4
    └── ...
