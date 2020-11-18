/** Tip which renders individual fish objects as HTML (translator)*/
export const Tip = (tip) => {
    return `
        <section class="container--right">
            <div class="tips__name">${tip.tip}</div>
        </section>
    `
}