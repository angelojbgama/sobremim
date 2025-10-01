// --- Mapeamento de Habilidades para Classes do Font Awesome ---
const skillIconMapping = {
  // **Linguagens de Programação**
  Python: "fab fa-python",
  "C++": "fas fa-code",
  JavaScript: "fab fa-js-square",
  HTML: "fab fa-html5",
  CSS: "fab fa-css3-alt",
  Java: "fab fa-java",
  "C#": "fas fa-code", // Usando fa-code como alternativa
  Ruby: "fas fa-gem",
  Go: "fas fa-golang",
  Swift: "fas fa-swift",
  Kotlin: "fas fa-code", // Usando fa-code
  PHP: "fab fa-php",
  TypeScript: "fas fa-code", // Usando fa-code
  Rust: "fas fa-code", // Usando fa-code
  Scala: "fas fa-code", // Usando fa-code
  Perl: "fas fa-code", // Usando fa-code
  R: "fas fa-chart-line",
  SQL: "fas fa-database",
  "Objective-C": "fas fa-code", // Usando fa-code

  // **Frameworks e Bibliotecas**
  React: "fab fa-react",
  Angular: "fab fa-angular",
  "Vue.js": "fab fa-vuejs",
  Django: "fas fa-leaf",
  Flask: "fas fa-flask",
  Laravel: "fab fa-laravel",
  Spring: "fas fa-seedling", // Usando fa-seedling como alternativa
  "Express.js": "fas fa-server",
  "Ruby on Rails": "fas fa-gem",
  "ASP.NET": "fas fa-code",
  "Node.js": "fab fa-node",
  Bootstrap: "fab fa-bootstrap",
  Svelte: "fas fa-code", // Usando fa-code
  "Ember.js": "fas fa-code", // Usando fa-code
  jQuery: "fas fa-code", // Usando fa-code
  TensorFlow: "fas fa-brain", // Usando fa-brain como alternativa
  Keras: "fas fa-brain", // Usando fa-brain como alternativa
  PyTorch: "fas fa-brain", // Usando fa-brain como alternativa
  "ASP.NET Core": "fas fa-code",
  "Next.js": "fas fa-code", // Usando fa-code

  // **Bancos de Dados**
  MySQL: "fas fa-database",
  PostgreSQL: "fas fa-database",
  MongoDB: "fas fa-database", // Usando fa-database
  SQLite: "fas fa-database", // Usando fa-database
  Redis: "fas fa-server", // Usando fa-server
  Oracle: "fas fa-database", // Usando fa-database
  MariaDB: "fas fa-database", // Usando fa-database
  Firebase: "fas fa-fire",
  Cassandra: "fas fa-database", // Usando fa-database
  Elasticsearch: "fas fa-search",
  CouchDB: "fas fa-database", // Usando fa-database

  // **Ferramentas e Plataformas**
  Git: "fab fa-git-alt",
  GitHub: "fab fa-github",
  GitLab: "fab fa-gitlab",
  Bitbucket: "fab fa-bitbucket",
  Docker: "fab fa-docker",
  Kubernetes: "fas fa-cube", // Usando fa-cube
  Jenkins: "fas fa-cogs",
  "Travis CI": "fas fa-code", // Usando fa-code
  CircleCI: "fas fa-code", // Usando fa-code
  AWS: "fab fa-aws",
  Azure: "fab fa-azure",
  "Google Cloud": "fab fa-google-cloud",
  Heroku: "fab fa-heroku",
  Netlify: "fas fa-code", // Usando fa-code
  Vercel: "fas fa-code", // Usando fa-code
  Webpack: "fas fa-box-open", // Usando fa-box-open
  Babel: "fas fa-code", // Usando fa-code
  NPM: "fab fa-npm",
  Yarn: "fab fa-yarn",
  Bower: "fas fa-code", // Usando fa-code

  // **Controle de Versão**
  SVN: "fas fa-code-branch", // Usando fa-code-branch
  Mercurial: "fas fa-code-branch", // Usando fa-code-branch

  // **Outras Tecnologias**
  GraphQL: "fas fa-project-diagram", // Usando fa-project-diagram
  SASS: "fab fa-sass",
  LESS: "fas fa-code", // Usando fa-code
  "Tailwind CSS": "fab fa-css3-alt", // Usando fa-css3-alt
  "Material-UI": "fas fa-palette", // Usando fa-palette
  Bulma: "fas fa-code", // Usando fa-code
  "Ant Design": "fas fa-code", // Usando fa-code
  Redux: "fas fa-sync", // Usando fa-sync
  MobX: "fas fa-sync", // Usando fa-sync
  Gatsby: "fas fa-code", // Usando fa-code
  "Nuxt.js": "fas fa-code", // Usando fa-code
  Electron: "fas fa-microchip", // Usando fa-microchip
  Cordova: "fas fa-mobile-alt", // Usando fa-mobile-alt
  Ionic: "fas fa-mobile-alt", // Usando fa-mobile-alt
  Flutter: "fas fa-mobile-alt", // Usando fa-mobile-alt
  "React Native": "fab fa-react",
  Blazor: "fas fa-code", // Usando fa-code

  // **Ferramentas de Design e Prototipagem**
  Figma: "fab fa-figma",
  "Adobe XD": "fab fa-adobe",
  Sketch: "fas fa-paint-brush", // Usando fa-paint-brush
  InVision: "fas fa-eye", // Usando fa-eye
  Photoshop: "fab fa-adobe",
  Illustrator: "fab fa-adobe",
  "Premiere Pro": "fab fa-adobe",
  "After Effects": "fab fa-adobe",

  // **Outras Ferramentas de Desenvolvimento**
  "Visual Studio Code": "fas fa-code",
  "IntelliJ IDEA": "fas fa-code",
  Eclipse: "fas fa-code",
  PyCharm: "fas fa-code",
  Atom: "fas fa-code",
  "Sublime Text": "fas fa-code",
  Vim: "fas fa-code",
  Emacs: "fas fa-code",
  "Notepad++": "fas fa-code",
  Xcode: "fas fa-code",
  "Android Studio": "fas fa-android", // Usando fa-android
  Terminal: "fas fa-terminal",
  "Command Prompt": "fas fa-terminal",
  PowerShell: "fas fa-terminal",
  "Docker Compose": "fab fa-docker",
  Ansible: "fas fa-cogs",
  Terraform: "fas fa-tools", // Usando fa-tools
  Puppet: "fas fa-cogs",
  Chef: "fas fa-cogs",
  Jupyter: "fas fa-brain", // Usando fa-brain
  Unity: "fab fa-unity",
  "Unreal Engine": "fas fa-project-diagram", // Usando fa-project-diagram
  Blender: "fas fa-cube", // Usando fa-cube
  GIMP: "fas fa-paint-brush", // Usando fa-paint-brush

  // **Sistemas Operacionais**
  Windows: "fab fa-windows",
  Linux: "fab fa-linux",
  macOS: "fab fa-apple",
  Ubuntu: "fab fa-ubuntu",
  Fedora: "fas fa-code", // Usando fa-code
  Debian: "fas fa-code", // Usando fa-code

  // **Controle de Qualidade e Testes**
  Jest: "fas fa-vial", // Usando fa-vial
  Mocha: "fas fa-coffee", // Usando fa-coffee
  Selenium: "fas fa-robot",
  Cypress: "fas fa-code", // Usando fa-code
  JUnit: "fas fa-code", // Usando fa-code
  Mockito: "fas fa-code", // Usando fa-code
  Postman: "fas fa-envelope", // Usando fa-envelope

  // **DevOps e CI/CD**
  Jenkins: "fas fa-cogs",
  Bamboo: "fas fa-code", // Usando fa-code
  TeamCity: "fas fa-code", // Usando fa-code
  "GitLab CI": "fas fa-code", // Usando fa-code

  // **Segurança**
  OWASP: "fas fa-shield-alt",
  JWT: "fas fa-key",
  OAuth: "fas fa-lock",
  SSL: "fas fa-lock",
  SAST: "fas fa-search",
  DAST: "fas fa-search",
  "Penetration Testing": "fas fa-user-secret",

  // **Outras Tecnologias e Conceitos**
  Agile: "fas fa-project-diagram",
  Scrum: "fas fa-tasks",
  Kanban: "fas fa-th-list",
  "REST API": "fas fa-network-wired",
  WebSockets: "fas fa-plug",
  Microservices: "fas fa-project-diagram",
  Serverless: "fas fa-cloud",
  "CI/CD": "fas fa-sync-alt",
  MVC: "fas fa-project-diagram",
  MVVM: "fas fa-project-diagram",
  "Design Patterns": "fas fa-puzzle-piece",
  SOLID: "fas fa-code",
  OOP: "fas fa-code",
  "Functional Programming": "fas fa-code",
  Concurrency: "fas fa-project-diagram",
  "Asynchronous Programming": "fas fa-clock",

  // **Cloud Services**
  "AWS Lambda": "fas fa-cloud",
  "AWS S3": "fas fa-cloud",
  "Azure Functions": "fas fa-cloud",
  "Google Cloud Functions": "fas fa-cloud",
  DigitalOcean: "fas fa-cloud",
  Vultr: "fas fa-cloud",
  Linode: "fas fa-cloud",
  "Alibaba Cloud": "fas fa-cloud",
  "Oracle Cloud": "fas fa-cloud",
  "IBM Cloud": "fas fa-cloud",

  // **Containers e Virtualização**
  Kubernetes: "fas fa-cube",
  VirtualBox: "fas fa-desktop", // Usando fa-desktop
  VMware: "fas fa-desktop", // Usando fa-desktop
  Vagrant: "fas fa-code", // Usando fa-code

  // **Outros**
  Graphviz: "fas fa-project-diagram",
  Swagger: "fas fa-file-alt",
  "Elastic Stack": "fas fa-search",
  Prometheus: "fas fa-chart-line",
  Grafana: "fas fa-chart-bar",
  Logstash: "fas fa-chart-bar",
  Kibana: "fas fa-search",

  // **IDE e Editores**
  "Visual Studio": "fas fa-code",
  WebStorm: "fas fa-code",
  PhpStorm: "fas fa-code",
  RubyMine: "fas fa-code",

  // **Outras Linguagens e Tecnologias Específicas**
  Lua: "fas fa-code", // Usando fa-code
  "Shell Scripting": "fas fa-terminal",
  "Batch Scripting": "fas fa-terminal",
  COBOL: "fas fa-code", // Usando fa-code
  Fortran: "fas fa-code", // Usando fa-code
  Haskell: "fas fa-code", // Usando fa-code
  Elixir: "fas fa-code", // Usando fa-code
  Clojure: "fas fa-code", // Usando fa-code
  "F#": "fas fa-code", // Usando fa-code
  Erlang: "fas fa-code", // Usando fa-code
  Groovy: "fas fa-code", // Usando fa-code

  // **Testes e Monitoramento**
  "New Relic": "fas fa-chart-line",
  Datadog: "fas fa-chart-pie",
  Splunk: "fas fa-search",
  AppDynamics: "fas fa-chart-area",
  Nagios: "fas fa-server",
  Zabbix: "fas fa-server",

  // **Gerenciamento de Projetos**
  Jira: "fas fa-tasks",
  Trello: "fas fa-th-list",
  Asana: "fas fa-tasks",
  Basecamp: "fas fa-clipboard-list",
  "Monday.com": "fas fa-calendar-alt",

  // **Outros Conceitos e Tecnologias**
  Blockchain: "fas fa-link",
  Cryptography: "fas fa-lock",
  "Machine Learning": "fas fa-brain",
  "Artificial Intelligence": "fas fa-brain",
  "Natural Language Processing": "fas fa-language",
  "Big Data": "fas fa-database",
  "Data Science": "fas fa-chart-line",
  "Data Visualization": "fas fa-chart-bar",
  "Computer Vision": "fas fa-eye",
  "Internet of Things": "fas fa-project-diagram",
  Robotics: "fas fa-robot",
  "Augmented Reality": "fas fa-eye",
  "Virtual Reality": "fas fa-eye",
  "Quantum Computing": "fas fa-microchip",
  "Edge Computing": "fas fa-network-wired",
  DevSecOps: "fas fa-shield-alt",
  "API Development": "fas fa-network-wired",
  "Mobile Development": "fas fa-mobile-alt",
  "Desktop Development": "fas fa-desktop",
  "Game Development": "fas fa-gamepad",
  "Embedded Systems": "fas fa-microchip",
  "Data Engineering": "fas fa-database",
  Bioinformatics: "fas fa-microscope", // Usando fa-microscope
  Cybersecurity: "fas fa-shield-alt",
  Bioengineering: "fas fa-flask",
  "Renewable Energy": "fas fa-solar-panel",
  "Automotive Engineering": "fas fa-car",

  // **Version Control Systems**
  Mercurial: "fas fa-code-branch",
  "Subversion (SVN)": "fas fa-code-branch",
  Perforce: "fas fa-code-branch",

  // **Miscellaneous**
  Selenium: "fas fa-robot",
  Postman: "fas fa-envelope",
  Swagger: "fas fa-file-alt",
  Jupyter: "fas fa-brain",
  MATLAB: "fas fa-code", // Usando fa-code
  LaTeX: "fas fa-file-alt",
  Pandas: "fas fa-table",
  NumPy: "fas fa-square", // Usando fa-square
  SciPy: "fas fa-flask",
  TensorFlow: "fas fa-brain",
  PyTorch: "fas fa-brain",
  OpenCV: "fas fa-eye",
  "Scikit-learn": "fas fa-brain",
  Matplotlib: "fas fa-chart-line",
  Seaborn: "fas fa-chart-bar",
  Plotly: "fas fa-chart-pie",
  "D3.js": "fas fa-chart-line",
  Pyramid: "fas fa-leaf",
  Bottle: "fas fa-flask",
  FastAPI: "fas fa-tachometer-alt",
  CherryPy: "fas fa-code",
  Tornado: "fas fa-wind",
  Twisted: "fas fa-code",
  Falcon: "fas fa-bolt",
  Zappa: "fas fa-cloud",
  Hug: "fas fa-code",

  // **No Icon Available**
  "Unknown Skill 1": "fas fa-tools",
  "Unknown Skill 2": "fas fa-code",
};

