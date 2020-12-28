// DOM Selectors
const buttons = document.querySelectorAll("#container div");
const display = document.querySelector("#display p");
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");

const divideButton = document.querySelector("#divide")
const multiplyButton = document.querySelector("#multiply")
const plusButton = document.querySelector("#plus")
const subtractButton = document.querySelector("#subtract")

// Event Listners
display.addEventListener('click', function(e){
    console.log(e.target.textContent);
});

for(i = 3; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(e){
    // Resets display text before adding clicked buttons
    if(display.textContent === String(0)) {
        display.textContent = "";
    };
    display.textContent = display.textContent + e.target.textContent;
  });
};

clear.addEventListener('click', function(){
    display.textContent = 0;
    firstValue = 0;
    secondValue = 0;
});

// add function
const add = function (a, b) {
    return a + b;
};

// subtract function
const subtract = function(a, b) {
    return a - b;
};

// multiply function
 const multiply = function(a, b) {
     return a * b;
 }

// divide function
const divide = function(a, b) {
    return a / b;
};

// variables
firstValue = 0;
secondValue = 0;

// Function call event listeners
plusButton.addEventListener('click', function(e){
    let x = display.textContent.slice(0, display.textContent.length - 1)
    firstValue = Number(x);
    // console.log(firstValue)
});

subtractButton.addEventListener('click', function(e){
    let x = display.textContent.slice(0, display.textContent.length - 1)
    firstValue = Number(x);
    // console.log(firstValue)
});

multiplyButton.addEventListener('click', function(e){
    let x = display.textContent.slice(0, display.textContent.length - 1)
    firstValue = Number(x);
    // console.log(firstValue)
});

divideButton.addEventListener('click', function(e){
    let x = display.textContent.slice(0, display.textContent.length - 1)
    firstValue = Number(x);
    // console.log(firstValue)
});


equals.addEventListener('click', function(){
    let stringer = String(firstValue);
    let a = stringer.length + 1
    let b = display.textContent.length;
    secondValue = Number(display.textContent.slice(a, b))
    // let x = display.textContent.slice(2, 3);
    // console.log(`firstValue: ${firstValue} secondValue: ${ secondValue}`) // temporary


    // addition, subtract function
    let string = display.textContent;
    console.log(`string: ${string}`);
    if(string.includes('+')) {
        string = add(firstValue, secondValue);
        display.textContent = string;
    } else if (string.includes('-')) {
        string = subtract(firstValue, secondValue);
        display.textContent = string;
    } else if (string.includes('*')) {
        string = multiply(firstValue, secondValue);
        display.textContent = string;
    } else if (string.includes('/')) {
        string = divide(firstValue, secondValue);
        display.textContent = string;
    }
});


// operate function
// takes 2 numbers and calls one of the above functions.
// const operate = function(a, b) {
//     if(mouseclick unicode === +) {
//         return add(a, b);
//     } else if (mouseclick unicode === -) {
//         return subtract(a, b);
//     } else if (mouseclick unicode === *) {
//         return multiply(a, b);
//     } else if (mouseclick unicode === /) {
//         return divide(a, b);
//     };
// };
// I think that will work?