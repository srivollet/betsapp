angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
//Controler de la page dashboard


})

.controller('BetCtrl', function($scope, BetService) {
//Controler de la page des paris

  $scope.bets = BetService.all();
  $scope.remove = function(bet) {
    BetService.remove(bet);
  };
})

.controller('BetDetailCtrl', function($scope, $stateParams, BetService) {
//Controler de la page de détail du pari sportif

  $scope.bet = BetService.get($stateParams.betId);
})

.controller('ToolsCtrl', function($scope) {
  
  $scope.settings = {
    enableFriends: true
  };
});
