import { render, screen } from "@testing-library/react";

import Badge from "./";

describe("Badge component", () => {
  const testTitle = "Test Badge";

  test("renders correctly - snapshot test", () => {
    const { asFragment } = render(<Badge title={testTitle} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders the title correctly", () => {
    render(<Badge title={testTitle} />);
    const badgeElement = screen.getByText(testTitle);
    expect(badgeElement).toBeInTheDocument();
  });

  test("applies custom class name", () => {
    const customClass = "custom-class";
    render(<Badge title={testTitle} className={customClass} />);
    const badgeElement = screen.getByText(testTitle);
    expect(badgeElement).toHaveClass(customClass);
  });
});
