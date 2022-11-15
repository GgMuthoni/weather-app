let now = new Date();
let currentDate = document.querySelector("h2");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let currentHour = now.getHours();
let currentMinute = now.getMinutes();

currentDate.innerHTML = `${day} ${currentHour}:${currentMinute}`;
//2
function showTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  let describe = response.data.weather[0].description;
  document.querySelector("#description").innerHTML = `${describe}`;
  let temp = Math.round(response.data.main.temp);
  document.querySelector("#temperature").innerHTML = `${temp}`;
  let humid = Math.round(response.data.main.humidity);
  document.querySelector("#humidity").innerHTML = `Humidity: ${humid}%`;
  let speed = Math.round(response.data.wind.speed);
  document.querySelector("#wind").innerHTML = `Wind: ${speed} km/hr`;
}
//

function retrieveCity(city) {
  let apiKey = "667d9f573c8af4c33457be5d561a9148";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

function findCity(event) {
  event.preventDefault();
  let city = document.querySelector("#cityInput").value;
  retrieveCity(city);
}
//
function getLocation(position) {
  console.log(position);
  let apiKey = "667d9f573c8af4c33457be5d561a9148";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}
function showPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getLocation);
}

let searchCity = document.querySelector("#cityForm");
searchCity.addEventListener("submit", findCity);
//
let button = document.querySelector("#currentButton");
button.addEventListener("click", showPosition);

retrieveCity("Kenya");
