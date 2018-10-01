'use strict';

const test = require( 'tape' );
const request = require( 'supertest' );
const routeModule = require( './routes' );


test( 'groot endpoint', ( t ) => {
  request( routeModule )
    .get( '/groot/' )
    .set( 'Accept', 'application/json/' )
        .expect( 400 )
    .expect( {} )
    .end( ( err, res ) => {
      if ( err ) {
        t.error( err );
      }
      t.same( res.body, { error: 'I am Groot!' } );
      t.end();
    } );
} );

  // test( 'one and one unit test', ( t ) => {
  //   let message = 'Hello there general Kenobi'
  //   request( routeModule )
  //     .get( '/groot/?message=' + message )
  //     .set( 'Accept', 'application/json/' )
  //     .expect( 200 )
  //     .expect( {} )
  //     .end( ( err, res ) => {
  //       if ( err ) {
  //         t.error( err );
  //       }
  //       t.same( res.body, { received: message, translated: 'I am Groot!' } );
  //       t.end();
  //     } ); 
  // } );