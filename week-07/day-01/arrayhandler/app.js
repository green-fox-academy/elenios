const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function multiply(array) {
  let sum = 1;
  for (let i = 0; i < array.length; i++) {
    sum *= array[i];
  }
  return sum;
}

function double(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] * 2);
  }
  return newArray;
}

app.post('/arrays', jsonParser, (req, res) => {
  let what = req.body.what;
  let numbers = req.body.numbers;
  
    if (what === 'sum') {
      res.json({
        result: sum(numbers),
      });
  
    } else if (what === 'multiply') {
      res.json({
        result: multiply(numbers),
      });
      
    } else if (what === 'double') {
      res.json({
        result: double(numbers),
      });
    }
  });

app.listen(PORT, () => {
  console.log(`App succesfully started and listening on ${PORT}`);
});

