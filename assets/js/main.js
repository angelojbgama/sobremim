// --- Iconografia de habilidades com sanidade de fallbacks ---
const FALLBACK_ICON = 'fas fa-code';
const ICON_STYLE_CLASSES = new Set([
  'fas',
  'far',
  'fab',
  'fal',
  'fat',
  'fad',
  'fa-solid',
  'fa-regular',
  'fa-brands',
]);

const skillIconMapping = {
  // Linguagens
  python: 'fab fa-python',
  javascript: 'fab fa-js',
  typescript: 'fab fa-js',
  html: 'fab fa-html5',
  css: 'fab fa-css3-alt',
  java: 'fab fa-java',
  php: 'fab fa-php',
  ruby: 'fas fa-gem',
  'c': 'fas fa-code',
  'c++': 'fas fa-code',
  'c#': 'fas fa-code',
  go: 'fas fa-code',
  swift: 'fab fa-swift',
  kotlin: 'fas fa-mobile-alt',
  rust: 'fas fa-gears',
  scala: 'fas fa-code',
  perl: 'fas fa-code',
  r: 'fas fa-chart-line',
  sql: 'fas fa-database',
  'objective-c': 'fas fa-code',

  // Frameworks e bibliotecas
  react: 'fab fa-react',
  angular: 'fab fa-angular',
  vue: 'fab fa-vuejs',
  'vue.js': 'fab fa-vuejs',
  'nuxt.js': 'fab fa-vuejs',
  svelte: 'fas fa-fire',
  django: 'fas fa-leaf',
  flask: 'fas fa-flask',
  laravel: 'fab fa-laravel',
  spring: 'fas fa-seedling',
  'express.js': 'fas fa-server',
  express: 'fas fa-server',
  'ruby on rails': 'fas fa-gem',
  'asp.net': 'fas fa-code',
  'asp.net core': 'fas fa-code',
  'next.js': 'fas fa-layer-group',
  bootstrap: 'fab fa-bootstrap',
  tailwind: 'fas fa-wind',
  'tailwind css': 'fas fa-wind',
  jquery: 'fas fa-code',
  tensorflow: 'fas fa-brain',
  keras: 'fas fa-brain',
  pytorch: 'fas fa-brain',
  redux: 'fas fa-sync',
  mobx: 'fas fa-sync',
  graphql: 'fas fa-project-diagram',
  electron: 'fas fa-microchip',
  cordova: 'fas fa-mobile-alt',
  ionic: 'fas fa-mobile-alt',
  flutter: 'fas fa-mobile-alt',
  'react native': 'fab fa-react',
  fastapi: 'fas fa-bolt',
  celery: 'fas fa-seedling',

  // Bancos e dados
  mysql: 'fas fa-database',
  postgresql: 'fas fa-database',
  mongodb: 'fas fa-database',
  sqlite: 'fas fa-database',
  redis: 'fas fa-server',
  oracle: 'fas fa-database',
  mariadb: 'fas fa-database',
  firebase: 'fas fa-fire',
  cassandra: 'fas fa-database',
  elasticsearch: 'fas fa-search',
  couchdb: 'fas fa-database',

  // Ferramentas e plataformas
  git: 'fab fa-git-alt',
  github: 'fab fa-github',
  gitlab: 'fab fa-gitlab',
  bitbucket: 'fab fa-bitbucket',
  docker: 'fab fa-docker',
  kubernetes: 'fas fa-network-wired',
  jenkins: 'fas fa-cogs',
  'travis ci': 'fas fa-cogs',
  circleci: 'fas fa-cogs',
  aws: 'fab fa-aws',
  azure: 'fab fa-microsoft',
  'google cloud': 'fab fa-google',
  heroku: 'fas fa-cloud',
  netlify: 'fas fa-cloud',
  vercel: 'fas fa-cloud',
  webpack: 'fas fa-box-open',
  babel: 'fas fa-code',
  npm: 'fab fa-npm',
  yarn: 'fab fa-yarn',
  'docker compose': 'fab fa-docker',
  terraform: 'fas fa-tools',
  ansible: 'fas fa-cogs',
  puppet: 'fas fa-cogs',
  chef: 'fas fa-utensils',
  jira: 'fas fa-tasks',
  trello: 'fas fa-th-list',
  asana: 'fas fa-tasks',
  basecamp: 'fas fa-clipboard-list',
  monday: 'fas fa-calendar-alt',
  'monday.com': 'fas fa-calendar-alt',
  figma: 'fab fa-figma',
  'adobe xd': 'fab fa-adobe',
  sketch: 'fas fa-paint-brush',
  invision: 'fas fa-eye',
  photoshop: 'fab fa-adobe',
  illustrator: 'fab fa-adobe',
  'after effects': 'fab fa-adobe',
  'premiere pro': 'fab fa-adobe',
  postman: 'fas fa-paper-plane',
  selenium: 'fas fa-robot',
  cypress: 'fas fa-vial',
  jest: 'fas fa-vial',
  mocha: 'fas fa-coffee',
  junit: 'fas fa-code',
  pytest: 'fas fa-vial',

  // Outros conceitos
  agile: 'fas fa-project-diagram',
  scrum: 'fas fa-tasks',
  kanban: 'fas fa-th-list',
  'rest api': 'fas fa-network-wired',
  websocket: 'fas fa-plug',
  microservices: 'fas fa-project-diagram',
  serverless: 'fas fa-cloud',
  'ci/cd': 'fas fa-sync-alt',
  devsecops: 'fas fa-shield-alt',
  cybersecurity: 'fas fa-shield-alt',
  blockchain: 'fas fa-link',
  'machine learning': 'fas fa-brain',
  'artificial intelligence': 'fas fa-brain',
  'data science': 'fas fa-chart-line',
  'big data': 'fas fa-database',
  'data visualization': 'fas fa-chart-bar',
  'computer vision': 'fas fa-eye',
  'internet of things': 'fas fa-project-diagram',
  robotics: 'fas fa-robot',
  'augmented reality': 'fas fa-eye',
  'virtual reality': 'fas fa-vr-cardboard',
  'quantum computing': 'fas fa-microchip',
  'edge computing': 'fas fa-network-wired',

  // Sistemas operacionais e IDEs
  windows: 'fab fa-windows',
  linux: 'fab fa-linux',
  macos: 'fab fa-apple',
  ubuntu: 'fab fa-ubuntu',
  debian: 'fas fa-code',
  fedora: 'fas fa-code',
  'visual studio code': 'fas fa-code',
  'visual studio': 'fas fa-code',
  'intellij idea': 'fas fa-code',
  webstorm: 'fas fa-code',
  phpstorm: 'fas fa-code',
  rubymine: 'fas fa-code',
  eclipse: 'fas fa-code',
  pycharm: 'fas fa-code',
  atom: 'fas fa-code',
  'sublime text': 'fas fa-code',
  vim: 'fas fa-code',
  emacs: 'fas fa-code',
  'notepad++': 'fas fa-code',
  xcode: 'fas fa-laptop-code',
  'android studio': 'fab fa-android',
  terminal: 'fas fa-terminal',
  powershell: 'fas fa-terminal',

  // Bibliotecas de dados/ciência
  pandas: 'fas fa-table',
  numpy: 'fas fa-square-root-alt',
  scipy: 'fas fa-flask',
  matplotlib: 'fas fa-chart-line',
  seaborn: 'fas fa-chart-area',
  plotly: 'fas fa-chart-pie',
  'd3.js': 'fas fa-chart-line',
  opencv: 'fas fa-eye',
  'scikit-learn': 'fas fa-brain',
  matlab: 'fas fa-square-root-alt',
  latex: 'fas fa-file-alt',
  notebook: 'fas fa-book',
};

