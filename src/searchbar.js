import { getWeatherInfofetch, searchBar } from "./index.js";
import citiesList from './cities.json' assert {type: 'json'};

const autocompleteContainersDiv = document.querySelector(".autocomplete-divs-container")
const mainDiv =  document.querySelector(".main-div")

function autocomplete(){

    autocompleteContainersDiv.innerHTML = ''
    
    let cityList = citiesList.filter(function(city){
    
       return city.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").startsWith(searchBar.value.toLowerCase())

    }) 

    
    
    for (let i = 0; i < 5 ; i++){
        try {
            
            const autocompleteButton = document.createElement("button")
            autocompleteButton.className = 'button-28'
            autocompleteButton.value = cityList[i].name
            autocompleteButton.innerText = cityList[i].name + ', ' + cityList[i].country
            autocompleteButton.addEventListener('click', () => citySelected(autocompleteButton))
            autocompleteContainersDiv.appendChild(autocompleteButton)

        } catch (TypeError){}
    }
        
}

searchBar.addEventListener('input', () => {(searchBar.value.length > 0) ? autocomplete() : {}})
mainDiv.addEventListener('click', () => {autocompleteContainersDiv.innerHTML = ''})


function citySelected(button){

    let cityName = button.value
    getWeatherInfofetch(cityName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
    autocompleteContainersDiv.innerHTML = ''
    searchBar.value = button.innerText


}

