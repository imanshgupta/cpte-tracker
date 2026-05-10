// ── STORAGE ──
var SK='cpte_tracker_v1';

function save(key,val){
  try{localStorage.setItem(SK+'_'+key,JSON.stringify(val));}catch(e){}
  if(window.firebaseDB && currentUser){
    var patch={};patch[key]=val;
    window.firestoreSetDoc(
      window.firestoreDoc(window.firebaseDB,'users',currentUser.uid),
      patch,{merge:true}
    ).catch(function(e){console.error('Firestore write:',e);});
  }
}

function load(key,def){try{var v=localStorage.getItem(SK+'_'+key);return v!=null?JSON.parse(v):def;}catch(e){return def;}}

// ── AUTHENTICATION ──
var currentUser = null;

function handleAuth(){
  if(currentUser){
    window.signOut(window.firebaseAuth).catch(function(e){console.error(e);});
  } else {
    window.signInWithPopup(window.firebaseAuth,window.firebaseProvider)
      .catch(function(e){console.error('Sign in error:',e);});
  }
}

function updateAuthUI(user){
  var btn=document.getElementById('auth-btn');
  if(!btn)return;
  if(user){
    btn.textContent='Sign Out ('+user.displayName+')';
    btn.classList.add('signed-in');
  } else {
    btn.textContent='Sign In with Google';
    btn.classList.remove('signed-in');
  }
}

function loadFromFirestore(uid){
  window.firestoreGetDoc(window.firestoreDoc(window.firebaseDB,'users',uid))
    .then(function(snap){
      if(!snap.exists())return;
      var d=snap.data();
      if(d.states){CS=d.states;try{localStorage.setItem(SK+'_states',JSON.stringify(CS));}catch(e){}}
      if(d.chk){chkStates=d.chk;try{localStorage.setItem(SK+'_chk',JSON.stringify(chkStates));}catch(e){}}
      if(d.logs){try{localStorage.setItem(SK+'_logs',JSON.stringify(d.logs));}catch(e){}}
      if(d.streak!==undefined){try{localStorage.setItem(SK+'_streak',JSON.stringify(d.streak));}catch(e){}}
      renderAll();
      chkStates.forEach(function(v,i){
        var box=document.getElementById('chk-'+i);var lbl=document.getElementById('cl'+i);
        if(box){if(v)box.classList.add('checked');else box.classList.remove('checked');}
        if(lbl){if(v)lbl.classList.add('done');else lbl.classList.remove('done');}
      });
      renderLogs(d.logs||[]);
      document.getElementById('m-streak').textContent=d.streak||0;
      updateAll();
    })
    .catch(function(e){console.error('Firestore load:',e);});
}

function showSignInOverlay(){document.getElementById('signin-overlay').classList.add('visible');}
function hideSignInOverlay(){document.getElementById('signin-overlay').classList.remove('visible');}
function dismissSignIn(){hideSignInOverlay();}

// Bridge: Firebase module script fires this event when auth state changes
window.addEventListener('auth-state-changed',function(e){
  var user=e.detail.user;
  currentUser=user;
  updateAuthUI(user);
  if(user){
    hideSignInOverlay();
    if(window.firebaseDB){loadFromFirestore(user.uid);}
  } else {
    showSignInOverlay();
  }
});

var CS={};
var chkStates=[false,false,false,false];
var currentCalFilter='all';
var TARGET=new Date('2026-08-10');
var DAY1=new Date('2026-05-10');

