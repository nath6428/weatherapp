const temperature = document.querySelector(".degrees")
const degreesSymbol = document.querySelector(".degrees-symbol")
export const searchBar = document.querySelector(".search-bar")
const weatherDescription = document.querySelector(".weather-description")


function writeToDOM(data){
 
    temperature.innerText = data.current.temp_c
    degreesSymbol.innerText = "°"
    weatherDescription.innerText = data.current.condition.text
}

export function getWeatherInfofetch(city){
    
    fetch("http://api.weatherapi.com/v1/current.json?key=2e710cbdcacf4a0290175251232707&q=" + city)
    .then(resp => resp.json())
    .then((data) => writeToDOM(data))
    .catch(() => console.error("Error: WeatherAPI"))

}
