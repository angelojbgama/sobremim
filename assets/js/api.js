async function fetchProfileData() {
    // Detecta o idioma do navegador
    let language = navigator.language || navigator.userLanguage;
    language = language.substring(0, 2).toLowerCase(); // Extrai o código do idioma (ex: 'pt', 'en', 'es')

    // Lista de idiomas suportados
    const supportedLanguages = ['pt', 'en', 'es'];

    // Verifica se o idioma detectado é suportado; caso contrário, define como padrão ('pt')
    if (!supportedLanguages.includes(language)) {
        language = 'pt';
    }

    // Define o caminho do arquivo JSON baseado no idioma
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
        // Opcional: Retornar dados padrão ou exibir uma mensagem de erro para o usuário
        return null;
    }
}

if (typeof window !== 'undefined') {
    fetchProfileData().then(profileData => {
        if (profileData) {
            // Aqui você pode manipular os dados do perfil e atualizar a interface da página
            console.log(profileData);
        } else {
            // Lógica para caso os dados não sejam carregados
            console.log("Não foi possível carregar os dados do perfil.");
        }
    });
}

module.exports = { fetchProfileData };
