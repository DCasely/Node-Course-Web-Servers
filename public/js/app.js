const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // FETCH WEATHER DATA
  const location = search.value;
  const weatherUrl = `http://localhost:3000/weather?address=${location}`;

  fetch(weatherUrl).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data.location);
        console.log(data.forecast);
      }
    });
  });
});
