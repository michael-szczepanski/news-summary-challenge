class NewsClient {
  getArticles(url, callback) {
    return fetch(url)
      .then(response => response.json())
      .then((data) => {
        callback(data);
      });
  };
};

module.exports = NewsClient;