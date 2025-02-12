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

  test("has outlined styles when variant is outlined", () => {
    render(<Button variant='outlined'>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("yl-border-2");
    expect(button).toHaveClass("yl-text-primary");
    expect(button).toHaveClass("yl-border-primary");
  });

  test("has text styles when variant is text", () => {
    render(<Button variant='text'>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("yl-border-transparent");
    expect(button).toHaveClass("yl-text-primary");
    expect(button).toHaveClass("hover:yl-bg-primary/10");
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
    expect(button).toHaveClass("yl-text-primary-background-color");
    expect(button).toHaveClass("yl-bg-primary");
  });

  test("has correct styles when loading and filled", () => {
    render(<Button isLoading>Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("hover:yl-bg-transparent");
  });

  test("has correct styles when not disabled, not loading, and filled", () => {
    render(<Button>Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("yl-bg-primary");
    expect(button).toHaveClass("hover:yl-bg-transparent");
    expect(button).toHaveClass("hover:yl-text-primary");
  });

  test("has correct styles when disabled and outlined", () => {
    render(
      <Button disabled variant='outlined'>
        Button
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("yl-text-primary");
  });

  test("has correct styles when disabled and text variant", () => {
    render(
      <Button disabled variant='text'>
        Button
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("yl-text-primary");
    expect(button).toHaveClass("yl-border-transparent");
    expect(button).toHaveClass("yl-opacity-70");
  });

  test("has correct styles when loading and text variant", () => {
    render(
      <Button isLoading variant='text'>
        Button
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("yl-border-transparent");
    expect(screen.getByTestId("icon-spinner")).toBeInTheDocument();
  });

  test("has correct hover styles for text variant", () => {
    render(<Button variant='text'>Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("hover:yl-bg-primary/10");
    expect(button).toHaveClass("yl-border-transparent");
    expect(button).toHaveClass("yl-text-primary");
  });
});
