alert("Bring on the Forecasting...");
function formatDate(date) {

let now = new Date();
let currentMinutes = date.getMinutes();
  
if (currentMinutes < 10) 
{ currentMinutes = `0${currentMinutes}`; }

let currentHours = date.getHours();

if (currentHours < 10) 
{ currentHours = `0${currentHours}`; }

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





}

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

