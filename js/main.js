  const API = `https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}` 
  const searchBox = document.querySelector('.search-box');

searchBox.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if(evt.keyCode - 13) {
    console.log(searchBox.value);
  }
}

function getResults(query) {

fetch(`${API}weather?q=${query}&units=metric&APPID=${API}`)
  .then(weather => { 
    return weather.json();
  }).then(displayResults);
}

function displayResults(weather) {
  console.log(weather);
}
