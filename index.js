var cluster = require('cluster'),
		numCPUs = require('os').cpus().length,
		trycatch = require('trycatch'),
    config = require('./config'),
    App = require('./server/lib/app'),
    app = new App(config);

app.configureSync(config);

if (process.env.NODE_ENV !== 'production') {
	// trycatch.configure({'long-stack-traces': true});
}

if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function (worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
    cluster.fork();
  });
} else {
  // Workers can share any TCP connection
	// For requiring from tests
	app.initialize()
		.then(function () {
			console.log('Express server listening on port ' + app.server.get('port'));
		})
		.done();
}

if (require.main !== module) {
	module.exports = app;
}

// if (process.env.NODE_ENV !== 'production') {
// 	// THIS MUST BE THE LAST LINE EXECUTED IN THE MAIN MODULE
// 	return require('safeguards').noSynchronousIO(module);
// }


