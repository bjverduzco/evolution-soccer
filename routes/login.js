var router = require('express').Router();
var passport = require('passport');
var path = require('path');

router.get('/', function(request, response){
  response.sendFile(reqeust.isAuthenticated());
});

router.post('/', passport.authenticate('local', function(request, response){
  var sendData = {};

  sendData.username = request.user.username;
  sendData.id = request.user.id;
  response.send(sendData);
}));

module.exports = router;
