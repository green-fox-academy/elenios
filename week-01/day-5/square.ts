'use strict';

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

let lineCount: number = 6;
let lineCount2: number = lineCount;
let szazalekocska: string = "%";
let helyecske: string = "";

while (lineCount == lineCount2 || lineCount == 1 )  {
   
    for (let i: number = 1; i < lineCount; i++) {
    szazalekocska += "%";
   }
    lineCount2--;
    console.log(szazalekocska);

    while (lineCount > lineCount2 && lineCount2 > 1) {
        helyecske += " ";
        lineCount2--;
    } 
    lineCount2++;
}
while (lineCount > lineCount2 && lineCount2 > 1) {
    lineCount2++;
    console.log("%" + helyecske + "%");
}
console.log(szazalekocska);