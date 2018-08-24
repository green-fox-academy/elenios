'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"
let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
let listOfNumbers2: number[] = [2, 4, 6, 8, 10, 11, 14, 16];

function checkNums(array) {
    if (array.indexOf(4) != -1 && array.indexOf(8) != -1 && array.indexOf(12) != -1 && array.indexOf(16) != -1) {
        return 'true'
    } else {
        return "false"
    }
}

console.log(checkNums(listOfNumbers));
console.log(checkNums(listOfNumbers2));

export = checkNums;