let namebutton = document.querySelector('#starwarsname');
let name = document.querySelector('#name');
let gender = document.querySelector('#gender')
let height = document.querySelector('#height')
let mass = document.querySelector('#mass')
let birthYear = document.querySelector('#birthYear')

function getNameInfo() {

  let randomNumber = Math.floor((Math.random() * 79) + 1)
  let api = 'https://swapi.co/api/people/' + randomNumber
  
  axios.get(api).then(function(response){
    updateApiInfo(response.data)
  })
}

function updateApiInfo(data) {
  name.innerText = data.name
  height.innerText = 'Height: ' + data.height
  mass.innerText = 'Weight: ' + data.mass
  birthYear.innerText = 'Birth Year: ' + data.birth_year
  gender.innerText = 'Gender: ' + data.gender
}

namebutton.addEventListener('click', getNameInfo);