function detectLanguage() {
    let language = navigator.language || navigator.userLanguage;
    language = language.substring(0, 2).toLowerCase();
    const supportedLanguages = ['pt', 'en', 'es'];
    if (!supportedLanguages.includes(language)) {
        language = 'pt';
    }
    return language;
}

async function fetchProfileData(lang) {
    const language = lang || detectLanguage();
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
    const language = lang || detectLanguage();
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
        return { loading: "Loading...", profileLoadError: "Could not load profile data.", profileNotLoaded: "Profile data was not loaded.", language };
    }
}

if (typeof module !== 'undefined') {
    module.exports = { fetchProfileData, fetchUiText, detectLanguage };
}
