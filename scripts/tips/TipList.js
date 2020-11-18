/**TipList which renders individual tip objects as HTML and places on the DOM*/
import { useTip } from './TipDataProvider.js'
import { Tip } from './Tips.js' 

export const TipList = () => {

    // Get a reference to the <aside class= "tankTips"> element
    const contentElement = document.querySelector(".tankTips")
    //grabs copy on the tip list
    const allTheTips = useTip()
    //iterates through tip collect, translates objects to HTML, places HTML on DOM
    for (const tipObject of allTheTips){
       const tipHTML = Tip(tipObject)
       contentElement.innerHTML += tipHTML
     } 
}