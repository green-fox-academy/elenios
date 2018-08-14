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

  let baseArray = (fs.readFileSync(file, charBase).split('\r\n'));
  let baseArray2 = [];
  let IPs = [];
  let uniqueIPs = [];
  baseArray.forEach(element => {
    baseArray2.push(element.split('   '));
  });
  baseArray2.forEach(element => {
    IPs.push(element[1]);
  });

  for (let i = 0; i < IPs.length; i++) {
    if (uniqueIPs.indexOf(IPs[i]) <= -1) {
      uniqueIPs.push(IPs[i]);
    }
  }
  return uniqueIPs;

  /*uniqueIPs = IPs.filter(function (elem, index, self) {
    return index === self.indexOf(elem);
  })*/


  /*
    try {
      return true;
    } catch {
      return false;
    }
    */
}

console.log(uniqueIPs('log.txt'));
