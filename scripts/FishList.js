/**FishList which renders individual fish objects as HTML*/
import { useFish } from './FishDataProvider.js'
import { Fish } from './Fish.js' 

export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList")
    const allTheFish = useFish()

    for (const fishObject of allTheFish){
       const fishHTML = Fish(fishObject)
       contentElement.innerHTML += fishHTML
     } 
}