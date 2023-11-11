class StringUtils {
  public static validateURL(src: string) {
    if (src && typeof src === "string") {
      try {
        new URL(src);
      } catch (_) {
        throw new Error("Invalid URL provided");
      }
    }
  }
}

export default StringUtils;
