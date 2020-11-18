const locationCollection = [
    {
        image: "greatBarrierReef.jpg",
        alt: "Michaelmas Cay, Great Barrier Reef, Queensland © Tourism and Events Queensland",
        name: "Great Barrier Reef",
        url: "https://www.australia.com/en-us/places/cairns-and-surrounds/guide-to-the-great-barrier-reef.html",
        urlName:"Australian Guide to the Great Barrier Reef",
        description: "This is information about the Great Barrier Reef"  
    },   
    {
        image: "Borneo.jpg",
        alt: "shallow water with vegetation, house on stilts in the middle ground, the island of Borneo in the background",
        name: "Borneo",
        url: "http://www.pbs.org/edens/borneo/awesome.html",
        urlName: "PBS article on Boreno",
        description: "This is the third largest island in the world and contains one of the oldest rainforest."
    },
    {
        image:"MekongRiver.jpg",
        alt: "a river boat on muddy brown water with lush green vegetation on either side of the river",
        name: "Mekong River",
        url:"https://www.britannica.com/place/Mekong-River",
        urlName:"Britannica article on Mekong River",
        description:"The world's twelfth longest river at 4,350 km (2,703 mi)."
    }
]
    

export const useLocation = () =>{
    return locationCollection.slice();
}


