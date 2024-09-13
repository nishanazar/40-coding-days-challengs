"use strict";
//----------Question: 43------------------------
Object.defineProperty(exports, "__esModule", { value: true });
function categorizeAge(age) {
    if (age <= 13) {
        return "child";
    }
    else if (age <= 19) {
        return "teenager";
    }
    else if (age >= 20) {
        return "adult";
    }
}
console.log(categorizeAge(13));
//----------Question: 44------------------------
// Create a Map that stores the names of countries as keys and their capitals as values. Add three 
// countries to the Map.
// Creates a new Map to store countries and their capitals
const countries = new Map();
countries.set("USA", "Washington, D.C."); // Adds USA to the Map
countries.set("France", "Paris"); // Adds France to the Map
countries.set("Japan", "Tokyo"); // Adds Japan to the Map
console.log(countries);
// Logs the Map with the countries and their capitals.
