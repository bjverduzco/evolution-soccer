angular.module('evoApp').controller('StandingsController', ['$http', '$location', 'TeamService', function($http, $location, TeamService){
  var vm = this;

  vm.teams = TeamService.teams;

  console.log('these are the teams', vm.teams);

}]);
