angular.module('evoApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'views/login.html',
    controller: 'LoginController',
    controllerAs: 'login'
  })
  .when('/admin', {
    templateUrl: 'views/admin.html',
    requireAuth: true
  });

  $locationProvider.html5Mode(true);
}]);
