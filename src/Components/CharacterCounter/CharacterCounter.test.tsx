import { render, screen } from "@testing-library/react";

import CharacterCounter from "./";

describe("CharacterCounter component", () => {
  test("renders correctly - snapshot test", () => {
    const { asFragment } = render(<CharacterCounter text='Test' max={10} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("displays the correct character count and maximum", () => {
    render(<CharacterCounter text='Hello' max={10} />);
    expect(screen.getByText("Hello".length)).toBeInTheDocument();
    expect(screen.getByText("/")).toBeInTheDocument();
    expect(screen.getByText(10)).toBeInTheDocument();
  });

  test("text color changes when exceeding maximum characters", () => {
    const text = "Hello World";
    const max = 10;
    render(<CharacterCounter text={text} max={max} />);

    expect(screen.getByTestId("current-length")).toHaveTextContent(
      text.length.toString()
    );
    expect(screen.getByTestId("separator")).toHaveTextContent("/");
    expect(screen.getByTestId("max-length")).toHaveTextContent(max.toString());
    expect(screen.getByTestId("current-length").parentNode).toHaveClass(
      "text-error"
    );
  });

  test("text color does not change when within maximum characters", () => {
    render(<CharacterCounter text='Hello' max={10} />);
    const counterElement = screen.getByText("Hello".length);
    expect(counterElement).not.toHaveClass("!lg-text-error");
  });
});
