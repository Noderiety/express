let http = require('http')
  , express = require('express')
  , session = require('express-session')
  , cookieParser = require('cookie-parser')
  , bodyParser = require('body-parser')
  , uuid = require('node-uuid')
  , app = express()
  , users = {}
  , Twitter = require('twitter');

require('songbird')
 
const TWITTER_CONSUMER_KEY = 'k9kHb2yVjlNPZd6lVBtVQvkNJ'
const TWITTER_CONSUMER_SECRET = 'J1s5lJFEF3z0rFFoafwMHZJrFnAjKVbQLcgAh88EpBjib9GyZJ'


// let client = new Twitter({
//   consumer_key: TWITTER.CONSUMER_KEY,
//   consumer_secret: TWITTER.CONSUMER_SECRET,
//   access_token_key: TWITTER.ACCESS_TOKEN,
//   access_token_secret: TWITTER.ACCESS_SECRET
// })
 
// let params = {screen_name: 'nodejs'}
// client.get('statuses/user_timeline', params, function(error, tweets, response){
//   if (!error) {
//     console.log(tweets)
//   }
// })

let passport = require('passport')
  , TwitterStrategy = require('passport-twitter').Strategy

passport.serializeUser(function(user, done) {
  console.log('serializeUser: \n\n', user, '\n============================================================\n')
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  console.log('deserializeUser: \n\n', user, '\n============================================================\n')
  done(null, user);
});

passport.use(new TwitterStrategy({
    consumerKey: TWITTER_CONSUMER_KEY,
    consumerSecret: TWITTER_CONSUMER_SECRET,
    callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback'
  },
  function(token, tokenSecret, profile, done) {
    profile.token = token
    profile.tokenSecret = tokenSecret

    users[profile.id] = profile
    done(null, profile)
  }
))

app.use(cookieParser())
app.use(bodyParser.urlencoded())
app.use(session({
  genid: function(req) {
    return uuid.v1() // use UUIDs for session IDs
  },
  secret: 'noderiety yeehaw',
  cookie: { secure: false }
}))
app.use(passport.initialize())
app.use(passport.session())

app.get('/auth/twitter', passport.authenticate('twitter', {successFlash: 'Welcome!' }))
app.get('/auth/twitter/callback', passport.authenticate('twitter', {
  successRedirect: '/',
  failureRedirect: '/login'
}))

app.get('/home', async function(req, res) {
  console.log('home: \n\n', req.user, '\n============================================================\n')

  let client = new Twitter({
    consumer_key: TWITTER_CONSUMER_KEY,
    consumer_secret: TWITTER_CONSUMER_SECRET,
    access_token_key: req.user.token,
    access_token_secret: req.user.tokenSecret
  })
   
  let params = {screen_name: 'nodejs'};
  console.log('here...')
  let [tweets, response] = await client.promise.get('statuses/user_timeline', params)
  res.json(tweets)
})
app.use(express.static('public'))
http.createServer(app).listen(3000, ()=>console.log('listening'))