var QUOTES=[
  {q:"She doesn't chase — she arrives. Study like the woman who already has everything.",i:"🚗 👜 💎"},
  {q:"A Porsche doesn't apologise for its speed. Neither should you for your ambition.",i:"🏎️ ✨"},
  {q:"The bag matches the shoes. The preparation matches the result.",i:"👜 👠"},
  {q:"She wore confidence like a signature scent — impossible to ignore.",i:"🌹 💫"},
  {q:"Luxury is earned, not given. So is that pass mark.",i:"💎 🔑"},
  {q:"Drive like you own the road. Study like you own the exam.",i:"🚗 📖"},
  {q:"Power women don't wait for permission. They prepare.",i:"💼 🔥"},
  {q:"The fuel in her tank? Discipline. The destination? August 10th.",i:"⛽ 🎯"},
  {q:"Perfume fades. Knowledge doesn't. Leave both lasting impressions.",i:"🌸 💡"},
  {q:"Her morning routine: coffee, case prep, conquer.",i:"☕ 🗣️ 💪"},
  {q:"A queen doesn't skip recall hour.",i:"👑 🔁"},
  {q:"She didn't find the time. She made it.",i:"⏰ 💫"},
  {q:"Fast cars need good engines. Great careers need great foundations.",i:"🏎️ 🔧"},
  {q:"She moves in silence. Only results make noise.",i:"🤫 📊"},
  {q:"Every verbalization today is one less nerve on exam day.",i:"🎙️ 🧠"},
  {q:"High standards, higher scores.",i:"⬆️ 📈"},
  {q:"She showed up when she didn't want to. That's why she won.",i:"💪 🏆"},
  {q:"She built her future case by case, lecture by lecture.",i:"🏗️ ✨"},
  {q:"She treated her study plan like a business plan — non-negotiable.",i:"📋 💼"},
  {q:"No one remembers the doubt. They remember the result.",i:"🏆 💎"},
  {q:"Every case mastered is a debt to herself paid.",i:"✅ 👑"},
  {q:"She prepared in private to perform in public.",i:"🎭 🔑"},
  {q:"First the practice cases. Then the world.",i:"📋 🌍"},
  {q:"The recall hour is the power hour.",i:"⚡ 🔁"},
  {q:"She logged. She adjusted. She improved. That's the system.",i:"📊 🔄"},
  {q:"Progress over perfection — but never below her standard.",i:"📈 ⭐"},
  {q:"She wore her work ethic like a Birkin — always on her arm.",i:"👜 💪"},
  {q:"August 10th isn't a deadline. It's her delivery date.",i:"📦 🎁"},
  {q:"She didn't need motivation every day. She needed discipline.",i:"🔧 💎"},
  {q:"Today's prep is tomorrow's confidence.",i:"🗣️ 💫"},
  {q:"High heels, higher goals.",i:"👠 🎯"},
  {q:"She is the plan. She is the deadline. She is the result.",i:"💎 👑"},
  {q:"Work like a CEO. Study like a scholar. Arrive like a queen.",i:"💼 📚 👑"},
  {q:"No shortcut to a licence. Only the long, beautiful road she paved herself.",i:"🚗 🛣️"},
  {q:"She collects wins the way others collect handbags — deliberately.",i:"👜 🏆"},
  {q:"She pressed play on the lecture. The rest was history.",i:"▶️ 📚"},
  {q:"She didn't have time for excuses. She had a deadline.",i:"⏰ 💪"},
  {q:"The difference between her and everyone else? She showed up.",i:"✨ 🏆"},
  {q:"She upgrades her knowledge the way she upgrades her wardrobe — intentionally.",i:"📚 ✨"},
  {q:"She ran at full capacity, like the car she deserves to drive.",i:"🏎️ 💨"},
  {q:"The exam doesn't know how tired she was. It only sees what she learned.",i:"📝 💡"},
  {q:"Every expert was once a beginner who refused to quit.",i:"🌱 🌳"},
  {q:"She studied harder than she shopped. And she shops seriously.",i:"🛍️ 📚"},
  {q:"Success is just preparation meeting opportunity. She had both.",i:"🤝 🏆"},
  {q:"She treated every recall like a test run for the real thing.",i:"🔁 🎯"},
  {q:"She moves like she's already booked the celebration dinner.",i:"🍾 👠"},
  {q:"Discipline is choosing the lecture over the distraction. Every. Single. Time.",i:"📖 🎯"},
  {q:"She knows the framework. She built the framework. She IS the framework.",i:"🧠 💪"}
];

