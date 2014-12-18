let authMongo = require('../lib/auth-mongo'),
    basicAuth = require('basic-auth-connect')

module.exports = basicAuth(authMongo)