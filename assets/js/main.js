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
  const hardSkills = document.getElementById("profile.skills.hardSkills");
  if (hardSkills) {
    hardSkills.innerHTML = profileData.skills.hardSkills
      .map(
        (skill) => `
          <li aria-label="${skill.name}">
              <i class="${
                skill.iconClass ||
                skillIconMapping[skill.name] ||
                "fas fa-tools"
              }" aria-hidden="true"></i>
              <span class="skill-name">${skill.name}</span>
          </li>
      `
      )
      .join("");
  }

  // Tooltip global sobreposto (acima de qualquer elemento)
  let tooltipEl = document.getElementById("app-tooltip");
  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.id = "app-tooltip";
    tooltipEl.className = "app-tooltip";
    document.body.appendChild(tooltipEl);
  }

  const showTooltip = (text) => {
    tooltipEl.textContent = text || "";
    tooltipEl.setAttribute("data-show", "true");
  };

  const hideTooltip = () => {
    tooltipEl.removeAttribute("data-show");
  };

  const placeTooltipAt = (x, y) => {
    const rect = tooltipEl.getBoundingClientRect();
    const vw = window.innerWidth || document.documentElement.clientWidth;
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const margin = 6;
    let left = Math.min(Math.max(x, margin), vw - rect.width - margin);
    let top = Math.min(Math.max(y, margin), vh - rect.height - margin);
    tooltipEl.style.left = left + "px";
    tooltipEl.style.top = top + "px";
  };

  const positionFromPointer = (e) => {
    const pad = 12;
    const h = tooltipEl.getBoundingClientRect().height || 24;
    placeTooltipAt(e.clientX + pad, e.clientY - (h + pad));
  };

  // Liga os eventos por item
  document.querySelectorAll(".hard-skills li").forEach((item) => {
    const getText = () =>
      item.querySelector(".skill-name")?.textContent?.trim() ||
      item.getAttribute("aria-label") ||
      "";

    item.addEventListener("mouseenter", (e) => {
      showTooltip(getText());
      positionFromPointer(e);
    });

    item.addEventListener("mousemove", (e) => {
      positionFromPointer(e);
    });

    item.addEventListener("mouseleave", () => {
      hideTooltip();
    });

    // Mobile/toque: mostra por 2s
    item.addEventListener("click", (e) => {
      showTooltip(getText());
      positionFromPointer(e);
      window.clearTimeout(item._hideTimer);
      item._hideTimer = window.setTimeout(hideTooltip, 2000);
    });
  });

  // Clique fora dos itens: esconder tooltip
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".hard-skills li")) {
      hideTooltip();
    }
  });
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
function updateLanguages(profileData) {
  const list = document.getElementById("profile.languages");
  if (!list) return;

  const items = Array.isArray(profileData.languages) ? profileData.languages : [];

  const levelLabel = (lvl) => {
    switch (Number(lvl)) {
      case 4: return "Fluente";
      case 3: return "Avançado";
      case 2: return "Intermediário";
      case 1: return "Básico";
      default: return "";
    }
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

// 7. Atualizar Títulos dos Accordions (com fallback ao uiText)
function updateAccordionTitles(profileData, uiText) {
  const accordionTitlesMapping = {
    titleSkills: "acordeon.titleSkills",
    titleLanguages: "acordeon.titleLanguages",
    titlePortfolio: "acordeon.titlePortfolio",
    titleProfessionalExperience: "acordeon.titleProfessionalExperience",
    titleCertifications: "acordeon.titleCertifications" // <-- NOVO
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
      updateProfileInfo(profileData);
      updateSoftSkills(profileData);
      updateHardSkills(profileData);
      updateLanguages(profileData);
      updatePortfolio(profileData);
      updateProfessionalExperience(profileData);

      // >>>>> ADICIONE ESTA LINHA:
      updateCertifications(profileData, uiText);

      updateAccordionTitles(profileData, uiText); // agora com ui fallback e certificações
      updateSkillTitles(profileData);
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
