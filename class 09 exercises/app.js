console.log("It is working");

/*
Exercise 1
*/
function numberDifference(number) {
  if (number > 13) {
    return (number - 13) * 2;
  } else {
    return 13 - number;
  }
}

let difference = numberDifference(15);

console.log(difference);

/* 
Exercise 2
*/

function closerToOneHundred(integerOne, integerTwo) {
  if (integerOne < 0) return "Invalid input";
  if (integerTwo < 0) return "invalid input";

  let integerOne1 = Math.abs(integerOne - 100);
  let integerTwo1 = Math.abs(integerTwo - 100);

  if (integerOne1 < integerTwo1) {
    return integerOne;
  }
  if (integerTwo1 < integerOne1) return integerTwo;
  else {
    return false;
  }
}

console.log(closerToOneHundred(30, 60));

/* 
Exercise 3
*/

// bobSalary = 1000;
// rent = 375;
// bills = 250;

function bobExpenses() {
  let bobSalary = 1000;
  let rent = 375;
  let bills = 250;

  let totalExpenses = rent + bills;
  let leftMoney = bobSalary - rent - bills;

  return `Bob has total expenses of ${totalExpenses} and he has ${leftMoney} till the end of the month`;
}

console.log(bobExpenses());

/*
Exercise 4
*/

function studentAverage(gradesArray) {
  let sum = 0;
  for (let i = 0; i < gradesArray.length; i++) {
    sum += gradesArray[i];
  }
  if (sum / gradesArray.length < 8) return `You did not passed`;
  return `You passed`;
}
gradesArr = [6, 9, 9, 10, 9];
console.log(studentAverage(gradesArr));

/*
Exercise 5
*/
let tenElArr = [null, undefined, "", NaN, false, "Positive", 2, true, "yes", 5];

function checkType(falsyArr) {
  let resultArr = [];
  for (let item of falsyArr) {
    if (item) resultArr.push(item);

    resultArr.push[item];
  }
  return resultArr;
}

console.log(checkType(tenElArr));

const filtertedTenArr = tenElArr.filter((el) => el);

/*
Exercise 6
*/

function calculateMin(numArray) {
  let counter = 0;

  let min = numArray[0];
  while (counter < numArray.length) {
    let currentNumber = numArray[counter];

    if (currentNumber < min) min = currentNumber;

    counter++;
  }

  return `, Min:${min}, `;
}
let numbersArray = [3, 5, 2, 10, 4, 3, 10, 5, 19, 23, 3];
console.log(calculateMin(numbersArray));

/*
Exercise 7
*/
function generateNumArray(num) {
  let resultArr = [];

  for (let i = 1; i <= num; i++) {
    if (i % 5 === 0) {
      resultArr.push(i * 10);
    } else {
      resultArr.push(i);
    }
  }

  return resultArr;
}
console.log(generateNumArray(500));

/*
Exercise 8
*/
