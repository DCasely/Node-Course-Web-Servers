const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

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
