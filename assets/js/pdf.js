// assets/js/pdf.js — Currículo PDF (ULTRA visual + padronização)
// Requer jsPDF 2.5.x (já está no seu HTML)

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("download-pdf");
  if (!button || !window.jspdf) return;

  // ===================== DESIGN SYSTEM ==========================
  const mm = (v) => v; // unidade mm
  const DS = {
    layout: {
      margin: mm(14),
      headerH: mm(40),
      gutter: mm(8),
      line: mm(6),           // baseline vertical
      sectionGap: mm(8),
      colSidebarW: mm(64),   // largura da sidebar na 1ª página
    },
    radii: { sm: 2, md: 3 },
    stroke: { hair: 0.2, thin: 0.35, bold: 0.8 },
    type: {
      h1: 22,
      h2: 13,
      h3: 11,
      body: 11,
      small: 10,
      caption: 9,
    },
    // Paletas: o PDF segue seu tema atual (light/dark)
    palettes: {
      light: {
        brand: [29, 78, 216],
        headerText: [255, 255, 255],
        text: [31, 41, 55],
        muted: [100, 116, 139],
        surface: [250, 250, 250],
        surfaceAlt: [245, 247, 250],
        stroke: [226, 232, 240],
        shadow: [203, 213, 225],
        timeline: [148, 163, 184],
        badgeText: [255, 255, 255],
      },
      dark: {
        brand: [59, 130, 246],
        headerText: [255, 255, 255],
        text: [243, 244, 246],
        muted: [156, 163, 175],
        surface: [31, 41, 55],
        surfaceAlt: [17, 24, 39],
        stroke: [55, 65, 81],
        shadow: [17, 24, 39],
        timeline: [107, 114, 128],
        badgeText: [255, 255, 255],
      },
    },
    chip: { h: mm(8), padX: mm(3) },
    qr: { size: mm(22), captionGap: mm(4) },
    box: { pad: mm(6), radius: 3, minH: mm(38), gap: mm(6) },
    badge: { h: mm(6), padX: mm(3), radius: 1.5 },
  };

  // ——— Utilitários genéricos
  const setTextColor = (doc, rgb) => doc.setTextColor(rgb[0], rgb[1], rgb[2]);
  const setDrawColor = (doc, rgb) => doc.setDrawColor(rgb[0], rgb[1], rgb[2]);
  const setFillColor = (doc, rgb) => doc.setFillColor(rgb[0], rgb[1], rgb[2]);

  const getText = (sel) => document.querySelector(sel)?.innerText?.trim() || "";
  const getIdText = (id) => document.getElementById(id)?.innerText?.trim() || "";

  const collectList = (id) =>
    Array.from(document.getElementById(id)?.querySelectorAll("li") || [])
      .map(li => li.innerText.trim())
      .filter(Boolean);

  const collectPortfolio = () =>
    Array.from(document.getElementById("profile.portfolio")?.querySelectorAll("li") || [])
      .map(li => ({
        title: li.querySelector(".portfolio-title")?.innerText.trim() || "",
        link:  li.querySelector(".portfolio-link")?.innerText.trim() || "",
      }))
      .filter(x => x.title || x.link);

  const collectExperiences = () =>
    Array.from(document.getElementById("profile.professionalExperience")?.querySelectorAll("li") || [])
      .map(li => ({
        title: li.querySelector(".title")?.innerText.trim() || "",
        period: li.querySelector(".period")?.innerText.trim() || "",
        description: li.querySelector(".description")?.innerText.trim() || "",
      }))
      .filter(x => x.title || x.period || x.description);

  const collectFooterLinks = () =>
    Array.from(document.querySelectorAll("footer a[href]") || [])
      .map(a => ({ label: a.getAttribute("aria-label") || a.textContent?.trim() || "Link", href: a.href }))
      .filter(x => x.href);

  // Carrega imagem como dataURL
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

  // QR via serviço público (posso trocar por lib offline se quiser)
  async function makeQRDataURL(text, px = 220) {
    const api = `https://api.qrserver.com/v1/create-qr-code/?size=${px}x${px}&data=${encodeURIComponent(text)}`;
    return await urlToDataURL(api);
  }

  // Quebra com limite de linhas (+ reticências)
  function wrapWithLimit(doc, text, width, maxLines) {
    const lines = doc.splitTextToSize(text, width);
    if (lines.length <= maxLines) return lines;
    const cut = lines.slice(0, maxLines);
    cut[maxLines - 1] = (cut[maxLines - 1] || "").replace(/\s+$/, "") + "…";
    return cut;
  }

  // ===================== GERAÇÃO DO PDF =========================
  button.addEventListener("click", async () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: "mm", format: "a4", compress: true });

    // Dimensões
    const W = doc.internal.pageSize.getWidth();
    const H = doc.internal.pageSize.getHeight();
    const M = DS.layout.margin;

    // Paleta (segue o tema atual do site)
    const isLight = document.body.classList.contains("light-theme") || !document.body.classList.contains("dark-theme");
    const P = isLight ? DS.palettes.light : DS.palettes.dark;

    // Dados do DOM
    const name = getIdText("profile.name");
    const job = getIdText("profile.job");
    const graduate = getIdText("profile.graduate");
    const location = getIdText("profile.location");
    const phoneText = getText("#profile.phone");
    const emailText = getText("#profile.email");
    const about = getIdText("profile.description");
    const photoUrl = document.getElementById("profile.photo")?.src || "";

    // Títulos
    const tSkills = getIdText("acordeon.titleSkills") || "Habilidades";
    const tHard = getIdText("skills.titleHardSkills") || "Hard Skills";
    const tSoft = getIdText("skills.titleSoftSkills") || "Soft Skills";
    const tLang = getIdText("acordeon.titleLanguages") || "Idiomas";
    const tPortfolio = getIdText("acordeon.titlePortfolio") || "Portfólio";
    const tExperience = getIdText("acordeon.titleProfessionalExperience") || "Experiência Profissional";
    const tAbout = "Sobre";
    const tEducation = "Formação";
    const tContactsQR = "Contatos (QR)";
    const tSocialQR = "Social (QR)";

    // Listas
    const hardSkills = collectList("profile.skills.hardSkills");
    const softSkills = collectList("profile.skills.softSkills");
    const languages = collectList("profile.languages");
    const portfolio = collectPortfolio();
    const socialLinks = collectFooterLinks();
    const experiences = collectExperiences();

    // ============= Header padronizado =============
    setFillColor(doc, P.brand);
    doc.rect(0, 0, W, DS.layout.headerH, "F");

    // Foto
    let photoDataURL = null;
    if (photoUrl) photoDataURL = await urlToDataURL(photoUrl);
    if (photoDataURL) {
      const img = mm(26);
      const imgX = W - M - img;
      const imgY = (DS.layout.headerH - img) / 2;
      try { doc.addImage(photoDataURL, "JPEG", imgX, imgY, img, img); } catch {}
    }

    // Nome & cargo
    setTextColor(doc, P.headerText);
    doc.setFont("helvetica", "bold");  doc.setFontSize(DS.type.h1);
    doc.text(name || "", M, M + 2);

    doc.setFont("helvetica", "normal"); doc.setFontSize(12);
    if (job) doc.text(job, M, M + 11);

    // ============= 1ª página: 2 colunas padronizadas =============
    const SIDEBAR_W = DS.layout.colSidebarW;
    const contentW = W - 2 * M;
    const mainX_first = M + SIDEBAR_W + DS.layout.gutter;
    const mainW_first = contentW - SIDEBAR_W - DS.layout.gutter;

    let sideY = DS.layout.headerH + DS.layout.sectionGap;
    let mainY = DS.layout.headerH + DS.layout.sectionGap;

    // Helpers de paginação na “main”
    const newPageMain = () => {
      doc.addPage();
      // Cabeçalho mínimo (nome) padronizado
      setTextColor(doc, P.brand);
      doc.setFont("helvetica", "bold"); doc.setFontSize(12);
      doc.text(name || "", M, M);
      mainY = M + mm(6);
      setTextColor(doc, P.text);
      return { mainX: M, mainW: W - 2 * M };
    };
    const ensureSpaceMain = (needed, ctx) => {
      if (mainY + needed > H - M) {
        const n = newPageMain();
        ctx.mainX = n.mainX; ctx.mainW = n.mainW;
      }
    };
    const HR = (ctx) => {
      setDrawColor(doc, P.stroke);
      doc.setLineWidth(DS.stroke.hair);
      doc.line(ctx.mainX, mainY, ctx.mainX + ctx.mainW, mainY);
      mainY += mm(3);
    };
    const sectionTitleMain = (title, ctx) => {
      ensureSpaceMain(mm(12), ctx);
      doc.setFont("helvetica", "bold"); doc.setFontSize(DS.type.h2);
      setTextColor(doc, P.brand);
      doc.text(title.toUpperCase(), ctx.mainX, mainY);
      setDrawColor(doc, P.brand);
      doc.setLineWidth(DS.stroke.thin);
      doc.line(ctx.mainX, mainY + 1.5, ctx.mainX + ctx.mainW, mainY + 1.5);
      mainY += DS.layout.sectionGap;
      doc.setFont("helvetica", "normal"); doc.setFontSize(DS.type.body);
      setTextColor(doc, P.text);
    };
    const paragraphMain = (text, ctx) => {
      if (!text) return;
      const lines = doc.splitTextToSize(text, ctx.mainW);
      lines.forEach((ln) => { ensureSpaceMain(DS.layout.line, ctx); doc.text(ln, ctx.mainX, mainY); mainY += DS.layout.line; });
      mainY += mm(2);
    };

    // Sidebar — seções padronizadas
    const sectionTitleSide = (title) => {
      doc.setFont("helvetica", "bold"); doc.setFontSize(11);
      setTextColor(doc, P.brand);
      doc.text(title.toUpperCase(), M, sideY);
      sideY += mm(5);
      setDrawColor(doc, P.stroke); doc.setLineWidth(DS.stroke.hair);
      doc.line(M, sideY, M + SIDEBAR_W, sideY);
      sideY += mm(4);
      setTextColor(doc, P.text); doc.setFont("helvetica", "normal"); doc.setFontSize(10.5);
    };
    const chipsSide = (items) => {
      if (!items?.length) return;
      let cx = M, cy = sideY; const maxW = SIDEBAR_W;
      doc.setFontSize(9.5);
      items.forEach((txt) => {
        const t = String(txt);
        const w = doc.getTextWidth(t) + DS.chip.padX * 2;
        const chipW = Math.min(w, maxW);
        if (cx + chipW > M + SIDEBAR_W) { cx = M; cy += DS.chip.h + mm(2); }
        setFillColor(doc, isLight ? [241, 245, 249] : P.surfaceAlt);
        setDrawColor(doc, isLight ? [241, 245, 249] : P.surfaceAlt);
        doc.roundedRect(cx, cy - DS.chip.h + 6, chipW, DS.chip.h, DS.radii.sm, DS.radii.sm, "F");
        setTextColor(doc, isLight ? [51, 65, 85] : P.text);
        doc.text(t, cx + DS.chip.padX, cy + 1);
        cx += chipW + mm(2);
      });
      sideY = cy + DS.chip.h + mm(2);
      doc.setFontSize(10.5); setTextColor(doc, P.text);
    };
    const bulletsSide = (items) => {
      if (!items?.length) return;
      items.forEach((it) => {
        const lines = doc.splitTextToSize(`• ${it}`, SIDEBAR_W);
        lines.forEach((ln) => { doc.text(ln, M, sideY); sideY += DS.layout.line - 1; });
      });
      sideY += mm(2);
    };
    const gridQRSide = async (items, labelMap) => {
      if (!items?.length) return;
      const size = DS.qr.size, gap = mm(6), cols = 2;
      let col = 0, x = M;
      for (const it of items) {
        const label = labelMap(it) || "QR";
        const dataURL = await makeQRDataURL(it.payload);
        if (dataURL) { try { doc.addImage(dataURL, "PNG", x, sideY, size, size); } catch {} }
        doc.setFontSize(DS.type.caption); setTextColor(doc, P.muted);
        const w = doc.getTextWidth(label);
        doc.text(label, x + size/2 - w/2, sideY + size + DS.qr.captionGap);
        setTextColor(doc, P.text);
        col++;
        if (col >= cols) { col = 0; x = M; sideY += size + mm(9); }
        else { x += size + gap; }
      }
      if (col > 0) sideY += size + mm(9);
      doc.setFontSize(10.5);
    };

    // ===== Sidebar (QRs + Idiomas + Skills + Social + Formação) =====
    const contactQRs = [];
    if (phoneText) contactQRs.push({ label: "Telefone", payload: `tel:+55${phoneText.replace(/\D/g, "")}` });
    if (emailText) contactQRs.push({ label: "E-mail", payload: `mailto:${emailText}` });
    if (contactQRs.length) { sectionTitleSide(tContactsQR); await gridQRSide(contactQRs, (it) => it.label); }

    if (languages.length) { sectionTitleSide(tLang); chipsSide(languages); }
    if (hardSkills.length || softSkills.length) {
      sectionTitleSide(tSkills);
      if (hardSkills.length) { doc.setFont("helvetica", "bold"); doc.setFontSize(10.5); doc.text(tHard, M, sideY); sideY += mm(5); doc.setFont("helvetica", "normal"); doc.setFontSize(10); chipsSide(hardSkills); }
      if (softSkills.length) { doc.setFont("helvetica", "bold"); doc.setFontSize(10.5); doc.text(tSoft, M, sideY); sideY += mm(5); doc.setFont("helvetica", "normal"); doc.setFontSize(10); bulletsSide(softSkills); }
    }
    const socialQRs = socialLinks.map(s => ({ label: s.label, payload: s.href }));
    if (socialQRs.length) { sectionTitleSide(tSocialQR); await gridQRSide(socialQRs, (it) => it.label); }
    if (graduate) {
      sectionTitleSide(tEducation);
      const lines = doc.splitTextToSize(graduate, SIDEBAR_W);
      lines.forEach((ln) => { doc.text(ln, M, sideY); sideY += DS.layout.line; });
      sideY += mm(2);
    }

    // ===== Main (Sobre + Experiências) =====
    let ctx = { mainX: mainX_first, mainW: mainW_first };

    if (about) { sectionTitleMain(tAbout, ctx); paragraphMain(about, ctx); HR(ctx); }

    if (experiences.length) {
      sectionTitleMain(tExperience, ctx);

      const spineX = ctx.mainX + mm(3);
      setDrawColor(doc, P.timeline); doc.setLineWidth(DS.stroke.bold);

      for (let i = 0; i < experiences.length; i++) {
        const exp = experiences[i];

        doc.setFont("helvetica", "bold"); doc.setFontSize(DS.type.h3);
        const titleLines = doc.splitTextToSize(exp.title || "-", ctx.mainW - mm(10));
        let blockH = titleLines.length * DS.layout.line;

        doc.setFont("helvetica", "italic");
        const hasPeriod = !!exp.period;
        if (hasPeriod) blockH += DS.layout.line;

        doc.setFont("helvetica", "normal"); doc.setFontSize(DS.type.body);
        const descLines = exp.description ? doc.splitTextToSize(exp.description, ctx.mainW - mm(10)) : [];
        blockH += descLines.length * DS.layout.line + mm(4);

        ensureSpaceMain(blockH + mm(8), ctx);

        // Linha e nó
        setDrawColor(doc, P.timeline);
        doc.setLineWidth(1);
        doc.line(spineX, mainY, spineX, mainY + blockH);

        setFillColor(doc, P.brand);
        doc.circle(spineX, mainY + mm(2.5), 2, "F");

        // Texto
        const xText = spineX + mm(6);
        let yText = mainY;

        doc.setFont("helvetica", "bold"); doc.setFontSize(DS.type.h3);
        setTextColor(doc, P.text);
        titleLines.forEach((ln) => { doc.text(ln, xText, yText); yText += DS.layout.line; });

        if (hasPeriod) {
          doc.setFont("helvetica", "italic"); setTextColor(doc, P.muted);
          doc.text(exp.period, xText, yText); yText += DS.layout.line; setTextColor(doc, P.text);
        }

        doc.setFont("helvetica", "normal"); doc.setFontSize(DS.type.body);
        descLines.forEach((ln) => { doc.text(ln, xText, yText); yText += DS.layout.line; });

        mainY = Math.max(mainY + blockH, yText) + mm(4);

        if (i < experiences.length - 1) { setDrawColor(doc, P.stroke); doc.setLineWidth(DS.stroke.hair); doc.line(ctx.mainX, mainY, ctx.mainX + ctx.mainW, mainY); mainY += mm(3); }
      }
      HR(ctx);
    }

    // ============= SWITCH para Portfólio FULL-WIDTH =============
    const switchPortfolioToFullWidth = () => {
      let startY = Math.max(mainY, sideY) + mm(6);
      if (startY > H - M - mm(30)) {
        const n = newPageMain(); ctx.mainX = n.mainX; ctx.mainW = n.mainW; // nova página
      } else {
        ctx.mainX = M; ctx.mainW = W - 2 * M; mainY = startY; // full-width na mesma página
      }
    };

    // ============= Portfólio — GRID padronizado (full-width) =============
    if (portfolio.length) {
      switchPortfolioToFullWidth();
      sectionTitleMain(tPortfolio, ctx);

      // Colunas dinâmicas (min card ~ 62mm)
      const minCardW = mm(62);
      const cols = Math.max(2, Math.min(4, Math.floor((ctx.mainW + DS.box.gap) / (minCardW + DS.box.gap))));
      const boxW = (ctx.mainW - DS.box.gap * (cols - 1)) / cols;

      // Utilitários do Portfólio
      const hostname = (url) => { try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return (url || "").split("/")[2] || ""; } };
      const badgeTextFor = (host) => {
        if (!host) return "";
        if (host.includes("github.")) return "GitHub";
        if (host.includes("linkedin.")) return "LinkedIn";
        if (host.includes("vercel.app")) return "Vercel";
        if (host.includes("netlify.app")) return "Netlify";
        return host.split(".")[0];
      };

      // Área de texto não invade o QR
      const textAreaW = Math.max(boxW - DS.qr.size - DS.box.pad * 3, mm(36));

      // Mede altura “real” do card (usa o mesmo cálculo do desenho)
      const measureCardH = (p) => {
        const title = p.title || "-";
        const url = p.link || "";
        const host = hostname(url);
        const hasBadge = !!badgeTextFor(host);

        const titleLines = wrapWithLimit(doc, title, textAreaW, 3);  // no máx. 3 linhas
        const hostLines = host ? wrapWithLimit(doc, host, textAreaW, 2) : [];

        const textH =
          (hasBadge ? DS.badge.h + mm(2) : 0) +
          titleLines.length * DS.layout.line +
          (hostLines.length ? hostLines.length * (DS.layout.line - 1) : 0);

        const contentH = DS.box.pad * 2 + Math.max(DS.qr.size, textH);
        return Math.max(contentH, DS.box.minH);
      };

      // Desenha 1 card
      const drawCard = async (p, x, y, boxH) => {
        const title = p.title || "-";
        const url = p.link || "";
        const host = hostname(url);
        const badgeText = badgeTextFor(host);

        // “Sombra” sutil + box
        setFillColor(doc, P.shadow); setDrawColor(doc, P.shadow);
        doc.roundedRect(x + 1.2, y + 1.2, boxW, boxH, DS.radii.md, DS.radii.md, "F");

        setFillColor(doc, P.surface); setDrawColor(doc, P.stroke); doc.setLineWidth(DS.stroke.thin);
        doc.roundedRect(x, y, boxW, boxH, DS.radii.md, DS.radii.md, "FD");

        // QR fixo à direita
        if (url) {
          const dataURL = await makeQRDataURL(url);
          if (dataURL) { try { doc.addImage(dataURL, "PNG", x + boxW - DS.box.pad - DS.qr.size, y + DS.box.pad, DS.qr.size, DS.qr.size); } catch {} }
        }

        // Texto à esquerda (sem invadir QR)
        let tx = x + DS.box.pad, ty = y + DS.box.pad;

        // Badge
        if (badgeText) {
          const bw = doc.getTextWidth(badgeText) + DS.badge.padX * 2;
          setFillColor(doc, P.brand); setDrawColor(doc, P.brand);
          doc.roundedRect(tx, ty, bw, DS.badge.h, DS.badge.radius, DS.badge.radius, "F");
          setTextColor(doc, P.badgeText);
          doc.setFont("helvetica", "bold"); doc.setFontSize(DS.type.caption);
          doc.text(badgeText, tx + DS.badge.padX, ty + DS.badge.h - 2);
          // reset
          setTextColor(doc, P.text);
          doc.setFont("helvetica", "normal"); doc.setFontSize(DS.type.body);
          ty += DS.badge.h + mm(2);
        } else {
          doc.setFont("helvetica", "normal"); doc.setFontSize(DS.type.body);
        }

        // Título (até 3 linhas)
        const titleLines = wrapWithLimit(doc, title, textAreaW, 3);
        doc.setFont("helvetica", "bold"); doc.setFontSize(DS.type.h3);
        titleLines.forEach((ln) => { doc.text(ln, tx, ty); ty += DS.layout.line; });

        // Host (até 2 linhas, “tight”)
        if (host) {
          const hostLines = wrapWithLimit(doc, host, textAreaW, 2);
          doc.setFont("helvetica", "normal"); doc.setFontSize(DS.type.small);
          setTextColor(doc, P.muted);
          hostLines.forEach((ln) => { doc.text(ln, tx, ty); ty += (DS.layout.line - 1); });
          setTextColor(doc, P.text);
        }
      };

      // Grid: linha com altura unificada (100% sem sobreposição)
      let i = 0;
      while (i < portfolio.length) {
        const row = portfolio.slice(i, i + cols);
        const rowHeights = row.map(measureCardH);
        const rowH = Math.max(...rowHeights);

        // quebra antes de desenhar a linha
        ensureSpaceMain(rowH, ctx);
        if (mainY + rowH > H - M) {
          const n = newPageMain(); ctx.mainX = n.mainX; ctx.mainW = n.mainW;
        }

        for (let c = 0; c < row.length; c++) {
          const x = ctx.mainX + c * (boxW + DS.box.gap);
          await drawCard(row[c], x, mainY, rowH);
        }

        mainY += rowH + DS.box.gap;
        i += cols;
      }
    }

    // ============= Rodapé padronizado (numeração) =============
    const total = doc.getNumberOfPages();
    for (let i = 1; i <= total; i++) {
      doc.setPage(i);
      const fy = H - mm(10);
      doc.setFont("helvetica", "normal"); doc.setFontSize(DS.type.caption);
      setTextColor(doc, P.muted);
      const text = `Página ${i} de ${total}`;
      const wText = doc.getTextWidth(text);
      doc.text(text, W - M - wText, fy);
    }

    // Nome do arquivo
    doc.save(`${(name || "curriculo").replace(/\s+/g, "_")}.pdf`);
  });
});
