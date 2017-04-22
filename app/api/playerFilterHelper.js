// A little js file to help me produce a filtered rankedPlayers JSON file

var fs = require('fs');
var path = require('path');
var rankings = require('./rankings');
var players = require('./players');

var rankedPlayers = [];
var fileDestination = path.join(__dirname, 'rankedPlayers.js');

rankings.players.forEach((ranked) => {
  players.players.forEach((player) => {
    if (ranked.id === player.id && ranked.rank <= 100) {
      rankedPlayers.push(Object.assign({}, ranked, player));
    }
  })
});

fs.writeFile(fileDestination, JSON.stringify(rankedPlayers), (err) => {
  console.log('File created');
});
