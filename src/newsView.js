const NewsModel = require('./newsModel.js')

class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.articles = [];
  }

  loadArticles(query) {
    if (query === undefined) { query = "" }
    let url = `https://content.guardianapis.com/search?q=${query}&api-key=test&show-fields=thumbnail`
    return this.client.getArticles(url, (data) => {
      data.response.results.forEach((article) => {
        this.model.setHeadline(article.webTitle);
        this.model.setArticleURL(article.webUrl);
        this.model.setImageURL(article.fields.thumbnail);
        this.articles.push(this.model);
        this.model.reset();
      })
    })
  }
}

module.exports = NewsView;