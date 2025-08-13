// Geração de currículo em PDF

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("download-pdf");
  if (!button || !window.jspdf) return;

  button.addEventListener("click", () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const name = document.getElementById("profile.name")?.innerText || "";
    const job = document.getElementById("profile.job")?.innerText || "";
    const graduate =
      document.querySelector("#profile.graduate .info-text")?.innerText || "";
    const graduateProgress =
      document.querySelector("#profile.graduateScale .progress-text")?.innerText ||
      "";
    const location = document.getElementById("profile.location")?.innerText || "";
    const phone = document.getElementById("profile.phone")?.innerText || "";
    const email = document.getElementById("profile.email")?.innerText || "";
    const about = document.getElementById("profile.description")?.innerText || "";

    const collectListItems = (id) =>
      Array.from(document.getElementById(id)?.querySelectorAll("li") || []).map(
        (li) => li.innerText.trim()
      );

    const collectPortfolio = () =>
      Array.from(
        document.getElementById("profile.portfolio")?.querySelectorAll("li") || []
      ).map((li) => ({
        title: li.querySelector(".portfolio-title")?.innerText.trim() || "",
        link: li.querySelector(".portfolio-link")?.innerText.trim() || "",
      }));

    const collectExperiences = () =>
      Array.from(
        document
          .getElementById("profile.professionalExperience")
          ?.querySelectorAll("li") || []
      ).map((li) => ({
        title: li.querySelector(".title")?.innerText.trim() || "",
        period: li.querySelector(".period")?.innerText.trim() || "",
        description:
          li.querySelector(".description")?.innerText.trim() || "",
      }));

    const hardSkills = collectListItems("profile.skills.hardSkills");
    const softSkills = collectListItems("profile.skills.softSkills");
    const languages = collectListItems("profile.languages");
    const portfolio = collectPortfolio();
    const experiences = collectExperiences();

    const hardSkillsTitle =
      document.getElementById("skills.titleHardSkills")?.innerText ||
      "Hard Skills";
    const softSkillsTitle =
      document.getElementById("skills.titleSoftSkills")?.innerText ||
      "Soft Skills";
    const languagesTitle =
      document.getElementById("acordeon.titleLanguages")?.innerText || "Idiomas";
    const portfolioTitle =
      document.getElementById("acordeon.titlePortfolio")?.innerText ||
      "Portfólio";
    const experienceTitle =
      document.getElementById("acordeon.titleProfessionalExperience")
        ?.innerText || "Experiência Profissional";

    let y = 10;
    const pageHeight = doc.internal.pageSize.getHeight();
    const checkPageBreak = (space = 10) => {
      if (y + space > pageHeight - 10) {
        doc.addPage();
        y = 10;
      }
    };

    doc.setFontSize(16);
    doc.text(name, 10, y);
    y += 10;
    doc.setFontSize(12);
    if (job) {
      doc.text(job, 10, y);
      y += 10;
    }
    if (graduate) {
      doc.text(`Formação: ${graduate}`, 10, y);
      y += 10;
    }
    if (graduateProgress) {
      doc.text(graduateProgress, 10, y);
      y += 10;
    }
    if (location) {
      doc.text(`Localização: ${location}`, 10, y);
      y += 10;
    }
    if (phone) {
      doc.text(`Telefone: ${phone}`, 10, y);
      y += 10;
    }
    if (email) {
      doc.text(`Email: ${email}`, 10, y);
      y += 10;
    }

    if (about) {
      doc.text("Sobre", 10, y);
      y += 10;
      const aboutLines = doc.splitTextToSize(about, 180);
      aboutLines.forEach((line) => {
        checkPageBreak();
        doc.text(line, 10, y);
        y += 10;
      });
    }

    const addList = (title, items) => {
      if (!items.length) return;
      checkPageBreak();
      doc.text(title, 10, y);
      y += 10;
      items.forEach((item) => {
        const lines = doc.splitTextToSize(`- ${item}`, 180);
        lines.forEach((line) => {
          checkPageBreak();
          doc.text(line, 10, y);
          y += 10;
        });
      });
    };

    const addPortfolio = (title, items) => {
      if (!items.length) return;
      checkPageBreak();
      doc.text(title, 10, y);
      y += 10;
      items.forEach((item) => {
        const line = `- ${item.title}: ${item.link}`.trim();
        const lines = doc.splitTextToSize(line, 180);
        lines.forEach((l) => {
          checkPageBreak();
          doc.text(l, 10, y);
          y += 10;
        });
      });
    };

    const addExperiences = (title, items) => {
      if (!items.length) return;
      checkPageBreak();
      doc.text(title, 10, y);
      y += 10;
      items.forEach((exp) => {
        checkPageBreak();
        doc.text(`- ${exp.title}`, 10, y);
        y += 10;
        if (exp.period) {
          checkPageBreak();
          doc.text(`  ${exp.period}`, 10, y);
          y += 10;
        }
        if (exp.description) {
          const lines = doc.splitTextToSize(`  ${exp.description}`, 180);
          lines.forEach((line) => {
            checkPageBreak();
            doc.text(line, 10, y);
            y += 10;
          });
        }
      });
    };

    addList(hardSkillsTitle, hardSkills);
    addList(softSkillsTitle, softSkills);
    addList(languagesTitle, languages);
    addPortfolio(portfolioTitle, portfolio);
    addExperiences(experienceTitle, experiences);

    doc.save("curriculo.pdf");
  });
});
