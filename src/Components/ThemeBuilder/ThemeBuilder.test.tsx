import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import ThemeBuilder from ".";
import { hexToRGB } from "./utils";

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
      color: "#1b1f23",
      defaultColor: "#1b1f23"
    },
    {
      label: "Text Color",
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
        onChange={mockOnColorsChange}
        onReset={mockOnReset}
      />
    );

    const primaryButton = screen.getByText("Primary Color");

    fireEvent.click(primaryButton);
    expect(primaryButton.parentNode?.parentNode).toHaveClass("primary-button");
  });

  it("calls handleSaveColors on save button click", () => {
    render(
      <ThemeBuilder
        settings={mockSettings}
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
        onChange={mockOnColorsChange}
        onReset={mockOnReset}
      />
    );

    expect(
      document.documentElement.style.getPropertyValue("--color-primary")
    ).toBe(mockSettings[0].color);

    expect(document.documentElement.style.getPropertyValue("--color-bg")).toBe(
      mockSettings[1].color
    );

    expect(
      document.documentElement.style.getPropertyValue("--text-color")
    ).toBe(mockSettings[2].color);
  });

  it("updates CSS variables dynamically when a color is changed", () => {
    render(
      <ThemeBuilder
        settings={mockSettings}
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
    ).toBe("#abcdef");
  });

  it("updates state and CSS variable on HexColorInput change", () => {
    render(
      <ThemeBuilder
        settings={mockSettings}
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
    ).toBe("#fedcba");
  });
});

describe("hexToRGB", () => {
  it("converts six-character hex codes to RGB format", () => {
    expect(hexToRGB("#4f46e5")).toBe("79 70 229");
  });

  it("converts three-character hex codes to RGB format", () => {
    expect(hexToRGB("#4e2")).toBe("68 238 34");
  });

  it("returns null for invalid hex codes", () => {
    expect(hexToRGB("123456")).toBeNull();
    expect(hexToRGB("#gggggg")).toBeNull();
    expect(hexToRGB("#1234")).toBeNull();
  });

  it("is case-insensitive", () => {
    expect(hexToRGB("#4F46E5")).toBe("79 70 229");
    expect(hexToRGB("#4e2")).toBe("68 238 34");
  });

  it("handles edge cases", () => {
    expect(hexToRGB("#000000")).toBe("0 0 0");
    expect(hexToRGB("#ffffff")).toBe("255 255 255");
    expect(hexToRGB("#FFF")).toBe("255 255 255");
  });
});
