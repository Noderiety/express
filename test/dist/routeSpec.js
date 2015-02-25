"use strict";
require('traceur-source-maps').install(require('traceur'));
console.log(process.env.NODE_ENV);
var superagent = require('supertest'),
    _ = require('lodash'),
    app = require('../../index'),
    chai = require('chai'),
    sinon = require('sinon');
chai.should();
chai.use(require('chai-datetime'));
function request() {
  return superagent(app.server);
}
describe('Routes', (function() {
  before((function() {
    return app.initialize();
  }));
  describe('GET /', (function() {
    it('should return 200', (function(done) {
      request().get('/').expect(200, done);
    }));
  }));
  describe('GET /thread', (function() {
    it('should return all threads', (function(done) {
      request().get('/thread').expect('Content-Type', /json/).expect((function(res) {
        var threads = res.body;
        _.each(threads, (function(thread) {
          thread.should.have.a.property('title').and.should.be.a.string;
          thread.should.have.a.property('author');
          thread.should.have.a.property('postdate');
          isNaN(Date.parse(thread.postdate)).should.be.false;
        }));
      })).expect(200, done);
    }));
    it.only('spy', (function() {
      var object = {method: (function() {})};
      var spy = sinon.spy(fs, 'readFile');
      object.method(42);
      object.method(42);
      object.method(42);
      object.method(42);
      object.method(42);
      object.method(1);
      console.log('spy.withArgs(1).calledOnce: ', spy.withArgs(1).calledOnce);
      spy.callCount.should.equal(0);
      spy.withArgs(1).calledOnce.should.be.true;
    }));
  }));
  describe('GET /thread/:title', (function() {
    before((function() {}));
    beforeEach((function() {
      return console.log('beforeEach');
    }));
    after((function() {}));
    afterEach((function() {
      return console.log('afterEach');
    }));
    it('should return a thread with the given title', (function(done) {
      request().get('/thread/Hello').expect('Content-Type', /json/).expect((function(res) {
        var thread = res.body;
        thread.thread.should.have.property('title');
        thread.thread.should.have.property('author');
        thread.thread.should.have.property('title');
        _.each(thread.posts, (function(post) {
          post.thread.should.eql(thread.thread._id);
          post.should.have.property('post');
          post.should.have.property('author');
          post.should.have.property('date');
        }));
      })).expect(200, done);
    }));
  }));
}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlU3BlYy5lczYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNLEFBQUMsQ0FBQyxxQkFBb0IsQ0FBQyxRQUFRLEFBQUMsQ0FBQyxPQUFNLEFBQUMsQ0FBQyxTQUFRLENBQUMsQ0FBQyxDQUFDO0FBRTFELE1BQU0sSUFBSSxBQUFDLENBQUMsT0FBTSxJQUFJLFNBQVMsQ0FBQyxDQUFBO0VBRTVCLENBQUEsVUFBUyxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsV0FBVSxDQUFDO0FBQ2hDLElBQUEsRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLFFBQU8sQ0FBQztBQUNwQixNQUFFLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxhQUFZLENBQUM7QUFDM0IsT0FBRyxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsTUFBSyxDQUFDO0FBQ3JCLFFBQUksRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLE9BQU0sQ0FBQztBQUUzQixHQUFHLE9BQU8sQUFBQyxFQUFDLENBQUM7QUFDYixHQUFHLElBQUksQUFBQyxDQUFDLE9BQU0sQUFBQyxDQUFDLGVBQWMsQ0FBQyxDQUFDLENBQUM7QUFFbEMsT0FBUyxRQUFNLENBQUMsQUFBQyxDQUFFO0FBQ2pCLE9BQU8sQ0FBQSxVQUFTLEFBQUMsQ0FBQyxHQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQy9CO0FBQUEsQUFFQSxPQUFPLEFBQUMsQ0FBQyxRQUFPLEdBQUcsU0FBQSxBQUFDO0FBQ2xCLE9BQUssQUFBQyxFQUFDLFNBQUEsQUFBQyxDQUFLO0FBQ1gsU0FBTyxDQUFBLEdBQUUsV0FBVyxBQUFDLEVBQUMsQ0FBQTtFQUN4QixFQUFDLENBQUE7QUFFRCxTQUFPLEFBQUMsQ0FBQyxPQUFNLEdBQUcsU0FBQSxBQUFDO0FBQ2pCLEtBQUMsQUFBQyxDQUFDLG1CQUFrQixHQUFHLFNBQUMsSUFBRyxDQUFNO0FBQ2hDLFlBQU0sQUFBQyxFQUFDLElBQ0gsQUFBQyxDQUFDLEdBQUUsQ0FBQyxPQUNGLEFBQUMsQ0FBQyxHQUFFLENBQUcsS0FBRyxDQUFDLENBQUM7SUFDdEIsRUFBQyxDQUFDO0VBQ0osRUFBQyxDQUFDO0FBRUYsU0FBTyxBQUFDLENBQUMsYUFBWSxHQUFHLFNBQUEsQUFBQztBQUN2QixLQUFDLEFBQUMsQ0FBQywyQkFBMEIsR0FBRyxTQUFDLElBQUc7QUFDbEMsWUFBTSxBQUFDLEVBQUMsSUFDSCxBQUFDLENBQUMsU0FBUSxDQUFDLE9BQ1IsQUFBQyxDQUFDLGNBQWEsQ0FBRyxPQUFLLENBQUMsT0FDeEIsQUFBQyxFQUFDLFNBQUMsR0FBRTtVQUNMLENBQUEsT0FBTSxFQUFJLENBQUEsR0FBRSxLQUFLO0FBQ3JCLFFBQUEsS0FBSyxBQUFDLENBQUMsT0FBTSxHQUFHLFNBQUMsTUFBSyxDQUFNO0FBQzFCLGVBQUssT0FBTyxLQUFLLEVBQUUsU0FBUyxBQUFDLENBQUMsT0FBTSxDQUFDLElBQUksT0FBTyxHQUFHLEVBQUUsT0FBTyxDQUFDO0FBQzdELGVBQUssT0FBTyxLQUFLLEVBQUUsU0FBUyxBQUFDLENBQUMsUUFBTyxDQUFDLENBQUM7QUFDdkMsZUFBSyxPQUFPLEtBQUssRUFBRSxTQUFTLEFBQUMsQ0FBQyxVQUFTLENBQUMsQ0FBQztBQUN6QyxjQUFJLEFBQUMsQ0FBQyxJQUFHLE1BQU0sQUFBQyxDQUFDLE1BQUssU0FBUyxDQUFDLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQTtRQUNuRCxFQUFDLENBQUE7TUFDSCxFQUFDLE9BQ0ssQUFBQyxDQUFDLEdBQUUsQ0FBRyxLQUFHLENBQUMsQ0FBQztJQUN0QixFQUFDLENBQUM7QUFFRixLQUFDLEtBQUssQUFBQyxDQUFDLEtBQUksR0FBRyxTQUFBLEFBQUM7UUFDVixDQUFBLE1BQUssRUFBSSxFQUFFLE1BQUssR0FBRyxTQUFBLEFBQUMsQ0FBSyxHQUFDLENBQUEsQ0FBRTtRQUM1QixDQUFBLEdBQUUsRUFBSSxDQUFBLEtBQUksSUFBSSxBQUFDLENBQUMsRUFBQyxDQUFHLFdBQVMsQ0FBQztBQUtsQyxXQUFLLE9BQU8sQUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0FBQ2pCLFdBQUssT0FBTyxBQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFDakIsV0FBSyxPQUFPLEFBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztBQUNqQixXQUFLLE9BQU8sQUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0FBQ2pCLFdBQUssT0FBTyxBQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFDakIsV0FBSyxPQUFPLEFBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVoQixZQUFNLElBQUksQUFBQyxDQUFDLDhCQUE2QixDQUFHLENBQUEsR0FBRSxTQUFTLEFBQUMsQ0FBQyxDQUFBLENBQUMsV0FBVyxDQUFDLENBQUE7QUFFdEUsUUFBRSxVQUFVLE9BQU8sTUFBTSxBQUFDLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDNUIsUUFBRSxTQUFTLEFBQUMsQ0FBQyxDQUFBLENBQUMsV0FBVyxPQUFPLEdBQUcsS0FBSyxDQUFBO0lBQzFDLEVBQUMsQ0FBQTtFQUNILEVBQUMsQ0FBQztBQUNGLFNBQU8sQUFBQyxDQUFDLG9CQUFtQixHQUFHLFNBQUEsQUFBQztBQUc5QixTQUFLLEFBQUMsRUFBQyxTQUFBLEFBQUMsQ0FBSyxHQUliLEVBQUMsQ0FBQztBQUNGLGFBQVMsQUFBQyxFQUFDLFNBQUEsQUFBQztXQUFLLENBQUEsT0FBTSxJQUFJLEFBQUMsQ0FBQyxZQUFXLENBQUM7SUFBQSxFQUFDLENBQUM7QUFDM0MsUUFBSSxBQUFDLEVBQUMsU0FBQSxBQUFDLENBQUssR0FHWixFQUFDLENBQUM7QUFDRixZQUFRLEFBQUMsRUFBQyxTQUFBLEFBQUM7V0FBSyxDQUFBLE9BQU0sSUFBSSxBQUFDLENBQUMsV0FBVSxDQUFDO0lBQUEsRUFBQyxDQUFDO0FBRXpDLEtBQUMsQUFBQyxDQUFDLDZDQUE0QyxHQUFHLFNBQUMsSUFBRztBQUNwRCxZQUFNLEFBQUMsRUFBQyxJQUNILEFBQUMsQ0FBQyxlQUFjLENBQUMsT0FDZCxBQUFDLENBQUMsY0FBYSxDQUFHLE9BQUssQ0FBQyxPQUN4QixBQUFDLEVBQUMsU0FBQyxHQUFFO1VBQ0wsQ0FBQSxNQUFLLEVBQUksQ0FBQSxHQUFFLEtBQUs7QUFFcEIsYUFBSyxPQUFPLE9BQU8sS0FBSyxTQUFTLEFBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQztBQUMzQyxhQUFLLE9BQU8sT0FBTyxLQUFLLFNBQVMsQUFBQyxDQUFDLFFBQU8sQ0FBQyxDQUFDO0FBQzVDLGFBQUssT0FBTyxPQUFPLEtBQUssU0FBUyxBQUFDLENBQUMsT0FBTSxDQUFDLENBQUM7QUFFM0MsUUFBQSxLQUFLLEFBQUMsQ0FBQyxNQUFLLE1BQU0sR0FBRyxTQUFDLElBQUcsQ0FBTTtBQUM3QixhQUFHLE9BQU8sT0FBTyxJQUFJLEFBQUMsQ0FBQyxNQUFLLE9BQU8sSUFBSSxDQUFDLENBQUM7QUFDekMsYUFBRyxPQUFPLEtBQUssU0FBUyxBQUFDLENBQUMsTUFBSyxDQUFDLENBQUM7QUFDakMsYUFBRyxPQUFPLEtBQUssU0FBUyxBQUFDLENBQUMsUUFBTyxDQUFDLENBQUM7QUFDbkMsYUFBRyxPQUFPLEtBQUssU0FBUyxBQUFDLENBQUMsTUFBSyxDQUFDLENBQUM7UUFDbkMsRUFBQyxDQUFDO01BQ0osRUFBQyxPQUNLLEFBQUMsQ0FBQyxHQUFFLENBQUcsS0FBRyxDQUFDLENBQUM7SUFDdEIsRUFBQyxDQUFDO0VBQ0osRUFBQyxDQUFDO0FBQ0osRUFBQyxDQUFDO0FBQ0YiLCJmaWxlIjoicm91dGVTcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgndHJhY2V1ci1zb3VyY2UtbWFwcycpLmluc3RhbGwocmVxdWlyZSgndHJhY2V1cicpKTsvKiBnbG9iYWwgZGVzY3JpYmUsIGl0LCBiZWZvcmUsIGJlZm9yZUVhY2gsIGFmdGVyLCBhZnRlckVhY2ggKi9cbi8qIGpzaGludCBleHByOiB0cnVlICovXG5jb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOVilcblxubGV0IHN1cGVyYWdlbnQgPSByZXF1aXJlKCdzdXBlcnRlc3QnKSxcbiAgICBfID0gcmVxdWlyZSgnbG9kYXNoJyksXG4gICAgYXBwID0gcmVxdWlyZSgnLi4vLi4vaW5kZXgnKSxcbiAgICBjaGFpID0gcmVxdWlyZSgnY2hhaScpLFxuICAgIHNpbm9uID0gcmVxdWlyZSgnc2lub24nKVxuXG5jaGFpLnNob3VsZCgpO1xuY2hhaS51c2UocmVxdWlyZSgnY2hhaS1kYXRldGltZScpKTtcblxuZnVuY3Rpb24gcmVxdWVzdCgpIHtcbiAgcmV0dXJuIHN1cGVyYWdlbnQoYXBwLnNlcnZlcik7XG59XG5cbmRlc2NyaWJlKCdSb3V0ZXMnLCAoKSA9PiB7XG4gIGJlZm9yZSgoKSA9PiB7XG4gICAgcmV0dXJuIGFwcC5pbml0aWFsaXplKClcbiAgfSlcblxuICBkZXNjcmliZSgnR0VUIC8nLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gMjAwJywgKGRvbmUpID0+IHtcbiAgICAgIHJlcXVlc3QoKVxuICAgICAgICAuZ2V0KCcvJylcbiAgICAgICAgLmV4cGVjdCgyMDAsIGRvbmUpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnR0VUIC90aHJlYWQnLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gYWxsIHRocmVhZHMnLCAoZG9uZSkgPT4ge1xuICAgICAgcmVxdWVzdCgpXG4gICAgICAgIC5nZXQoJy90aHJlYWQnKVxuICAgICAgICAuZXhwZWN0KCdDb250ZW50LVR5cGUnLCAvanNvbi8pXG4gICAgICAgIC5leHBlY3QoKHJlcykgPT4ge1xuICAgICAgICAgIGxldCB0aHJlYWRzID0gcmVzLmJvZHlcbiAgICAgICAgICBfLmVhY2godGhyZWFkcywgKHRocmVhZCkgPT4ge1xuICAgICAgICAgICAgdGhyZWFkLnNob3VsZC5oYXZlLmEucHJvcGVydHkoJ3RpdGxlJykuYW5kLnNob3VsZC5iZS5hLnN0cmluZztcbiAgICAgICAgICAgIHRocmVhZC5zaG91bGQuaGF2ZS5hLnByb3BlcnR5KCdhdXRob3InKTtcbiAgICAgICAgICAgIHRocmVhZC5zaG91bGQuaGF2ZS5hLnByb3BlcnR5KCdwb3N0ZGF0ZScpO1xuICAgICAgICAgICAgaXNOYU4oRGF0ZS5wYXJzZSh0aHJlYWQucG9zdGRhdGUpKS5zaG91bGQuYmUuZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAuZXhwZWN0KDIwMCwgZG9uZSk7XG4gICAgfSk7XG5cbiAgICBpdC5vbmx5KCdzcHknLCAoKSA9PiB7XG4gICAgICBsZXQgb2JqZWN0ID0geyBtZXRob2Q6ICgpID0+IHt9IH07XG4gICAgICBsZXQgc3B5ID0gc2lub24uc3B5KGZzLCAncmVhZEZpbGUnKTtcblxuICAgICAgLy8gc3B5LndpdGhBcmdzKDQyKTtcbiAgICAgIC8vIHNweS53aXRoQXJncygxKTtcblxuICAgICAgb2JqZWN0Lm1ldGhvZCg0Mik7XG4gICAgICBvYmplY3QubWV0aG9kKDQyKTtcbiAgICAgIG9iamVjdC5tZXRob2QoNDIpO1xuICAgICAgb2JqZWN0Lm1ldGhvZCg0Mik7XG4gICAgICBvYmplY3QubWV0aG9kKDQyKTtcbiAgICAgIG9iamVjdC5tZXRob2QoMSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdzcHkud2l0aEFyZ3MoMSkuY2FsbGVkT25jZTogJywgc3B5LndpdGhBcmdzKDEpLmNhbGxlZE9uY2UpXG5cbiAgICAgIHNweS5jYWxsQ291bnQuc2hvdWxkLmVxdWFsKDApXG4gICAgICBzcHkud2l0aEFyZ3MoMSkuY2FsbGVkT25jZS5zaG91bGQuYmUudHJ1ZVxuICAgIH0pXG4gIH0pO1xuICBkZXNjcmliZSgnR0VUIC90aHJlYWQvOnRpdGxlJywgKCkgPT4ge1xuICAgIC8vIGxldCBkYkNvbm5lY3Rpb247XG5cbiAgICBiZWZvcmUoKCkgPT4ge1xuICAgICAgLy8gU2V0dXAgeW91ciBEQiBjb25uZWN0aW9uXG4gICAgICAvLyBkYkNvbm5lY3Rpb24gPSBtb25nb29zZS5jb25uZWN0KC4uLilcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdiZWZvcmUnKTtcbiAgICB9KTtcbiAgICBiZWZvcmVFYWNoKCgpID0+IGNvbnNvbGUubG9nKCdiZWZvcmVFYWNoJykpO1xuICAgIGFmdGVyKCgpID0+IHtcbiAgICAgIC8vIGRiQ29ubmVjdGlvbi5jbG9zZShkb25lKVxuICAgICAgLy8gY29uc29sZS5sb2coJ2FmdGVyJyk7XG4gICAgfSk7XG4gICAgYWZ0ZXJFYWNoKCgpID0+IGNvbnNvbGUubG9nKCdhZnRlckVhY2gnKSk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBhIHRocmVhZCB3aXRoIHRoZSBnaXZlbiB0aXRsZScsIChkb25lKSA9PiB7XG4gICAgICByZXF1ZXN0KClcbiAgICAgICAgLmdldCgnL3RocmVhZC9IZWxsbycpXG4gICAgICAgIC5leHBlY3QoJ0NvbnRlbnQtVHlwZScsIC9qc29uLylcbiAgICAgICAgLmV4cGVjdCgocmVzKSA9PiB7XG4gICAgICAgICAgbGV0IHRocmVhZCA9IHJlcy5ib2R5O1xuXG4gICAgICAgICAgdGhyZWFkLnRocmVhZC5zaG91bGQuaGF2ZS5wcm9wZXJ0eSgndGl0bGUnKTtcbiAgICAgICAgICB0aHJlYWQudGhyZWFkLnNob3VsZC5oYXZlLnByb3BlcnR5KCdhdXRob3InKTtcbiAgICAgICAgICB0aHJlYWQudGhyZWFkLnNob3VsZC5oYXZlLnByb3BlcnR5KCd0aXRsZScpO1xuXG4gICAgICAgICAgXy5lYWNoKHRocmVhZC5wb3N0cywgKHBvc3QpID0+IHtcbiAgICAgICAgICAgIHBvc3QudGhyZWFkLnNob3VsZC5lcWwodGhyZWFkLnRocmVhZC5faWQpO1xuICAgICAgICAgICAgcG9zdC5zaG91bGQuaGF2ZS5wcm9wZXJ0eSgncG9zdCcpO1xuICAgICAgICAgICAgcG9zdC5zaG91bGQuaGF2ZS5wcm9wZXJ0eSgnYXV0aG9yJyk7XG4gICAgICAgICAgICBwb3N0LnNob3VsZC5oYXZlLnByb3BlcnR5KCdkYXRlJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5leHBlY3QoMjAwLCBkb25lKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==