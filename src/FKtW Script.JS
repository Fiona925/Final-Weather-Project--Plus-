alert("Bring on the Forecasting...");
let now = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDay = days[now.getDay()];

let currentDate = now.getDate();

if (currentDate < 10) 
{ currentDate = `0${currentHours}`; }

let months = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let currentMonth = months[now.getMonth()];
let currentYear = now.getFullYear();


let currentMinutes = now.getMinutes();
  
if (currentMinutes < 10) 
{ currentMinutes = `0${currentMinutes}`; }

let currentHours = now.getHours();

if (currentHours < 10) 
{ currentHours = `0${currentHours}`; }






let minutes = document.getElementById("minutes");
minutes.innerHTML = `${currentMinutes}`;
let hours = document.getElementById("hours");
hours.innerHTML = `${currentHours}`;
let day = document.getElementById("day");
day.innerHTML = `${currentDay}`;
let date = document.getElementById("date");
date.innerHTML = `${currentDate}`;
let month = document.getElementById("month");
month.innerHTML = `${currentMonth}`;
let year = document.getElementById("year");
year.innerHTML = `${currentYear}`;

function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let temperatureElement = document.querySelector("#temp-value");

  temperatureElement.innerHTML = `${temperature}`
  

  let h1 = document.querySelector("#location");
  h1.innerHTML = response.data.city;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = response.data.wind.speed;

  let descriptionElement = document.querySelector("#weatherDescription");
  descriptionElement.innerHTML = response.data.condition.description;

  }





function citySearch(event) {
    event.preventDefault();
     
    let newCityName = document.querySelector("#location-input");
    let city = newCityName.value;

  let apiKey = "33betdbcb4109a093d33a9a0230cbfob";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

  let citySearchClick = document.querySelector("#locationSearchBar");
  citySearchClick.addEventListener("submit", citySearch); 