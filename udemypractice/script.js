/*
var name = 'Erick';
console.log(name);
var lastName = 'Terbenie';
console.log(lastName);
var age = 26;
console.log(age);
var fullAge = true;
console.log(fullAge);
*/


//Lecture 2


/*
var name = 'John';
var age = 28;
var job = 'Coder';
var isMarried = true;
console.log(name + ' is ' + age + ' years old, and is a ' + job + '.' + ' Is John married? ' + isMarried);
age = 'Twenty-eight';
job = 'Developer';
console.log(name + ' is ' + age + ' years old, and is a ' + job + '.' + ' Is John married? ' + isMarried);
//var lastName = prompt('What is your last name?');
//console.log(name + ' ' + lastName);
alert(name + ' is ' + age + ' years old, and is a ' + job + '.' + ' Is John married? ' + isMarried);
*/


// Lecture: Operators

/*
var now = 2016;
var birthYear = now - 26;
birthYear = now - 26 * 2;
//2016 - 52
//1964
console.log(birthYear);
var ageJohn = 30;
var ageMark = 30;
ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26
//ageJohn = 26
ageJohn++;
//This is ageJohn = ageJohn + 1;
ageMark *= 2;
//This is ageMark = ageMark * 2;
console.log(ageJohn);
console.log(ageMark);
*/

////////////////////////////////////////////////////////////////////
//Lecture: if/else statements


/*
var name = 'John';
var age = 26;
var isMarried = 'no';
if (isMarried === 'yes') {
    //This is the condition
//if (false{condition}) is how it's being read because isMarried is no
    console.log(name + ' is married');
} else {
    console.log(name + ' will hopefully marry soon');
}
isMarried = false;
if(isMarried) {
  console.log('YES!');
} else {
  console.log('NO!');
}
//== does type coercion (is the conversion of one type of object to a new object of a different type with similar content.
//Tapestry frequently must coerce objects from one type to another. A common example is the coercion of string "5" into an integer 5 or a double 5.0
// === does not
/*
In the exmaple below the condition is true because type coercion is occurring. The number 23 is turning into a string because jjavascript automatical spits out a string
regardless of it being a number (ex.
var name = 'John';
var age = 26;
console.log(name + age) this would be spitting out a string even though age equals a number
it spits out 'John26'
*/

//Therefore the example below is true because == allows the 23 to turn into a string ('23') and thus equaling each other ('23' = '23')
//if === was used it wouldn't work because it doesn't do type coercion, which means it stays a number and wouldn't equal

/*
if (23 == '23') {
    console.log('Something to print...');
}
*/


///////////////////////////////////////////////////////////////////////////////
//Lecture: Boolean Logic and Swicth

/*
var age = 16;
if (age < 20) {
  console.log('John is a teenager');
} else {
  console.log('John is a man.')
}
AND (&&) => true if ALL are true
OR (||) => true if ONE is true
NOT (!) => inverts true/false value
var age = 16;
age >= 20; ---> false
age < 30;  ---> true
!(age < 30);  ---> false
age >= 20 && age < 30; ---> returns false
age >= 20 || age < 30; ---> returns true
*/

/*
var age = 20;
if (age < 20) {
  console.log('John is a teenager');
} else if (age >= 20 && age < 30) {
  console.log('John is a young man');
} else {
  console.log('John is a man.');
}
var job = 'Developer';
job = prompt('What does John do?');
switch (job) {
  case 'teacher':
    console.log('John teaches kids.');
      break;//<---- this break statement in case this is the correct case, we need to break out and finish the switch statment, once correct we dont need the rest of the sswitch state,emt
  case 'driver':
    console.log('John drives a cab in Lisbon.');
      break;
  case 'cop':
    console.log('John helps fight crime.');
      break;
  default:
    console.log('John does something else.');
}
*/



































///////////////////////////////////////////////////////////////////////
//Lecture: Coding Challenge

//p with highest value of his height + 5x his age wins
/*
var ageJohn = 29;
var ageMike = 24;
var ageAdrian = 29;
var heightJohn = 72;
var heightMike = 67;
var heightAdrian = 72;
var playGameJ = heightJohn + (ageJohn * 5);
var playGameM = heightMike + (ageMike * 5);
var playGameA = heightAdrian + (ageAdrian * 5);
console.log(playGameJ);
console.log(playGameM);
console.log(playGameA);
if (playGameJ > playGameM) {
  console.log('John is the winner!');
} else {
  console.log('Mike is the winner!');
}
if (playGameJ > playGameM && playGameJ > playGameA) {
  console.log('John is the winner!');
} else if (playGameM > playGameJ && playGameM > playGameA){
  console.log('Mike is the winner!');
} else if (playGameA > playGameJ && playGameA > playGameM){
  console.log('Adrian is the winner!');
} else {
  console.log('It\'s a draw.');
}
*/

