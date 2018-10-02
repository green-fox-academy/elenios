const express = require( 'express' );
const app = express();
const PORT = 3000;
const path = require( 'path' );
const fetch = require('node-fetch');

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api', (req, res) => {
  let url = `https://swapi.co/api/${req.query.keyword}`;  
    res.json(url);
});

app.listen(PORT, () => {
  console.log(`App succesfully started and listening on ${PORT}`);
})