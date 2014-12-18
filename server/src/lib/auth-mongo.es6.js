let User = require('../models/user'),
    bcrypt = require('bcrypt')

// Database salt:
// const SECRET = '$2a$04$bkZO8eLosm0QAu4EWdeEs.'

module.exports = (user, pass, callback) => {
  User.promise.findOne({name: user})
    .then((user) => {
      if (!user) {
        return false
      }

      return bcrypt.promise.compare(pass, user.password)
        .then((isAuthenticated) => {
          if (!isAuthenticated) {
            return false
          }

          // req.user = user
          return true
        })
    })
    .nodeify(callback);
}