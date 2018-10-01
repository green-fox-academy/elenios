const express = require( 'express' );
const app = express();
const mysql = require( 'mysql' );
const bodyParser = require( 'body-parser' );
const jsonParser = bodyParser.json();

const conn = mysql.createConnection( {
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'drex',
} );

conn.connect( function ( err ) {
  if ( err ) {
    console.log( 'Error connecting to Db' );
    return;
  }
  console.log( 'Connection established' );
} );

app.get( '/drax/', ( req, res ) => {
  conn.query( 'SELECT * FROM calorietable;', function ( err, rows ) {
    if ( err ) {
      console.log( 'failure', err.message );
      return;
    }
    res.status( 200 ).json( {
      meals: rows,
    } );
  } );
} );

app.post( '/drax/meal/', jsonParser, ( req, res ) => {
  let food = req.body.food;
  let amount = req.body.amount;
  let calorie = req.body.calorie;

  if ( req.body.food && req.body.amount && req.body.calorie ) {

    conn.query( `INSERT INTO calorietable (food, amount, calorie) values ('${ food }', '${ amount }', '${ calorie }');`, ( err, result ) => {

      let id = result.insertId;
      if ( err ) {
        console.log( 'failure', err.message );
        return;
      }
      console.log( 'Succesfully added' );

      conn.query( `SELECT * FROM calorietable WHERE meal_id = ${ id };`, ( err, result2 ) => {

        res.json( {
          result: result2
        } );
      } );
    } );
  } else {
    res.status( 400 ).json( { error: 'No input was given' } ).send();
  }
} );

app.delete( '/drax/meal/', jsonParser, ( req, res ) => {
  let id = req.body.meal_id;

  if ( req.body.meal_id ) {

    conn.query( `DELETE FROM calorietable WHERE meal_id = ${ id };`, ( err, result ) => {

      if ( err ) {
        console.log( 'failure', err.message );
        return;
      }
      console.log( `Succesfully removed meal with id ${ id }` );

    } );
  } else {
    res.status( 400 ).json( { error: 'No input was given' } ).send();
  }
} );

app.put( '/drax/:id/', jsonParser, ( req, res ) => {
  let id = req.params.id;
  let amount = req.query.amount;

  if ( req.params.id && req.query.amount ) {

    conn.query( `UPDATE calorietable SET amount = '${amount}' WHERE meal_id = ${ id };`, ( err, result ) => {
      if ( err ) {
        console.log( 'failure', err.message );
        return;
      }
      conn.query( `SELECT * FROM calorietable WHERE meal_id = ${ id };`, ( err, result2 ) => {

        res.json( {
          result: result2
        } );
      } );
    } );
  } else {
    res.status( 400 ).json( { error: 'No input was given' } ).send();
  }
} );

module.exports = app;