const caesarCipher = require("./caesarCipher");

describe("Caesar Cipher", () => {
  test("Cipher lowerCase word", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
  test("work with upperCase", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
  test("work with punctuation", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});