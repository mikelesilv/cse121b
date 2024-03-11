/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
};

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2;
}

/* Decision Structure */

/* Add event listener for the button with ID addNumbers */
document.querySelector('#addNumbers').addEventListener('click', function() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
});

/* Add event listener for the button with ID subtractNumbers */
document.querySelector('#subtractNumbers').addEventListener('click', function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
});

/* Add event listener for the button with ID multiplyNumbers */
document.querySelector('#multiplyNumbers').addEventListener('click', function() {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
});

/* Add event listener for the button with ID divideNumbers */
document.querySelector('#divideNumbers').addEventListener('click', function() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
});


/* Add event listener for the Get Total button */
document.querySelector('#getTotal').addEventListener('click', function() {
    let subtotal = parseFloat(document.querySelector('#subtotal').value);
    let isMember = document.querySelector('#member').checked;
    let discount = isMember ? 0.2 : 0;
    let total = subtotal - (subtotal * discount);
    document.querySelector('#total').innerText = `$${total.toFixed(2)}`;
});


/* ARRAY METHODS - Functional Programming */

// Declare and instantiate an array variable to hold the numbers 1 through 13.
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Output Source Array
document.querySelector('#array').innerText = numbersArray.join(', ');

// Use the filter() array method to find all of the odd numbers of the array variable and assign the result to the HTML element with an ID of odds.
document.querySelector('#odds').innerText = numbersArray.filter(number => number % 2 !== 0).join(', ');

// Use the filter() array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of evens.
document.querySelector('#evens').innerText = numbersArray.filter(number => number % 2 === 0).join(', ');

// Use the reduce() array method to sum the array variable elements and assign the result to the HTML element with an ID of sumOfArray.
document.querySelector('#sumOfArray').innerText = numbersArray.reduce((sum, number) => sum + number, 0);

// Use the map() array method to multiply each element in the array variable by 2 and assign the result to the HTML element with an ID of multiplied.
document.querySelector('#multiplied').innerText = numbersArray.map(number => number * 2).join(', ');

// Use the map() and reduce() array methods to sum the array elements after multiplying each element by two. Assign the result to the HTML element with an ID of sumOfMultiplied.
document.querySelector('#sumOfMultiplied').innerText = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);


