const { fetchProfileData } = require('../assets/js/api');

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
});
