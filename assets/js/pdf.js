// assets/js/pdf.js — PDF simples e multilíngue
// Requer jsPDF 2.5.x (já incluído no index.html)

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("download-pdf");
  if (!button || !window.jspdf) return;

  const mm = (v) => v; // unidade mm
  const palettes = {
    // Paleta monocromática (preto, branco e cinza)
    mono:  { brand: [60,60,60], text: [0,0,0], muted: [96,96,96], stroke: [190,190,190], surface: [255,255,255] },
    light: { brand: [124, 93, 250], text: [31, 41, 55], muted: [100,116,139], stroke: [220, 224, 231], surface: [255,255,255] },
    dark:  { brand: [124, 93, 250], text: [243,244,246], muted: [156,163,175], stroke: [75, 85, 99],  surface: [31,41,55]   },
  };

  // Helpers de imagem/QR (online)
  async function urlToDataURL(url) {
    try {
      const res = await fetch(url, { mode: "cors" });
      if (!res.ok) return null;
      const blob = await res.blob();
      return await new Promise((resolve) => {
        const r = new FileReader();
        r.onloadend = () => resolve(r.result);
        r.readAsDataURL(blob);
      });
    } catch { return null; }
  }
  async function makeQRDataURL(text, px = 220) {
    const api = `https://api.qrserver.com/v1/create-qr-code/?size=${px}x${px}&data=${encodeURIComponent(text)}`;
    return await urlToDataURL(api);
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

  button.addEventListener("click", async () => {
    try {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({ unit: "mm", format: "a4", compress: true });
      const W = doc.internal.pageSize.getWidth();
      const H = doc.internal.pageSize.getHeight();
      const M = mm(14);
      let y = M;

      // Idioma atual e textos
      const lang = document.documentElement.lang || 'pt';
      const ui = await fetchUiText(lang);
      const data = await fetchProfileData(lang);
      if (!data) return;

      const P = palettes.mono;
      const setText = (rgb) => doc.setTextColor(rgb[0], rgb[1], rgb[2]);
      const setDraw = (rgb) => doc.setDrawColor(rgb[0], rgb[1], rgb[2]);
      const setFill = (rgb) => doc.setFillColor(rgb[0], rgb[1], rgb[2]);

      // Helpers
      const section = (title) => {
        y += mm(4); // More space before section
        doc.setFont("helvetica", "bold"); doc.setFontSize(12);
        setText(P.brand);
        doc.text(String(title || '').toUpperCase(), M, y);
        y += mm(5);
        doc.setLineWidth(0.2); setDraw(P.stroke);
        doc.line(M, y, W - M, y);
        y += mm(5);
        doc.setFont("helvetica", "normal"); doc.setFontSize(10);
        setText(P.text);
      };
      const ensure = (h) => { if (y + h > H - M) { doc.addPage(); y = M; } };
      const paragraph = (text, maxW) => {
        if (!text) return;
        const lines = doc.splitTextToSize(String(text), maxW);
        lines.forEach(ln => { ensure(mm(6)); doc.text(ln, M, y); y += mm(6); });
        y += mm(2);
      };
      const simpleItem = (label, value) => {
        if (!value) return;
        ensure(mm(6));
        setText(P.text);
        doc.setFont("helvetica", "bold"); doc.text(`${label}:`, M, y);
        doc.setFont("helvetica", "normal"); setText(P.muted); doc.text(String(value), M + mm(34), y);
        setText(P.text);
        y += mm(6);
      };
      const textRight = (text, xRight, yPos) => {
        const t = String(text || '');
        const tw = doc.getTextWidth(t);
        doc.text(t, xRight - tw, yPos);
      };
      const BAR_H = mm(4), BAR_TOP = mm(1), BAR_BOTTOM = mm(4);
      const drawPercentBar = (pct, w = (W - 2*M)) => {
        const x = M;
        const p = Math.max(0, Math.min(100, Number(pct)));
        const filled = (p / 100) * w;
        // Espaçamento antes da barra
        ensure(BAR_TOP + BAR_H + BAR_BOTTOM);
        y += BAR_TOP;
        // trilho em cinza claro e preenchimento com cinza médio
        setDraw(P.stroke); setFill(P.stroke);
        doc.rect(x, y, w, BAR_H, 'FD');
        setFill(P.brand);
        if (filled > 0) doc.rect(x, y, filled, BAR_H, 'F');
        y += BAR_H + BAR_BOTTOM;
      };

      // Cabeçalho redesenhado
      const header_y_start = y;
      
      // Lado esquerdo: Nome e Cargo
      setText(P.text); doc.setFont("helvetica", "bold"); doc.setFontSize(26);
      doc.text(String(data.name || ''), M, y);
      y += mm(10);
      if (data.job) {
        doc.setFont("helvetica", "normal"); doc.setFontSize(14);
        setText(P.muted);
        doc.text(String(data.job), M, y);
        y += mm(8);
      }

      const header_left_height = y - header_y_start;
      y = header_y_start; // Reseta o y para o lado direito

      // Lado direito: Informações de Contato
      let y_right_header = y;
      doc.setFont("helvetica", "normal"); doc.setFontSize(10);
      setText(P.text);
      
      const contact_info = [
        { label: ui.contactEmailLabel || 'E-mail', value: data.email },
        { label: ui.contactPhoneLabel || 'Telefone', value: data.phone },
        { label: ui.contactLocationLabel || 'Localização', value: data.location }
      ].filter(info => info.value);

      contact_info.forEach(info => {
          doc.setFont("helvetica", "normal");
          const valueText = info.value;
          const valueWidth = doc.getTextWidth(valueText);
          textRight(valueText, W - M, y_right_header);

          doc.setFont("helvetica", "bold");
          const labelText = `${info.label}: `;
          textRight(labelText, W - M - valueWidth, y_right_header);

          y_right_header += mm(5);
      });
      
      const header_right_height = y_right_header - header_y_start;
      y = header_y_start + Math.max(header_left_height, header_right_height) + mm(5);
      
      // Linha inferior para o cabeçalho
      doc.setLineWidth(0.3); setDraw(P.stroke);
      doc.line(M, y, W - M, y);
      y += mm(8);

      // Formação (resumo + progresso)
      if (data.graduate) {
        ensure(mm(10));
        section(ui.titleAcademicFormation || data.titleAcademicFormation || 'Formação Acadêmica');
        paragraph(data.graduate, W - 2*M);
        if (data.graduateScale && typeof data.graduateScale.completed === 'number' && typeof data.graduateScale.total === 'number') {
          const c = data.graduateScale.completed, t = data.graduateScale.total;
          const pct = Math.min(100, (c / (t || 1)) * 100).toFixed(0);
          // Linha cabeçalho da barra: label à esquerda, valor à direita
          doc.setFont("helvetica", "bold"); setText(P.text);
          doc.text((ui.progressLabel || 'Progresso') + ':', M, y);
          doc.setFont("helvetica", "normal"); setText(P.muted);
          textRight(`${c}/${t} (${pct}%)`, W - M, y);
          setText(P.text);
          y += mm(1);
          drawPercentBar(Number(pct));
        }
        // Itens detalhados (se houver)
        if (Array.isArray(data.academicFormation) && data.academicFormation.length) {
          data.academicFormation.forEach(edu => {
            const title = [edu.name, edu.institution].filter(Boolean).join(' — ');
            const duracao = edu.period ? calcularDuracao(edu.period, data.translations) : '';
            const periodText = edu.period ? `${edu.period}${duracao ? ` (${duracao})` : ''}` : '';
            ensure(mm(8)); doc.setFont("helvetica", "bold"); doc.text(title, M, y); y += mm(5);
            if (periodText) { doc.setFont("helvetica", "italic"); doc.text(periodText, M, y); y += mm(5); }
            doc.setFont("helvetica", "normal"); paragraph(edu.description || '', W - 2*M);
          });
        }
      }

      // Habilidades
      ensure(mm(10));
      section(data.titleSkills || ui.titleSkills || 'Habilidades');
      if (data.skills) {
        const skillToProjects = new Map();
        const portfolio = Array.isArray(data.portfolio) ? data.portfolio : [];

        for (const project of portfolio) {
          const technologies = Array.isArray(project.technologies) ? project.technologies : [];
          for (const tech of technologies) {
            if (!skillToProjects.has(tech)) {
              skillToProjects.set(tech, []);
            }
            skillToProjects.get(tech).push(project.name);
          }
        }

        const hardSkills = Array.from(skillToProjects.keys()).sort();
        const softSkills = (Array.isArray(data.skills.softSkills) && data.skills.softSkills.length > 0) ? data.skills.softSkills : [];

        if (hardSkills.length > 0 || softSkills.length > 0) {
          const y_start = y;
          
          const gap = mm(10);
          const colWidth = (W - 2 * M - gap) / 2;
          const leftColX = M;
          const rightColX = M + colWidth + gap;

          let y_left = y_start;
          let y_right = y_start;

          // --- Hard Skills (Left Column) ---
          if (hardSkills.length > 0) {
            doc.setFont("helvetica", "bold");
            doc.text(String(data.skills.titleHardSkills || 'Habilidades Técnicas'), leftColX, y_left);
            y_left += mm(6);
            doc.setFont("helvetica", "normal");
            hardSkills.forEach(name => {
              const item_y = y_left;
              const projects = skillToProjects.get(name) || [];
              const projectCount = projects.length;
              
              const nameLines = doc.splitTextToSize(name, colWidth - mm(15));
              nameLines.forEach(line => {
                doc.text(line, leftColX, y_left);
                y_left += mm(5);
              });

              if (projectCount > 0) {
                doc.setFont("helvetica", "normal"); setText(P.muted);
                const projectText = `(${projectCount} projetos)`;
                const textWidth = doc.getTextWidth(projectText);
                doc.text(projectText, leftColX + colWidth - textWidth, item_y);
              }
              y_left += mm(2);
            });
          }

          // --- Soft Skills (Right Column) ---
          if (softSkills.length > 0) {
            doc.setFont("helvetica", "bold");
            doc.text(String(data.skills.titleSoftSkills || 'Habilidades Comportamentais'), rightColX, y_right);
            y_right += mm(6);
            doc.setFont("helvetica", "normal");
            softSkills.forEach(s => {
              const item_y = y_right;
              const name = typeof s === 'string' ? s : (s?.name || '');
              const pct = typeof s === 'object' ? Number(s.percent || s.percentage || 0) : 0;
              if (!name) return;

              const nameLines = doc.splitTextToSize(name, colWidth - mm(15));
              nameLines.forEach(line => {
                doc.text(line, rightColX, y_right);
                y_right += mm(5);
              });

              if (pct) {
                doc.setFont("helvetica", "normal"); setText(P.muted);
                const pctText = `${pct}%`;
                const pctWidth = doc.getTextWidth(pctText);
                doc.text(pctText, rightColX + colWidth - pctWidth, item_y);
              }
              y_right += mm(2);
            });
          }

          y = Math.max(y_left, y_right);
        }
      }

      // Idiomas + Certificações de idioma
      ensure(mm(10)); section(data.titleLanguages || ui.titleLanguages || 'Idiomas');
      const levelText = (lvl) => {
        switch (Number(lvl)) {
          case 4: return ui.langLevelFluent || 'Fluente';
          case 3: return ui.langLevelAdvanced || 'Avançado';
          case 2: return ui.langLevelIntermediate || 'Intermediário';
          case 1: return ui.langLevelBasic || 'Básico';
          default: return '';
        }
      };
      const langs = Array.isArray(data.languages) ? data.languages : [];
      langs.forEach(item => {
        let name = '', lvl = 0;
        if (typeof item === 'string') {
          name = item.replace(/\s*\(([^)]+)\)\s*$/, '').trim();
        } else if (item && typeof item === 'object') {
          name = item.name || ''; lvl = Number(item.level || 0);
        }
        if (!name) return;
        ensure(mm(8));
        doc.setFont("helvetica", "bold"); setText(P.text); doc.text(name, M, y);
        if (lvl) { doc.setFont("helvetica", "normal"); setText(P.muted); textRight(levelText(lvl), W - M, y); setText(P.text); }
        y += mm(1);
        if (lvl) {
            const w = W - 2 * M;
            const stageW = w / 4;
            ensure(BAR_TOP + BAR_H + BAR_BOTTOM);
            y += BAR_TOP;
            for (let i = 0; i < 4; i++) {
                const x = M + i * stageW;
                setDraw(P.stroke); setFill(P.stroke);
                doc.rect(x, y, stageW - 2, BAR_H, 'FD');
                if (i < lvl) {
                    setFill(P.brand);
                    doc.rect(x, y, stageW - 2, BAR_H, 'F');
                }
            }
            y += BAR_H + BAR_BOTTOM;
        }
      });
      if (Array.isArray(data.languagesCertifications) && data.languagesCertifications.length) {
        ensure(mm(8)); doc.setFont("helvetica", "bold");
        doc.text(String(data.titleLanguageCertifications || ui.titleLanguageCertifications || 'Certificações de domínio da língua'), M, y); y += mm(5);
        doc.setFont("helvetica", "normal");
        data.languagesCertifications.forEach(c => {
          const name = c.name || c.title || '';
          const parts = [c.issuer, c.score || c.levelText, c.date].filter(Boolean);
          ensure(mm(6));
          doc.text(`- ${name}${parts.length? ' — ' + parts.join(' · ') : ''}`, M, y);
          y += mm(6);
        });
      }

      // Portfólio
      if (Array.isArray(data.portfolio) && data.portfolio.length) {
        ensure(mm(10)); section(data.titlePortfolio || ui.titlePortfolio || 'Portfólio');
        // Cada item com QR do link à direita
        for (const p of data.portfolio) {
          const title = p.name || '';
          const url = p.url || '';
          const description = p.description || '';
          const host = (() => { try { return new URL(url).hostname.replace(/^www\./,''); } catch { return url; } })();

          const qrSize = mm(18);
          const pad = mm(3);
          const textW = (W - 2*M) - (qrSize + pad);

          const technologies = Array.isArray(p.technologies) ? p.technologies : [];
          const technologiesStr = technologies.join(', ');
          const technologiesLines = doc.splitTextToSize(`Tecnologias: ${technologiesStr}`, textW);

          // Medir altura do bloco
          const titleLines = doc.splitTextToSize(title, textW);
          const descLines = doc.splitTextToSize(description, textW);
          const hostLines = url ? doc.splitTextToSize(host, textW) : [];
          const contentH = Math.max(qrSize, (titleLines.length * mm(5)) + (descLines.length * mm(4)) + (hostLines.length * mm(4)) + (technologiesLines.length * mm(4)));
          const boxH = contentH + pad * 2;

          ensure(boxH + mm(4));

          // Box
          setDraw(P.stroke); setFill(P.surface);
          doc.setLineWidth(0.2);
          doc.roundedRect(M, y, W - 2*M, boxH, 2, 2, 'S');

          // QR à direita
          if (url) {
            const dataURL = await makeQRDataURL(url, 200);
            if (dataURL) {
              try { doc.addImage(dataURL, 'PNG', M + (W - 2*M) - qrSize - pad, y + pad, qrSize, qrSize); } catch (e) {
                console.error("Failed to add QR code to PDF", e);
                doc.setFont("helvetica", "italic");
                doc.text("QR Error", M + (W - 2*M) - qrSize - pad + (qrSize/2), y + pad + (qrSize/2), { align: 'center', baseline: 'middle' });
              }
            }
          }

          // Texto à esquerda
          let tx = M + pad, ty = y + pad + mm(5);
          doc.setFont("helvetica", "bold"); setText(P.text);
          titleLines.forEach(ln => { doc.text(ln, tx, ty); ty += mm(5); });
          doc.setFont("helvetica", "normal"); setText(P.muted);
          descLines.forEach(ln => { doc.text(ln, tx, ty); ty += mm(4); });
          if (technologies.length > 0) {
            doc.setFont("helvetica", "bold"); setText(P.text);
            technologiesLines.forEach(ln => { doc.text(ln, tx, ty); ty += mm(4); });
          }
          if (host) { doc.setFont("helvetica", "italic"); setText(P.muted); hostLines.forEach(ln => { doc.text(ln, tx, ty); ty += mm(4); }); setText(P.text); }

          y += boxH + mm(4);
        }
      }

      // Experiência Profissional
      if (Array.isArray(data.professionalExperience) && data.professionalExperience.length) {
        ensure(mm(10)); section(data.titleProfessionalExperience || ui.titleProfessionalExperience || 'Experiência Profissional');
        data.professionalExperience.forEach(exp => {
          const title = exp.name || '';
          const duracao = exp.period ? calcularDuracao(exp.period, data.translations) : '';
          const periodText = exp.period ? `${exp.period}${duracao ? ` (${duracao})` : ''}` : '';
          const desc = exp.description || '';
          ensure(mm(8)); doc.setFont("helvetica", "bold"); doc.text(title, M, y); y += mm(5);
          doc.setFont("helvetica", "italic"); if (periodText) { doc.text(periodText, M, y); y += mm(5); }
          doc.setFont("helvetica", "normal"); paragraph(desc, W - 2*M);
        });
      }

      // Certificações (gerais)
      if (Array.isArray(data.certifications) && data.certifications.length) {
        ensure(mm(10)); section(data.titleCertifications || ui.titleCertifications || 'Certificações');
        data.certifications.forEach(c => {
          const title = c.title || '';
          const meta = [c.issuer, c.date].filter(Boolean).join(' · ');
          ensure(mm(8)); doc.setFont("helvetica", "bold"); doc.text(title, M, y); y += mm(5);
          if (meta) { doc.setFont("helvetica", "italic"); doc.text(meta, M, y); y += mm(5); }
          doc.setFont("helvetica", "normal");
        });
      }

      // (Formação Acadêmica já foi renderizada junto ao bloco de graduação)

      // Finalizar
      doc.save(`${(data.name || 'curriculo').replace(/\s+/g,'_')}.pdf`);
    } catch (e) {
      console.error('Falha ao gerar PDF', e);
      alert('Desculpe, ocorreu um erro ao gerar o PDF. Por favor, tente novamente mais tarde.');
    }
  });
});
