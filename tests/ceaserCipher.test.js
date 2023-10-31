const ceasarCipher = require("../src/ceaserCipher");

test("No argument given", () => {
  expect(ceasarCipher()).toBe(
    "You need to pass a string and a number as arguments!"
  );
});
test("Basic cipher", () => {
  expect(ceasarCipher("abcd", 2)).toBe("cdef");
});
test("Large number shift", () => {
  expect(ceasarCipher("abcd", 15)).toBe("pqrs");
});
test("Includes uppercase", () => {
  expect(ceasarCipher("aBcD", 15)).toBe("pQrS");
});
test("Includes symbols", () => {
  expect(ceasarCipher("a!Bc&D", 15)).toBe("p!Qr&S");
});
test("Wraps from z to a", () => {
  expect(ceasarCipher("a!Bc&DxY%Z", 15)).toBe("p!Qr&SmN%O");
});
