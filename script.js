const body = document.body;
const app = document.getElementById('app');
const loadingScreen = document.getElementById('loading-screen');
const warningModal = document.getElementById('warning-modal');
const warningButton = document.getElementById('warning-button');
const loadBar = document.getElementById('load-bar');
const loadStatus = document.getElementById('load-status');
const loadHex = document.getElementById('load-hex');

const loadingMessages = [
  'INITIALIZING SECURE CHANNEL...',
  'VERIFYING INCIDENT DATABASE...',
  'DECRYPTING ARCHIVED LOGS...',
  'SCANNING INTERNAL RECORDS...',
  'AUTHENTICATING CSIRT ACCESS...',
  'MOUNTING FORENSIC SNAPSHOTS...',
  'LOADING THREAT INTELLIGENCE...',
  'FINALIZING INCIDENT REPORT...'
];

let progress = 0;
let msgIndex = 0;

window.addEventListener('error', (e) => {
  console.log('SCRIPT ERROR:', e.message);
});

function proceedToMain(){
  if(warningModal){
    warningModal.classList.add('hidden');
  }

  if(app){
    app.classList.remove('hidden');
  }

  body.classList.remove('loading');

  try{
    initializeAnimations();
  }catch(e){
    console.log(e);
  }

  try{
    startTerminalTyping();
  }catch(e){
    console.log(e);
  }

  try{
    startExfiltrationFeed();
  }catch(e){
    console.log(e);
  }

  try{
    startCounters();
  }catch(e){
    console.log(e);
  }
}

if(warningButton){
  warningButton.addEventListener('click', proceedToMain);
}

function randomHex(length = 24){
  const chars = 'ABCDEF0123456789';
  let out = '';

  for(let i = 0; i < length; i++){
    out += chars[Math.floor(Math.random() * chars.length)];
  }

  return out;
}

const loadingInterval = setInterval(() => {
  progress += Math.random() * 7;

  if(progress >= 100){
    progress = 100;
  }

  loadBar.style.width = `${progress}%`;
  loadHex.textContent = randomHex(48);

  if(msgIndex < loadingMessages.length - 1 && progress > (msgIndex + 1) * 12){
    msgIndex++;
    loadStatus.textContent = loadingMessages[msgIndex];
  }

  if(progress >= 100){
    clearInterval(loadingInterval);

    setTimeout(() => {

      if(loadingScreen){
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity .8s ease';
        loadingScreen.style.pointerEvents = 'none';
      }

      setTimeout(() => {

        if(loadingScreen){
          loadingScreen.remove();
        }

        if(warningModal){
          warningModal.classList.remove('hidden');
        }

        body.classList.remove('loading');

      },800);

    },700);
  }
}, 120);

const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

let width;
let height;
let columns;
let drops;

function resizeCanvas(){
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;

  columns = Math.floor(width / 18);
  drops = [];

  for(let i = 0; i < columns; i++){
    drops[i] = Math.random() * -100;
  }
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const matrixChars = 'アァイィウヴエカキクケコサシスセソタチツテト0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function drawMatrix(){
  ctx.fillStyle = 'rgba(0,0,0,0.08)';
  ctx.fillRect(0,0,width,height);

  ctx.fillStyle = '#ff3b3b';
  ctx.font = '14px Share Tech Mono';

  for(let i = 0; i < drops.length; i++){
    const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];

    ctx.fillText(text, i * 18, drops[i] * 18);

    if(drops[i] * 18 > height && Math.random() > 0.985){
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 42);

function initializeAnimations(){
  const reveals = document.querySelectorAll('.reveal-card, .reveal-tl');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0px)';
      }
    });
  }, {
    threshold: 0.1
  });

  reveals.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(40px)';
    item.style.transition = 'all .8s ease';

    observer.observe(item);
  });
}

const tableBody = document.getElementById('table-body');

const users = [
  {
    id:'1048832',
    username:'NovaAshes',
    display:'Nova',
    email:'nova.ashford92@protonmail.com',
    location:'Austin, TX',
    vc:'18,420 VC',
    login:'2025-03-13 22:44 UTC',
    age:'7 yrs'
  },
  {
    id:'992144',
    username:'CryoShift',
    display:'Cryo',
    email:'jake_hollister77@gmail.com',
    location:'Phoenix, AZ',
    vc:'4,320 VC',
    login:'2025-03-14 01:12 UTC',
    age:'5 yrs'
  },
  {
    id:'4410288',
    username:'StaticVenom',
    display:'Venom',
    email:'venomstatic@outlook.com',
    location:'Chicago, IL',
    vc:'42,100 VC',
    login:'2025-03-12 14:19 UTC',
    age:'9 yrs'
  },
  {
    id:'5518200',
    username:'GhostPixelX',
    display:'Ghost',
    email:'alex.moreno1998@yahoo.com',
    location:'Seattle, WA',
    vc:'9,220 VC',
    login:'2025-03-11 05:33 UTC',
    age:'3 yrs'
  },
  {
    id:'3318119',
    username:'HollowDelta',
    display:'Delta',
    email:'delta_hx@icloud.com',
    location:'Toronto, CA',
    vc:'1,100 VC',
    login:'2025-03-10 18:10 UTC',
    age:'2 yrs'
  },
  {
    id:'7781882',
    username:'ZeroLatency',
    display:'Zero',
    email:'matthew.reyes@proton.me',
    location:'Berlin, DE',
    vc:'77,000 VC',
    login:'2025-03-14 03:04 UTC',
    age:'10 yrs'
  },
  {
    id:'8819201',
    username:'PulseRaid',
    display:'Pulse',
    email:'pulse_raid@aol.com',
    location:'London, UK',
    vc:'14,900 VC',
    login:'2025-03-13 17:41 UTC',
    age:'6 yrs'
  },
  {
    id:'6611209',
    username:'DarkProxy',
    display:'Proxy',
    email:'proxygrid@outlook.com',
    location:'Los Angeles, CA',
    vc:'32,210 VC',
    login:'2025-03-13 02:22 UTC',
    age:'8 yrs'
  }
];

