const NewsView = require('../src/newsView.js');
const NewsModel = require('../src/newsModel.js');
jest.mock('../src/newsModel.js');

let view, model;

describe('NewsView', () => {
  beforeEach(() => {
    NewsModel.mockClear();
    model = new NewsModel();
    mockClient = {
      getArticles: jest.fn()
    }
    view = new NewsView(model, mockClient);
  })

  test('takes data from api and populates the model', () => {
    mockData = {
      response: {
        results: [{
          webTitle: 'title',
          webUrl: 'url',
          fields: {
            thumbnail: 'jpg'
          }
        }]
      }
    }

    view.client.getArticles.mockImplementationOnce((url, callback) => {
      return Promise.resolve(callback(mockData));
    })

    return view.loadArticles().then(() => {
      expect(view.articles.length).toBe(1);
      expect(view.model.setHeadline).toHaveBeenCalledWith(mockData.response.results[0].webTitle);
      expect(view.model.setArticleURL).toHaveBeenCalledWith(mockData.response.results[0].webUrl);
      expect(view.model.setImageURL).toHaveBeenCalledWith(mockData.response.results[0].fields.thumbnail);
    })
  })
})