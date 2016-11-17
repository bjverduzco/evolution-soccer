angular.module('evoApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'views/login.html',
    controller: 'LoginController',
    controllerAs: 'login'
  })
  .when('/register', {
    templateUrl: 'views/register.html',
    controller: 'RegisterController',
    controllerAs: 'register'
  })
  .when('/admin', {
    templateUrl: 'views/admin.html',
    requireAuth: true
  });

  $locationProvider.html5Mode(true);
}]);
