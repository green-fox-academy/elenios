'use strict';

// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(input: string[], input2: string[]) {
    let i = 0;
    let loveIsInTheAir = []
    if (input.length > input2.length) {
        i = input.length
    } else {
        i = input2.length
    }
    let j = i

    for (i; i > 0; i--) {
        if (input[j - i] != undefined) {
            loveIsInTheAir.push(input[j - i])
        }
        if (input2[j - i] != undefined) {
            loveIsInTheAir.push(input2[j - i])
        }
    }

    return loveIsInTheAir
}

console.log(makingMatches(girls, boys));

export = makingMatches;