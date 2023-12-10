console.log("Homework Part 1");

function checkType(parameter) {
  let result = typeof parameter;
  console.log(parameter + ` : ` + result);
}

let thisIsUndefined;
let boolean = 3 > 4;
checkType(null);
checkType(boolean);
checkType(5);
checkType("Hello");
checkType(thisIsUndefined);

// Homework Part 1 Class 03
