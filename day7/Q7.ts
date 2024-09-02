//---------------Question: 13--------------------------- 

let car1 = {
  make: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "red",
};

(car1.color = "green"), console.log(car1.color);

//---------------Question: 14---------------------------

function logObjectProperties(obj: { [key: string]: any }) {
  for (let property in obj) {
    console.log(`${property}: ${obj[property]}`);
  }
}

logObjectProperties({
  make: "Toyota",
  model: "Corolla",
  year: 2021,
  color: "blue",
});
