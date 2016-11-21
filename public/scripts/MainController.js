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

}]);
