const analyzeArray = require("../src/analyzeArray");

test("No argument given", () => {
  expect(analyzeArray()).toBe("You need to pass an array as an argument!");
});

test("Returns average", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});
