angular.module('evoApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'views/login.html',
    controller: 'LoginController',
    controllerAs: 'login'
  });

  $locationProvider.html5Mode(true);
}]);
