'use strict';

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let lineCount: number = 9;
let csillagocska: string = "*"
let helyecske: string = ""

while (lineCount > 0) {
    helyecske = ""
    
    for (let i: number = 0; lineCount - i - 1 > 0; i++){
        helyecske += " ";
    } 
    lineCount--;

    console.log(helyecske + csillagocska); 
    csillagocska += "**";
}
