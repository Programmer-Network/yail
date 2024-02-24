class URLUtils {
  /**
   * Checks if a given URL is an external link.
   *
   * @param {string} url - The URL to check.
   * @returns {boolean} - Returns true if the URL is external, false otherwise.
   */
  public static isExternalLink(url: string): boolean {
    try {
      if (!url) {
        return false;
      }

      return (
        new URL(url, window.location.href).hostname !== window.location.hostname
      );
    } catch (error) {
      return false;
    }
  }
}

export default URLUtils;
