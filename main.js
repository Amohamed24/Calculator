//


const container = document.querySelector("#container");
const display = document.querySelector("#display");


let num1 = ''
let num2 = ''
let isFirstNumber = true // checks to see which number user is entering
let operator = ''
let answer = ''

const operatorsMap = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
};


const button = document.querySelectorAll(".number"); // all the numbers
const operators = document.querySelectorAll(".operator"); // all the operators

// add click event listener to update display
button.forEach((button) => {
    button.addEventListener('click', () => {
        if (isFirstNumber) {
            if (num1.length < 12) {
                num1 += button.id
                updateDisplay()
            }
        } else {
            if (num2.length < 12) {
                num2 += button.id
                updateDisplay()
            } 
        }
    })
})


function switchToSecondNum() {
    isFirstNumber = false;
    updateDisplay() 
}


function updateDisplay() {
    if (isFirstNumber) {
        display.innerHTML = `${num1}`
    }
    else {
        display.innerHTML = `${num2}`
    }
}

// once an operator clicked, stores previous value as num1 and starts storing num2
operators.forEach((op) => {
    op.addEventListener('click', () => {
        operator = op.id;  
        switchToSecondNum();  
    });
});


const clearbtn = document.querySelector("#ce");
clearbtn.addEventListener('click', () => {
    clearDisplay()
})

// function clears display and resets everything
function clearDisplay() {
    display.innerHTML = ''
    num1 =  ''
    num2 =  ''
    isFirstNumber = true
    operator = ''
}

const equalbtn = document.querySelector("#equal");
equalbtn.addEventListener('click', () => {
    operateFunction()
    display.innerHTML = `${answer}`
    // allows the user to continue since now num1 is answer from previous problem
    num1 = `${answer}`
    num2 = ''
});


function operateFunction() {
    // takes an operator and 2 numbers
    if (num1 && num2 && operator) {
        const operation = operatorsMap[operator];
        if (operation) {
            answer = operation(Number(num1), Number(num2));
        } else {
            alert("Invalid operator!")
        }
    } if (operator === '/' && num2 == 0) {
        alert("Cannot divide by zero");
        return;
    }
}