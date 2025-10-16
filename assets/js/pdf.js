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

      // Forçar paleta monocromática (preto, branco e cinza)
      const isLight = true; // mantém contrastes previstos ao desenhar barras
      const P = palettes.mono;
      const setText = (rgb) => doc.setTextColor(rgb[0], rgb[1], rgb[2]);
      const setDraw = (rgb) => doc.setDrawColor(rgb[0], rgb[1], rgb[2]);
      const setFill = (rgb) => doc.setFillColor(rgb[0], rgb[1], rgb[2]);

      // Helpers
      const section = (title) => {
        doc.setFont("helvetica", "bold"); doc.setFontSize(13);
        setText(P.brand);
        doc.text(String(title || '').toUpperCase(), M, y);
        y += mm(4);
        doc.setLineWidth(0.4); setDraw(P.brand);
        doc.line(M, y, W - M, y);
        y += mm(4);
        doc.setFont("helvetica", "normal"); doc.setFontSize(11);
        setText(P.text); setDraw(P.stroke);
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
        setDraw(P.stroke); setFill([235,235,235]);
        doc.rect(x, y, w, BAR_H);
        setFill(P.brand);
        if (filled > 0) doc.rect(x, y, filled, BAR_H, 'F');
        y += BAR_H + BAR_BOTTOM;
      };

      // Cabeçalho simples
      setText(P.text); doc.setFont("helvetica", "bold"); doc.setFontSize(20);
      doc.text(String(data.name || ''), M, y);
      y += mm(8);
      doc.setFont("helvetica", "normal"); doc.setFontSize(12);
      if (data.job) { doc.text(String(data.job), M, y); y += mm(6); }
      const mailLabel = ui.contactEmailLabel || 'E-mail';
      const phoneLabel = ui.contactPhoneLabel || 'Telefone';
      const locationLabel = ui.contactLocationLabel || 'Localização';
      simpleItem(mailLabel, data.email);
      simpleItem(phoneLabel, data.phone);
      simpleItem(locationLabel, data.location);

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
            ensure(mm(8)); doc.setFont("helvetica", "bold"); doc.text(title, M, y); y += mm(5);
            if (edu.period) { doc.setFont("helvetica", "italic"); doc.text(edu.period, M, y); y += mm(5); }
            doc.setFont("helvetica", "normal"); paragraph(edu.description || '', W - 2*M);
          });
        }
      }

      // Habilidades
      ensure(mm(10));
      section(data.titleSkills || ui.titleSkills || 'Habilidades');
      if (data.skills) {
        if (Array.isArray(data.skills.hardSkills) && data.skills.hardSkills.length) {
          doc.setFont("helvetica", "bold"); doc.text(String(data.skills.titleHardSkills || 'Hard Skills'), M, y); y += mm(6);
          doc.setFont("helvetica", "normal");
          const hard = data.skills.hardSkills.map(s => s.name || s).filter(Boolean).join(', ');
          paragraph(hard, W - 2*M);
        }
        if (Array.isArray(data.skills.softSkills) && data.skills.softSkills.length) {
          doc.setFont("helvetica", "bold"); doc.text(String(data.skills.titleSoftSkills || 'Soft Skills'), M, y); y += mm(5);
          doc.setFont("helvetica", "normal");
          data.skills.softSkills.forEach(s => {
            const name = typeof s === 'string' ? s : (s?.name || '');
            const pct = typeof s === 'object' ? Number(s.percent || s.percentage || 0) : 0;
            if (!name) return;
            // Cabeçalho da habilidade: nome à esquerda, % à direita
            ensure(mm(8));
            doc.setFont("helvetica", "bold"); setText(P.text); doc.text(name, M, y);
            if (pct) { doc.setFont("helvetica", "normal"); setText(P.muted); textRight(`${pct}%`, W - M, y); setText(P.text); }
            y += mm(1);
            if (pct) drawPercentBar(pct);
          });
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
        ensure(mm(6));
        doc.text(`• ${name} ${lvl? `- ${levelText(lvl)}`: ''}`, M, y); y += mm(4);
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
          const host = (() => { try { return new URL(url).hostname.replace(/^www\./,''); } catch { return url; } })();

          const qrSize = mm(22);
          const pad = mm(4);
          const textW = (W - 2*M) - (qrSize + pad);

          // Medir altura do bloco
          const titleLines = doc.splitTextToSize(title, textW);
          const hostLines = url ? doc.splitTextToSize(host, textW) : [];
          const contentH = Math.max(qrSize, (titleLines.length + hostLines.length) * mm(6));
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
              try { doc.addImage(dataURL, 'PNG', M + (W - 2*M) - qrSize - pad, y + pad, qrSize, qrSize); } catch {}
            }
          }

          // Texto à esquerda
          let tx = M + pad, ty = y + pad + mm(5);
          doc.setFont("helvetica", "bold"); setText(P.text);
          titleLines.forEach(ln => { doc.text(ln, tx, ty); ty += mm(6); });
          if (host) { doc.setFont("helvetica", "normal"); setText(P.muted); hostLines.forEach(ln => { doc.text(ln, tx, ty); ty += mm(5); }); setText(P.text); }

          y += boxH + mm(4);
        }
      }

      // Experiência Profissional
      if (Array.isArray(data.professionalExperience) && data.professionalExperience.length) {
        ensure(mm(10)); section(data.titleProfessionalExperience || ui.titleProfessionalExperience || 'Experiência Profissional');
        data.professionalExperience.forEach(exp => {
          const title = exp.name || '';
          const period = exp.period || '';
          const desc = exp.description || '';
          ensure(mm(8)); doc.setFont("helvetica", "bold"); doc.text(title, M, y); y += mm(5);
          doc.setFont("helvetica", "italic"); if (period) { doc.text(period, M, y); y += mm(5); }
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
    }
  });
});