var CASES={
  practice:['Hip pain','CP case','COPD','TKR','Sub acute stroke','Post CABG x Day 3','CP case (2)','Geriatrics — recurrent falls','MSK constructive ACL','COPD exacerbation recovery','Ethics pure','Integumentary — diabetic foot ulcers','Communication ethics','Grade 2 Ankle sprain','PD','CHF','Pedia developmental delay','SCI T12','Post pneumonia recovery','Plantar fasciitis','ORIF','MS Relapse','Ethics','Rt. shoulder pain','ACL injury','Pregnancy + CTS','TBI','Restrictive lung disease','Asthma','Aspiration pneumonia','Spina bifida','MVA consciousness','LBP','Cystic fibrosis','Surgery + intubated','ALS + Aspiration','Rib fracture','Frozen shoulder','Shoulder arthroplasty','Lateral epicondyle','CTS ortho','Hip replacement','ORIF (2)','Knee replacement','Knee OA','Ankle sprain','GBS','Stroke','SCI level T10','Parkinson\'s','ALS','SCI level L3','CP','CP + Pulmonary','Spina bifida (2)','Ethics probing','Ethics conflict'],
  cardio:['CABG x D3','Dyspnea','Dyspnea (2)','MI + exercise tolerance','PTCA','Dyspnea on mild exertion','Atrial fibrillation','Post aortic valve replacement','Pleural edema secondary to CHF','Intolerance to exercise in Cardio','MI + Venous Insufficiency','Week 6 post CABG','Angina + walking pain','Ablation','Dyspnea (3)','PCI Artery','Unstable Angina','Valve repair','Swelling in legs','CABG x D5','CABG x D2 Tx','Low CVS capacity Tx — Age 72','MI Tx','PTCA Tx','Dyspnea Tx'],
  pulmo:['Asthma','Acute case','Gen case','ICU case'],
  msk:['FS','Impingement','TOS','Lat epi','Golfer\'s elbow','Humerus Fracture','CTS','UITT-nerve','C6 nerve root involvement','Colles #','Wrist RA','Knee OA','ACL tear conservative + all rehab','Ankle sprain','Plantar fasciitis','Medial 1/3rd knee pain Tibia','Hip groin pain — FADIR +ve','ORIF hip','Piriformis vs lumbar radiculopathy','Knee pain','Knee instability — pop sound — Ant.','Plantar Fasciitis (2)','Ant compartment pain — hop test Tibia','GT pain — hip OA','Knee runner','LBP — radiculopathy','Knee ligament','Hip pain','Calf pain','Knee posterior pain','Hip pain — young clicking sound','Knee pain lat joint line','PFPS','Hip OA','Knee pain generic case','Callus under metatarsal — heel pain','Hamstring strain','Calf bruising','Lower leg radiculopathy','Foot pain','Front thigh pain','TA tendon pain','Metatarsalgia','# Medial meniscus','Foot pain — DDx','Mid gastro pain','Lower leg pain — anterior tenderness','Hip pain (3)','Medial malleolus tenderness — Ankle'],
  neuro:['PD','GBS','MS','SCI T12','Vestibular neuritis','MG','Peripheral neuropathy','Cerebellar ataxia','Brown-Sequard + TBI','Stroke','MS again but different','Post SCI Lower Limb Spasticity','Impaired Sequencing Case (Apraxia)','Wide BOS impaired stability','Progressive limb weakness','Balance','TBI','SCI T6 — Paraplegia','NPH','EMA 69 retired — Dynamic Balance','CIDP case','Unilateral neglect','Cerebellar ataxia (2)','Neurological deficits','Imbalance & impulsive','Limited motor below T5','Foot drop','LL weakness Stroke','TBI (2)','Left MCA','ACA infarct','MS (2)','C7 incomplete SCI','Paraplegia below T6','Normal pressure hydrocephalus','Subdural hematoma','CIDP','Frontal lobe tumor','Ataxic CP','Peripheral neuropathy (2)','Parietal lobe tumor','Moderate TBI','Post L4 SCI Asia C','SCI + Brown Sequard','Wernicke\'s encephalopathy','Progressive ALS','Foot drop (2)','Basal ganglia stroke','Cerebellar stroke','Left MCA (2)','GBS (2)'],
  other:['Amputation','Deep burns','Post stroke','Polio','GBS','Atelectasis','Rib #','Ankle sprain','TOS vs UITT','MI','(blank — in progress)','(blank — in progress)','(blank — in progress)']
};
var MSK_GROUPS={'Shoulder/Elbow/Wrist':[0,1,2,3,4,5,6,7,8,9,10],'Knee':[11,19,20,24,26,29,31,32,34],'Hip':[16,23,27,30,33],'Ankle/Foot':[13,14,15,35,36,41,42,45,48],'Back/Radiculopathy':[18,25,38],'Lower limb — other':[28,36,37,39,40,46],'Other MSK':[12,17,21,22,43,44]};
var NEURO_GROUPS={'Stroke/Vascular':[9,27,29,30,47,48,49],'SCI':[3,11,17,25,32,33,42,43],'TBI':[8,16,28,41],'MS':[2,10,31],'GBS':[1,50],'PD/ALS/MG':[0,5,45],'Balance/Ataxia/Vestibular':[4,7,13,14,15,22],'Other Neuro':[6,12,18,19,20,21,23,24,26,34,35,36,37,38,39,40,44]};
var NEURO_OV={25:'overlap:SCI'};
var OTHER_OV={2:'overlap:Neuro',4:'overlap:Neuro',5:'overlap:Pulmo'};
var SYS_TOTALS={practice:57,cardio:25,pulmo:4,msk:49,neuro:51,other:13};
var MCQS={
  c:[{id:'mcq-c1',n:'Cardio (5 lecs)'},{id:'mcq-c2',n:'Cardio latest (2 lecs)'}],
  p:[{id:'mcq-p1',n:'Pulmo (4 lecs)'},{id:'mcq-p2',n:'Pulmo latest (2 lecs)'}],
  m:[{id:'mcq-m1',n:'Shoulder SH (5 lecs)'},{id:'mcq-m2',n:'Elbow · Wrist (6 lecs)'},{id:'mcq-m3',n:'Pelvis · Hip (4 lecs)'},{id:'mcq-m4',n:'Knee · Ankle · Spine (8 lecs)'},{id:'mcq-m5',n:'Amp · Gait · OP · RA · Orthotics (7 lecs)'}],
  n:[{id:'mcq-n1',n:'MS · MS+ALS (2 lecs)'},{id:'mcq-n2',n:'Parkinson\'s (2 lecs)'},{id:'mcq-n3',n:'GBS · GBS+Polio (2 lecs)'},{id:'mcq-n4',n:'SCI (4 lecs)'},{id:'mcq-n5',n:'Stroke (3 lecs)'},{id:'mcq-n6',n:'TBI · TBI again (3 lecs)'},{id:'mcq-n7',n:'Vestibular · Preg again (2 lecs)'}],
  o:[{id:'mcq-o1',n:'Other system-1 (4 lecs)'},{id:'mcq-o2',n:'Other system-2 (7 lecs)'}],
  e:[{id:'mcq-e1',n:'Ethics written — batch 1 (5 lecs)'},{id:'mcq-e2',n:'Ethics written — batch 2 (5 lecs)'},{id:'mcq-e3',n:'Ethics written — batch 3 (5 lecs)'}]
};
var MCQ_DAY_DETAIL={};
(function(){var lecs=[{days:[11,12],n:'Cardio (5 lecs) — part 1'},{days:[13,14],n:'Cardio (5 lecs) — part 2'},{days:[15,16,17],n:'Cardio latest (2 lecs)'},{days:[18,19,20],n:'Pulmo (4 lecs) — part 1'},{days:[21,22,23],n:'Pulmo latest (2 lecs)'},{days:[24,25,26,27,28,29],n:'Shoulder SH (5 lecs)'},{days:[30,31,32,33,34,35],n:'Elbow · Wrist (6 lecs)'},{days:[36,37,38,39],n:'Pelvis · Hip (4 lecs)'},{days:[40,41,42,43,44,45,46,47],n:'Knee · Ankle · Spine (8 lecs)'},{days:[48,49,50,51,52,53],n:'Amp · Gait · OP · RA · Orthotics (7 lecs)'},{days:[54,55],n:'MS · MS+ALS (2 lecs)'},{days:[56,57],n:'Parkinson\'s (2 lecs)'},{days:[58,59],n:'GBS · GBS+Polio (2 lecs)'},{days:[60,61,62,63],n:'SCI (4 lecs)'},{days:[64,65,66],n:'Stroke (3 lecs)'},{days:[67,68,69],n:'TBI · TBI again (3 lecs)'},{days:[70,71],n:'Vestibular · Preg again (2 lecs)'},{days:[72,73,74,75],n:'Other system-1 (4 lecs)'},{days:[76,77,78,79,80],n:'Other system-2 (7 lecs)'},{days:[81],n:'Ethics written — batch 1 (5 lecs)'},{days:[82],n:'Ethics written — batch 2 (5 lecs)'},{days:[83],n:'Ethics written — batch 3 (5 lecs)'}];lecs.forEach(function(l){l.days.forEach(function(d){MCQ_DAY_DETAIL[d]=l.n;});});})();

