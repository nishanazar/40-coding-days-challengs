"use strict";
//----------Question: 53------------------------
Object.defineProperty(exports, "__esModule", { value: true });
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    else if (i == 1) {
        continue;
    }
    console.log(i);
}
//----------Question: 54------------------------
for (let i = 10; i >= 1; i--) {
    if (i == 5) {
        break;
    }
    console.log(i);
}
