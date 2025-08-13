// Geração de currículo em PDF

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("download-pdf");
  if (!button || !window.jspdf) return;

  button.addEventListener("click", () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const name = document.getElementById("profile.name")?.innerText || "";
    const job = document.getElementById("profile.job")?.innerText || "";
    const location = document.getElementById("profile.location")?.innerText || "";
    const phone = document.getElementById("profile.phone")?.innerText || "";
    const email = document.getElementById("profile.email")?.innerText || "";
    const about = document.getElementById("profile.description")?.innerText || "";

    const collectItems = (id) =>
      Array.from(document.getElementById(id)?.querySelectorAll("li") || []).map(
        (li) => li.innerText.trim()
      );

    const hardSkills = collectItems("profile.skills.hardSkills");
    const softSkills = collectItems("profile.skills.softSkills");
    const languages = collectItems("profile.languages");
    const experiences = collectItems("profile.professionalExperience");

    let y = 10;
    doc.setFontSize(16);
    doc.text(name, 10, y);
    y += 10;
    doc.setFontSize(12);
    doc.text(job, 10, y);
    y += 10;

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
      doc.text(aboutLines, 10, y);
      y += aboutLines.length * 10;
    }

    const addList = (title, items) => {
      if (!items.length) return;
      doc.text(title, 10, y);
      y += 10;
      items.forEach((item) => {
        const lines = doc.splitTextToSize(`- ${item}`, 180);
        doc.text(lines, 10, y);
        y += lines.length * 10;
      });
    };

    addList("Hard Skills", hardSkills);
    addList("Soft Skills", softSkills);
    addList("Idiomas", languages);
    addList("Experiência Profissional", experiences);

    doc.save("curriculo.pdf");
  });
});
