/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result gets added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. after
that, it's the next player's turn.
- The first player to reach 100 points on GLOBAL score wins the Game
*/

var scores , roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;


dice = Math.floor(Math.random() * 6) + 1;



//document.querySelector('#current-' + activePlayer).textContent = dice; //textContent is one way of changing the content of an html element
//only set plain text so no html (strings)


//this exmaple below manipulates the variables and elemetns in the html
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; // <- in this way we are adding a string, if we write it wihtouth a strring, the JS parser would think it's some JS code and then get an error
// if we did textContent instead on innerHTML then we would have the text <em>.. pop up instead of a number

// we can also use querySelector to only read the elements from a webpage and store them inside of a variable

// var x = document.querySelector('#score-0').textContent;
// console.log(x);

//we can use querySelector to change the css elements

document.querySelector('.dice').style.display = 'none'; // this took away the dice image from the page, we use the styl;e mthod to access the css then choose what we want to change and set the value

/*
Event -  notificatiions that are sent to notify the code that something happened on the webpage
Examples: clicking a button, resizing a window, scrolling down or pressing a key
Event Listener - a function that performs an action based on a certain event. It waits for a sepcific event to happen
An event can only be processed or handled as soon as the execution stack is empty(which means all the functions have returned)
*/

// function btn() {
//   //do something here
// }
// btn();
//
//
//
// document.querySelector('.btn-roll').addEventListener('click', btn) //we don't add () because we want the eventlistner to call the function, it's now the callback function because it's not called by us but by another function
//click is just one type of event listener, reference https://developer.mozilla.org/en-US/docs/Web/Events for others
//first arguement to the addEventListener is the type of Event
//second part if the function that will bbe called when the event happens


//getElementById is faster than querySelector, but only works with id. We don't use css style like #, instead we put the id name in here
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';







//Anoyonomus function -  simplky a function that doesn''t have a name wso it can't be resued, can't use ot of this context, only here
document.querySelector('.btn-roll').addEventListener('click', function() {
  //1. Random number
  var dice = Math.floor(Math.random() * 6) + 1;

  //2. Display the result
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';


  //3. Update the Round score, but only if it isn't 1
if(dice !== 1) { //this does not do type coersion,  this means that the dice is different from 1
    //add score
    roundScore += dice; //this is the same as roundScore = roundScore + dice
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
    //next player ( this is an example of a ternary operator)
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    //this is the same as writing
      // if(activePlayer === 0) {
      //   activePlayer = 1;
      // } else {
      //   activePlayer = 0;
      // }
      roundScore = 0;

      nextPlayer();

      //we originally had this function but since we had to repeat it from eariler, we declare a function that states this instead and added it in

      // document.getElementById('current-0').textContent = '0';
      // document.getElementById('current-1').textContent = '0';
      //
      // document.querySelector('.player-0-panel').classList.toggle('active');
      // document.querySelector('.player-1-panel').classList.toggle('active');
      //
      // // document.querySelector('.player-0-panel').classList.remove('active');
      // // document.querySelector('.player-1-panel').classList.add('active');
      //
      // document.querySelector('.dice').style.display = 'none';

  }
});



document.querySelector('.btn-hold').addEventListener('click', function () {
    // 1. Add current round score tot he globla score
    scores[activePlayer] += roundScore; // same thing as scores[activePlayer] + roundScore;

    // 2. update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];



    //3. Check if player won the game

    if (scores[activePlayer] >= 100) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
      //next player
      nextPlayer();
    }


});




    //we originally had this function but since we had to repeat it from eariler, we declare a function that states this instead and added it in
//     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//     roundScore = 0;
//     document.getElementById('current-0').textContent = '0';
//     document.getElementById('current-1').textContent = '0';
//
//     document.querySelector('.player-0-panel').classList.toggle('active'); toggle is meant to add the class if it isn't there and remove if it's already there
//     document.querySelector('.player-1-panel').classList.toggle('active');
//     document.querySelector('.dice').style.display = 'none';
// });

//DRY - don't repeat yourself, it gets confuising and hard to maintain in case changes have to occur. So instead we make it into a function since we have to repeat

function nextPlayer () {
    //Next Player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}
