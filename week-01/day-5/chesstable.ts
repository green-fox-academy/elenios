
'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let lineCount: number = 13;

let a: string = '%';
let b: string = ' ';
let line: string = '';

for (let i: number = 0; i <= lineCount; i++) {
    for (let j: number = 0; j <= lineCount; j++) {
        if (i == 0 || i == lineCount || j == 0 || j == lineCount) {
            line = line + a;
        } else if (i == line.length && j == line.length) {
            line = line + a;
        } else {
            line = line + b;
        }
    }
    console.log(line);
    line = '';
}