function populateTable(data){
  tableBody.innerHTML = '';

  data.forEach(user => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${user.id}</td>
      <td class="red-text">${user.username}</td>
      <td>${user.display}</td>
      <td>${user.email}</td>
      <td>${user.location}</td>
      <td>${user.vc}</td>
      <td>${user.login}</td>
      <td>${user.age}</td>
      <td><span class="badge-red nav-badge">EXPOSED</span></td>
    `;

    tableBody.appendChild(row);
  });

  document.getElementById('record-count').textContent = data.length;
}

populateTable(users);

const searchInput = document.getElementById('table-search');

if(searchInput){
  searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();

    const filtered = users.filter(user => {
      return (
        user.username.toLowerCase().includes(value) ||
        user.display.toLowerCase().includes(value) ||
        user.location.toLowerCase().includes(value)
      );
    });

    populateTable(filtered);
  });
}

const terminalMessage = document.getElementById('terminal-message');
const tfDividerEnd = document.getElementById('tf-divider-end');
const tfFooter = document.getElementById('tf-footer');

const terminalText = `To Vortex Security Operations:\n\nYour infrastructure was compromised in under 43 minutes.\nEvery database snapshot, credential archive, payment ledger, and authentication token was copied without resistance.\n\nYou ignored the warnings.\nYou ignored the exposed endpoints.\nYou ignored the attack surface.\n\nNow your users will pay the price for your negligence.\n\n47TB extracted.\n23 servers breached.\n2.8 million accounts mirrored.\n\nWe are already inside systems you have not discovered yet.\nThis is only the beginning.\n\n— PHANTOM CIRCUIT [FICTIONAL]`;

function startTerminalTyping(){
  let i = 0;

  const typing = setInterval(() => {
    terminalMessage.textContent += terminalText.charAt(i);
    i++;

    if(i >= terminalText.length){
      clearInterval(typing);
      tfDividerEnd.style.display = 'block';
      tfFooter.style.display = 'block';
    }
  }, 18);
}

function startExfiltrationFeed(){
  const feeds = [
    {bar:'emf-0',pct:'emp-0',status:'ems-0',max:100},
    {bar:'emf-1',pct:'emp-1',status:'ems-1',max:92},
    {bar:'emf-2',pct:'emp-2',status:'ems-2',max:84},
    {bar:'emf-3',pct:'emp-3',status:'ems-3',max:68},
    {bar:'emf-4',pct:'emp-4',status:'ems-4',max:41}
  ];

  let total = 0;

  feeds.forEach((feed,index) => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 3;

      if(value >= feed.max){
        value = feed.max;
        clearInterval(interval);

        document.getElementById(feed.status).textContent = 'COMPLETE';
        document.getElementById(feed.status).className = 'em-status green-text';
      }

      document.getElementById(feed.bar).style.width = `${value}%`;
      document.getElementById(feed.pct).textContent = `${Math.floor(value)}%`;

      total += Math.random() * 1.4;
      document.getElementById('em-total').textContent = `${total.toFixed(1)} GB`;
    }, 120 + (index * 40));
  });
}

function animateCounter(element,target,suffix=''){
  let current = 0;
  const increment = target / 120;

  const update = () => {
    current += increment;

    if(current >= target){
      current = target;
    }

    element.textContent = Math.floor(current).toLocaleString() + suffix;

    if(current < target){
      requestAnimationFrame(update);
    }
  };

  update();
}

function startCounters(){
  const cards = document.querySelectorAll('.stat-card');

  cards.forEach((card,index) => {
    const target = Number(card.dataset.target);
    const suffix = card.dataset.suffix || '';
    const element = document.getElementById(`stat-${index}`);

    animateCounter(element,target,suffix);

    const fill = card.querySelector('.sc-bar-fill');

    setTimeout(() => {
      fill.style.width = fill.dataset.width + '%';
    }, 500);
  });
}

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');

  if(window.scrollY > 40){
    navbar.style.background = 'rgba(5,5,5,.94)';
    navbar.style.borderBottom = '1px solid rgba(255,0,0,.15)';
  } else {
    navbar.style.background = 'rgba(8,8,8,.82)';
    navbar.style.borderBottom = '1px solid rgba(255,255,255,.05)';
  }
});

setTimeout(() => {

  const loader = document.getElementById('loading-screen');

  if(loader){
    loader.style.display = 'none';
  }

  const modal = document.getElementById('warning-modal');

  if(modal){
    modal.classList.add('hidden');
  }

  if(app){
    app.classList.remove('hidden');
  }

  body.classList.remove('loading');

  proceedToMain();

},10000);

