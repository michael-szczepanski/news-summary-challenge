/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsView = require('../src/newsView.js');
const NewsModel = require('../src/newsModel.js');
jest.mock('../src/newsModel.js');

let view;

describe('NewsView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    NewsModel.mockClear();
    mockClient = {
      getArticles: jest.fn()
    }
    view = new NewsView(mockClient);
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
    })
  })

  test('newsView creates correct div blocks', async () => {
    mockData = {
      response: {
        results: [{
          webTitle: 'title',
          webUrl: 'url',
          fields: {
            thumbnail: 'jpg'
          }
        }, {
          webTitle: 'title 2',
          webUrl: 'url 2',
          fields: {
            thumbnail: 'jpg 2'
          }
        }]
      }
    }

    view.client.getArticles.mockImplementationOnce((url, callback) => {
      return Promise.resolve(callback(mockData));
    })

    await view.loadArticles();
    
    expect(view.articles.length).toBe(2);
    expect(document.querySelectorAll('.article').length).toBe(2);
  })
})