// --- Funções para Atualizar Diferentes Partes do Perfil ---
// === Certificações — helpers ===

// Formata "YYYY-MM" -> "MM/YYYY"
function formatYM(ym) {
  if (!ym || typeof ym !== 'string') return '';
  const [y, m] = ym.split('-');
  if (!y || !m) return ym;
  return `${m}/${y}`;
}

// 1. Atualizar Informações do Perfil
function updateProfileInfo(profileData) {
  // Atualizar Foto de Perfil
  const photo = document.getElementById("profile.photo");
  if (photo) {
    photo.src = profileData.photo;
    photo.alt = profileData.name;
  }

  // Atualizar Nome
  const name = document.getElementById("profile.name");
  if (name) {
    name.innerText = profileData.name;
  }

  // Atualizar Job
  const jobContainer = document.getElementById("profile.job");
  if (jobContainer) {
    const jobText = jobContainer.querySelector(".info-text");
    if (jobText) {
      jobText.innerText = profileData.job;
    }
  }

  // Atualizar Graduação
  const graduateContainer = document.getElementById("profile.graduate");
  if (graduateContainer) {
    const graduateText = graduateContainer.querySelector(".info-text");
    if (graduateText) {
      graduateText.innerText = profileData.graduate;
    }
  }

  // Atualizar a Barra de Progresso da Graduação
  const graduateScaleContainer = document.getElementById(
    "profile.graduateScale"
  );
  if (graduateScaleContainer && profileData.graduateScale) {
    const progress = graduateScaleContainer.querySelector(".progress");
    const progressText = graduateScaleContainer.querySelector(".progress-text");
    if (progress && progressText) {
      const completed = profileData.graduateScale.completed;
      const total = profileData.graduateScale.total;
      const percentage = Math.min((completed / total) * 100, 100).toFixed(2); // Limita a 100% e formata para 2 casas decimais
      progress.style.width = `${percentage}%`;
      progressText.innerText = `${completed} disciplinas cursadas de ${total} (${percentage}%)`;
    }
  }

  // Atualizar Localização
  const locationContainer = document.getElementById("profile.location");
  if (locationContainer) {
    const locationText = locationContainer.querySelector(".info-text");
    if (locationText) {
      locationText.innerText = profileData.location;
    }
  }

  // Atualizar Telefone
  const phone = document.getElementById("profile.phone");
  if (phone) {
    phone.innerText = profileData.phone;
    // Remova caracteres não numéricos para a URL do WhatsApp
    const phoneNumber = profileData.phone.replace(/\D/g, "");
    phone.href = `https://wa.me/55${phoneNumber}`;
  }

  // Atualizar Email
  const email = document.getElementById("profile.email");
  if (email) {
    email.innerText = profileData.email;
    email.href = `mailto:${profileData.email}`;
  }

  // Atualizar o Título do Documento
  if (profileData.title) {
    document.title = profileData.title;
  }
}

