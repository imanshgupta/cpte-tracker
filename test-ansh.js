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

global.__TODAY = [2026, 7, 11];              // Aug 11 2026 = plan day 1
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
  g:{ WEEKS, STREAMS, TRACK_DEFS, GFG_MODULES, SLOT_H, HANDOVER, PLAN_START, PLAN_END },
  f:{ getPlan, invalidatePlan, assignmentFor, streamForSlot, slotMeta, toggleSlot, setTrackTopic,
      updateTopic, renderToday, renderWeeks, showWeek, renderGFG, renderTrackTab, renderBudget,
      renderRules, renderPace, renderDayContent, showTab, findDay, daysBetween, todayStr,
      isEvenDay, streamUnits, unitDone, renderWeekStrip, fmtH, clampInput, resetGFG, loadState },
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

// ══════════════════════════════════════════════════════════════════════════
S('1. Pull-forward — finishing fast advances the flow');
R();
t('baseline: Java Part A starts on day 1, Collections starts Sep 8', () => {
  const j = sessionsFor('java');
  eq(j[0].date, '2026-08-11', 'first Java session');
  eq(j[0].units[0].name.slice(0, 8), 'JVM / JR', 'first topic');
  const coll = j.find(s => s.units.some(u => u.gname.indexOf('Collections') >= 0));
  eq(coll.date, '2026-09-08', 'Collections start');
});
t('clear Part A (12 topics) → Part B becomes day 1, Collections pulls up', () => {
  markTrackGroup('java', 'java-a');
  f.invalidatePlan();
  const j = sessionsFor('java');
  eq(j[0].date, '2026-08-11', 'still day 1');
  ok(j[0].units[0].gname.indexOf('Strings') >= 0, 'day 1 now Strings, got: ' + j[0].units[0].gname);
  const coll = j.find(s => s.units.some(u => u.gname.indexOf('Collections') >= 0));
  ok(coll.date < '2026-09-08', 'Collections pulled up: ' + coll.date);
  console.log('        Collections 2026-09-08 → ' + coll.date);
});
t('clear Parts B+C+D too → Concurrency pulls up from Nov 15', () => {
  ['java-b','java-c','java-d'].forEach(gid => markTrackGroup('java', gid));
  f.invalidatePlan();
  const conc = sessionsFor('java').find(s => s.units.some(u => u.gname.indexOf('Concurrency') >= 0));
  ok(conc.date < '2026-11-15', 'Concurrency pulled up: ' + conc.date);
  console.log('        Concurrency 2026-11-15 → ' + conc.date);
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
t('DSA pulls up when GFG counters are raised', () => {
  R();
  const before = sessionsFor('dsa').find(s => s.units.some(u => u.name === 'Arrays')).date;
  f.updateTopic('basics-dsa-intro','vc',2,2,0);
  f.updateTopic('basics-analysis','vc',15,15,0);
  f.invalidatePlan();
  const after = sessionsFor('dsa').find(s => s.units.some(u => u.name === 'Arrays')).date;
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
  global.__api.setToday(2026, 9, 10);
  const p2 = f.getPlan().pace.aws;
  eq(p2.left, p1.left, 'nothing completed, so nothing lost');
  ok(p2.sessions < p1.sessions, 'fewer sessions remain');
  ok(p2.load > p1.load, 'load per session rises');
  ok(p2.ratio > 1.15, 'flagged as behind, ratio=' + p2.ratio.toFixed(2));
  console.log('        ' + p1.sessions + ' sessions @' + f.fmtH(p1.load) + ' → ' + p2.sessions + ' @' + f.fmtH(p2.load) + '  (' + p2.ratio.toFixed(1) + '×)');
});
t('a stream with no sessions left is flagged stranded, not silently dropped', () => {
  global.__api.setToday(2026, 12, 10);
  const p = f.getPlan().pace.sql;
  eq(p.sessions, 0, 'SQL sessions all in the past');
  ok(p.left > 0 && p.stuck === true, 'should be stuck');
  console.log('        SQL: ' + p.left + ' stranded, 0 sessions remain');
  global.__api.setToday(2026, 8, 11);
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
  const m = f.slotMeta(f.findDay('2026-08-11').day, 'b');
  ok(m.label.indexOf('Spring') === 0 && m.label.indexOf('↺ from Java') > 0, 'label marks handover: ' + m.label);
});
t('AWS empty → System Design takes Slot D too', () => {
  R();
  g.TRACK_DEFS.cloud.groups.forEach(grp => { if (grp.id.indexOf('cl-saa-') === 0) markTrackGroup('cloud', grp.id); });
  f.invalidatePlan();
  eq(f.getPlan().pace.sd.sessions, 220, 'SD gets its 126 plus 94 AWS');
  const m = f.slotMeta(f.findDay('2026-08-11').day, 'd');
  ok(m.label.indexOf('System Design') === 0 && m.label.indexOf('↺') > 0, 'label: ' + m.label);
});
t('both pipes dry → falls through the chain, no idle session', () => {
  ['java','spring','sd'].forEach(tr => g.TRACK_DEFS[tr].groups.forEach(grp => markTrackGroup(tr, grp.id)));
  g.TRACK_DEFS.cloud.groups.forEach(grp => markTrackGroup('cloud', grp.id));
  f.invalidatePlan();
  const mb = f.slotMeta(f.findDay('2026-08-11').day, 'b');
  const md = f.slotMeta(f.findDay('2026-08-11').day, 'd');
  ok(mb.stream === 'dsa', 'Slot B falls to DSA, got ' + mb.stream);
  ok(md.stream === 'dsa' || md.stream === 'clocal', 'Slot D falls through, got ' + md.stream);
  ok(f.getPlan().pace.dsa.sessions > 188, 'DSA gained sessions: ' + f.getPlan().pace.dsa.sessions);
});
t('everything done → slot reports a free session rather than erroring', () => {
  ['java','spring','sd','sql'].forEach(tr => g.TRACK_DEFS[tr].groups.forEach(grp => markTrackGroup(tr, grp.id)));
  g.TRACK_DEFS.cloud.groups.forEach(grp => markTrackGroup('cloud', grp.id));
  g.GFG_MODULES.forEach(m => m.topics.forEach(tp => f.updateTopic(tp.id, 'vc', tp.vt, tp.vt, tp.pt) || f.updateTopic(tp.id, 'pc', tp.pt, tp.vt, tp.pt)));
  f.invalidatePlan();
  const m = f.slotMeta(f.findDay('2026-08-11').day, 'a');
  ok(m.content.indexOf('Backlog clear') >= 0, 'expected free-session text, got: ' + m.content.slice(0, 60));
});

// ══════════════════════════════════════════════════════════════════════════
S('4. Completion paths — Today tick vs track page');
t('ticking Slot D completes exactly the lessons it displayed', () => {
  R();
  const before = f.assignmentFor('2026-08-11', 'd').units.map(u => u.id);
  f.toggleSlot('2026-08-11', 'd');
  before.forEach(id => eq(global.__api.state.tracks.cloud[id], 'done', id + ' should be done'));
  eq(global.__api.state.dailyChecks['2026-08-11'].d, true, 'slot checked');
  eq(global.__api.state.dailyLog['2026-08-11'].d.units.length, before.length, 'logged');
});
t('a ticked day keeps showing what was done (does not re-fill)', () => {
  const after = f.assignmentFor('2026-08-11', 'd').units.map(u => u.id);
  eq(after.join(','), global.__api.state.dailyLog['2026-08-11'].d.units.map(u => u.id).join(','), 'shows the log');
});
t('unticking restores the lessons to the queue', () => {
  const n = f.getPlan().pace.aws.left;
  f.toggleSlot('2026-08-11', 'd');
  f.invalidatePlan();
  eq(f.getPlan().pace.aws.left, n + 4, 'four lessons returned');
  ok(!global.__api.state.dailyChecks['2026-08-11'].d, 'unchecked');
  ok(!global.__api.state.dailyLog['2026-08-11'].d, 'log cleared');
});
t('ticking Slot A moves GFG counters', () => {
  R();
  const units = f.assignmentFor('2026-08-11', 'a').units;
  f.toggleSlot('2026-08-11', 'a');
  const topics = [...new Set(units.map(u => u.topic))];
  topics.forEach(tp => { const s = global.__api.state.gfg.topics[tp];
    ok((s.vc || 0) + (s.pc || 0) > 0, tp + ' counters should have moved'); });
});
t('unticking Slot A rolls GFG counters back', () => {
  f.toggleSlot('2026-08-11', 'a');
  const tot = Object.values(global.__api.state.gfg.topics).reduce((a, s) => a + (s.vc||0) + (s.pc||0), 0);
  eq(tot, 0, 'all counters back to zero');
});
t('marking on the track page shifts the next session (the "I already know this" path)', () => {
  R();
  const d3 = f.assignmentFor('2026-08-13', 'b').units.map(u => u.id).join(',');
  f.assignmentFor('2026-08-11', 'b').units.forEach(u => f.setTrackTopic('java', u.id, 'done', u.group, true));
  f.invalidatePlan();
  const now = f.assignmentFor('2026-08-11', 'b').units;
  const day1WasDone = global.__api.state.tracks.java;
  ok(!now.some(u => day1WasDone[u.id] === 'done'), 'day 1 must not re-show completed topics');
  ok(now.length > 0, 'day 1 still has work');
  ok(now[0].id === d3.split(',')[0], 'day 1 now leads with what day 3 previously held: got '
     + now[0].id + ', expected ' + d3.split(',')[0]);
  console.log('        day 1 now starts at: ' + now[0].name.slice(0, 46));
});
t('ticking a prose slot (mock/hands-on) works and touches no queue', () => {
  R();
  const day = f.findDay('2026-08-11').day;
  eq(f.streamForSlot(day, 'c'), null, 'day 1 Slot C is prose');
  f.toggleSlot('2026-08-11', 'c');
  eq(global.__api.state.dailyChecks['2026-08-11'].c, true, 'checked');
  ok(!global.__api.state.dailyLog['2026-08-11'] || !global.__api.state.dailyLog['2026-08-11'].c, 'nothing logged');
  f.toggleSlot('2026-08-11', 'c');
  ok(!global.__api.state.dailyChecks['2026-08-11'].c, 'unchecked cleanly');
});

// ══════════════════════════════════════════════════════════════════════════
S('5. Rotation & slot structure');
t('slots alternate strictly from day 1', () => {
  R();
  const exp = [['java','aws'],['spring','sd'],['java','aws'],['spring','sd']];
  ['2026-08-11','2026-08-12','2026-08-13','2026-08-14'].forEach((d, i) => {
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
t('every scheduled unit is unique across the whole plan', () => {
  R();
  const seen = {}, dupes = [];
  const bd = f.getPlan().byDate;
  Object.keys(bd).forEach(d => ['a','b','c','d'].forEach(sl => {
    const a = bd[d][sl]; if (!a) return;
    a.units.forEach(u => { const k = u.kind === 'gfg' ? u.topic+':'+u.type+':'+u.idx : u.id;
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
['today','weeks','gfg','java','spring','sql','sd','cloud','budget','rules'].forEach(id => {
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
  R(); global.__api.setToday(2026, 8, 9);
  f.renderToday();
  const h = getEl('panel-today').innerHTML;
  ok(h.indexOf('days until the plan begins') > 0, 'countdown shown');
  ok(h.indexOf('Mark as done') < 0, 'preview must not offer ticking');
  ok(h.indexOf('Topics to be added') < 0, 'no leftover placeholder');
});
t('active day shows four slots, pace card and week strip', () => {
  global.__api.setToday(2026, 8, 11); f.renderToday();
  const h = getEl('panel-today').innerHTML;
  eq((h.match(/slot-block/g) || []).length, 4, 'four slot blocks');
  eq((h.match(/Mark as done/g) || []).length, 4, 'four tick rows');
  ok(h.indexOf('Pace ·') > 0, 'pace card present');
  ok(h.indexOf('week-strip') > 0, 'week strip present');
  ok(h.indexOf('Day 1 of') > 0 || getEl('day-pill').textContent.indexOf('Day 1') === 0, 'day pill set');
});
t('post-plan shows the completion state', () => {
  global.__api.setToday(2027, 3, 1); f.renderToday();
  ok(getEl('panel-today').innerHTML.indexOf('Plan complete') > 0, 'completion message');
});
t('2026-11-21 renders as an explicit rest day', () => {
  global.__api.setToday(2026, 11, 21); f.renderToday();
  const h = getEl('panel-today').innerHTML;
  ok(h.indexOf('Rest day · no session scheduled') > 0, 'handled: ' + h.slice(0, 90));
  ok(h.indexOf('slot-block') < 0, 'no slots offered');
  ok(h.indexOf('November 21, 2026') > 0, 'date shown');
  eq(getEl('day-pill').textContent, 'Rest day', 'pill set');
});
t('a buffer day renders its activity only', () => {
  global.__api.setToday(2027, 2, 18); f.renderToday();
  const h = getEl('panel-today').innerHTML;
  ok(h.indexOf('slot-block') < 0, 'no slots on buffer days');
  global.__api.setToday(2026, 8, 11);
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
  R(); f.toggleSlot('2026-08-11', 'a'); f.showWeek(0);
  ok(getEl('week-detail').innerHTML.indexOf('wdr-tick') > 0, 'tick rendered');
});

S('9. UI — GFG tab');
t('renders all 56 topics with inputs', () => {
  R(); f.renderGFG();
  const h = getEl('panel-gfg').innerHTML;
  eq((h.match(/class="topic-row/g) || []).length, 56, '56 topic rows');
  ok(h.indexOf('Reset all GFG progress') > 0, 'reset button');
});
t('updateTopic clamps out-of-range input', () => {
  f.updateTopic('basics-arrays', 'vc', 999, 12, 15);
  eq(global.__api.state.gfg.topics['basics-arrays'].vc, 12, 'clamped to max');
  f.updateTopic('basics-arrays', 'vc', -5, 12, 15);
  eq(global.__api.state.gfg.topics['basics-arrays'].vc, 0, 'clamped to min');
});
t('clampInput mutates the element value', () => {
  const inp = { value: '99' }; f.clampInput(inp, 12); eq(inp.value, 12);
  inp.value = '-3'; f.clampInput(inp, 12); eq(inp.value, 0);
});
t('editing a counter reshuffles the plan immediately', () => {
  R();
  const before = f.assignmentFor('2026-08-11', 'a').units.length;
  f.updateTopic('basics-dsa-intro', 'vc', 2, 2, 0);
  const after = f.assignmentFor('2026-08-11', 'a').units;
  ok(!after.some(u => u.topic === 'basics-dsa-intro'), 'completed topic no longer scheduled');
  ok(before > 0 && after.length > 0, 'still scheduled');
});

S('10. UI — Track tabs');
['java','spring','sql','sd','cloud'].forEach(tr => {
  t(tr + ' tab lists every group and topic', () => {
    R(); f.renderTrackTab(tr);
    const h = getEl('panel-' + tr).innerHTML;
    const nTopics = g.TRACK_DEFS[tr].groups.reduce((a, x) => a + x.topics.length, 0);
    eq((h.match(/class="tr-row/g) || []).length, nTopics, tr + ' topic rows');
    eq((h.match(/class="track-section"/g) || []).length, g.TRACK_DEFS[tr].groups.length, tr + ' groups');
  });
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
  ok(f.assignmentFor('2026-08-11', 'b').units.some(u => u.id === id), 'still scheduled');
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

S('12. Pace card');
t('reads "on plan" at the start, per stream', () => {
  R(); global.__api.setToday(2026, 8, 11);
  const h = f.renderPace();
  ok((h.match(/on plan/g) || []).length >= 5, 'most streams on plan');
  ok(h.indexOf('pace-flag behind') < 0, 'nothing behind on day 1');
});
t('turns red when behind', () => {
  global.__api.setToday(2026, 11, 10);
  const h = f.renderPace();
  ok(h.indexOf('pace-flag behind') > 0, 'behind flag present');
  ok(/\d\.\d× pace/.test(h), 'ratio shown');
});
t('turns green when the backlog is cleared', () => {
  R(); global.__api.setToday(2026, 8, 11);
  g.TRACK_DEFS.sql.groups.forEach(grp => markTrackGroup('sql', grp.id));
  f.invalidatePlan();
  ok(f.renderPace().indexOf('✓ clear') > 0, 'clear flag present');
});

S('13. Persistence');
t('state survives a save/load round trip', () => {
  R();
  f.toggleSlot('2026-08-11', 'd');
  const raw = localStorage.getItem('java-prep-tracker-v2');
  const parsed = JSON.parse(raw);
  eq(parsed.version, '3.0', 'version bumped');
  ok(parsed.dailyLog['2026-08-11'].d.units.length === 4, 'log persisted');
  ok(Object.keys(parsed.tracks.cloud).length === 4, 'track state persisted');
});
t('a legacy v2 state without dailyLog is migrated by loadState', () => {
  localStorage.setItem('java-prep-tracker-v2', JSON.stringify(
    {version:'2.0', gfg:{topics:{}}, dailyChecks:{'2026-08-11':{a:true}}, tracks:{}}));
  const loaded = f.loadState();
  ok(loaded.dailyLog && typeof loaded.dailyLog === 'object', 'dailyLog backfilled');
  ok(loaded.gfg && loaded.gfg.topics, 'gfg preserved');
  eq(loaded.dailyChecks['2026-08-11'].a, true, 'existing checks preserved');
  ok(loaded.tracks && loaded.tracks.java, 'tracks backfilled');
});
t('a corrupt state falls back to defaults instead of throwing', () => {
  localStorage.setItem('java-prep-tracker-v2', '{not valid json');
  const loaded = f.loadState();
  ok(loaded.gfg && loaded.dailyChecks && loaded.tracks, 'defaults returned');
  eq(Object.keys(loaded.dailyChecks).length, 0, 'clean slate');
});

// ══════════════════════════════════════════════════════════════════════════
S('14. Order integrity — the queue is never reordered or skipped');
t('scheduled units follow curriculum order exactly, for every stream', () => {
  R();
  Object.keys(g.STREAMS).forEach(st => {
    const order = {}; f.streamUnits(st).forEach((u, i) => {
      order[u.kind === 'gfg' ? u.topic+':'+u.type+':'+u.idx : u.id] = i; });
    let prev = -1;
    sessionsFor(st).forEach(s => s.units.forEach(u => {
      const k = u.kind === 'gfg' ? u.topic+':'+u.type+':'+u.idx : u.id;
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
console.log('\n' + '═'.repeat(70));
console.log('\x1b[1m  ' + pass + ' passed, ' + fail + ' failed\x1b[0m');
if (fails.length) { console.log('\n  Failures:'); fails.forEach(x => console.log('   • ' + x)); }
console.log('═'.repeat(70));
process.exit(fail ? 1 : 0);
