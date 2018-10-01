'use strict';

const routes = require( './routes' );
const port = 3000;

const app = require( 'express' ).express();

routes.listen( port, () => {
  console.log( 'Server running on oirt %d', port );
} );

