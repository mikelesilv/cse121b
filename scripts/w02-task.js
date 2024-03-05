/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Mikele Silva';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/me.jpg'; // Replace 'yourprofileimagename.png' with your actual image filename

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
const favFoods = ['Pizza', 'Peruvian Arroz con Pollo', 'Lomo Saltado'];

// Modify HTML element to display favorite foods array
foodElement.innerHTML = favFoods.join('<br>');

// Add another favorite food item
const anotherFavFood = 'Ice Cream';
favFoods.push(anotherFavFood);
foodElement.innerHTML += `<br>${anotherFavFood}`;

// Remove first element in the favorite food array
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

// Remove last element in the favorite food array
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;
