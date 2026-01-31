import capitalize from "./capitalize"

describe("Capitalize", () => {
  test("Capitalize single word", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("Work with multiply words", () => {
    expect(capitalize("hello world!")).toBe("Hello World!");
  });
});