const NewsClient = require('../src/newsClient.js');

let client;

describe('NewsClient', () => {
  beforeEach(() => {
    client = new NewsClient();
  })

  test('getArticles', () => {
    let url = 'https://content.guardianapis.com/search?api-key=test';
    return client.getArticles(url, (data) => {
      expect(data).toBeTruthy();
      expect(data.response.results.length).toBe(10);
    })
  })
})