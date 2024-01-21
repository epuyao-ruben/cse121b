/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'R. Alejandro Epuyao';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/yourprofileimagename.jpg'

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}<strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `This is ${fullName}, but He forgot to add his photo`)

/* Step 5 - Array */
let favFoods = ['Pizza', 'Hotdog', 'Sushi', 'Pasta', 'Steak', 'Salad', 'Fruit', 'Burguers', ]

foodElement.innerHTML = favFoods;
let newfood = 'Chilean Asado';
favFoods.push(newfood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();                                 // :c
foodElement.innerHTML += `<br>${favFoods}`;