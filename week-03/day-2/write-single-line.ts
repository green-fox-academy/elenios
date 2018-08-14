declare function require(path: string): any;
export { };
'use strict';

// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

function writeSingleLine(filename: string, input: string): any {
  const fs = require('fs');

  try  {
fs.readFileSync(filename, 'utf-8');    
fs.writeFileSyinc(filename, input);
  } catch (error) {
    return 'Unable to write file: ' + filename
  }
}
console.log(writeSingleLine('my-file.txt', 'Green Fox'));