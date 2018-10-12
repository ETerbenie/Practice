var relationshipQuote = ["Being alone doesn't make you sad, believe in yourself", "Being alone makes you learn about yourself", "Learning to love yourself is important before you love someone else", "Truth is everybody is going to hurt you: you just gotta find the ones worth sufffering for", "How people treat you is their karma: how you react is yours", "When a woman is talking to you, listen to what she says with her eyes", "The beginning of love is to let those we love be perfectly themselves, and not to twist them to fit our own image. Otherwise we love only the reflection of ourselves we find in them"];

var healthQuote = ["Your body is a temple, treat it as such!", "What you have inside of you, reflects tot he world around you", "Gym time!", "No matter how much it gets abused, the body can restore balance, the first rule is to stop interfering with nature", "There is no one giant step that does it, it's a lot of little steps", "Those who think they have no time for healthy eating...will sooner or later have to find time for illness", "Health is a state of being that's a reflection of how you view your outside world", "The food you eat can either be the safest and most powerful form of medicine, ot the slowest form of poison"];

var careerQuote = ["It doesn't matter how slowly you go as long as you do not stop", "Time is the only obstacle", "If you want to achieve greatness, stop asking for permission", "Find out what you like doing best, and get someone to pay you for doing it", "The truth is that our finest moments are most likely to occur when we are feeling deeply uncomfortable, unhappy, or unfulfilled - For it is only in such moments, propelled by our discomfort, that we are likely to step out of our ruts and start searching for different ways or truer answers", "Write your own book instead of reading someone else's book about success"];

var financeQuote = ["hey"];

var negativeQuote = ["The speed of your success is limited only by your dedication and what you're willing to sacrifice"];

var positivequote = ["quote 1", "quote 2", "quote 3"];

var click = 0;

function addClick () {
  return (click++)
};

// Relationship Button
function getRelationshipQuote () {
  var randRelQuote = Math.floor(Math.random() * relationshipQuote.length)
  var randomRelationshipQuote = `${relationshipQuote[randRelQuote]}`
    return randomRelationshipQuote
};

function relationshipClick (relationshipQuote) {
  if (addClick() === 2) {
    alert(getRelationshipQuote())
  } else {
    alert("More Clicks Needed!")
  }
};


// Health Button
function getHealthpQuote () {
  var randHelQuote = Math.floor(Math.random() * healthQuote.length)
  var randomHealthQuote = `${healthQuote[randHelQuote]}`
    return randomHealthQuote
};

function healthClick (healthQuote) {
  if (addClick() === 2) {
    alert(getHealthpQuote())
  } else {
    alert("More Clicks Needed!")
  }
};


// Career Button

function getCareerQuote () {
  var randCarQuote = Math.floor(Math.random() * careerQuote.length)
  var randomCareerQuote = `${careerQuote[randCarQuote]}`
    return randomCareerQuote
};

function careerClick (careerQuote) {
  if (addClick() === 2) {
    alert(getCareerQuote())
  } else {
    alert("More Clicks Needed!")
  }
};

//Finance Button

function getFinanceQuote () {
  var randFinQuote = Math.floor(Math.random() * financeQuote.length)
  var randomFinanceQuote = `${financeQuote[randFinQuote]}`
    return randomFinanceQuote
};

function financeClick (financeQuote) {
  if (addClick() === 2) {
    alert(getFinanceQuote())
  } else {
    alert("More Clicks Needed!")
  }
};

//Negative Button

function getNegativeQuote () {
  var randNegQuote = Math.floor(Math.random() * negativeQuote.length)
  var randomNegativeQuote = `${negativeQuote[randNegQuote]}`
    return randomNegativeQuote
};

function negativeClick (negativeQuote) {
  if (addClick() === 2) {
    alert(getNegativeQuote())
  } else {
    alert("More Clicks Needed!")
  }
};


// Positive Button

function getPositiveQuote () {
  var randPosQuote = Math.floor(Math.random() * positiveQuote.length)
  var randomPositiveQuote = `${positiveQuote[randPosQuote]}`
    return randomPositiveQuote
};

function positiveclick (positiveQuote) {
  if (addClick() === 2) {
    alert(getPositiveQuote())
  } else {
    alert("More Clicks Needed!")
  }
};

//
//
//
//
// var financeQuote = , , ,
//                     "Only buy something that you'd be perfectly happy to hold if the market shut down for 10 years", "You can make excuses and earn sympathy, or you can make money and earn admiration, the choice is always yours", "Do not focus on money, instead focus on a problem that needs to be solved for the world. Money will follow you as a bi-product"
//                     "Never spend your money before you have earned it"];




//document.getElementById('relationship').addEventListener('click',function(relationshipClick(relationshipQuote)) {
//});
