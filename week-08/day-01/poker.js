'use strict';

const values = [ '2', '3', '4', '5', '6', '7', '8', '9', 't', 'j', 'd', 'k', 'a' ];
const colours = [ 'h', 's', 'd', 'c' ];

function addTwoNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}

function isValid( card ) {
  if ( values.indexOf( card.charAt( 0 ).toLowerCase() ) !== -1 && colours.indexOf( card.charAt( 1 ).toLowerCase() ) !== -1 ) {
    return true;
  }
}

function isPair( card1, card2 ) {
  if ( isValid( card1 ) && isValid( card2 ) ) {
    if ( card1.charAt( 0 ) === card2.charAt( 0 ) ) {
      return true;
    } else {
      return false;
    }
  }
}

function isDrill () {

}

function isFullHouse 


module.exports = {
  addTwoNumbers,
  isValid,
  isPair
}

