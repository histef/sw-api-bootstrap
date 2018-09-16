

for (let i=0;i<3;i++){
  const addCardBody = document.querySelector('.cards');

  let randomPerson = Math.floor((Math.random()*87)+1);
  //fetch Star Wars API
  fetch(`https://swapi.co/api/people/${randomPerson}`)
    .then( response => {
      //return response object
      return response.json();
    })
    .then(data => {
      // console.log(data)

      let createCard = `<div class="col-md-4">
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

  addCardBody.innerHTML += createCard;
  })
  .catch( error => console.log(`ERROR: ${error}`))
}



// NOTE: star wars person 17 is 'not found', 404 error

// TODO: Handle no duplicates
// TODO: Handle #17 (if no info exists)