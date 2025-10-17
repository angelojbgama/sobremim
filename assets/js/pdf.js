// assets/js/pdf.js — geração de currículo em PDF com layout estilo currículo usando PDF-LIB

document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.getElementById('download-pdf');
  if (!trigger || !window.PDFLib) return;

  const mmToPt = (mm) => (mm / 25.4) * 72;

  const palette = {
    brand: PDFLib.rgb(0, 0, 0),
    text: PDFLib.rgb(0.12, 0.12, 0.12),
    muted: PDFLib.rgb(0.45, 0.45, 0.45),
    stroke: PDFLib.rgb(0.78, 0.78, 0.78),
    surface: PDFLib.rgb(0.96, 0.96, 0.96),
  };

  const sectionTitles = {
    contact: { pt: 'Contato', en: 'Contact', es: 'Contacto' },
    summary: { pt: 'Resumo Profissional', en: 'Professional Summary', es: 'Resumen Profesional' },
    hardSkills: { pt: 'Competências Técnicas', en: 'Technical Skills', es: 'Competencias Técnicas' },
    softSkills: { pt: 'Competências Comportamentais', en: 'Soft Skills', es: 'Habilidades Blandas' },
    languages: { pt: 'Idiomas', en: 'Languages', es: 'Idiomas' },
    certifications: { pt: 'Certificações', en: 'Certifications', es: 'Certificaciones' },
    featuredProjects: { pt: 'Projetos em Destaque', en: 'Featured Projects', es: 'Proyectos Destacados' },
  };

  const resolveTitle = (key, lang) => sectionTitles[key]?.[lang] || sectionTitles[key]?.pt || key;

  const formatYM = (ym) => {
    if (!ym || typeof ym !== 'string') return ym || '';
    const [year, month] = ym.split('-');
    if (!year || !month) return ym;
    return `${month.padStart(2, '0')}/${year}`;
  };

  function calcularDuracao(periodo, traducoes) {
    if (typeof periodo !== 'string' || !periodo.includes(' - ')) return '';
    const [inicioStr, fimStr] = periodo.split(' - ').map((str) => str.trim());

    const parse = (dataStr) => {
      if (!dataStr) return new Date();
      if (
        traducoes &&
        typeof traducoes.current === 'string' &&
        dataStr.toLowerCase() === traducoes.current.toLowerCase()
      ) {
        return new Date();
      }
      const partes = dataStr.split(' ');
      const ano = partes[partes.length - 1];
      const mesNome = partes[0];
      const mesIndex = traducoes && traducoes.months ? traducoes.months[mesNome] : undefined;
      if (mesIndex === undefined) return new Date();
      return new Date(parseInt(ano, 10), mesIndex, 1);
    };

    const inicio = parse(inicioStr);
    const fim = parse(fimStr);

    let anos = fim.getFullYear() - inicio.getFullYear();
    let meses = fim.getMonth() - inicio.getMonth();

    if (meses < 0) {
      anos -= 1;
      meses += 12;
    }

    const joinWord = (traducoes && traducoes.and) || 'e';
    const anosLabel = anos === 1 ? traducoes?.years || 'ano' : traducoes?.years_plural || 'anos';
    const mesesLabel =
      meses === 1 ? traducoes?.months_text || 'mês' : traducoes?.months_plural || 'meses';

    const partes = [];
    if (anos > 0) partes.push(`${anos} ${anosLabel}`);
    if (meses > 0) partes.push(`${meses} ${mesesLabel}`);

    if (!partes.length) return traducoes?.lessThanAMonth || 'Menos de um mês';
    if (partes.length === 1) return partes[0];
    return `${partes[0]} ${joinWord} ${partes[1]}`;
  }

  function collectHardSkills(profile) {
    const entries = new Map();
    const ensure = (nameRaw) => {
      const name = typeof nameRaw === 'string' ? nameRaw.trim() : '';
      if (!name) return null;
      if (!entries.has(name)) {
        entries.set(name, { name, level: null, projectNames: new Set() });
      }
      return entries.get(name);
    };

    const hard = profile?.skills?.hardSkills;
    if (Array.isArray(hard)) {
      hard.forEach((item) => {
        if (!item) return;
        if (typeof item === 'string') {
          ensure(item);
          return;
        }
        const entry = ensure(item.name);
        if (!entry) return;
        const level = Number(item.level ?? item.score ?? item.proficiency);
        if (Number.isFinite(level)) entry.level = Math.max(entry.level ?? level, level);
      });
    }

    const portfolio = Array.isArray(profile?.portfolio) ? profile.portfolio : [];
    portfolio.forEach((project) => {
      const techs = Array.isArray(project?.technologies) ? project.technologies : [];
      techs.forEach((tech) => {
        const entry = ensure(tech);
        if (!entry) return;
        if (project?.name) entry.projectNames.add(project.name);
      });
    });

    return Array.from(entries.values())
      .map((entry) => ({
        name: entry.name,
        level: Number.isFinite(entry.level) ? Number(entry.level) : null,
        projectCount: entry.projectNames.size,
      }))
      .sort((a, b) => {
        if (b.projectCount !== a.projectCount) return b.projectCount - a.projectCount;
        if ((b.level || 0) !== (a.level || 0)) return (b.level || 0) - (a.level || 0);
        return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
      });
  }

  function collectSoftSkills(profile) {
    const soft = profile?.skills?.softSkills;
    if (!Array.isArray(soft)) return [];
    return soft
      .map((item) => {
        if (typeof item === 'string') return { name: item.trim(), percent: null };
        if (item && typeof item === 'object') {
          const name = typeof item.name === 'string' ? item.name.trim() : '';
          const percent = Number(item.percent ?? item.percentage);
          return name ? { name, percent: Number.isFinite(percent) ? percent : null } : null;
        }
        return null;
      })
      .filter((item) => item && item.name);
  }

  function splitText(text, font, fontSize, maxWidth) {
    if (!text) return [];
    const cleaned = String(text).replace(/\s+/g, ' ').trim();
    if (!cleaned) return [];
    const words = cleaned.split(' ');
    const lines = [];
    let current = '';

    words.forEach((word) => {
      const candidate = current ? `${current} ${word}` : word;
      const width = font.widthOfTextAtSize(candidate, fontSize);
      if (width <= maxWidth) {
        current = candidate;
      } else {
        if (current) lines.push(current);
        current = word;
      }
    });

    if (current) lines.push(current);
    return lines;
  }

  trigger.addEventListener('click', async () => {
    try {
      const { PDFDocument, StandardFonts } = window.PDFLib;
      const lang = document.documentElement.lang || 'pt';
      const ui = await fetchUiText(lang);
      const profile = await fetchProfileData(lang);
      if (!profile) return;

      const doc = await PDFDocument.create();
      const fontRegular = await doc.embedFont(StandardFonts.Helvetica);
      const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
      const fontItalic = await doc.embedFont(StandardFonts.HelveticaOblique);

      const pageWidth = mmToPt(210);
      const pageHeight = mmToPt(297);
      const margin = mmToPt(15);
      const contentWidth = pageWidth - margin * 2;
      const columnGap = mmToPt(8);
      const leftWidth = mmToPt(64);
      const rightWidth = contentWidth - leftWidth - columnGap;

      const headingLineGap = mmToPt(3);
      const lineSpacing = (size) => size * 1.4;

      let page = doc.addPage([pageWidth, pageHeight]);
      let cursorY = pageHeight - margin;

      const addPage = () => {
        page = doc.addPage([pageWidth, pageHeight]);
        cursorY = pageHeight - margin;
      };

      const ensureSpace = (height) => {
        if (cursorY - height < margin) addPage();
      };

      // Cabeçalho
      const headerHeight = mmToPt(34);
      ensureSpace(headerHeight);
      cursorY -= mmToPt(6);

      page.drawRectangle({
        x: margin,
        y: cursorY - headerHeight,
        width: contentWidth,
        height: headerHeight,
        color: palette.surface,
        borderColor: palette.stroke,
        borderWidth: 1,
      });

      const headerX = margin + mmToPt(10);
      let headerY = cursorY - mmToPt(8);

      page.drawText(profile.name || '', {
        x: headerX,
        y: headerY,
        size: 22,
        font: fontBold,
        color: palette.text,
      });
      headerY -= mmToPt(8);

      if (profile.job) {
        page.drawText(profile.job, {
          x: headerX,
          y: headerY,
          size: 12,
          font: fontRegular,
          color: palette.muted,
        });
      }

      const contacts = [
        { label: ui.contactEmailLabel || 'E-mail', value: profile.email },
        { label: ui.contactPhoneLabel || 'Telefone', value: profile.phone },
        { label: ui.contactLocationLabel || 'Localização', value: profile.location },
      ].filter((item) => item.value);

      let contactY = cursorY - mmToPt(8);
      const contactX = margin + leftWidth + columnGap;

      contacts.forEach((info) => {
        page.drawText(`${info.label}:`, {
          x: contactX,
          y: contactY,
          size: 10,
          font: fontBold,
          color: palette.brand,
        });
        page.drawText(String(info.value), {
          x: contactX + mmToPt(24),
          y: contactY,
          size: 10,
          font: fontRegular,
          color: palette.text,
        });
        contactY -= mmToPt(6);
      });

      cursorY -= headerHeight + mmToPt(4);
      const columnTopY = cursorY;

      function createColumnWriter(initialPage, startX, startY, width, options = {}) {
        const {
          allowNewPage = true,
          expandOnNewPage = false,
        } = options;

        let currentPage = initialPage;
        let currentX = startX;
        let currentWidth = width;
        let currentY = startY;
        let isFirstPage = true;

        const ensureColumnSpace = (height) => {
          if (currentY - height < margin) {
            if (!allowNewPage) return false;
            currentPage = doc.addPage([pageWidth, pageHeight]);
            currentY = pageHeight - margin;
            if (expandOnNewPage || !isFirstPage) {
              currentX = margin;
              currentWidth = contentWidth;
            }
            isFirstPage = false;
          }
          return true;
        };

        const addGap = (value) => {
          if (value <= 0) return;
          if (!ensureColumnSpace(value)) return;
          currentY -= value;
        };

        const heading = (title) => {
          if (!title) return;
          const needed = lineSpacing(11) + headingLineGap + mmToPt(2);
          if (!ensureColumnSpace(needed)) return;
          currentY -= lineSpacing(11);
          currentPage.drawText(String(title).toUpperCase(), {
            x: currentX,
            y: currentY,
            size: 11,
            font: fontBold,
            color: palette.brand,
          });
          currentY -= headingLineGap;
          currentPage.drawLine({
            start: { x: currentX, y: currentY },
            end: { x: currentX + currentWidth, y: currentY },
            color: palette.stroke,
            thickness: 1,
          });
          currentY -= mmToPt(2);
        };

        const text = (content, { font = fontRegular, size = 10, color = palette.text, indent = 0 } = {}) => {
          const available = Math.max(currentWidth - indent, mmToPt(10));
          const lines = splitText(content, font, size, available);
          lines.forEach((line) => {
            const needed = lineSpacing(size);
            if (!ensureColumnSpace(needed)) return;
            currentY -= needed;
            currentPage.drawText(line, {
              x: currentX + indent,
              y: currentY,
              size,
              font,
              color,
            });
          });
          currentY -= mmToPt(2);
        };

        const bullet = (content, opts = {}) => {
          const { font = fontRegular, size = 10, color = palette.text } = opts;
          const bulletIndent = mmToPt(4);
          const available = Math.max(currentWidth - bulletIndent - mmToPt(2), mmToPt(10));
          const lines = splitText(content, font, size, available);
          lines.forEach((line, index) => {
            const needed = lineSpacing(size);
            if (!ensureColumnSpace(needed)) return;
            currentY -= needed;
            if (index === 0) {
              currentPage.drawText('•', {
                x: currentX,
                y: currentY,
                size,
                font,
                color,
              });
            }
            currentPage.drawText(line, {
              x: currentX + bulletIndent,
              y: currentY,
              size,
              font,
              color,
            });
          });
          currentY -= mmToPt(2);
        };

        const keyValue = (label, value, { size = 10 } = {}) => {
          if (!value) return;
          const lineHeight = lineSpacing(size);
          if (!ensureColumnSpace(lineHeight)) return;
          currentY -= lineHeight;
          currentPage.drawText(`${label}:`, {
            x: currentX,
            y: currentY,
            size,
            font: fontBold,
            color: palette.brand,
          });
          currentPage.drawText(String(value), {
            x: currentX + mmToPt(20),
            y: currentY,
            size,
            font: fontRegular,
            color: palette.text,
          });
          currentY -= mmToPt(2);
        };

        return {
          heading,
          text,
          bullet,
          keyValue,
          addGap,
          getY: () => currentY,
          getPage: () => currentPage,
        };
      }

      const leftWriter = createColumnWriter(page, margin, columnTopY, leftWidth, {
        allowNewPage: false,
      });
      const rightWriter = createColumnWriter(page, margin + leftWidth + columnGap, columnTopY, rightWidth, {
        allowNewPage: true,
        expandOnNewPage: true,
      });

      // Coluna Esquerda
      leftWriter.heading(resolveTitle('contact', ui.language || lang));
      contacts.forEach((info) => leftWriter.keyValue(info.label, info.value));
      leftWriter.addGap(mmToPt(2));

      const hardSkills = collectHardSkills(profile).slice(0, 8);
      if (hardSkills.length) {
        leftWriter.heading(profile.skills?.titleHardSkills || resolveTitle('hardSkills', ui.language || lang));
        hardSkills.forEach((skill) => {
          leftWriter.text(skill.name, { font: fontBold, size: 10 });
          const meta = [];
          if (skill.level !== null && skill.level !== undefined) meta.push(`${ui.hardSkillLevelLabel || 'Nível'} ${skill.level}/10`);
          meta.push(`${ui.hardSkillProjectsLabel || 'Projetos'}: ${skill.projectCount}`);
          leftWriter.text(meta.join(' • '), { font: fontItalic, size: 9, color: palette.muted });
        });
      }

      const softSkills = collectSoftSkills(profile).slice(0, 6);
      if (softSkills.length) {
        leftWriter.heading(profile.skills?.titleSoftSkills || resolveTitle('softSkills', ui.language || lang));
        softSkills.forEach((skill) => {
          const label =
            skill.percent !== null && skill.percent !== undefined
              ? `${skill.name} — ${skill.percent}%`
              : skill.name;
          leftWriter.bullet(label, { size: 9, color: palette.text });
        });
      }

      const languages = Array.isArray(profile.languages) ? profile.languages : [];
      if (languages.length) {
        leftWriter.heading(profile.titleLanguages || ui.titleLanguages || resolveTitle('languages', ui.language || lang));
        languages.forEach((langItem) => {
          const name = typeof langItem === 'string' ? langItem : langItem?.name;
          const level = typeof langItem === 'string' ? null : Number(langItem?.level || 0);
          if (!name) return;
          leftWriter.text(name, { font: fontBold, size: 10 });
          if (level) {
            const map = {
              4: ui.langLevelFluent || 'Fluente',
              3: ui.langLevelAdvanced || 'Avançado',
              2: ui.langLevelIntermediate || 'Intermediário',
              1: ui.langLevelBasic || 'Básico',
            };
            leftWriter.text(map[level] || '', { font: fontItalic, size: 9, color: palette.muted });
          }
        });
      }

      const certifications = Array.isArray(profile.certifications) ? profile.certifications.slice(0, 5) : [];
      if (certifications.length) {
        leftWriter.heading(
          profile.titleCertifications ||
            ui.titleCertifications ||
            resolveTitle('certifications', ui.language || lang)
        );
        certifications.forEach((cert) => {
          leftWriter.text(cert.title || '—', { font: fontBold, size: 10 });
          const meta = [cert.issuer, formatYM(cert.date)].filter(Boolean).join(' · ');
          if (meta) {
            leftWriter.text(meta, { font: fontItalic, size: 9, color: palette.muted });
          }
        });
      }

      // Coluna direita
      const professionalSummary = (() => {
        if (profile.summary) return profile.summary;
        const parts = [];
        if (profile.job) parts.push(profile.job);
        if (profile.graduate) parts.push(profile.graduate);
        if (profile.location) parts.push(profile.location);
        return parts.join(' • ');
      })();

      if (professionalSummary) {
        rightWriter.heading(resolveTitle('summary', ui.language || lang));
        rightWriter.text(professionalSummary, { font: fontRegular, size: 10 });
      }

      const experiences = Array.isArray(profile.professionalExperience) ? profile.professionalExperience : [];
      if (experiences.length) {
        rightWriter.heading(
          profile.titleProfessionalExperience ||
            ui.titleProfessionalExperience ||
            'Experiência Profissional'
        );

        experiences.forEach((exp) => {
          rightWriter.text(exp.name || '—', { font: fontBold, size: 11 });
          if (exp.period) {
            const duration = calcularDuracao(exp.period, profile.translations);
            const label = `${exp.period}${duration ? ` (${duration})` : ''}`;
            rightWriter.text(label, { font: fontItalic, size: 9, color: palette.muted });
          }
          if (exp.description) {
            const bullets = exp.description.split(/[\.;]\s+/).map((item) => item.trim()).filter(Boolean);
            if (bullets.length > 1) {
              bullets.forEach((item) => rightWriter.bullet(item, { size: 10 }));
            } else {
              rightWriter.text(exp.description, { font: fontRegular, size: 10 });
            }
          }
          rightWriter.addGap(mmToPt(3));
        });
      }

      const academics = Array.isArray(profile.academicFormation) ? profile.academicFormation : [];
      if (academics.length) {
        rightWriter.heading(
          profile.titleAcademicFormation || ui.titleAcademicFormation || 'Formação Acadêmica'
        );
        academics.forEach((edu) => {
          const title = [edu.name, edu.institution].filter(Boolean).join(' — ');
          rightWriter.text(title || '—', { font: fontBold, size: 11 });
          if (edu.period) {
            const duration = calcularDuracao(edu.period, profile.translations);
            const label = `${edu.period}${duration ? ` (${duration})` : ''}`;
            rightWriter.text(label, { font: fontItalic, size: 9, color: palette.muted });
          }
          if (edu.description) {
            rightWriter.text(edu.description, { font: fontRegular, size: 10 });
          }
          rightWriter.addGap(mmToPt(3));
        });
      }

      const featuredProjects = Array.isArray(profile.portfolio) ? profile.portfolio.slice(0, 4) : [];
      if (featuredProjects.length) {
        rightWriter.heading(resolveTitle('featuredProjects', ui.language || lang));
        featuredProjects.forEach((project) => {
          rightWriter.text(project.name || '—', { font: fontBold, size: 11 });
          if (project.description) {
            rightWriter.text(project.description, { font: fontRegular, size: 10 });
          }
          if (Array.isArray(project.technologies) && project.technologies.length) {
            rightWriter.text(project.technologies.join(', '), {
              font: fontItalic,
              size: 9,
              color: palette.muted,
            });
          }
          if (project.url) {
            rightWriter.text(`${ui.openProject || 'Abrir'}: ${project.url}`, {
              font: fontRegular,
              size: 9,
              color: palette.brand,
            });
          }
          rightWriter.addGap(mmToPt(3));
        });
      }

      const pdfBytes = await doc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${(profile.name || 'curriculo').replace(/\s+/g, '_')}.pdf`;
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1500);
    } catch (error) {
      console.error('Falha ao gerar PDF', error);
      alert('Desculpe, ocorreu um erro ao gerar o PDF.');
    }
  });
});
