var router = require('express').Router();
var path = require('path');
var passport = require('passport');
var Users = require('../models/user');

router.get('/', function(request, response){
  response.sendFile(path.join(__dirname, '../public/views/register.html'));
});

router.post('/', function(request, response, next){

  Users.create(request.body.username, request.body.password, function(err, post){
    if(err){
      console.log('error creating user', err);
      next(err);
    }
    else{
      console.log('redirecting to splash page');

      response.redirect('/');
    }
  });
});

module.exports = router;
