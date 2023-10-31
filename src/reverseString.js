function reverseString(str) {
  if (str === undefined) return "You need to pass an argument!";
  return str.split("").reverse().join("");
}

module.exports = reverseString;
