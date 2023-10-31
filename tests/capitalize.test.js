const capitalize = require("../src/capitalize");

test("No argument given", () => {
  expect(capitalize()).toBe("You need to pass an argument!");
});

test("One Character", () => {
  expect(capitalize("a")).toBe("A");
});
