const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 666;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.listen(PORT, () => {
  console.log(`App succesfully started and listening on ${PORT}`);
});

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'reddit',
});

conn.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

app.get('/', (req, res) => {
  res.json({
    console: 'hello'
  });
});

app.get('/posts/', (req, res) => {
  conn.query('SELECT * FROM post;', function (err, rows) {
    if (err) {
      console.log('failure', err.message);
      return;
    }
    res.json({
      posts: rows
    });
  });
});

app.post('/posts/', jsonParser, (req, res) => {
  let title = req.body.title;
  let url = req.body.url;
  let owner = req.body.owner;

  conn.query(`INSERT INTO post (title, url, owner) values ('${title}', '${url}', '${owner}');`, (err, result) => {

    let newId = result.insertId;
    if (err) {
      console.log('failure', err.message);
      return;
    }
    console.log('Succesfully added');

    conn.query(`SELECT * FROM post WHERE post_id = ${newId};`, (err, result2) => {

      res.json({
        result: result2
      });
    });
  });
});

app.put('/posts/:id/upvote', jsonParser, (req, res) => {
  let id = req.params.id;

  conn.query(`UPDATE post SET vote = vote + 1  WHERE post_id = ${id};`, (err, result) => {
    if (err) {
      console.log('failure', err.message);
      return;
    }
    conn.query(`SELECT * FROM post WHERE post_id = ${id};`, (err, result2) => {

      res.json({
        result: result2
      });
    });
  });
});

app.put('/posts/:id/downvote', jsonParser, (req, res) => {
  let id = req.params.id;

  conn.query(`UPDATE post SET vote = vote - 1  WHERE post_id = ${id};`, (err, result) => {
    if (err) {
      console.log('failure', err.message);
      return;
    }
    conn.query(`SELECT * FROM post WHERE post_id = ${id};`, (err, result2) => {

      res.json({
        result: result2
      });
    });
  });
});

app.delete('/posts/:id', (req, res) => {
  
});