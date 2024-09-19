//----------Question: 55------------------------
// Create a loop that iterates through a string and stops when it finds the first vowel.

function findVowel(str: string) {
    let vowel = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
       if (vowel.includes(str[i])) {
        return str[i]
       }
        
    }
  return null
}

console.log(findVowel("bbccdd"));

//----------Question: 56------------------------

const person = {
    name: "Alice",
    getName: function () {
      return this.name;
    
    },
  };
  
  console.log(person.getName()); // Outputs: Alice
 