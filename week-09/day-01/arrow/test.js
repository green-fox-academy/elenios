'use strict';

const test = require( 'tape' );
const request = require( 'supertest' );
const routeModule = require( './routes' );


test( 'Yondu', ( t ) => {
  let distance = '100';
  let time = '10';
  let speed = distance / time;  
  request( routeModule )
    .get( `/yondu?distance=${distance}&time=${time}` )
    .expect( 'Content-Type', /json/ )
    .expect( 200 )
    .end( ( err, res ) => {
      if ( err ) {
        t.error( err );
      }
      t.same( res.body, { distance: distance, time: time, speed: speed } );
      t.end();
    } );
} );

test( 'Yondu', ( t ) => {
  request( routeModule )
    .get( `/yondu` )
    .expect( 'Content-Type', /json/ )
    .expect( 400 )
    .end( ( err, res ) => {
      if ( err ) {
        t.error( err );
      }
      t.same( res.body, { error: 'No input was given' } );
      t.end();
    } );
} );