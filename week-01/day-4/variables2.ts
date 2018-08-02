'use strict';

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
console.log(e ** 3);

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
console.log(j % 3 == 0 || j % 5 == 0);

let k: string = 'Apple';
// fill the k variable with its content 4 times
console.log(k+k+k+k);

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let sideA: number = 10;
let sideB: number = 15;
let sideC: number = 5;
let surfaceArea: number = (sideA * sideB + sideA * sideC + sideB * sideC) * 2;
let volume: number = sideA * sideB * sideC;
console.log(surfaceArea);
console.log(volume);

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;
let currentTimeInSeconds: number = currentSeconds + currentMinutes * 60 + currentHours * 60 * 60;
let dayInSeconds: number = 24 * 60 * 60;
let remainingSeconds: number = dayInSeconds - currentTimeInSeconds);
console.log(remainingSeconds);








