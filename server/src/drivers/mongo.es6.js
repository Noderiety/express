let mongoose = require('mongoose');

module.exports = {
	initialize: (config) => {
		// connect to Mongo when the app initializes
		return mongoose.promise.connect(config.url);
	}
};