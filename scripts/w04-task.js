/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let photoElement = document.querySelector('#photo');
let myProfile = {
    name: "R. Alejandro Epuyao",
    photo: {
        src: "images/yourprofileimagename.jpg",
        alt: "My Profile Picture"
    },
    favoriteFoods: ['Pizza', 'Hotdog', 'Sushi', 'Pasta', 'Steak', 'Salad', 'Fruit', 'Burguers'],
    hobbies: ['Reading', 'Go to Gym', 'Play Videogames', 'Watch Series'],
    placesLived : []
}




/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place : 'Osorno, X Region, Chile',
        length : '13 years'
    },
    {
        place : "Castro, X Region, Chile",
        length : "6 years"
    },
    {
        place : "Quilpue, V Region, Chile",
        length : "6 years"
    },
    {
        place : "Santiago, Dominican Republic",
        length : "2 years"
    },
    {
        place : "Limache, V Region, Chile",
        length : "9 years"
    }
    )



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
photoElement.src = myProfile.photo.src;
photoElement.alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    document.querySelector("#favorite-foods").appendChild(li);
}
)

/* Hobbies List */
myProfile.hobbies.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    document.querySelector("#hobbies").appendChild(li);
}
)
/* Places Lived DataList */
myProfile.placesLived.forEach(placesLived => {
    let dt = document.createElement("dt");
    dt.textContent = placesLived.place;
    let dd = document.createElement("dd");
    dd.textContent = placesLived.length;

    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
})

