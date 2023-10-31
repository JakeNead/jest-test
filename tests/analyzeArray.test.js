const analyzeArray = require("../src/analyzeArray");

test("No argument given", () => {
  expect(analyzeArray()).toBe("You need to pass an array as an argument!");
});
