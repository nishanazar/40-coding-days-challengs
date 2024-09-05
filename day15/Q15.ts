//---------------Question: 29---------------------------

function currentDate() {
  let now = new Date();
  let day = String(now.getDate()).padStart(2, "0");
  let month = String(now.getMonth() + 1).padStart(2, "0");
  let year = now.getFullYear();
  return `${day}-${month}-${year}`;
}
console.log(currentDate()); // 05-09-2024

//---------------Question: 30---------------------------

function daysUntilNewYear() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let newYearDate = new Date(currentYear + 1, 0, 1);

  const timeDefference = newYearDate.getTime() - currentDate.getTime();
  const daysDifference = Math.ceil(timeDefference / (1000 * 60 * 60 * 24));
  console.log(`${daysDifference} days left until New Year!`);
}
daysUntilNewYear(); // 118 days left until New Year!
