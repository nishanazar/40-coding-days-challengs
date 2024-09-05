"use strict";
//--------------Question: 3-----------------------------
Object.defineProperty(exports, "__esModule", { value: true });
function checkBothTrue(value1, value2) {
    return value1 && value2;
}
console.log(checkBothTrue(false, true)); // Output: false
//--------------Question: 4-----------------------------
function addNumberAndString(a, b) {
    return a + Number(b);
}
console.log(addNumberAndString(5, "5")); // Output: 10
