import "@testing-library/jest-dom";
import React from "react";
import { vi } from "vitest";

/**
 * Mock Icon component. This is used to avoid rendering the actual icon component
 * in the test environment. Our Icon Component is using a dynamic import to load
 * the icon SVGs, which is not supported in the test environment.
 */
vi.mock("../src/Components/Icon", () => ({
  Icon: ({ iconName, className, onClick, dataTestId, ...rest }) => {
    return React.createElement(
      "div",
      {
        "data-testid": dataTestId || `icon-${iconName}`,
        "data-icon": iconName,
        className,
        onClick,
        ...rest
      },
      `[Icon: ${iconName}]`
    );
  }
}));

/**
 * Mock dialog implementation for testing
 */
vi.mock("../src/Components/Dialog", () => {
  /**
   * @typedef {Object} DialogProps
   * @property {React.ReactNode} [children]
   * @property {string} [className]
   * @property {boolean} [isOpen]
   */

  /**
   * @type {React.ForwardRefExoticComponent<DialogProps & React.RefAttributes<HTMLDialogElement>>}
   */
  const MockDialog = React.forwardRef((props, ref) => {
    const { children, className, isOpen } = props;

    if (ref) {
      /** @type {any} - using any to bypass type checking */
      const mockDialogElement = {
        showModal: vi.fn(),
        close: vi.fn()
      };

      if (typeof ref === "function") {
        ref(mockDialogElement);
      } else {
        ref.current = mockDialogElement;
      }
    }

    return React.createElement(
      "div",
      { className, "data-testid": "mock-dialog" },
      isOpen ? children : null
    );
  });

  MockDialog.displayName = "MockDialog";

  return { Dialog: MockDialog };
});

/**
 * Mock ConfirmDialog implementation for testing
 */
vi.mock("../src/Components/ConfirmDialog", () => {
  /**
   * @typedef {Object} ConfirmDialogProps
   * @property {() => void} onConfirm
   * @property {boolean} [isLoading]
   * @property {string} [title]
   * @property {string} [message]
   * @property {string} [confirmText]
   * @property {string} [cancelText]
   * @property {string} [iconName]
   * @property {"destructive" | "info"} [variant]
   */

  /**
   * @type {React.ForwardRefExoticComponent<ConfirmDialogProps & React.RefAttributes<HTMLDialogElement>>}
   */
  const MockConfirmDialog = React.forwardRef((props, ref) => {
    const {
      onConfirm,
      title = "Confirm",
      message = "Are you sure?",
      confirmText = "Confirm",
      cancelText = "Cancel",
      variant,
      isLoading
    } = props;

    const [isOpen, setIsOpen] = React.useState(false);

    if (ref) {
      /** @type {any} - using any to bypass type checking */
      const mockDialogElement = {
        showModal: vi.fn(() => setIsOpen(true)),
        close: vi.fn(() => setIsOpen(false))
      };

      if (typeof ref === "function") {
        ref(mockDialogElement);
      } else {
        ref.current = mockDialogElement;
      }
    }

    const handleCancel = () => {
      setIsOpen(false);
      if (ref && typeof ref !== "function" && ref.current) {
        ref.current.close();
      }
    };

    // Only render when dialog is open
    if (!isOpen) return null;

    return React.createElement(
      "div",
      { "data-testid": "mock-confirm-dialog", "data-variant": variant },
      [
        title && React.createElement("h3", { key: "title" }, title),
        message && React.createElement("p", { key: "message" }, message),
        React.createElement(
          "button",
          {
            key: "confirm",
            onClick: onConfirm,
            disabled: isLoading,
            "data-testid": "confirm-button"
          },
          confirmText
        ),
        React.createElement(
          "button",
          {
            key: "cancel",
            onClick: handleCancel,
            disabled: isLoading,
            "data-testid": "cancel-button"
          },
          cancelText
        )
      ]
    );
  });

  MockConfirmDialog.displayName = "MockConfirmDialog";

  return { ConfirmDialog: MockConfirmDialog };
});