function buildCalendar(){var cal=[];var pc=CASES.practice;var idx=0;for(var day=1;day<=10;day++){var count=6;if(day===10)count=pc.length-idx;if(idx+count>pc.length)count=pc.length-idx;var cases=pc.slice(idx,idx+count);idx+=count;var dt=new Date(DAY1);dt.setDate(dt.getDate()+(day-1));cal.push({day:day,date:new Date(dt),dow:dt.toLocaleDateString('en-GB',{weekday:'short'}),phase:1,phaseName:'Practice',cases:cases,mcq:null,mcqDetail:null,recall:day>1?cal[day-2].cases[0]:null});}var p2c=[];CASES.cardio.forEach(function(c){p2c.push({c:c,sys:'Cardio'});});CASES.pulmo.forEach(function(c){p2c.push({c:c,sys:'Pulmo'});});CASES.msk.forEach(function(c){p2c.push({c:c,sys:'MSK'});});CASES.neuro.forEach(function(c){p2c.push({c:c,sys:'Neuro'});});CASES.other.forEach(function(c){p2c.push({c:c,sys:'Other'});});var mcqMap={};for(var i=11;i<=17;i++)mcqMap[i]='Cardio MCQ';for(var i=18;i<=23;i++)mcqMap[i]='Pulmo MCQ';for(var i=24;i<=53;i++)mcqMap[i]='MSK MCQ';for(var i=54;i<=71;i++)mcqMap[i]='Neuro MCQ';for(var i=72;i<=80;i++)mcqMap[i]='Other system MCQ';for(var i=81;i<=83;i++)mcqMap[i]='Ethics MCQ';var p2idx=0;for(var day=11;day<=83;day++){var dt2=new Date(DAY1);dt2.setDate(dt2.getDate()+(day-1));var dow2=dt2.toLocaleDateString('en-GB',{weekday:'short'});var count2=dow2==='Thu'?3:2;var dc=[];for(var j=0;j<count2&&p2idx<p2c.length;j++){dc.push(p2c[p2idx++]);}var sys=dc[0]?dc[0].sys:'Buffer';var prev=cal[day-2];var recall=null;if(prev&&prev.cases&&prev.cases.length>0){recall=prev.cases[0];if(typeof recall==='object'&&recall.c)recall=recall.c;}cal.push({day:day,date:new Date(dt2),dow:dow2,phase:2,phaseName:sys,cases:dc.map(function(x){return x.c;}),sys:sys,mcq:mcqMap[day]||'Buffer',mcqDetail:MCQ_DAY_DETAIL[day]||mcqMap[day]||'Buffer',recall:recall});}return cal;}
var CALENDAR=buildCalendar();

