import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import FormActions from ".";

describe("FormActions component", () => {
  test("renders correctly - snapshot test", () => {
    const { asFragment } = render(
      <FormActions onSave={vi.fn()} onCancel={vi.fn()} onDelete={vi.fn()} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders all three buttons: Save, Cancel, and Delete", () => {
    render(<FormActions onSave={vi.fn()} onCancel={vi.fn()} />);

    expect(screen.getByText("Save")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });

  test("calls onSave function when Save button is clicked", () => {
    const handleSave = vi.fn();
    render(
      <FormActions onSave={handleSave} onCancel={vi.fn()} onDelete={vi.fn()} />
    );

    fireEvent.click(screen.getByText("Save"));
    expect(handleSave).toHaveBeenCalledTimes(1);
  });

  test("calls onCancel function when Cancel button is clicked", () => {
    const handleCancel = vi.fn();
    render(
      <FormActions
        onSave={vi.fn()}
        onCancel={handleCancel}
        onDelete={vi.fn()}
      />
    );

    fireEvent.click(screen.getByText("Cancel"));
    expect(handleCancel).toHaveBeenCalledTimes(1);
  });
});
