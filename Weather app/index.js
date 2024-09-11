// Declaring the variables
var lon;
var lat;
var temperature = document.querySelector(".temp");
var summary = document.querySelector(".summary");
var loc = document.querySelector(".location");
var icon = document.querySelector(".icon");
var kelvin = 273;

window.addEventListener("load", function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
      lon = position.coords.longitude;
      lat = position.coords.latitude;

      // API ID
      var api = "6d055e39ee237af35ca066f35474e9df";

      // API URL
      var base = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + api;

      // Calling the API
      fetch(base)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
          summary.textContent = data.weather[0].description;
          loc.textContent = data.name + "," + data.sys.country;
          var icon1 = data.weather[0].icon;
          icon.innerHTML = "<img src='https://openweathermap.org/img/wn/" + icon1 + ".png' style='height:10rem'/>";
        });
    });
  }
});
