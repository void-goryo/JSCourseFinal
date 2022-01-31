// keeps track of value
const Calculator = {
    //display 0
    displayValue: '0',
    //this will hold the first operand for any expression. set to null for now
    firstOperand: null,
    //this will check for a second operand for any expression
    waitSecondOperand: false,
    //this will hold the operator. set to null for now
    operator: null,
};

function inputDigit(digit) {
    const { displayValue, waitSecondOperand} = Calculator;
    //we are checking to see if waitSecondOperand is true and set displayValue to the kay that was clicked
    if (waitSecondOperand === true) {
        Calculator.displayValue = digit;
        Calculator.waitSecondOperand = false;
    }
    else {
        //overwrite displayValue if current value is 0 otherwise it adds to it
        Calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
}
//this section handles decimals
function inputDecimal(dot) {
    //this makes sure that accidental clicking of the decimal point doesn't cause bugs
    if (Calculator.waitSecondOperand === true) return;
    if (!Calculator.displayValue.includes(dot)){
        //this is saying that if the displayValue does not contain a decimal point, we want to add a decimal point
        Calculator.displayValue += dot;
    }
}

//this section handles operators
function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator} = Calculator
    //when an operator key is pressed, it converts the current number displayed on the screen to a number and then store the result in Calculator.firstOperand if it dousn't already exist
    const valueOfInput = parseFloat(displayValue);
    //checks if an operator already exists. if waitSecondOperator is true, ith updates the operator and exits the function
    if (operator && Calculator.waitSecondOperand) {
        Calculator.operator = nextOperator;
        return;
    }
    if (firstOperand == null) {
        Calculator.firstOperand = valueOfInput;
    }
    else if (operator) {
        //checks to see of operator already exists
        const valueNow = firstOperand || 0;
        //if operator exists, property lookup is performed for the operator in the performCalculation object and the fenction that matces the operator is executed
        let result = performCalculation[operator](valueNow, valueOfInput);
        //here we add a fixed amount or numbers after the decimal
        result = Number(result).toFixed(9)
        //this will remove and trailing 0's
        result = (result * 1).toString()
        Calculator.displayValue = parseFloat(result);
        Calculator.firstOperand = parseFloat(result);
    }
    Calculator.waitSecondOperand = true;
    Calculator.operator = nextOperator;
}

const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '=': (firstOperand, secondOperand) => secondOperand
};

function calculatorReset() {
    Calculator.displayValue = '0';
    Calculator.firstOperand = null;
    Calculator.waitSecondOperand = false;
    Calculator.operator = null;
}
//this function updates the screen
function updateDisplay() {
    const display = document.querySelector('.calculatorScreen');
    display.value = Calculator.displayValue;
}

updateDisplay();
//this section monitors button clicks
const keys = document.querySelector('.calculatorKeys');
keys.addEventListener('click', (event) => {
    //the target variable is an object that represents the element that was clicked
    const {target} = event;
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }

    //ensures that AC clears the numbers for the calculator
    if (target.classList.contains('allClear')) {
        calculatorReset();
        updateDisplay();
        return;
    }

    inputDigit(target.value);
    updateDisplay();
})