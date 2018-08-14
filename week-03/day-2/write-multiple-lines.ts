declare function require(path: string): any;
export { };
'use strict';

// Create a function that takes 3 parameters: a path, a word and a number,
// than it should write to a file.
// The path parameter should be a string, that describes the location of the file.
// The word parameter should be a string, that will be written to the file as lines
// The number paramter should describe how many lines the file should have.
// So if the word is 'apple' and the number is 5, than it should write 5 lines
// to the file and each line should be 'apple'
// The function should not raise any error if it could not write the file.

function writeMultipleLines(pathOfFile: string, inputString: string, numberOfLines: number): any {
  const fs = require('fs');
  let counter = numberOfLines;
  let input = '';

  while (0 < numberOfLines) {
    input += inputString + '\r\n'
    numberOfLines--
  }

  try {
    fs.readFileSync(pathOfFile, 'utf-8');
    fs.writeFileSync(pathOfFile, input);
  } catch (error) {
    
  }
}

console.log(writeMultipleLines('./muliple.txt', 'Green Fox', 13113));