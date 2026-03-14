# ଅକ୍ଷର Akshara

**Learn the Odia script — offline, on any device.**

A lightweight progressive web app for learning all 48 letters of the Odia script through browsing, flashcards, and quizzes. No account, no backend, no internet required after the first load.

🌐 **Live site:** [subhamsarangi.github.io/scriptEd](https://subhamsarangi.github.io/scriptEd/)

---

## Features

- **Browse** — all vowels, consonants, and special characters in one view
- **Flashcard mode** — tap to reveal, rate yourself (Easy / Good / Hard), shuffle anytime
- **Quiz mode** — multiple choice, 10 questions, scored at the end
- **Fully offline** — service worker caches all assets on first visit
- **PWA installable** — add to home screen on Android or desktop

---

## Tech

- Vanilla HTML + CSS + JavaScript
- jQuery (local, no CDN)
- Service Worker (cache-first, full offline support)
- Web App Manifest (standalone display, themed)

No build step. No dependencies to install. Just static files.

---

## Project Structure

```
scriptEd/
├── index.html        # App shell + markup
├── styles.css        # All styles
├── main.js           # App logic (jQuery)
├── jquery.min.js     # Local jQuery
├── sw.js             # Service worker (offline caching)
├── manifest.json     # PWA manifest
└── icons/
    ├── icon-192.png
    └── icon-512.png
```

---

## Run Locally

No build needed — just serve the folder over HTTP:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Then open `http://localhost:8000`.

> Opening `index.html` directly as a `file://` URL won't register the service worker — use a local server.

---

## Updating the Cache

When you change any asset, bump the cache version in `sw.js`:

```js
const CACHE_NAME = 'akshara-v2'; // increment this
```

This forces existing installs to fetch fresh files on next load.

---

## Roadmap

- [ ] Conjunct consonants (ଯୁକ୍ତାକ୍ଷର)
- [ ] Pronunciation audio clips
- [ ] Spaced repetition for flashcards
- [ ] Play Store release via TWA (Trusted Web Activity)

---

## License

MIT