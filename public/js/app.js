// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

// const address = 'miami';
// const latitude = 25.7743;
// const longitude = -80.1937;

// const url = `http://api.weatherstack.com/current?access_key=13604b194e0d222bdc14bb1db6712980&query=${encodeURIComponent(
//   latitude
// )},${encodeURIComponent(longitude)}&units=f`;

const url = 'http://localhost:3000/weather?address=!';

fetch(url).then((response) => {
  response.json().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.location);
      console.log(data.forecast);
    }
  });
});