// 2. Atualizar Habilidades Técnicas (Hard Skills)
function updateHardSkills(profileData) {
  // Data normalization: expect [{ name, level: 0..10 }]
  const items = (profileData?.skills?.hardSkills || []).map((s) => {
    if (typeof s === 'string') return { name: s, level: 0 };
    return { name: s.name || '', level: Math.max(0, Math.min(10, Number(s.level ?? s.score ?? 0))) };
  }).filter(it => it.name);

  const container = document.getElementById('hard-skills-chart-container');
  const canvas = document.getElementById('hardSkillsChart');
  if (!container || !canvas) return;

  // Resize canvas to devicePixelRatio
  const dpr = window.devicePixelRatio || 1;
  const size = Math.min(560, container.clientWidth || 560);
  const compact = size < 420;
  const xcompact = size < 340;
  container.classList.toggle('compact', compact);
  container.classList.toggle('xcompact', xcompact);
  canvas.width = Math.floor(size * dpr);
  canvas.height = Math.floor(size * dpr);
  canvas.style.width = size + 'px';
  canvas.style.height = size + 'px';
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  // Theme colors from CSS vars
  const cs = getComputedStyle(document.documentElement);
  const accent = cs.getPropertyValue('--accent-color').trim() || '#7c5dfa';
  const accentAlt = cs.getPropertyValue('--accent-color-alt').trim() || '#1bb9f1';
  const textColor = cs.getPropertyValue('--text-color').trim() || '#ffffff';
  const strokeColor = cs.getPropertyValue('--border-color').trim() || 'rgba(255,255,255,0.18)';
  const isLight = document.body.classList.contains('light-theme') || !document.body.classList.contains('dark-theme');

  const toRGB = (hex) => {
    const h = hex.replace('#','');
    const b = h.length === 3 ? h.split('').map(c=>c+c).join('') : h;
    const n = parseInt(b,16); return { r:(n>>16)&255, g:(n>>8)&255, b:n&255 };
  };
  const lerp = (a,b,t)=>a+(b-a)*t;
  const grad = ctx.createLinearGradient(0,0,size,0);
  const a1 = toRGB(accent), a2 = toRGB(accentAlt);
  grad.addColorStop(0, `rgba(${a1.r},${a1.g},${a1.b},0.9)`);
  grad.addColorStop(1, `rgba(${a2.r},${a2.g},${a2.b},0.9)`);

  // Geometry
  const pad = 28; // px padding inside canvas
  const cx = size/2, cy = size/2;
  const radius = (size/2) - pad;
  const axes = items.length || 1;
  const rings = 5; // grid rings

  // Clear
  ctx.clearRect(0,0,size,size);

  // Grid rings
  ctx.lineWidth = isLight ? 1.2 : 1;
  ctx.strokeStyle = isLight ? 'rgba(16,18,35,0.28)' : (strokeColor || 'rgba(255,255,255,0.22)');
  for (let r=1; r<=rings; r++) {
    const rr = (r/rings)*radius;
    ctx.beginPath();
    for (let i=0; i<axes; i++) {
      const angle = (-Math.PI/2) + (i * 2*Math.PI/axes);
      const x = cx + Math.cos(angle)*rr;
      const y = cy + Math.sin(angle)*rr;
      if (i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    }
    ctx.closePath(); ctx.stroke();
  }

  // Axes
  for (let i=0; i<axes; i++) {
    const angle = (-Math.PI/2) + (i * 2*Math.PI/axes);
    const x = cx + Math.cos(angle)*radius;
    const y = cy + Math.sin(angle)*radius;
    ctx.beginPath();
    ctx.strokeStyle = isLight ? 'rgba(16,18,35,0.35)' : 'rgba(255,255,255,0.28)';
    ctx.lineWidth = isLight ? 1.0 : 0.8;
    ctx.moveTo(cx,cy); ctx.lineTo(x,y); ctx.stroke();
  }

  // Data polygon
  ctx.beginPath();
  items.forEach((it, i) => {
    const angle = (-Math.PI/2) + (i * 2*Math.PI/axes);
    const rr = (Math.max(0, Math.min(10, it.level)) / 10) * radius;
    const x = cx + Math.cos(angle)*rr;
    const y = cy + Math.sin(angle)*rr;
    if (i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  });
  ctx.closePath();
  const fillAlpha = isLight ? 0.28 : 0.18;
  ctx.fillStyle = `rgba(${a1.r},${a1.g},${a1.b},${fillAlpha})`;
  ctx.strokeStyle = grad; ctx.lineWidth = 2; ctx.fill(); ctx.stroke();

  // Points
  items.forEach((it, i) => {
    const angle = (-Math.PI/2) + (i * 2*Math.PI/axes);
    const rr = (Math.max(0, Math.min(10, it.level)) / 10) * radius;
    const x = cx + Math.cos(angle)*rr;
    const y = cy + Math.sin(angle)*rr;
    ctx.beginPath(); ctx.arc(x,y,isLight?3.5:3,0,Math.PI*2);
    ctx.fillStyle = grad; ctx.fill();
    // Halo para contraste
    ctx.lineWidth = 1;
    ctx.strokeStyle = isLight ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.4)';
    ctx.stroke();
  });

  // Overlay labels (HTML) com ícone, nome e nível
  let labelsLayer = document.getElementById('hardSkillsLabels');
  if (!labelsLayer) {
    labelsLayer = document.createElement('div');
    labelsLayer.id = 'hardSkillsLabels';
    labelsLayer.className = 'hard-skills-labels';
    container.appendChild(labelsLayer);
  }
  // Sincroniza tamanho e posição do overlay com o canvas
  const contRect = container.getBoundingClientRect();
  const canvRect = canvas.getBoundingClientRect();
  labelsLayer.style.left = (canvRect.left - contRect.left) + 'px';
  labelsLayer.style.top = (canvRect.top - contRect.top) + 'px';
  labelsLayer.style.width = canvas.clientWidth + 'px';
  labelsLayer.style.height = canvas.clientHeight + 'px';
  labelsLayer.innerHTML = '';

  items.forEach((it, i) => {
    const angle = (-Math.PI/2) + (i * 2*Math.PI/axes);
    const labelR = radius + (compact ? 8 : 16);
    let lx = (canvas.clientWidth/2) + Math.cos(angle)*labelR;
    let ly = (canvas.clientHeight/2) + Math.sin(angle)*labelR;
    const edge = compact ? 4 : 6;
    // Clamps to keep inside canvas box
    lx = Math.max(edge, Math.min(canvas.clientWidth - edge, lx));
    ly = Math.max(edge, Math.min(canvas.clientHeight - edge, ly));
    const ic = (it.iconClass || skillIconMapping[it.name] || 'fas fa-tools');
    const el = document.createElement('div');
    el.className = 'hard-skills-label';
    el.innerHTML = `<i class="${ic}" aria-hidden="true"></i><span>${it.name}</span><small>${it.level}/10</small>`;
    el.title = `${it.name} — ${it.level}/10`;
    el.setAttribute('aria-label', `${it.name} ${it.level}/10`);
    el.style.left = lx + 'px';
    el.style.top = ly + 'px';
    labelsLayer.appendChild(el);
  });

  // Tooltip nativo/custom em telas pequenas
  if (compact || xcompact) {
    let tooltipEl = document.getElementById('app-tooltip');
    if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.id = 'app-tooltip';
      tooltipEl.className = 'app-tooltip';
      document.body.appendChild(tooltipEl);
    }
    const showTip = (text, x, y) => {
      tooltipEl.textContent = text;
      tooltipEl.setAttribute('data-show', 'true');
      const rect = tooltipEl.getBoundingClientRect();
      const vw = window.innerWidth || document.documentElement.clientWidth;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const left = Math.min(Math.max(x, 6), vw - rect.width - 6);
      const top = Math.min(Math.max(y - rect.height - 10, 6), vh - rect.height - 6);
      tooltipEl.style.left = left + 'px';
      tooltipEl.style.top = top + 'px';
    };
    const hideTip = () => { tooltipEl.removeAttribute('data-show'); };

    labelsLayer.querySelectorAll('.hard-skills-label').forEach((el) => {
      const text = el.getAttribute('aria-label') || el.title || '';
      el.addEventListener('mouseenter', (e) => showTip(text, e.clientX, e.clientY));
      el.addEventListener('mousemove', (e) => showTip(text, e.clientX, e.clientY));
      el.addEventListener('mouseleave', hideTip);
      el.addEventListener('click', (e) => { showTip(text, e.clientX, e.clientY); setTimeout(hideTip, 2000); });
      el.addEventListener('touchstart', (e) => { const t=e.touches[0]; showTip(text, t.clientX, t.clientY); setTimeout(hideTip, 2000); }, { passive: true });
    });
  }

  if (legend) {
    const listHTML = items.map((it) => {
      const ic = (it.iconClass || skillIconMapping[it.name] || 'fas fa-tools');
      return `<span class="legend-item"><i class="${ic}" aria-hidden="true"></i><span>${it.name}</span><small> ${it.level}/10</small></span>`;
    }).join('');
    legend.innerHTML = `<div class="legend-list" aria-hidden="true">${listHTML}</div><div class="legend-scale">0–10 (quanto maior, mais domínio)</div>`;
  }

  // Redraw on resize/theme toggle
  if (!updateHardSkills._bound) {
    updateHardSkills._bound = true;
    let resizeTO = null;
    window.addEventListener('resize', () => {
      window.clearTimeout(resizeTO);
      resizeTO = window.setTimeout(() => updateHardSkills(profileData), 120);
    });
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) themeBtn.addEventListener('click', () => setTimeout(() => updateHardSkills(profileData), 10));
  }
}

