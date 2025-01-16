// Mapeamento de Habilidades para Classes do Font Awesome (se não estiver na API)
const skillIconMapping = {
  // **Linguagens de Programação**
  Python: "fab fa-python",
  "C++": "fas fa-code",
  JavaScript: "fab fa-js-square",
  HTML: "fab fa-html5",
  CSS: "fab fa-css3-alt",
  Java: "fab fa-java",
  "C#": "fas fa-code", // Não há ícone específico para C#, usando fa-code como alternativa
  Ruby: "fas fa-gem",
  Go: "fas fa-golang",
  Swift: "fas fa-swift",
  Kotlin: "fas fa-code", // Não há ícone específico para Kotlin, usando fa-code
  PHP: "fab fa-php",
  TypeScript: "fas fa-code", // Não há ícone específico, usando fa-code
  Rust: "fas fa-code", // Não há ícone específico, usando fa-code
  Scala: "fas fa-code", // Não há ícone específico, usando fa-code
  Perl: "fas fa-code", // Não há ícone específico, usando fa-code
  R: "fas fa-chart-line",
  SQL: "fas fa-database",
  "Objective-C": "fas fa-code", // Não há ícone específico, usando fa-code

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
  Svelte: "fas fa-code", // Não há ícone específico, usando fa-code
  "Ember.js": "fas fa-code", // Não há ícone específico, usando fa-code
  jQuery: "fas fa-code", // Não há ícone específico, usando fa-code
  TensorFlow: "fas fa-brain", // Usando fa-brain como alternativa
  Keras: "fas fa-brain", // Usando fa-brain como alternativa
  PyTorch: "fas fa-brain", // Usando fa-brain como alternativa
  "ASP.NET Core": "fas fa-code",
  "Next.js": "fas fa-code", // Não há ícone específico, usando fa-code

  // **Bancos de Dados**
  MySQL: "fas fa-database",
  PostgreSQL: "fas fa-database",
  MongoDB: "fas fa-database", // Não há ícone específico, usando fa-database
  SQLite: "fas fa-database", // Não há ícone específico, usando fa-database
  Redis: "fas fa-server", // Usando fa-server como alternativa
  Oracle: "fas fa-database", // Não há ícone específico, usando fa-database
  MariaDB: "fas fa-database", // Não há ícone específico, usando fa-database
  Firebase: "fas fa-fire",
  Cassandra: "fas fa-database", // Não há ícone específico, usando fa-database
  Elasticsearch: "fas fa-search",
  CouchDB: "fas fa-database", // Não há ícone específico, usando fa-database

  // **Ferramentas e Plataformas**
  Git: "fab fa-git-alt",
  GitHub: "fab fa-github",
  GitLab: "fab fa-gitlab",
  Bitbucket: "fab fa-bitbucket",
  Docker: "fab fa-docker",
  Kubernetes: "fas fa-cube", // Usando fa-cube como alternativa
  Jenkins: "fas fa-cogs",
  "Travis CI": "fas fa-code", // Não há ícone específico, usando fa-code
  CircleCI: "fas fa-code", // Não há ícone específico, usando fa-code
  AWS: "fab fa-aws",
  Azure: "fab fa-azure",
  "Google Cloud": "fab fa-google-cloud",
  Heroku: "fab fa-heroku",
  Netlify: "fas fa-code", // Não há ícone específico, usando fa-code
  Vercel: "fas fa-code", // Não há ícone específico, usando fa-code
  Webpack: "fas fa-box-open", // Usando fa-box-open como alternativa
  Babel: "fas fa-code", // Não há ícone específico, usando fa-code
  NPM: "fab fa-npm",
  Yarn: "fab fa-yarn",
  Webpack: "fas fa-box-open", // Usando fa-box-open como alternativa
  Bower: "fas fa-code", // Não há ícone específico, usando fa-code

  // **Controle de Versão**
  SVN: "fas fa-code-branch", // Usando fa-code-branch como alternativa
  Mercurial: "fas fa-code-branch", // Usando fa-code-branch como alternativa

  // **Outras Tecnologias**
  GraphQL: "fas fa-project-diagram", // Usando fa-project-diagram como alternativa
  TypeScript: "fab fa-js-square", // Usando fa-js-square como alternativa
  GraphQL: "fas fa-project-diagram",
  SASS: "fab fa-sass",
  LESS: "fas fa-code", // Não há ícone específico, usando fa-code
  "Tailwind CSS": "fab fa-css3-alt", // Usando fa-css3-alt como alternativa
  "Material-UI": "fas fa-palette", // Usando fa-palette como alternativa
  Bulma: "fas fa-code", // Não há ícone específico, usando fa-code
  "Ant Design": "fas fa-code", // Não há ícone específico, usando fa-code
  Bootstrap: "fab fa-bootstrap",
  Materialize: "fas fa-code", // Não há ícone específico, usando fa-code
  Foundation: "fas fa-code", // Não há ícone específico, usando fa-code
  Redux: "fas fa-sync", // Usando fa-sync como alternativa
  MobX: "fas fa-sync", // Usando fa-sync como alternativa
  "Next.js": "fas fa-code", // Não há ícone específico, usando fa-code
  Gatsby: "fas fa-code", // Não há ícone específico, usando fa-code
  "Nuxt.js": "fas fa-code", // Não há ícone específico, usando fa-code
  Electron: "fas fa-microchip", // Usando fa-microchip como alternativa
  Cordova: "fas fa-mobile-alt", // Usando fa-mobile-alt como alternativa
  Ionic: "fas fa-mobile-alt", // Usando fa-mobile-alt como alternativa
  Flutter: "fas fa-mobile-alt", // Usando fa-mobile-alt como alternativa
  "React Native": "fab fa-react",
  "ASP.NET": "fas fa-code",
  "ASP.NET Core": "fas fa-code",
  Blazor: "fas fa-code", // Não há ícone específico, usando fa-code

  // **Ferramentas de Design e Prototipagem**
  Figma: "fab fa-figma",
  "Adobe XD": "fab fa-adobe",
  Sketch: "fas fa-paint-brush", // Usando fa-paint-brush como alternativa
  InVision: "fas fa-eye", // Usando fa-eye como alternativa
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
  "Android Studio": "fas fa-android", // Usando fa-android como alternativa
  Terminal: "fas fa-terminal",
  "Command Prompt": "fas fa-terminal",
  PowerShell: "fas fa-terminal",
  "Docker Compose": "fab fa-docker",
  Ansible: "fas fa-cogs",
  Terraform: "fas fa-tools", // Usando fa-tools como alternativa
  Puppet: "fas fa-cogs",
  Chef: "fas fa-cogs",
  Pycharm: "fas fa-code",
  Jupyter: "fas fa-brain", // Usando fa-brain como alternativa
  Unity: "fab fa-unity",
  "Unreal Engine": "fas fa-project-diagram", // Usando fa-project-diagram como alternativa
  Blender: "fas fa-cube", // Usando fa-cube como alternativa
  Photoshop: "fab fa-adobe",
  GIMP: "fas fa-paint-brush", // Usando fa-paint-brush como alternativa

  // **Sistemas Operacionais**
  Windows: "fab fa-windows",
  Linux: "fab fa-linux",
  macOS: "fab fa-apple",
  Ubuntu: "fab fa-ubuntu",
  Fedora: "fas fa-code", // Não há ícone específico, usando fa-code
  Debian: "fas fa-code", // Não há ícone específico, usando fa-code

  // **Controle de Qualidade e Testes**
  Jest: "fas fa-vial", // Usando fa-vial como alternativa
  Mocha: "fas fa-coffee", // Usando fa-coffee como alternativa
  Selenium: "fas fa-robot",
  Cypress: "fas fa-code", // Não há ícone específico, usando fa-code
  JUnit: "fas fa-code", // Não há ícone específico, usando fa-code
  Mockito: "fas fa-code", // Não há ícone específico, usando fa-code
  Postman: "fas fa-envelope", // Usando fa-envelope como alternativa

  // **DevOps e CI/CD**
  Jenkins: "fas fa-cogs",
  "Travis CI": "fas fa-code", // Não há ícone específico, usando fa-code
  CircleCI: "fas fa-code", // Não há ícone específico, usando fa-code
  Bamboo: "fas fa-code", // Não há ícone específico, usando fa-code
  TeamCity: "fas fa-code", // Não há ícone específico, usando fa-code
  "GitLab CI": "fas fa-code", // Não há ícone específico, usando fa-code

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
  GraphQL: "fas fa-project-diagram",
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
  Firebase: "fas fa-fire",
  Heroku: "fab fa-heroku",
  DigitalOcean: "fas fa-cloud",
  Vultr: "fas fa-cloud",
  Linode: "fas fa-cloud",
  "Alibaba Cloud": "fas fa-cloud",
  "Oracle Cloud": "fas fa-cloud",
  "IBM Cloud": "fas fa-cloud",

  // **Containers e Virtualização**
  Kubernetes: "fas fa-cube",
  "Docker Compose": "fab fa-docker",
  VirtualBox: "fas fa-desktop", // Usando fa-desktop como alternativa
  VMware: "fas fa-desktop", // Usando fa-desktop como alternativa
  Vagrant: "fas fa-code", // Não há ícone específico, usando fa-code

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
  "IntelliJ IDEA": "fas fa-code",
  Eclipse: "fas fa-code",
  PyCharm: "fas fa-code",
  Atom: "fas fa-code",
  "Sublime Text": "fas fa-code",
  Vim: "fas fa-code",
  Emacs: "fas fa-code",
  "Notepad++": "fas fa-code",
  Xcode: "fas fa-code",
  "Android Studio": "fas fa-android",
  WebStorm: "fas fa-code",
  PhpStorm: "fas fa-code",
  RubyMine: "fas fa-code",

  // **Outras Linguagens e Tecnologias Específicas**
  Lua: "fas fa-code", // Não há ícone específico, usando fa-code
  "Shell Scripting": "fas fa-terminal",
  PowerShell: "fas fa-terminal",
  "Batch Scripting": "fas fa-terminal",
  COBOL: "fas fa-code", // Não há ícone específico, usando fa-code
  Fortran: "fas fa-code", // Não há ícone específico, usando fa-code
  Haskell: "fas fa-code", // Não há ícone específico, usando fa-code
  Elixir: "fas fa-code", // Não há ícone específico, usando fa-code
  Clojure: "fas fa-code", // Não há ícone específico, usando fa-code
  "F#": "fas fa-code", // Não há ícone específico, usando fa-code
  Erlang: "fas fa-code", // Não há ícone específico, usando fa-code
  Groovy: "fas fa-code", // Não há ícone específico, usando fa-code

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
  Bioinformatics: "fas fa-microscope", // Usando fa-microscope como alternativa
  Cybersecurity: "fas fa-shield-alt",
  Bioinformatics: "fas fa-microscope",
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
  MATLAB: "fas fa-code", // Não há ícone específico, usando fa-code
  LaTeX: "fas fa-file-alt",
  Pandas: "fas fa-table",
  NumPy: "fas fa-square", // Usando fa-square como alternativa
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
  Flask: "fas fa-flask",
  Pyramid: "fas fa-leaf",
  CherryPy: "fas fa-code",
  Tornado: "fas fa-wind",
  Twisted: "fas fa-code",
  Falcon: "fas fa-bolt",
  Bottle: "fas fa-flask",
  Bottle: "fas fa-flask",
  Zappa: "fas fa-cloud",
  Hug: "fas fa-code",

  // **No Icon Available**
  // Para habilidades sem ícones específicos no Font Awesome, você pode usar um ícone genérico como 'fas fa-tools' ou 'fas fa-code'.
  // Exemplos:
  "Unknown Skill 1": "fas fa-tools",
  "Unknown Skill 2": "fas fa-code",
};

