import { render, screen } from "@testing-library/react";

import Divider from "./";

describe("Divider component", () => {
  test("renders correctly - snapshot test", () => {
    const { asFragment } = render(
      <Divider classes={["yl:bg-text", "yl:bg-text", "yl:bg-text"]} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("applies custom class name", () => {
    const customClass = "custom-class";
    render(
      <Divider
        className={customClass}
        classes={["yl:bg-text", "yl:bg-text", "yl:bg-text"]}
      />
    );
    const divider = screen.getByTestId("divider");
    expect(divider).toHaveClass(customClass);
  });

  test("throws error if classes prop is not an array", () => {
    const invalidClasses = "invalid-classes";
    // @ts-expect-error - Passing invalid classes prop to Divider component for testing purposes
    expect(() => render(<Divider classes={invalidClasses} />)).toThrow(
      '💣 Divider: "classes" must be an array 💣 of class names'
    );
  });
});
