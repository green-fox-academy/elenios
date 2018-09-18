const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// app.get('/assets/style.css', (req, res) => {
//   res.sendFile(path.join(__dirname, 'assets', '/style.css'));
// });

app.get('/ping', (req, res) => {
  //  res.send('pong');
  res.json({
    message: 'pong',
    status: 200,
  })
});

app.listen(PORT, () => {
  console.log(`the server is up and running on port ${PORT}`);
});
