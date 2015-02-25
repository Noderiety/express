/* global describe, it, before, beforeEach, after, afterEach */
/* jshint expr: true */
console.log(process.env.NODE_ENV)

let superagent = require('supertest'),
    _ = require('lodash'),
    app = require('../../index'),
    chai = require('chai'),
    sinon = require('sinon')

chai.should();
chai.use(require('chai-datetime'));

function request() {
  return superagent(app.server);
}

describe('Routes', () => {
  before(() => {
    return app.initialize()
  })

  describe('GET /', () => {
    it('should return 200', (done) => {
      request()
        .get('/')
        .expect(200, done);
    });
  });

  describe('GET /thread', () => {
    it('should return all threads', (done) => {
      request()
        .get('/thread')
        .expect('Content-Type', /json/)
        .expect((res) => {
          let threads = res.body
          _.each(threads, (thread) => {
            thread.should.have.a.property('title').and.should.be.a.string;
            thread.should.have.a.property('author');
            thread.should.have.a.property('postdate');
            isNaN(Date.parse(thread.postdate)).should.be.false
          })
        })
        .expect(200, done);
    });

    it.only('spy', () => {
      let object = { method: () => {} };
      let spy = sinon.spy(fs, 'readFile');

      // spy.withArgs(42);
      // spy.withArgs(1);

      object.method(42);
      object.method(42);
      object.method(42);
      object.method(42);
      object.method(42);
      object.method(1);

      console.log('spy.withArgs(1).calledOnce: ', spy.withArgs(1).calledOnce)

      spy.callCount.should.equal(0)
      spy.withArgs(1).calledOnce.should.be.true
    })
  });
  describe('GET /thread/:title', () => {
    // let dbConnection;

    before(() => {
      // Setup your DB connection
      // dbConnection = mongoose.connect(...)
      // console.log('before');
    });
    beforeEach(() => console.log('beforeEach'));
    after(() => {
      // dbConnection.close(done)
      // console.log('after');
    });
    afterEach(() => console.log('afterEach'));

    it('should return a thread with the given title', (done) => {
      request()
        .get('/thread/Hello')
        .expect('Content-Type', /json/)
        .expect((res) => {
          let thread = res.body;

          thread.thread.should.have.property('title');
          thread.thread.should.have.property('author');
          thread.thread.should.have.property('title');

          _.each(thread.posts, (post) => {
            post.thread.should.eql(thread.thread._id);
            post.should.have.property('post');
            post.should.have.property('author');
            post.should.have.property('date');
          });
        })
        .expect(200, done);
    });
  });
});
