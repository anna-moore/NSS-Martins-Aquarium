const quoteCollection = [
    {
        text: "Many men go fishing all their lives without knowing it is not fish that they are after.",
        author: "Henry David Thoreau "
    },
    {
        text: "this is a quote text",
        author: "author name"
    }
]

export const useQuote = () =>{
    return quoteCollection.slice();  
}
