import calculator from "./calculator"

describe("Calculator", () => {
  test("Add two number", () => {
    expect(calculator.add(2, 2)).toBe(4);
  });
  test("Ignore operation with left operand string", () => {
    expect(calculator.add("2", 2)).toBe("Args must be type of number");
  });
  test("Ignore operation with both operand string", () => {
    expect(calculator.add("2", "2")).toBe("Args must be type of number");
  });
  test("Subtract right operand by left operand", () => {
    expect(calculator.subtract(4, 2)).toBe(2);
  });
  test("Ignore operation with right operand string", () => {
    expect(calculator.subtract(4, "2")).toBe("Args must be type of number");
  });
  test("Divide left operand by right operand", () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });
  test("Multiply two number", () => {
    expect(calculator.multiply(6, 2)).toBe(12);
  });
});
