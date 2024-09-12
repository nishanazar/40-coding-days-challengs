//----------Question: 41------------------------

let date = new Date();

let hour = date.getHours();

if (hour < 12) {
  console.log("Good Moring");
} else {
  console.log("Good Afternoon");
}

//----------Question: 42------------------------
// Create a function that assigns a grade (A, B, C, D, F) based on a students score.
let score = 75;
if (score < 100 && score >= 90) {
  console.log("Grade A");
} else if (score < 80 && score >= 70) {
  console.log("Grade B");
} else if (score < 70 && score >= 60) {
  console.log("Grade C");
} else if (score < 60 && score >= 50) {
  console.log("Grade D");
} else if (score < 50 && score >= 40) {
  console.log("Grade E");
} else {
  console.log("fail");
}
