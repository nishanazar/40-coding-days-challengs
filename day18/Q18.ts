//---------------Question: 35---------------------------

function randomNumber(): boolean {
  return Math.random() >= 0.5;
}

console.log(randomNumber());

//---------------Question: 36---------------------------

function generateRandomHexadecimals(): string {
  const hexCharacters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexCharacters[Math.floor(Math.random() * 16)];
  }
  return color;
}

console.log(generateRandomHexadecimals());
