export const setCSSVariable = (variable: string, value: string) =>
  document.documentElement.style.setProperty(variable, value);

export const hexToRGB = (hex: string): string | null => {
  if (!/^#([0-9A-F]{3}){1,2}$/i.test(hex)) {
    console.error("Invalid hex color format");
    return null;
  }

  let r: number, g: number, b: number;

  if (hex.length === 4) {
    // Three-digit hex code
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else {
    // Six-digit hex code
    r = parseInt(hex.substring(1, 3), 16);
    g = parseInt(hex.substring(3, 5), 16);
    b = parseInt(hex.substring(5, 7), 16);
  }

  return `${r} ${g} ${b}`;
};

export const RGBToHex = (rgb: string): string | null => {
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

  // If any RGB value was invalid, return null
  if (r === null || g === null || b === null) {
    return null;
  }

  return `#${r}${g}${b}`;
};
