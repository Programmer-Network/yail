import URLUtils from ".";

describe("URLUtils.isExternalLink", () => {
  const originalLocation = window.location;

  beforeAll(() => {
    window.location = {
      ...originalLocation,
      href: "http://localhost/",
      hostname: "localhost"
    };
  });

  afterAll(() => {
    window.location = originalLocation;
  });

  it("should return false for an internal link", () => {
    const internalUrl = "/internal/page";
    expect(URLUtils.isExternalLink(internalUrl)).toBe(false);
  });

  it("should return true for an external link", () => {
    const externalUrl = "http://www.example.com";
    expect(URLUtils.isExternalLink(externalUrl)).toBe(true);
  });

  it("should return false for a relative URL", () => {
    const relativeUrl = "../path/to/page";
    expect(URLUtils.isExternalLink(relativeUrl)).toBe(false);
  });

  it("should return false for an empty string", () => {
    const emptyUrl = "";
    expect(URLUtils.isExternalLink(emptyUrl)).toBe(false);
  });

  it("should handle malformed URLs gracefully", () => {
    const malformedUrl = "htttp://[malformed]";
    expect(URLUtils.isExternalLink(malformedUrl)).toBe(false);
  });

  it("should return true for a URL with a different hostname", () => {
    const differentHostnameUrl = "http://www.differentexample.com";
    expect(URLUtils.isExternalLink(differentHostnameUrl)).toBe(true);
  });

  it("should return false for a URL with the same hostname but different protocol", () => {
    const sameHostnameDifferentProtocolUrl = "https://localhost/";
    expect(URLUtils.isExternalLink(sameHostnameDifferentProtocolUrl)).toBe(
      false
    );
  });

  it("should return false for an invalid URL", () => {
    expect(URLUtils.isExternalLink("banana")).toBe(false);
  });
});
