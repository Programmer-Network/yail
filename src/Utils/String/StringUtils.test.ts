import StringUtils from "./";

describe("StringUtils", () => {
  describe("validateURL method", () => {
    test("does not throw an error for a valid URL", () => {
      const validURL = "https://www.example.com";
      expect(() => StringUtils.validateURL(validURL)).not.toThrow();
    });

    test("throws an error for an invalid URL", () => {
      const invalidURL = "invalid-url";
      expect(() => StringUtils.validateURL(invalidURL)).toThrow(
        "Invalid URL provided"
      );
    });

    test("does not throw an error for undefined input", () => {
      const undefinedURL = undefined;
      expect(() =>
        StringUtils.validateURL(undefinedURL as unknown as string)
      ).not.toThrow();
    });

    test("does not throw an error for null input", () => {
      const nullURL = null;
      expect(() =>
        StringUtils.validateURL(nullURL as unknown as string)
      ).not.toThrow();
    });
  });
});
