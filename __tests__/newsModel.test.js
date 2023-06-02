const NewsModel = require('../src/newsModel.js')

let model;

describe('NewsModel', () => {
  beforeEach(() => {
    model = new NewsModel();
  });

  test('it sets headline', () => {
    model.setHeadline('headline');
    expect(model.getHeadline()).toEqual('headline');
  });

  test('it sets imageURL', () => {
    model.setImageURL('url');
    expect(model.getImageURL()).toEqual('url');
  });

  test('it sets articleURL', () => {
    model.setArticleURL('url');
    expect(model.getArticleURL()).toEqual('url');
  });

  test('it sets summary', () => {
    model.setSummary('summary');
    expect(model.getSummary()).toEqual('summary');
  });
})