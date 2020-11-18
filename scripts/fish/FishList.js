/**FishList which renders individual fish objects as HTML*/
import { useFish } from './FishDataProvider.js'
import { Fish } from './Fish.js' 

export const FishList = () => {

    // Get a reference to the <article class= "fishList"> element
    const contentElement = document.querySelector(".fishList")
    //grabs copy on the fish list
    const allTheFish = useFish()
    //iterates through fish collect, translates objects to HTML, places HTML on DOM
    for (const fishObject of allTheFish){
       const fishHTML = Fish(fishObject)
       contentElement.innerHTML += fishHTML
     } 
}