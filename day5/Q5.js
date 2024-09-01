"use strict";
//--------------Question: 9-----------------------------
function compoundOperations() {
    let x = 4;
    console.log(`Initial Value: ${x}`); // 4
    x += 2;
    console.log(`After Addition value: ${x}`); // 6
    x -= 1;
    console.log(`After Subtraction value: ${x}`); // 5
    x *= 3;
    console.log(`After Multiplication value: ${x}`); // 15
    x /= 2;
    console.log(`After Division value:  ${x}`); // 7.5
}
compoundOperations();
//--------------Question: 10-----------------------------
function countAlphabets(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) {
            count++;
        }
    }
    return count;
}
console.log(countAlphabets("Hello, World! 123"));
console.log(countAlphabets("Good Morning bob! hey how are you"));
