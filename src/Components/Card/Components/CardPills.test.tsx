import { render, screen } from "@testing-library/react";

import { PillVariant } from "../../Pill/Pill.types";
import { IPill } from "../types";
import CardPills from "./CardPills";

describe("CardPills component", () => {
  const mockPills: IPill[] = [
    { title: "Premium", variant: PillVariant.PRIMARY },
    { title: "Editor's Choice", variant: PillVariant.SECONDARY },
    { title: "Custom", className: "custom-class" }
  ];

  it("renders pills correctly", () => {
    render(<CardPills pills={mockPills} />);

    expect(screen.getByText("Premium")).toBeInTheDocument();
    expect(screen.getByText("Editor's Choice")).toBeInTheDocument();
    expect(screen.getByText("Custom")).toBeInTheDocument();
  });

  it("renders nothing when pills array is empty", () => {
    const { container } = render(<CardPills pills={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders nothing when pills prop is undefined", () => {
    const { container } = render(<CardPills pills={undefined} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders pills with correct variants", () => {
    render(<CardPills pills={mockPills} />);

    const premiumPill = screen.getByText("Premium");
    const editorChoicePill = screen.getByText("Editor's Choice");

    expect(premiumPill).toHaveClass("bg-primary/10");
    expect(editorChoicePill).toHaveClass("bg-muted/10");
  });

  it("applies custom className to pills", () => {
    render(<CardPills pills={mockPills} />);

    const customPill = screen.getByText("Custom");
    expect(customPill).toHaveClass("custom-class");
  });

  it("renders pills in a flex container with proper spacing", () => {
    const { container } = render(<CardPills pills={mockPills} />);

    const pillsContainer = container.firstChild as HTMLElement;
    expect(pillsContainer).toHaveClass(
      "flex",
      "items-center",
      "gap-2",
      "flex-wrap",
      "mt-3",
      "mb-1"
    );
  });

  it("handles single pill correctly", () => {
    const singlePill: IPill[] = [
      { title: "Single", variant: PillVariant.PRIMARY }
    ];

    render(<CardPills pills={singlePill} />);
    expect(screen.getByText("Single")).toBeInTheDocument();
  });
});
