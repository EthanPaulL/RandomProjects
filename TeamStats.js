// PRACTICE WITH ARRAYS, OBJECTS, FUNCTIONS, GETTER
// PRACTICE WITH ARRAYS, OBJECTS, FUNCTIONS, GETTER
// PRACTICE WITH ARRAYS, OBJECTS, FUNCTIONS, GETTER

//Purpose: to track a teams players, games, and points of each game. Also a function to add players and games

const team = {
    _players: [
      {firstName: 'michael', lastName: 'Jordan', age: 44},
      {firstName: 'kobe', lastName: 'Bryant', age: 23},
      {firstName: 'lebron', lastName: 'James', age: 35}
    ],
    _games: [
      {opponent: 'rockets', teamPoints: '2', opponentPoints: 1},
      {opponent: 'celtics', teamPoints: '1', opponentPoints: 2},
      {opponent: 'mavericks', teamPoints: '3', opponentPoints: 3}
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
      };
      this.games.push(game);
    }
  }
  
  console.log(team.players);