/*
Solution
var heightJohn = 172;
var heighMike = 165;
var ageJohn = 26;
var ageMike = 29;
var scoreJohn = heightJohn + 5 * ageJohn;
var scoreMike = heighMike + 5 * ageMike;
if (scoreJohn > scoreMike) {
  console.log('John wins the game with ' + scoreJohn + ' points!');
} else if (scoreMike > scoreJohn) {
  console.log('Mike wins the game with ' + scoreMike + ' points!');
} else  {
  console.log('There is a draw.');
}
var heightMary = 158;
var ageMary = 31;
var scoreMary = heightMary + 5 * ageMary;
if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
  console.log('John is the winner with ' + scoreJohn + ' points!');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
  console.log('Mike wins the game with ' + scoreMike + ' points!');
} else if (scoreMary > scoreJohn && scoreMary > scoreJohn) {
  console.log('Mary wins the game with ' + scoreMary + ' points!');
} else {
  console.log('It\'s a draw.');
}
 */


 ///////////////////////////////////////////////////////////////////////////////
//Lecture: Functions

/*
function calculateAge (yearOfBirth) {
  var age = 2016 - yearOfBirth;
  return age;
}
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
function yearUntilRetirement (name, year) {
  var age = calculateAge (year);
  var retirement = 65 - age;
  if (retirement >= 0) {
  console.log(name + 'retires in  ' + retirement + ' years.');
} else {
  console.log( name + ' has already retired.');
  }
}
yearUntilRetirement ('John', 1990);
yearUntilRetirement ('Mike', 1969);
yearUntilRetirement ('Mary', 1948);
*/

/* Improve this verison of it
function yearUntilRetirement (name, year) {
  var age = calculateAge (year);
  var retirement = 65 - age;
  if (retirement >= 65) {
    console.log('Already retired for ' + (retirement - 65) + ' years!')
  } else {
  console.log(name + 'retires in  ' + retirement + ' years.');
  }
}
yearUntilRetirement ('John', 1990);
yearUntilRetirement ('Mike', 1969);
yearUntilRetirement ('Mary', 1948);
*/


///////////////////////////////////////////////////////////////////////////////
// Lecture: Staements and expressions
/*
function someFunction (parameter) {
  //code
} // <-- this is a function staement
 var someFunction = function (parameter) {
   //code
 } //<-- this is a function expression
 //the difference is the expression produces a value, while a statement just poerforms an action
//expresisons
3 + 4;
var x = 3;
//produces an outcomes
//statements
if (x====5) {
  // do something
} // no vlaue, just an sction
*/


////////////////////////////////////////////////////////////////////////////////
//Lecture: Arrays

/*
var names = ['John', 'Mike', 'Adrian'];
var years = new Array(1990, 1969, 1948);
console.log(names[1]);
names[1] = 'Ben';
console.log(names);
var john = ['John', 'Smith', 1990, 'designer', true];
john.push('blue');// <--push adds an elemetn at the end of an array
john.unshift('Mr.'); //<-- unshift adds an element at the beginning of an array
john.pop();// <-- doesn't accept parameteres or arguements because this removes the last element of an array
john.pop();// <-- doesn't accept parameteres or arguements because this removes the last element of an array
john.shift(); // removes an element from the beginning of an array
console.log(john);
alert(john.indexOf('Smith')); // <-- this returns the position of the element that we pass into it, we have to store it in a value or alert
// the most important use of indexOf is to see if a certain element is or not inside of an array
//let's find out if John is a teacher or not (if the element if not there it default outputs -1)
if (john.indexOf('teacher') === -1) {
  console.log('John is not a teacher.');
}
*/

/////////////////////////////////////////////////////////////////////////////////
//Lecture: Objects and Properties (objects the most important in JavaScript language)

//in objects we have key valued pairs, which mean that each value has a name which is then the key and we use objects to group together different variables
//that belong together and which have no particular order (objects have no order in defining variables, while arrays predominately focus on order(index))

//object literal
var john = {
    name: 'John',  // name in this sentence is a KEY and 'John' here is the value (key - value pair)
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john);

//to retrive an element from this object, we're not going to use numbers because order doesn't matter
//first way - dot notation

console.log(john.lastName);
console.log(john['lastName']); // <--using square brackets like arrays, inputting the key as a string in brackets

