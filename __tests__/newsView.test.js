const NewsView = require('../src/newsView.js');
require('jest-fetch-mock').enableMocks();

let view;

describe('NewsView', () => {
  beforeEach(() => {
    fetch.resetMocks();
    view = new NewsView();
  })

  describe('getArticles()', () => {
    test('it retrieves correct data', () => {
      
    })
  })
})