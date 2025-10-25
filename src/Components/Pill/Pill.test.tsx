import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { PillSize, PillVariant } from "./Pill.types";
import { Pill } from "./index";

describe("Pill Component", () => {
  it("renders children correctly", () => {
    render(
      <Pill variant={PillVariant.PRIMARY} size={PillSize.MEDIUM}>
        Test Pill
      </Pill>
    );
    expect(screen.getByText("Test Pill")).toBeInTheDocument();
  });

  it("applies default variant and size", () => {
    render(
      <Pill variant={PillVariant.PRIMARY} size={PillSize.MEDIUM}>
        Default Pill
      </Pill>
    );
    const pill = screen.getByText("Default Pill");
    expect(pill).toHaveClass("bg-primary/10", "text-primary", "px-2", "py-1");
  });

  it("applies custom variant correctly", () => {
    render(
      <Pill variant={PillVariant.ERROR} size={PillSize.MEDIUM}>
        Error Pill
      </Pill>
    );
    const pill = screen.getByText("Error Pill");
    expect(pill).toHaveClass("bg-red-500/10", "text-red-400");
  });

  it("applies custom size correctly", () => {
    render(
      <Pill variant={PillVariant.PRIMARY} size={PillSize.LARGE}>
        Large Pill
      </Pill>
    );
    const pill = screen.getByText("Large Pill");
    expect(pill).toHaveClass("px-3", "py-1.5", "text-sm");
  });

  it("renders as span when not clickable", () => {
    render(
      <Pill variant={PillVariant.PRIMARY} size={PillSize.MEDIUM}>
        Non-clickable
      </Pill>
    );
    const pill = screen.getByText("Non-clickable");
    expect(pill.tagName).toBe("SPAN");
    expect(pill).not.toHaveClass("cursor-pointer");
  });

  it("renders as button when clickable", () => {
    const handleClick = vi.fn();
    render(
      <Pill
        variant={PillVariant.PRIMARY}
        size={PillSize.MEDIUM}
        clickable
        onClick={handleClick}
      >
        Clickable
      </Pill>
    );
    const pill = screen.getByText("Clickable");
    expect(pill.tagName).toBe("BUTTON");
    expect(pill).toHaveClass("cursor-pointer");
  });

  it("handles click events correctly", () => {
    const handleClick = vi.fn();
    render(
      <Pill
        variant={PillVariant.PRIMARY}
        size={PillSize.MEDIUM}
        clickable
        onClick={handleClick}
      >
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
      <Pill
        variant={PillVariant.PRIMARY}
        size={PillSize.MEDIUM}
        clickable
        disabled
        onClick={handleClick}
      >
        Disabled
      </Pill>
    );
    const pill = screen.getByText("Disabled");

    expect(pill).toBeDisabled();
    expect(pill).toHaveClass("cursor-not-allowed", "opacity-50");

    fireEvent.click(pill);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("applies custom className", () => {
    render(
      <Pill
        variant={PillVariant.PRIMARY}
        size={PillSize.MEDIUM}
        className='custom-class'
      >
        Custom
      </Pill>
    );
    const pill = screen.getByText("Custom");
    expect(pill).toHaveClass("custom-class");
  });

  it("applies hover classes when clickable", () => {
    render(
      <Pill variant={PillVariant.SUCCESS} size={PillSize.MEDIUM} clickable>
        Hoverable
      </Pill>
    );
    const pill = screen.getByText("Hoverable");
    expect(pill).toHaveClass("hover:bg-green-500/20");
  });

  it("does not apply hover classes when disabled", () => {
    render(
      <Pill
        variant={PillVariant.SUCCESS}
        size={PillSize.MEDIUM}
        clickable
        disabled
      >
        Disabled
      </Pill>
    );
    const pill = screen.getByText("Disabled");
    expect(pill).not.toHaveClass("hover:bg-green-500/20");
  });

  describe("All variants render correctly", () => {
    const variants = [
      {
        variant: PillVariant.PRIMARY,
        bgClass: "bg-primary/10",
        textClass: "text-primary"
      },
      {
        variant: PillVariant.SECONDARY,
        bgClass: "bg-muted/10",
        textClass: "text-muted"
      },
      {
        variant: PillVariant.SUCCESS,
        bgClass: "bg-green-500/10",
        textClass: "text-green-400"
      },
      {
        variant: PillVariant.ERROR,
        bgClass: "bg-red-500/10",
        textClass: "text-red-400"
      },
      {
        variant: PillVariant.WARNING,
        bgClass: "bg-yellow-500/10",
        textClass: "text-yellow-400"
      },
      {
        variant: PillVariant.INDIGO,
        bgClass: "bg-indigo-500/10",
        textClass: "text-indigo-400"
      },
      {
        variant: PillVariant.PURPLE,
        bgClass: "bg-purple-500/10",
        textClass: "text-purple-400"
      },
      {
        variant: PillVariant.PINK,
        bgClass: "bg-pink-500/10",
        textClass: "text-pink-400"
      }
    ] as const;

    variants.forEach(({ variant, bgClass, textClass }) => {
      it(`renders ${variant} variant correctly`, () => {
        render(
          <Pill variant={variant} size={PillSize.MEDIUM}>
            {variant}
          </Pill>
        );
        const pill = screen.getByText(variant);
        expect(pill).toHaveClass(bgClass, textClass);
      });
    });
  });

  describe("All sizes render correctly", () => {
    const sizes = [
      { size: PillSize.SMALL, classes: ["px-2", "py-0.5", "text-xs"] },
      { size: PillSize.MEDIUM, classes: ["px-2", "py-1", "text-xs"] },
      { size: PillSize.LARGE, classes: ["px-3", "py-1.5", "text-sm"] }
    ];

    sizes.forEach(({ size, classes }) => {
      it(`renders ${size} size correctly`, () => {
        render(
          <Pill variant={PillVariant.PRIMARY} size={size}>
            {size}
          </Pill>
        );
        const pill = screen.getByText(size);
        classes.forEach(className => {
          expect(pill).toHaveClass(className);
        });
      });
    });
  });
});
