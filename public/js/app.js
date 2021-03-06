const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const city = document.querySelector('#city');
const weather = document.querySelector('#weather');
const temp = document.querySelector('#temp');
const feelsLike = document.querySelector('#feelsLike');
const windSpeed = document.querySelector('#windSpeed');
const uvIndex = document.querySelector('#uvIndex');
const visibility = document.querySelector('#visibility');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // FETCH WEATHER DATA
  const location = search.value;
  const weatherUrl = `/weather?address=${location}`;

  fetch(weatherUrl).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        city.textContent = data.error;
      } else {
        city.textContent = data.location;
        weather.textContent = data.forecast.weather;
        temp.textContent = data.forecast.temp;
        feelsLike.textContent = data.forecast.feelsLike;
        windSpeed.textContent = data.forecast.windSpeed;
        uvIndex.textContent = data.forecast.uvIndex;
        visibility.textContent = data.forecast.visibility;
      }
    });
  });
});
