import { render, screen } from "@testing-library/react";
import { Alert } from "index";

describe("Alert component", () => {
  it("renders correctly with children", () => {
    const { asFragment } = render(
      <Alert type='success'>Success Message</Alert>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("applies correct class for success type", () => {
    render(<Alert type='success'>Success Message</Alert>);
    expect(screen.getByText("Success Message")).toHaveClass(
      "border-green-400",
      "bg-green-300",
      "text-green-700"
    );
  });

  it("applies correct class for error type", () => {
    render(<Alert type='error'>Error Message</Alert>);
    expect(screen.getByText("Error Message")).toHaveClass(
      "border-red-400",
      "bg-red-300",
      "text-red-700"
    );
  });

  it("applies correct class for warning type", () => {
    render(<Alert type='warning'>Warning Message</Alert>);
    expect(screen.getByText("Warning Message")).toHaveClass(
      "border-yellow-400",
      "bg-yellow-300",
      "text-yellow-700"
    );
  });

  it("applies correct class for info type", () => {
    render(<Alert type='info'>Info Message</Alert>);
    expect(screen.getByText("Info Message")).toHaveClass(
      "border-blue-400",
      "bg-blue-300",
      "text-blue-700"
    );
  });

  it("allows custom class names to be applied", () => {
    render(
      <Alert type='success' className='custom-class'>
        Success Message
      </Alert>
    );
    expect(screen.getByText("Success Message")).toHaveClass("custom-class");
  });
});