//create a varioable which has the name of the key we want to retrieve
var xyz = 'job';// <-- we stored the key as a variable to retrieve
console.log(john[xyz]);


/////////////////////////////////////////////////////////////////////////////
// Lecture: Execution contents and the execution stack (Order on how things are run)


/*
All JS needs to run in an environment, and those environments are known as execution contexts (EC). Imagine EC like a box/container which
stores variables and a piece of our code is evaluated and executed.
The default EC is always the Global Execution Context (GEC) - all the code not inside of any function is executed.
EC think of it as an object, so GEC is associated with the global object which in the browser would be the window object. Everything we declare in the GC auto attaches to the window object in browser
Declaring a variable called lastName is the same thing as window.lastName (lastName === window.lastName)
var name = 'John';
function first () {
  var a = 'Hello!'; <- this gets stored in the first Ec (the one containinng first();)
  second ();
  var x = a + name;
}
function second () {
  var b = 'Hi!'; <- this is stored in the second EC
  third ();
  var z = b + name;
}
function third () {
  var x = 'Hey!';
  var z = c + name;
}
first ();
GEC is not for code within a function, a code within a function it gets it's own EC
var name = 'John'; <- this isn't inside of a function so it's considered GEC
function first () <- this is also considered a GEC b/c it's not in functiom
function second () <- '                                                   '
function third () <- '                                                    '
first (); <- we call the very first function, it gets it's new EC
so the way it works is the following:
Execution Context (this is third();)
________________________________
Execution Context (this is where second (); comes into play since it's the second function)
________________________________
Execution Context (this is where first(); comes into play, it's the 1st function so the EC is the first one that goes ontop of GEC for the execution stack)
________________________________
Golbal Execution Context
________________________________
Execution Stack
////////////////////////////////
//Lecture: Everything is an object:Inheritance and the prototpy changing
/*
2 big types in JS
Primitives:
Numbers, strings, booleans, undefinedm and null
Objects:
eveything else (objects are lmost eveything in J)
Object-Oriented Programming
- Objects intractiing ith one another through methods and properties;
- Used to store data, tructre applications into modules and keeping code clean.
Inheritance:
Everyone object in JS has the protype property which allows other objects to inherit 
properties of other objects that tend relate to them  ex:
 Person has properties and atlecthc has properties, They use the protype property to join the other properties together
We plaved whatever we want othr objects to inherit in this prtype property and this allows other objects to inherit that particular
inormation hat inside of the prototype
 constuctor (blue print for other similar objects)
*Constructor or Prototype*
 Person = {
    name: 
    yearOfbirth:
    job:
    calculateAge():
}
*Instances*
var jane, var mark, var john are all instances from the blueprint from the constructors 
*Exmaple of Inheritance (when oe object is based on another object, when one bject gets
access to another objects properties and methods)*
*Prototype Summary*
-Every JS objct has a prototype property, which makes inheitance possible in JS.
-The prototype property of an object is where we put methods and properties that we want othe objects to inherit 
- The Constructor's prototype property is NOT the prototype of the Constructor itself, it's the prototype of ALL instances that are created through inspect
-When a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves
 on to the object's prototype. This continues until the method is found: prototype chain.
 ///////////////////////////////////////////////
 // Lecture : Creating Objects: Function Constructors 
 
 // Function constructor
var john = {
  name: 'John',
  yearOfbirth: 1990,
  job: 'teacher'
};
//function constrcutors are always written with a capital leading letter
var Person = function(name, yearOfbirth, job) {
  this.name = name;
  this.yearOfbirth = yearOfbirth;
  this.job = job;
}
//inheritance through prototype
Person.prototype.calculateAge = function () {
  console.log (2016 - this.yearOfbirth);
};
Person.prototype.lastName = 'Smith';
//instanciation (these objects are instances of the person object)
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');
john.calculateAge();
jane.calculateAge();
mark.calculateAge();
console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
///////////////////////////////////////////////
// Lecture: Creating Onjects: Object.Create
//Object.create
// no capital in the beginning bevause no function constructor
var personProto = {
  calculateAge: function () {
      console.log(2016 - this.yearOfbirth);
  }
};
//simply pass the object that we define to be the prototype object in object create
var john = Object.create (personProto);
john.name = 'John';
john.yearOfbirth = 1990;
john.job = 'teacher';
// we pass through a second agruement which is an object specifiying the data that we want to have in the object
var jane = Object.create (personProto,
  {
      name: { value: 'Jane' },
      yearOfbirth: { value: 1969 },
      job: { value: 'designer' }
});
/*
The difference between object.create and function constructor pattern is that the object.create builds an object that in
inherits directly from the one that we passed into the first arguement while on the otherhand the function constructor the
newly created onject inherits from the constructor's rototype property, that's the big difference. One of the biggest benefits
in object.create it allows us to implement a complex inheritance structure thats's easier than function contrustors because it
allows us to directly specify which object should be a prototype.
*/

