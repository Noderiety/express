"use strict";
require('traceur-source-maps').install(require('traceur'));
module.exports = (function(config) {
  config.routeHelpers((function(rh) {
    rh.getUser((function(req, cb) {
      return cb(null, req.user);
    }));
    rh.notAuthorized((function(req, res, next) {
      res.redirect('/login');
    }));
    rh.notAuthenticated((function(req, res, next) {
      res.redirect('/denied');
    }));
  }));
  config.activities((function(activities) {
    activities.can('post', (function(identity, params, callback) {
      callback(null, true);
    }));
  }));
  config.userIdentity((function(id) {
    id.isAuthenticated((function(user, cb) {
      cb(null, true);
    }));
  }));
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9tdXN0YmUtY29uZmlnLmVzNi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU0sQUFBQyxDQUFDLHFCQUFvQixDQUFDLFFBQVEsQUFBQyxDQUFDLE9BQU0sQUFBQyxDQUFDLFNBQVEsQ0FBQyxDQUFDLENBQUM7QUFBQyxLQUFLLFFBQVEsSUFBSSxTQUFDLE1BQUs7QUFDaEYsT0FBSyxhQUFhLEFBQUMsRUFBQyxTQUFDLEVBQUM7QUFFcEIsS0FBQyxRQUFRLEFBQUMsRUFBQyxTQUFDLEdBQUUsQ0FBRyxDQUFBLEVBQUM7V0FBTSxDQUFBLEVBQUMsQUFBQyxDQUFDLElBQUcsQ0FBRyxDQUFBLEdBQUUsS0FBSyxDQUFDO0lBQUEsRUFBQyxDQUFBO0FBRzFDLEtBQUMsY0FBYyxBQUFDLEVBQUMsU0FBQyxHQUFFLENBQUcsQ0FBQSxHQUFFLENBQUcsQ0FBQSxJQUFHLENBQU07QUFDbkMsUUFBRSxTQUFTLEFBQUMsQ0FBQyxRQUFPLENBQUMsQ0FBQTtJQUN2QixFQUFDLENBQUE7QUFFRCxLQUFDLGlCQUFpQixBQUFDLEVBQUMsU0FBQyxHQUFFLENBQUcsQ0FBQSxHQUFFLENBQUcsQ0FBQSxJQUFHLENBQU07QUFDdEMsUUFBRSxTQUFTLEFBQUMsQ0FBQyxTQUFRLENBQUMsQ0FBQTtJQUN4QixFQUFDLENBQUE7RUFDSCxFQUFDLENBQUE7QUFFRCxPQUFLLFdBQVcsQUFBQyxFQUFDLFNBQUMsVUFBUztBQUUxQixhQUFTLElBQUksQUFBQyxDQUFDLE1BQUssR0FBRyxTQUFDLFFBQU8sQ0FBRyxDQUFBLE1BQUssQ0FBRyxDQUFBLFFBQU8sQ0FBTTtBQUVyRCxhQUFPLEFBQUMsQ0FBQyxJQUFHLENBQUcsS0FBRyxDQUFDLENBQUE7SUFDckIsRUFBQyxDQUFBO0VBQ0gsRUFBQyxDQUFBO0FBRUQsT0FBSyxhQUFhLEFBQUMsRUFBQyxTQUFDLEVBQUM7QUFFcEIsS0FBQyxnQkFBZ0IsQUFBQyxFQUFDLFNBQUMsSUFBRyxDQUFHLENBQUEsRUFBQyxDQUFNO0FBRS9CLE9BQUMsQUFBQyxDQUFDLElBQUcsQ0FBRyxLQUFHLENBQUMsQ0FBQTtJQUNmLEVBQUMsQ0FBQTtFQUNILEVBQUMsQ0FBQTtBQUNILENBQUEsQ0FBQTtBQUFBIiwiZmlsZSI6ImxpYi9tdXN0YmUtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgndHJhY2V1ci1zb3VyY2UtbWFwcycpLmluc3RhbGwocmVxdWlyZSgndHJhY2V1cicpKTttb2R1bGUuZXhwb3J0cyA9IChjb25maWcpID0+IHtcbiAgY29uZmlnLnJvdXRlSGVscGVycygocmgpID0+IHtcbiAgICAvLyBnZXQgdGhlIGN1cnJlbnQgdXNlciBmcm9tIHRoZSByZXF1ZXN0IG9iamVjdFxuICAgIHJoLmdldFVzZXIoKHJlcSwgY2IpID0+IGNiKG51bGwsIHJlcS51c2VyKSlcblxuICAgIC8vIHdoYXQgZG8gd2UgZG8gd2hlbiB0aGUgdXNlciBpcyBub3QgYXV0aG9yaXplZD9cbiAgICByaC5ub3RBdXRob3JpemVkKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgcmVzLnJlZGlyZWN0KCcvbG9naW4nKVxuICAgIH0pXG5cbiAgICByaC5ub3RBdXRoZW50aWNhdGVkKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgcmVzLnJlZGlyZWN0KCcvZGVuaWVkJylcbiAgICB9KVxuICB9KVxuXG4gIGNvbmZpZy5hY3Rpdml0aWVzKChhY3Rpdml0aWVzKSA9PiB7XG4gICAgLy8gY29uZmlndXJlIGFuIGFjdGl2aXR5IHdpdGggYW4gYXV0aG9yaXphdGlvbiBjaGVja1xuICAgIGFjdGl2aXRpZXMuY2FuKCdwb3N0JywgKGlkZW50aXR5LCBwYXJhbXMsIGNhbGxiYWNrKSA9PiB7XG4gICAgICAvLyBUT0RPOiBDaGVjayBpZiB1c2VyIGlzIGF1dGhvclxuICAgICAgY2FsbGJhY2sobnVsbCwgdHJ1ZSlcbiAgICB9KVxuICB9KVxuXG4gIGNvbmZpZy51c2VySWRlbnRpdHkoKGlkKSA9PiB7XG4gICAgLy8gZGV0ZXJtaW5lIGlmIHRoaXMgdXNlciBpcyBhdXRoZW50aWNhdGVkIG9yIG5vdFxuICAgIGlkLmlzQXV0aGVudGljYXRlZCgodXNlciwgY2IpID0+IHtcbiAgICAgIC8vIHVzZXIgc3VwcGxpZWQgYnkgcm91dGVIZWxwZXJzLmdldFVzZXJcbiAgICAgIGNiKG51bGwsIHRydWUpXG4gICAgfSlcbiAgfSlcbn0iXX0=