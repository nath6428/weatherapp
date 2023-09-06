const forecastDiv = document.querySelector(".forecast-bar")
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

export function createForecast(data){

    const d = new Date()
    let day = d.getDay()

    forecastDiv.innerHTML = ""
    let forecastList = data.forecast.forecastday

    for(let i = 0 ; i < forecastList.length; i++){
        
        day = (day + 1)%7
      
        const forecastDayDiv = document.createElement("div")
        forecastDayDiv.className = "forecast-day-div"
        
        const weekdayTag = document.createElement("p")
        weekdayTag.innerText = weekdays[day]

        const weatherIcon = document.createElement("img")
        weatherIcon.src =  forecastList[i].day.condition.icon
        
        const minMaxTempDiv = document.createElement("div")
        minMaxTempDiv.className = "min-max-temp-div"
    
        const minTemp = document.createElement("p")
        const maxTemp = document.createElement("p")
        minTemp.innerText = Math.round(forecastList[i].day.mintemp_c) + "°"
        maxTemp.innerText = Math.round(forecastList[i].day.maxtemp_c) + "°"

        forecastDiv.appendChild(forecastDayDiv)
        forecastDayDiv.appendChild(weekdayTag)
        forecastDayDiv.appendChild(weatherIcon)
        forecastDayDiv.appendChild(minMaxTempDiv)
        minMaxTempDiv.appendChild(maxTemp)
        minMaxTempDiv.appendChild(minTemp)

        
        
    }

}



