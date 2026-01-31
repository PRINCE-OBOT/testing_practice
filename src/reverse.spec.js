import reverse from "./reverse";

describe("Reverse String", () => {
  test("Reverse a single word", () => {
    expect(reverse("hello")).toBe("olleh");
  });
  test("Reverse words with excessive space", () => {
    expect(reverse("hello   worl!d")).toBe("d!lrow   olleh");
  });
  test("work with numbers and punctuation", () => {
    expect(reverse("123! abc! Hello, Odinite.")).toBe(
      ".etinidO ,olleH !cba !321"
    );
  });
});