function getDayNum(){var now=new Date();now.setHours(0,0,0,0);var d1=new Date(DAY1);d1.setHours(0,0,0,0);return Math.max(1,Math.min(83,Math.ceil((now-d1)/(1000*60*60*24))+1));}

function rowClass(id){var s=CS[id];return 'cr'+(s?' s-'+s:'');}
function buildRow(sys,i,name,ov){var id=sys+'-'+i;return '<div class="'+rowClass(id)+'" id="row-'+id+'"><span class="cn">'+name+(ov?'<span class="ot">'+ov+'</span>':'')+'</span><div class="state-btns"><button class="sb sb-r" onclick="setC(\''+id+'\',\'read\')">Read</button><button class="sb sb-v" onclick="setC(\''+id+'\',\'revision\')">Revision</button><button class="sb sb-c" onclick="setC(\''+id+'\',\'confident\')">Confident</button></div></div>';}
function buildMCQRow(item){return '<div class="'+rowClass(item.id)+'" id="row-'+item.id+'"><span class="cn">'+item.n+'</span><div class="state-btns"><button class="sb sb-r" onclick="setC(\''+item.id+'\',\'read\')">Read</button><button class="sb sb-v" onclick="setC(\''+item.id+'\',\'revision\')">Revision</button><button class="sb sb-c" onclick="setC(\''+item.id+'\',\'confident\')">Done</button></div></div>';}
function buildFlat(sys,cases,ovs){return cases.map(function(n,i){return buildRow(sys,i,n,ovs&&ovs[i]?ovs[i]:null);}).join('');}
function buildGrouped(sys,cases,groups,ovMap){return Object.keys(groups).map(function(grpName){var idxs=groups[grpName].filter(function(i){return i<cases.length;});var gid=sys+'_g_'+grpName.replace(/[^a-z0-9]/gi,'_');var cf=idxs.filter(function(i){return CS[sys+'-'+i]==='confident';}).length;return '<div class="ah" onclick="toggleGrp(\''+gid+'\')"><span class="at">'+grpName+'</span><div style="display:flex;align-items:center;gap:8px"><span id="'+gid+'_cnt" style="font-size:11px;color:#888">'+cf+'/'+idxs.length+'</span><span style="font-size:18px;color:#888;transition:transform 0.2s;line-height:1" id="'+gid+'_chev">›</span></div></div><div id="'+gid+'_body" class="ab" style="display:none">'+idxs.map(function(i){return buildRow(sys,i,cases[i],ovMap&&ovMap[i]?ovMap[i]:null);}).join('')+'</div>';}).join('');}
function toggleGrp(gid){var b=document.getElementById(gid+'_body');var ch=document.getElementById(gid+'_chev');if(!b)return;var open=b.style.display==='block';b.style.display=open?'none':'block';if(ch)ch.style.transform=open?'':'rotate(90deg)';}

