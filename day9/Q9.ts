//---------------Question: 17---------------------------

function findCodePosition(str: string): number {
  let position = str.indexOf("code");
  return position;
}
const myString = "We need to write some code here.";
const positionResult = findCodePosition(myString);
console.log(positionResult);

//---------------Question: 18---------------------------

function containsJavaScript(text: string): boolean {
    return text.includes('JavaScript');
}

// Example usage:
console.log(containsJavaScript("I am learning JavaScript.")); // true
console.log(containsJavaScript("I am learning TypeScript.")); // false0
