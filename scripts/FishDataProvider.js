const fishCollection = [
    {
        name: "Bart",
        species: "Clownfish",
        length: 4,
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
