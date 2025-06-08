// getRandomInteger as function expression
const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };
  
  // getRandomLetter as function expression
  const getRandomLetter = function() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  };
  
  // getRandomString as function expression
  const getRandomString = function(minLength, maxLength) {
    const length = getRandomInteger(minLength, maxLength + 1);
    let result = "";
    for (let i = 0; i < length; i++) {
      result += getRandomLetter();
    }
    return result;
  };
  
  // getSortedString as function expression
  const getSortedString = function(string) {
    return string.split('').sort().join('');
  };
  console.log(`${getRandomString(10, 20).length} lowercase letters: ${getRandomString(10, 20)}`);
console.log(getSortedString("xpacd"));