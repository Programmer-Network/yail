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
