angular.module('evoApp').factory('TeamService', ['$http', function($http, TeamService){
  var vm = this;

  vm.teams = [{name: 'bleh', points: '5', goals_for: '10', goals_against: '5'}, {name: 'stuff', points: '5', goals_for: '8', goals_against: '5'}, {name: 'idk', points: '3', goals_for: '5', goals_against: '10'}];

  return = {

  };
}]);
