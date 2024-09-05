"use strict";
//---------------Question: 13--------------------------- 
Object.defineProperty(exports, "__esModule", { value: true });
let car1 = {
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    color: "red",
};
(car1.color = "green"), console.log(car1.color);
//---------------Question: 14---------------------------
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
