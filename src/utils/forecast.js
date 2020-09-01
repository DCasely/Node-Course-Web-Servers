const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=13604b194e0d222bdc14bb1db6712980&query=${encodeURIComponent(
    latitude
  )},${encodeURIComponent(longitude)}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    const weather = body.current.weather_descriptions[0];
    const temp = body.current.temperature;
    const feelsLike = body.current.feelslike;
    const windSpeed = body.current.wind_speed;
    const uvIndex = body.current.uv_index;
    const visibility = body.current.visibility;

    if (error) {
      callback('Unable to connect to weather service!');
    } else if (body.error) {
      callback('Unable to find location');
    } else {
      callback(undefined, {
        weather,
        temp,
        feelsLike,
        windSpeed,
        uvIndex,
        visibility,
      });
    }
  });
};

module.exports = forecast;
