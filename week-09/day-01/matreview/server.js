'use strict';

const routes = require( './routes' );
const port = 3000;

const express = require( 'express' );
const app = express();

routes.listen( port, () => {
  console.log( 'Server running on %d', port );
} );

