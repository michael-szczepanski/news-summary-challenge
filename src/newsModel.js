class NewsModel {
  constructor() {
    this.headline = "";
    this.imageURL = "";
    this.articleURL = "";
    this.summary = "";
  }

  // Setters
  setHeadline(headline) { this.headline = headline; }
  setImageURL(url) { this.imageURL = url; }
  setArticleURL(url) { this.articleURL = url; }
  setSummary(summary) { this.summary = summary; }

  // Getters
  getHeadline() { return this.headline; }
  getImageURL() { return this.imageURL; }
  getArticleURL() { return this.articleURL; }
  getSummary() { return this.summary; }
}

module.exports = NewsModel;