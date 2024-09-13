//----------Question: 43------------------------

function categorizeAge(age: number) {
  if (age <= 13) {
    return "child";
  } else if (age <= 19) {
    return "teenager";
  } else if (age >= 20) {
    return "adult";
  }
}
console.log(categorizeAge(13));

//----------Question: 44------------------------

const countries = new Map<string, string>();
countries.set("USA", "Washington, D.C."); // Adds USA to the Map
countries.set("France", "Paris"); // Adds France to the Map
countries.set("Japan", "Tokyo"); // Adds Japan to the Map

console.log(countries);
