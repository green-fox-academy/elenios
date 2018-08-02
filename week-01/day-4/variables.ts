'use strict';

let favoriteNumber: number = 8

// Store your favorite number in a variable (as a number)
// And print it like this: 'My favorite number is: 8'

console.log("My favorite number is: " + favoriteNumber);

// Swap the values of these variables

let a: number = 123;
let b: number = 526;

[a,b] = [b,a];

console.log(a);
console.log(b);

// Print the Body mass index (BMI) based on these values

let massInKg: number = 81.2;
let heightInM: number = 1.78;
let BMI: number = massInKg / heightInM ** 2;
console.log(BMI);

// Define several things as a variable, then print their values
// Your name as a string
// Your age as an integer
// Your height in meters as a float
// Whether you are married or not as a boolean

let myName: string = "Gabor Dobrozemszky";
let age: number = 27;
let height: number = 1.8;
let marriedStatus: boolean = false;

console.log(myName);
console.log(age);
console.log(height);
console.log(marriedStatus);
console.log("My name is " + myName + ", I am already " + age + " years old, " + height + "meter tall, and if you think that I\'m married, then your assumption is " + marriedStatus + ".");

let a: number = 3;
// make it bigger by 10
console.log(a + 10);

let b: number = 100;
// make it smaller by 7
console.log(b - 7);

let c: number = 44;
// double c's value
console.log(c * 2);

let d: number = 125;
// divide d's value by 5
console.log(d / 5);

let e: number = 8;
// what's the cube of e's value?
console.log(e ** 2);

let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)
console.log(f1 > f2);

let g1: number = 350;
let g2: number = 200;
// tell if the double of g2 is bigger than g1 (pras a boolean)
console.log(g2 * 2 > g1);

let h: number = 1357988018575474;
// tell if h has 11 as a divisor (as a boolean)
console.log(h % 11 == 0 );

let i1: number = 10;
let i2: number = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
console.log(i2 ** 2 < i1 && i1 < i2 ** 3);

let j: number = 1521;
// tell if j is dividable by 3 or 5 (as a boolean)
console.log(j % 3 == 0 && j % 5 == 0);

let k: string = 'Apple';
// fill the k variable with its content 4 times
console.log(k);

