'use strict';

const test = require( 'tape' );
const request = require( 'supertest' );
const routeModule = require( './routes' );


test( 'rocket endpoint', ( t ) => {
  let distance = '100';
  let time = '10';
  let speed = distance / time;
  request( routeModule )
    .get( `/rocket` )
    .expect( 'Content-Type', /json/ )
    .expect( 200 )
    .end( ( err, res ) => {
      if ( err ) {
        t.error( err );
      }
      t.same( res.body, { caliber25: 0, caliber30: 0, caliber50: 0, shipstatus: 'empty', ready: false } );
      t.end();
    } );
} );

test( 'rocket/fill endpoint without input', ( t ) => {
  request( routeModule )
    .get( `/rocket/fill` )
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

test( 'rocket/fill 0% test', ( t ) => {
  request( routeModule )
    .get( `/rocket/fill?caliber=.25&amount=0` )
    .expect( 'Content-Type', /json/ )
    .expect( 200 )
    .end( ( err, res ) => {
      if ( err ) {
        t.error( err );
      }
      t.same( res.body, { received: '.25', amount: '0', shipstatus: 'empty', ready: false } );
      t.end();
    } );
} );

test( 'rocket/fill 40% test', ( t ) => {
  request( routeModule )
    .get( `/rocket/fill?caliber=.35&amount=4800` )
    .expect( 'Content-Type', /json/ )
    .expect( 200 )
    .end( ( err, res ) => {
      if ( err ) {
        t.error( err );
      }
      t.same( res.body, { received: '.35', amount: '4800', shipstatus: 40, ready: false } );
      t.end();
    } );
} );

test( 'rocket/fill 100% test', ( t ) => {
  request( routeModule )
    .get( `/rocket/fill?caliber=.25&amount=12000` )
    .expect( 'Content-Type', /json/ )
    .expect( 200 )
    .end( ( err, res ) => {
      if ( err ) {
        t.error( err );
      }
      t.same( res.body, { received: '.25', amount: '12000', shipstatus: 'full', ready: true } );
      t.end();
    } );
} );

test( 'rocket/fill overload test', ( t ) => {
  request( routeModule )
    .get( `/rocket/fill?caliber=.5&amount=13000` )
    .expect( 'Content-Type', /json/ )
    .expect( 200 )
    .end( ( err, res ) => {
      if ( err ) {
        t.error( err );
      }
      t.same( res.body, { received: '.5', amount: '13000', shipstatus: 'overloaded', ready: false } );
      t.end();
    } );
} );