/** location which renders individual location objects as HTML (translator)*/
export const Location = (location) => {
    return `
        <section class="locationList">
            <div><img class="location__image" src="./media/${location.image}" alt="${location.alt}" ></div>
            <div class="location__name">${location.name}</div>
            <div class="location__url"> <a href="${location.url}">${location.urlName}</a></div>
            <div class="location__desc">${location.description}</div>
        </section>
    `
}