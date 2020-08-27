const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Davin Casely',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Page',
    name: 'Davin Casely',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help Page',
    help_message: 'This is the HELP MESSAGE...',
  });
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
