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
  - Four daily slots — three big focus blocks + a 1h refresher (`SLOT_H = {a:2, b:4, c:1, d:1}`, 8h — Java/Spring is the biggest block): **A** DSA (GFG videos, every day, ~1h video + 1h own practice), **B** Java/Spring on a **weekly** rhythm (whole week is one language — `isJavaWeek()` keys parity to the **authored `WEEKS`** via `weekOrdinalMap()`, anchored so the rotation **starts from Java at the (re)baseline week** (`javaAnchorOrdinal()` = study-week of `STATE.baseline.created`, else plan start), then alternating; it must NOT use `daysBetween()/7` because the plan skips calendar dates, which would flip the language mid-week — so re-baselining re-anchors the Java week to that week), **C** SQL 1h block (`streamForSlot` returns `sql` every day; once SQL is cleared the block hands over to Hands-on, then the rest of the core chain), **D** AWS/System Design 1h refresher, alternating by day parity. The old `rt`-driven Slot C rotation (sql/sd/cloud/hands-on/mock/revision/behavioral) is gone — Slot C is always SQL→Hands-on now, so `mock`/`behavioral`/`revision` prose days no longer surface.
  - `streamUnits(id)` = ordered backlog; `unitDone(u)` checks state; `distribute()` spreads remaining units over remaining sessions weighted by slot hours without reordering. **It also caps each session at its own hour budget:** on-track/ahead it spreads evenly, but when a stream has more work than its remaining sessions can hold at a steady pace (you're behind), capacity binds — each day fills to its budget and the *surplus is left unscheduled*, surfacing as backlog/behind through the ledger instead of being crammed onto one day (the old behaviour dumped all overflow onto the last session, e.g. 25 SQL topics / ~8h on a single day). This applies to every stream, capped or not; `pace[st].unscheduled` is the surplus count. Note Cloud (`clocal`) is authored with ~24h for ~12h of Slot-C days, so it is over-subscribed from day 1 and always carries unscheduled backlog.
  - `HANDOVER` chain gives an exhausted stream's sessions to the next stream with work. **Resorted core-first** (java, spring, dsa, handson, sql → sd, aws → clocal last), so freed time always pools into the focus streams and Cloud only ever gets a last-resort slot. `CAPPED` limits DSA (1h/day video) and SQL (1h/day) to their real content; the uncovered Slot-C/A hours hand down the chain.
  - **Weekly Java/Spring + revision:** the user studies one language new per week and revises the other that week. Revision has no queue (you can't re-tick done topics), so `revisionTag(day, 'b')` surfaces it as a today-only prompt listing the *other* language's topics completed in the last 7 days (from `STATE.doneOn`), styled `.slot-revise`. Because a re-baseline collapses `doneOn` to `'pre'` (dateless), it falls back to the last ~6 completed topics of that language in curriculum order (the frontier) when no dated history is available.
  - `pace[stream].ratio` compares remaining density to the full-curriculum baseline (behind/ahead).
  - `assignmentFor()` shows the logged assignment once a slot is ticked (`dailyLog`), else the live projection. After any completion call `invalidatePlan()` / `refreshPlan()`.
- **Data tables:** `GFG_MODULES`, `WEEKS` (authored day prose), `TRACK_DEFS` (java/spring/sql/sd/cloud/**handson** groups → topics with `h` hours and priority). `TRACK_DEFS` is declared below the render code, so `init()` is called last — keep it there.
- **Hands-on stream (`handson`):** a tracked stream of real interview coding exercises (Core Java → Collections/Comparator → Generics → Streams → Concurrency → JVM → Spring Core/Data/Web/Boot → Finance/ETL capstones), ordered to follow the Java/Spring teaching arc. It no longer has a dedicated slot — it's fed by handover (the SQL focus block flows to it once SQL is done, plus any core spare); `TRACK_DEFS.handson` is topic-based (no `courseUrl`), ~43h over 51 exercises, surfaced on its own **Hands-on** tab. Changing the Java/Spring order? Re-order these groups to keep them aligned.
- **Cloud (`clocal`, Docker/K8s):** deprioritised to the bottom of every handover chain and given no dedicated slot, so it is normally fully stranded (`pace.clocal.sessions === 0`, `stuck`) — intentional; it lives on its tab for when a last-resort slot frees up.
- **Plan ledger (planned vs actual):** `STATE.baseline` freezes the planned date of every then-open item (set from today via `ensureLedger`/`createBaseline`; `resetBaseline` forgives the past and restarts). `STATE.doneOn` records the actual completion date of each item (`'pre'` = finished before the baseline, i.e. on time), kept in sync on every save by `reconcileDoneOn`. `ledgerOf(unit)` gives planned/doneOn/days-late for one item; items open past their planned date count as late.
- **Speed & expected completion:** `streamLedger(stream)` measures hours done per day over a rolling `SPEED_WINDOW` (14 days) and projects a finish date — using real speed when there is any, otherwise the plan's own pace, so the date always resolves and marches forward on idle days and pulls back when you go faster. The speed denominator is `r.activeDays` (days since the stream's *first* completion in the window, ≤ the window), **not** the full window: a stream only just started — one exercise done today — must not have that day's work divided across the idle days before it. More importantly, real speed is only *trusted* once `activeDays ≥ MIN_SPEED_DAYS` (3) and then ramps in linearly to full trust across the window (`conf`), because a single partial day is no evidence of pace: one 3-minute video would otherwise read as "0.05h/day" and flip an on-plan stream to "behind" the instant you tick it, and one binge would call it wildly "ahead". Below the threshold the date rides the plan's own pace — which still marches an idle stream forward (today moves, backlog doesn't) and still pulls the date in as backlog burns down (fewer open items = earlier date), without pretending one day reveals your speed. Mature streams worked all through the window have `conf ≈ 1`, so they fully reflect real pace. `liveSpeed` is true only when real speed is actually driving the ETA (`conf > 0`); until then the ETA renders with a `~` prefix. When `tracks` gains a stream after the baseline was set, its units aren't in `baseline.planned`, so each falls back to `PLAN_END` (`ledgerOf`) until a `resetBaseline`. `programFinish()` = the latest stream ETA (everything runs in parallel), shown in the always-on flashing `#finish-flash` header banner and at the top of the Progress tab. `SLIP_TOL` (2 days) absorbs rounding noise in the behind/ahead flags.
- **Tabs:** Today, **Progress** (baseline, per-stream speed/ETA/days-late, overdue list, planned-vs-actual history), Weeks, GFG Tracker, Java, Spring, SQL/DB, System Design, Cloud, **Hands-on**, Budget, Daily Rules. The Today tab's Pace card and per-row chips are ledger-driven. Each Today slot also shows a `carryTag` "⏰ Carried over · N days behind" banner (`.slot-carry`) when the items rolled into it were due on an earlier day, and a `backlogTag` "⏳ N more … behind" banner (same style) when the stream has unscheduled surplus (`pace[st].unscheduled > 0`) that didn't fit the remaining days — so a capped ~1h session isn't mistaken for "almost done". On the Java/Spring block it also shows the `revisionTag` "🔁 Revise last week's …" prompt (`.slot-revise`). All three banners are today-only.

## Service worker and cache busting

`service-worker.js` is cache-first and pre-caches an explicit `FILES_TO_CACHE` list.

- **Every deploy that changes a cached file:** bump `CACHE_NAME` (currently `tracker-v30`) or clients keep serving stale copies.
- **New static file:** add it to `FILES_TO_CACHE` as well.
- Install prompt: `ansh.js` shows a floating "Install App" button on `beforeinstallprompt` (Chrome only; iOS uses Add to Home Screen).

## Deployment (GitHub Pages)

Push to GitHub, Settings → Pages → Deploy from branch → `main` / root. HTTPS (provided by Pages) is required for the service worker, install prompt, and Firebase auth. Add the Pages domain to Firebase Auth authorized domains.

## Notes

- The Firebase web config (including API key) is committed in `ansh.html`. That is normal for Firebase web apps; access control relies on Firestore security rules limiting each user to their own document (`ansh_tracker/{uid}`).
- Style: modern ES6+ in `ansh.js` (`const`/`let`, template literals).
