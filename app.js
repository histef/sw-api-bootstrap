
// const cards = document.querySelectorAll('.card');
let createCard;


for (let i=0;i<3;i++){

  let randomPerson = Math.floor(Math.random()*(Math.floor(87)-Math.ceil(0)));
  //fetch Star Wars API
  fetch(`https://swapi.co/api/people/${randomPerson}`)
    .then( response => {
      //return response object
      return response.json();
    })
    .then(data => {
      console.log(data)

      createCard = `<div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h4 class="card-dash-title">${data.name}</h4>
              <p class="card-text">Birth Year: ${data.birth_year}</p>
              <p class="card-text">Gender: ${data.gender}</p>
              <p class="card-text">Height: ${data.height}</p>
              <a href="#" class="btn btn-outline-secondary">See Profile</a>
            </div>
          </div>
        </div>
  `
  const addCardBody = document.querySelector('.cards');
  addCardBody.innerHTML += createCard;
  })
  .catch( error => console.log(`ERROR: ${error}`))
}

// NOTE: star wars person 17 is 'not found', 404 error


//populate card-dash-title card-text)

   // <div class=" cards row padding">
   //    <div class="col-md-4">
   //      <div class="card">
   //        <!-- <img src="#" alt="star wars" class="car-img-top"> -->
   //        <div class="card-body">
   //          <h4 class="card-dash-title">Luke</h4>
   //          <p class="card-text">Luke Skywalker, last jedi</p>
   //          <a href="#" class="btn btn-outline-secondary">See Profile</a>
   //        </div>
   //      </div>
   //    </div>