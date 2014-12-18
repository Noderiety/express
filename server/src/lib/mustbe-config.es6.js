module.exports = (config) => {
  config.routeHelpers((rh) => {
    // get the current user from the request object
    rh.getUser((req, cb) => cb(null, req.user))

    // what do we do when the user is not authorized?
    rh.notAuthorized((req, res, next) => {
      res.redirect('/login')
    })

    rh.notAuthenticated((req, res, next) => {
      res.redirect('/denied')
    })
  })

  config.activities((activities) => {
    // configure an activity with an authorization check
    activities.can('post', (identity, params, callback) => {
      // TODO: Check if user is author
      callback(null, true)
    })
  })

  config.userIdentity((id) => {
    // determine if this user is authenticated or not
    id.isAuthenticated((user, cb) => {
      // user supplied by routeHelpers.getUser
      cb(null, true)
    })
  })
}