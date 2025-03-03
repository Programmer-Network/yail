import { IThemeBuilderSetting } from "../types";

/**
 * Utility class for theme building operations.
 */
class ThemeBuilderUtils {
  /**
   * Sets a CSS variable's value on the document's root element.
   * @param {string} variable The name of the CSS variable to set (e.g., `--main-bg-color`).
   * @param {string} value The value to assign to the variable (e.g., `#ffffff`).
   */
  public static setCSSVariable = (variable: string, value: string) => {
    return document.documentElement.style.setProperty(variable, value);
  };

  /**
   * Sets the CSS variables for a given set of theme builder settings.
   * @param {IThemeBuilderSetting[]} settings The settings to use to set the CSS variables.
   * @returns {void}
   */
  public static setCSSVariables = (settings: IThemeBuilderSetting[]) => {
    settings.forEach(setting => {
      ThemeBuilderUtils.setCSSVariable(
        setting.customCSSProperty,
        ThemeBuilderUtils.hexToRGB(
          settings.find(s => s.type === setting.type)?.color as string
        ) || ""
      );
    });
  };

  /**
   * Converts a hex color code to its RGB representation.
   * @param {string} hex The hex color code to convert (e.g., `#ff0000`).
   * @returns {string | null} The RGB representation of the provided hex color code as a string ("r g b"), or null if the input is invalid.
   */
  public static hexToRGB = (hex: string): string | null => {
    if (!/^#([0-9A-F]{3}){1,2}$/i.test(hex)) {
      console.error("Invalid hex color format", hex);
      return null;
    }

    let r: number, g: number, b: number;

    if (hex.length === 4) {
      r = parseInt(hex.charAt(1) + hex.charAt(1), 16);
      g = parseInt(hex.charAt(2) + hex.charAt(2), 16);
      b = parseInt(hex.charAt(3) + hex.charAt(3), 16);
    } else {
      r = parseInt(hex.substring(1, 3), 16);
      g = parseInt(hex.substring(3, 5), 16);
      b = parseInt(hex.substring(5, 7), 16);
    }

    return `${r} ${g} ${b}`;
  };

  /**
   * Converts an RGB color code to its hex representation.
   * @param {string} rgb The RGB color code to convert (e.g., `255 0 0`).
   * @returns {string | null} The hex representation of the provided RGB color code as a string (e.g., `#ff0000`), or null if the input is invalid.
   */
  public static RGBToHex = (rgb: string): string | null => {
    const parts = rgb.match(/\b(\d{1,3})\b/g);

    if (!parts || parts.length !== 3) {
      console.error("Invalid RGB format");
      return null;
    }

    const [r, g, b] = parts.map(num => {
      const value = parseInt(num, 10);

      if (value < 0 || value > 255) {
        console.error("Invalid RGB value:", value);
        return null;
      }
      return value.toString(16).padStart(2, "0");
    });

    if (r === null || g === null || b === null) {
      return null;
    }

    return `#${r}${g}${b}`;
  };
}

export default ThemeBuilderUtils;
