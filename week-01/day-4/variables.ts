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
