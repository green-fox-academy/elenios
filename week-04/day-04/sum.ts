'use strict';
import { test } from 'tape';

class Numbers {
  numbers: number[] = [1,2,3,4,5]

  sum() {
    let sum = 0;
    this.numbers.forEach(element => {
     sum += element 
    });
    return sum
  }
}

let numbers: Numbers = new Numbers;

test('sum() sums all the numbers from the array', (test) => {
  test.equal( numbers.sum(), 15, 'should give the sum');
  test.end();
})