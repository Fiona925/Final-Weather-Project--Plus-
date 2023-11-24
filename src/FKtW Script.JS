alert("Bring on the Forecasting...");


let now = new Date();
let currentMilliseconds = now.getMilliseconds();
let currentSeconds = now.getSeconds();
let currentMinutes = now.getMinutes();
let currentHours = now.getHours();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDay = days[now.getDay()];
let currentDate = now.getDate();
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

