/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        const img = document.createElement("img");
        h3.textContent = temple.templeName;
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};




/* async getTemples Function using fetch()*/
temples.forEach(templesElement => {
    let article = document.createElement("article");
    let h3 = document.createElement("h3");
    h3.textContent = templeName;
    let img = document.createElement("img");
    img.textContent = imageUrl;
    
});

/* reset Function */


/* filterTemples Function */


getTemples();

/* Event Listener */
