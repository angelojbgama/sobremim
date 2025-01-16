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
  "WebStorm": "fas fa-code",
  "PhpStorm": "fas fa-code",
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

// --- Função para Detectar o Idioma do Navegador e Carregar o JSON Correspondente ---
async function fetchProfileData() {
  // Detecta o idioma do navegador
  let language = navigator.language || navigator.userLanguage;
  language = language.substring(0, 2).toLowerCase(); // Extrai o código do idioma (ex: 'pt', 'en', 'es')

  // Lista de idiomas suportados
  const supportedLanguages = ["pt", "en", "es"];

  // Verifica se o idioma detectado é suportado; caso contrário, define como padrão ('pt')
  if (!supportedLanguages.includes(language)) {
    language = "pt";
  }

  // Define o caminho do arquivo JSON baseado no idioma
  const url = `data/profile_${language}.json`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro ao carregar o arquivo JSON: ${response.statusText}`);
    }

    const profileData = await response.json();
    return profileData;
  } catch (error) {
    console.error(error);
    // Opcional: Retornar dados padrão ou exibir uma mensagem de erro para o usuário
    return null;
  }
}

// --- Funções para Atualizar Diferentes Partes do Perfil ---

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
  const graduetescaleContainer = document.getElementById("profile.graduetescale");
  if (graduetescaleContainer && profileData.graduetescale) {
    const progress = graduetescaleContainer.querySelector(".progress");
    const progressText = graduetescaleContainer.querySelector(".progress-text");
    if (progress && progressText) {
      const completed = profileData.graduetescale.completed;
      const total = profileData.graduetescale.total;
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
          <li>
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

  // Adicionar Event Listeners para Interatividade
  document.querySelectorAll(".hard-skills li").forEach((item) => {
    item.addEventListener("click", () => {
      // Remove a classe 'active' de todos os itens
      document.querySelectorAll(".hard-skills li").forEach((el) => el.classList.remove("active"));

      // Adiciona a classe 'active' ao item clicado
      item.classList.add("active");

      // Define um tempo para esconder o balão automaticamente
      setTimeout(() => {
        item.classList.remove("active");
      }, 2000); // 2 segundos
    });
  });

  // Adiciona um evento global para detectar cliques fora dos itens
  document.addEventListener("click", (event) => {
    // Verifica se o clique não foi em um item da lista
    if (!event.target.closest(".hard-skills li")) {
      document.querySelectorAll(".hard-skills li").forEach((el) => el.classList.remove("active"));
    }
  });
}

// 3. Atualizar Habilidades Comportamentais (Soft Skills)
function updateSoftSkills(profileData) {
  const softSkills = document.getElementById("profile.skills.softSkills");
  if (softSkills) {
    softSkills.innerHTML = profileData.skills.softSkills
      .map((skill) => `<li>${skill}</li>`)
      .join("");
  }
}

// 4. Atualizar Idiomas
function updateLanguages(profileData) {
  const languages = document.getElementById("profile.languages");
  if (languages) {
    languages.innerHTML = profileData.languages
      .map(
        (language) => `
          <li>
              <i class="fas fa-language" aria-hidden="true"></i>
              <span class="info-text">${language}</span>
          </li>
      `
      )
      .join("");
  }
}

// 5. Atualizar Portfólio
function updatePortfolio(profileData) {
  const portfolio = document.getElementById("profile.portfolio");
  if (portfolio) {
    portfolio.innerHTML = profileData.portfolio
      .map(
        (project) => `
          <li>
              <h3 ${project.github ? 'class="github"' : ""}>
                  <i class="fas fa-link"></i> ${project.name}
              </h3>
              <a href="${project.url}" target="_blank">${project.url}</a>
          </li>
      `
      )
      .join("");
  }
}

// 6. Atualizar Experiência Profissional
function updateProfessionalExperience(profileData) {
  const professionalExperience = document.getElementById("profile.professionalExperience");
  if (professionalExperience) {
    professionalExperience.innerHTML = profileData.professionalExperience
      .map(
        (experience) => `
          <li>
              <h3 class="title">${experience.name}</h3>
              <p class="period">${experience.period}</p>
              <p>${experience.description}</p>
          </li>
      `
      )
      .join("");
  }
}

// 7. Atualizar Títulos dos Accordions
function updateAccordionTitles(profileData) {
  const accordionTitlesMapping = {
    titleSkills: "acordeon.titleSkills",
    titleLanguages: "acordeon.titleLanguages",
    titlePortfolio: "acordeon.titlePortfolio",
    titleProfessionalExperience: "acordeon.titleProfessionalExperience",
  };

  for (const [jsonKey, elementId] of Object.entries(accordionTitlesMapping)) {
    const titleElement = document.getElementById(elementId);
    if (titleElement && profileData[jsonKey]) {
      titleElement.innerText = profileData[jsonKey];
    }
  }
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
  try {
    const profileData = await fetchProfileData();
    if (profileData) {
      updateProfileInfo(profileData);
      updateSoftSkills(profileData);
      updateHardSkills(profileData);
      updateLanguages(profileData);
      updatePortfolio(profileData);
      updateProfessionalExperience(profileData);
      updateAccordionTitles(profileData); // Atualizar títulos dos accordions
      updateSkillTitles(profileData); // Atualizar títulos das seções internas das habilidades
    } else {
      console.error("Dados do perfil não foram carregados.");
    }
  } catch (error) {
    console.error("Erro ao atualizar o perfil:", error);
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

    const theme = document.body.classList.contains("light-theme") ? "light" : "dark";
    updateIcon(theme);
    localStorage.setItem("theme", theme);
  });
});

// --- Funções para Favoritar Página ---
const favoriteToggle = document.getElementById("favorite-toggle");
if (favoriteToggle) { // Verifica se o elemento existe
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
