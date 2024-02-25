import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import ItemActions from ".";

vi.mock("Components/Icon", () => ({
  __esModule: true,
  default: ({
    iconName,
    onClick,
    className
  }: {
    iconName: string;
    onClick: () => void;
    className: string;
  }) => (
    <div
      data-testid={`icon-${iconName.toLowerCase()}`}
      className={className}
      onClick={onClick}
    >
      {iconName}
    </div>
  )
}));

describe("ItemActions component", () => {
  const mockItem = { id: 1, name: "Test Item" };

  test("renders edit icon when onEdit is provided", async () => {
    render(<ItemActions item={mockItem} onEdit={vi.fn()} />);
    const editIcon = await screen.findByTestId("icon-iconedit");
    expect(editIcon).toBeInTheDocument();
  });

  test("renders delete icon when onDelete is provided", async () => {
    render(<ItemActions item={mockItem} onDelete={vi.fn()} />);
    const deleteIcon = await screen.findByTestId("icon-icondeletebin");
    expect(deleteIcon).toBeInTheDocument();
  });

  test("calls onEdit callback when edit icon is clicked", async () => {
    const onEdit = vi.fn();
    render(<ItemActions item={mockItem} onEdit={onEdit} />);
    const editIcon = await screen.findByTestId("icon-iconedit");
    fireEvent.click(editIcon);
    expect(onEdit).toHaveBeenCalledTimes(1);
    expect(onEdit).toHaveBeenCalledWith(mockItem);
  });

  test("calls onDelete callback when delete icon is clicked", async () => {
    const onDelete = vi.fn();
    render(<ItemActions item={mockItem} onDelete={onDelete} />);
    const deleteIcon = await screen.findByTestId("icon-icondeletebin");
    fireEvent.click(deleteIcon);
    expect(onDelete).toHaveBeenCalledTimes(1);
    expect(onDelete).toHaveBeenCalledWith(mockItem);
  });
});
