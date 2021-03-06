angular.module('evoApp').controller('RegisterController', ['$http', '$location', function($http, $location){
  var vm = this;

  vm.username = '';
  vm.password = '';

  vm.register = function(){
    var sendData = {};

    sendData.username = vm.username;
    sendData.password = vm.password;
    console.log('sendData', sendData);

    $http.post('/register', sendData).then(handleSuccess, handleFailure);
  }

  function handleSuccess(response){
    console.log('Registration Success', response);
  }

  function handleFailure(response){
    console.log('Error Registering', response);
  }
}]);
