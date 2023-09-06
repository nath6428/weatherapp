import { createForecast } from "./forecast.js"
import { moreInfoWriteToDOM } from "./moreinfo.js"


const temperature = document.querySelector(".degrees")
const degreesSymbol = document.querySelector(".degrees-symbol")
export const searchBar = document.querySelector(".search-bar")
const weatherDescription = document.querySelector(".weather-description")
const tempContainer = document.querySelector(".temperature-container")

function writeToDOM(data){
    
    temperature.innerText = data.current.temp_c
    degreesSymbol.innerText = "°"
    weatherDescription.innerText = data.current.condition.text

}

export function getWeatherInfofetch(city){
    
    var weatherData
    var astronomy

    fetch("http://api.weatherapi.com/v1/current.json?key=2e710cbdcacf4a0290175251232707&q=" + city)
    .then(resp => resp.json())
    .then((data) => {
        writeToDOM(data)
        customBackground(data)
        weatherData = data
    })
    .catch(() => console.error("Error: WeatherAPI"))
    
    fetch("https://api.weatherapi.com/v1/forecast.json?key=2e710cbdcacf4a0290175251232707&q=" + city + "&days=7&aqi=no&alerts=no")
    .then(resp => resp.json())
    .then((data) => createForecast(data))
    .catch(() => console.error("Error: ForecastAPI"))

    
    fetch("https://api.weatherapi.com/v1/astronomy.json?key=2e710cbdcacf4a0290175251232707&q=" + city + "&days=7&aqi=no&alerts=no")
    .then(resp => resp.json())
    .then(data => astronomy = data)
    .then(() => {moreInfoWriteToDOM(weatherData, astronomy)})
    .catch(() => console.error("Error: AstronomyAPI"))
    
    

}

function customBackground(data) {

    if (data.current.precip_mm > 0 && data.current.is_day == 1){
        tempContainer.style.backgroundImage = 'url(../images/sunny-rain.jpg)'
        temperature.style.color = 'black'
        degreesSymbol.style.color = 'black'
        weatherDescription.style.color = 'black'
        return
    }
    
    if (data.current.precip_mm <= 0 && data.current.is_day == 1){
        tempContainer.style.backgroundImage = 'url(../images/sunny.jpeg)'
        temperature.style.color = 'black'
        degreesSymbol.style.color = 'black'
        weatherDescription.style.color = 'black'
        return
    }

    if (data.current.precip_mm > 0 && data.current.is_day == 0){
        tempContainer.style.backgroundImage = 'url(../images/dark-rain.jpg)'
        temperature.style.color = '#89bbfe'
        degreesSymbol.style.color = '#89bbfe'
        weatherDescription.style.color = '#89bbfe'
        return
    }

    if (data.current.precip_mm <= 0 && data.current.is_day == 0){
        tempContainer.style.backgroundImage = 'url(../images/dark.jpg)'
        temperature.style.color = '#89bbfe'
        degreesSymbol.style.color = '#89bbfe'
        weatherDescription.style.color = '#89bbfe'
        return
    }
  
    

}


function main(){

    getWeatherInfofetch("London")
    searchBar.value = "London, GB"
}

main()