function renderAll(){
  document.getElementById('practice-list').innerHTML=buildFlat('practice',CASES.practice,{});
  document.getElementById('cardio-list').innerHTML=buildFlat('cardio',CASES.cardio,{});
  document.getElementById('pulmo-list').innerHTML=buildFlat('pulmo',CASES.pulmo,{});
  document.getElementById('msk-list').innerHTML=buildGrouped('msk',CASES.msk,MSK_GROUPS,{});
  document.getElementById('neuro-list').innerHTML=buildGrouped('neuro',CASES.neuro,NEURO_GROUPS,NEURO_OV);
  document.getElementById('other-list').innerHTML=buildFlat('other',CASES.other,OTHER_OV);
  document.getElementById('mcq-c-list').innerHTML=MCQS.c.map(buildMCQRow).join('');
  document.getElementById('mcq-p-list').innerHTML=MCQS.p.map(buildMCQRow).join('');
  document.getElementById('mcq-m-list').innerHTML=MCQS.m.map(buildMCQRow).join('');
  document.getElementById('mcq-n-list').innerHTML=MCQS.n.map(buildMCQRow).join('');
  document.getElementById('mcq-o-list').innerHTML=MCQS.o.map(buildMCQRow).join('');
  document.getElementById('mcq-e-list').innerHTML=MCQS.e.map(buildMCQRow).join('');
}

function setC(id,level){if(CS[id]===level){delete CS[id];}else{CS[id]=level;}var row=document.getElementById('row-'+id);if(row)row.className=rowClass(id);save('states',CS);updateGroupCounts(id);updateAll();}

function updateGroupCounts(id){var sys=id.split('-')[0];var groups=sys==='msk'?MSK_GROUPS:sys==='neuro'?NEURO_GROUPS:null;if(!groups)return;Object.keys(groups).forEach(function(grpName){var idxs=groups[grpName].filter(function(i){return i<CASES[sys].length;});var gid=sys+'_g_'+grpName.replace(/[^a-z0-9]/gi,'_');var cnt=document.getElementById(gid+'_cnt');if(!cnt)return;cnt.textContent=idxs.filter(function(i){return CS[sys+'-'+i]==='confident';}).length+'/'+idxs.length;});}

function updateAll(){
  var totalCf=0;Object.keys(CS).forEach(function(k){if(!k.startsWith('mcq-')&&CS[k]==='confident')totalCf++;});
  document.getElementById('m-cases').textContent=totalCf;
  var mcqDone=0,mcqRd=0,mcqRv=0;Object.keys(CS).forEach(function(k){if(!k.startsWith('mcq-'))return;if(CS[k]==='confident')mcqDone++;else if(CS[k]==='read')mcqRd++;else if(CS[k]==='revision')mcqRv++;});
  document.getElementById('m-mcq').textContent=mcqDone;
  document.getElementById('mcq-count').textContent=mcqDone+'/88';
  document.getElementById('bar-mcq-ov').style.width=Math.round((mcqDone/88)*100)+'%';
  var totalMcq=Object.keys(MCQS).reduce(function(a,k){return a+MCQS[k].length;},0);
  var mcqNs=totalMcq-mcqRd-mcqRv-mcqDone;if(mcqNs<0)mcqNs=0;
  var mel=document.getElementById('sc-mcq-ov');if(mel){var mh='';if(mcqNs>0)mh+='<span class="sp sns">'+mcqNs+' not started</span>';if(mcqRd>0)mh+='<span class="sp srd">'+mcqRd+' read</span>';if(mcqRv>0)mh+='<span class="sp srv">'+mcqRv+' revision</span>';if(mcqDone>0)mh+='<span class="sp scf">'+mcqDone+' done</span>';mel.innerHTML=mh;}
  Object.keys(SYS_TOTALS).forEach(function(sys){
    var total=SYS_TOTALS[sys];var cases=CASES[sys];
    var mini=document.getElementById('mini-'+sys);var bar=document.getElementById('bar-'+sys);var cnt=document.getElementById('cnt-'+sys);var badge=document.getElementById(sys+'-badge');var scEl=document.getElementById('sc-'+sys);
    if(!mini||!cases)return;mini.innerHTML='';var cf=0,rd=0,rv=0;
    cases.forEach(function(n,i){var s=CS[sys+'-'+i];var dot=document.createElement('div');dot.className='md';if(s==='read'){dot.classList.add('read');rd++;}else if(s==='revision'){dot.classList.add('revision');rv++;}else if(s==='confident'){dot.classList.add('confident');cf++;}mini.appendChild(dot);});
    var ns=total-rd-rv-cf;if(ns<0)ns=0;
    if(bar)bar.style.width=Math.round((cf/total)*100)+'%';if(cnt)cnt.textContent=cf+'/'+total;if(badge)badge.textContent=cf+'/'+total;
    if(scEl){var sh='';if(ns>0)sh+='<span class="sp sns">'+ns+' not started</span>';if(rd>0)sh+='<span class="sp srd">'+rd+' read</span>';if(rv>0)sh+='<span class="sp srv">'+rv+' revision</span>';if(cf>0)sh+='<span class="sp scf">'+cf+' confident</span>';scEl.innerHTML=sh;}
  });
  var now=new Date();now.setHours(0,0,0,0);document.getElementById('m-days').textContent=Math.max(0,Math.ceil((TARGET-now)/(1000*60*60*24)));}

