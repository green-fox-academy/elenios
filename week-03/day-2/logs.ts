declare function require(path: string): any;
export { };
'use strict';
const fs = require('fs');
const charBase = 'utf-8';

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

function uniqueIPs(file: string): any {

  let baseArray = fs.readFileSync(file, charBase).split('\r\n');
      let IPs = baseArray.forEach(element => {

  });
/*
  try {
    return true;
  } catch {
    return false;
  }
  */
}

console.log(uniqueIPs('log.txt'));
