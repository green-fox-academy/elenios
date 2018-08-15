import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

function print(dominoes: Domino[]) {
  let orderedDominoes = [];
  dominoes.forEach(function (value) {
    dominoes.forEach(function (value2) {
      if (value.values[1] == value2.values[0] && orderedDominoes.indexOf(value) == -1 && orderedDominoes.indexOf(value2) == -1) {
        orderedDominoes.push(value);
        orderedDominoes.push(value2);
      }
    });
  });
  console.log(orderedDominoes);
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

print(dominoes);


