"use strict";
//---------------Question: 25---------------------------
Object.defineProperty(exports, "__esModule", { value: true });
function replaceBananaWithMango(fruits) {
    const index = fruits.indexOf("Banana");
    if (index !== -1)
        fruits[index] = "Mango";
}
const fruits = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruits);
console.log(fruits); // Outputs: ['Apple', 'Mango', 'Cherry']
//---------------Question: 26---------------------------
let lengthOfWord = ["this", "there", "but", "into"];
let output = lengthOfWord.map((item) => item.length);
console.log(output);
