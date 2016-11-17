angular.module('evoApp').controller('LoginController', ['$http', '$location', function($http, $location){
  var vm = this;

  vm.username = '';
  vm.password = '';

  vm.login = function(){
    var sendData = {};

    sendData.username = vm.username;
    sendData.password = vm.password;

    UserService.login(sendData).then(handleSuccess, handleFailure);
  }

  function handleSuccess(response){
    console.log('Successfully Logged in');
    $location.path('/admin');
  }

  function handleFailure(response){
    console.log('Failure Logging in', resposne);
  }

  vm.register = function(){
    $http.get('/register').then(function(response){
      console.log('Success loading registration page', response);
      $location.path('/register');
    }, function(err){
      console.log('Error loading registration page', err);
    });
  }
}]);
