"use strict";
//----------Question: 55------------------------
// Create a loop that iterates through a string and stops when it finds the first vowel.
Object.defineProperty(exports, "__esModule", { value: true });
function findVowel(str) {
    let vowel = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowel.includes(str[i])) {
            return str[i];
        }
    }
    return null;
}
console.log(findVowel("bbccdd"));
//----------Question: 56------------------------
// Create a function inside an object that returns the objects own name property using the this keyword.
let obj = {
    name: "ali",
    class: "nine",
    studentDetail() {
        console.log(`${this.name}, and class ${this.class}`);
    }
};
console.log(obj.class);
obj.studentDetail();
