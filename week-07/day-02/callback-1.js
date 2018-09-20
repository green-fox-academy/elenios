'use strict';

const mapWith = (array, callback) => {
  let output = [];
  array.forEach(element => {
    output.push(callback(element));
  });
  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.

  return output;
}

const addOne = (number) => {
  return number + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

const removeSecondLetter = (word) => {
  let newLetters = [];
  let letters = word.split('').forEach(letter => {
    if (word.indexOf(letter) % 2 === 0) {
      newLetters.push(letter);
    }
  });
  return newLetters.join('');
}

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']