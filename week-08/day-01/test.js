'use strict';

const tape = require('tape');
const businessLogic = require('./poker')

tape.test('One plus one equals two', test => {
  test.equals(2, businessLogic.addTwoNumbers(1, 1));
  test.end();
});

tape.test('is it a valid card?', test => {
  test.ok(businessLogic.isValid('3C'), 'It\'s a valid card');
  test.end();
});

tape.test('is it a valid card?', test => {
  test.notOk(businessLogic.isValid('0S'), 'It\'s not valid card');
  test.end();
});

tape.test('is it a valid card?', test => {
  test.notOk(businessLogic.isValid('TT'), 'It\'s not valid card');
  test.end();
});

tape.test('is it a valid card?', test => {
  test.notOk(businessLogic.isValid('3T'), 'It\'s not valid card');
  test.end();
});
