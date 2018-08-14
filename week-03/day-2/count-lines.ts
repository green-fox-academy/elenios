declare function require(path: string): any;
export { };
'use strict';

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

function countLines(fileName: string): any {
  const fs = require('fs');
  let counter = 0;

  try {
    let fileContent = fs.readFileSync(fileName, 'utf-8');
    fileContent.split('\r\n').forEach(function (element) {
      counter++
    });
    return counter;

  } catch (e) {
    return 0;
  }
}

console.log(countLines('myspace.txt'));