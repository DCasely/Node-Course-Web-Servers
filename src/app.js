const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Weather</h1>');
});

app.get('/help', (req, res) => {
  res.send([
    {
      name: 'Davin',
      age: 30,
    },
    {
      name: 'Toya',
      age: 34,
    },
  ]);
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>');
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Sunny',
    location: 'Miami, FL',
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
