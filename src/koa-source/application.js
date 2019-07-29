const http = require('http');
const request = require('./request');
const response = require('./response');
class Application {
  constructor () {
    this.request = request;
    this.response = response;
    this.middlewares = [];
  }
  use (middleware) {
    this.middlewares.push(middleware);
  },
  listen (...args) {
    const server = http.createServer(this.callback());
    server.listen(...args);
  },
  callback () {}
}

module.exports = Application;