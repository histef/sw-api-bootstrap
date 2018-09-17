

/******QUOTE SECTION*******/
const quotes = [
  {quote: 'Remember: Your focus determines your reality.', speaker: 'Qui-Gon Jinn'},
  {quote: 'You can’t stop change any more than you can stop the suns from setting.', speaker: 'Shmi Skywalker'},
  {quote: 'What if the democracy we thought we were serving no longer exists, and the Republic has become the very evil we have been fighting to destroy?', speaker: 'Padmé'},
  {quote: 'Attachment is forbidden. Possession is forbidden. Compassion, which I would define as unconditional love, is essential to a Jedi’s life. So you might say, that we are encouraged to love.', speaker: 'Anakin Skywalker'},
  {quote: 'Fear is the path to the dark side.', speaker: 'Yoda'}
  ]

function getQuote(){
  const jumbotron = document.querySelector('.lead');
  const quoteCredit = document.querySelector('.quote-credit');
  let randomIndex = Math.floor((Math.random()*5));

  jumbotron.textContent = `${quotes[randomIndex].quote}`;
  quoteCredit.textContent =  `${quotes[randomIndex].speaker}`;

}

const quoteBtn = document.querySelector('.btn-outline-secondary');
quoteBtn.addEventListener('click', getQuote);

/******FEATURED CHARACTERS SECTION******/
function getCharacters(){
  for (let i=0;i<3;i++){
    const addCardBody = document.querySelector('.cards');

    let randomPerson = Math.floor((Math.random()*87)+1);
    //fetch Star Wars API
    fetch(`https://swapi.co/api/people/${randomPerson}`)
      .then(checkStatus)
      .then( response => {
        //return response object
        return response.json();
      })
      .then(data => {
        console.log(data)

        let createCard = `
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-dash-title">${data.name}</h4>
                <p class="card-text">Birth Year: ${data.birth_year}</p>
                <p class="card-text">Gender: ${data.gender}</p>
                <p class="card-text">Height: ${data.height}</p>
                <a href="#" class="btn btn-outline-secondary">See Full Profile</a>
              </div>
            </div>
          </div>
        `

      addCardBody.innerHTML += createCard;
    })
    .catch( error => console.log(`ERROR: ${error}`))
  }
}

/********STARSHIP INFO********/
const starship = document.querySelector('.starship');
const starshipInfo = document.querySelector('.starship-info');
const starshipBtn = document.querySelector('.starship-btn');

starshipBtn.addEventListener('click', showDetails);

function getStarship() {
  let randomStarship = Math.floor((Math.random()*37)+1);

//fetch Star Wars API
  fetch(`https://swapi.co/api/starships/${randomStarship}`)
  .then(checkStatus)
    .then( response => {
      //return response object
      return response.json();
    })
    .then(data => {
      console.log(data);
      starship.textContent = `${data.name}`;
      starshipInfo.textContent =`
      Model: ${data.model}
      Manufacturer: ${data.manufacturer}
      Starship Class: ${data.starship_class}
      Hyperdrive Rating: ${data.hyperdrive_rating}`
    })
    .catch( error => console.log(`ERROR: ${error}`))
}

function showDetails(){
  if(starshipInfo.style.display === 'block'){
  starshipInfo.style.display = 'none';
  }
  else {
    starshipInfo.style.display = 'block';
  }
}

function checkStatus(response){
  if(response.ok){ //response object prop that will be true if we get response
    return response;
  } else {
      getStarship();
      getCharacters
  }
}

window.onload = function(){
  getCharacters();
  getStarship();
}

// NOTE: star wars person 17 is 'not found', 404 error

// TODO: Handle no duplicates
// TODO: Handle #17 (if no info exists)
//TODO: cursor:not-allowed for the buttons that don't work