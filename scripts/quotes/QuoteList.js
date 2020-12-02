import { useQuote } from "./QuoteDataProvider.js"
import { Quote } from "./Quotes.js"

export const QuoteList = () =>{
    //Get a reference to the <artcile class="quotes"> element 
    const contentElement = document.querySelector(".quotes")
    //Grab a copy on the quote list
    const allTheQuotes = useQuote()
    //iterates through quote collection, translates objects to HTML, place HTML on DOM
    // for(const quoteObject of allTheQuotes){
    //     const quoteHTML = Quote(quoteObject)
    //     contentElement.innerHTML += quoteHTML
    // }
    //replace for ..of with map()
    contentElement.innerHTML+= `
        <article class="quotes">
            ${allTheQuotes.map(quoteObject => Quote(quoteObject)).join("")}
        </article>
        `
} 
