//------------Question: 39--------------------

function logicalOperators(number: number): boolean {
  return number % 2 === 0 && number % 3 === 0;
}
console.log(logicalOperators(12)); // true
console.log(logicalOperators(13)); // false

//------------Question: 40--------------------

function comparsionString(str1: string, str2: string): boolean {
  return str1.toLowerCase() === str2.toLowerCase();
}

console.log(comparsionString("hello", "HELLO")); //true
