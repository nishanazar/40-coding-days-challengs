//---------------Question: 37---------------------------

// Simulate a dice roll using JavaScript and return a random integer between 1 and 6.

function simulateRandomNumber(): number{
  return  Math.floor(Math.random()* 6)+1
}
console.log(simulateRandomNumber());

//---------------Question: 38---------------------------
// Determine if a given year is a leap year using comparison operators.

function isLeapyear(year: number) {
  if (year % 4 === 0) {
    return (year % 100 !== 0 || (year % 400 === 0) )
  }
  return false
}

console.log(isLeapyear(2024)); // true
