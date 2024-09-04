"use strict";
//---------------Question: 25---------------------------
function replaceBananaWithMango(fruits) {
    const index = fruits.indexOf("Banana");
    // Finds the index of "Banana"
    if (index !== -1)
        fruits[index] = "Mango";
    // Replaces "Banana" with "Mango" if found
}
// Example: Replacing "Banana" in the array
const fruits = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruits);
console.log(fruits); // Outputs: ['Apple', 'Mango', 'Cherry']
//---------------Question: 26---------------------------
let lengthOfWord = ["this", "there", "but", "into"];
let output = lengthOfWord.map((item) => item.length);
console.log(output);
