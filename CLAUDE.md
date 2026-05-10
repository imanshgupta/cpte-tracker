# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A vanilla JS PWA (Progressive Web App) for tracking CPTE exam preparation. No build step, no framework, no dependencies. All state lives in `localStorage` under the key prefix `cpte_tracker_v1_`.

## Running locally

PWAs must be served over HTTP — opening `index.html` directly via `file://` will break the service worker and manifest. Use VS Code Live Server or any static server:

```bash
npx serve .          # serves on http://localhost:3000
python3 -m http.server 8080
```

Then open `http://localhost:<port>` in Chrome and check **DevTools → Application** to verify the manifest, service worker, and installability.

## File structure

| File | Purpose |
|---|---|
| `index.html` | HTML shell + PWA meta tags + SW registration |
| `styles.css` | All CSS (extracted from the original monolithic HTML) |
| `app.js` | All JS logic + PWA install-prompt handler |
| `manifest.json` | PWA manifest (name, icons, theme, display mode) |
| `service-worker.js` | Offline cache (cache-first strategy) |
| `icons/` | PNG icons required by manifest (192×192 and 512×512) |
| `icons/generate-icons.html` | Open in browser to generate and download placeholder icons |

## Icons

The two PNG icons (`icons/icon-192.png`, `icons/icon-512.png`) must exist before the PWA is installable. Open `icons/generate-icons.html` in a browser and click the download buttons to generate them, then save them into the `icons/` folder.

## Architecture

**Data model** — `CS` (case states object) maps case IDs like `cardio-3` or `msk-12` to `'read' | 'revision' | 'confident'`. MCQ IDs are prefixed `mcq-`. Toggle a state by clicking the same button again (removes the key). Saved to `localStorage` on every change via `save('states', CS)`.

**Calendar** — `buildCalendar()` constructs a 83-day array at startup. Days 1–10 are Phase 1 (practice cases only). Days 11–83 are Phase 2 (system cases + MCQ lectures). `getDayNum()` derives today's day number from `DAY1 = 2026-05-10`.

**Rendering** — All case lists are rebuilt from scratch on `renderAll()` at init. Individual row class is updated in-place on state change via `setC()` → `rowClass()`. The Calendar tab re-renders on each visit via `renderCalendar()`.

**No server, no auth, no network calls.** Everything is local; the service worker caches all static assets for offline use.

## Deployment (GitHub Pages)

1. Push this folder to a GitHub repo (e.g. `cpte-tracker`)
2. Settings → Pages → Deploy from branch → `main` / `/ (root)`
3. Live at `https://<username>.github.io/cpte-tracker/`

HTTPS is required for the service worker and install prompt to work — GitHub Pages provides this automatically.

## Cache busting

When you deploy a new version, increment the cache name in `service-worker.js`:

```js
const CACHE_NAME = "cpte-tracker-v2";  // bump on each deploy
```

Or clear via Chrome DevTools → Application → Clear Storage.
