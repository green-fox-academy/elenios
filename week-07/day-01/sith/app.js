const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

function yoda(text) {
  let array = text.split('.').split(' ');
  let arrayEven = [];
  let arrayOdd = [];
  let yodaArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      arrayEven.push(array[i])
    } else {
      arrayOdd.push(array[i])
    }
  }
  for (let j = 0; j < arrayOdd.length; j++) {
    yodaArray.push(arrayOdd[i]);
    yodaArray.push(arrayEven[i]);
  }
  return yodaArray.join(' ');
}

app.post('/sith', jsonParser, (req, res) => {
  let text = req.body.text;
      res.json({
        "sith_text": yoda(text),
      });
  });

app.listen(PORT, () => {
  console.log(`App succesfully started and listening on ${PORT}`);
});