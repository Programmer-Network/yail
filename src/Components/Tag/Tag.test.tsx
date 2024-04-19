import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import Tag from "./";

describe("Tag component", () => {
  test("renders correctly - snapshot test", () => {
    const { asFragment } = render(<Tag name='example' />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders tag with provided name", () => {
    const tagName = "example";
    render(<Tag name={tagName} />);
    expect(screen.getByText(`#${tagName}`)).toBeInTheDocument();
  });

  test("applies custom class name", () => {
    const customClassName = "custom-class";
    render(<Tag name='example' className={customClassName} />);
    const tag = screen.getByText("#example").parentNode;
    expect(tag).toHaveClass(customClassName);
  });

  test("handles click events", () => {
    const handleClick = vi.fn();
    render(<Tag name='example' onClick={handleClick} />);
    fireEvent.click(screen.getByText("#example"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("should have yl-cursor-pointer class if onClick is provided", () => {
    const customClassName = "yl-cursor-pointer";
    render(<Tag name='example' onClick={() => null} />);
    const tag = screen.getByText("#example").parentNode;
    expect(tag).toHaveClass(customClassName);
  });
});
