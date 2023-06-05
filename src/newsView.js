const NewsModel = require('./newsModel.js')

class NewsView {
  constructor(client) {
    this.client = client;
    this.articles = [];
    this.mainContainerEl = document.querySelector('#main-container');
  }

  loadArticles(query) {
    let url = `https://content.guardianapis.com/search?q="${query}"&api-key=test&show-fields=thumbnail`
    return this.client.getArticles(url, (data) => {
      data.response.results.forEach((article) => {
        let model = new NewsModel();
        model.setHeadline(article.webTitle);
        model.setArticleURL(article.webUrl);
        model.setImageURL(article.fields.thumbnail);
        this.articles.push(model);
      })
    }).then(() => this.displayArticles())
  }

  displayArticles() {
    this.articles.forEach((article) => {
      let articleEl = document.createElement('div');
      articleEl.className = 'article'

      let articleImageEl = document.createElement('img');
      articleImageEl.src = article.getImageURL();

      let articleHeadlineEl = document.createElement('a');
      articleHeadlineEl.textContent = article.getHeadline();
      articleHeadlineEl.href = article.getArticleURL();

      articleEl.append(articleImageEl);
      articleEl.append(document.createElement('br'));
      articleEl.append(articleHeadlineEl);
      this.mainContainerEl.append(articleEl);
    })
  }
}

module.exports = NewsView;