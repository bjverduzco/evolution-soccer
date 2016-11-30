var router = require('express').Router();
var passport = require('passport');
var path = require('path');

router.get('/', function(request, response){
  console.log('routing to login page');
  response.sendFile(path.join(__dirname, '../public/views/login.html'));
});
// how to change this
router.get('/login', function(request, response){
  console.log('is authenticated?');
  response.send(request.isAuthenticated());
});

router.post('/', passport.authenticate('local'), function(request, response){
  var sendData = {};
  // console.log('what is this value???', request);
  sendData.username = request.user.username;
  sendData.id = request.user.id;
  response.send(sendData);
});

module.exports = router;
