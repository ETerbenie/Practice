/* monthly finances */



var pegasusIncome = 1792;

/* method 1 */
var April = {
  carInsurance: 197,
  eatOut: 152,
  gas: 50,
  gym: 59,
  over: 108,
  foodBeverages: 153,
  foodGroceries: 100,
  foodSnacks: 33,
  rent: 465,
  miscellaneous: 20,
  netflix:  11
};

var May = {
  carInsurance: 198,
  eatOut: 106,
  gas: 48,
  gym: 59,
  over: 216,
  foodBeverages: 14,
  foodGroceries: 100,
  foodSnacks: 13,
  rent: 465,
  miscellaneous: 19,
  netflix:  11
};

// each month's cost
function monthlyCost(Month) {
  var sum = 0
  Object.keys(Month).forEach(key => {
    sum += Month[key]
  })
  return(sum)
};

// how much is left over from my income to cost
function afterCost (Month) {
  var leftover = pegasusIncome - monthlyCost(Month);
  return leftover;
};

// comparing two months
function whichIsMore (Month1, Month2) {
  if (Month1.carInsurance > Month2.carInsurance) {
    return "My car insurance was cheaper this month!"
  } else {
    return "Why was my car insurance cheaper last month?"
  }
};

//compares eating out property
function limitEatOut (Month) {
  if (Month.eatOut < 80) {
    return "Keep up the great work!"
  } else {
    return "Stop spending money"
  }
};

function createSavings (pegasusIncome) {
  var savings = (pegasusIncome / 40) * 4
  return savings;
};

createSavings(pegasusIncome);



/* Question 1: how do I name the parameters in my final strings if possible?
function whichIsMore (Month1, Month2) {
  if (Month1.carInsurance > Month2.carInsurance) {
    return `How was my car insurance cheaper during ${Month1} than ${Month2}`;
  } else {
    return `How was my car insurance cheaper during ${Month2} than ${Month1}`;
  }
};
whichIsMore (April, May); */
/* Question 2: Is this the best way to compare 2 objects and their properties?
 Object.compare = function (April, May) {
  for (var carInsurance in April) {
    if (April.carInsurance !== May.carInsurance);
      return false;
    switch (typeof (April[carInsurance])) {
      case 'price':
              if (!Object.compare(April.carInsurance, May.carInsurance))
      return false;
              break;
      default:
              if (April[carInsurance] != May[carInsurance])
              return false;
    }
  }
}; */
/* method 2 - longer version of monthlyCost(Month)
function monthlyCost (Month) {
  console.log((Month.carInsurance + Month.eatOut + Month.gas + Month.gym + Month.over + Month.foodBeverages + Month.foodGroceries + Month.foodSnacks + Month.miscellaneous  + Month.netflix))
};
monthlyCost(May); */






function waysToSave () {};
