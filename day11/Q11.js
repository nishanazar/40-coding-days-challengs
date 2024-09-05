"use strict";
//---------------Question: 21---------------------------
Object.defineProperty(exports, "__esModule", { value: true });
function RoundingNumbers(decimal) {
    return decimal.toFixed(2);
}
console.log(RoundingNumbers(3.14159)); //3.14
//---------------Question: 22---------------------------
function GeneratingRandomNumbers() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(GeneratingRandomNumbers());
