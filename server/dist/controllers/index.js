"use strict";
require('traceur-source-maps').install(require('traceur'));
var controllers = require('require-directory')(module);
controllers.index = (function(req, res) {
  res.render('index', {title: 'express-simple'});
});
controllers.error = (function(req, res) {
  process.nextTick((function() {
    throw new Error('fail');
  }));
});
module.exports = controllers;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2luZGV4LmVzNi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU0sQUFBQyxDQUFDLHFCQUFvQixDQUFDLFFBQVEsQUFBQyxDQUFDLE9BQU0sQUFBQyxDQUFDLFNBQVEsQ0FBQyxDQUFDLENBQUM7RUFBSyxDQUFBLFdBQVUsRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLG1CQUFrQixDQUFDLEFBQUMsQ0FBQyxNQUFLLENBQUM7QUFFaEgsVUFBVSxNQUFNLElBQUksU0FBQyxHQUFFLENBQUcsQ0FBQSxHQUFFLENBQU07QUFDaEMsSUFBRSxPQUFPLEFBQUMsQ0FBQyxPQUFNLENBQUcsRUFDbEIsS0FBSSxDQUFHLGlCQUFlLENBQ3hCLENBQUMsQ0FBQztBQUNKLENBQUEsQ0FBQztBQUVELFVBQVUsTUFBTSxJQUFJLFNBQUMsR0FBRSxDQUFHLENBQUEsR0FBRTtBQUMzQixRQUFNLFNBQVMsQUFBQyxFQUFDLFNBQUEsQUFBQyxDQUFLO0FBQUMsUUFBTSxJQUFJLE1BQUksQUFBQyxDQUFDLE1BQUssQ0FBQyxDQUFBO0VBQUMsRUFBQyxDQUFBO0FBQ2pELENBQUEsQ0FBQztBQUVELEtBQUssUUFBUSxFQUFJLFlBQVUsQ0FBQztBQUM1QiIsImZpbGUiOiJjb250cm9sbGVycy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIuLiIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ3RyYWNldXItc291cmNlLW1hcHMnKS5pbnN0YWxsKHJlcXVpcmUoJ3RyYWNldXInKSk7bGV0IGNvbnRyb2xsZXJzID0gcmVxdWlyZSgncmVxdWlyZS1kaXJlY3RvcnknKShtb2R1bGUpO1xuXG5jb250cm9sbGVycy5pbmRleCA9IChyZXEsIHJlcykgPT4ge1xuICByZXMucmVuZGVyKCdpbmRleCcsIHtcbiAgICB0aXRsZTogJ2V4cHJlc3Mtc2ltcGxlJ1xuICB9KTtcbn07XG5cbmNvbnRyb2xsZXJzLmVycm9yID0gKHJlcSwgcmVzKSA9PiB7XG5cdHByb2Nlc3MubmV4dFRpY2soKCkgPT4ge3Rocm93IG5ldyBFcnJvcignZmFpbCcpfSlcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29udHJvbGxlcnM7XG4iXX0=