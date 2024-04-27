import { render, screen } from "@testing-library/react";

import Divider from "./";

describe("Divider component", () => {
  test("renders correctly - snapshot test", () => {
    const { asFragment } = render(
      <Divider
        classes={[
          "yl-bg-primary-text-color",
          "yl-bg-primary-text-color",
          "yl-bg-primary-text-color"
        ]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("applies custom class name", () => {
    const customClass = "custom-class";
    render(
      <Divider
        className={customClass}
        classes={[
          "yl-bg-primary-text-color",
          "yl-bg-primary-text-color",
          "yl-bg-primary-text-color"
        ]}
      />
    );
    const divider = screen.getByTestId("divider");
    expect(divider).toHaveClass(customClass);
  });

  test("applies classes to child divs", () => {
    const classes = ["class1", "class2", "class3"];
    render(<Divider classes={classes} />);
    classes.forEach((className, index) => {
      expect(screen.getByTestId(`divider-child-${index}`)).toHaveClass(
        className
      );
    });
  });

  test("throws error if classes prop is not an array", () => {
    const invalidClasses = "invalid-classes";
    // @ts-expect-error - Passing invalid classes prop to Divider component for testing purposes
    expect(() => render(<Divider classes={invalidClasses} />)).toThrow(
      '💣 Divider: "classes" must be an array 💣 of class names'
    );
  });
});
