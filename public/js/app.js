const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const city = document.querySelector('#city');
const weather = document.querySelector('#weather');
const temp = document.querySelector('#temp');
const feelsLike = document.querySelector('#feelsLike');

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
        console.log(data);
        city.textContent = data.location;
        weather.textContent = data.forecast.weather;
        temp.textContent = data.forecast.temp;
        feelsLike.textContent = data.forecast.feelsLike;
      }
    });
  });
});
