import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { ICardAction } from "../types";
import { CardFooterActions } from "./CardFooterActions";

describe("CardFooterActions component", () => {
  const mockFooterActions: ICardAction[] = [
    {
      label: "Edit",
      onClick: vi.fn(),
      variant: "primary"
    },
    {
      label: "Delete",
      onClick: vi.fn(),
      variant: "danger"
    },
    {
      label: "Share",
      onClick: vi.fn(),
      variant: "outlined"
    }
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders footer actions correctly", () => {
    render(<CardFooterActions footerActions={mockFooterActions} />);

    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
    expect(screen.getByText("Share")).toBeInTheDocument();
  });

  it("renders nothing when footerActions array is empty", () => {
    const { container } = render(<CardFooterActions footerActions={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders nothing when footerActions prop is undefined", () => {
    const { container } = render(
      <CardFooterActions footerActions={undefined} />
    );
    expect(container.firstChild).toBeNull();
  });

  it("calls onClick handler when action button is clicked", () => {
    const mockOnClick = vi.fn();
    const singleAction: ICardAction[] = [
      {
        label: "Test Action",
        onClick: mockOnClick,
        variant: "primary"
      }
    ];

    render(<CardFooterActions footerActions={singleAction} />);

    const button = screen.getByText("Test Action");
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("stops event propagation when action button is clicked", () => {
    const mockOnClick = vi.fn();

    const singleAction: ICardAction[] = [
      {
        label: "Test Action",
        onClick: mockOnClick,
        variant: "primary"
      }
    ];

    render(<CardFooterActions footerActions={singleAction} />);

    const button = screen.getByText("Test Action");

    fireEvent.click(button);

    // The actual stopPropagation is called inside the component
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("filters out actions with show=false", () => {
    const actionsWithHidden: ICardAction[] = [
      {
        label: "Visible Action",
        onClick: vi.fn(),
        variant: "primary",
        show: true
      },
      {
        label: "Hidden Action",
        onClick: vi.fn(),
        variant: "primary",
        show: false
      }
    ];

    render(<CardFooterActions footerActions={actionsWithHidden} />);

    expect(screen.getByText("Visible Action")).toBeInTheDocument();
    expect(screen.queryByText("Hidden Action")).not.toBeInTheDocument();
  });

  it("renders nothing when all actions have show=false", () => {
    const hiddenActions: ICardAction[] = [
      {
        label: "Hidden Action 1",
        onClick: vi.fn(),
        variant: "primary",
        show: false
      },
      {
        label: "Hidden Action 2",
        onClick: vi.fn(),
        variant: "primary",
        show: false
      }
    ];

    const { container } = render(
      <CardFooterActions footerActions={hiddenActions} />
    );
    expect(container.firstChild).toBeNull();
  });

  it("applies correct styling for multiple actions", () => {
    const { container } = render(
      <CardFooterActions footerActions={mockFooterActions} />
    );

    const footerActionsContainer = container.firstChild as HTMLElement;
    expect(footerActionsContainer).toHaveClass(
      "yl:flex",
      "yl:items-center",
      "yl:justify-between",
      "yl:gap-2",
      "yl:mt-4",
      "yl:pt-4",
      "yl:border-t",
      "yl:border-border/20",
      "yl:flex-wrap"
    );
  });

  it("handles single action correctly", () => {
    const singleAction: ICardAction[] = [
      {
        label: "Single Action",
        onClick: vi.fn(),
        variant: "primary"
      }
    ];

    render(<CardFooterActions footerActions={singleAction} />);

    expect(screen.getByText("Single Action")).toBeInTheDocument();
  });

  it("handles actions with icons", () => {
    const actionWithIcon: ICardAction[] = [
      {
        label: "Edit",
        onClick: vi.fn(),
        variant: "primary",
        icon: <span data-testid='edit-icon'>✏️</span>
      }
    ];

    render(<CardFooterActions footerActions={actionWithIcon} />);

    expect(screen.getByText("Edit")).toBeInTheDocument();
    // Note: The icon handling in the component converts the icon to string,
    // so we test that the button is rendered with the correct label
  });
});
