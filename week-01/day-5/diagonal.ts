'use strict';

// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

let lineCount: number = 20;
let lineCount2: number = lineCount;
let szazalekocska: string = "%";
let helyecske: string = "";
let helyecske2: string = "";

while (lineCount == lineCount2)  {
    for (let i: number = 1; i < lineCount; i++) {
    szazalekocska += "%";
   }
    lineCount2 -= 2;
    console.log(szazalekocska)    
}
while (lineCount2 >  0) {
     lineCount2--
    for (let i: number = 0; lineCount - i - 1 > i; i++){
    }      
    for (let j: number = lineCount2; j > 0; j--){
        helyecske2 += " "
    } 
    console.log("%" + helyecske + "%" + helyecske2 + "%");
    helyecske += " "
    helyecske2 = ""
}
console.log(szazalekocska); 