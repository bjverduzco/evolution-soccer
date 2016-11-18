angular.module('evoApp').controller('MainController', ['$http', 'session', '$location', '$scope', function($http, session, $location, $scope){
  var vm = this;

  $scope.$on('$routeChangeStart', function(angularEvent, newUrl){
    if(newUrl.requireAuth && !session.user){
      console.log('user failed to be authenticated and rerouting to login page.');
      //user isnt authenticated
      $location.path('/login');
    }
  });

}]);
