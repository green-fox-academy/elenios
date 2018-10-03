const express = require( 'express' );
const mysql = require( 'mysql' );
const app = express();
const PORT = 666;
const bodyParser = require( 'body-parser' );
const jsonParser = bodyParser.json();
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false}))

app.listen( PORT, () => {
  console.log( `App succesfully started and listening on ${ PORT }` );
} );

const conn = mysql.createConnection( {
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'reddit',
} );

conn.connect( function ( err ) {
  if ( err ) {
    console.log( 'Error connecting to Db' );
    return;
  }
  console.log( 'Connection established' );
} );

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/new/', (req, res) => {
  res.sendFile(path.join(__dirname, 'post.html'));
});

app.get( '/posts/', ( req, res ) => {
  conn.query( 'SELECT * FROM post;', function ( err, rows ) {
    if ( err ) {
      console.log( 'failure', err.message );
      return;
    }
    res.json( {
      posts: rows
    } );
  } );
} );

app.post( '/posts/', jsonParser, ( req, res ) => {
  let title = req.body.title;
  let url = req.body.url;

  conn.query( `INSERT INTO post (title, url) values (?, ?);`, [title, url], ( err, result ) => {

    if ( err ) {
      console.log( 'failure', err.message );
      return;
    }

    res.redirect('/');

  } );
} );

app.put( '/posts/:id/upvote', jsonParser, ( req, res ) => {
  let id = req.params.id;

  conn.query( `UPDATE post SET vote = vote + 1  WHERE post_id = ${ id };`, ( err, result ) => {
    if ( err ) {
      console.log( 'failure', err.message );
      return;
    }
    conn.query( `SELECT * FROM post WHERE post_id = ${ id };`, ( err, result2 ) => {

      res.json( {
        result: result2
      } );
    } );
  } );
} );

app.put( '/posts/:id/downvote', jsonParser, ( req, res ) => {
  let id = req.params.id;

  conn.query( `UPDATE post SET vote = vote - 1  WHERE post_id = ${ id };`, ( err, result ) => {
    if ( err ) {
      console.log( 'failure', err.message );
      return;
    }
    conn.query( `SELECT * FROM post WHERE post_id = ${ id };`, ( err, result2 ) => {

      res.json( {
        result: result2
      } );
    } );
  } );
} );

app.delete( '/posts/:id', ( req, res ) => {
  let id = req.params.id;

  conn.query( `DELETE FROM post WHERE post_id = ${ id };`, ( err, result ) => {
    if ( err ) {
      console.log( 'failure', err.message );
      return;
    }
    res.json({
      deleted: true
    });
  } );
} );

app.put( '/posts/:id', jsonParser, ( req, res ) => {
  let id = req.params.id;
  let title = req.body.title;
  let url = req.body.url;

  conn.query( `UPDATE post SET title = '${ title }', url = '${ url }' WHERE post_id = ${ id };`, ( err, result ) => {
    if ( err ) {
      console.log( 'failure', err.message );
      return;
    }
    conn.query( `SELECT * FROM post WHERE post_id = ${ id };`, ( err, result2 ) => {

      res.json( {
        result: result2
      } );
    } );
  } );
} );