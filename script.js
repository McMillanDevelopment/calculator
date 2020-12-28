// DOM Selectors
const buttons = document.querySelectorAll("#container div")
const display = document.querySelector("#display p")
const clear = document.querySelector("#clear")


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