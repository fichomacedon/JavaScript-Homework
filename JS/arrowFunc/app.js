// console.log(`Hello`);

// const numOfDigits = (number) => Math.abs(number).toString().length;

// console.log(numOfDigits(-20));

// const evenOrOdd = (number) => {
//   if (number % 2 === 0) return `Even`;
//   else {
//     return `Odd`;
//   }
// };

// console.log(evenOrOdd(3));

// const positiveOrNegative = (number) => {
//   if (number > 0) return `Positive`;
//   if (number < 0) return `Negative`;
//   else {
//     return `neither positive nor negative`;
//   }
// };

// console.log(positiveOrNegative(0));

// const allInOne = (number) => {
//   return `${numOfDigits(number)} Digits, ${evenOrOdd(
//     number
//   )}, ${positiveOrNegative(number)}`;
// };
// console.log(allInOne(-25));

const colorChangeEl = document.querySelector(`#element`);
const changeBtn = document.querySelector(`#changeBtn`);
const fontSizeInput = document.querySelector("#fontSize");
const colorChangeInput = document.querySelector("#color");

const colorChange = (element, color = "black") => {
  element.style.color = color;
};

colorChange(colorChangeEl);

const textSize = (element, size = "24") => {
  element.style.fontSize = size + "px";
};

textSize(colorChangeEl);

const resetInputs = (fontSizeInput, colorChangeInput) => {
  fontSizeInput.value = "";
  colorChangeInput.value = "";
};
changeBtn.addEventListener("click", () => {
  colorChange(colorChangeEl, colorChangeInput.value);
  textSize(colorChangeEl, fontSizeInput.value);
  resetInputs(fontSizeInput, colorChangeInput);
});
