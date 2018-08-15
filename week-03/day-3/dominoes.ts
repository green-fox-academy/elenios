import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(7, 1));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(6, 7));
  return dominoes;
}

function print(dominoes: Domino[]) {
  let orderedDominoes = [];
  orderedDominoes.push(dominoes[0])
  dominoes.forEach(function (value) {
    dominoes.forEach(function (value2) {
      orderedDominoes.forEach(function (value3) {
      if (value3.values[1] == value2.values[0] && orderedDominoes.indexOf(value2) == -1) {
        orderedDominoes.push(value2);
      }
    });
    });
  });
  console.log(orderedDominoes);
}

/*
function print(dominoes: Domino[]) {
  let orderedDominoes = [];
  orderedDominoes.push(dominoes[0])
  for (let i = 0; i < dominoes.length; i++) {
    for (let j = 0; j < dominoes.length; j++) {
    if (orderedDominoes[i].values[1] == dominoes[j].values[0] && orderedDominoes.indexOf(dominoes[j]) == -1) {
      orderedDominoes.push(dominoes[j])
    }
  }
}
  console.log(orderedDominoes);
}
*/

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

print(dominoes);


