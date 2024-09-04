"use strict";
//---------------Question: 15---------------------------
function UpperAndLowerCase(str) {
    let lowerCase = str.toLowerCase();
    let upperCase = str.toUpperCase();
    console.log(`lowerCase: ${lowerCase}, UpperCase: ${upperCase}`);
}
UpperAndLowerCase("Hello World");
//---------------Question: 16---------------------------
function replaceTheSentance(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript");
}
let result = replaceTheSentance("I love JavaScript because JavaScript is powerful.");
console.log(result);
// =>Summary:
// JavaScript/g ek regular expression (RegEx) hai, jo specific text patterns ko search karne ke liye
// use hota hai.
// /JavaScript/: Search karega word "JavaScript" ko.
// g Flag: Ensure karega ke ye pattern globally, yaani poori string mein dhoonda jaaye aur har 
// instance ko replace kiya jaaye.
