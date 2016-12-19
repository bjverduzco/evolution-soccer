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
      auth: function(UserService, $location){
        if(UserService.userData.isAuthenticated == true){
          console.log('User is authenticated. Continue on.');
        }
        else{
          redirectTo: '/';
          alert('You don\'t have access.');
        }
      }
    }
  })
  .when('/adminStandings', {
    templateUrl: 'views/adminStandings',
    controller: 'AdminController',
    controllerAs: 'admin',
    resolve: {
      auth: function(UserService, $lcoation){
        if(UserService.userData.isAuthenticated == true){
          console.log('User is authenticated. Move along.');
        }
        else {
          redirectTo: ''
        }
      }
    }
  });

  $locationProvider.html5Mode(true);
}]);
