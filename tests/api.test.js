const { fetchProfileData, fetchUiText } = require('../assets/js/api');

describe('fetchProfileData', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('defaults to pt when language is unsupported and returns profile data', async () => {
    const profilePt = require('../data/profile_pt.json');
    global.navigator = { language: 'fr-FR', userLanguage: 'fr-FR' };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(profilePt),
      })
    );

    const data = await fetchProfileData();

    expect(global.fetch).toHaveBeenCalledWith('data/profile_pt.json');
    expect(data).toEqual(profilePt);
  });

  test('returns null when fetch fails', async () => {
    global.navigator = { language: 'fr-FR', userLanguage: 'fr-FR' };
    global.fetch = jest.fn(() => Promise.reject(new Error('Network error')));

    const data = await fetchProfileData();

    expect(global.fetch).toHaveBeenCalledWith('data/profile_pt.json');
    expect(data).toBeNull();
  });

  test('falls back to pt when explicit language is unsupported', async () => {
    const profilePt = require('../data/profile_pt.json');
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(profilePt),
      })
    );

    const data = await fetchProfileData('fr');

    expect(global.fetch).toHaveBeenCalledWith('data/profile_pt.json');
    expect(data).toEqual(profilePt);
  });
});

describe('fetchUiText', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('defaults to pt when language is unsupported and returns ui text', async () => {
    const uiPt = require('../data/ui_pt.json');
    global.navigator = { language: 'fr-FR', userLanguage: 'fr-FR' };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(uiPt),
      })
    );

    const data = await fetchUiText();

    expect(global.fetch).toHaveBeenCalledWith('data/ui_pt.json');
    expect(data).toEqual({ ...uiPt, language: 'pt' });
  });

  test('returns fallback when fetch fails', async () => {
    global.navigator = { language: 'fr-FR', userLanguage: 'fr-FR' };
    global.fetch = jest.fn(() => Promise.reject(new Error('Network error')));

    const data = await fetchUiText();

    expect(global.fetch).toHaveBeenCalledWith('data/ui_pt.json');
    expect(data.loading).toBe('Loading...');
    expect(data.language).toBe('pt');
  });

  test('falls back to pt when explicit language is unsupported', async () => {
    const uiPt = require('../data/ui_pt.json');
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(uiPt),
      })
    );

    const data = await fetchUiText('fr');

    expect(global.fetch).toHaveBeenCalledWith('data/ui_pt.json');
    expect(data).toEqual({ ...uiPt, language: 'pt' });
  });
});
