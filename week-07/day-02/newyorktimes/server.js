const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();
const PORT = 8080;


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/nytimes/:q', (req, res) => {
  let url = [
    'https://api.nytimes.com/svc/search/v2/articlesearch.json',
    `?api-key=131c7a4be9004e288960796104f0f68e`,
    `&q=${req.params.q}`,
  ].join('');

  fetch(url)
    .then((resp) => (resp.json()))
    .then(response => {
      res.json(response);
    });
});



app.listen(PORT, () => {
  console.log(`App succesfully started and listening on ${PORT}`);
});