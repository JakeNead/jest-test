const reverseString = require("../src/reverseString");

test("No argument given", () => {
  expect(reverseString()).toBe("You need to pass an argument!");
});

test("reverse string", () => {
  expect(reverseString("minivan")).toBe("navinim");
});
