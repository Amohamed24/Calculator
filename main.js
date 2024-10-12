//


const container = document.querySelector("#container");
const display = document.querySelector("#display");


let input = ''; // keeps tracks of numbers pressed

const button = document.querySelectorAll("button");
// add click event listener to update display
button.forEach((button) => {
    button.addEventListener('click', () => {
        if (input.length < 9) {
            input += button.id
            updateDisplay(input)
        }
    })
})

function updateDisplay(value) {
    display.innerHTML = value
}




const clearbtn = document.querySelector("#ce");
clearbtn.addEventListener('click', () => {
    clearDisplay()
})

// function clears display
function clearDisplay() {
    display.innerHTML = ''
    input =  ''
}



const plusbtn = document.querySelector("#plus");
plusbtn.addEventListener('click', () => {
    addNumbers()
    display.innerHTML = `${sum}`
})

const minusbtn = document.querySelector("#minus");
minusbtn.addEventListener('click', () => {
    minusNumbers()
    display.innerHTML = `${diff}`
})

const timesbtn = document.querySelector("#times");
timesbtn.addEventListener('click', () => {
    timesNumbers()
    display.innerHTML = `${multi}`
})

const dividebtn = document.querySelector("#divide");
dividebtn.addEventListener('click', () => {
    divideNumbers()
    display.innerHTML = `${split}`
})

// function to add
function addNumbers() {
    let num1 = parseInt(prompt("Please enter a number less than 100: "))
    let num2 = parseInt(prompt("Please enter a number less than 100: "))
    if (num1 & num2 & num1<100 & num2 <100) {
        sum = num1 + num2
        return alert(`${num1} added by ${num2} equals ${sum}`);
    } else {
        alert("Invalid choices!")
        display.innerHTML = "error"
    }
}

// function to subtract
function minusNumbers() {
    let num1 = parseInt(prompt("Please enter a number less than 100: "))
    let num2 = parseInt(prompt("Please enter a number less than 100: "))
    if (num1 & num2 & num1<100 & num2 <100) {
        diff = num1 - num2
        return alert(`${num1} subtracted by ${num2} equals ${diff}`);
    } else {
        alert("Invalid choices!")
        display.innerHTML = "error"
    }
}

// function to multiply
function timesNumbers() {
    let num1 = parseInt(prompt("Please enter a number less than 100: "))
    let num2 = parseInt(prompt("Please enter a number less than 100: "))
    if (num1 & num2 & num1<100 & num2 <100) {
        multi = num1 * num2
        return alert(`${num1} multiplied by ${num2} equals ${multi}`);
    } else {
        alert("Invalid choices!")
        display.innerHTML = "error"
    }
}

// function to divide
function divideNumbers() {
    let num1 = parseInt(prompt("Please enter a number less than 100: "))
    let num2 = parseInt(prompt("Please enter a number less than 100: "))
    if (num1 & num2 & num1<100 & num2 <100) {
        split = num1 / num2
        return alert(`${num1} divided by ${num2} equals ${split}`);
    } else {
        alert("Invalid choices!")
        display.innerHTML = "error"
    }
}



const equalbtn = document.querySelector("=")
equalbtn.addEventListener('click', () => {
    operate()
})


function operate() {
    // takes an operator and 2 numbers
}



