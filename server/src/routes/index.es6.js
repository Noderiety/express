let controllers = require('../controllers/'),
    basicAuth = require('basic-auth-connect'),
    authMiddleware = require('../middlewares/auth-mongo'),
    auth = basicAuth(authMiddleware());

module.exports = function(app) {
  app.all('/', controllers.index);
  app.post('/post', auth, controllers.base.post);
  app.get('/thread/:title', controllers.base.show);
  app.get('/thread', controllers.base.list);
  app.post('/thread', auth, controllers.base.thread);
};
