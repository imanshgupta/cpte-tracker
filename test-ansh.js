// Test harness for ansh.js — stubs just enough DOM to render, and keeps
// innerHTML per element id so assertions can inspect real output.
const fs = require('fs');

const store = {};
const els = {};
function mkEl(id) {
  return {
    id, innerHTML: '', textContent: '', value: '', className: '', style: {},
    classList: { _s: new Set(),
      add(c) { this._s.add(c); }, remove(c) { this._s.delete(c); },
      toggle(c, on) { on === undefined ? (this._s.has(c) ? this._s.delete(c) : this._s.add(c)) : (on ? this._s.add(c) : this._s.delete(c)); },
      contains(c) { return this._s.has(c); } },
    querySelector() { return mkEl('_child'); },
    addEventListener() {},
  };
}
function getEl(id) { return els[id] || (els[id] = mkEl(id)); }

global.localStorage = { getItem: k => (k in store ? store[k] : null), setItem: (k, v) => store[k] = v, removeItem: k => delete store[k] };
global.document = { getElementById: getEl, querySelectorAll: () => [], querySelector: () => null, addEventListener() {} };
global.window = { addEventListener() {} };
global.confirm = () => true;

global.__TODAY = [2026, 7, 24];              // Aug 24 2026 = plan day 1
const RD = Date;
global.Date = class extends RD {
  constructor(...a) { if (!a.length) super(...global.__TODAY); else super(...a); }
};
global.Date.now = RD.now;

// ── tiny assertion framework ──────────────────────────────────────────────
let pass = 0, fail = 0, section = '';
const fails = [];
function S(name) { section = name; console.log('\n\x1b[1m── ' + name + ' ' + '─'.repeat(Math.max(0, 62 - name.length)) + '\x1b[0m'); }
function t(name, fn) {
  try { fn(); pass++; console.log('  \x1b[32m✓\x1b[0m ' + name); }
  catch (e) { fail++; fails.push(section + ' › ' + name + ' :: ' + e.message);
    console.log('  \x1b[31m✗ ' + name + '\x1b[0m\n      ' + e.message); }
}
function ok(cond, msg) { if (!cond) throw new Error(msg || 'assertion failed'); }
function eq(a, b, msg) { if (a !== b) throw new Error((msg || 'mismatch') + ': got ' + JSON.stringify(a) + ', want ' + JSON.stringify(b)); }

const code = fs.readFileSync('ansh.js', 'utf8') + `
;global.__api = {
  reset(){ localStorage.removeItem(STORAGE_KEY); STATE = loadState(); invalidatePlan(); },
  setToday(y,m,d){ global.__TODAY=[y,m-1,d]; invalidatePlan(); },
  g:{ WEEKS, STREAMS, TRACK_DEFS, GFG_MODULES, SLOT_H, HANDOVER, PLAN_START, PLAN_END, GFG_DAILY_VIDEO_H, SQL_DAILY_H },
  f:{ getPlan, invalidatePlan, assignmentFor, streamForSlot, slotMeta, toggleSlot, setTrackTopic,
      toggleModule, toggleTopic, toggleVideo, renderToday, renderWeeks, showWeek, renderGFG, renderTrackTab, renderBudget,
      renderRules, renderPace, renderDayContent, showTab, findDay, daysBetween, todayStr,
      isEvenDay, streamUnits, unitDone, renderWeekStrip, fmtH, resetAll, loadState, getDefaultState, courseUrlFor,
      ensureLedger, createBaseline, resetBaseline, ledgerOf, streamLedger, lateItems, recentDone, renderProgress,
      ledgerChip, gfgTopicChip, renderLateBanner, unitKey, addDays,
      programFinish, renderFinishFlash, slipFlag },
  get state(){ return STATE; },
};`;
eval(code);

const { g, f } = global.__api;
const R = () => global.__api.reset();
const firstSessionOf = (stream, slot) => {
  const bd = f.getPlan().byDate;
  for (const d of Object.keys(bd).sort()) {
    const a = bd[d][slot];
    if (a && a.stream === stream) return { date: d, units: a.units };
  }
  return null;
};
const sessionsFor = (stream) => {
  const bd = f.getPlan().byDate, out = [];
  Object.keys(bd).sort().forEach(d => ['a','b','c','d'].forEach(sl => {
    const a = bd[d][sl]; if (a && a.stream === stream) out.push({ date: d, slot: sl, units: a.units });
  }));
  return out;
};
const markTrackGroup = (track, groupId) => {
  const grp = g.TRACK_DEFS[track].groups.find(x => x.id === groupId);
  grp.topics.forEach(tp => f.setTrackTopic(track, tp.id, 'done', groupId, true));
};
const markGfgVideos = (topicId, n) => { for (let i = 1; i <= n; i++) f.toggleVideo(topicId, i); };

// ══════════════════════════════════════════════════════════════════════════
S('1. Pull-forward — finishing fast advances the flow');
R();
let BASE = {};
t('baseline: Java starts day 1 at the top of Part A', () => {
  const j = sessionsFor('java');
  eq(j[0].date, '2026-08-24', 'first Java session');
  const firstUnit = f.streamUnits('java')[0];
  eq(j[0].units[0].id, firstUnit.id, 'day 1 leads with the first curriculum row');
  ok(j[0].units[0].gname.indexOf('Part A') >= 0, 'and it is in Part A');
  BASE.collections = j.find(s => s.units.some(u => u.gname.indexOf('Collections') >= 0)).date;
  BASE.concurrency = j.find(s => s.units.some(u => u.gname.indexOf('Concurrency') >= 0)).date;
  console.log('        baseline: Collections ' + BASE.collections + ', Concurrency ' + BASE.concurrency);
});
t('clear Part A → Part B becomes day 1, Collections pulls up', () => {
  markTrackGroup('java', 'java-a');
  f.invalidatePlan();
  const j = sessionsFor('java');
  eq(j[0].date, '2026-08-24', 'still day 1');
  ok(j[0].units[0].gname.indexOf('Strings') >= 0, 'day 1 now Strings, got: ' + j[0].units[0].gname);
  const coll = j.find(s => s.units.some(u => u.gname.indexOf('Collections') >= 0));
  ok(coll.date < BASE.collections, 'Collections pulled up: ' + coll.date);
  console.log('        Collections ' + BASE.collections + ' → ' + coll.date);
});
t('clear Parts B+C+D too → Concurrency pulls up from Nov 15', () => {
  ['java-b','java-c','java-d'].forEach(gid => markTrackGroup('java', gid));
  f.invalidatePlan();
  const conc = sessionsFor('java').find(s => s.units.some(u => u.gname.indexOf('Concurrency') >= 0));
  ok(conc.date < BASE.concurrency, 'Concurrency pulled up: ' + conc.date);
  console.log('        Concurrency ' + BASE.concurrency + ' → ' + conc.date);
});
t('AWS pulls up independently of Java', () => {
  R();
  const before = sessionsFor('aws').find(s => s.units.some(u => u.gname.indexOf('S3') >= 0)).date;
  ['cl-saa-intro','cl-saa-acct','cl-saa-fund','cl-saa-iam'].forEach(gid => markTrackGroup('cloud', gid));
  f.invalidatePlan();
  const after = sessionsFor('aws').find(s => s.units.some(u => u.gname.indexOf('S3') >= 0)).date;
  ok(after < before, 'S3 should pull up');
  console.log('        AWS S3 ' + before + ' → ' + after);
});
t('DSA pulls up when GFG videos are marked done', () => {
  R();
  const before = sessionsFor('dsa').find(s => s.units.some(u => u.topic === 'basics-arrays')).date;
  markGfgVideos('basics-dsa-intro', 2);
  markGfgVideos('basics-analysis', 15);
  f.invalidatePlan();
  const after = sessionsFor('dsa').find(s => s.units.some(u => u.topic === 'basics-arrays')).date;
  ok(after <= before, 'Arrays should pull up');
  console.log('        DSA Arrays ' + before + ' → ' + after);
});
t('every stream ends earlier when half its backlog is cleared', () => {
  R();
  const endOf = st => { const s = sessionsFor(st); return s.length ? s[s.length-1].date : null; };
  const before = {}; ['java','spring','aws','sd','sql'].forEach(st => before[st] = endOf(st));
  ['java','spring','sd','sql'].forEach(tr => {
    const groups = g.TRACK_DEFS[tr === 'aws' ? 'cloud' : tr].groups;
    groups.forEach(grp => grp.topics.forEach((tp, i) => { if (i % 2 === 0) f.setTrackTopic(tr, tp.id, 'done', grp.id, true); }));
  });
  g.TRACK_DEFS.cloud.groups.forEach(grp => { if (grp.id.indexOf('cl-saa-') !== 0) return;
    grp.topics.forEach((tp,i) => { if (i % 2 === 0) f.setTrackTopic('cloud', tp.id, 'done', grp.id, true); }); });
  f.invalidatePlan();
  ['java','spring','aws','sd','sql'].forEach(st => {
    const now = endOf(st);
    ok(now === null || now <= before[st], st + ' end date should not slip (' + before[st] + ' → ' + now + ')');
  });
  console.log('        all five streams ended on or before their baseline');
});

