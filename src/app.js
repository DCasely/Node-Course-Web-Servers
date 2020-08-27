const path = require('path');
const express = require('express');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Setup static directory to serve
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
