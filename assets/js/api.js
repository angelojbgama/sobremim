function detectLanguage(lang) {
    let language = lang || navigator.language || navigator.userLanguage;
    language = language.substring(0, 2).toLowerCase();
    const supportedLanguages = ['pt', 'en', 'es'];
    if (!supportedLanguages.includes(language)) {
        language = 'pt';
    }
    return language;
}

async function fetchProfileData(lang) {
    const language = detectLanguage(lang);
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
        return null;
    }
}

async function fetchUiText(lang) {
    const language = detectLanguage(lang);
    const url = `data/ui_${language}.json`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro ao carregar o arquivo de interface: ${response.statusText}`);
        }
        const uiData = await response.json();
        uiData.language = language;
        return uiData;
    } catch (error) {
        console.error(error);
        return {
            loading: "Loading...",
            profileLoadError: "Could not load profile data.",
            profileNotLoaded: "Profile data was not loaded.",
            language,
            titleAcademicFormation: "Academic Formation",
            titleLanguageCertifications: "Language Proficiency Certifications",
            titleCertifications: "Certifications",
            certIssuer: "Issuer",
            certDate: "Date",
            openPdf: "Open PDF",
            progressLabel: "Progress",
            langLevelBasic: "Basic",
            langLevelIntermediate: "Intermediate",
            langLevelAdvanced: "Advanced",
            langLevelFluent: "Fluent",
            hardSkillsLegendHint: "0–10 (higher means more mastery)",
            hardSkillsChartLabel: "Technical skills radar chart",
            hardSkillsProgressLabel: "Skill level",
            noHardSkills: "No skills registered.",
            openProject: "Open",
            noCertifications: "No certifications available.",
            viewLanguageCertification: "View",
            downloadPdfAria: "Download resume as PDF",
            toggleThemeAria: "Toggle theme",
            iconJobAria: "Occupation",
            iconGraduateAria: "Education",
            iconLocationAria: "Location",
            iconPhoneAria: "Phone",
            iconEmailAria: "Email",
            footerSocialAria: "Social media",
            footerMadeWith: "Made with",
            footerLoveSrLabel: "love",
            footerByLabel: "by",
            portfolioGithubLabel: "GitHub",
            portfolioLinkLabel: "Link",
        };
    }
}

if (typeof module !== 'undefined') {
    module.exports = { fetchProfileData, fetchUiText, detectLanguage };
}
