'use strict';

// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

function appendA(input: any) {
    let combination = [];

    for (let j = 0; input.length > j; j++) { 
        combination.push(input[j].concat('a'));
    }
    return combination
}

console.log(appendA(far));

// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'

export = appendA;