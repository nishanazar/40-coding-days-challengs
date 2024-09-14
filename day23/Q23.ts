//----------Question: 45------------------------
const countries = new Map<string, string>();
countries.set("USA", "Washington, D.C."); // Adds USA to the Map
countries.set("France", "Paris"); // Adds France to the Map
countries.set("Japan", "Tokyo"); // Adds Japan to the Map

console.log(countries);

function logCapitalOfCanada(countries: Map<string, string>): void {
  if (countries.has("Canada")) {
    console.log(`The capital of Canada is ${countries.get("Canada")}`);
  } else {
    console.log("Canada is not in the Map.");
  }
}

logCapitalOfCanada(countries);
//----------Question: 46------------------------
// Iterate over a Map of student IDs and names, and log each pair to the console.
function logStudentInfo(students: Map<number, string>): void {
  for (const [id, name] of students) {
    console.log(`ID: ${id}, Name: ${name}`);
  }
}

const studentMap = new Map<number, string>([
  [101, "John Doe"],
  [102, "Jane Smith"],
  [103, "Alice Johnson"],
]);

logStudentInfo(studentMap);
