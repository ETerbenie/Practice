var theFlash = {
  name: 'Flash',
  superpower: 'super fast',
  age: 21,
  alias: 'Barry Alan',
  origin: 'Central City',
  gender: 'male'
};

var superMan = {
  name: 'Superman',
  superpower: 'super strength',
  age: 25,
  alias: 'Clark Kent',
  origin: 'Krypton',
  gender: 'male'
};

var wonderWoman = {
  name: "Wonderwoman",
  superpower: 'super strength',
  age: 23,
  alias: 'Diana',
  origin: 'Themyscira',
  gender: 'female'
};

var batMan = {
  name: 'Batman',
  superpower: 'none',
  age: 26,
  alias: 'Bruce Wayne',
  origin: 'Gotham',
  gender: 'male'
};

var aquaMan = {
  name: 'Aquaman',
  superpower: 'water powers',
  age: 25,
  alias: 'Arthur Curry',
  origin: 'Atlantis',
  gender: 'male'
};

var catWoman = {
  name: 'Catwoman',
  superpower: 'none',
  age: 24,
  alias: 'Irena Dubrovna',
  origin: 'Gotham',
  gender: 'female'
};

var superGirl = {
  name: 'Supergirl',
  superpower: 'super strength',
  age: 23,
  alias: 'Kara Kent',
  origin: 'Krypton',
  gender: 'female'
};

var superHeroes = [theFlash, superMan, wonderWoman, batMan, aquaMan, catWoman, superGirl];

/*
function findFemale (superHeroes) {
  var females = superHeroes.filter(function(superhero) {
    return superHeroes.gender === 'female';
  });
   console.log(females);
};
findFemale(superHeroes); */

function theOldestHero (superHeroes) {
  var oldestSuperHero = superHeroes[0];
  for (var i = 0; i < superHeroes.length; i++) {
    if (superHeroes[i].age > oldestSuperHero.age) {
      oldestSuperHero = superHeroes[i].name;
    }
   }
   return oldestSuperHero; // => Would return an object
   //return oldestSuperHero.name // => You may want this, depending on ur needs.
 };


function findFemale (superHeroes) {
  var female = [];
  for (var i = 0; i < superHeroes.length; i++) {
    if (superHeroes[i].gender === 'female') {
        female.push(superHeroes[i].name);
    }
  }
    console.log(female);
};


function noPowers (superHeroes) {
  var powers = [];
  for (var i = 0; i < superHeroes.length; i++) {
    if (superHeroes[i].superpower === 'none')
      powers.push(superHeroes[i].name)
  }
    console.log(powers);
};

function youngestHero (superHeroes) {
  var youngHero = superHeroes[0];
  for (var i = 0; i < superHeroes.length; i++) {
    if (superHeroes[i].age < youngHero.age) {
    youngHero = superHeroes[i].name
    }
  }
  return youngHero;
};
youngestHero (superHeroes);




/*
function theOldestHero (superHeroes) {
  var oldestSuperhero = 0;
  var oldestSuperhero = superHeroes[0].age
  for (var i = 0; i < superHeroes.length; i++) {
    if (superHeroes[i].age > oldestSuperhero) {
      oldestSuperhero = superHeroes[i].age;
    }
      return superHeroes
    }
  };
  theOldestHero (superHeroes);
*/
