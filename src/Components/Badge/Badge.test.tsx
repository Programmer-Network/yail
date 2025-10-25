import { render, screen } from "@testing-library/react";

import { Badge } from "./";
import { BadgeVariantEnum } from "./types";

describe("Badge component", () => {
  const testTitle = "Test Badge";

  test("renders correctly - snapshot test", () => {
    const { asFragment } = render(
      <Badge title={testTitle} variant={BadgeVariantEnum.FILLED} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders the title correctly", () => {
    render(<Badge title={testTitle} variant={BadgeVariantEnum.FILLED} />);
    const badgeElement = screen.getByText(testTitle);
    expect(badgeElement).toBeInTheDocument();
  });

  test("applies filled variant", () => {
    render(<Badge title={testTitle} variant={BadgeVariantEnum.FILLED} />);
    const badgeElement = screen.getByText(testTitle);
    expect(badgeElement).toHaveClass("bg-primary");
  });

  test("applies custom class name", () => {
    const customClass = "custom-class";
    render(
      <Badge
        title={testTitle}
        variant={BadgeVariantEnum.FILLED}
        className={customClass}
      />
    );
    const badgeElement = screen.getByText(testTitle);
    expect(badgeElement).toHaveClass(customClass);
  });

  test("applies outline variant", () => {
    render(<Badge title={testTitle} variant={BadgeVariantEnum.OUTLINE} />);
    const badgeElement = screen.getByText(testTitle);
    expect(badgeElement).toHaveClass("bg-transparent");
  });

  test("applies clickable class name", () => {
    render(
      <Badge
        title={testTitle}
        variant={BadgeVariantEnum.FILLED}
        onClick={() => alert("Badge clicked")}
      />
    );

    const badgeElement = screen.getByText(testTitle);
    expect(badgeElement).toHaveClass("cursor-pointer");
  });
});
