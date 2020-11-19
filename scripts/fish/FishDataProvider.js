const fishCollection = [
    {
        name: "Bart",
        species: "Clownfish",
        length: 5,
        location: "Great Barrier Reef",
        food: "small invertebrates and algae",
        image: "clownfish.jpg"
    },
    {
        name: "Tom",
        species: "Goldfish",
        length: 3,
        location: "Neighbor's backyard pond",
        food: "Cheetos",
        image: "redGoldfish.jpg"
    },
    {
        name: "Barry",
        species: "Clown Loach",
        length: 6,
        location: "Borneo",
        food: "brine shrimp",
        image: "clown_loach.jpg"
    },
    {
        name: "Lucy",
        species: "Siamese Fighting Fish",
        length: 2.5,
        location: "Mekong Basin of Thailand",
        food: "bloodworm and daphnia",
        image: "siamese_fighting_fish.jpg"
    }
]

export const useFish = () =>{
    return fishCollection.slice();
}

//chapter 13 Big Fish, Little Fish&& this code filters fish by their length 
// if fish length is a multiple of three, then place in holyFish array
export const mostHolyFish = () => {
    const holyFish = []

    for (const fish of fishCollection) {
        if(fish.length % 3 === 0){
            holyFish.push(fish)
        }   
    }
    return holyFish
}

//if fish length is a multiple of five, then place in soldier array
export const soldierFish = () => {
    const soldiers = []
    for (const fish of fishCollection){
        if (fish.length % 5 === 0 ){
            soldiers.push(fish)
        }
    }  
    return soldiers
}

//If fish length is not a multiple of three or fish, then place in regularFish array
export const nonHolyFish = () => {
    const regularFish = []
    for(const fish of fishCollection){
        if (fish.length % 3 != 0 && fish.length % 5 != 0){
            regularFish.push(fish)
        }
    }
    return regularFish
}


