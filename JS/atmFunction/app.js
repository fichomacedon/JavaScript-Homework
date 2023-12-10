console.log("Homework Part 3 Class 03");

function atmFunction() {
  let input = prompt("Type in the wanted amount you want to withdraw");
  let userInput = Number(input);
  let moneyBalance = 20000;
  if (Number.isNaN(userInput)) {
    console.log("Type in valid number");
    return;
  }
  if (userInput <= moneyBalance) {
    let result = moneyBalance - userInput;
    console.log("You have withdrawn " + userInput);
    console.log(" You have left " + result + " on your account");
  } else if (userInput > moneyBalance) {
    console.log("Not enough money");
  } else {
    ("Try again later");
  }
}
atmFunction();