document.getElementById('tab-bar').addEventListener('click',function(e){var btn=e.target.closest('.tb');if(!btn)return;var tab=btn.getAttribute('data-tab');if(!tab)return;document.querySelectorAll('#tab-bar .tb').forEach(function(b){b.classList.remove('active');});btn.classList.add('active');document.querySelectorAll('.sec').forEach(function(s){s.classList.remove('active');});var sec=document.getElementById('sec-'+tab);if(sec)sec.classList.add('active');if(tab==='calendar')renderCalendar();});

function toggleChk(idx){chkStates[idx]=!chkStates[idx];var box=document.getElementById('chk-'+idx);var lbl=document.getElementById('cl'+idx);if(box){if(chkStates[idx])box.classList.add('checked');else box.classList.remove('checked');}if(lbl){if(chkStates[idx])lbl.classList.add('done');else lbl.classList.remove('done');}save('chk',chkStates);}

function updateToday(){var dn=getDayNum();var entry=CALENDAR[dn-1]||CALENDAR[0];document.getElementById('phase-day-badge').textContent='Day '+entry.day;if(entry.phase===1){document.getElementById('phase-title').textContent='Phase 1 — Practice cases (Days 1–10)';document.getElementById('phase-sub').textContent='Verbalization only · no MCQ · 5–6 cases/day';document.getElementById('mcq-title').textContent='⏸ Phase 1: No MCQ today';document.getElementById('mcq-detail').textContent='MCQ begins Day 11 · focus entirely on verbalization today';document.getElementById('mcq-today-box').style.display='none';document.getElementById('cl2').textContent='(skip — Phase 1)';document.getElementById('today-mcq-sub').textContent='';}else{document.getElementById('phase-title').textContent='Phase 2 — '+entry.sys+' (Day '+entry.day+')';document.getElementById('phase-sub').textContent='MCQ + Verbalization synced daily';document.getElementById('mcq-title').textContent='📖 MCQ lecture — '+entry.sys;document.getElementById('mcq-detail').textContent='Today\'s lecture:';document.getElementById('mcq-today-box').style.display='block';document.getElementById('mcq-today-text').textContent=entry.mcqDetail||entry.mcq;document.getElementById('cl2').textContent='MCQ lecture done';document.getElementById('today-mcq-sub').textContent='📚 '+entry.mcqDetail;}document.getElementById('today-case').textContent=entry.cases.join(' · ')||'Buffer day';var verbListEl=document.getElementById('verb-list');if(entry.cases&&entry.cases.length>0){verbListEl.style.display='block';verbListEl.innerHTML=entry.cases.map(function(c){return '<div class="verb-list-item">▸ '+c+'</div>';}).join('');}else{verbListEl.style.display='none';}if(entry.recall){document.getElementById('rcl-box').style.display='block';document.getElementById('rcl-pending').style.display='none';document.getElementById('rcl-name').textContent=entry.recall;document.getElementById('today-recall-sub').textContent='🔁 Recall: '+entry.recall;}else{document.getElementById('rcl-box').style.display='none';document.getElementById('rcl-pending').style.display='block';document.getElementById('today-recall-sub').textContent='';}}