// 3. Atualizar Habilidades Comportamentais (Soft Skills)
function updateSoftSkills(profileData) {
  const listEl = document.getElementById("profile.skills.softSkills");
  if (!listEl) return;

  const items = (profileData && profileData.skills && profileData.skills.softSkills) || [];

  listEl.innerHTML = items
    .map((item) => {
      if (typeof item === "string") {
        const name = item.trim();
        return `
          <li class="soft-skill" aria-label="${name}">
            <div class="soft-skill__header">
              <span class="soft-skill__name">${name}</span>
              <span class="soft-skill__value"></span>
            </div>
          </li>
        `;
      }

      if (item && typeof item === "object") {
        const name = (item.name || "").trim();
        const pct = Math.max(0, Math.min(100, Number(item.percent ?? item.percentage ?? 0)));
        return `
          <li class="soft-skill" aria-label="${name}">
            <div class="soft-skill__header">
              <span class="soft-skill__name">${name}</span>
              <span class="soft-skill__value">${pct}%</span>
            </div>
            <div class="soft-skill__bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}">
              <div class="soft-skill__progress" style="width: ${pct}%"></div>
            </div>
          </li>
        `;
      }
      return "";
    })
    .join("");

  // Link simples centralizado no rodapé da seção (configurável via JSON)
  try {
    const testCfg = profileData && profileData.skills && profileData.skills.softSkillsTest;
    const section = document.querySelector('.skills .personal');
    if (section) {
      let wrap = section.querySelector('.soft-skills__testlink-wrap');
      if (testCfg && testCfg.url) {
        if (!wrap) {
          wrap = document.createElement('div');
          wrap.className = 'soft-skills__testlink-wrap';
          // posiciona logo abaixo da lista
          listEl.insertAdjacentElement('afterend', wrap);
        }
        let linkEl = wrap.querySelector('.soft-skills__testlink');
        if (!linkEl) {
          linkEl = document.createElement('a');
          linkEl.className = 'soft-skills__testlink';
          wrap.appendChild(linkEl);
        }
        linkEl.href = testCfg.url;
        linkEl.target = '_blank';
        linkEl.rel = 'noopener noreferrer';
        linkEl.textContent = testCfg.label || 'Faça o teste';
        wrap.style.display = '';
      } else if (wrap) {
        wrap.style.display = 'none';
      }
    }
  } catch (e) {
    console.warn('Falha ao atualizar link do teste de soft skills', e);
  }
}

