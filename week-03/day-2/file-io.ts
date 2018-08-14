declare function require(path: string): any;
export { };
'use strict';

const fs = require('fs');

const charEncoding = 'utf-8';

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, charEncoding)
  } catch (e) {
    console.log(e.message);
    return null;
  }
}

function writeToAFile (fileName: string, data: string): void {
  fs.writeFileSync(fileName, data);
}

writeToAFile('he')

console.log(readFromFile('hello.txt'));

