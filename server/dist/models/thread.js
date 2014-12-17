"use strict";
require('traceur-source-maps').install(require('traceur'));
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    threadSchema;
threadSchema = new Schema({
  title: String,
  postdate: {
    type: Date,
    default: Date.now
  },
  author: {
    type: String,
    default: 'Anon'
  }
});
module.exports = mongoose.model('Thread', threadSchema);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy90aHJlYWQuZXM2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTSxBQUFDLENBQUMscUJBQW9CLENBQUMsUUFBUSxBQUFDLENBQUMsT0FBTSxBQUFDLENBQUMsU0FBUSxDQUFDLENBQUMsQ0FBQztFQUV0RCxDQUFBLFFBQU8sRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLFVBQVMsQ0FBQztBQUM3QixTQUFLLEVBQUksQ0FBQSxRQUFPLE9BQU87QUFDdkIsZUFBVztBQUVmLFdBQVcsRUFBSSxJQUFJLE9BQUssQUFBQyxDQUFDO0FBQ3RCLE1BQUksQ0FBSSxPQUFLO0FBQ2IsU0FBTyxDQUFHO0FBQUMsT0FBRyxDQUFHLEtBQUc7QUFBRyxVQUFNLENBQUcsQ0FBQSxJQUFHLElBQUk7QUFBQSxFQUFDO0FBQ3hDLE9BQUssQ0FBRztBQUFDLE9BQUcsQ0FBRyxPQUFLO0FBQUcsVUFBTSxDQUFHLE9BQUs7QUFBQSxFQUFDO0FBQUEsQUFDMUMsQ0FBQyxDQUFDO0FBRUYsS0FBSyxRQUFRLEVBQUksQ0FBQSxRQUFPLE1BQU0sQUFBQyxDQUFDLFFBQU8sQ0FBRyxhQUFXLENBQUMsQ0FBQztBQUN2RCIsImZpbGUiOiJtb2RlbHMvdGhyZWFkLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgndHJhY2V1ci1zb3VyY2UtbWFwcycpLmluc3RhbGwocmVxdWlyZSgndHJhY2V1cicpKTsvLyBUaGUgVGhyZWFkIG1vZGVsXG5cbmxldCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyksXG4gICAgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hLFxuICAgIHRocmVhZFNjaGVtYTtcblxudGhyZWFkU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gICAgdGl0bGU6ICBTdHJpbmcsXG4gICAgcG9zdGRhdGU6IHt0eXBlOiBEYXRlLCBkZWZhdWx0OiBEYXRlLm5vd30sXG4gICAgYXV0aG9yOiB7dHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnQW5vbid9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbCgnVGhyZWFkJywgdGhyZWFkU2NoZW1hKTtcbiJdfQ==