function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile.photo");
  if (photo) {
    photo.src = profileData.photo;
    photo.alt = profileData.name;
  }

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
  const graduetescaleContainer = document.getElementById(
    "profile.graduetescale"
  );
  if (graduetescaleContainer && profileData.graduetescale) {
    const progress = graduetescaleContainer.querySelector(".progress");
    const progressText = graduetescaleContainer.querySelector(".progress-text");
    if (progress && progressText) {
      const completed = profileData.graduetescale.completed;
      const total = profileData.graduetescale.total;
      const percentage = Math.min((completed / total) * 100, 100).toFixed(2); // Limita a 100% e formata para 2 casas decimais
      progress.style.width = `${percentage}%`;
      progressText.innerText = `${completed} de ${total} disciplinas cursadas (${percentage}%)`;
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

  // Atualizar o título do documento
  if (profileData.title) {
    document.title = profileData.title;
  }
}

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
  document.querySelectorAll(".hard-skills li").forEach((item) => {
    item.addEventListener("click", () => {
      // Remove a classe 'active' de todos os itens
      document
        .querySelectorAll(".hard-skills li")
        .forEach((el) => el.classList.remove("active"));

      // Adiciona a classe 'active' ao item clicado
      item.classList.add("active");

      // Define um tempo para esconder o balão automaticamente
      setTimeout(() => {
        item.classList.remove("active");
      }, 2000); // 3 segundos
    });
  });

  // Adiciona um evento global para detectar cliques fora dos itens
  document.addEventListener("click", (event) => {
    // Verifica se o clique não foi em um item da lista
    if (!event.target.closest(".hard-skills li")) {
      document
        .querySelectorAll(".hard-skills li")
        .forEach((el) => el.classList.remove("active"));
    }
  });
}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById("profile.skills.softSkills");
  if (softSkills) {
    softSkills.innerHTML = profileData.skills.softSkills
      .map((skill) => `<li>${skill}</li>`)
      .join("");
  }
}

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

