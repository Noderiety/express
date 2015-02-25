let trycatch = require('trycatch');

function requestErrorHandler(err, req, res, next) {
	res.writeHead(500);
	res.end(err.stack);
}

function trycatchMiddleware() {
	return (req, res, next) => {
    console.log('adding trycatch')
		trycatch(next, (err) => {
      requestErrorHandler(err, req, res, next);
    });
	};
}

module.exports = trycatchMiddleware;
