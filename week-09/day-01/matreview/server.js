'use strict';

const routesModule = require( './routes' );
const port = 3000;

const express = require( 'express' );
const app = express();

routesModule.app.listen( port, () => {
  console.log( 'Server running on %d', port );
} );