function updateProfessionalExperience(profileData) {
  const professionalExperience = document.getElementById(
    "profile.professionalExperience"
  );
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

(async () => {
  try {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
    updateProfessionalExperience(profileData);
  } catch (error) {
    console.error("Erro ao atualizar o perfil:", error);
  }
})();

// Código para alternar tema permanece o mesmo...
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const toggleIcon = themeToggle.querySelector("i"); // Seleciona o ícone dentro do botão
  const currentTheme = localStorage.getItem("theme") || "dark";

  // Função para atualizar o ícone com base no tema
  const updateIcon = (theme) => {
    if (theme === "light") {
      toggleIcon.classList.remove("fa-moon");
      toggleIcon.classList.add("fa-sun");
    } else {
      toggleIcon.classList.remove("fa-sun");
      toggleIcon.classList.add("fa-moon");
    }
  };

  // Aplicar o tema salvo anteriormente e atualizar o ícone
  if (currentTheme === "light") {
    document.body.classList.add("light-theme");
    updateIcon("light");
  } else {
    updateIcon("dark");
  }

  // Adicionar evento de clique para alternar o tema
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      const theme = document.body.classList.contains("light-theme")
        ? "light"
        : "dark";
      updateIcon(theme);
      localStorage.setItem("theme", theme);
    });
  }
});
