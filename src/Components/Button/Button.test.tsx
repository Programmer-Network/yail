import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { Button, ButtonSizeEnum, ButtonVariantEnum } from ".";

describe("Button component", () => {
  test("renders correctly - snapshot test", () => {
    const { asFragment } = render(<Button>Snapshot Button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders button text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  test("is disabled when disabled prop is true", () => {
    render(<Button disabled>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  test("shows spinner when isLoading is true", () => {
    render(<Button isLoading={true}>Click me</Button>);
    expect(screen.getByTestId("icon-spinner")).toBeInTheDocument();
  });

  test("has outlined styles when outlined prop is true", () => {
    render(<Button outlined>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("yl:border");
    expect(button).toHaveClass("yl:text-primary");
    expect(button).toHaveClass("yl:border-primary");
  });

  test("handles click events", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("has correct styles when disabled and filled", () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("yl:bg-primary");
  });

  test("has correct styles when loading and filled", () => {
    render(<Button isLoading>Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("yl:hover:fill-background");
  });

  test("has correct styles when not disabled, not loading, and filled", () => {
    render(<Button>Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("yl:bg-primary");
    expect(button).toHaveClass("yl:hover:bg-transparent");
    expect(button).toHaveClass("yl:hover:text-primary");
  });

  test("has correct styles when disabled and outlined", () => {
    render(
      <Button disabled outlined>
        Button
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("yl:text-primary");
  });

  // Size Variants Tests
  describe("Size Variants", () => {
    test("sm size renders with correct padding and font size", () => {
      render(<Button size={ButtonSizeEnum.SM}>Small Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:px-2");
      expect(button).toHaveClass("yl:py-1");
      expect(button).toHaveClass("yl:text-xs");
    });

    test("md size renders with correct padding and font size (default)", () => {
      render(<Button size={ButtonSizeEnum.MD}>Medium Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:px-3");
      expect(button).toHaveClass("yl:py-2");
      expect(button).toHaveClass("yl:text-sm");
    });

    test("default size is md", () => {
      render(<Button>Default Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:px-3");
      expect(button).toHaveClass("yl:py-2");
      expect(button).toHaveClass("yl:text-sm");
    });

    test("lg size renders with correct padding and font size", () => {
      render(<Button size={ButtonSizeEnum.LG}>Large Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:px-4");
      expect(button).toHaveClass("yl:py-3");
      expect(button).toHaveClass("yl:text-base");
    });

    test("sm size with icon-only has correct padding", () => {
      render(
        <Button
          size={ButtonSizeEnum.SM}
          icon={{ iconName: "IconBomb", iconPosition: "center" }}
        />
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:p-2");
      expect(button).toHaveClass("yl:min-w-[2rem]");
      expect(button).toHaveClass("yl:min-h-[2rem]");
    });

    test("lg size with icon-only has correct padding", () => {
      render(
        <Button
          size={ButtonSizeEnum.LG}
          icon={{ iconName: "IconBomb", iconPosition: "center" }}
        />
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:p-3");
      expect(button).toHaveClass("yl:min-w-[3rem]");
      expect(button).toHaveClass("yl:min-h-[3rem]");
    });

    test("size works with outlined buttons", () => {
      render(
        <Button size={ButtonSizeEnum.SM} outlined>
          Small Outlined
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:px-2");
      expect(button).toHaveClass("yl:py-1");
      expect(button).toHaveClass("yl:text-xs");
    });

    test("size works with all variants", () => {
      const { rerender } = render(
        <Button size={ButtonSizeEnum.SM} variant={ButtonVariantEnum.PRIMARY}>
          Button
        </Button>
      );
      let button = screen.getByRole("button");
      expect(button).toHaveClass("yl:text-xs");

      rerender(
        <Button size={ButtonSizeEnum.SM} variant={ButtonVariantEnum.ERROR}>
          Button
        </Button>
      );
      button = screen.getByRole("button");
      expect(button).toHaveClass("yl:text-xs");
    });
  });

  // New Variants (SUCCESS, WARNING) Tests
  describe("SUCCESS and WARNING Variants", () => {
    test("SUCCESS variant renders correctly", () => {
      render(
        <Button variant={ButtonVariantEnum.SUCCESS}>Mark Complete</Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:bg-success");
      expect(button).toHaveClass("yl:border-success");
      expect(button).toHaveClass("yl:text-background");
    });

    test("SUCCESS outlined renders correctly", () => {
      render(
        <Button variant={ButtonVariantEnum.SUCCESS} outlined>
          Mark Complete
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:bg-transparent");
      expect(button).toHaveClass("yl:text-success");
      expect(button).toHaveClass("yl:border-success");
    });

    test("SUCCESS variant with icon", () => {
      render(
        <Button
          variant={ButtonVariantEnum.SUCCESS}
          icon={{ iconName: "IconCheck", iconPosition: "left" }}
        >
          Approve
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:bg-success");
    });

    test("SUCCESS variant with loading state", () => {
      render(
        <Button variant={ButtonVariantEnum.SUCCESS} isLoading>
          Processing
        </Button>
      );
      expect(screen.getByTestId("icon-spinner")).toBeInTheDocument();
    });

    test("SUCCESS variant disabled state", () => {
      render(
        <Button variant={ButtonVariantEnum.SUCCESS} disabled>
          Mark Complete
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
      expect(button).toHaveClass("yl:opacity-70");
    });

    test("WARNING variant renders correctly", () => {
      render(<Button variant={ButtonVariantEnum.WARNING}>Archive</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:bg-warning");
      expect(button).toHaveClass("yl:border-warning");
      expect(button).toHaveClass("yl:text-background");
    });

    test("WARNING outlined renders correctly", () => {
      render(
        <Button variant={ButtonVariantEnum.WARNING} outlined>
          Archive
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:bg-transparent");
      expect(button).toHaveClass("yl:text-warning");
      expect(button).toHaveClass("yl:border-warning");
    });

    test("WARNING variant with icon", () => {
      render(
        <Button
          variant={ButtonVariantEnum.WARNING}
          icon={{ iconName: "IconAlertCircle", iconPosition: "left" }}
        >
          Suspend
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:bg-warning");
    });

    test("WARNING variant with loading state", () => {
      render(
        <Button variant={ButtonVariantEnum.WARNING} isLoading>
          Processing
        </Button>
      );
      expect(screen.getByTestId("icon-spinner")).toBeInTheDocument();
    });

    test("WARNING variant disabled state", () => {
      render(
        <Button variant={ButtonVariantEnum.WARNING} disabled>
          Archive
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
      expect(button).toHaveClass("yl:opacity-70");
    });
  });

  // Ghost Variant Tests
  describe("Ghost Variant", () => {
    test("ghost prop renders with no background and no border", () => {
      render(
        <Button variant={ButtonVariantEnum.PRIMARY} ghost>
          Ghost Button
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:bg-transparent");
      expect(button).toHaveClass("yl:border-transparent");
    });

    test("ghost with PRIMARY variant", () => {
      render(
        <Button variant={ButtonVariantEnum.PRIMARY} ghost>
          Ghost Button
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:text-primary");
    });

    test("ghost with SECONDARY variant", () => {
      render(
        <Button variant={ButtonVariantEnum.SECONDARY} ghost>
          Ghost Button
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:text-text/60");
    });

    test("ghost with ERROR variant", () => {
      render(
        <Button variant={ButtonVariantEnum.ERROR} ghost>
          Ghost Button
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:text-error");
    });

    test("ghost with SUCCESS variant", () => {
      render(
        <Button variant={ButtonVariantEnum.SUCCESS} ghost>
          Ghost Button
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:text-success");
    });

    test("ghost with WARNING variant", () => {
      render(
        <Button variant={ButtonVariantEnum.WARNING} ghost>
          Ghost Button
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:text-warning");
    });

    test("ghost with icon", () => {
      render(
        <Button
          variant={ButtonVariantEnum.PRIMARY}
          ghost
          icon={{ iconName: "IconEye", iconPosition: "left" }}
        >
          View Details
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:bg-transparent");
      expect(button).toHaveClass("yl:border-transparent");
    });

    test("ghost disabled state", () => {
      render(
        <Button variant={ButtonVariantEnum.PRIMARY} ghost disabled>
          Ghost Button
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
      expect(button).toHaveClass("yl:opacity-70");
    });
  });

  // Full Width Tests
  describe("Full Width", () => {
    test("fullWidth adds w-full class", () => {
      render(<Button fullWidth>Full Width Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:w-full");
    });

    test("fullWidth with small size", () => {
      render(
        <Button size={ButtonSizeEnum.SM} fullWidth>
          Full Width Small
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:w-full");
      expect(button).toHaveClass("yl:text-xs");
    });

    test("fullWidth with large size", () => {
      render(
        <Button size={ButtonSizeEnum.LG} fullWidth>
          Full Width Large
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:w-full");
      expect(button).toHaveClass("yl:text-base");
    });

    test("fullWidth with all variants", () => {
      const variants = [
        ButtonVariantEnum.PRIMARY,
        ButtonVariantEnum.SECONDARY,
        ButtonVariantEnum.ERROR,
        ButtonVariantEnum.SUCCESS,
        ButtonVariantEnum.WARNING
      ];

      variants.forEach(variant => {
        const { unmount } = render(
          <Button variant={variant} fullWidth>
            Button
          </Button>
        );
        const button = screen.getByRole("button");
        expect(button).toHaveClass("yl:w-full");
        unmount();
      });
    });
  });

  // Combination Tests
  describe("Combinations", () => {
    test("size + variant combinations", () => {
      render(
        <Button size={ButtonSizeEnum.SM} variant={ButtonVariantEnum.SUCCESS}>
          Small Success
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:text-xs");
      expect(button).toHaveClass("yl:bg-success");
    });

    test("size + outlined combinations", () => {
      render(
        <Button size={ButtonSizeEnum.LG} outlined>
          Large Outlined
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:text-base");
      expect(button).toHaveClass("yl:border-primary");
    });

    test("size + ghost combinations", () => {
      render(
        <Button
          size={ButtonSizeEnum.SM}
          variant={ButtonVariantEnum.SUCCESS}
          ghost
        >
          Small Ghost
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:text-xs");
      expect(button).toHaveClass("yl:bg-transparent");
      expect(button).toHaveClass("yl:text-success");
    });

    test("size + fullWidth combinations", () => {
      render(
        <Button size={ButtonSizeEnum.LG} fullWidth>
          Large Full Width
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:text-base");
      expect(button).toHaveClass("yl:w-full");
    });

    test("variant + ghost combinations", () => {
      render(
        <Button variant={ButtonVariantEnum.WARNING} ghost>
          Warning Ghost
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:text-warning");
      expect(button).toHaveClass("yl:bg-transparent");
    });

    test("all props together", () => {
      render(
        <Button
          size={ButtonSizeEnum.LG}
          variant={ButtonVariantEnum.SUCCESS}
          ghost
          fullWidth
          icon={{ iconName: "IconCheck", iconPosition: "left" }}
        >
          Complete Action
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:text-base");
      expect(button).toHaveClass("yl:text-success");
      expect(button).toHaveClass("yl:bg-transparent");
      expect(button).toHaveClass("yl:w-full");
    });
  });

  // Backward Compatibility Tests
  describe("Backward Compatibility", () => {
    test("default behavior unchanged (no size, no ghost, no fullWidth)", () => {
      render(<Button>Default Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:px-3");
      expect(button).toHaveClass("yl:py-2");
      expect(button).toHaveClass("yl:text-sm");
      expect(button).not.toHaveClass("yl:bg-transparent");
      expect(button).not.toHaveClass("yl:border-transparent");
      expect(button).not.toHaveClass("yl:w-full");
    });

    test("existing PRIMARY variant still works", () => {
      render(<Button variant={ButtonVariantEnum.PRIMARY}>Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:bg-primary");
    });

    test("existing SECONDARY variant still works", () => {
      render(<Button variant={ButtonVariantEnum.SECONDARY}>Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:border-text/20");
    });

    test("existing ERROR variant still works", () => {
      render(<Button variant={ButtonVariantEnum.ERROR}>Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:bg-error");
    });

    test("existing outlined prop still works", () => {
      render(<Button outlined>Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("yl:border-primary");
      expect(button).toHaveClass("yl:bg-transparent");
    });

    test("existing icon prop still works", () => {
      render(
        <Button icon={{ iconName: "IconBomb", iconPosition: "left" }}>
          Button
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });
  });
});
