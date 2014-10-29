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
    errorHandler = require('errorhandler'),
    p = require('songbird'),
    mongoDriver = require('./drivers/mongo'),
    router = require('./middlewares/router');

class App {
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
      .use(compress())
      .use(favicon())
      .use(logger('dev'))
      .use(bodyParser())
      .use(methodOverride())
      .use(express.static(path.join(__dirname, 'public')))
      .use(router())
      .use(function (req, res) {
        res.status(404).render('404', {title: 'Not Found :('});
      });

    if (server.get('env') === 'development') {
      server.use(errorHandler());
    }
  }

  initialize() {
    return p.all([
      mongoDriver.initialize(this.config.database),
      this.server.promise.listen(this.server.get('port'))
    ]);
  }
}

module.exports = App;
