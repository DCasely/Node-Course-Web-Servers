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
        city.style.color = 'red';
      } else {
        city.style.color = '#fff';
        city.textContent = `Location: ${data.location}`;
        weather.textContent = `Weather: ${data.forecast.weather}`;
        temp.textContent = `Temperature: ${data.forecast.temp}°`;
        feelsLike.textContent = `Feels Like: ${data.forecast.feelsLike}°`;
      }
    });
  });
});
