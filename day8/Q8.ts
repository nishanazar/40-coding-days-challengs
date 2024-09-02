//---------------Question: 15---------------------------
function UpperAndLowerCase(str: string) {
  let lowerCase = str.toLowerCase();
  let upperCase = str.toUpperCase();
  console.log(`lowerCase: ${lowerCase}, UpperCase: ${upperCase}`);
}
UpperAndLowerCase("Hello World");



//---------------Question: 16---------------------------

function replaceTheSentance(sentence: string): string {
  return sentence.replace(/JavaScript/g, "TypeScript");
}

let result = replaceTheSentance(
  "I love JavaScript because JavaScript is powerful."
);
console.log(result);





