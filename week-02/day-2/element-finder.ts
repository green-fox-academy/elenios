'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];
const numbers2: number[] = [1, 2, 3, 4, 7, 6, 8];

// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!


function containsSeven(array) {

    if (array.indexOf(7) != -1) {
        return "Hoorray"
    } else {
        return 'Noooooo'
    }

}




console.log(containsSeven(numbers));
console.log(containsSeven(numbers2));

export = containsSeven;