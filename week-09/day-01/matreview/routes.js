const app = require( 'express' ).express();

app.get( '/groot', ( req, res ) => {
  res.json({});
} );


module.exports = app;