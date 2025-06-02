import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import Pill from "./index";

describe("Pill Component", () => {
  it("renders children correctly", () => {
    render(<Pill>Test Pill</Pill>);
    expect(screen.getByText("Test Pill")).toBeInTheDocument();
  });

  it("applies default variant and size", () => {
    render(<Pill>Default Pill</Pill>);
    const pill = screen.getByText("Default Pill");
    expect(pill).toHaveClass(
      "yl:bg-primary/10",
      "yl:text-primary",
      "yl:px-2",
      "yl:py-1"
    );
  });

  it("applies custom variant correctly", () => {
    render(<Pill variant='error'>Error Pill</Pill>);
    const pill = screen.getByText("Error Pill");
    expect(pill).toHaveClass("yl:bg-red-500/10", "yl:text-red-400");
  });

  it("applies custom size correctly", () => {
    render(<Pill size='large'>Large Pill</Pill>);
    const pill = screen.getByText("Large Pill");
    expect(pill).toHaveClass("yl:px-3", "yl:py-1.5", "yl:text-sm");
  });

  it("renders as span when not clickable", () => {
    render(<Pill>Non-clickable</Pill>);
    const pill = screen.getByText("Non-clickable");
    expect(pill.tagName).toBe("SPAN");
    expect(pill).not.toHaveClass("yl:cursor-pointer");
  });

  it("renders as button when clickable", () => {
    const handleClick = vi.fn();
    render(
      <Pill clickable onClick={handleClick}>
        Clickable
      </Pill>
    );
    const pill = screen.getByText("Clickable");
    expect(pill.tagName).toBe("BUTTON");
    expect(pill).toHaveClass("yl:cursor-pointer");
  });

  it("handles click events correctly", () => {
    const handleClick = vi.fn();
    render(
      <Pill clickable onClick={handleClick}>
        Clickable
      </Pill>
    );
    const pill = screen.getByText("Clickable");

    fireEvent.click(pill);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies disabled state correctly", () => {
    const handleClick = vi.fn();
    render(
      <Pill clickable disabled onClick={handleClick}>
        Disabled
      </Pill>
    );
    const pill = screen.getByText("Disabled");

    expect(pill).toBeDisabled();
    expect(pill).toHaveClass("yl:cursor-not-allowed", "yl:opacity-50");

    fireEvent.click(pill);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("applies custom className", () => {
    render(<Pill className='custom-class'>Custom</Pill>);
    const pill = screen.getByText("Custom");
    expect(pill).toHaveClass("custom-class");
  });

  it("applies hover classes when clickable", () => {
    render(
      <Pill clickable variant='success'>
        Hoverable
      </Pill>
    );
    const pill = screen.getByText("Hoverable");
    expect(pill).toHaveClass("yl:hover:bg-green-500/20");
  });

  it("does not apply hover classes when disabled", () => {
    render(
      <Pill clickable disabled variant='success'>
        Disabled
      </Pill>
    );
    const pill = screen.getByText("Disabled");
    expect(pill).not.toHaveClass("yl:hover:bg-green-500/20");
  });

  describe("All variants render correctly", () => {
    const variants = [
      {
        variant: "primary",
        bgClass: "yl:bg-primary/10",
        textClass: "yl:text-primary"
      },
      {
        variant: "secondary",
        bgClass: "yl:bg-muted/10",
        textClass: "yl:text-muted"
      },
      {
        variant: "success",
        bgClass: "yl:bg-green-500/10",
        textClass: "yl:text-green-400"
      },
      {
        variant: "error",
        bgClass: "yl:bg-red-500/10",
        textClass: "yl:text-red-400"
      },
      {
        variant: "warning",
        bgClass: "yl:bg-yellow-500/10",
        textClass: "yl:text-yellow-400"
      },
      {
        variant: "indigo",
        bgClass: "yl:bg-indigo-500/10",
        textClass: "yl:text-indigo-400"
      },
      {
        variant: "purple",
        bgClass: "yl:bg-purple-500/10",
        textClass: "yl:text-purple-400"
      },
      {
        variant: "pink",
        bgClass: "yl:bg-pink-500/10",
        textClass: "yl:text-pink-400"
      }
    ] as const;

    variants.forEach(({ variant, bgClass, textClass }) => {
      it(`renders ${variant} variant correctly`, () => {
        render(<Pill variant={variant}>{variant}</Pill>);
        const pill = screen.getByText(variant);
        expect(pill).toHaveClass(bgClass, textClass);
      });
    });
  });

  describe("All sizes render correctly", () => {
    const sizes = [
      { size: "small", classes: ["yl:px-2", "yl:py-0.5", "yl:text-xs"] },
      { size: "medium", classes: ["yl:px-2", "yl:py-1", "yl:text-xs"] },
      { size: "large", classes: ["yl:px-3", "yl:py-1.5", "yl:text-sm"] }
    ] as const;

    sizes.forEach(({ size, classes }) => {
      it(`renders ${size} size correctly`, () => {
        render(<Pill size={size}>{size}</Pill>);
        const pill = screen.getByText(size);
        classes.forEach(className => {
          expect(pill).toHaveClass(className);
        });
      });
    });
  });
});