function normalizeSkillKey(name) {
  return typeof name === 'string' ? name.trim().toLowerCase() : '';
}

function sanitizeIconClass(value) {
  if (typeof value !== 'string') return FALLBACK_ICON;
  const tokens = value.trim().split(/\s+/).filter(Boolean);
  if (!tokens.length) return FALLBACK_ICON;

  let styleToken = tokens.find((token) => ICON_STYLE_CLASSES.has(token));
  let iconToken = tokens.find(
    (token) => token.startsWith('fa-') && !ICON_STYLE_CLASSES.has(token)
  );

  if (!iconToken) return FALLBACK_ICON;
  styleToken = styleToken || 'fas';
  return `${styleToken} ${iconToken}`;
}

function resolveSkillIcon(skillName, overrideIcon) {
  if (overrideIcon) return sanitizeIconClass(overrideIcon);
  const key = normalizeSkillKey(skillName);
  const mapped = key ? skillIconMapping[key] : '';
  return sanitizeIconClass(mapped || FALLBACK_ICON);
}

function applyStaticUiText(uiText) {
  if (!uiText || typeof uiText !== 'object') return;
  const setAttrById = (id, attr, value) => {
    if (!value) return;
    const el = document.getElementById(id);
    if (el) el.setAttribute(attr, value);
  };

  setAttrById('download-pdf', 'aria-label', uiText.downloadPdfAria);
  setAttrById('theme-toggle', 'aria-label', uiText.toggleThemeAria);
  setAttrById('icon.profile.job', 'aria-label', uiText.iconJobAria);
  setAttrById('icon.profile.graduate', 'aria-label', uiText.iconGraduateAria);
  setAttrById('icon.profile.location', 'aria-label', uiText.iconLocationAria);
  setAttrById('icon.profile.phone', 'aria-label', uiText.iconPhoneAria);
  setAttrById('icon.profile.email', 'aria-label', uiText.iconEmailAria);
  setAttrById('hardSkillsBars', 'aria-label', uiText.hardSkillsChartLabel);
  setAttrById('footer.social', 'aria-label', uiText.footerSocialAria);

  const madeWith = document.getElementById('footer.madeWith');
  if (madeWith && uiText.footerMadeWith) madeWith.textContent = uiText.footerMadeWith;
  const loveLabel = document.getElementById('footer.loveLabel');
  if (loveLabel && uiText.footerLoveSrLabel) loveLabel.textContent = uiText.footerLoveSrLabel;
  const byLabel = document.getElementById('footer.byLabel');
  if (byLabel && uiText.footerByLabel) byLabel.textContent = uiText.footerByLabel;
}

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

  const shortName = document.getElementById("profile.shortName");
  if (shortName) {
    shortName.innerText = profileData.shortName || profileData.name || '';
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
      const ui = profileData.translations || {};
      const completedLabel = ui.completedLabel || 'disciplinas cursadas';
      progressText.innerText = `${completed} ${completedLabel} ${ui.ofLabel || 'de'} ${total} (${percentage}%)`;
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
    const raw = String(profileData.phone || '');
    const digits = raw.replace(/\D/g, "");
    const ddiRaw = (profileData.phoneCountryCode || profileData.countryCode || "+55").replace(/[^\d+]/g, "");
    const dialCode = ddiRaw.startsWith('+') ? ddiRaw.slice(1) : ddiRaw;
    const normalizedDial = dialCode || '55';
    const waNumber = digits.startsWith(normalizedDial) ? digits : `${normalizedDial}${digits}`;
    if (digits) {
      phone.href = `https://wa.me/${waNumber}`;
    } else {
      const telDigits = raw.replace(/[^\d+]/g, "");
      phone.href = telDigits ? `tel:${telDigits}` : '#';
    }
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
function formatWithCount(template, count) {
  return String(template || '').replace('{count}', count);
}

function collectHardSkills(profileData) {
  const entries = new Map();

  const ensureEntry = (rawName) => {
    const name = typeof rawName === 'string' ? rawName.trim() : '';
    if (!name) return null;
    if (!entries.has(name)) {
      entries.set(name, {
        name,
        projectNames: new Set(),
        level: null,
        iconOverride: null,
      });
    }
    return entries.get(name);
  };

  const hardSkillList =
    profileData &&
    profileData.skills &&
    Array.isArray(profileData.skills.hardSkills)
      ? profileData.skills.hardSkills
      : [];

  hardSkillList.forEach((skill) => {
    if (!skill) return;
    if (typeof skill === 'string') {
      ensureEntry(skill);
      return;
    }
    const entry = ensureEntry(skill.name);
    if (!entry) return;
    if (typeof skill.level === 'number' && Number.isFinite(skill.level)) {
      entry.level = skill.level;
    }
    if (skill.iconClass) {
      entry.iconOverride = skill.iconClass;
    }
  });

  const portfolio = Array.isArray(profileData?.portfolio)
    ? profileData.portfolio
    : [];

  portfolio.forEach((project) => {
    const technologies = Array.isArray(project?.technologies)
      ? project.technologies
      : [];
    technologies.forEach((tech) => {
      const entry = ensureEntry(tech);
      if (!entry) return;
      if (project?.name) {
        entry.projectNames.add(project.name);
      }
    });
  });

  return Array.from(entries.values()).map((entry) => ({
    name: entry.name,
    iconOverride: entry.iconOverride,
    level: entry.level,
    projectCount: entry.projectNames.size,
    projectNames: Array.from(entry.projectNames),
  }));
}

function updateHardSkills(profileData, uiText) {
  const container = document.getElementById('hard-skills-chart-container');
  if (!container) return;

  const hardSkills = collectHardSkills(profileData);
  if (hardSkills.length === 0) {
    const emptyText = (uiText && uiText.noHardSkills) || 'No skills registered.';
    container.innerHTML = `<p class="hard-skills-empty">${emptyText}</p>`;
    return;
  }

  const usageSingular =
    (uiText && uiText.hardSkillUsageSingular) || 'Used in {count} project';
  const usagePlural =
    (uiText && uiText.hardSkillUsagePlural) || 'Used in {count} projects';
  const usageNone =
    (uiText && uiText.hardSkillUsageNone) || 'No related projects yet';
  const levelLabel =
    (uiText && uiText.hardSkillLevelLabel) || 'Level';
  const projectsLabel =
    (uiText && uiText.hardSkillProjectsLabel) || 'Projects';

  const list = document.createElement('ul');
  list.className = 'hard-skills-list';

  hardSkills
    .sort((a, b) => {
      if (b.projectCount !== a.projectCount) {
        return b.projectCount - a.projectCount;
      }
      return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
    })
    .forEach((skill) => {
      const projectCount = skill.projectCount;
      const hasProjects = projectCount > 0;
      const indicatorText = hasProjects
        ? formatWithCount(projectCount === 1 ? usageSingular : usagePlural, projectCount)
        : usageNone;

      let countClass = '';
      if (projectCount > 0) {
        if (projectCount <= 2) countClass = 'count-low';
        else if (projectCount <= 4) countClass = 'count-medium';
        else countClass = 'count-high';
      }

      const icon = resolveSkillIcon(skill.name, skill.iconOverride);
      const levelMarkup =
        typeof skill.level === 'number' && Number.isFinite(skill.level)
          ? `<span class="hard-skill-level" aria-label="${levelLabel}: ${skill.level}/10">${levelLabel}: ${skill.level}/10</span>`
          : '';
      const projectsTitle = hasProjects
        ? `${projectsLabel}: ${skill.projectNames.join(', ')}`
        : '';

      const item = document.createElement('li');
      item.className = 'hard-skill-item';
      if (projectsTitle) {
        item.title = projectsTitle;
      }
      item.innerHTML = `
        <div class="hard-skill-indicator ${countClass}">${projectCount}</div>
        <div class="hard-skill-name">
          <i class="${icon}" aria-hidden="true"></i>
          <span>${skill.name}</span>
        </div>
        <span class="hard-skill-usage">${indicatorText}</span>
        ${levelMarkup}
      `;
      list.appendChild(item);
    });

  container.innerHTML = '';
  container.appendChild(list);
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
    const viewLabel = (uiText && uiText.viewLanguageCertification) || 'View';
    const itemsHtml = certs.map((c) => {
      const name = c.name || c.title || '';
      const issuer = c.issuer ? ` · ${c.issuer}` : '';
      const score = (c.score || c.levelText) ? ` · ${c.score || c.levelText}` : '';
      const date = c.date ? ` · ${c.date}` : '';
      const meta = `${issuer}${score}${date}`;
      const link = c.url ? `<a class="language-certs__link" href="${c.url}" target="_blank" rel="noopener noreferrer">${viewLabel}</a>` : '';
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
function updatePortfolio(profileData, uiText) {
  const portfolio = document.getElementById("profile.portfolio");
  if (!portfolio) return;

  const items = Array.isArray(profileData.portfolio) ? profileData.portfolio : [];
  const locale = uiText || {};
  const openLabel = locale.openProject || 'Open';
  const githubLabel = locale.portfolioGithubLabel || 'GitHub';
  const linkLabel = locale.portfolioLinkLabel || 'Link';

  portfolio.innerHTML = items
    .map((project) => {
      const isGithub = !!project.github;
      const icon = isGithub ? 'fab fa-github' : 'fas fa-link';
      const label = isGithub ? githubLabel : linkLabel;
      const url = project.url || '#';
      const desc = (project.description || '').trim();
      const technologies = Array.isArray(project.technologies) ? project.technologies : [];

      const technologiesHTML = technologies.length > 0 ? `
        <div class="portfolio-technologies">
          ${technologies.map((tech) => `<span class="tag"><i class="${resolveSkillIcon(tech)}"></i> ${tech}</span>`).join('')}
        </div>
      ` : '';

      return `
        <li class="portfolio-item">
          <div class="portfolio-info">
            <h3 class="portfolio-title">
              <i class="${icon}" aria-hidden="true"></i> ${project.name}
            </h3>
            ${desc ? `<p class="portfolio-description">${desc}</p>` : ''}
            ${technologiesHTML}
          </div>
          <a class="btn btn-open-link" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${label}: ${project.name}">
            <i class="${icon}" aria-hidden="true"></i> <span>${openLabel}</span>
          </a>
        </li>
      `;
    })
    .join("");
}

function calcularDuracao(periodo, traducoes) {
  const [inicio, fim] = periodo.split(" - ").map(str => str.trim());

  // Função para converter a string da data em objeto Date
  function parseData(dataStr) {
      if (!dataStr) return new Date();
      if (traducoes && typeof traducoes.current === 'string' && dataStr.toLowerCase() === traducoes.current.toLowerCase()) {
          return new Date();
      }

      const partes = dataStr.split(" ");
      const mes = partes[0];
      const ano = partes[partes.length - 1];

      const mesIndex = traducoes && traducoes.months ? traducoes.months[mes] : undefined;
      if (mesIndex === undefined) {
          return new Date(); // Retorna a data atual para evitar falhas
      }

      return new Date(parseInt(ano, 10), mesIndex, 1);
  }

  const dataInicio = parseData(inicio);
  const dataFim = parseData(fim);

  let anos = dataFim.getFullYear() - dataInicio.getFullYear();
  let mesesDuracao = dataFim.getMonth() - dataInicio.getMonth();

  if (mesesDuracao < 0) {
      anos--;
      mesesDuracao += 12;
  }

  const joinWord = (traducoes && typeof traducoes.and === 'string' && traducoes.and.trim()) || 'e';
  let duracao = "";
  if (anos > 0) {
      duracao += `${anos} ${anos > 1 ? traducoes.years_plural : traducoes.years}`;
  }
  if (mesesDuracao > 0) {
      if (anos > 0) duracao += ` ${joinWord} `;
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
    const emptyText = (uiText && uiText.noCertifications) || 'No certifications available.';
    list.innerHTML = `<li class='certifications__empty'>${emptyText}</li>`;
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
  applyStaticUiText(uiText);
  try {
    const profileData = await fetchProfileData(uiText.language);
    if (profileData) {
      const safe=(l,fn)=>{ try { fn(); } catch(e) { console.error(`[update:${l}]`, e); } };
      safe('profileInfo',       ()=>updateProfileInfo(profileData));
      safe('softSkills',        ()=>updateSoftSkills(profileData));
      safe('hardSkills',        ()=>updateHardSkills(profileData, uiText));
      safe('languages',         ()=>updateLanguages(profileData, uiText));
      safe('portfolio',         ()=>updatePortfolio(profileData, uiText));
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

  // Atualiza ano no rodapé
  const yearEl = document.getElementById('footer.year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

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

