console.log("Homework Part 2");

function calculateDogYears() {
  let userInput = prompt("Enter the age:");
  let convertedToNumberInput = Number(userInput);
  let yearsType = prompt(
    "Convert to dog years (D) or human years (H)? (Enter uppercase 'D' or 'H')"
  );
  let resultOne = convertedToNumberInput * 7;
  let resultTwo = convertedToNumberInput / 7;
  if (Number.isNaN(convertedToNumberInput)) {
    console.log("Please enter a valid age.");
  }

  if (yearsType === "D") {
    console.log(`Your dog's age in dog years is: ` + resultOne);
  } else if (yearsType === "H") {
    console.log(`Your dog's age in human years is: ` + resultTwo);
  } else {
    console.log("Invalid input. Please enter uppercase 'D' or 'H'.");
  }
}

calculateDogYears();

// Dog years Calculator + bonus
