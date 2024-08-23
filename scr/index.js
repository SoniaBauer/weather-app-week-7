function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature-numbers");
    let temperature = Math.round(response.data.temperature.current);
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector("#icon");

    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}"class="emoji"/>`;

    cityElement.innerHTML = response.data.city;
    timeElement.innerHTML = formatDate(date);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    temperatureElement.innerHTML = temperature;

    getForecast(response.data.city);
  }
  function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      " Friday",
      "Saturday",
      "Sunday",
    ];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  }

  function searchCity(city) {
    let apiKey = "b5e07b0564et3ff29467o1feb88a0324";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
  }

  function submitYourCity(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#input-search-form");

    searchCity(searchInput.value);
  }

  function forematDay(timestamp){
let date= new Date(timestamp*1000);
let days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

return days[Date.getDay()];

  }

  let searchFormElement = document.querySelector("#search-form");
  searchFormElement.addEventListener("submit", submitYourCity);

  function getForecast(city){
let apiKey ="b5e07b0564et3ff29467o1feb88a0324";
let apiUrl ='https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}& units=metric';
 
axios(apiUrl).then(displayForecast);
}
function displayForecast(response){
  
}

  function displayForecast(){

let forecastHtml="";

    response.data.daily.forEach(function (day,index) {
      if(index < 5)
      forecastHtml =
      forecastHtml +
    `
    <div class="weather-forecast-day">
            <div class="weather-forecast-date">${formatDate(day.time)}</div>
           
            <img scr="${day.condition.icon_url}"class="weather-forecast-icon"/>
          
            <div class="weather-forecast-temperatures">
            <div class="weather-forecast-temperature">
               <strong>${Math.round(day.temperature.maximum)}°</strong>
               </div>
            <div class="weather-forecast-temperature"> ${Math.round(day.temperature.minimum)}°</div>
            </div>
            </div>
            `;  

  });

  let forecastElement=document.querySelector("#forecast");
  forecastElement.innerHTML= forecastHtml;
}
 searchCity("Cape-Town"); 
 displayForecast();
