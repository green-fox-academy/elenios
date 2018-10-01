'use strict';

const express = require( 'express' );
const app = express();
const test = require( 'tape' );
const request = require( 'supertest' );

test( 'one and one unit test', ( t ) => {
  request( routeModule.app )
    .get( '/groot' )
    .set( 'Content-Type', /json/ )
    .expect( 200 )
    .expect( {} )
    .end( ( err, res ) => {
      if ( err ) {
        t.error( err );
      }
      t.same( res.body, {} );
      t.end();
    } );
} );