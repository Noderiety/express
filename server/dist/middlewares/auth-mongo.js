"use strict";
require('traceur-source-maps').install(require('traceur'));
var authMongo = require('../lib/auth-mongo'),
    basicAuth = require('basic-auth-connect');
module.exports = basicAuth(authMongo);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmVzL2F1dGgtbW9uZ28uZXM2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTSxBQUFDLENBQUMscUJBQW9CLENBQUMsUUFBUSxBQUFDLENBQUMsT0FBTSxBQUFDLENBQUMsU0FBUSxDQUFDLENBQUMsQ0FBQztFQUFLLENBQUEsU0FBUSxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsbUJBQWtCLENBQUM7QUFDbEcsWUFBUSxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsb0JBQW1CLENBQUM7QUFFNUMsS0FBSyxRQUFRLEVBQUksQ0FBQSxTQUFRLEFBQUMsQ0FBQyxTQUFRLENBQUMsQ0FBQTtBQUFBIiwiZmlsZSI6Im1pZGRsZXdhcmVzL2F1dGgtbW9uZ28uanMiLCJzb3VyY2VSb290IjoiLi4iLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCd0cmFjZXVyLXNvdXJjZS1tYXBzJykuaW5zdGFsbChyZXF1aXJlKCd0cmFjZXVyJykpO2xldCBhdXRoTW9uZ28gPSByZXF1aXJlKCcuLi9saWIvYXV0aC1tb25nbycpLFxuICAgIGJhc2ljQXV0aCA9IHJlcXVpcmUoJ2Jhc2ljLWF1dGgtY29ubmVjdCcpXG5cbm1vZHVsZS5leHBvcnRzID0gYmFzaWNBdXRoKGF1dGhNb25nbykiXX0=