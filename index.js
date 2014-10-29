let config = require('./config'),
    App = require('./server/app'),
		mongoDriver = require('./server/drivers/mongo'),
    p = require('songbird'),
    app = new App();

p.all([
		mongoDriver.initialize(config.database),
		app.promise.listen(app.get('port'))
	])
	.then(() => console.log('Express server listening on port ' + app.get('port')))
	.done();
