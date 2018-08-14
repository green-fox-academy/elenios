declare function require(path: string): any;
export { };
'use strict';

// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

function copy(filename: string, filename2: string): any {
  const fs = require('fs');

  try {
    fs.writeFileSync(filename2, fs.readFileSync(filename2) + '\r\n' + fs.readFileSync(filename))
    return true;
  } catch {
    return false;
  }
}

console.log(copy('copy.txt', 'copy2.txt'));
