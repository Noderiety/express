let controllers = require('../controllers/'),
    basicAuth = require('basic-auth-connect'),
    authMiddleware = require('../middlewares/auth-mongo');

module.exports = function(router) {
  let auth = basicAuth(authMiddleware());

  router.all('/', controllers.index);
  router.all('/error', controllers.error)
  router.post('/post', auth, controllers.base.post);
  router.get('/thread/:title', controllers.base.show);
  router.get('/thread', controllers.base.list);
  router.post('/thread', auth, controllers.base.thread);
};
