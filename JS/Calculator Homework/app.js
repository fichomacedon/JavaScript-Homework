console.log("its working")
const mainCalc = document.querySelector("#calculator");
console.log(mainCalc)
const inputDisplay = document.querySelector("#text");
console.log(inputDisplay)
const outputDisplay = document.querySelector("#result");
console.log(outputDisplay)
const allClearButton = document.querySelector(".all-clear");
console.log(allClearButton)
const backButton = document.querySelector(".backspace");
console.log(backButton)
const percentButton = document.querySelector(".percent");
console.log()
const negateButton = document.querySelector(".negate");
console.log(percentButton)
const decimalButton = document.querySelector(".dot");
console.log(decimalButton)
const equalsButton = document.querySelector(".equals");
console.log(equalsButton)
const operatorButtons = document.querySelectorAll(".operator");
console.log(operatorButtons)
const numberButtons = document.querySelectorAll(".number");
console.log(numberButtons)




let currentInput = '';
let currentOperation = null;
let previousInput = '';
let shouldResetDisplay = false;


 function updateInputDisplay ()  {
    inputDisplay.value = currentInput;
  
};


let trackedValue = ""; 
 function performOperation () {
    const num1 = trackedValue !== "" ? Number(trackedValue) : Number(previousInput);
    const num2 = Number(currentInput);

    if (isNaN(num1) || isNaN(num2) || !currentOperation) {
        return;
    }

    const operations = {
        '+': num1 + num2,
        '-': num1 - num2, 
        '*': num1 * num2,
        '/': num1 / num2,
        '%': (num1 * num2) / 100, 
        'negate': -num2, 
    };

    const result = operations[currentOperation];

    if (result !== undefined) {
        currentInput = String(result);
        currentOperation = null;
        shouldResetDisplay = true;
        trackedValue = currentInput;
  
}};



numberButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        if (shouldResetDisplay) {
            currentInput = '';
            shouldResetDisplay = false;
        }
        currentInput += button.textContent;
        updateInputDisplay();
    });
});


operatorButtons.forEach(function (button)  {
    button.addEventListener('click',function ()  {
        if (currentInput && !currentOperation) {
            previousInput = currentInput;
            currentInput = '';
            currentOperation = button.textContent;
            shouldResetDisplay = false;
        } else {
            performOperation();
            currentOperation = button.textContent;
            shouldResetDisplay = true;
        }
    });
});


equalsButton.addEventListener('click',function ()  {
    performOperation();
    updateInputDisplay();
    outputDisplay.textContent = currentInput;
});


percentButton.addEventListener('click', function () {
    currentOperation = '%';
    performOperation();
    updateInputDisplay();
});


negateButton.addEventListener('click', function () {
    currentOperation = 'negate';
    performOperation();
    updateInputDisplay();
});


allClearButton.addEventListener('click',function ()  {
    currentInput = ``;
    previousInput = ``;
    trackedValue = ``;
    currentOperation = null;
    shouldResetDisplay = false;
    updateInputDisplay();
   
    outputDisplay.textContent = '0';
});


backButton.addEventListener('click',function ()  {
    currentInput = currentInput.slice(0, -1);
    updateInputDisplay();
});



decimalButton.addEventListener('click', function () {
    let i;

    for (i = 0; i < currentInput.length; i++) {
        if (currentInput[i] === '.') {
            break;  
        }
    }

    if (i === currentInput.length) {
        currentInput += '.';
        updateInputDisplay();
    }
});



zeroNumEl.addEventListener('click', function () {
    let i;

    for (i = 0; i < currentInput.length; i++) {
        if (currentInput[i] === '0') {
            break;  
        }
    }

    if (i === currentInput.length) {
        currentInput += '0';
        updateInputDisplay();
    }
});


