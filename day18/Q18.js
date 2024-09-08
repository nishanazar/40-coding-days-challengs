"use strict";
//---------------Question: 35---------------------------
// Write a function that returns a random boolean value, true or false.
Object.defineProperty(exports, "__esModule", { value: true });
function randomNumber() {
    return Math.random() >= 0.5;
}
console.log(randomNumber());
//---------------Question: 36---------------------------
// Create a function that generates a random hexadecimal color code.
function generateRandomHexadecimals() {
    const hexCharacters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hexCharacters[Math.floor(Math.random() * 16)];
    }
    return color;
}
console.log(generateRandomHexadecimals());
