"use strict";
//---------------Question: 31---------------------------
Object.defineProperty(exports, "__esModule", { value: true });
function getNextBirthday(month, day) {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
const nextBirthday = getNextBirthday(6, 25);
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
//---------------Question: 32---------------------------
let num = 144;
let squareRoot = Math.sqrt(num);
console.log(`Square root of ${num} is:`, squareRoot);
