# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

TrackerApp: a no-build vanilla JS PWA for Ansh's 193-day Java/Spring/SQL/DSA/System Design/AWS interview prep (plan 2026-08-24 → 2027-03-05). No framework, no bundler, no npm dependencies. Signs in with Google (Firebase Auth, project `trackerapp-a59a4`), syncs progress to Firestore, and caches locally in localStorage.

## Running locally

PWAs must be served over HTTP — `file://` breaks the service worker and manifest.

```bash
npx serve .                    # http://localhost:3000
python3 -m http.server 8080
```

Firebase Google sign-in needs the host to be an authorized domain in the Firebase console (`localhost` is by default). Check **DevTools → Application** for manifest, service worker, installability.

## Tests

```bash
node test-ansh.js
```

Harness for `ansh.js` only: stubs DOM, `localStorage`, and `Date` (pinned to plan day 1, Aug 24 2026), `eval`s `ansh.js`, and asserts on the scheduler and rendered HTML. Run it after any change to `ansh.js`.

## File structure

| File | Purpose |
|---|---|
| `index.html` | Redirects to `ansh.html` |
| `ansh.html` / `ansh.js` | The tracker (CSS is inline in the HTML) |
| `manifest-ansh.json` | PWA manifest (`start_url: ./ansh.html`) |
| `service-worker.js` | Cache-first offline cache shared by all pages |
| `icons/` | `icon-192.png`, `icon-512.png` (committed) |
| `test-ansh.js` | Node test harness for `ansh.js` |
| `*.xlsx` | Source data for Ansh's course lists (GFG videos, MySQL bootcamp) |

## Architecture — Ansh tracker (`ansh.js`)

- **Hard sign-in gate:** app stays hidden until auth succeeds (`showApp` / `showSignInGate`). Local cache key is per account: `java-prep-tracker-v2:<uid>` (`activeStorageKey()`), so accounts can't bleed into each other.
- **Live sync:** `syncToFirestore` writes the whole state to `ansh_tracker/{uid}` on every `saveState` (no debounce). `listenToFirestore` uses `onSnapshot`; own echoes are skipped by comparing `lastUpdated`. Remote state goes through `applyRemoteState` (same backfills as `loadState`).
- **State:** `{version:'4.0', gfg:{topics:{id:{done:{idx:true}}}}, dailyChecks, dailyLog, tracks:{java,spring,sql,sd,cloud}, lastUpdated}`. Track topic states: `not-started | in-progress | done`. `migrateGfg` resets GFG progress for states older than `STATE_VERSION`; bump it only with a migration.
- **Dynamic scheduler (core idea):** no day's workload is stored. `buildPlan()` recomputes everything from unfinished work on every render:
  - Four daily slots: **A** DSA (GFG videos, every day), **B** Java/Spring alternating by day parity, **C** SQL/SD/Cloud/**Hands-on** per the day's `rt`, **D** AWS/System Design alternating. (`rt:'hands-on'` days are a tracked `handson` stream — see below; `mock`/`behavioral`/`revision` Slot C days stay prose.)
  - `streamUnits(id)` = ordered backlog; `unitDone(u)` checks state; `distribute()` spreads remaining units over remaining sessions weighted by slot hours without reordering.
  - `HANDOVER` chain gives an exhausted stream's sessions to the next stream with work. `CAPPED` limits DSA (1.5h/day) and SQL (1h/day) to their real content.
  - `pace[stream].ratio` compares remaining density to the full-curriculum baseline (behind/ahead).
  - `assignmentFor()` shows the logged assignment once a slot is ticked (`dailyLog`), else the live projection. After any completion call `invalidatePlan()` / `refreshPlan()`.
- **Data tables:** `GFG_MODULES`, `WEEKS` (authored day prose), `TRACK_DEFS` (java/spring/sql/sd/cloud/**handson** groups → topics with `h` hours and priority). `TRACK_DEFS` is declared below the render code, so `init()` is called last — keep it there.
- **Hands-on stream (`handson`):** a tracked stream of real interview coding exercises (Core Java → Collections/Comparator → Generics → Streams → Concurrency → JVM → Spring Core/Data/Web/Boot → Finance/ETL capstones), ordered to follow the Java/Spring teaching arc. Lives in Slot C on `rt:'hands-on'` days via `streamForSlot` and `STREAMS.handson`; `TRACK_DEFS.handson` is topic-based (no `courseUrl`), ~43h over 51 exercises, surfaced on its own **Hands-on** tab. Changing the Java/Spring order? Re-order these groups to keep them aligned.
- **Plan ledger (planned vs actual):** `STATE.baseline` freezes the planned date of every then-open item (set from today via `ensureLedger`/`createBaseline`; `resetBaseline` forgives the past and restarts). `STATE.doneOn` records the actual completion date of each item (`'pre'` = finished before the baseline, i.e. on time), kept in sync on every save by `reconcileDoneOn`. `ledgerOf(unit)` gives planned/doneOn/days-late for one item; items open past their planned date count as late.
- **Speed & expected completion:** `streamLedger(stream)` measures hours done per day over a rolling `SPEED_WINDOW` (14 days) and projects a finish date — using real speed when there is any, otherwise the plan's own pace, so the date always resolves and marches forward on idle days and pulls back when you go faster. `programFinish()` = the latest stream ETA (everything runs in parallel), shown in the always-on flashing `#finish-flash` header banner and at the top of the Progress tab. `SLIP_TOL` (2 days) absorbs rounding noise in the behind/ahead flags.
- **Tabs:** Today, **Progress** (baseline, per-stream speed/ETA/days-late, overdue list, planned-vs-actual history), Weeks, GFG Tracker, Java, Spring, SQL/DB, System Design, Cloud, **Hands-on**, Budget, Daily Rules. The Today tab's Pace card and per-row chips are ledger-driven.

## Service worker and cache busting

`service-worker.js` is cache-first and pre-caches an explicit `FILES_TO_CACHE` list.

- **Every deploy that changes a cached file:** bump `CACHE_NAME` (currently `tracker-v29`) or clients keep serving stale copies.
- **New static file:** add it to `FILES_TO_CACHE` as well.
- Install prompt: `ansh.js` shows a floating "Install App" button on `beforeinstallprompt` (Chrome only; iOS uses Add to Home Screen).

## Deployment (GitHub Pages)

Push to GitHub, Settings → Pages → Deploy from branch → `main` / root. HTTPS (provided by Pages) is required for the service worker, install prompt, and Firebase auth. Add the Pages domain to Firebase Auth authorized domains.

## Notes

- The Firebase web config (including API key) is committed in `ansh.html`. That is normal for Firebase web apps; access control relies on Firestore security rules limiting each user to their own document (`ansh_tracker/{uid}`).
- Style: modern ES6+ in `ansh.js` (`const`/`let`, template literals).
