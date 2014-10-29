var config = require('./config'),
    App = require('./server/lib/app'),
    app = new App(config);

// For requiring from tests
app.initialize()
	.then(function () {
		console.log('Express server listening on port ' + app.server.get('port'));
	})
	.done();

module.exports = app;