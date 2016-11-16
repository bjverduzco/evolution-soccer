angular.module('evoApp').factory('UserService', ['$http', function($http, UserService){
  var vm = this;

  function login(data){
    // console.log(data);

    return $http.post('/login', data).then(function(response){
      vm.userData.user = response.data;
      vm.userData.isAuthe
      console.log('user data', vm.userData.user);
    }, function(err){
      console.log('Error in userservice.login', err);
    });
  };

  return {
    login: login
  };
}]);
