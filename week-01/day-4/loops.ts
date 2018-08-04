
'use strict';

// Create a program that writes this line 100 times:
// "I won't cheat on the exam!"

for (let i: number = 0; i < 100; i++) {
    console.log("I won\'t cheat on the exam");
}

// Create a program that prints all the even numbers between 0 and 500

for (let i: number = 2; i <= 500; i += 2) {
    console.log(i);
}


// Create a program that
// prints the multiplication table with number
//
// Example:
// The number 15 should print:
//
// 1 * 15 = 15
// 2 * 15 = 30
// 3 * 15 = 45
// 4 * 15 = 60
// 5 * 15 = 75
// 6 * 15 = 90
// 7 * 15 = 105
// 8 * 15 = 120
// 9 * 15 = 135
// 10 * 15 = 150

let number: number = 12;

for (let i: number = 1; i <= 10; i++) {
    console.log(i + " * " + number + " = " + i * number);
}


// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

for (let i: number = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}


// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let rowCount: number = 4;

for (let i: string = "*"; i.length <= rowCount; i += "*"){
        console.log(i);
    }


// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let lineCount: number = 4;
let output: string = "";
let spaceCount: number = lineCount - 1;
let starCount: number = 1
for (let i: number = 1; i <= lineCount; i++) {
    output = "";
    for (let j: number = spaceCount; j >= 0; j--) {
        output += ' ';
    }
    for (let k: number = 0; k < starCount; k++) {
        output += "*";
    }
    spaceCount--;
    starCount += 2;
    console.log(output);
}