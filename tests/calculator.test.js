const Calculator = require("../src/calculator");

const calculator = Calculator();

test("Add function", () => {
  expect(calculator.add(4, 9)).toBe(13);
});
test("Add function - with negatives", () => {
  expect(calculator.add(-4, -3)).toBe(-7);
});
test("Add function - with no argument", () => {
  expect(calculator.add()).toBe("You need to use two numbers!");
});
test("Add function - with one argument", () => {
  expect(calculator.add(2)).toBe("You need to use two numbers!");
});

test("Subtract function", () => {
  expect(calculator.subtract(8, 3)).toBe(5);
});
test("Subtract function - with negatives", () => {
  expect(calculator.subtract(-4, -3)).toBe(-1);
});
test("Subtract function - with no argument", () => {
  expect(calculator.subtract()).toBe("You need to use two numbers!");
});
test("Subtract function - with one argument", () => {
  expect(calculator.subtract(2)).toBe("You need to use two numbers!");
});

test("Divide function", () => {
  expect(calculator.divide(12, 3)).toBe(4);
});
test("Divide function - with negatives", () => {
  expect(calculator.divide(-12, -3)).toBe(4);
});
test("Divide function - with no argument", () => {
  expect(calculator.divide()).toBe("You need to use two numbers!");
});
test("Divide function - with one argument", () => {
  expect(calculator.divide(2)).toBe("You need to use two numbers!");
});
