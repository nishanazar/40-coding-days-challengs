"use strict";
//------------Question: 39--------------------
Object.defineProperty(exports, "__esModule", { value: true });
function logicalOperators(number) {
    return number % 2 === 0 && number % 3 === 0;
}
console.log(logicalOperators(12)); // true
console.log(logicalOperators(13)); // false
//------------Question: 40--------------------
function comparsionString(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(comparsionString("hello", "HELLO"));