// 4. Atualizar Idiomas
function updateLanguages(profileData, uiText) {
  const list = document.getElementById("profile.languages");
  if (!list) return;

  const items = Array.isArray(profileData.languages) ? profileData.languages : [];

  const levelLabel = (lvl) => {
    const ui = uiText || {};
    const map = {
      1: ui.langLevelBasic || "Básico",
      2: ui.langLevelIntermediate || "Intermediário",
      3: ui.langLevelAdvanced || "Avançado",
      4: ui.langLevelFluent || "Fluente",
    };
    return map[Number(lvl)] || "";
  };

  const parseStringItem = (str) => {
    if (typeof str !== 'string') return { name: '', level: 0 };
    const m = str.match(/\(([^)]+)\)/);
    const name = str.replace(/\s*\(([^)]+)\)\s*$/, '').trim();
    let lvl = 0;
    if (m && m[1]) {
      const t = m[1].toLowerCase();
      if (t.includes('fluente')) lvl = 4;
      else if (t.includes('avanç') || t.includes('avanc')) lvl = 3;
      else if (t.includes('inter')) lvl = 2;
      else if (t.includes('bás') || t.includes('bas')) lvl = 1;
    }
    return { name, level: lvl };
  };

  const normalized = items.map((it) => {
    if (typeof it === 'string') return parseStringItem(it);
    if (it && typeof it === 'object') return { name: it.name || '', level: Number(it.level || 0) };
    return { name: '', level: 0 };
  });

  list.innerHTML = normalized.map((lang) => {
    const lvl = Math.max(0, Math.min(4, Number(lang.level || 0)));
    const lbl = levelLabel(lvl);
    const stages = Array.from({ length: 4 }, (_, i) =>
      `<span class="language__stage ${i < lvl ? 'is-active' : ''}" aria-hidden="true"></span>`
    ).join('');
    return `
      <li class="language" aria-label="${lang.name} ${lbl ? '- ' + lbl : ''}">
        <div class="language__row">
          <div class="language__info">
            <i class="fas fa-language" aria-hidden="true"></i>
            <span class="language__name">${lang.name}</span>
          </div>
          <span class="language__leveltext">${lbl}</span>
        </div>
        <div class="language__bar" role="meter" aria-valuemin="0" aria-valuemax="4" aria-valuenow="${lvl}" aria-label="Nível de ${lang.name}">
          ${stages}
        </div>
      </li>
    `;
  }).join('');

  // Renderiza "Certificações de domínio da língua" (opcional)
  try {
    const container = list.parentElement; // .content do acordeon
    if (!container) return;

    const certs = Array.isArray(profileData.languagesCertifications)
      ? profileData.languagesCertifications
      : [];

    // Se não houver certificações, remove o bloco (se existir) e sai
    let certWrap = container.querySelector('.language-certs');
    if (!certs.length) {
      if (certWrap) certWrap.remove();
      return;
    }

    if (!certWrap) {
      certWrap = document.createElement('div');
      certWrap.className = 'language-certs';
      // insere após a lista de idiomas
      list.insertAdjacentElement('afterend', certWrap);
    }

    const title = profileData.titleLanguageCertifications || 'Certificações de domínio da língua';
    const itemsHtml = certs.map((c) => {
      const name = c.name || c.title || '';
      const issuer = c.issuer ? ` · ${c.issuer}` : '';
      const score = (c.score || c.levelText) ? ` · ${c.score || c.levelText}` : '';
      const date = c.date ? ` · ${c.date}` : '';
      const meta = `${issuer}${score}${date}`;
      const link = c.url ? `<a class="language-certs__link" href="${c.url}" target="_blank" rel="noopener noreferrer">Ver</a>` : '';
      return `
        <li class="language-certs__item">
          <div class="language-certs__head">
            <span class="language-certs__name">${name}</span>
            <span class="language-certs__meta">${meta.trim().replace(/^·\s*/, '')}</span>
          </div>
          ${link}
        </li>
      `;
    }).join('');

    certWrap.innerHTML = `
      <h3 class="language-certs__title">${title}</h3>
      <ul class="language-certs__list">
        ${itemsHtml}
      </ul>
    `;
  } catch (e) {
    console.warn('Falha ao renderizar certificações de idiomas', e);
  }
}

