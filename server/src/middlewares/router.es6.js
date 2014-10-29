let express = require('express'),
    routes = require('../routes');

module.exports = () => {
  let router = express.Router();
  routes(router);
  return router;
};
