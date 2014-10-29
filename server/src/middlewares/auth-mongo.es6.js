let User = require('../models/user'),
    bcrypt = require('bcrypt');

// const SECRET = '$2a$04$bkZO8eLosm0QAu4EWdeEs.'

module.exports = () => {
	return (user, pass, callback) => {
		User.promise.findOne({name: user})
			.then((user) => bcrypt.promise.compare(pass, user.password))
      .nodeify(callback);
	};
};
