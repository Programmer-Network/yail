import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import Button from ".";

describe("Button component", () => {
  test("renders correctly - snapshot test", () => {
    const { asFragment } = render(<Button>Snapshot Button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders button text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  test("is disabled when disabled prop is true", () => {
    render(<Button disabled>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  test("shows spinner when isLoading is true", () => {
    render(<Button isLoading={true}>Click me</Button>);
    expect(screen.getByTestId("icon-spinner")).toBeInTheDocument();
  });

  test("has outlined styles when outlined prop is true", () => {
    render(<Button outlined>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("border-2");
    expect(button).toHaveClass("text-primary");
    expect(button).toHaveClass("border-primary");
  });

  test("handles click events", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("has correct styles when disabled and filled", () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("text-bg-primary-background-color");
    expect(button).toHaveClass("bg-primary");
  });

  test("has correct styles when loading and filled", () => {
    render(<Button isLoading>Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("hover:bg-transparent");
  });

  test("has correct styles when not disabled, not loading, and filled", () => {
    render(<Button>Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-primary");
    expect(button).toHaveClass("hover:bg-transparent");
    expect(button).toHaveClass("hover:text-primary");
  });

  test("has correct styles when disabled and outlined", () => {
    render(
      <Button disabled outlined>
        Button
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("text-primary");
  });
});
