import { FishList } from "./fish/FishList.js"
import { TipList } from "./tips/TipList.js"
import { LocationList } from "./locations/LocationList.js"
import { QuoteList } from "./quotes/QuoteList.js"
import { mostHolyFish } from "./fish/FishDataProvider.js"
import { soldierFish } from "./fish/FishDataProvider.js"
import { nonHolyFish } from "./fish/FishDataProvider.js"

FishList()
TipList()
LocationList()
QuoteList()

//test of fish sorting
console.log("multiple of three",mostHolyFish(), "multiple of 5",soldierFish(), "regular fish",nonHolyFish())
 

