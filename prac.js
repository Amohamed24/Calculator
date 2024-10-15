let num1 = ''
let num2 = ''
let isFirstNumber = true // checks to see which number user is entering


// storing number entered before operator
// storing 2nd # entered until equal
// return value



let input = ''; // keeps tracks of numbers pressed

const button = document.querySelectorAll("button");
// add click event listener to update display
button.forEach((button) => {
    button.addEventListener('click', () => {
        if (isFirstNumber) {
            if (num1.length < 9) {
                num1 += button.id
                updateDisplay()
            }
        } else {
            if (num2.length < 9) {
                num2 += button.id
                updateDisplay()
            } 
        }
    })
})


function switchToSecondNum() {
    isFirstNumber = false;
}


function updateDisplay() {
    if (isFirstNumber) {
        display.innerHTML = `First Number: ${num1}`
    }
    else {
        display.innerHTML = `Second Number: ${num2}`
    }
}