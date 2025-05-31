import { render, screen } from "@testing-library/react";

import { BadgeVariantEnum } from "../../Badge/types";
import { IBadge } from "../types";
import CardBadges from "./CardBadges";

describe("CardBadges component", () => {
  const mockBadges: IBadge[] = [
    { title: "Premium", variant: BadgeVariantEnum.FILLED },
    { title: "Editor's Choice", variant: BadgeVariantEnum.OUTLINE },
    { title: "Custom", className: "custom-class" }
  ];

  it("renders badges correctly", () => {
    render(<CardBadges badges={mockBadges} />);

    expect(screen.getByText("Premium")).toBeInTheDocument();
    expect(screen.getByText("Editor's Choice")).toBeInTheDocument();
    expect(screen.getByText("Custom")).toBeInTheDocument();
  });

  it("renders nothing when badges array is empty", () => {
    const { container } = render(<CardBadges badges={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders nothing when badges prop is undefined", () => {
    const { container } = render(<CardBadges badges={undefined} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders badges with correct variants", () => {
    render(<CardBadges badges={mockBadges} />);

    const premiumBadge = screen.getByText("Premium");
    const editorChoiceBadge = screen.getByText("Editor's Choice");

    expect(premiumBadge).toHaveClass("yl:bg-primary");
    expect(editorChoiceBadge).toHaveClass("yl:bg-transparent");
  });

  it("applies custom className to badges", () => {
    render(<CardBadges badges={mockBadges} />);

    const customBadge = screen.getByText("Custom");
    expect(customBadge).toHaveClass("custom-class");
  });

  it("renders badges in a flex container with proper spacing", () => {
    const { container } = render(<CardBadges badges={mockBadges} />);

    const badgesContainer = container.firstChild as HTMLElement;
    expect(badgesContainer).toHaveClass(
      "yl:flex",
      "yl:items-center",
      "yl:gap-2",
      "yl:flex-wrap",
      "yl:mt-3",
      "yl:mb-1"
    );
  });

  it("handles single badge correctly", () => {
    const singleBadge: IBadge[] = [
      { title: "Single", variant: BadgeVariantEnum.FILLED }
    ];

    render(<CardBadges badges={singleBadge} />);
    expect(screen.getByText("Single")).toBeInTheDocument();
  });
});
