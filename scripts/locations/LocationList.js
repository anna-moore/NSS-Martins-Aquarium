// LocationList renders individual tip object as HTML and places on the DOM
import { useLocation } from './LocationDataProvider.js'
import { Location } from './Locations.js'

export const LocationList = () =>{
    //get a refernce to the <article class= "locationList"> element
    const contentElement = document.querySelector(".locationList")
    //grabs copy on the location list 
    const allTheLocations = useLocation ()
    // iterates through the location collection, translates objects to HTMl, placed HTML on DOM
    // for (const locationObject of allTheLocations){
    //     const locationHTML = Location(locationObject)
    //     contentElement.innerHTML +=locationHTML
    // }
    
    contentElement.innerHTML += `
    <article class="locations">
    ${allTheLocations.map(locationObject => Location(locationObject)).join("")}
    </article>
    `
}