function renderCalendar(){var todayDn=getDayNum();var phaseColors={Practice:'#1A3A5C',Cardio:'#E24B4A',Pulmo:'#1D9E75',MSK:'#534AB7',Neuro:'#185FA5',Other:'#BA7517',Buffer:'#888'};var html='';CALENDAR.forEach(function(e){var show=currentCalFilter==='all'||(currentCalFilter==='phase1'&&e.phase===1)||(currentCalFilter==='cardio'&&e.sys==='Cardio')||(currentCalFilter==='pulmo'&&e.sys==='Pulmo')||(currentCalFilter==='msk'&&e.sys==='MSK')||(currentCalFilter==='neuro'&&e.sys==='Neuro')||(currentCalFilter==='other'&&(e.sys==='Other'||e.day>=76));if(!show)return;var isToday=e.day===todayDn;var col=phaseColors[e.phaseName]||phaseColors[e.sys]||'#888';html+='<div class="day-card'+(isToday?' is-today':'')+'" style="border-left-color:'+col+'"><div style="display:flex;align-items:center;justify-content:space-between;gap:6px;margin-bottom:4px"><div class="day-num">DAY '+e.day+' · '+e.dow.toUpperCase()+' '+e.date.toLocaleDateString('en-GB',{day:'numeric',month:'short'})+(isToday?' 👈 TODAY':'')+'</div><span class="badge" style="background:'+col+';color:#fff;font-size:10px">'+e.phaseName+'</span></div><div class="day-case">'+e.cases.slice(0,2).join(' · ')+(e.cases.length>2?' +'+String(e.cases.length-2)+' more':'')+'</div>'+(e.phase===2&&e.mcqDetail?'<div class="day-mcq">📚 '+e.mcqDetail+'</div>':'')+(e.recall?'<div class="day-recall">🔁 '+e.recall+'</div>':'')+'</div>';});document.getElementById('cal-content').innerHTML=html||'<div style="font-size:12px;color:#888">No days found.</div>';if(currentCalFilter==='all'){setTimeout(function(){var el=document.querySelector('.day-card.is-today');if(el)el.scrollIntoView({behavior:'smooth',block:'center'});},100);}}
function calFilter(f,btn){currentCalFilter=f;document.querySelectorAll('.cal-filter button').forEach(function(b){b.classList.remove('active');});btn.classList.add('active');renderCalendar();}

function updateQuote(){var now=new Date();var seed=(now.getFullYear()*10000)+((now.getMonth()+1)*100)+now.getDate();var q=QUOTES[seed%QUOTES.length];document.getElementById('motiv-quote').textContent=q.q;document.getElementById('motiv-icons').textContent=q.i;document.getElementById('motiv-day').textContent=getDayNum();var now2=new Date();now2.setHours(0,0,0,0);document.getElementById('motiv-days').textContent=Math.max(0,Math.ceil((TARGET-now2)/(1000*60*60*24)));}

function saveLog(){var txt=document.getElementById('log-input').value.trim();if(!txt)return;var status=document.getElementById('log-status').value;var dateStr=new Date().toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'});var logs=load('logs',[]);logs.unshift({date:dateStr,text:txt,status:status});if(logs.length>60)logs=logs.slice(0,60);save('logs',logs);var streak=load('streak',0)+1;save('streak',streak);document.getElementById('m-streak').textContent=streak;document.getElementById('log-input').value='';renderLogs(logs);}
function renderLogs(logs){var el=document.getElementById('log-list');if(!logs||!logs.length){el.innerHTML='<div style="font-size:12px;color:#888">No logs yet.</div>';return;}var sc2={good:'#1A4D2E',behind:'#c0392b',ahead:'#534AB7'};var sl={good:'✅ On track',behind:'😅 Fell behind',ahead:'🚀 Ahead'};el.innerHTML=logs.map(function(l){return '<div class="log-entry"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-weight:700;font-size:11px">'+l.date+'</span><span class="badge" style="background:transparent;border:1.5px solid '+sc2[l.status]+';color:'+sc2[l.status]+';font-size:10px">'+sl[l.status]+'</span></div>'+l.text+'</div>';}).join('');}

// ── INIT: read from localStorage synchronously, render, show ──
(function init(){
  CS=load('states',{});
  chkStates=load('chk',[false,false,false,false]);
  renderAll();
  chkStates.forEach(function(v,i){if(!v)return;var box=document.getElementById('chk-'+i);var lbl=document.getElementById('cl'+i);if(box)box.classList.add('checked');if(lbl)lbl.classList.add('done');});
  var logs=load('logs',[]);renderLogs(logs);
  var streak=load('streak',0);document.getElementById('m-streak').textContent=streak;
  updateQuote();updateToday();updateAll();
  document.getElementById('loading-screen').style.display='none';
  document.getElementById('app').style.display='block';
})();

// ── PWA install prompt ──
var deferredPrompt;
window.addEventListener('beforeinstallprompt',function(e){
  e.preventDefault();
  deferredPrompt=e;
  var installBtn=document.createElement('button');
  installBtn.innerText='Install App';
  installBtn.style.cssText='position:fixed;bottom:20px;right:20px;padding:10px 18px;background:#1A4D2E;color:#B8F0CC;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;z-index:9999;box-shadow:0 2px 8px rgba(0,0,0,0.2)';
  document.body.appendChild(installBtn);
  installBtn.addEventListener('click',async function(){
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt=null;
    installBtn.remove();
  });
});
