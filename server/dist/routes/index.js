"use strict";
require('traceur-source-maps').install(require('traceur'));
var controllers = require('../controllers/'),
    auth = require('../middlewares/auth-mongo'),
    mustbe = require('../lib/mustbe').routeHelpers();
module.exports = function(router) {
  router.all('/', controllers.index);
  router.all('/error', controllers.error);
  router.get('/thread/:title', controllers.base.show);
  router.get('/thread', controllers.base.list);
  router.get('/post/:id', controllers.base.getPost);
  router.get('/authorized', auth, controllers.authorized);
  router.post('/post', auth, mustbe.authorized('post', controllers.base.post));
  router.post('/thread', auth, mustbe.authorized('post', controllers.base.thread));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9pbmRleC5lczYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNLEFBQUMsQ0FBQyxxQkFBb0IsQ0FBQyxRQUFRLEFBQUMsQ0FBQyxPQUFNLEFBQUMsQ0FBQyxTQUFRLENBQUMsQ0FBQyxDQUFDO0VBQUssQ0FBQSxXQUFVLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxpQkFBZ0IsQ0FBQztBQUNsRyxPQUFHLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQywyQkFBMEIsQ0FBQztBQUMxQyxTQUFLLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxlQUFjLENBQUMsYUFBYSxBQUFDLEVBQUM7QUFFbkQsS0FBSyxRQUFRLEVBQUksVUFBUyxNQUFLLENBQUc7QUFDaEMsT0FBSyxJQUFJLEFBQUMsQ0FBQyxHQUFFLENBQUcsQ0FBQSxXQUFVLE1BQU0sQ0FBQyxDQUFBO0FBQ2pDLE9BQUssSUFBSSxBQUFDLENBQUMsUUFBTyxDQUFHLENBQUEsV0FBVSxNQUFNLENBQUMsQ0FBQTtBQUV0QyxPQUFLLElBQUksQUFBQyxDQUFDLGdCQUFlLENBQUcsQ0FBQSxXQUFVLEtBQUssS0FBSyxDQUFDLENBQUE7QUFDbEQsT0FBSyxJQUFJLEFBQUMsQ0FBQyxTQUFRLENBQUcsQ0FBQSxXQUFVLEtBQUssS0FBSyxDQUFDLENBQUE7QUFDM0MsT0FBSyxJQUFJLEFBQUMsQ0FBQyxXQUFVLENBQUcsQ0FBQSxXQUFVLEtBQUssUUFBUSxDQUFDLENBQUE7QUFDaEQsT0FBSyxJQUFJLEFBQUMsQ0FBQyxhQUFZLENBQUcsS0FBRyxDQUFHLENBQUEsV0FBVSxXQUFXLENBQUMsQ0FBQTtBQUV0RCxPQUFLLEtBQUssQUFBQyxDQUFDLE9BQU0sQ0FBRyxLQUFHLENBQUcsQ0FBQSxNQUFLLFdBQVcsQUFBQyxDQUFDLE1BQUssQ0FBRyxDQUFBLFdBQVUsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFBO0FBQzNFLE9BQUssS0FBSyxBQUFDLENBQUMsU0FBUSxDQUFHLEtBQUcsQ0FBRyxDQUFBLE1BQUssV0FBVyxBQUFDLENBQUMsTUFBSyxDQUFHLENBQUEsV0FBVSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUE7QUFDakYsQ0FBQTtBQUNBIiwiZmlsZSI6InJvdXRlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIuLiIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ3RyYWNldXItc291cmNlLW1hcHMnKS5pbnN0YWxsKHJlcXVpcmUoJ3RyYWNldXInKSk7bGV0IGNvbnRyb2xsZXJzID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMvJyksXG4gICAgYXV0aCA9IHJlcXVpcmUoJy4uL21pZGRsZXdhcmVzL2F1dGgtbW9uZ28nKSxcbiAgICBtdXN0YmUgPSByZXF1aXJlKCcuLi9saWIvbXVzdGJlJykucm91dGVIZWxwZXJzKClcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihyb3V0ZXIpIHtcbiAgcm91dGVyLmFsbCgnLycsIGNvbnRyb2xsZXJzLmluZGV4KVxuICByb3V0ZXIuYWxsKCcvZXJyb3InLCBjb250cm9sbGVycy5lcnJvcilcblxuICByb3V0ZXIuZ2V0KCcvdGhyZWFkLzp0aXRsZScsIGNvbnRyb2xsZXJzLmJhc2Uuc2hvdylcbiAgcm91dGVyLmdldCgnL3RocmVhZCcsIGNvbnRyb2xsZXJzLmJhc2UubGlzdClcbiAgcm91dGVyLmdldCgnL3Bvc3QvOmlkJywgY29udHJvbGxlcnMuYmFzZS5nZXRQb3N0KVxuICByb3V0ZXIuZ2V0KCcvYXV0aG9yaXplZCcsIGF1dGgsIGNvbnRyb2xsZXJzLmF1dGhvcml6ZWQpXG5cbiAgcm91dGVyLnBvc3QoJy9wb3N0JywgYXV0aCwgbXVzdGJlLmF1dGhvcml6ZWQoJ3Bvc3QnLCBjb250cm9sbGVycy5iYXNlLnBvc3QpKVxuICByb3V0ZXIucG9zdCgnL3RocmVhZCcsIGF1dGgsIG11c3RiZS5hdXRob3JpemVkKCdwb3N0JywgY29udHJvbGxlcnMuYmFzZS50aHJlYWQpKVxufVxuIl19