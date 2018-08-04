'use strict';
/*
let lineCount: number = 4;
let csillagocska: string = "*"
let helyecske: string = " "

while (lineCount - 1 > 0) {
    lineCount--;

    while (lineCount - 1 > 0){
        helyecske += " ";
    }
    while (1-lineCount  > 0){
            lineCount++;
            csillagocska += "**";
            
    }   
}   console.log(csillagocska + helyecske);
*/

let lineCount: number = 4;
let csillagocska: string = "*"
let helyecske: string = ""
let i: number = 0

while (lineCount > 0) {
    helyecske = ""
    
    for (let i: number = 0; lineCount - i - 1 > 0; i++){
        helyecske += " ";
    } 
    lineCount--;
    csillagocska += "**";

    if (i == 0) {
        csillagocska = "*"
        i++
    } 
    console.log(helyecske + csillagocska); 
}