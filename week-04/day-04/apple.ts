'use strict';
import { test } from 'tape';

class Apple {

  getApple() {
    return 'apple';
  }
}

let apple: Apple = new Apple;

test('getApple() prints apple', (test) => {
  test.equal( apple.getApple(), 'apple', 'should print apple');
  test.end();
})