// ══════════════════════════════════════════════════════════════════════════
S('2. Roll-forward — skipped days are not lost');
t('skipping 30 days keeps the backlog and raises density', () => {
  R();
  const p1 = f.getPlan().pace.aws;
  global.__api.setToday(2026, 9, 23);
  const p2 = f.getPlan().pace.aws;
  eq(p2.left, p1.left, 'nothing completed, so nothing lost');
  ok(p2.sessions < p1.sessions, 'fewer sessions remain');
  ok(p2.load > p1.load, 'load per session rises');
  ok(p2.ratio > 1.15, 'flagged as behind, ratio=' + p2.ratio.toFixed(2));
  console.log('        ' + p1.sessions + ' sessions @' + f.fmtH(p1.load) + ' → ' + p2.sessions + ' @' + f.fmtH(p2.load) + '  (' + p2.ratio.toFixed(1) + '×)');
});
t('a stream with no sessions left is flagged stranded, not silently dropped', () => {
  global.__api.setToday(2026, 12, 23);
  const p = f.getPlan().pace.sql;
  eq(p.sessions, 0, 'SQL sessions all in the past');
  ok(p.left > 0 && p.stuck === true, 'should be stuck');
  console.log('        SQL: ' + p.left + ' stranded, 0 sessions remain');
  global.__api.setToday(2026, 8, 24);
});

// ══════════════════════════════════════════════════════════════════════════
S('3. Handover — when a pipe runs dry');
t('Java empty → Spring takes all 188 Slot B sessions', () => {
  R();
  eq(f.getPlan().pace.spring.sessions, 94, 'baseline Spring sessions');
  g.TRACK_DEFS.java.groups.forEach(grp => markTrackGroup('java', grp.id));
  f.invalidatePlan();
  eq(f.getPlan().pace.java.sessions, 0, 'Java keeps none');
  eq(f.getPlan().pace.spring.sessions, 188, 'Spring takes both day types');
  const m = f.slotMeta(f.findDay('2026-08-24').day, 'b');
  ok(m.label.indexOf('Spring') === 0 && m.label.indexOf('↺ from Java') > 0, 'label marks handover: ' + m.label);
});
t('AWS empty → System Design takes Slot D too, plus DSA\'s spare Slot A capacity', () => {
  R();
  g.TRACK_DEFS.cloud.groups.forEach(grp => { if (grp.id.indexOf('cl-saa-') === 0) markTrackGroup('cloud', grp.id); });
  f.invalidatePlan();
  // 126 baseline + 94 from AWS's Slot D + 124 Slot A sessions DSA doesn't
  // need at ~1.5h/day (188 total minus its own ~64) + 2 Slot C sessions
  // SQL doesn't need (23.9h at 1h/day = 24 of its 26 days), both first in
  // their own handover chains.
  eq(f.getPlan().pace.sd.sessions, 346, 'SD gets its 126 + 94 AWS + 124 spare DSA + 2 spare SQL slots');
  const m = f.slotMeta(f.findDay('2026-08-24').day, 'd');
  ok(m.label.indexOf('System Design') === 0 && m.label.indexOf('↺') > 0, 'label: ' + m.label);
});
t('both pipes dry → falls through the chain, no idle session', () => {
  ['java','spring','sd'].forEach(tr => g.TRACK_DEFS[tr].groups.forEach(grp => markTrackGroup(tr, grp.id)));
  g.TRACK_DEFS.cloud.groups.forEach(grp => markTrackGroup('cloud', grp.id));
  f.invalidatePlan();
  const mb = f.slotMeta(f.findDay('2026-08-24').day, 'b');
  const md = f.slotMeta(f.findDay('2026-08-24').day, 'd');
  ok(mb.stream === 'dsa', 'Slot B falls to DSA, got ' + mb.stream);
  ok(md.stream === 'dsa' || md.stream === 'clocal', 'Slot D falls through, got ' + md.stream);
  ok(f.getPlan().pace.dsa.sessions > 188, 'DSA gained sessions: ' + f.getPlan().pace.dsa.sessions);
});
t('everything done → slot reports a free session rather than erroring', () => {
  ['java','spring','sd','sql'].forEach(tr => g.TRACK_DEFS[tr].groups.forEach(grp => markTrackGroup(tr, grp.id)));
  g.TRACK_DEFS.cloud.groups.forEach(grp => markTrackGroup('cloud', grp.id));
  g.GFG_MODULES.forEach(m => m.topics.forEach(tp => markGfgVideos(tp.id, tp.v.length)));
  f.invalidatePlan();
  const m = f.slotMeta(f.findDay('2026-08-24').day, 'a');
  ok(m.content.indexOf('Backlog clear') >= 0, 'expected free-session text, got: ' + m.content.slice(0, 60));
});

