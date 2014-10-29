/*global describe, it*/
let superagent = require('supertest'),
    _ = require('lodash'),
    app = require('../../index');

require('chai').should();

function request() {
  return superagent(app.server);
}

describe('Routes', () => {
  describe('GET /', () => {
    it('should return 200', (done) => {
      request()
        .get('/')
        .expect(200, done);
    });
  });
  describe('GET /thread', () => {
    it('should return 200', (done) => {
      request()
        .get('/thread')
        .expect('Content-Type', /json/)
        .expect((res) => {
          res.body.should.be.an('array');
          let thread = res.body[0];
          thread.should.have.property('title');
          thread.should.have.property('author');
          thread.should.have.property('title');

        })
        .expect(200, done);
    });
  });
  describe('GET /thread/:title', () => {
    it('should return 200', (done) => {
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