'use strict';

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home page',
    header: 'GreenFoxAcademy',
  });
});

app.get('/products/:id/owner', (req, res) => {
  res.render('home', {
    title: 'Product',
    header: req.params.id,
    withGoodbye: req.params.withGoodbye === 'true',
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
}); 