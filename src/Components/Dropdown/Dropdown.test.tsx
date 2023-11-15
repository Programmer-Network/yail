import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { useOnClickOutside } from "Hooks/useClickOutside";
import { useRef } from "react";
import { vi } from "vitest";

import { IconShare } from "Components/Icons";

import Dropdown from "./";

describe("Dropdown Component", () => {
  it("should trigger callback when clicking outside the referenced element", () => {
    const callback = vi.fn();

    const TestComponent = () => {
      const ref = useRef<HTMLDivElement>(null);

      useOnClickOutside(ref, callback);

      return <div ref={ref}>Test Div</div>;
    };

    const { getByText } = render(<TestComponent />);
    const testDiv = getByText("Test Div");

    fireEvent.mouseDown(testDiv);
    expect(callback).not.toHaveBeenCalled();

    fireEvent.mouseDown(document);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("renders dropdown button and toggles content on click", () => {
    const { getByText, queryByText } = render(
      <Dropdown
        buttonContent='Click Me'
        options={[{ value: "foo", icon: <IconShare className='w-4' /> }]}
      />
    );

    const button = getByText("Click Me");
    expect(queryByText("foo")).not.toBeInTheDocument();

    fireEvent.click(button);
    expect(queryByText("foo")).toBeInTheDocument();

    fireEvent.click(button);
    expect(queryByText("foo")).not.toBeInTheDocument();
  });

  it("renders custom children correctly", () => {
    const { getByText } = render(
      <Dropdown buttonContent='Click Me'>
        <div>Custom Content</div>
      </Dropdown>
    );

    fireEvent.click(getByText("Click Me"));
    expect(getByText("Custom Content")).toBeInTheDocument();
  });
});
