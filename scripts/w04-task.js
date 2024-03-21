/* LESSON 3 - Programming Tasks */

// Profile Object
let myProfile = {
    name: "Mikele Silva",
    photo: "images/me.jpg",
    favoriteFoods: [
      'Pizza',
      'Peruvian Arroz con Pollo',
      'Lomo Saltado',
      'Ice Cream'
    ],
    hobbies: [
      'Reading',
      'Hiking',
      'Gaming'
    ],
    placesLived: [
      {
        place: 'Huancayo, Peru',
        length: '1 year'
      },
      {
        place: 'Santiago, Chile',
        length: '2 years'
      }
    ]
  };
  
  // DOM Manipulation - Output
  
  // Name
  document.querySelector('#name').textContent = myProfile.name;
  
  // Photo with attributes
  let photo = document.querySelector('#photo');
  photo.src = myProfile.photo;
  photo.alt = myProfile.name;
  
  // Favorite Foods List
  let favoriteFoodsList = document.querySelector('#favorite-foods');
  myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    favoriteFoodsList.appendChild(li);
  });
  
  // Hobbies List
  let hobbiesList = document.querySelector('#hobbies');
  myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    hobbiesList.appendChild(li);
  });
  
  // Places Lived DataList
  let placesLivedDataList = document.querySelector('#places-lived');
  myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    placesLivedDataList.appendChild(dt);
    placesLivedDataList.appendChild(dd);
  });
  

