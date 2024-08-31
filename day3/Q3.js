"use strict";
//--------------Question: 5-----------------------------
function decimalNumber(num1, num2) {
    let product = num1 * num2;
    let roundProduct = Math.round(product * 100) / 100;
    return roundProduct;
}
console.log(decimalNumber(22.22, 555.55)); // 12344.32
console.log(decimalNumber(0.1, 0.2)); // 0.02
//--------------Question: 6-----------------------------
function dividesTwoNumbers(a, b) {
    let quotient = Math.floor(a / b);
    let remainder = a % b;
    return {
        Quotient: quotient,
        Remainder: remainder,
    };
}
console.log(dividesTwoNumbers(10, 3)); // { Quotient: 3, Remainder: 1 }
console.log(dividesTwoNumbers(20, 2)); // { Quotient: 10, Remainder: 0 }
