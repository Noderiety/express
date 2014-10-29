var config = require('./config'),
    App = require('./server/lib/app'),
    app = new App(config),
    trycatch = require('trycatch');

app.configureSync(config);

if (process.env.NODE_ENV !== 'production') {
	trycatch.configure({'long-stack-traces': true});
}

// For requiring from tests
app.initialize()
	.then(function () {
		console.log('Express server listening on port ' + app.server.get('port'));
	})
	.done();

if (require.main !== module) {
	module.exports = app;
}

