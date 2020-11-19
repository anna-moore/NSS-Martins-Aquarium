/**FishList which renders individual fish objects as HTML*/
// import { useFish } from './FishDataProvider.js'
import { mostHolyFish } from './FishDataProvider.js'
import { soldierFish } from './FishDataProvider.js'
import { nonHolyFish } from './FishDataProvider.js'
import { Fish } from './Fish.js' 


export const FishList = () => {

    // Get a reference to the <article class= "fishList"> element
    const contentElement = document.querySelector(".fishList")
    //grabs copy on the fish list
    const holyFish = mostHolyFish()
    const soldier = soldierFish()
    const loser = nonHolyFish()
    //iterates through fish collect, translates objects to HTML, places HTML on DOM
    for (const fishObject of holyFish){
       const fishHTML = Fish(fishObject)
       contentElement.innerHTML += fishHTML
     } 
     for (const fishObject of soldier){
      const fishHTML = Fish(fishObject)
      contentElement.innerHTML += fishHTML
    }
    for (const fishObject of loser){
      const fishHTML = Fish(fishObject)
       contentElement.innerHTML += fishHTML
    }

}