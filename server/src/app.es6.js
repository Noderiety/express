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
    let app = this.app = express();

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
    app.set('port', config.server.port);
    app.engine('hbs', hbs.express3());
    app.set('views', path.join(__dirname, '..', 'views'));
    app.set('view engine', 'hbs');

    app
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

    if (app.get('env') === 'development') {
      app.use(errorHandler());
    }
  }

  initialize() {
    return p.all([
        mongoDriver.initialize(this.config.database),
        this.app.promise.listen(this.app.get('port'))
      ])
      .then(() => console.log('Express server listening on port ' + this.app.get('port')))
      .done();
  }
}

module.exports = App;
