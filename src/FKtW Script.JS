let now = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDay = days[now.getDay()];

let currentDate = now.getDate();

if (currentDate < 10) 
{ currentDate = `0${currentDate}`; }

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

function displayInformation(response) {
  let temperature = Math.round(response.data.temperature.current);
  let temperatureElement = document.querySelector("#temp-value");

  temperatureElement.innerHTML = `${temperature}`
  
  let h1 = document.querySelector("#location");
  h1.innerHTML = response.data.city;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = response.data.wind.speed;

  let itFeelsLike = Math.round(response.data.temperature.feels_like);
  let feelsLikeElement = document.querySelector("#feelsLike");
feelsLikeElement.innerHTML = `${itFeelsLike}`;

  let descriptionElement = document.querySelector("#weatherDescription");
  descriptionElement.innerHTML = response.data.condition.description;

  let iconElement = document.querySelector("#temp-icon");
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="temp-icon" />`

  let localTime = new Date(response.data.time * 1000);
  let localTimeElement =document.querySelector("#localTime");
  localTimeElement.innerHTML = formatLocalTime(localTime);

 }

 function formatLocalTime(localTime) {
  let localDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]
  let currentLocalDay = localDays[localTime.getDay()];
         
  let localMinutes = localTime.getMinutes();
    
  if (localMinutes < 10) 
  { localMinutes = `0${localMinutes}`; }
  
  let localHours = localTime.getHours();
  
  if (localHours < 10) 
  { localHours = `0${localHours}`; } 

  return `${currentLocalDay}, ${localHours}:${localMinutes}`
}

  function apiData(city) {
    let apiKey = "33betdbcb4109a093d33a9a0230cbfob";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayInformation);
  }

 function citySearch(event) {
    event.preventDefault();
     
    let newCityName = document.querySelector("#location-input");
    apiData(newCityName.value);
 }

function displayForecast() {
  let forecastDays = ["Fri", "Sat", "Sun", "Mon", "Tues", "Wed", "Thurs"];
  let forecastHtml = "";

  forecastDays.forEach(function (day) {
  forecastHtml =
  forecastHtml +
`
 <div class="day1" id="day1">
 <div class="forecast-day" id="forecast-day">${day}</div>
 <div class="forecast-icon id="forecast-icon"> . </div> 
 <div class="forecast-temp" id="forecast-temp">
     <span class="forecast-high id="forecast-high">18°C</span>
     <span class="forecast-low" id="forecast-low">9°C</span>
 </div>
</div>
`;
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}


  let citySearchClick = document.querySelector("#locationSearchBar");
  citySearchClick.addEventListener("submit", citySearch); 

  apiData("Warwick");
  displayForecast();
