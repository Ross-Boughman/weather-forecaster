appid = "ee5584167be6b60115b9afed7c67df95"

let forecast = function (lat, lon) {
    let queryURL =
      "https://api.openweathermap.org/data/2.5/forecast?lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=" +
      appid +
      "&units=imperial";
  let currentForecast = function (city) {
    let queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      appid +
      "&units=imperial";
    fetch(queryURL, {
      method: "GET",
      credentials: "same-origin",
      redirect: "follow",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        forecast(data.coord.lat, data.coord.lon);
      })
    }
}