function Calculator() {
  function add(x, y) {
    if (arguments.length < 2) return "You need to use two numbers!";
    return x + y;
  }
  function subtract(x, y) {
    if (arguments.length < 2) return "You need to use two numbers!";
    return x - y;
  }
  function divide(x, y) {
    if (arguments.length < 2) return "You need to use two numbers!";
    return x / y;
  }
  function multiply(x, y) {
    if (arguments.length < 2) return "You need to use two numbers!";
    return x * y;
  }

  return { add, subtract, divide, multiply };
}

module.exports = Calculator;
