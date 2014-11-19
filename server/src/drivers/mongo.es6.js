let mongoose = require('mongoose');

class MongoDriver {
	constructor(config) {
		this.config = config
	}

	initialize() {
		// connect to Mongo when the app initializes
		return mongoose.promise.connect(this.config.url);
	}
}

module.exports = MongoDriver