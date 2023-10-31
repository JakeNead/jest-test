function capitalize(str) {
  if (str === undefined) return "You need to pass an argument!";
  let firstChar = str[0].toUpperCase();

  if (str.length === 1) return firstChar;
  const restOfWord = [str].slice(1).toString();
  return firstChar + restOfWord;
}

module.exports = capitalize;
