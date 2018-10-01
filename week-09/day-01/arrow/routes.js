const express = require( 'express' );
const app = express();

app.get( '/yondu', ( req, res ) => {
  if ( req.query.distance && req.query.time ) {
    res.status( 200 ).json( {
      distance: req.query.distance,
      time: req.query.time,
      speed: req.query.distance / req.query.time
    } );
  } else {
    res.status( 400 ).json( { error: 'No input was given' } ).send();
  }
} );

module.exports = app;