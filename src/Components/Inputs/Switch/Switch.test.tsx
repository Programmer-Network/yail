import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import Switch from ".";

describe("Switch component", () => {
  const name = "testSwitch";
  const label = "Toggle me";

  test("renders with correct label", () => {
    render(
      <Switch name={name} isChecked={false} onChange={vi.fn()} label={label} />
    );
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  test("toggles state correctly when clicked", () => {
    const onChange = vi.fn();
    render(<Switch name={name} isChecked={false} onChange={onChange} />);
    const input = screen.getByRole("checkbox");
    fireEvent.click(input);
    expect(onChange).toHaveBeenCalledWith({ [name]: true });
  });

  test("uses the className prop if provided", () => {
    const className = "my-custom-classname";
    render(
      <Switch
        name={name}
        isChecked={false}
        onChange={vi.fn()}
        className={className}
      />
    );
    const labelElement = screen.getByRole("checkbox").parentElement;
    expect(labelElement).toHaveClass(className);
  });

  test("is initially checked if isChecked prop is true", () => {
    render(<Switch name={name} isChecked={true} onChange={vi.fn()} />);
    const input = screen.getByRole("checkbox");
    expect(input).toBeChecked();
  });

  test("calls onChange with the correct object shape", () => {
    const onChange = vi.fn();
    render(<Switch name={name} isChecked={false} onChange={onChange} />);
    const input = screen.getByRole("checkbox");
    fireEvent.click(input);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith({ [name]: true });
  });
});
