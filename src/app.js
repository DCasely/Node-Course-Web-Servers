const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

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
    name: 'Davin Casely',
    help_message: 'This is the HELP MESSAGE...',
  });
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Sunny',
    location: 'Miami, FL',
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Davin Casely',
    message: 'This is the 404 Message for HELP PAGE',
  });
});

app.get('/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Davin Casely',
    message: 'This is the General 404 Page.',
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
