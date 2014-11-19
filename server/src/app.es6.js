/**
 * Module dependencies.
 */

let express = require('express'),
    path = require('path'),
    hbs = require('express-hbs'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    compress = require('compression'),
    favicon = require('static-favicon'),
    methodOverride = require('method-override'),
    p = require('songbird'),
    router = require('./middlewares/router'),
    handle404 = require('./middlewares/handle404'),
    trycatchMiddleware = require('./middlewares/trycatch');

class App {
  configureSync() {
    let DBDriver = require('./drivers/'+this.config.database.type);
    this.databaseDriver = new DBDriver(this.config.database)
  }

  constructor (config) {
    let server = this.server = express();

    this.config = config;

    /**
     * A simple if condtional helper for handlebars
     *
     * Usage:
     *   {{#ifvalue env value='development'}}
     *     do something marvellous
     *   {{/ifvalue}}
     * For more information, check out this gist: https://gist.github.com/pheuter/3515945
     */
    hbs.registerHelper('ifvalue', function (conditional, options) {
      if (options.hash.value === conditional) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    });

    /**
     * Express configuration.
     */
    server.set('port', config.server.port);
    server.engine('hbs', hbs.express3());
    server.set('views', path.join(__dirname, '..', 'views'));
    server.set('view engine', 'hbs');

    server
      .use(trycatchMiddleware())
      .use(compress())
      .use(favicon())
      .use(logger('dev'))
      .use(bodyParser())
      .use(methodOverride())
      .use(express.static(path.join(__dirname, 'public')))
      .use(router())
      .use(handle404());
  }

  initialize() {
    return p.all([
      this.databaseDriver.initialize(),
      this.server.promise.listen(this.server.get('port'))
    ]);
  }
}

module.exports = App;
