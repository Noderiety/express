/* The API controller
   Exports 3 methods:
   * post - Creates a new thread
   * list - Returns a list of threads
   * show - Displays a thread and its posts
*/
let ObjectId = require('mongoose').Types.ObjectId,
    Thread = require('../models/thread'),
    Post = require('../models/post');

// GET /thread/:title
function thread(req, res) {
  new Thread({
      title: req.param('title'),
      author: req.param('author')
    })
    .promise.save()
    .then(() => res.end('Okay'))
    .done();
}

// GET /thread
function list(req, res) {
  Thread.promise.find()
    .then((threads) => res.send(threads))
    .done();
}

function post(req, res) {
  let threadId = new ObjectId(req.param('thread')),
      postValue = req.query.post;

  new Post({
      thread: threadId,
      post: postValue
    })
    .promise.save()
    .then(() => res.end('Okay'))
    .done();
}

// first locates a thread by title, then locates the replies by thread ID.
function show(req, res) {
  let title = req.param('title');

  Thread.promise.findOne({title: title})
    .then((thread) => {
      return Post.promise.find({thread: thread._id})
        .then((posts) => res.send({thread: thread, posts: posts}));
    })
    .done();
}

module.exports = {
  post: post,
  list: list,
  show: show,
  thread: thread
};