////////////////////////////////////////////////////////////////
// Lecture: Primitives v Objects

////////////////////////////////////////////////////////////////
 // Lecture: Primitives v Objects

 Primitives (variable sholding Primitives hold the data inside of the variable itself)

 Objects (variables contained with objects do nto actually contain the object, they instdead contain the reference where the object is stored - just points to the object)

 */


//Primitives
// var a = 23;
// var b = a;
// a = 46;
//
// console.log(a);
// console.log(b);
//
//
// //Objects
// var obj1 = {
//   name: 'John',
//   age: 26
// };

// var obj2 = obj1; // here we didn't declare obj1 as a new variable, we just referenced it as a pointer for obj2 - it's the exact same object
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);
//
//
// //Functions
// var age = 27;
// var obj = {
//   name: 'Jonas',
//   city: 'Lisbon'
// };
//
// function change (a, b) {
//   a = 30;
//   b.city = 'San Fran';
// }
//
// change(age, obj);
//
// console.log(age);
// console.log(obj.city); // here the age actually remains 27 and not 30, because it is a primitive outside of the fucntion, where as the object is being pointed as a reference and is able to be changed


//Lecture: First Class funcions: Passing Fcuntions as Arguements

/*
- a function i san instance of the object types
- a function behaves like any other objects
- we can store functions in a variable
- we can pass a function as an arguement to another functions
- we can eturn a function from a function
*/

/*
var years = [1990, 1965, 1937, 2005, 1998];
function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
    return arrRes;
}
//callback function are functions that we pass into functions that will then call them later
function calculateAge(el) {
  return 2016 - el;
}
//arrayCalc(years, calculateAge);// we don't include the () inside of the arguement because we don't want it to be called initially but through arrayCalc - hence why it's called  acallback functions
function isFullAge(el) {
  return el >= 18;
}
function maxHeartRate (el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  } else {
    return -1;
  }
}
var ages = arrayCalc(years, calculateAge); //we need to store it in a variale othwrwise we won't be able to see interval
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);
*/


//Lecture: First Class Functions: Functions Returning Functions
//
// function interviewQuestion(job) {
//   if (job === 'designer') {
//     return function(name) {
//       console.log(name + ' , can you please explain what UX design would be ')
//     }
//   }
// }


///////////////////////////////////////////////////////////
//Lecture: Closures

/*
function retirement (retirementAge) {
  var a = ' years left until retirement.';
  return function (yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}
var retirementUS = retirement(66);
retirementUS(1990);
//Closures - an inner function has always access to the variable sand parameters of its outer function, even after the outer function has returned
var retirementGermany = retirement(65);
retirementGermany(1990);
var retirementIceland = retirement(67);
retirementIceland(1990);
function interviewQuestion(job) {
  return function (name) {
    if(job === 'designer') {
      console.log(name + ' , can you please explain what UX design is?');
    } else if (job === 'teacher') {
      console.log('What subject do you teach, ' + name + ' ?');
    } else {
      console.log('Hello ' + name + ' , what do you do?');
    }
  }
}
interviewQuestion('teacher')('John');
var interviewTeacherQuestion = interviewQuestion('teacher');
interviewTeacherQuestion('John');
*/



///////////////////////////////////////////////////////
//Lecture: Bind, Call, and Apply

var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if(style === 'formal') {
      console.log('Good ' + timeOfDay + ' , Ladies and gentlmen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
    } else if (style === 'friendly') {
      console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
    }
  }
}


var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer',
};

john.presentation('formal' , 'morning');

john.presentation.call(emily, 'friendly', 'afternoon'); //method borrowing, using a method from another object

//john.presentation.apply(emily, ['friendly', 'afternoon']);

//bind doesn't immediately call functions but instead ti generates a copy of the function that we can store somewhere ( a function with present arguements)
//we have to store the function into a variable

var johnFriendly = john.presentation.bind(john, 'friendly'); // present arguements, friendly will be a permanenet areguement in this function 

//the bind method returns a function and gets stored in the johnFriendlyvariable
johnFriendly('morning'); // only one arguement left to be set because we already set friendly within the variable already
johnFriendly('night');







 


*/
