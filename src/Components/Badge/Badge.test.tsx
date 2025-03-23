import { render, screen } from "@testing-library/react";

import Badge from "./";
import { BadgeVariantEnum } from "./types";

describe("Badge component", () => {
  const testTitle = "Test Badge";

  test("renders correctly - snapshot test", () => {
    const { asFragment } = render(
      <Badge title={testTitle} variant={BadgeVariantEnum.PRIMARY} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders the title correctly", () => {
    render(<Badge title={testTitle} variant={BadgeVariantEnum.PRIMARY} />);
    const badgeElement = screen.getByText(testTitle);
    expect(badgeElement).toBeInTheDocument();
  });

  test("applies custom class name", () => {
    const customClass = "custom-class";
    render(
      <Badge
        title={testTitle}
        variant={BadgeVariantEnum.PRIMARY}
        className={customClass}
      />
    );
    const badgeElement = screen.getByText(testTitle);
    expect(badgeElement).toHaveClass(customClass);
  });
});
