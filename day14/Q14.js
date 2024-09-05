"use strict";
//---------------Question: 27---------------------------
Object.defineProperty(exports, "__esModule", { value: true });
function filterArray(num) {
    return num.filter((item) => item > 10);
}
console.log(filterArray([11, 9, 6, 15, 20, 30]));
//---------------Question: 28---------------------------
function reduceArray(num) {
    return num.reduce((acum, num) => acum + num, 0);
}
let value = reduceArray([1, 3, 4, 5, 6, 35]);
console.log(value);
