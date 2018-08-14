'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"
let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'
let index = quote.indexOf('you');

function insert(string, index, value) {
    return string.substr(0, index) + value + string.substr(index);
}

console.log(insert(quote,index,'always takes longer than '))
