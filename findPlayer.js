const gameResults = [
  { winner: 'Alice', loser: 'Bob', loserPoints: 3 },
  { winner: 'Carol', loser: 'Dean', loserPoints: 1 },
  { winner: 'Elise', loser: 'Bob', loserPoints: 2 },
  { winner: 'Elise', loser: 'Carol', loserPoints: 4 },
  { winner: 'Alice', loser: 'Carol', loserPoints: 2 },
  { winner: 'Carol', loser: 'Dean', loserPoints: 3 },
  { winner: 'Dean', loser: 'Elise', loserPoints: 2 },
];
//? Question Part 1 : Write a function that returns a list of all the player names (no player should be listed more than once).
//input : array
// output : array -> unique players name among winners and losers >>
// ['Alice', 'Bob', 'Carol', 'Dean', 'Elise']

//!First method
const findPlayer1 = (players) => {
  let result = [];
  for (let game of players) {
    if (!result.includes(game['winner'])) {
      result.push(game['winner']);
    }
    if (!result.includes(game['loser'])) {
      result.push(game['loser']);
    }
  }
  return result;
};
console.log(findPlayer1(gameResults));

//! Second method
const findPlayer2 = (players) => {
  let result = new Set();
  for (let game of players) {
    result.add(game['winner']);
    result.add(game['loser']);
  }
  return result;
};

console.log(findPlayer2(gameResults));

//? Question: Part 2 :  write a function that produces a data structure like the following, which lists each participant, and a list of who they've beaten.
//Input : array
//Output : object >>>
// {
//   'Alice': ['Bob', 'Carol'],
//   'Bob':   [],
//   'Carol': ['Dean'],
//   'Dean':  ['Elise'],
//   'Elise': ['Bob', 'Carol'],
// }

const opponentObj = (players) => {
  const result = {};

  for (let game of players) {
    if (!result[game['winner']]) {
      result[game['winner']] = [game['loser']];
    } else {
      if (!result[game['winner']].includes(game['loser'])) {
        result[game['winner']].push(game['loser']);
      }
    }
    if (!result[game['loser']]) {
      result[game['loser']] = [];
    }
  }
  return result;
};
console.log(opponentObj(gameResults));
