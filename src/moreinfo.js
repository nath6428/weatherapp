const moreInfoTexts = document.querySelectorAll(".moreinfo-text-api")
const moreInfoDOM = document.querySelector(".moreinfoDOM")


export function moreInfoWriteToDOM(data, astronomy){
        
    astronomy = astronomy.astronomy
    console.log(data, astronomy)
    for(let i = 0; i < 6; i++){
        
        let moreInfoList = [

            astronomy.astro.sunrise,
            data.current.precip_mm + " mm",
            data.current.wind_kph + " km/h",
            astronomy.astro.sunset,
            data.current.feelslike_c + "°",
            data.current.humidity + "%",
        ]
        
        moreInfoTexts[i].innerText = moreInfoList[i] 
    
    
    }
}