// ══════════════════════════════════════════════════════════════════════════
S('4. Completion paths — Today tick vs track page');
t('ticking Slot D completes exactly the lessons it displayed', () => {
  R();
  const before = f.assignmentFor('2026-08-24', 'd').units.map(u => u.id);
  f.toggleSlot('2026-08-24', 'd');
  before.forEach(id => eq(global.__api.state.tracks.cloud[id], 'done', id + ' should be done'));
  eq(global.__api.state.dailyChecks['2026-08-24'].d, true, 'slot checked');
  eq(global.__api.state.dailyLog['2026-08-24'].d.units.length, before.length, 'logged');
});
t('a ticked day keeps showing what was done (does not re-fill)', () => {
  const after = f.assignmentFor('2026-08-24', 'd').units.map(u => u.id);
  eq(after.join(','), global.__api.state.dailyLog['2026-08-24'].d.units.map(u => u.id).join(','), 'shows the log');
});
t('unticking restores the lessons to the queue', () => {
  const n = f.getPlan().pace.aws.left;
  f.toggleSlot('2026-08-24', 'd');
  f.invalidatePlan();
  eq(f.getPlan().pace.aws.left, n + 4, 'four lessons returned');
  ok(!global.__api.state.dailyChecks['2026-08-24'].d, 'unchecked');
  ok(!global.__api.state.dailyLog['2026-08-24'].d, 'log cleared');
});
t('ticking Slot A marks its videos done', () => {
  R();
  const units = f.assignmentFor('2026-08-24', 'a').units;
  f.toggleSlot('2026-08-24', 'a');
  const topics = [...new Set(units.map(u => u.topic))];
  topics.forEach(tp => { const s = global.__api.state.gfg.topics[tp];
    ok(s && s.done && Object.keys(s.done).length > 0, tp + ' videos should have moved'); });
});
t('unticking Slot A rolls the video completions back', () => {
  f.toggleSlot('2026-08-24', 'a');
  const tot = Object.values(global.__api.state.gfg.topics).reduce((a, s) => a + Object.keys((s && s.done) || {}).length, 0);
  eq(tot, 0, 'all videos back to undone');
});
t('marking on the track page shifts the next session (the "I already know this" path)', () => {
  R();
  const d3 = f.assignmentFor('2026-08-26', 'b').units.map(u => u.id).join(',');
  f.assignmentFor('2026-08-24', 'b').units.forEach(u => f.setTrackTopic('java', u.id, 'done', u.group, true));
  f.invalidatePlan();
  const now = f.assignmentFor('2026-08-24', 'b').units;
  const day1WasDone = global.__api.state.tracks.java;
  ok(!now.some(u => day1WasDone[u.id] === 'done'), 'day 1 must not re-show completed topics');
  ok(now.length > 0, 'day 1 still has work');
  ok(now[0].id === d3.split(',')[0], 'day 1 now leads with what day 3 previously held: got '
     + now[0].id + ', expected ' + d3.split(',')[0]);
  console.log('        day 1 now starts at: ' + now[0].name.slice(0, 46));
});
t('ticking a prose slot (mock/revision) works and touches no queue', () => {
  R();
  const day = f.findDay('2026-08-27').day;      // rt:'revision' → genuine prose Slot C
  eq(f.streamForSlot(day, 'c'), null, 'a revision Slot C is prose');
  f.toggleSlot('2026-08-27', 'c');
  eq(global.__api.state.dailyChecks['2026-08-27'].c, true, 'checked');
  ok(!global.__api.state.dailyLog['2026-08-27'] || !global.__api.state.dailyLog['2026-08-27'].c, 'nothing logged');
  f.toggleSlot('2026-08-27', 'c');
  ok(!global.__api.state.dailyChecks['2026-08-27'].c, 'unchecked cleanly');
});
t('hands-on days are now a tracked stream in Slot C, not prose', () => {
  R();
  const day = f.findDay('2026-08-24').day;       // rt:'hands-on'
  eq(f.streamForSlot(day, 'c'), 'handson', 'hands-on Slot C is stream-backed');
  const units = f.streamUnits('handson');
  ok(units.length >= 40, 'handson has a real backlog of exercises: ' + units.length);
  ok(units.every(u => u.track === 'handson'), 'every handson unit belongs to the handson track');
});

// ══════════════════════════════════════════════════════════════════════════
S('5. Rotation & slot structure');
t('slots alternate strictly from day 1', () => {
  R();
  const exp = [['java','aws'],['spring','sd'],['java','aws'],['spring','sd']];
  ['2026-08-24','2026-08-25','2026-08-26','2026-08-27'].forEach((d, i) => {
    const day = f.findDay(d).day;
    eq(f.streamForSlot(day, 'b'), exp[i][0], d + ' slot B');
    eq(f.streamForSlot(day, 'd'), exp[i][1], d + ' slot D');
    eq(f.streamForSlot(day, 'a'), 'dsa', d + ' slot A');
  });
});
t('session counts are 188 / 94 / 94 / 94 / 94', () => {
  const c = {};
  g.WEEKS.forEach(w => { if (w.isBuffer) return; w.days.forEach(d => ['a','b','c','d'].forEach(sl => {
    const st = f.streamForSlot(d, sl); if (st) c[sl + ':' + st] = (c[sl + ':' + st] || 0) + 1; })); });
  eq(c['a:dsa'], 188); eq(c['b:java'], 94); eq(c['b:spring'], 94);
  eq(c['d:aws'], 94); eq(c['d:sd'], 94);
});
t('slot hours total 8h/day', () => {
  eq(g.SLOT_H.a + g.SLOT_H.b + g.SLOT_H.c + g.SLOT_H.d, 8);
});
t('day 1 DSA content is packed to ~1.5h, not thin-spread over all 188 sessions', () => {
  R();
  const day1 = sessionsFor('dsa')[0];
  const h = day1.units.reduce((a, u) => a + u.w, 0);
  ok(h > 1.2 && h <= g.SLOT_H.a, 'day 1 DSA load should be close to the 1.5h/day budget, got ' + h.toFixed(2) + 'h');
});
t('day 1 SQL content is packed to ~1h, not thin-spread over every SQL day', () => {
  R();
  const day1 = sessionsFor('sql')[0];
  const h = day1.units.reduce((a, u) => a + u.w, 0);
  ok(h > 0.6 && h <= g.SLOT_H.c, 'day 1 SQL load should be close to the 1h/day budget, got ' + h.toFixed(2) + 'h');
});
t('DSA frees up spare Slot A sessions once its own budget is covered', () => {
  const totalASlots = 188;
  const dsaHoursFull = f.streamUnits('dsa').reduce((a, u) => a + u.w, 0);
  const dsaSessionsNeeded = Math.ceil(dsaHoursFull / g.GFG_DAILY_VIDEO_H);
  ok(dsaSessionsNeeded < totalASlots, 'DSA should need fewer than all 188 Slot A sessions: needs ' + dsaSessionsNeeded);
});
t('SQL frees up spare Slot C sessions once its own budget is covered', () => {
  let sqlSlots = 0;
  g.WEEKS.forEach(w => { if (w.isBuffer) return; w.days.forEach(d => { if (f.streamForSlot(d, 'c') === 'sql') sqlSlots++; }); });
  const sqlHoursFull = f.streamUnits('sql').reduce((a, u) => a + u.w, 0);
  const sqlSessionsNeeded = Math.ceil(sqlHoursFull / g.SQL_DAILY_H);
  ok(sqlSessionsNeeded < sqlSlots, 'SQL should need fewer than all ' + sqlSlots + ' of its Slot C sessions: needs ' + sqlSessionsNeeded);
});
t('every scheduled unit is unique across the whole plan', () => {
  R();
  const seen = {}, dupes = [];
  const bd = f.getPlan().byDate;
  Object.keys(bd).forEach(d => ['a','b','c','d'].forEach(sl => {
    const a = bd[d][sl]; if (!a) return;
    a.units.forEach(u => { const k = u.kind === 'gfg' ? u.topic+':'+u.idx : u.id;
      if (seen[k]) dupes.push(k); seen[k] = 1; });
  }));
  eq(dupes.length, 0, 'duplicates: ' + dupes.slice(0, 3));
});
t('every unscheduled item is accounted for (nothing vanishes)', () => {
  Object.keys(g.STREAMS).forEach(st => {
    const total = f.streamUnits(st).length;
    const p = f.getPlan().pace[st];
    eq(p.total, total, st + ' total');
    eq(p.done + p.left, total, st + ' done+left');
  });
});

