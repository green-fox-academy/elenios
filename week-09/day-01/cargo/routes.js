const express = require( 'express' );
const app = express();

app.get( '/rocket', ( req, res ) => {
  res.status( 200 ).json( {
    caliber25: 0,
    caliber30: 0,
    caliber50: 0,
    shipstatus: 'empty',
    ready: false
  } );
} );

app.get( '/rocket/fill', ( req, res ) => {
  let status = 'empty';
  let ready = false;
  if ( req.query.amount > 0 && req.query.amount < 12000 ) {
    status = (req.query.amount / 12000) * 100;
  } else if ( req.query.amount == 12000 ) {
    status = 'full';
    ready = true;
  } else if ( req.query.amount > 12000 ) {
    status = 'overloaded';
  }

  if ( req.query.caliber && req.query.amount ) {
    res.status( 200 ).json( {
      received: req.query.caliber,
      amount: req.query.amount,
      shipstatus: status,
      ready: ready
    } );
  } else {
    res.status( 400 ).json( { error: 'No input was given' } ).send();
  }
} );

module.exports = app;