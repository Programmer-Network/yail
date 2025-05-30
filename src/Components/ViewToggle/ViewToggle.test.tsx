import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import ViewToggle from "./index";

describe("ViewToggle", () => {
  const defaultProps = {
    currentView: "card" as const,
    onViewChange: vi.fn()
  };

  it("applies custom className", () => {
    const { container } = render(
      <ViewToggle {...defaultProps} className='custom-class' />
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });
});
