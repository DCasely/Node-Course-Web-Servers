const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('I SENT SOMETHING');
});

app.get('/help', (req, res) => {
  res.send('You are on the HELP Page');
});

app.get('/about', (req, res) => {
  res.send('You are on the ABOUT PAGE');
});

app.get('/weather', (req, res) => {
  res.send('You are on the WEATHER PAGE');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
