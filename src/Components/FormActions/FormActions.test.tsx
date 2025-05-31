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

    // Look for button with Delete text that has the IconBomb icon
    const deleteButtons = screen.getAllByText("Delete");
    expect(deleteButtons.length).toBeGreaterThanOrEqual(1);

    // Find the button that is part of the main interface (not in a dialog)
    const mainDeleteButton = deleteButtons.find(
      button =>
        button.closest("button")?.getAttribute("type") === "button" &&
        button.closest("[data-testid='mock-confirm-dialog']") === null
    );
    expect(mainDeleteButton).toBeInTheDocument();
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

    // Dialog should not be visible initially
    expect(screen.queryByTestId("mock-confirm-dialog")).not.toBeInTheDocument();

    // Find the main delete button and click it
    const deleteButtons = screen.getAllByText("Delete");
    const mainDeleteButton = deleteButtons.find(
      button =>
        button.closest("button")?.getAttribute("type") === "button" &&
        button.closest("[data-testid='mock-confirm-dialog']") === null
    );

    fireEvent.click(mainDeleteButton!.closest("button")!);

    // Check for the ConfirmDialog with destructive variant
    const confirmDialog = screen.getByTestId("mock-confirm-dialog");
    expect(confirmDialog).toBeInTheDocument();
    expect(confirmDialog).toHaveAttribute("data-variant", "destructive");
  });

  test("calls onDelete when confirm button is clicked in delete dialog", async () => {
    const handleDelete = vi.fn();
    render(
      <FormActions
        onSave={vi.fn()}
        onCancel={vi.fn()}
        onDelete={handleDelete}
        showDelete={true}
      />
    );

    // Find the main delete button and click it
    const deleteButtons = screen.getAllByText("Delete");
    const mainDeleteButton = deleteButtons.find(
      button =>
        button.closest("button")?.getAttribute("type") === "button" &&
        button.closest("[data-testid='mock-confirm-dialog']") === null
    );

    fireEvent.click(mainDeleteButton!.closest("button")!);

    // Click the confirm button in the dialog
    const confirmButton = screen.getByTestId("confirm-button");
    fireEvent.click(confirmButton);

    expect(handleDelete).toHaveBeenCalledTimes(1);
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

    // Find the Remove button in the main interface
    const removeButtons = screen.getAllByText("Remove");
    const mainRemoveButton = removeButtons.find(
      button =>
        button.closest("button")?.getAttribute("type") === "button" &&
        button.closest("[data-testid='mock-confirm-dialog']") === null
    );
    expect(mainRemoveButton).toBeInTheDocument();
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

  test("renders delete dialog with custom title and message", () => {
    render(
      <FormActions
        onSave={vi.fn()}
        onCancel={vi.fn()}
        onDelete={vi.fn()}
        showDelete={true}
        dialogDeleteTitle='Custom Delete Title'
        dialogDeleteText='Custom delete message'
      />
    );

    // Find the main delete button and click it
    const deleteButtons = screen.getAllByText("Delete");
    const mainDeleteButton = deleteButtons.find(
      button =>
        button.closest("button")?.getAttribute("type") === "button" &&
        button.closest("[data-testid='mock-confirm-dialog']") === null
    );

    fireEvent.click(mainDeleteButton!.closest("button")!);

    expect(screen.getByText("Custom Delete Title")).toBeInTheDocument();
    expect(screen.getByText("Custom delete message")).toBeInTheDocument();
  });

  describe("Error handling", () => {
    test("calls onSaveError when save operation fails", async () => {
      const handleSave = vi.fn().mockRejectedValue(new Error("Save failed"));
      const handleSaveError = vi.fn();

      render(
        <FormActions
          onSave={handleSave}
          onSaveError={handleSaveError}
          onCancel={vi.fn()}
        />
      );

      fireEvent.click(screen.getByText("Save"));

      // Wait for the async operation to complete
      await vi.waitFor(() => {
        expect(handleSaveError).toHaveBeenCalledTimes(1);
        expect(handleSaveError).toHaveBeenCalledWith(
          expect.objectContaining({
            message: "Save failed"
          })
        );
      });
    });

    test("calls onDeleteError when delete operation fails", async () => {
      const handleDelete = vi
        .fn()
        .mockRejectedValue(new Error("Delete failed"));
      const handleDeleteError = vi.fn();

      render(
        <FormActions
          onSave={vi.fn()}
          onCancel={vi.fn()}
          onDelete={handleDelete}
          onDeleteError={handleDeleteError}
          showDelete={true}
        />
      );

      // Find and click the main delete button
      const deleteButtons = screen.getAllByText("Delete");
      const mainDeleteButton = deleteButtons.find(
        button =>
          button.closest("button")?.getAttribute("type") === "button" &&
          button.closest("[data-testid='mock-confirm-dialog']") === null
      );
      fireEvent.click(mainDeleteButton!.closest("button")!);

      // Click the confirm button in the dialog
      const confirmButton = screen.getByTestId("confirm-button");
      fireEvent.click(confirmButton);

      // Wait for the async operation to complete
      await vi.waitFor(() => {
        expect(handleDeleteError).toHaveBeenCalledTimes(1);
        expect(handleDeleteError).toHaveBeenCalledWith(
          expect.objectContaining({
            message: "Delete failed"
          })
        );
      });
    });

    test("converts non-Error objects to Error instances for onSaveError", async () => {
      const handleSave = vi.fn().mockRejectedValue("String error");
      const handleSaveError = vi.fn();

      render(
        <FormActions
          onSave={handleSave}
          onSaveError={handleSaveError}
          onCancel={vi.fn()}
        />
      );

      fireEvent.click(screen.getByText("Save"));

      await vi.waitFor(() => {
        expect(handleSaveError).toHaveBeenCalledTimes(1);
        expect(handleSaveError).toHaveBeenCalledWith(
          expect.objectContaining({
            message: "String error"
          })
        );
      });
    });

    test("converts non-Error objects to Error instances for onDeleteError", async () => {
      const handleDelete = vi
        .fn()
        .mockRejectedValue({ code: 500, message: "Server error" });
      const handleDeleteError = vi.fn();

      render(
        <FormActions
          onSave={vi.fn()}
          onCancel={vi.fn()}
          onDelete={handleDelete}
          onDeleteError={handleDeleteError}
          showDelete={true}
        />
      );

      // Find and click the main delete button
      const deleteButtons = screen.getAllByText("Delete");
      const mainDeleteButton = deleteButtons.find(
        button =>
          button.closest("button")?.getAttribute("type") === "button" &&
          button.closest("[data-testid='mock-confirm-dialog']") === null
      );
      fireEvent.click(mainDeleteButton!.closest("button")!);

      // Click the confirm button in the dialog
      const confirmButton = screen.getByTestId("confirm-button");
      fireEvent.click(confirmButton);

      await vi.waitFor(() => {
        expect(handleDeleteError).toHaveBeenCalledTimes(1);
        expect(handleDeleteError).toHaveBeenCalledWith(
          expect.objectContaining({
            message: "[object Object]"
          })
        );
      });
    });

    test("does not call error handlers when operations succeed", async () => {
      const handleSave = vi.fn().mockResolvedValue(undefined);
      const handleDelete = vi.fn().mockResolvedValue(undefined);
      const handleSaveError = vi.fn();
      const handleDeleteError = vi.fn();

      render(
        <FormActions
          onSave={handleSave}
          onSaveError={handleSaveError}
          onCancel={vi.fn()}
          onDelete={handleDelete}
          onDeleteError={handleDeleteError}
          showDelete={true}
        />
      );

      // Test successful save
      fireEvent.click(screen.getByText("Save"));
      await vi.waitFor(() => {
        expect(handleSave).toHaveBeenCalledTimes(1);
      });

      // Wait for save operation to complete and button to be enabled again
      const saveButton = screen.getByText("Save").closest("button");
      await vi.waitFor(() => {
        expect(saveButton).not.toBeDisabled();
      });

      // Test successful delete
      const deleteButtons = screen.getAllByText("Delete");
      const mainDeleteButton = deleteButtons.find(
        button =>
          button.closest("button")?.getAttribute("type") === "button" &&
          button.closest("[data-testid='mock-confirm-dialog']") === null
      );
      fireEvent.click(mainDeleteButton!.closest("button")!);

      const confirmButton = screen.getByTestId("confirm-button");
      fireEvent.click(confirmButton);

      await vi.waitFor(() => {
        expect(handleDelete).toHaveBeenCalledTimes(1);
      });

      // Error handlers should not have been called
      expect(handleSaveError).not.toHaveBeenCalled();
      expect(handleDeleteError).not.toHaveBeenCalled();
    });

    test("resets loading state after save error", async () => {
      const handleSave = vi.fn().mockRejectedValue(new Error("Save failed"));
      const handleSaveError = vi.fn();

      render(
        <FormActions
          onSave={handleSave}
          onSaveError={handleSaveError}
          onCancel={vi.fn()}
        />
      );

      const saveButton = screen.getByText("Save").closest("button");

      fireEvent.click(screen.getByText("Save"));

      // Button should be disabled during loading
      expect(saveButton).toBeDisabled();

      // Wait for error to be handled
      await vi.waitFor(() => {
        expect(handleSaveError).toHaveBeenCalledTimes(1);
      });

      // Button should be enabled again after error
      expect(saveButton).not.toBeDisabled();
    });

    test("resets loading state after delete error", async () => {
      const handleDelete = vi
        .fn()
        .mockRejectedValue(new Error("Delete failed"));
      const handleDeleteError = vi.fn();

      render(
        <FormActions
          onSave={vi.fn()}
          onCancel={vi.fn()}
          onDelete={handleDelete}
          onDeleteError={handleDeleteError}
          showDelete={true}
        />
      );

      // Find and click the main delete button
      const deleteButtons = screen.getAllByText("Delete");
      const mainDeleteButton = deleteButtons.find(
        button =>
          button.closest("button")?.getAttribute("type") === "button" &&
          button.closest("[data-testid='mock-confirm-dialog']") === null
      );
      fireEvent.click(mainDeleteButton!.closest("button")!);

      // Get the confirm button and check it's not disabled initially
      const confirmButton = screen.getByTestId("confirm-button");
      expect(confirmButton).not.toBeDisabled();

      fireEvent.click(confirmButton);

      // Wait for error to be handled
      await vi.waitFor(() => {
        expect(handleDeleteError).toHaveBeenCalledTimes(1);
      });

      // Confirm button should not be in loading state after error
      expect(confirmButton).not.toHaveAttribute("data-loading", "true");
    });
  });
});
