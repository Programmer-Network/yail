import "@testing-library/jest-dom";
import React from "react";
import { vi } from "vitest";

/**
 * Mock Icon component. This is used to avoid rendering the actual icon component
 * in the test environment. Our Icon Component is using a dynamic import to load
 * the icon SVGs, which is not supported in the test environment.
 */
vi.mock("../src/Components/Icon", () => ({
  default: ({ iconName, className, onClick, dataTestId, ...rest }) => {
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

  return { default: MockDialog };
});
