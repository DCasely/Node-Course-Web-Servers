const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

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
  if (!req.query.address) {
    return res.send({
      error: 'Address must be provided',
    });
  }

  const address = req.query.address;

  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({ error });
    }

    if (!address) {
      return res.send({
        error: 'Address must be submitted.',
      });
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      }

      res.send({
        forecast: forecastData,
        location,
        address,
      });
    });
  });
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term',
    });
  }

  res.send({
    products: [],
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
