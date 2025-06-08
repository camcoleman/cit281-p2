/*
    CIT 281 Project 2
    Name: Cameron Coleman
*/


// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";
  
  for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += alphabet[getRandomInteger(1, alphabet.length - 1)];
  }
  console.log(result);

  // returns single random lowercase letter
 function getRandomLetter() {
 const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
return alphabet[Math.floor(Math.random() * alphabet.length)];
 }
 let string = "";
 let length = getRandomInteger(1,1)
for (let i = 0; i < length; i++){
    string += getRandomLetter();
}
console.log(`${length} Lowercase letter: ${string}`);

//return random length string
function getRandomString(minLength,maxLength) {
const length = getRandomInteger(minLength,maxLength + 1);
let result = "";
for (let i = 0; i < length; i++) {
    result += getRandomLetter();
}
return result;
}
console.log(`${getRandomString(10,20).length} lowercase letters: ${getRandomString(10,20)}`);

function getSortedString(string){
    return string.split('').sort().join('');
}
console.log(getSortedString("sjrthgysna"));