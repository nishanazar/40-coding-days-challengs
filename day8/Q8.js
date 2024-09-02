"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//---------------Question: 15---------------------------
function UpperAndLowerCase(str) {
    let lowerCase = str.toLowerCase();
    let upperCase = str.toUpperCase();
    console.log(`lowerCase: ${lowerCase}, UpperCase: ${upperCase}`);
}
UpperAndLowerCase("Hello World");
//---------------Question: 15---------------------------
function logObjectProperties(obj) {
    for (let property in obj) {
        console.log(`${property}: ${obj[property]}`);
    }
}
logObjectProperties({
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    color: "blue",
});
console.log(logObjectProperties);
//---------------Question: 16---------------------------
function replaceTheSentance(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript");
}
let result = replaceTheSentance("I love JavaScript because JavaScript is powerful.");
console.log(result);
