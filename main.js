//


const container = document.querySelector("#container");
const display = document.querySelector("#display");


let input = ''; // keeps tracks of numbers pressed

const button = document.querySelectorAll("button");
// add click event listener to update display
button.forEach((button) => {
    button.addEventListener('click', () => {
        if (input.length < 7) {
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



const plusbtn = document.querySelector("+")
plusbtn.addEventListener('click', () => {
    addNumbers()
})

// function to add
function addFunc() {
    // i want to store number entered until + is pressed
    // and nums after it
    // do sum of both or more nums
}




const equalbtn = document.querySelector("=")
equalbtn.addEventListener('click', () => {
    returnAns()
})


function returnAns() {
    
}