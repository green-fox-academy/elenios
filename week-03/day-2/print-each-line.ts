declare function require(path: string): any;
export { };
'use strict';

// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'

function linePrinter(fileName: string): string {
  const fs = require('fs');

  try {
    let fileContent = fs.readFileSync(fileName, 'utf-8');
    return (fileContent.split('\r\n'));
  } catch (e) {
    console.log(e.message);
    return 'Unable to read file: ' + fileName;
  }

}

console.log(linePrinter('myspace.txt'));