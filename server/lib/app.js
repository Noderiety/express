"use strict";
require('traceur-source-maps').install(require('traceur'));
var express = require('express'),
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
var App = function App(config) {
  var app = this.app = express();
  this.config = config;
  hbs.registerHelper('ifvalue', function(conditional, options) {
    if (options.hash.value === conditional) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });
  app.set('port', config.server.port);
  app.engine('hbs', hbs.express3());
  app.set('views', path.join(__dirname, '..', 'views'));
  app.set('view engine', 'hbs');
  app.use(compress()).use(favicon()).use(logger('dev')).use(bodyParser()).use(methodOverride()).use(express.static(path.join(__dirname, 'public'))).use(router()).use(function(req, res) {
    res.status(404).render('404', {title: 'Not Found :('});
  });
  if (app.get('env') === 'development') {
    app.use(errorHandler());
  }
};
($traceurRuntime.createClass)(App, {initialize: function() {
    var $__0 = this;
    return p.all([mongoDriver.initialize(this.config.database), this.app.promise.listen(this.app.get('port'))]).then((function() {
      return console.log('Express server listening on port ' + $__0.app.get('port'));
    })).done();
  }}, {});
module.exports = App;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5lczYuanMiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU0sQUFBQyxDQUFDLHFCQUFvQixDQUFDLFFBQVEsQUFBQyxDQUFDLE9BQU0sQUFBQyxDQUFDLFNBQVEsQ0FBQyxDQUFDLENBQUM7RUFJdEQsQ0FBQSxPQUFNLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxTQUFRLENBQUM7QUFDM0IsT0FBRyxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsTUFBSyxDQUFDO0FBQ3JCLE1BQUUsRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLGFBQVksQ0FBQztBQUMzQixTQUFLLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxRQUFPLENBQUM7QUFDekIsYUFBUyxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsYUFBWSxDQUFDO0FBQ2xDLFdBQU8sRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLGFBQVksQ0FBQztBQUNoQyxVQUFNLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxnQkFBZSxDQUFDO0FBQ2xDLGlCQUFhLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxpQkFBZ0IsQ0FBQztBQUMxQyxlQUFXLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxjQUFhLENBQUM7QUFDckMsSUFBQSxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsVUFBUyxDQUFDO0FBQ3RCLGNBQVUsRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLGlCQUFnQixDQUFDO0FBQ3ZDLFNBQUssRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLHNCQUFxQixDQUFDO1FBRTNDLFNBQU0sSUFBRSxDQUNPLE1BQUs7SUFDWixDQUFBLEdBQUUsRUFBSSxDQUFBLElBQUcsSUFBSSxFQUFJLENBQUEsT0FBTSxBQUFDLEVBQUM7QUFFN0IsS0FBRyxPQUFPLEVBQUksT0FBSyxDQUFDO0FBV3BCLElBQUUsZUFBZSxBQUFDLENBQUMsU0FBUSxDQUFHLFVBQVUsV0FBVSxDQUFHLENBQUEsT0FBTSxDQUFHO0FBQzVELE9BQUksT0FBTSxLQUFLLE1BQU0sSUFBTSxZQUFVLENBQUc7QUFDdEMsV0FBTyxDQUFBLE9BQU0sR0FBRyxBQUFDLENBQUMsSUFBRyxDQUFDLENBQUM7SUFDekIsS0FBTztBQUNMLFdBQU8sQ0FBQSxPQUFNLFFBQVEsQUFBQyxDQUFDLElBQUcsQ0FBQyxDQUFDO0lBQzlCO0FBQUEsRUFDRixDQUFDLENBQUM7QUFLRixJQUFFLElBQUksQUFBQyxDQUFDLE1BQUssQ0FBRyxDQUFBLE1BQUssT0FBTyxLQUFLLENBQUMsQ0FBQztBQUNuQyxJQUFFLE9BQU8sQUFBQyxDQUFDLEtBQUksQ0FBRyxDQUFBLEdBQUUsU0FBUyxBQUFDLEVBQUMsQ0FBQyxDQUFDO0FBQ2pDLElBQUUsSUFBSSxBQUFDLENBQUMsT0FBTSxDQUFHLENBQUEsSUFBRyxLQUFLLEFBQUMsQ0FBQyxTQUFRLENBQUcsS0FBRyxDQUFHLFFBQU0sQ0FBQyxDQUFDLENBQUM7QUFDckQsSUFBRSxJQUFJLEFBQUMsQ0FBQyxhQUFZLENBQUcsTUFBSSxDQUFDLENBQUM7QUFFN0IsSUFBRSxJQUNHLEFBQUMsQ0FBQyxRQUFPLEFBQUMsRUFBQyxDQUFDLElBQ1osQUFBQyxDQUFDLE9BQU0sQUFBQyxFQUFDLENBQUMsSUFDWCxBQUFDLENBQUMsTUFBSyxBQUFDLENBQUMsS0FBSSxDQUFDLENBQUMsSUFDZixBQUFDLENBQUMsVUFBUyxBQUFDLEVBQUMsQ0FBQyxJQUNkLEFBQUMsQ0FBQyxjQUFhLEFBQUMsRUFBQyxDQUFDLElBQ2xCLEFBQUMsQ0FBQyxPQUFNLE9BQU8sQUFBQyxDQUFDLElBQUcsS0FBSyxBQUFDLENBQUMsU0FBUSxDQUFHLFNBQU8sQ0FBQyxDQUFDLENBQUMsSUFDaEQsQUFBQyxDQUFDLE1BQUssQUFBQyxFQUFDLENBQUMsSUFDVixBQUFDLENBQUMsU0FBVSxHQUFFLENBQUcsQ0FBQSxHQUFFLENBQUc7QUFDdkIsTUFBRSxPQUFPLEFBQUMsQ0FBQyxHQUFFLENBQUMsT0FBTyxBQUFDLENBQUMsS0FBSSxDQUFHLEVBQUMsS0FBSSxDQUFHLGVBQWEsQ0FBQyxDQUFDLENBQUM7RUFDeEQsQ0FBQyxDQUFDO0FBRUosS0FBSSxHQUFFLElBQUksQUFBQyxDQUFDLEtBQUksQ0FBQyxDQUFBLEdBQU0sY0FBWSxDQUFHO0FBQ3BDLE1BQUUsSUFBSSxBQUFDLENBQUMsWUFBVyxBQUFDLEVBQUMsQ0FBQyxDQUFDO0VBQ3pCO0FBQUEsQUFXSjtBQ3pFQSxBQUFDLGVBQWMsWUFBWSxDQUFDLEFBQUMsT0RpRTNCLFVBQVMsQ0FBVCxVQUFVLEFBQUM7O0FBQ1QsU0FBTyxDQUFBLENBQUEsSUFBSSxBQUFDLENBQUMsQ0FDVCxXQUFVLFdBQVcsQUFBQyxDQUFDLElBQUcsT0FBTyxTQUFTLENBQUMsQ0FDM0MsQ0FBQSxJQUFHLElBQUksUUFBUSxPQUFPLEFBQUMsQ0FBQyxJQUFHLElBQUksSUFBSSxBQUFDLENBQUMsTUFBSyxDQUFDLENBQUMsQ0FDOUMsQ0FBQyxLQUNHLEFBQUMsRUFBQyxTQUFBLEFBQUM7V0FBSyxDQUFBLE9BQU0sSUFBSSxBQUFDLENBQUMsbUNBQWtDLEVBQUksQ0FBQSxRQUFPLElBQUksQUFBQyxDQUFDLE1BQUssQ0FBQyxDQUFDO0lBQUEsRUFBQyxLQUMvRSxBQUFDLEVBQUMsQ0FBQztFQUNYLE1DeEVtRjtBRDJFckYsS0FBSyxRQUFRLEVBQUksSUFBRSxDQUFDO0FBQ3BCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ3RyYWNldXItc291cmNlLW1hcHMnKS5pbnN0YWxsKHJlcXVpcmUoJ3RyYWNldXInKSk7LyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbmxldCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpLFxuICAgIHBhdGggPSByZXF1aXJlKCdwYXRoJyksXG4gICAgaGJzID0gcmVxdWlyZSgnZXhwcmVzcy1oYnMnKSxcbiAgICBsb2dnZXIgPSByZXF1aXJlKCdtb3JnYW4nKSxcbiAgICBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKSxcbiAgICBjb21wcmVzcyA9IHJlcXVpcmUoJ2NvbXByZXNzaW9uJyksXG4gICAgZmF2aWNvbiA9IHJlcXVpcmUoJ3N0YXRpYy1mYXZpY29uJyksXG4gICAgbWV0aG9kT3ZlcnJpZGUgPSByZXF1aXJlKCdtZXRob2Qtb3ZlcnJpZGUnKSxcbiAgICBlcnJvckhhbmRsZXIgPSByZXF1aXJlKCdlcnJvcmhhbmRsZXInKSxcbiAgICBwID0gcmVxdWlyZSgnc29uZ2JpcmQnKSxcbiAgICBtb25nb0RyaXZlciA9IHJlcXVpcmUoJy4vZHJpdmVycy9tb25nbycpLFxuICAgIHJvdXRlciA9IHJlcXVpcmUoJy4vbWlkZGxld2FyZXMvcm91dGVyJyk7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBsZXQgYXBwID0gdGhpcy5hcHAgPSBleHByZXNzKCk7XG5cbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcblxuICAgIC8qKlxuICAgICAqIEEgc2ltcGxlIGlmIGNvbmR0aW9uYWwgaGVscGVyIGZvciBoYW5kbGViYXJzXG4gICAgICpcbiAgICAgKiBVc2FnZTpcbiAgICAgKiAgIHt7I2lmdmFsdWUgZW52IHZhbHVlPSdkZXZlbG9wbWVudCd9fVxuICAgICAqICAgICBkbyBzb21ldGhpbmcgbWFydmVsbG91c1xuICAgICAqICAge3svaWZ2YWx1ZX19XG4gICAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24sIGNoZWNrIG91dCB0aGlzIGdpc3Q6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3BoZXV0ZXIvMzUxNTk0NVxuICAgICAqL1xuICAgIGhicy5yZWdpc3RlckhlbHBlcignaWZ2YWx1ZScsIGZ1bmN0aW9uIChjb25kaXRpb25hbCwgb3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMuaGFzaC52YWx1ZSA9PT0gY29uZGl0aW9uYWwpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuZm4odGhpcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogRXhwcmVzcyBjb25maWd1cmF0aW9uLlxuICAgICAqL1xuICAgIGFwcC5zZXQoJ3BvcnQnLCBjb25maWcuc2VydmVyLnBvcnQpO1xuICAgIGFwcC5lbmdpbmUoJ2hicycsIGhicy5leHByZXNzMygpKTtcbiAgICBhcHAuc2V0KCd2aWV3cycsIHBhdGguam9pbihfX2Rpcm5hbWUsICcuLicsICd2aWV3cycpKTtcbiAgICBhcHAuc2V0KCd2aWV3IGVuZ2luZScsICdoYnMnKTtcblxuICAgIGFwcFxuICAgICAgLnVzZShjb21wcmVzcygpKVxuICAgICAgLnVzZShmYXZpY29uKCkpXG4gICAgICAudXNlKGxvZ2dlcignZGV2JykpXG4gICAgICAudXNlKGJvZHlQYXJzZXIoKSlcbiAgICAgIC51c2UobWV0aG9kT3ZlcnJpZGUoKSlcbiAgICAgIC51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJ3B1YmxpYycpKSlcbiAgICAgIC51c2Uocm91dGVyKCkpXG4gICAgICAudXNlKGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICAgICAgICByZXMuc3RhdHVzKDQwNCkucmVuZGVyKCc0MDQnLCB7dGl0bGU6ICdOb3QgRm91bmQgOignfSk7XG4gICAgICB9KTtcblxuICAgIGlmIChhcHAuZ2V0KCdlbnYnKSA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgYXBwLnVzZShlcnJvckhhbmRsZXIoKSk7XG4gICAgfVxuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICByZXR1cm4gcC5hbGwoW1xuICAgICAgICBtb25nb0RyaXZlci5pbml0aWFsaXplKHRoaXMuY29uZmlnLmRhdGFiYXNlKSxcbiAgICAgICAgdGhpcy5hcHAucHJvbWlzZS5saXN0ZW4odGhpcy5hcHAuZ2V0KCdwb3J0JykpXG4gICAgICBdKVxuICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0V4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICcgKyB0aGlzLmFwcC5nZXQoJ3BvcnQnKSkpXG4gICAgICAuZG9uZSgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuIiwiKCR0cmFjZXVyUnVudGltZS5jcmVhdGVDbGFzcykoJF9fcGxhY2Vob2xkZXJfXzAsICRfX3BsYWNlaG9sZGVyX18xLCAkX19wbGFjZWhvbGRlcl9fMikiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=