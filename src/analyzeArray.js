function analyzeArray(arr) {
  if (arr === undefined) return "You need to pass an array as an argument!";
  arr.sort((a, b) => a - b);
  const average = arr.reduce((a, b) => a + b) / arr.length;
  const min = arr[0];
  const max = arr[-1];
  const length = arr.length;

  return { average, min, max, length };
}
//
module.exports = analyzeArray;
