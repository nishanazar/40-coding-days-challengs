"use strict";
//----------Question: 47------------------------
// Use a switch statement to log the days of the week based on a number (1-7).
Object.defineProperty(exports, "__esModule", { value: true });
function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thrusday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invaid number! Please Enter a number Between 1-7");
    }
}
getDayOfWeek(7);
//----------Question: 48------------------------
function getSeason(month) {
    switch (month) {
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Summer");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Autumn");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Winter");
            break;
        default:
            console.log("Invalid month number! Please enter a number between 1 and 12.");
    }
}
getSeason(5);
getSeason(7);
