var bandOne = {
  name: 'Wild Ones',
  cost: 1200,
  date: 'July',
  distance: 200,
  events: 'wedding',
  genre: 'country',
  location: 'Florida',
  stars: 2.5,
};

var bandTwo = {
  name: 'Dyamo',
  cost: 1250,
  date: 'October',
  distance: 50,
  events: 'birthday',
  genre: 'rock',
  location: 'New York',
  stars: 4.8
};

var bandThree = {
  name: 'Silhouettes',
  cost: 2700,
  date: 'January',
  distance: 100,
  events: 'wedding',
  genre: 'country',
  location: 'North Carolina',
  stars: 2.9
};

var bandFour = {
  name: 'Rascal Flatts',
  cost: 2000,
  date: 'March',
  distance: 50,
  events: 'birthday',
  genre: 'country',
  location: 'Florida',
  stars: 3.9
};

var bandFive = {
  name: 'Crispy Lycans',
  cost: 2500,
  date: 'March',
  distance: 100,
  events: 'anniversary',
  genre: 'soft rock',
  location: 'North Carolina',
  stars: 4.5
};

var bandSix = {
  name: 'Smoldering Catastrophe',
  cost: 1500 ,
  date: 'May',
  distance: 100,
  events: 'birthday',
  genre: 'R&B',
  location: 'New York',
  stars: 4.2
};


var bandSeven = {
  name: 'Smooth Vulcans',
  cost: 1950,
  date: 'June',
  distance: 250,
  events: 'wedding',
  genre: 'R&B',
  location: 'Florida',
  stars: 4.4
};

var bandEight = {
  name: 'Lockjaw McGraw',
  cost: 2250,
  date: 'June',
  distance: 300,
  events: 'wedding',
  genre: 'country',
  location: 'North Carolina',
  stars: 4.5
};

var bandNine = {
  name: 'Cosmic Genitals',
  cost: 3000,
  date: 'August',
  distance: 200,
  events: 'wedding',
  genre: 'soft rock',
  location: 'Florida',
  stars: 3.8
};

var bandTen = {
  name: 'Atrophy Locust',
  cost: 1200,
  date: 'October',
  distance: 100,
  events: 'wedding',
  genre: 'rock',
  location: 'North Carolina',
  stars: 4.6
};

var bands = [bandOne, bandTwo, bandThree, bandFour, bandFive, bandSix, bandSeven, bandEight, bandNine, bandTen];



function findCountryBands () {
  var countryBands = [];
  for (var i = 0; i < bands.length; i++) {
    if (bands[i].genre === 'country') {
      countryBands.push(bands[i].name)
    }
  }
    console.log(countryBands);
};

function findRockBands () {
  var rockBands = [];
  for (var i = 0; i < bands.length; i++) {
    if (bands[i].genre === 'rock') {
      rockBands.push(bands[i].name)
    }
  }
    console.log(rockBands);
};

function findSoftRockBands () {
  var softRockBands = [];
  for (var i = 0; i < bands.length; i++) {
    if (bands[i].genre === 'soft rock') {
      softRockBands.push(bands[i].name)
    }
  }
    console.log(softRockBands);
};

function findRB () {
  var rbBands = [];
  for (var i = 0; i < bands.length; i++) {
    if (bands[i].genre === 'R&B') {
      rbBands.push(bands[i].name)
    }
  }
    console.log(rbBands);
};

function findThreeStars () {
  var moreThreeStar = [];
  for (var i = 0; i < bands.length; i++) {
    if (bands[i].stars > 3) {
      moreThreeStar.push(bands[i].name)
    }
  }
    console.log(moreThreeStar)
};

function lessThanThreeGrand () {
  var threeGrand = [];
  for(var i = 0; i < bands.length; i++) {
    if (bands[i].cost <= 3000) {
      threeGrand.push(bands[i].name)
    }
  }
    console.log(threeGrand)
};

function lessThanTwoGrand () {
  var twoGrand = [];
  for(var i = 0; i < bands.length; i++) {
    if (bands[i].cost <= 2000) {
      twoGrand.push(bands[i].name)
    }
  }
    console.log(twoGrand)
};

function lessThanOneGrand () {
  var oneGrand = [];
  for(var i = 0; i < bands.length; i++) {
    if (bands[i].cost <= 1000) {
      oneGrand.push(bands[i].name)
    }
  }
    console.log(oneGrand)
};

function findWeddings () {
  var weddingBands = []
  for (var i = 0; i < bands.length; i++) {
    if (bands[i].events === 'wedding'){
      weddingBands.push(bands[i].name)
    }
  }
    console.log(weddingBands)
};

function findBirthdays () {
  var birthdayBands = [];
  for (var i = 0; i < bands.length; i++) {
    if (bands[i].events === 'birthday') {
      birthdayBands.push(bands[i].name)
    }
  }
    console.log(birthdayBands)
};

function findAnniversary () {
  var anniversaryBands = []
  for (var i = 0; i < bands.length; i++) {
    if (bands[i].events === 'anniversary') {
      anniversaryBands.push(bands[i].name)
    }
  }
    console.log(anniversaryBands)
};

function addFields() {
  var number = document.getElementById(" ").value
}3
