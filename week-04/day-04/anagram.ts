'use strict';
import { test } from 'tape';

function isAnagramOf(subject: string, anagram: string) {
  let boolean = true;
  let _subject = subject.split('');
  let _anagram = anagram.split('');
  _anagram.forEach(element => {
    if (element === ' ') {
      _anagram.splice(_anagram.indexOf(element), 1)
    }
  });
  _anagram.forEach(element => {
    if (_subject.indexOf(element) === -1) {
      boolean = false;
    }
  });
  return boolean;
}

test('isAnagramOf() verifies if two words are anagrams', (test) => {
  test.equal(isAnagramOf('anagram', 'nag a ram'), true, 'should return true if yes');
  test.end();
})