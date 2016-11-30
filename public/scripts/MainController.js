angular.module('evoApp').controller('MainController', ['$http', '$location', '$scope', function($http, $location, $scope){
  var vm = this;

  // 'session', session,
  // $scope.$on('$routeChangeStart', function(angularEvent, newUrl){
  //   if(newUrl.requireAuth && !session.user){
  //     console.log('user failed to be authenticated and rerouting to login page.');
  //     //user isnt authenticated
  //     $location.path('/login');
  //   }
  // });
  vm.admin = function(){
    $http.get('/login').then(function(response){
      console.log('Routing to admin login', response);
      $location.path('/login');
    }, function(err){
      console.log('err routing to /login', err);
    });
  }

  vm.standings = function(){
    $http.get('/standings').then(function(response){
      console.log('routing to standings', response);
      $location.path('/standings');
    }, function(err){
      console.log('err routing to standings', err);
    });
  }

  vm.schedule = function(){
    $http.get('/schedule').then(function(response){
      console.log('routing to /schedule', response);
      $location.path('/schedule');
    }, function(err){
      console.log('error routing to /schedule', err);
    }); 
  }

}]);
