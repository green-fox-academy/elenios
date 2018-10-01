const express = require( 'express' );
const app = express();

app.get( '/groot', ( req, res ) => {
  if (req.query.message) {
    res.status(200).json({
      received: req.query.message,
      translated: 'I am Groot!'
    })
  }
  res.json({});
} );

module.exports = app;