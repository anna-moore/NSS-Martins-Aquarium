/** Fish which renders individual fish objects as HTML (translator)*/
export const Fish = (fish) => {
    return `
        <section class="fish_card">
            <div><img  class="fish__image image--card" src="media/${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length} inches</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
    `
}