//--------------Question: 7-----------------------------

function loopNumber() {
  for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
loopNumber();

//--------------Question: 8-----------------------------
function swapValues() {
  let a = 5;
  let b = 10;

  console.log(`Before Swap: a = ${a}, b = ${b}`);

  let temp = a;
  a = b;
  b = temp;

  console.log(`After Swap: a = ${a}, b = ${b}`);
}
swapValues();
