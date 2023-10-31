function ceasarCipher(s, n) {
  if (s === undefined || n === undefined)
    return "You need to pass a string and a number as arguments!";
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let result = [];
  let arr = s.split("");
  for (let i = 0; i < arr.length; i += 1) {
    let shiftIndex = alphabet.indexOf(arr[i].toLowerCase()) + n;
    let isUpperCase = arr[i] === arr[i].toUpperCase();
    if (isUpperCase) result.push(alphabet[shiftIndex].toUpperCase());
    else result.push(alphabet[shiftIndex]);
  }
  return result.join("");
}

// if (!alphabet.includes(char))result.push(char)

module.exports = ceasarCipher;

// A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”. Read more about how a Caesar cipher works on this website.

// Don’t forget to test wrapping from z to a.
// Don’t forget to test keeping the same case.
// Don’t forget to test punctuation!
// For this one, you may want to split the final function into a few smaller functions. One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones. So in this case you only need tests for the final caesarCipher function. If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.
