"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//----------Question: 45------------------------
const countries = new Map();
countries.set("USA", "Washington, D.C."); // Adds USA to the Map
countries.set("France", "Paris"); // Adds France to the Map
countries.set("Japan", "Tokyo"); // Adds Japan to the Map
console.log(countries);
// Answer of Q113:
function logCapitalOfCanada(countries) {
    if (countries.has("Canada")) {
        console.log(`The capital of Canada is ${countries.get("Canada")}`);
    }
    else {
        console.log("Canada is not in the Map.");
    }
}
logCapitalOfCanada(countries);
//----------Question: 46------------------------
// Iterate over a Map of student IDs and names, and log each pair to the console.
function logStudentInfo(students) {
    for (const [id, name] of students) {
        console.log(`ID: ${id}, Name: ${name}`);
    }
}
const studentMap = new Map([
    [101, 'John Doe'],
    [102, 'Jane Smith'],
    [103, 'Alice Johnson']
]);
logStudentInfo(studentMap);
