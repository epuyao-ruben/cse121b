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
    hobbies: ['Reading', 'Go to Gym', 'Play Videogames', 'Watch Series']
}




/* Populate Profile Object with placesLive objects */
// myProfile.placesLived.push(
//     {
//         place : 'Osorno',
//         length : '13 years'
// })



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


/* Places Lived DataList */


