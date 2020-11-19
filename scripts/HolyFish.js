//sudo code for chapter 13 Big Fish, Little Fish
//This code filters fish by their length 
import { useFish } from "./fish/FishDataProvider"


pull fish data from data provider
dot notation for fish length 
export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of allTheFishArray) {
        if(fish === "multiple of three"){
            holyFish.push(fish)
        }
        else{
            dont push 
        }
    }

    return holyFish
}

export const soldierFish = (holyFish) => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []
    for (const fish of allTheFishArray){
        if (lenght is multiple of five){
            soldierFish.push(fish)
        }
        else {
            nothing
        }
    }
   
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []
    for(const fish of allTheFish){
        if (length is not mult of 3 or 5){
            regularFish.push(fish)
        }

    }
    return regularFish
}

display 
multiple of three/holyFish
multiple of five/soldiers
regularFish



splice for length 

for (const sock of socks) {
    if (sock === "brown") {
        brownSocks.push(sock)
    } else if (sock === "black") {
        blackSocks.push(sock)
    } else if (sock === "white") {
        whiteSocks.push(sock)
    }
}