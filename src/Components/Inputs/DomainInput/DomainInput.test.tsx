import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import DomainInput from "./";

describe("DomainInput component", () => {
  const mockOnChange = vi.fn();

  it("matches snapshot", () => {
    const props = {
      domain: "example.com",
      name: "domainInput",
      value: "test",
      onChange: mockOnChange
    };

    const { asFragment } = render(<DomainInput {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly with initial props", () => {
    const props = {
      domain: "example.com",
      name: "domainInput",
      value: "test",
      onChange: mockOnChange
    };

    render(<DomainInput {...props} />);

    expect(screen.getByDisplayValue(props.value)).toBeInTheDocument();
    expect(screen.getByText(props.domain)).toBeInTheDocument();
  });

  it("calls onChange handler when input value changes", () => {
    const props = {
      domain: "example.com",
      name: "domainInput",
      value: "test",
      onChange: mockOnChange
    };

    render(<DomainInput {...props} />);
    const inputElement = screen.getByDisplayValue(props.value);

    fireEvent.change(inputElement, { target: { value: "newTest" } });
    expect(mockOnChange).toHaveBeenCalledWith({ [props.name]: "newTest" });
  });

  it("applies focus and blur styles", () => {
    const props = {
      domain: "example.com",
      name: "domainInput",
      value: "test",
      onChange: mockOnChange
    };

    render(<DomainInput {...props} />);
    const domain = screen.getByTestId("domain");
    expect(domain).not.toHaveClass("border-border! ring-3-transparent!");

    const input = screen.getByTestId("input");
    fireEvent.focus(input);

    expect(domain).toHaveClass("border-border! ring-3-transparent!");

    fireEvent.blur(input);
    expect(domain).not.toHaveClass("border-border! ring-3-transparent!");
  });

  it("displays error when error prop is provided", () => {
    const props = {
      domain: "example.com",
      name: "domainInput",
      value: "test",
      onChange: mockOnChange,
      error: "Error message"
    };

    render(<DomainInput {...props} />);
    expect(screen.getByText(props.error)).toBeInTheDocument();
  });

  it("applies disabled styles when disabled", () => {
    const props = {
      domain: "example.com",
      name: "domainInput",
      value: "test",
      onChange: mockOnChange,
      disabled: true
    };

    render(<DomainInput {...props} />);
    const inputElement = screen.getByDisplayValue(props.value);
    expect(inputElement).toBeDisabled();
  });
});
