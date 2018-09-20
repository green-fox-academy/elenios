const express = require('express');
const mysql = require('mysql');
const path = require('path');
const fetch = require('node-fetch');
const app = express();
const PORT = 8080;


const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'bookstore',
});

conn.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/', function(req, res) {
  conn.query('SELECT book_name FROM book_mast;', function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.satus(500).send('Database error');
      return;
    }
    res.send(rows);
  });
});


conn.query(`SHOW DATABASES;`, (err, result) => {
  console.log(result);
});

conn.query(`INSERT INTO author(name) values(csillam)`), (err, result) => {
  if (err) {
    console.log('failure', err.message);
    return;
  }
  console.log(result);
}

const getAuthor = () => {
  conn.query(`SELECT * FROM author`, (err, result) => {
    if (err) {
      console.log('failure, err.message');
      return;
    }
    console.log(result);
    return result;
  });
}

'
bookstore tabla beimportalva 
html page ami megjeleniti h milyen konyv stb
ez a html kell h hivatkozzon egy script;js're
kell olyan alap endpoint ami res.sendfile
bongeszo megkapja az indexhtm;lt, amibe van script amiben van xhtml v fetch ami keri a konvyveket
ez egy uj endpoint., ebben lesz egy olyanlogika amiben kuldok egy selectqueryt az adatbazisnak akkor az jsonkent feldolgozza

'