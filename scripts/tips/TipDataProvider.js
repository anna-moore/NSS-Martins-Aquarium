const tipCollection = [
    {
        tip: "Clean your tank every 14 days."
    },
    {
        tip: "For freshwater tanks, check the level of salinty weekly"
    },
    {
        tip: "This is a tip"
    },
    {
        tip:"This is a tip"
    }
]

export const useTip = () =>{
    return tipCollection.slice();
}