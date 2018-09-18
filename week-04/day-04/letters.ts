'use strict'
import { test } from 'tape';

function letterCounter ( text: string ): object {
  let array = text.split( '' )
  while ( array.indexOf( ' ' ) !== - 1 ) {
    array.splice( array.indexOf( ' ' ), 1 )
  }
  let dictionary = {};

  for ( let i: number = 0; i < array.length; i++ ) {
    if ( array[ i ] !== ' ' ) {
      dictionary[ array[ i ] ] = 0;
    }
  }
  for ( let i: number = 0; i < array.length; i++ ) {
    dictionary[ array[ i ] ] += 1;
  }
  return dictionary;
}
console.log( letterCounter( 'alma' ) );

test( 'letterCounter() gives a dictionary of letters of the given text', ( test ) => {
  test.deepEqual( letterCounter( 'alma' ), { a: 2, l: 1, m: 1 }, 'should return an object with letters as keys and values as counter' );
  test.end();
} )
