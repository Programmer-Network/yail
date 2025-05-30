import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import ViewToggle from "./index";

describe("ViewToggle", () => {
  const defaultProps = {
    currentView: "card" as const,
    onViewChange: vi.fn()
  };

  it("renders both view options", () => {
    render(<ViewToggle {...defaultProps} />);

    expect(screen.getByText("Cards")).toBeInTheDocument();
    expect(screen.getByText("Table")).toBeInTheDocument();
  });

  it("highlights the current view", () => {
    render(<ViewToggle {...defaultProps} currentView='card' />);

    const cardButton = screen.getByText("Cards").closest("button");
    const tableButton = screen.getByText("Table").closest("button");

    expect(cardButton).toHaveClass("yl:bg-primary");
    expect(tableButton).not.toHaveClass("yl:bg-primary");
  });

  it("calls onViewChange when switching views", () => {
    const handleViewChange = vi.fn();
    render(<ViewToggle {...defaultProps} onViewChange={handleViewChange} />);

    fireEvent.click(screen.getByText("Table"));
    expect(handleViewChange).toHaveBeenCalledWith("table");
  });

  it("applies custom className", () => {
    const { container } = render(
      <ViewToggle {...defaultProps} className='custom-class' />
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });
});
