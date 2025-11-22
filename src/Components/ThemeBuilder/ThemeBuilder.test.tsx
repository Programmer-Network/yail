import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { ThemeBuilder } from ".";
import ThemeBuilderUtils from "./ThemeBuilderUtils";

describe("ThemeBuilder component", () => {
  const mockSettings = [
    {
      label: "Primary Color",
      type: "primary",
      customCSSProperty: "--color-primary",
      color: "#4f46e5",
      defaultColor: "#4f46e5",
      className: "primary-button"
    },
    {
      label: "Background",
      type: "background",
      customCSSProperty: "--color-bg",
      color: "#ffb900",
      defaultColor: "#ffb900"
    },
    {
      label: "Text Color",
      type: "text",
      customCSSProperty: "--text-color",
      color: "#6b7280",
      defaultColor: "#6b7280"
    }
  ];

  const defaultSettings = [
    {
      label: "Primary",
      type: "primary",
      customCSSProperty: "--color-primary",
      color: "#4f46e5",
      defaultColor: "#4f46e5"
    },
    {
      label: "Background",
      type: "background",
      customCSSProperty: "--color-bg",
      color: "#ffb900",
      defaultColor: "#ffb900"
    },
    {
      label: "Text",
      type: "text",
      customCSSProperty: "--text-color",
      color: "#6b7280",
      defaultColor: "#6b7280"
    }
  ];

  const mockOnColorsChange = vi.fn();
  const mockOnReset = vi.fn();

  it("renders correctly with given props", () => {
    const { asFragment } = render(
      <ThemeBuilder
        settings={mockSettings}
        defaultSettings={defaultSettings}
        onChange={mockOnColorsChange}
        onReset={mockOnReset}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders save and reset buttons when state is dirty", () => {
    render(
      <ThemeBuilder
        settings={mockSettings}
        defaultSettings={defaultSettings}
        onChange={mockOnColorsChange}
        onReset={mockOnReset}
      />
    );

    const primaryButton = screen.getByText("Primary Color");
    fireEvent.click(primaryButton);

    const colorPicker = screen.getByRole("presentation");
    fireEvent.change(colorPicker, { target: { value: "#ff0000" } });

    expect(screen.getByText("Save")).toBeInTheDocument();
    expect(screen.getByText("Reset")).toBeInTheDocument();
  });

  it("updates selected state on button click", () => {
    render(
      <ThemeBuilder
        settings={mockSettings}
        defaultSettings={defaultSettings}
        onChange={mockOnColorsChange}
        onReset={mockOnReset}
      />
    );

    const primaryButton = screen.getByRole("button", { name: "Primary Color" });

    fireEvent.click(primaryButton);
    expect(primaryButton).toHaveClass("primary-button");
  });

  it("calls handleSaveColors on save button click", () => {
    render(
      <ThemeBuilder
        settings={mockSettings}
        defaultSettings={defaultSettings}
        onChange={mockOnColorsChange}
        onReset={mockOnReset}
      />
    );

    const primaryButton = screen.getByText("Primary Color");
    fireEvent.click(primaryButton);

    const colorPicker = screen.getByRole("presentation");
    fireEvent.change(colorPicker, { target: { value: "#ff0000" } });

    const saveButton = screen.getByText("Save");
    fireEvent.click(saveButton);
    expect(mockOnColorsChange).toHaveBeenCalled();
  });

  it("resets colors and calls onReset on reset button click", () => {
    render(
      <ThemeBuilder
        settings={mockSettings}
        defaultSettings={defaultSettings}
        onChange={mockOnColorsChange}
        onReset={mockOnReset}
      />
    );

    const primaryButton = screen.getByText("Primary Color");
    fireEvent.click(primaryButton);

    const colorPicker = screen.getByRole("presentation");
    fireEvent.change(colorPicker, { target: { value: "#ff0000" } });

    const resetButton = screen.getByText("Reset");
    fireEvent.click(resetButton);
    expect(mockOnReset).toHaveBeenCalled();
  });

  it("sets initial CSS variables based on provided settings", () => {
    render(
      <ThemeBuilder
        settings={mockSettings}
        defaultSettings={defaultSettings}
        onChange={mockOnColorsChange}
        onReset={mockOnReset}
      />
    );

    expect(
      document.documentElement.style.getPropertyValue("--color-primary")
    ).toBe("79 70 229");

    expect(document.documentElement.style.getPropertyValue("--color-bg")).toBe(
      "255 185 0"
    );

    expect(
      document.documentElement.style.getPropertyValue("--text-color")
    ).toBe("107 114 128");
  });

  it("updates CSS variables dynamically when a color is changed", () => {
    render(
      <ThemeBuilder
        settings={mockSettings}
        defaultSettings={defaultSettings}
        onChange={mockOnColorsChange}
        onReset={mockOnReset}
      />
    );

    const textButton = screen.getByText("Text Color");
    fireEvent.click(textButton);

    const colorPicker = screen.getByRole("presentation");
    fireEvent.change(colorPicker, { target: { value: "#abcdef" } });

    expect(
      document.documentElement.style.getPropertyValue("--text-color")
    ).toBe("171 205 239");
  });

  it("updates state and CSS variable on HexColorInput change", () => {
    render(
      <ThemeBuilder
        settings={mockSettings}
        defaultSettings={defaultSettings}
        onChange={mockOnColorsChange}
        onReset={mockOnReset}
      />
    );

    const textButton = screen.getByText("Text Color");
    fireEvent.click(textButton);

    const colorInput = screen.getByPlaceholderText("e.g.175ca1");
    fireEvent.change(colorInput, { target: { value: "#fedcba" } });

    expect(
      document.documentElement.style.getPropertyValue("--text-color")
    ).toBe("254 220 186");
  });
});

describe("hexToRGB", () => {
  it("converts six-character hex codes to RGB format", () => {
    expect(ThemeBuilderUtils.hexToRGB("#4f46e5")).toBe("79 70 229");
  });

  it("converts three-character hex codes to RGB format", () => {
    expect(ThemeBuilderUtils.hexToRGB("#4e2")).toBe("68 238 34");
  });

  it("returns null for invalid hex codes", () => {
    expect(ThemeBuilderUtils.hexToRGB("123456")).toBeNull();
    expect(ThemeBuilderUtils.hexToRGB("#gggggg")).toBeNull();
    expect(ThemeBuilderUtils.hexToRGB("#1234")).toBeNull();
  });

  it("is case-insensitive", () => {
    expect(ThemeBuilderUtils.hexToRGB("#4F46E5")).toBe("79 70 229");
    expect(ThemeBuilderUtils.hexToRGB("#4e2")).toBe("68 238 34");
  });

  it("handles edge cases", () => {
    expect(ThemeBuilderUtils.hexToRGB("#000000")).toBe("0 0 0");
    expect(ThemeBuilderUtils.hexToRGB("#ffffff")).toBe("255 255 255");
    expect(ThemeBuilderUtils.hexToRGB("#FFF")).toBe("255 255 255");
  });
});

describe("RGBToHex", () => {
  it("converts RGB format to six-character hex codes", () => {
    expect(ThemeBuilderUtils.RGBToHex("79 70 229")).toBe("#4f46e5");
    expect(ThemeBuilderUtils.RGBToHex("255 255 255")).toBe("#ffffff");
  });

  it("handles values with leading zeros", () => {
    expect(ThemeBuilderUtils.RGBToHex("0 0 0")).toBe("#000000");
    expect(ThemeBuilderUtils.RGBToHex("1 2 3")).toBe("#010203");
  });

  it("is strict about the input format", () => {
    expect(ThemeBuilderUtils.RGBToHex("255 0 0")).toBe("#ff0000");
    expect(ThemeBuilderUtils.RGBToHex("0 255 0")).toBe("#00ff00");
    expect(ThemeBuilderUtils.RGBToHex("0 0 255")).toBe("#0000ff");
  });

  it("handles edge cases with single and double digit values", () => {
    expect(ThemeBuilderUtils.RGBToHex("15 15 15")).toBe("#0f0f0f");
    expect(ThemeBuilderUtils.RGBToHex("5 5 5")).toBe("#050505");
  });
});

describe("RGBToHex and hexToRGB should yield the same values when converted", () => {
  it("compares if the converted colors are the same", () => {
    const rgb = ThemeBuilderUtils.hexToRGB("#0f0f0f");
    const hex = ThemeBuilderUtils.RGBToHex("15 15 15");

    expect(rgb).toBe("15 15 15");
    expect(hex).toBe("#0f0f0f");
  });
});
