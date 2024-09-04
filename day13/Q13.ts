//---------------Question: 25---------------------------

function replaceBananaWithMango(fruits: string[]): void {
  const index = fruits.indexOf("Banana");

  if (index !== -1) fruits[index] = "Mango";

}

const fruits: string[] = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruits);

console.log(fruits); // Outputs: ['Apple', 'Mango', 'Cherry']

//---------------Question: 26---------------------------

let lengthOfWord = ["this", "there", "but", "into"];
let output = lengthOfWord.map((item) => item.length);
console.log(output);
