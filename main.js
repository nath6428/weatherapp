




function getWeatherInfofetch(city){
    
    fetch("http://api.weatherapi.com/v1/current.json?key=2e710cbdcacf4a0290175251232707&q=" + city)
    .then(resp => resp.json())
    .then((data) => console.log(data.current.temp_c))
    .catch(() => console.log("Error"))

}

getWeatherInfofetch("")
