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

let lineCount: number = 22;
let lineCount2: number = Math.ceil(lineCount/2);
let csillagocska: string = "*"
let helyecske: string = "";

if (lineCount % 2 == 0 ) {
    lineCount -= 1;
}

while (lineCount > 0) {
    helyecske = "";
    for (let i: number = 0; lineCount - lineCount2 - i > 0; i++) {
        helyecske += " "; 
    } 
    lineCount--;
    console.log(helyecske + csillagocska); 
    csillagocska += "**";

    if (lineCount == lineCount2) {
        console.log (csillagocska);
        lineCount = 0;
        lineCount2--;
        helyecske = " ";

        while (lineCount2 > 0) {
            csillagocska = ""
            for (let j: number = 1; lineCount2*2 - j > 0; j++){
                csillagocska += "*"; 
            } 
            lineCount2--;
            console.log(helyecske + csillagocska); 
            helyecske += " ";
        
    }
    }
}
