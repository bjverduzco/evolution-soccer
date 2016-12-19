var router = require('express').Router();
var path = require('path');

router.get('/adminSchedule', function(request, response){
  console.log('routing to admin schedule');
  response.sendFile(path.join(__dirname, '../public/views/adminSchedule.html'));
});

router.get('/adminStandings', function(request, response){
  console.log('routing to admin standings');
  response.sendFile(path.join(__dirname, '../public/views/AdminStandings.html'));
});

module.exports = router;
