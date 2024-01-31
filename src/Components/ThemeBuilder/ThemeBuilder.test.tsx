import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import ThemeBuilder from ".";

describe("ThemeBuilder component", () => {
  const mockSettings = {
    primary: "#4f46e5",
    background: "#1b1f23",
    text: "#6b7280"
  };

  const mockButtons = [
    {
      label: "Primary Color",
      type: "primary",
      cssVariable: "--color-primary",
      className: "primary-button"
    },
    {
      label: "Background Color",
      type: "background",
      cssVariable: "--color-bg",
      className: "background-button"
    },
    {
      label: "Text Color",
      type: "text",
      cssVariable: "--text-color",
      className: "text-button"
    }
  ];

  const mockOnColorsChange = vi.fn();
  const mockOnReset = vi.fn();

  it("renders correctly with given props", () => {
    const { asFragment } = render(
      <ThemeBuilder
        settings={mockSettings}
        buttons={mockButtons}
        onColorsChange={mockOnColorsChange}
        onReset={mockOnReset}
        isResetButtonShown={true}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders save and reset buttons when state is dirty", () => {
    render(
      <ThemeBuilder
        settings={mockSettings}
        buttons={mockButtons}
        onColorsChange={mockOnColorsChange}
        onReset={mockOnReset}
        isResetButtonShown={true}
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
        buttons={mockButtons}
        onColorsChange={mockOnColorsChange}
        onReset={mockOnReset}
        isResetButtonShown={true}
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
        buttons={mockButtons}
        onColorsChange={mockOnColorsChange}
        onReset={mockOnReset}
        isResetButtonShown={true}
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
        buttons={mockButtons}
        onColorsChange={mockOnColorsChange}
        onReset={mockOnReset}
        isResetButtonShown={true}
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

  it("conditionally renders reset button based on isResetButtonShown prop", () => {
    const { rerender } = render(
      <ThemeBuilder
        settings={mockSettings}
        buttons={mockButtons}
        onColorsChange={mockOnColorsChange}
        onReset={mockOnReset}
        isResetButtonShown={true}
      />
    );

    const primaryButton = screen.getByText("Primary Color");
    fireEvent.click(primaryButton);

    const colorPicker = screen.getByRole("presentation");
    fireEvent.change(colorPicker, { target: { value: "#ff0000" } });

    expect(screen.getByText("Reset")).toBeInTheDocument();

    rerender(
      <ThemeBuilder
        settings={mockSettings}
        buttons={mockButtons}
        onColorsChange={mockOnColorsChange}
        onReset={mockOnReset}
        isResetButtonShown={false}
      />
    );

    expect(screen.queryByText("Reset")).not.toBeInTheDocument();
  });

  it("sets initial CSS variables based on provided settings", () => {
    render(
      <ThemeBuilder
        settings={mockSettings}
        buttons={mockButtons}
        onColorsChange={mockOnColorsChange}
        onReset={mockOnReset}
        isResetButtonShown={true}
      />
    );

    expect(
      document.documentElement.style.getPropertyValue("--color-primary")
    ).toBe(mockSettings.primary);

    expect(document.documentElement.style.getPropertyValue("--color-bg")).toBe(
      mockSettings.background
    );

    expect(
      document.documentElement.style.getPropertyValue("--text-color")
    ).toBe(mockSettings.text);
  });

  it("updates CSS variables dynamically when a color is changed", () => {
    render(
      <ThemeBuilder
        settings={mockSettings}
        buttons={mockButtons}
        onColorsChange={mockOnColorsChange}
        onReset={mockOnReset}
        isResetButtonShown={true}
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
        buttons={mockButtons}
        onColorsChange={mockOnColorsChange}
        onReset={mockOnReset}
        isResetButtonShown={true}
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
