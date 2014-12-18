let controllers = require('../controllers/'),
    auth = require('../middlewares/auth-mongo'),
    mustbe = require('../lib/mustbe').routeHelpers()

module.exports = function(router) {
  router.all('/', controllers.index)
  router.all('/error', controllers.error)

  router.get('/thread/:title', controllers.base.show)
  router.get('/thread', controllers.base.list)
  router.get('/authorized', auth, controllers.authorized)

  router.post('/post', auth, mustbe.authorized('post', controllers.base.post))
  router.post('/thread', auth, mustbe.authorized('post', controllers.base.thread))
}