// ══════════════════════════════════════════════════════════════════════════
S('6. UI — every tab renders');
R();
['today','weeks','gfg','java','spring','sql','sd','cloud','handson','budget','rules'].forEach(id => {
  t('showTab(' + id + ') renders non-empty HTML', () => {
    f.showTab(id, mkEl('btn'));
    const panel = getEl('panel-' + id);
    ok(panel.innerHTML.length > 200, 'panel-' + id + ' too small: ' + panel.innerHTML.length + ' chars');
    ok(panel.innerHTML.indexOf('undefined') < 0, 'contains "undefined"');
    ok(panel.innerHTML.indexOf('[object Object]') < 0, 'contains [object Object]');
  });
});

S('7. UI — Today tab states');
t('pre-plan preview shows a countdown and no tick boxes', () => {
  R(); global.__api.setToday(2026, 8, 22);
  f.renderToday();
  const h = getEl('panel-today').innerHTML;
  ok(h.indexOf('days until the plan begins') > 0, 'countdown shown');
  ok(h.indexOf('Mark as done') < 0, 'preview must not offer ticking');
  ok(h.indexOf('Topics to be added') < 0, 'no leftover placeholder');
});
t('active day shows four slots, pace card and week strip', () => {
  global.__api.setToday(2026, 8, 24); f.ensureLedger(); f.renderToday();
  const h = getEl('panel-today').innerHTML;
  eq((h.match(/slot-block/g) || []).length, 4, 'four slot blocks');
  eq((h.match(/Mark as done/g) || []).length, 4, 'four tick rows');
  ok(h.indexOf('Pace ·') > 0, 'pace card present');
  ok(h.indexOf('week-strip') > 0, 'week strip present');
  ok(h.indexOf('Day 1 of') > 0 || getEl('day-pill').textContent.indexOf('Day 1') === 0, 'day pill set');
});
t('post-plan shows the completion state', () => {
  global.__api.setToday(2027, 3, 17); f.renderToday();
  ok(getEl('panel-today').innerHTML.indexOf('Plan complete') > 0, 'completion message');
});
t('the un-scheduled gap day renders as an explicit rest day', () => {
  global.__api.setToday(2026, 12, 4); f.renderToday();
  const h = getEl('panel-today').innerHTML;
  ok(h.indexOf('Rest day · no session scheduled') > 0, 'handled: ' + h.slice(0, 90));
  ok(h.indexOf('slot-block') < 0, 'no slots offered');
  eq(getEl('day-pill').textContent, 'Rest day', 'pill set');
});
t('a buffer day renders its activity only', () => {
  global.__api.setToday(2027, 3, 3); f.renderToday();
  const h = getEl('panel-today').innerHTML;
  ok(h.indexOf('slot-block') < 0, 'no slots on buffer days');
  global.__api.setToday(2026, 8, 24);
});

