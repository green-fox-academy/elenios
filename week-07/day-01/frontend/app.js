const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets/index.html'));
});

app.get('/doubling', (req, res) => {
  let input = req.query.input;
  if (input) {
    res.json({
      received: input,
      result: input * 2,
    });
  } else {
    res.json({
      "error": "Please provide an input!"
    });
  };
});

app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;

  if (name && title) {
    res.json({
      "welcome_message": `Oh, hi there ${name}, my dear student!`
    });
  } else if (name) {
    res.json({
      "error": "Please provide a title!"
    });
  } else if (title) {
    res.json({
      "error": "Please provide a name!"
    });
  }
});

app.get('/appenda/:word', (req, res) => {
  let word = req.params.word;
  res.json({
    appended: word + 'a',
  });
});

function sum(n) {
  if (n === 1) {
    return n;
  } else {
    return n + sum(n - 1);
  }
}
function factor(n) {
  if (n === 1) {
    return n;
  } else {
    return n * sum(n - 1);
  }
}

app.post('/dountil/:action', jsonParser, (req, res) => {
  let action = req.params.action;
  let number = req.body.until;

  if (number && action === 'sum') {
    res.json({
      result: sum(number),
    });

  } else if (number && action === 'factor') {
    res.json({
      result: factor(number),
    });
    
  } else {
    res.json({
    "error": "Please provide a number!"
  });
  }
});

app.listen(PORT, () => {
  console.log(`App succesfully started and listening on ${PORT}`);
});

