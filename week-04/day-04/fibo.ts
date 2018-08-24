'use strict'
import { test } from 'tape';

function fibonacci(n: number) {
  if (n == 0 || n == 1) {
   return n = n
  } else {
    return fibonacci(n-2) + fibonacci(n-1)
  }
}
console.log(fibonacci(3));

test('fibonacci() gives a number', (test) => {
  test.deepEqual(fibonacci(3), 2, 'should return a number which is the sum of the two previous numbers in the fibonacci sequence');
  test.end();
})


