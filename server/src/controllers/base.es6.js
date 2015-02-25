/* The API controller
   Exports 3 methods:
   * post - Creates a new thread
   * list - Returns a list of threads
   * show - Displays a thread and its posts
*/
let ObjectId = require('mongoose').Types.ObjectId,
    Thread = require('../models/thread'),
    Post = require('../models/post')

// GET /thread
function list(req, res, cb) {
  Thread.promise.find()
    .then((threads) => res.send(threads))
    .catch(cb);
}

// GET /thread/:title
// first locates a thread by title, then locates the replies by thread ID.
function show(req, res, cb) {
  let title = req.param('title');

  Thread.promise.findOne({title: title})
    .then((thread) => {
      return Post.promise.find({thread: thread._id})
        .then((posts) => res.send({thread: thread, posts: posts}));
    })
    .catch(cb);
}

function getPost(req, res, cb) {
  let id = req.param('id')

  Post.promise.findOne({_id: id})
    .then(post => res.send(post))
    .catch(cb)
}

// POST /thread
function thread(req, res, cb) {
  new Thread({
      title: req.param('title'),
      author: req.param('author')
    })
    .promise.save()
    .then(() => res.end('Okay'))
    .catch(cb);
}

function post(req, res, cb) {
  let threadId = new ObjectId(req.param('thread')),
      postValue = req.param('post');

  new Post({
      thread: threadId,
      post: postValue
    })
    .promise.save()
    .then(() => res.end('Okay'))
    .catch(cb);
}

module.exports = {
  show: show,
  list: list,
  getPost: getPost,
  thread: thread,
  post: post
};

if (process.env.NODE_ENV === 'testing') {
  _.extend(module.exports, {
    someInternalFunction: someInternalFunction
  })
}