S('8. UI — Weeks tab');
t('all 28 weeks render without error', () => {
  R(); f.renderWeeks();
  for (let i = 0; i < g.WEEKS.length; i++) {
    f.showWeek(i);
    const h = getEl('week-detail').innerHTML;
    ok(h.length > 100, 'week ' + g.WEEKS[i].wn + ' too small');
    ok(h.indexOf('undefined') < 0, 'week ' + g.WEEKS[i].wn + ' has undefined');
  }
});
t('a normal week shows 4 slots per day', () => {
  f.showWeek(0);
  const h = getEl('week-detail').innerHTML;
  eq((h.match(/wdr-slot"/g) || []).length, 7 * 4, '7 days x 4 slots');
});
t('the buffer week renders activities, not slots', () => {
  f.showWeek(g.WEEKS.length - 1);
  const h = getEl('week-detail').innerHTML;
  ok(h.indexOf('FINAL DAY OF PLAN') > 0, 'buffer content present');
});
t('ticked slots show a check in the week view', () => {
  R(); f.toggleSlot('2026-08-24', 'a'); f.showWeek(0);
  ok(getEl('week-detail').innerHTML.indexOf('wdr-tick') > 0, 'tick rendered');
});

S('9. UI — GFG tab');
t('renders 3 module cards, collapsed by default', () => {
  R(); f.renderGFG();
  const h = getEl('panel-gfg').innerHTML;
  eq((h.match(/class="module-section"/g) || []).length, 3, '3 modules');
  eq((h.match(/class="topic-row/g) || []).length, 0, 'topics collapsed by default');
  eq((h.match(/class="video-row/g) || []).length, 0, 'videos collapsed by default');
  ok(h.indexOf('Reset ALL progress') > 0, 'reset button is honest about its scope');
});
t('toggleModule expands a module to show its 16 topics', () => {
  f.toggleModule('basics');
  const h = getEl('panel-gfg').innerHTML;
  eq((h.match(/class="topic-row/g) || []).length, 16, 'basics has 16 topics');
  f.toggleModule('basics');
});
t('toggleTopic expands a topic to show every real video title', () => {
  f.toggleModule('basics');
  f.toggleTopic('basics-dsa-intro');
  const h = getEl('panel-gfg').innerHTML;
  eq((h.match(/class="video-row/g) || []).length, 2, 'basics-dsa-intro has 2 videos');
  ok(h.indexOf('Why is DSA Important') > 0, 'real video title shown, not a generic count');
  f.toggleTopic('basics-dsa-intro');
  f.toggleModule('basics');
});
t('toggleVideo marks a single video done and updates the topic %', () => {
  R();
  f.toggleModule('basics'); f.toggleTopic('basics-dsa-intro');
  f.toggleVideo('basics-dsa-intro', 1);
  ok(global.__api.state.gfg.topics['basics-dsa-intro'].done[1] === true, 'video 1 marked done');
  ok(getEl('panel-gfg').innerHTML.indexOf('50%') > 0, 'topic pct reflects 1/2 done');
  f.toggleVideo('basics-dsa-intro', 1);
  f.toggleTopic('basics-dsa-intro'); f.toggleModule('basics');
});
t('marking every video in a topic reshuffles the plan immediately', () => {
  R();
  const before = f.assignmentFor('2026-08-24', 'a').units.length;
  markGfgVideos('basics-dsa-intro', 2);
  const after = f.assignmentFor('2026-08-24', 'a').units;
  ok(!after.some(u => u.topic === 'basics-dsa-intro'), 'completed topic no longer scheduled');
  ok(before > 0 && after.length > 0, 'still scheduled');
});

S('10. UI — Track tabs');
['java','spring','sql','sd','cloud','handson'].forEach(tr => {
  t(tr + ' tab lists every group and topic', () => {
    R(); f.renderTrackTab(tr);
    const h = getEl('panel-' + tr).innerHTML;
    const nTopics = g.TRACK_DEFS[tr].groups.reduce((a, x) => a + x.topics.length, 0);
    eq((h.match(/class="tr-row/g) || []).length, nTopics, tr + ' topic rows');
    eq((h.match(/class="track-section"/g) || []).length, g.TRACK_DEFS[tr].groups.length, tr + ' groups');
  });
});
t('course links: Spring topics link out; Java and the rebuilt SQL track do not', () => {
  R(); f.renderTrackTab('spring'); f.renderTrackTab('sql'); f.renderTrackTab('java');
  ok(getEl('panel-spring').innerHTML.indexOf('durgasoftonline.com') > 0, 'Spring links to durgasoftonline');
  eq(f.courseUrlFor('sql', 'sql-joins'), null, 'rebuilt SQL track is topic-based, no single course link');
  ok(getEl('panel-sql').innerHTML.indexOf('class="topic-link"') < 0, 'SQL rows are plain, not links');
  ok(getEl('panel-java').innerHTML.indexOf('class="topic-link"') < 0, 'Java has no course link (none given)');
});
t('course links: only the AWS SAA groups in Cloud link out, Docker/K8s do not', () => {
  ok(f.courseUrlFor('cloud', 'cl-saa-fund').indexOf('cantrill.io') > 0, 'AWS SAA group links to cantrill.io');
  eq(f.courseUrlFor('cloud', 'cl-docker'), null, 'Docker group has no course link');
});
t('SD is the real InterviewReady System Design course: 151 videos, all 4 modules present, links out', () => {
  R();
  const nVideos = g.TRACK_DEFS.sd.groups.reduce((a, x) => a + x.topics.length, 0);
  eq(nVideos, 151, '151 real videos across Basics/Concepts/HLD/Research Papers');
  ['Basics ·', 'Concepts ·', 'High Level Design ·', 'Research Paper Analysis ·'].forEach(prefix =>
    ok(g.TRACK_DEFS.sd.groups.some(x => x.name.indexOf(prefix) === 0), 'missing module: ' + prefix));
  f.renderTrackTab('sd');
  const h = getEl('panel-sd').innerHTML;
  ok(h.indexOf('interviewready.io') > 0, 'SD links to interviewready.io');
  ok(h.indexOf('Design an Emailing Service like Gmail') > 0, 'real HLD case study title present');
  ok(h.indexOf('Scaling Memcached at Facebook') > 0, 'real research paper title present');
});
t('setTrackTopic toggles done → not-started on second click', () => {
  R();
  const id = g.TRACK_DEFS.java.groups[0].topics[0].id;
  f.setTrackTopic('java', id, 'done', 'java-a');
  eq(global.__api.state.tracks.java[id], 'done');
  f.setTrackTopic('java', id, 'done', 'java-a');
  eq(global.__api.state.tracks.java[id], 'not-started', 'second click clears it');
});
t('in-progress is a distinct state and does not complete the item', () => {
  R();
  const id = g.TRACK_DEFS.java.groups[0].topics[0].id;
  f.setTrackTopic('java', id, 'in-progress', 'java-a');
  eq(global.__api.state.tracks.java[id], 'in-progress');
  ok(f.assignmentFor('2026-08-24', 'b').units.some(u => u.id === id), 'still scheduled');
});
t('force=true (sync path) does not toggle off', () => {
  R();
  const id = g.TRACK_DEFS.java.groups[0].topics[0].id;
  f.setTrackTopic('java', id, 'done', 'java-a', true);
  f.setTrackTopic('java', id, 'done', 'java-a', true);
  eq(global.__api.state.tracks.java[id], 'done', 'stays done');
});

S('11. UI — Budget & Rules');
t('budget totals 1504h over 188 days and sums to 100%', () => {
  R(); f.renderBudget();
  const h = getEl('panel-budget').innerHTML;
  ok(h.indexOf('1,504 hours') > 0, 'total shown');
  ok(h.indexOf('188 study days') > 0, 'day count shown');
  const pcts = [...h.matchAll(/(\d+\.\d)%<\/div>/g)].map(m => parseFloat(m[1]));
  const sum = pcts.reduce((a, b) => a + b, 0);
  ok(Math.abs(sum - 100) < 1.5, 'percentages sum to ~100, got ' + sum.toFixed(1));
});
t('budget lists AWS and both rotation streams', () => {
  const h = getEl('panel-budget').innerHTML;
  ['DSA (GFG)','Java','Spring','AWS (SAA course)','System Design'].forEach(n =>
    ok(h.indexOf(n) > 0, 'missing budget row: ' + n));
});
t('phase table covers all four phases plus buffer', () => {
  const h = getEl('panel-budget').innerHTML;
  ['Phase 1','Phase 2','Phase 3','Phase 4','Buffer'].forEach(n => ok(h.indexOf(n) > 0, 'missing phase: ' + n));
});
t('rules documents 4 slots, handover and no stale weekday rotation', () => {
  f.renderRules();
  const h = getEl('panel-rules').innerHTML;
  ok(h.indexOf('DAILY 4-SLOT STRUCTURE (8 hours every day)') > 0, '4-slot header');
  ok(h.indexOf('HANDOVER') > 0, 'handover block');
  ok(h.indexOf('Mon / Wed / Fri') < 0, 'stale weekday rule removed');
  ok(h.toLowerCase().indexOf('genpact') < 0, 'genpact removed');
});

S('12. Pace card (ledger-driven)');
t('empty without a baseline; on-plan header on baseline day', () => {
  R(); global.__api.setToday(2026, 8, 24);
  eq(f.renderPace(), '', 'no baseline → no card');
  f.ensureLedger();
  const h = f.renderPace();
  ok(h.indexOf('Pace · on plan') > 0, 'green on-plan header on day 1');
  ok(h.indexOf('pace-flag behind') < 0, 'nothing behind on day 1');
  ok(h.indexOf('Progress tab') > 0, 'links to the Progress tab');
});
t('turns red and names the days behind once work is overdue', () => {
  R(); global.__api.setToday(2026, 8, 24); f.ensureLedger();
  global.__api.setToday(2026, 11, 23);
  const h = f.renderPace();
  ok(h.indexOf('pace-flag behind') > 0, 'behind flag present');
  ok(/\d+d behind/.test(h), 'shows how many days behind');
  ok(/overdue/.test(h), 'header counts overdue items');
});
t('a cleared stream reads complete', () => {
  R(); global.__api.setToday(2026, 8, 24); f.ensureLedger();
  g.TRACK_DEFS.sql.groups.forEach(grp => markTrackGroup('sql', grp.id));
  f.invalidatePlan();
  ok(f.renderPace().indexOf('✓ complete') > 0, 'complete flag present');
});

S('13. Persistence');
t('state survives a save/load round trip', () => {
  R();
  f.toggleSlot('2026-08-24', 'd');
  const raw = localStorage.getItem('java-prep-tracker-v2');
  const parsed = JSON.parse(raw);
  eq(parsed.version, '4.0', 'version bumped');
  ok(parsed.dailyLog['2026-08-24'].d.units.length === 4, 'log persisted');
  ok(Object.keys(parsed.tracks.cloud).length === 4, 'track state persisted');
});
t('a legacy v2 state without dailyLog is migrated by loadState, and stale Slot A data is dropped', () => {
  localStorage.setItem('java-prep-tracker-v2', JSON.stringify(
    {version:'2.0', gfg:{topics:{'basics-arrays':{vc:5,pc:3}}}, dailyChecks:{'2026-08-24':{a:true,b:true}}, tracks:{}}));
  const loaded = f.loadState();
  ok(loaded.dailyLog && typeof loaded.dailyLog === 'object', 'dailyLog backfilled');
  ok(loaded.gfg && loaded.gfg.topics, 'gfg present');
  eq(Object.keys(loaded.gfg.topics['basics-arrays'].done || {}).length, 0, 'old vc/pc counters wiped for a fresh video-level start');
  eq(loaded.dailyChecks['2026-08-24'].a, undefined, 'stale Slot A check dropped on migration');
  eq(loaded.dailyChecks['2026-08-24'].b, true, 'other slots untouched');
  ok(loaded.tracks && loaded.tracks.java, 'tracks backfilled');
  eq(loaded.version, '4.0', 'version bumped to 4.0');
});
t('a corrupt state falls back to defaults instead of throwing', () => {
  localStorage.setItem('java-prep-tracker-v2', '{not valid json');
  const loaded = f.loadState();
  ok(loaded.gfg && loaded.dailyChecks && loaded.tracks, 'defaults returned');
  eq(Object.keys(loaded.dailyChecks).length, 0, 'clean slate');
});

t('resetAll clears every part of the state, not just GFG', () => {
  R();
  f.toggleSlot('2026-08-24', 'a');
  f.toggleSlot('2026-08-24', 'd');
  f.setTrackTopic('java', g.TRACK_DEFS.java.groups[0].topics[0].id, 'done', 'java-a', true);
  ok(Object.keys(global.__api.state.dailyChecks).length > 0, 'state is dirty');
  f.resetAll();
  const st = global.__api.state;
  eq(Object.keys(st.dailyChecks).length, 0, 'daily checks cleared');
  eq(Object.keys(st.dailyLog).length, 0, 'daily log cleared');
  eq(Object.keys(st.tracks.java).length, 0, 'java track cleared');
  eq(Object.keys(st.tracks.cloud).length, 0, 'cloud track cleared');
  const gfgTotal = Object.values(st.gfg.topics).reduce((a, x) => a + Object.keys((x && x.done) || {}).length, 0);
  eq(gfgTotal, 0, 'gfg video completions cleared');
});
t('resetAll writes the cleared state back to storage (so a sync cannot resurrect it)', () => {
  const raw = JSON.parse(localStorage.getItem('java-prep-tracker-v2'));
  eq(Object.keys(raw.dailyChecks).length, 0, 'persisted state is clean');
  ok(raw.lastUpdated, 'saveState ran, so Firestore sync was triggered');
});

// ══════════════════════════════════════════════════════════════════════════
S('14. Order integrity — the queue is never reordered or skipped');
t('scheduled units follow curriculum order exactly, for every stream', () => {
  R();
  Object.keys(g.STREAMS).forEach(st => {
    const order = {}; f.streamUnits(st).forEach((u, i) => {
      order[u.kind === 'gfg' ? u.topic+':'+u.idx : u.id] = i; });
    let prev = -1;
    sessionsFor(st).forEach(s => s.units.forEach(u => {
      const k = u.kind === 'gfg' ? u.topic+':'+u.idx : u.id;
      ok(order[k] > prev, st + ' out of order at ' + k + ' (' + order[k] + ' after ' + prev + ')');
      prev = order[k];
    }));
  });
});
t('after partial completion, the schedule is exactly the not-done items in order', () => {
  R();
  g.TRACK_DEFS.java.groups[0].topics.forEach((tp, i) => {
    if (i % 3 === 0) f.setTrackTopic('java', tp.id, 'done', 'java-a', true); });
  f.invalidatePlan();
  const expected = f.streamUnits('java').filter(u => !f.unitDone(u)).map(u => u.id);
  const actual = [];
  sessionsFor('java').forEach(s => s.units.forEach(u => actual.push(u.id)));
  eq(actual.join('|'), expected.join('|'), 'scheduled set must equal remaining set, in order');
  console.log('        ' + actual.length + ' remaining Java topics scheduled, none skipped or repeated');
});
t('handover preserves the partner stream order too', () => {
  R();
  g.TRACK_DEFS.java.groups.forEach(grp => markTrackGroup('java', grp.id));
  f.invalidatePlan();
  const expected = f.streamUnits('spring').filter(u => !f.unitDone(u)).map(u => u.id);
  const actual = [];
  sessionsFor('spring').forEach(s => s.units.forEach(u => actual.push(u.id)));
  eq(actual.join('|'), expected.join('|'), 'Spring order intact across 188 handed-over sessions');
});
t('pulling up never drops the tail of a stream', () => {
  R();
  const lastBefore = f.streamUnits('aws').slice(-1)[0].id;
  g.TRACK_DEFS.cloud.groups.slice(2, 8).forEach(grp => markTrackGroup('cloud', grp.id));
  f.invalidatePlan();
  const all = []; sessionsFor('aws').forEach(s => s.units.forEach(u => all.push(u.id)));
  eq(all[all.length - 1], lastBefore, 'final lesson still scheduled');
});


// ══════════════════════════════════════════════════════════════════════════
S('9. Plan ledger — planned vs actual, days late, speed & ETA');
const grpOf = (track, id) => g.TRACK_DEFS[track].groups.find(x => x.topics.some(tp => tp.id === id)).id;
const doneTopic = (track, id) => f.setTrackTopic(track, id, 'done', grpOf(track, id), true);
const resetLedger = () => { R(); global.__api.setToday(2026, 8, 24); f.ensureLedger(); };

t('baseline: finished work is on time, open work gets a planned date', () => {
  R(); global.__api.setToday(2026, 8, 24);
  markTrackGroup('java', 'java-a');
  f.ensureLedger();
  const L = global.__api.state.baseline;
  eq(L.created, '2026-08-24', 'baseline date');
  const done0 = f.streamUnits('java')[0], open0 = f.streamUnits('java').find(u => !f.unitDone(u));
  eq(global.__api.state.doneOn[f.unitKey(done0)], 'pre', 'pre-baseline completion');
  ok(f.ledgerOf(done0).pre && f.ledgerOf(done0).late === 0, 'pre-baseline item is on time');
  ok(L.planned[f.unitKey(open0)] >= '2026-08-24', 'open item has a planned date');
  ok(!(f.unitKey(done0) in L.planned), 'done item has no planned date');
});
t('every open item is given a planned date at baseline', () => {
  resetLedger();
  const L = global.__api.state.baseline;
  const missing = ['dsa','java','spring','sql','sd','aws','clocal','handson']
    .reduce((n, st) => n + f.streamUnits(st).filter(u => !(f.unitKey(u) in L.planned)).length, 0);
  eq(missing, 0, 'items without a planned date');
});
t('a miss shows as late starting tomorrow, growing by a day each day', () => {
  resetLedger();
  const u = f.streamUnits('java')[0], k = f.unitKey(u);
  eq(global.__api.state.baseline.planned[k], '2026-08-24', 'planned for day 1');
  eq(f.ledgerOf(u).late, 0, 'not late on the day itself');
  global.__api.setToday(2026, 8, 25); eq(f.ledgerOf(u).late, 1, 'next day');
  global.__api.setToday(2026, 8, 28); eq(f.ledgerOf(u).late, 4, 'four days on');
});
t('completing late records planned vs actual dates', () => {
  resetLedger();
  const u = f.streamUnits('java')[0];
  global.__api.setToday(2026, 8, 27);
  doneTopic('java', u.id);
  const e = f.ledgerOf(u);
  ok(e.done && !e.pre, 'recorded as a real completion');
  eq(e.doneOn, '2026-08-27'); eq(e.planned, '2026-08-24'); eq(e.late, 3, 'days late');
  eq(global.__api.state.doneOn[f.unitKey(u)], '2026-08-27');
});
t('finishing early is a negative lateness', () => {
  resetLedger();
  const later = f.streamUnits('java')[40];
  const planned = global.__api.state.baseline.planned[f.unitKey(later)];
  ok(planned > '2026-08-24', 'item 40 is planned for later, got ' + planned);
  doneTopic('java', later.id);
  ok(f.ledgerOf(later).late < 0, 'early completion should be negative, got ' + f.ledgerOf(later).late);
});
t('unticking removes the completion date and the item can be late again', () => {
  resetLedger();
  const u = f.streamUnits('java')[0];
  doneTopic('java', u.id);
  ok(global.__api.state.doneOn[f.unitKey(u)], 'recorded');
  f.setTrackTopic('java', u.id, 'not-started', grpOf('java', u.id), true);
  ok(!global.__api.state.doneOn[f.unitKey(u)], 'cleared');
  global.__api.setToday(2026, 8, 26);
  eq(f.ledgerOf(u).late, 2, 'late again');
});
t('GFG video ticks and slot ticks are recorded too', () => {
  resetLedger();
  f.toggleVideo('basics-dsa-intro', 1);
  const v = f.ledgerOf({kind:'gfg', topic:'basics-dsa-intro', idx:1});
  ok(v.done && v.doneOn === '2026-08-24', 'video done today');
  const day = f.findDay('2026-08-24').day;
  const a = f.assignmentFor('2026-08-24', 'b');
  f.toggleSlot('2026-08-24', 'b');
  a.units.forEach(u => eq(global.__api.state.doneOn[f.unitKey(u)], '2026-08-24', u.name));
  f.toggleSlot('2026-08-24', 'b');
  a.units.forEach(u => ok(!global.__api.state.doneOn[f.unitKey(u)], 'untick clears ' + u.name));
});
t('speed: hours done per day over the window, with a projected finish', () => {
  resetLedger();
  const us = f.streamUnits('java').slice(0, 6);
  us.forEach(u => doneTopic('java', u.id));
  const h = us.reduce((a, u) => a + u.w, 0);
  const r = f.streamLedger('java');
  ok(Math.abs(r.windowW - h) < 1e-9, 'window hours');
  eq(r.days, 1, 'one day of history');
  ok(Math.abs(r.rate - h) < 1e-9, 'rate = hours / 1 day');
  ok(r.projected && r.projected > '2026-08-24', 'has an ETA: ' + r.projected);
  ok(r.plannedFinish && r.plannedRate > 0, 'has a planned finish and rate');
  ok(typeof r.slip === 'number', 'slip computed');
});
t('ETA always resolves (plan pace) and speeds up as backlog burns down', () => {
  resetLedger();
  const base = f.streamLedger('java');
  ok(base.projected, 'no progress still yields a date (plan pace)');
  ok(!base.liveSpeed, 'flagged as plan-based, not live speed');
  ok(Math.abs(f.daysBetween(base.projected, base.plannedFinish)) <= 3, 'plan-based ETA ≈ planned finish');
  f.streamUnits('java').slice(0, 5).forEach(u => doneTopic('java', u.id));
  const slow = f.streamLedger('java');
  ok(!slow.liveSpeed, 'one day of work is not yet enough to trust real speed');
  f.streamUnits('java').slice(5, 40).forEach(u => doneTopic('java', u.id));
  const fast = f.streamLedger('java').projected;
  ok(fast < slow.projected, 'clearing backlog still pulls the ETA earlier: ' + slow.projected + ' → ' + fast);
  console.log('        Java ETA ' + slow.projected + ' → ' + fast + ' (plan ' + f.streamLedger('java').plannedFinish + ')');
});
t('real speed engages once several active days accumulate', () => {
  resetLedger();                                  // Aug 24
  f.streamUnits('java').slice(0, 3).forEach(u => doneTopic('java', u.id));
  global.__api.setToday(2026, 8, 25); f.streamUnits('java').slice(3, 6).forEach(u => doneTopic('java', u.id));
  global.__api.setToday(2026, 8, 26); f.streamUnits('java').slice(6, 9).forEach(u => doneTopic('java', u.id));
  global.__api.setToday(2026, 8, 27); f.streamUnits('java').slice(9, 12).forEach(u => doneTopic('java', u.id));
  const r = f.streamLedger('java');
  ok(r.activeDays >= 4, 'a multi-day sample is observed: ' + r.activeDays);
  ok(r.liveSpeed, 'real speed now drives the ETA, not the plan pace');
  global.__api.setToday(2026, 8, 24);
});
t('an idle stream\'s ETA marches forward a day at a time', () => {
  resetLedger();
  const d0 = f.streamLedger('java').projected;
  global.__api.setToday(2026, 8, 25);
  const d1 = f.streamLedger('java').projected;
  global.__api.setToday(2026, 8, 28);
  const d3 = f.streamLedger('java').projected;
  ok(d1 > d0 && d3 > d1, 'idle ETA slides later: ' + d0 + ' → ' + d1 + ' → ' + d3);
});
t('speed uses a rolling window, so old bursts age out', () => {
  resetLedger();
  f.streamUnits('java').slice(0, 10).forEach(u => doneTopic('java', u.id));
  global.__api.setToday(2026, 9, 30);   // well past the 14-day window
  const r = f.streamLedger('java');
  eq(r.windowW, 0, 'completions older than the window do not count');
  ok(r.doneW > 0, 'but they still count as done since baseline');
});
t('overdue items are listed per stream, worst first', () => {
  resetLedger();
  global.__api.setToday(2026, 8, 30);
  const li = f.lateItems('java', '2026-08-30');
  ok(li.length > 0, 'something is overdue');
  for (let i = 1; i < li.length; i++) ok(li[i-1].late >= li[i].late, 'sorted by lateness');
  eq(f.streamLedger('java').late, li.length, 'count matches (java items stand alone)');
  ok(f.lateItems('dsa', '2026-08-30')[0].n >= 1, 'DSA rolls videos up per topic');
});
t('recently completed shows planned vs actual', () => {
  resetLedger();
  const u = f.streamUnits('spring')[0];
  global.__api.setToday(2026, 8, 26);
  doneTopic('spring', u.id);
  const rd = f.recentDone(5);
  eq(rd.length, 1); eq(rd[0].name, u.name); eq(rd[0].doneOn, '2026-08-26');
});
t('re-baselining forgives the past and restarts the counters', () => {
  resetLedger();
  global.__api.setToday(2026, 8, 30);
  ok(f.streamLedger('java').late > 0, 'late before');
  f.resetBaseline();
  eq(f.streamLedger('java').late, 0, 'nothing late right after re-baseline');
  eq(global.__api.state.baseline.created, '2026-08-30');
  global.__api.setToday(2026, 8, 31);
  ok(f.streamLedger('java').late > 0, 'and it starts counting again from tomorrow');
});
t('Today surfaces carried-over work: a skipped day shows an overdue banner, not fresh content', () => {
  resetLedger();                                  // baseline at Aug 24, nothing done
  global.__api.setToday(2026, 8, 24);
  f.renderToday();
  ok(getEl('panel-today').innerHTML.indexOf('Carried over') < 0, 'day 1 has nothing carried over');
  global.__api.setToday(2026, 8, 28);             // 4 days on, still nothing done
  f.invalidatePlan(); f.renderToday();
  const h = getEl('panel-today').innerHTML;
  ok(h.indexOf('Carried over') >= 0, 'overdue work is flagged as carried over on Today');
  ok(/Carried over · \d+ days behind/.test(h), 'and names how many days behind');
});
t('state shape is safe for old saves (no baseline) and for resetAll', () => {
  R();
  eq(global.__api.state.baseline, null, 'fresh state has no baseline');
  eq(f.ledgerOf(f.streamUnits('java')[0]), null, 'ledgerOf is inert without one');
  eq(f.ledgerChip({kind:'track', track:'java', id:f.streamUnits('java')[0].id}), '', 'no chip');
  global.__api.setToday(2026, 8, 24); f.ensureLedger();
  f.resetAll();
  ok(global.__api.state.baseline, 'resetAll re-establishes a baseline');
  eq(Object.keys(global.__api.state.baseline.planned).length > 0, true, 'with a full plan');
});
t('Progress tab, Today banner, track rows and GFG chips all render', () => {
  resetLedger();
  global.__api.setToday(2026, 8, 27);
  f.renderProgress();
  const html = getEl('panel-progress').innerHTML;
  ok(html.indexOf('Speed') >= 0 && html.indexOf('Expected finish') >= 0, 'speed/ETA section');
  ok(html.indexOf('d late') >= 0, 'overdue section');
  ok(f.renderLateBanner().indexOf('Behind plan') >= 0, 'banner flags lateness');
  f.renderTrackTab('java');
  ok(getEl('panel-java').innerHTML.indexOf('d late') >= 0, 'track rows show days late');
  const topic = g.GFG_MODULES[0].topics[0];
  ok(f.gfgTopicChip(topic).indexOf('late') >= 0, 'GFG topic shows days late');
  global.__api.setToday(2026, 8, 24);
  ok(f.renderLateBanner().indexOf('On plan') >= 0, 'on plan on baseline day');
});
global.__api.setToday(2026, 8, 24);

// ══════════════════════════════════════════════════════════════════════════
S('14. Program finish — one live date for everything');
t('program finish = the latest stream ETA, always a real date', () => {
  resetLedger();
  const pf = f.programFinish();
  ok(pf.anyOpen, 'work remains at the start');
  ok(pf.date, 'a concrete finish date');
  const latest = Object.keys(g.STREAMS)
    .map(st => f.streamLedger(st).projected).filter(Boolean).sort().slice(-1)[0];
  eq(pf.date, latest, 'equals the latest per-stream ETA');
  ok(pf.days > 0, 'days-from-today counter set');
});
t('the whole-program date slides forward while nothing gets done', () => {
  resetLedger();
  const a = f.programFinish('2026-08-24').date;
  const b = f.programFinish('2026-09-10').date;
  ok(b > a, 'idle program ETA moves later: ' + a + ' → ' + b);
});
t('a faster recent pace pulls both the track and program dates earlier', () => {
  resetLedger();
  // light pace: a few java topics on day 1
  f.streamUnits('java').slice(0, 4).forEach(u => doneTopic('java', u.id));
  const slowJava = f.streamLedger('java').projected;
  const slowProg = f.programFinish().date;
  // heavy pace: clear a big chunk more, same day
  f.streamUnits('java').slice(4, 60).forEach(u => doneTopic('java', u.id));
  const fastJava = f.streamLedger('java').projected;
  const fastProg = f.programFinish().date;
  ok(fastJava < slowJava, 'Java ETA pulled earlier: ' + slowJava + ' → ' + fastJava);
  ok(fastProg <= slowProg, 'program ETA not pushed later by faster work: ' + slowProg + ' → ' + fastProg);
});
t('a stream\'s first day of work cannot explode its ETA (cold-start speed)', () => {
  // Reproduces the real bug: a stream (here handson) whose only completion is a
  // single small exercise done "today", weeks after the baseline, used to divide
  // that day's work across the full 14-day window → a near-zero speed → an ETA
  // flung years out (the reported "Nov 2029 · 1131d"). Speed must be measured
  // from the first active day, so doing work can never push the ETA later.
  resetLedger();
  global.__api.setToday(2026, 10, 1);        // ~5 weeks in; the speed window is full
  const idle = f.streamLedger('handson').projected;   // nothing done → planned pace
  doneTopic('handson', f.streamUnits('handson')[0].id);  // one exercise, today
  f.invalidatePlan();
  const after = f.streamLedger('handson').projected;
  ok(after, 'still projects a date');
  ok(after <= idle, 'first-day work never pushes the ETA later: ' + idle + ' → ' + after);
  ok(after < '2028-01-01', 'ETA stays on a sane horizon, not years out: ' + after);
});
t('one completion cannot swing a stream to "behind" or wildly "ahead"', () => {
  // The other face of thin-data speed: ticking a single item used to snap the
  // ETA to that one day's cadence — a hair slow read as "4 days behind", a burst
  // read as "67 days ahead". Real speed is blended in by confidence, so one day
  // barely moves the projection off the planned pace.
  resetLedger();
  global.__api.setToday(2026, 10, 1);
  const before = f.streamLedger('sd').slip;
  doneTopic('sd', f.streamUnits('sd')[0].id);     // one item, today
  f.invalidatePlan();
  const after = f.streamLedger('sd').slip;
  ok(Math.abs(after - before) <= 5,
     'a single completion barely moves the slip: ' + before + ' → ' + after);
});
t('finishing a whole track drops it out of the program finish', () => {
  resetLedger();
  const withSql = f.programFinish();
  g.TRACK_DEFS.sql.groups.forEach(grp => markTrackGroup('sql', grp.id));
  f.invalidatePlan();
  const sqlRow = f.programFinish().perStream.find(p => p.st === 'sql');
  eq(sqlRow.open, 0, 'SQL now complete');
  eq(sqlRow.projected, null, 'and contributes no ETA');
});
t('the flash banner always renders a date, and completion when all done', () => {
  resetLedger();
  f.renderFinishFlash();
  const h = getEl('finish-flash').innerHTML;
  ok(h.indexOf('ALL TRACKS DONE BY') >= 0, 'labelled banner');
  ok(/\d{4}/.test(h), 'carries a year');
  ok(h.indexOf('target') >= 0, 'compared against the target date');
  // clear everything → completion state
  Object.keys(g.STREAMS).forEach(() => {});
  ['java','spring','sql','sd','cloud','handson'].forEach(tr =>
    g.TRACK_DEFS[tr].groups.forEach(grp => markTrackGroup(tr, grp.id)));
  g.GFG_MODULES.forEach(m => m.topics.forEach(t => markGfgVideos(t.id, t.v.length)));
  f.invalidatePlan();
  f.renderFinishFlash();
  ok(getEl('finish-flash').innerHTML.indexOf('complete') >= 0, 'shows complete when nothing is open');
});
global.__api.setToday(2026, 8, 24);

// ══════════════════════════════════════════════════════════════════════════
console.log('\n' + '═'.repeat(70));
console.log('\x1b[1m  ' + pass + ' passed, ' + fail + ' failed\x1b[0m');
if (fails.length) { console.log('\n  Failures:'); fails.forEach(x => console.log('   • ' + x)); }
console.log('═'.repeat(70));
process.exit(fail ? 1 : 0);
