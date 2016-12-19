angular.module('starter.services', [])

.factory('BetService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var bets = [{
    id: 0,
    date: '01/01/2016',
    pays: 'France',
    competition: 'Ligue 1',
    domicile:'Marseille',
    visiteur:'Paris Saint Germain',
    typeBet:'DrawBet',
    score:'1:0',
    mise:6.5,
    bookmaker:'PMU'
  }, {
    id: 1,
    date: '01/01/2016',
    pays: 'France',
    competition: 'Ligue 1',
    domicile:'Marseille',
    visiteur:'Paris Saint Germain',
    typeBet:'DrawBet',
    score:'1:0',
    mise:6.5,
    bookmaker:'PMU'
  }, {
    id: 3,
    date: '01/01/2016',
    pays: 'France',
    competition: 'Ligue 1',
    domicile:'Marseille',
    visiteur:'Paris Saint Germain',
    typeBet:'DrawBet',
    score:'1:0',
    mise:6.5,
    bookmaker:'PMU'
  }, {
    id: 4,
    date: '01/01/2016',
    pays: 'France',
    competition: 'Ligue 1',
    domicile:'Marseille',
    visiteur:'Paris Saint Germain',
    type:'DrawBet',
    score:'1:0',
    mise:6.5,
    bookmaker:'PMU'
  }, {
    id: 0,
    date: '01/01/2016',
    pays: 'France',
    competition: 'Ligue 1',
    domicile:'Marseille',
    visiteur:'Paris Saint Germain',
    typeBet:'DrawBet',
    score:'1:0',
    mise:6.5,
    bookmaker:'PMU'
  }];

  return {
    all: function() {
      return bets;
    },
    remove: function(bet) {
      bets.splice(bets.indexOf(bet), 1);
    },
    get: function(betId) {
      for (var i = 0; i < bets.length; i++) {
        if (bets[i].id === parseInt(betId)) {
          return bets[i];
        }
      }
      return null;
    }
  };
});
