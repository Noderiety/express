var config = require('./config'),
    App = require('./server/lib/app'),
    app = new App(config);

app.initialize(function(err) {
	if (err) {
		throw err;
	}
	console.log('Express server listening on port ' + app.get('port'));
});