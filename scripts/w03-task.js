/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */


/* Function Expression - Subtract Numbers */


/* Arrow Function - Multiply Numbers */




/* Open Function Use - Divide Numbers */

const divide = (x, y) => x / y ;

const divideNumbers = () =>
{
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let quotient = divide(dividend, divisor);
    document.getElementById("quotient") = quotient.toFixed(2);
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);
/* Decision Structure */

function getTotal() {
    //input
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    //processing
    if (document.getElementById("member").checked) {
        subtotal = 0.8 * subtotal
    }
    //output
    document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
}
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
