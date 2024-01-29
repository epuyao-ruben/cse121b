/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

const add = (x, y) => x + y ;

const addNumbers = () =>
{
    let add1 = parseFloat(document.getElementById("add1").value);
    let add2 = parseFloat(document.getElementById("add2").value);
    let addNumbers = add(add1, add2);
    document.getElementById("sum").value = addNumbers.toFixed(2);
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */

const subtract = (x, y) => x - y ;

const subtractNumbers = () =>
{
    let subtract1 = parseFloat(document.getElementById("subtract1").value);
    let subtract2 = parseFloat(document.getElementById("subtract2").value);
    let subtractNumbers = subtract(subtract1, subtract2);
    document.getElementById("difference").value = subtractNumbers.toFixed(2);
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);



/* Arrow Function - Multiply Numbers */

const multiply = (x, y) => x * y ;

const multiplyNumbers = () =>
{
    let factor1 = parseFloat(document.getElementById("factor1").value);
    let factor2 = parseFloat(document.getElementById("factor2").value);
    let multiplyNumbers = multiply(factor1, factor2);
    document.getElementById("product").value = multiplyNumbers.toFixed(2);
}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);



/* Open Function Use - Divide Numbers */

const divide = (x, y) => x / y ;

const divideNumbers = () =>
{
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let quotient = divide(dividend, divisor);
    document.getElementById("quotient").value = quotient.toFixed(2);
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);
/* Decision Structure */

function getTotal() {
    //input
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    //processing
    if (document.getElementById("member").checked) {
        subtotal = 0.8 * subtotal;
    }
    //output
    document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
}

document.getElementById("getTotal").addEventListener("click", getTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

const arrayElement = document.getElementById("array");
arrayElement.innerHTML = numbersArray;

/* Output Odds Only Array */

document.querySelector("#odds").innerHTML = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */

document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */

document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */

document.querySelector("#multiplied").innerHTML = numbersArray.map(number => number * 2);


/* Output Sum of Multiplied by 2 Array */

document.querySelector("#sumOfMultiplied").innerHTML = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
