"use strict";
//---------------Question: 35---------------------------
Object.defineProperty(exports, "__esModule", { value: true });
function randomNumber() {
    return Math.random() >= 0.5;
}
console.log(randomNumber());
//---------------Question: 36---------------------------
function generateRandomHexadecimals() {
    const hexCharacters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hexCharacters[Math.floor(Math.random() * 16)];
    }
    return color;
}
console.log(generateRandomHexadecimals());