// 5. Atualizar Portfólio
function updatePortfolio(profileData) {
  const portfolio = document.getElementById("profile.portfolio");
  if (portfolio) {
    portfolio.innerHTML = profileData.portfolio
      .map((project) => {
        const iconHTML = project.github
          ? `<a href="${project.url}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
               <i class="fab fa-github"></i>
             </a>`
          : `<i class="fas fa-link"></i>`;
        return `
          <li class="portfolio-item">
            <h3 class="portfolio-title">
              ${iconHTML} ${project.name}
            </h3>
            <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="portfolio-link">${project.url}</a>
          </li>
        `;
      })
      .join("");
  }
}

function calcularDuracao(periodo, traducoes) {
  const [inicio, fim] = periodo.split(" - ").map(str => str.trim());

  // Função para converter a string da data em objeto Date
  function parseData(dataStr) {
      console.log(`Parsing date string: "${dataStr}"`);
      if (dataStr.toLowerCase() === traducoes.current.toLowerCase()) {
          console.log(`Detected current position: "${dataStr}"`);
          return new Date();
      }

      const partes = dataStr.split(" ");
      const mes = partes[0];
      const ano = partes[partes.length - 1];

      console.log(`Extracted month: "${mes}", year: "${ano}"`);

      const mesIndex = traducoes.months[mes];
      if (mesIndex === undefined) {
          console.error(`Mês inválido ou não mapeado: "${mes}"`);
          return new Date(); // Retorna a data atual para evitar falhas
      }

      const date = new Date(parseInt(ano), mesIndex, 1);
      console.log(`Parsed date: ${date}`);
      return date;
  }

  const dataInicio = parseData(inicio);
  const dataFim = parseData(fim);

  let anos = dataFim.getFullYear() - dataInicio.getFullYear();
  let mesesDuracao = dataFim.getMonth() - dataInicio.getMonth();

  if (mesesDuracao < 0) {
      anos--;
      mesesDuracao += 12;
  }

  console.log(`Duration: ${anos} anos e ${mesesDuracao} meses`);

  let duracao = "";
  if (anos > 0) {
      duracao += `${anos} ${anos > 1 ? traducoes.years_plural : traducoes.years}`;
  }
  if (mesesDuracao > 0) {
      if (anos > 0) duracao += " e ";
      duracao += `${mesesDuracao} ${mesesDuracao > 1 ? traducoes.months_plural : traducoes.months_text}`;
  }
  return duracao || traducoes.lessThanAMonth;
}

