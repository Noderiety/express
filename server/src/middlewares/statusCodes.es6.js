let handle404 = require('./handle404'),
    handle401 = require('./handle401')

module.exports = {
  404: handle404,
  401: handle401
}