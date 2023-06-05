const NewsView = require('./src/newsView.js')
const NewsModel = require('./src/newsModel.js')
const NewsClient = require('./src/newsClient.js')


const client = new NewsClient();
const model = new NewsModel();
const view = new NewsView(client);

view.loadArticles().then(console.log(view.articles));