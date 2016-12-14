angular.module('evoApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'views/schedule.html',
    controller: 'ScheduleController',
    controllerAs: 'schedule'
  })
  .when('/login', {
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
    resolve: {
      auth: function(UserService){
        if(UserService.userData.isAuthenticated == true){
          break;
        }
        else{
          redirectTo: '/';
        }
      }
    }
  });

  $locationProvider.html5Mode(true);
}]);
