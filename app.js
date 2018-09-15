const card1 = document.querySelector('.cards').firstChild;
const card2 = document.querySelector('.cards').nextSibling;
const card3 = document.querySelector('.cards')[2];

const cards = document.querySelector('.card-body')


const randomPerson = Math.floor(Math.random()*(Math.floor(87)-Math.ceil(0)));
console.log(randomPerson)

// //fetch Star Wars API
// fetch(`https://swapi.co/api/people/${randomPerson}`)
//   .then( response=>{
//     //return response object
//     return response.json();
//   })
//   .then(logJSON=>{
//     console.log(logJSON);
//   })
//   .catch( error => console.log(`ERROR: ${error}`))


//cards.map(get a random character(randomPerson) then fetch the data for them
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