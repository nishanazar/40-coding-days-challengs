//--------------Question: 3-----------------------------

function checkBothTrue(value1: boolean, value2: boolean): boolean {
  return value1 && value2;
}
console.log(checkBothTrue(false, true)); // Output: false

//--------------Question: 4-----------------------------

function addNumberAndString(a: number, b: string): number {
  return a + Number(b);
}
console.log(addNumberAndString(5, "5")); // Output: 10
