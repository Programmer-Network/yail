import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import FormActions from ".";

describe("FormActions component", () => {
  test("renders correctly - snapshot test", () => {
    const { asFragment } = render(
      <FormActions
        onSave={vi.fn()}
        onCancel={vi.fn()}
        onDelete={vi.fn()}
        showDelete={true}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders save and cancel buttons by default", () => {
    render(<FormActions onSave={vi.fn()} onCancel={vi.fn()} />);

    expect(screen.getByText("Save")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });

  test("renders delete button when showDelete is true", () => {
    render(
      <FormActions
        onSave={vi.fn()}
        onCancel={vi.fn()}
        onDelete={vi.fn()}
        showDelete={true}
      />
    );

    expect(screen.getByText("Delete")).toBeInTheDocument();
  });

  test("does not render delete button when showDelete is false", () => {
    render(
      <FormActions
        onSave={vi.fn()}
        onCancel={vi.fn()}
        onDelete={vi.fn()}
        showDelete={false}
      />
    );

    expect(screen.queryByText("Delete")).not.toBeInTheDocument();
  });

  test("calls onSave function when Save button is clicked", () => {
    const handleSave = vi.fn();
    render(<FormActions onSave={handleSave} onCancel={vi.fn()} />);

    fireEvent.click(screen.getByText("Save"));
    expect(handleSave).toHaveBeenCalledTimes(1);
  });

  test("calls onCancel function when Cancel button is clicked", () => {
    const handleCancel = vi.fn();
    render(<FormActions onSave={vi.fn()} onCancel={handleCancel} />);

    fireEvent.click(screen.getByText("Cancel"));
    expect(handleCancel).toHaveBeenCalledTimes(1);
  });

  test("shows delete confirmation dialog when delete button is clicked", async () => {
    render(
      <FormActions
        onSave={vi.fn()}
        onCancel={vi.fn()}
        onDelete={vi.fn()}
        showDelete={true}
      />
    );

    fireEvent.click(screen.getByText("Delete"));

    // Since the dialog is mocked, we should check for the dialog element itself
    // rather than the content inside it
    expect(screen.getByTestId("mock-dialog")).toBeInTheDocument();
  });

  test("renders custom button text", () => {
    render(
      <FormActions
        onSave={vi.fn()}
        onCancel={vi.fn()}
        onDelete={vi.fn()}
        saveText='Update'
        cancelText='Discard'
        deleteText='Remove'
        showDelete={true}
      />
    );

    expect(screen.getByText("Update")).toBeInTheDocument();
    expect(screen.getByText("Discard")).toBeInTheDocument();
    expect(screen.getByText("Remove")).toBeInTheDocument();
  });

  test("disables buttons when disabled prop is true", () => {
    render(<FormActions onSave={vi.fn()} onCancel={vi.fn()} disabled={true} />);

    // Check the actual button elements, not the text content
    const saveButton = screen.getByText("Save").closest("button");
    const cancelButton = screen.getByText("Cancel").closest("button");

    expect(saveButton).toBeDisabled();
    expect(cancelButton).toBeDisabled();
  });

  test("shows loading state on save button when isSaving is true", () => {
    render(<FormActions onSave={vi.fn()} onCancel={vi.fn()} isSaving={true} />);

    const saveButton = screen.getByText("Save").closest("button");
    expect(saveButton).toBeDisabled();
  });

  test("conditionally renders buttons based on show props", () => {
    render(
      <FormActions
        onSave={vi.fn()}
        onCancel={vi.fn()}
        showSave={false}
        showCancel={false}
      />
    );

    expect(screen.queryByText("Save")).not.toBeInTheDocument();
    expect(screen.queryByText("Cancel")).not.toBeInTheDocument();
  });

  test("renders with different size classes", () => {
    const { rerender } = render(
      <FormActions onSave={vi.fn()} onCancel={vi.fn()} size='small' />
    );

    // Look for the main container that has the gap classes
    let container = screen.getByText("Save").closest("div")
      ?.parentElement?.parentElement;
    expect(container).toHaveClass("yl:gap-2");

    rerender(<FormActions onSave={vi.fn()} onCancel={vi.fn()} size='large' />);
    container = screen.getByText("Save").closest("div")
      ?.parentElement?.parentElement;
    expect(container).toHaveClass("yl:gap-4");
  });
});
