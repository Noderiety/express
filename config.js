var config = {
  development: {
    server: {
      port: 3000,
    },
    database: {
      type: 'mongo',
      url: 'mongodb://localhost/noderiety'
    }
  },
  testing: {
    server: {
      port: 3001
    },
    database: {
      type: 'mongo',
      url: 'mongodb://localhost/noderiety'
    }
  },
  production: {
    server: {
      port: 8080
    },
    database: {
      type: 'mongo',
      url: 'mongodb://localhost/noderiety'
    }
  }
};

module.exports = config[process.env.NODE_ENV || 'development'];
