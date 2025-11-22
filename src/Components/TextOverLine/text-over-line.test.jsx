import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { TextOverLine } from "./";

describe("TextOverLine component", () => {
  test("renders without crashing", () => {
    render(<TextOverLine>Test</TextOverLine>);
    const textOverLineElement = screen.getByText("Test");
    expect(textOverLineElement).toBeInTheDocument();
  });

  test("applies custom class names", () => {
    const customClassName = "test-class";
    render(<TextOverLine className={customClassName}>Test</TextOverLine>);
    const textOverLineElement = screen.getByText("Test");
    expect(textOverLineElement.parentElement).toHaveClass(customClassName);
  });

  test("displays children text", () => {
    const testText = "Test Text";
    render(<TextOverLine>{testText}</TextOverLine>);
    const textOverLineElement = screen.getByText(testText);
    expect(textOverLineElement).toBeInTheDocument();
  });

  test("has default styles", () => {
    render(<TextOverLine>Test</TextOverLine>);
    const lineElement = screen.getByRole("separator");
    expect(lineElement).toHaveClass("yl:bg-background");
    expect(lineElement).toHaveClass("yl:h-px");
    const textElement = screen.getByText("Test");
    expect(textElement).toHaveClass("yl:bg-background");
    expect(textElement).toHaveClass("yl:text-text");
  });
});
