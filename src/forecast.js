const forecastDiv = document.querySelector(".forecast-bar")


export function createForecast(data){
    
    forecastDiv.innerHTML = ""
    let forecastList = data.forecast.forecastday
    console.log(forecastList)

    for(let i = 0 ; i < forecastList.length; i++){
        
        forecastList[i].day.maxtemp_c

   
      
        const forecastDayDiv = document.createElement("div")
        forecastDayDiv.className = "forecast-day-div"

        const weatherIcon = document.createElement("img")
        weatherIcon.src =  forecastList[i].day.condition.icon

        const minTemp = document.createElement("p")
        const maxTemp = document.createElement("p")
        minTemp.innerText = Math.round(forecastList[i].day.mintemp_c)
        maxTemp.innerText = Math.round(forecastList[i].day.maxtemp_c)

        forecastDiv.appendChild(forecastDayDiv)
        forecastDayDiv.appendChild(weatherIcon)
        forecastDayDiv.appendChild(minTemp)
        forecastDayDiv.appendChild(maxTemp)
        
        
    }

}