// 6. Atualizar Experiência Profissional
function updateProfessionalExperience(profileData) {
  const professionalExperience = document.getElementById("profile.professionalExperience");
  if (professionalExperience) {
      professionalExperience.innerHTML = profileData.professionalExperience
          .map((experience) => {
              const duracao = calcularDuracao(experience.period, profileData.translations);
              return `
                <li class="experience-item">
                    <h3 class="title">${experience.name}</h3>
                    <p class="period">${experience.period} (${duracao})</p>
                    <p class="description">${experience.description}</p>
                </li>
              `;
          })
          .join("");
  }
}

// 6.1 Atualizar Formação Acadêmica
function updateAcademicFormation(profileData, uiText) {
  const list = document.getElementById("profile.academicFormation");
  if (!list) return;

  const items = Array.isArray(profileData.academicFormation) ? profileData.academicFormation : [];
  list.innerHTML = items.map((edu) => {
    const title = [edu.name, edu.institution].filter(Boolean).join(" — ");
    const duracao = edu.period ? calcularDuracao(edu.period, profileData.translations) : '';
    const periodText = edu.period ? `${edu.period}${duracao ? ` (${duracao})` : ''}` : '';
    const desc = edu.description || '';
    const openLabel = (uiText && uiText.openPdf) || 'Abrir PDF';
    const pdfBtn = edu.pdfUrl
      ? `<div class=\"certifications__actions\"><a class=\"btn btn-open-pdf\" href=\"${edu.pdfUrl}\" target=\"_blank\" rel=\"noopener noreferrer\">${openLabel}</a></div>`
      : '';
    return `
      <li class="experience-item">
        <h3 class="title">${title}</h3>
        ${periodText ? `<p class=\"period\">${periodText}</p>` : ''}
        ${desc ? `<p class=\"description\">${desc}</p>` : ''}
        ${pdfBtn}
      </li>
    `;
  }).join("");
}

// 7. Atualizar Títulos dos Accordions (com fallback ao uiText)
function updateAccordionTitles(profileData, uiText) {
  const accordionTitlesMapping = {
    titleSkills: "acordeon.titleSkills",
    titleLanguages: "acordeon.titleLanguages",
    titlePortfolio: "acordeon.titlePortfolio",
    titleProfessionalExperience: "acordeon.titleProfessionalExperience",
    titleCertifications: "acordeon.titleCertifications",
    titleAcademicFormation: "acordeon.titleAcademicFormation"
  };

  for (const [jsonKey, elementId] of Object.entries(accordionTitlesMapping)) {
    const titleElement = document.getElementById(elementId);
    if (!titleElement) continue;

    // Prioriza o profileData; se não houver, tenta uiText; se não, mantém como está
    const textFromProfile = profileData && profileData[jsonKey];
    const textFromUi = uiText && uiText[jsonKey];
    const value = textFromProfile || textFromUi;

    if (value) {
      titleElement.innerText = value;
    }
  }
}
// 5.1 Atualizar Certificações (lista + links para PDF)
function updateCertifications(profileData, uiText) {
  const list = document.getElementById('profile.certifications');
  const titleNode = document.getElementById('acordeon.titleCertifications');

  // Define título da seção (prioriza profile > UI > padrão)
  const sectionTitle =
    (profileData && profileData.titleCertifications) ||
    (uiText && uiText.titleCertifications) ||
    'Certificações';

  if (titleNode) {
    titleNode.innerText = sectionTitle;
  }
  if (!list) return;

  const certs = (profileData && Array.isArray(profileData.certifications))
    ? profileData.certifications
    : [];

  if (!certs.length) {
    list.innerHTML = `<li class='certifications__empty'>Nenhuma certificação cadastrada.</li>`;
    return;
  }

  const issuerLabel = (uiText && uiText.certIssuer) || 'Emissor';
  const dateLabel   = (uiText && uiText.certDate)   || 'Data';
  const openLabel   = (uiText && uiText.openPdf)    || 'Abrir PDF';

  list.innerHTML = certs.map(cert => {
    const dateFmt = formatYM(cert.date);
    const tags = Array.isArray(cert.tags) && cert.tags.length
      ? `<div class='certifications__tags'>
           ${cert.tags.map(t => `<span class='tag'>${t}</span>`).join('')}
         </div>`
      : '';

    const link = cert.pdfUrl
      ? `<a class='btn btn-open-pdf' href='${cert.pdfUrl}' target='_blank' rel='noopener noreferrer'>${openLabel}</a>`
      : `<button type='button' class='btn btn-open-pdf' disabled>${openLabel}</button>`;

    return `
      <li class='certifications__item'>
        <div class='certifications__head'>
          <span class='certifications__title'>${cert.title || '—'}</span>
          <span class='certifications__meta'>
            ${issuerLabel}: ${cert.issuer || '—'} · ${dateLabel}: ${dateFmt || '—'}
          </span>
        </div>
        <div class='certifications__actions'>
          ${link}
          ${tags}
        </div>
      </li>
    `;
  }).join('');
}


// 8. Atualizar Títulos das Seções Internas das Habilidades
function updateSkillTitles(profileData) {
  const skillTitlesMapping = {
    titleHardSkills: "skills.titleHardSkills",
    titleSoftSkills: "skills.titleSoftSkills",
  };

  for (const [jsonKey, elementId] of Object.entries(skillTitlesMapping)) {
    const titleElement = document.getElementById(elementId);
    if (titleElement && profileData.skills[jsonKey]) {
      titleElement.innerText = profileData.skills[jsonKey];
    }
  }
}

// --- Função Principal para Carregar e Atualizar o Perfil ---
(async () => {
  const uiText = await fetchUiText();
  document.documentElement.lang = uiText.language;
  document.title = uiText.loading;
  try {
    const profileData = await fetchProfileData(uiText.language);
    if (profileData) {
      const safe=(l,fn)=>{ try { fn(); } catch(e) { console.error(`[update:${l}]`, e); } };
      safe('profileInfo',       ()=>updateProfileInfo(profileData));
      safe('softSkills',        ()=>updateSoftSkills(profileData));
      safe('hardSkills',        ()=>updateHardSkills(profileData));
      safe('languages',         ()=>updateLanguages(profileData, uiText));
      safe('portfolio',         ()=>updatePortfolio(profileData));
      safe('experience',        ()=>updateProfessionalExperience(profileData));
      safe('academicFormation', ()=>updateAcademicFormation(profileData, uiText));
      safe('certifications',    ()=>updateCertifications(profileData, uiText));
      safe('accordionTitles',   ()=>updateAccordionTitles(profileData, uiText));
      safe('skillTitles',       ()=>updateSkillTitles(profileData));
    } else {
      console.error(uiText.profileNotLoaded);
    }
  } catch (error) {
    console.error(uiText.profileLoadError, error);
  }
})();


// --- Funções para Alternar Tema (Claro/Escuro) ---
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return; // Verifica se o elemento existe

  const toggleIcon = themeToggle.querySelector("i"); // Seleciona o ícone dentro do botão
  const currentTheme = localStorage.getItem("theme") || "dark";

  // Função para atualizar o ícone com base no tema
  const updateIcon = (theme) => {
    // Remove ambas as classes de toggle
    toggleIcon.classList.remove("fa-toggle-off", "fa-toggle-on");

    if (theme === "light") {
      toggleIcon.classList.add("fa-toggle-on");
    } else {
      toggleIcon.classList.add("fa-toggle-off");
    }
  };

  // Aplicar o tema salvo anteriormente e atualizar o ícone
  if (currentTheme === "light") {
    document.body.classList.add("light-theme");
  } else {
    document.body.classList.add("dark-theme");
  }
  updateIcon(currentTheme);

  // Adicionar evento de clique para alternar o tema
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");

    const theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
    updateIcon(theme);
    localStorage.setItem("theme", theme);
  });
});

// --- Funções para Favoritar Página ---
const favoriteToggle = document.getElementById("favorite-toggle");
if (favoriteToggle) {
  // Verifica se o elemento existe
  const favoriteIcon = favoriteToggle.querySelector("i"); // Ícone de favorito
  const isFavorited = localStorage.getItem("isFavorited") === "true";

  // Função para atualizar o ícone de favorito
  const updateFavoriteIcon = (favorited) => {
    if (favorited) {
      favoriteIcon.classList.remove("fa-regular", "fa-star");
      favoriteIcon.classList.add("fa-solid", "fa-star");
    } else {
      favoriteIcon.classList.remove("fa-solid", "fa-star");
      favoriteIcon.classList.add("fa-regular", "fa-star");
    }
  };

  // Aplicar o estado de favorito salvo anteriormente e atualizar o ícone
  updateFavoriteIcon(isFavorited);

  // Evento de clique para alternar o favorito
  favoriteToggle.addEventListener("click", () => {
    const favorited = localStorage.getItem("isFavorited") === "true";
    const newFavoriteStatus = !favorited;
    updateFavoriteIcon(newFavoriteStatus);
    localStorage.setItem("isFavorited", newFavoriteStatus);
  });
}
