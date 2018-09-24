'use strict';

function addTwoNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function isValid(card) {
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', 't', 'j', 'd', 'k', 'a'];
  const colours = ['h', 's', 'd', 'c'];

  if (values.indexOf(card.charAt(0).toLowerCase()) !== -1 && colours.indexOf(card.charAt(1).toLowerCase()) !== -1) {
    return true;
  }
}

function isPair(card1, card2) {
  
}

module.exports = {
  addTwoNumbers,
  isValid
}
