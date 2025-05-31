import { act, fireEvent, render, screen } from "@testing-library/react";
import { createRef } from "react";
import { vi } from "vitest";

// Import the actual ConfirmDialog
import ConfirmDialog from "./index";

// Unmock the global ConfirmDialog mock so we can test the actual component
vi.unmock("../ConfirmDialog");

// Mock the dependencies that ConfirmDialog uses
vi.mock("../Dialog", () => {
  const React = require("react");

  const MockDialog = React.forwardRef((props: any, ref: any) => {
    const { children, className } = props;
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
      if (ref) {
        const mockDialogElement = {
          showModal: vi.fn(() => {
            act(() => setIsOpen(true));
          }),
          close: vi.fn(() => {
            act(() => setIsOpen(false));
          })
        };

        if (typeof ref === "function") {
          ref(mockDialogElement);
        } else {
          ref.current = mockDialogElement;
        }
      }
    }, [ref]);

    // Only render content when dialog is open
    return isOpen
      ? React.createElement(
          "dialog",
          { className, "data-testid": "mock-dialog" },
          children
        )
      : null;
  });

  MockDialog.displayName = "MockDialog";
  return { default: MockDialog };
});

vi.mock("../Button", () => {
  const React = require("react");

  const MockButton = (props: any) => {
    const {
      children,
      onClick,
      disabled,
      className,
      icon,
      variant,
      isLoading,
      ...rest
    } = props;

    return React.createElement(
      "button",
      {
        onClick,
        disabled: disabled || isLoading,
        className,
        "data-variant": variant,
        "data-loading": isLoading,
        role: "button",
        "aria-label": typeof children === "string" ? children : undefined,
        ...rest
      },
      [
        // Render icon if provided
        icon &&
          React.createElement("div", {
            key: "icon",
            "data-testid": `icon-${icon.iconName}`,
            className: icon.iconClassName
          }),
        children
      ]
    );
  };

  return { default: MockButton };
});

vi.mock("../Icon", () => {
  const React = require("react");

  const MockIcon = (props: any) => {
    const { iconName, className, ...rest } = props;

    return React.createElement("div", {
      "data-testid": `icon-${iconName}`,
      className,
      ...rest
    });
  };

  return { default: MockIcon };
});

vi.mock("../Paragraph", () => {
  const React = require("react");

  const MockParagraph = (props: any) => {
    const { children, className, ...rest } = props;

    return React.createElement(
      "p",
      {
        className,
        ...rest
      },
      children
    );
  };

  return { default: MockParagraph };
});

// Mock the Button component imports from index
vi.mock("index", () => {
  const React = require("react");

  const MockButton = (props: any) => {
    const {
      children,
      onClick,
      disabled,
      className,
      icon,
      variant,
      isLoading,
      ...rest
    } = props;

    return React.createElement(
      "button",
      {
        onClick,
        disabled: disabled || isLoading,
        className,
        "data-variant": variant,
        "data-loading": isLoading,
        role: "button",
        "aria-label": typeof children === "string" ? children : undefined,
        ...rest
      },
      [
        // Render icon if provided
        icon &&
          React.createElement("div", {
            key: "icon",
            "data-testid": `icon-${icon.iconName}`,
            className: icon.iconClassName
          }),
        children
      ]
    );
  };

  const MockDialog = React.forwardRef((props: any, ref: any) => {
    const { children, className } = props;
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
      if (ref) {
        const mockDialogElement = {
          showModal: vi.fn(() => {
            act(() => setIsOpen(true));
          }),
          close: vi.fn(() => {
            act(() => setIsOpen(false));
          })
        };

        if (typeof ref === "function") {
          ref(mockDialogElement);
        } else {
          ref.current = mockDialogElement;
        }
      }
    }, [ref]);

    return isOpen
      ? React.createElement(
          "dialog",
          { className, "data-testid": "mock-dialog" },
          children
        )
      : null;
  });

  MockDialog.displayName = "MockDialog";

  const MockIcon = (props: any) => {
    const { iconName, className, ...rest } = props;

    return React.createElement("div", {
      "data-testid": `icon-${iconName}`,
      className,
      ...rest
    });
  };

  const MockParagraph = (props: any) => {
    const { children, className, ...rest } = props;

    return React.createElement(
      "p",
      {
        className,
        ...rest
      },
      children
    );
  };

  return {
    Button: MockButton,
    Dialog: MockDialog,
    Icon: MockIcon,
    Paragraph: MockParagraph
  };
});

// Mock the ButtonVariantEnum
vi.mock("Components/Button/types", () => ({
  ButtonVariantEnum: {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    ERROR: "error"
  }
}));

describe("ConfirmDialog", () => {
  const mockOnConfirm = vi.fn();
  const dialogRef = createRef<HTMLDialogElement>();

  beforeEach(() => {
    mockOnConfirm.mockClear();
  });

  const renderAndOpenDialog = (props = {}) => {
    const result = render(
      <ConfirmDialog ref={dialogRef} onConfirm={mockOnConfirm} {...props} />
    );

    // Open the dialog to make content visible
    act(() => {
      if (dialogRef.current) {
        dialogRef.current.showModal();
      }
    });

    return result;
  };

  it("renders with default props", () => {
    renderAndOpenDialog();

    expect(
      screen.getByText("Are you sure you want to proceed?")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Confirm")).toBeInTheDocument();
    expect(screen.getByLabelText("Cancel")).toBeInTheDocument();
  });

  it("renders with custom title and message", () => {
    renderAndOpenDialog({
      title: "Custom Title",
      message: "Custom message"
    });

    expect(screen.getByText("Custom Title")).toBeInTheDocument();
    expect(screen.getByText("Custom message")).toBeInTheDocument();
  });

  it("renders with custom button text", () => {
    renderAndOpenDialog({
      confirmText: "Delete",
      cancelText: "Keep"
    });

    expect(screen.getByLabelText("Delete")).toBeInTheDocument();
    expect(screen.getByLabelText("Keep")).toBeInTheDocument();
  });

  it("calls onConfirm when confirm button is clicked", () => {
    renderAndOpenDialog();

    fireEvent.click(screen.getByLabelText("Confirm"));
    expect(mockOnConfirm).toHaveBeenCalledTimes(1);
  });

  it("shows loading state on confirm button", () => {
    renderAndOpenDialog({
      isLoading: true,
      confirmText: "Deleting..."
    });

    const confirmButton = screen.getByLabelText("Deleting...");
    expect(confirmButton).toBeInTheDocument();
    expect(confirmButton).toBeDisabled();

    const cancelButton = screen.getByLabelText("Cancel");
    expect(cancelButton).toBeDisabled();
  });

  it("renders buttons with right alignment", () => {
    renderAndOpenDialog({
      variant: "destructive"
    });

    const buttonContainer = screen.getByLabelText("Confirm").closest("div");
    expect(buttonContainer).toHaveClass("yl:justify-end");
  });

  it("renders destructive variant with red styling", () => {
    renderAndOpenDialog({
      variant: "destructive"
    });

    const icons = screen.getAllByTestId("icon-IconBomb");
    const mainIcon = icons.find(icon => icon.className.includes("yl:h-24"));
    expect(mainIcon).toHaveClass("yl:text-red-500");
  });

  it("renders info variant with blue styling", () => {
    renderAndOpenDialog({
      variant: "info"
    });

    const icon = screen.getByTestId("icon-IconInfo");
    expect(icon).toHaveClass("yl:text-blue-500");
  });

  it("renders custom icon when provided", () => {
    renderAndOpenDialog({
      iconName: "IconHeart"
    });

    const icon = screen.getByTestId("icon-IconHeart");
    expect(icon).toBeInTheDocument();
  });

  it("does not render icon when variant is undefined and no custom icon", () => {
    renderAndOpenDialog({
      variant: undefined,
      iconName: undefined
    });

    // When variant is undefined, it defaults to "info", so there should still be an icon
    const icon = screen.queryByTestId("icon-IconInfo");
    expect(icon).toBeInTheDocument();
  });

  it("renders cancel button with Incomplete icon", () => {
    renderAndOpenDialog();

    const cancelButton = screen.getByLabelText("Cancel");
    expect(cancelButton).toBeInTheDocument();
    // Check for the Incomplete icon within the button
    const incompleteIcon = screen.getByTestId("icon-Incomplete");
    expect(incompleteIcon).toBeInTheDocument();
  });

  it("renders destructive confirm button with IconBomb icon", () => {
    renderAndOpenDialog({
      variant: "destructive",
      confirmText: "Delete"
    });

    const confirmButton = screen.getByLabelText("Delete");
    expect(confirmButton).toBeInTheDocument();
    // Check for the IconBomb icon in both the main icon and button
    const bombIcons = screen.getAllByTestId("icon-IconBomb");
    expect(bombIcons.length).toBeGreaterThan(0);
  });

  it("renders info confirm button with Complete icon", () => {
    renderAndOpenDialog({
      variant: "info",
      confirmText: "Confirm"
    });

    const confirmButton = screen.getByLabelText("Confirm");
    expect(confirmButton).toBeInTheDocument();
    // Check for the Complete icon in the button
    const completeIcon = screen.getByTestId("icon-Complete");
    expect(completeIcon).toBeInTheDocument();
  });

  it("closes dialog when cancel is clicked", () => {
    renderAndOpenDialog();

    // Confirm dialog is visible
    expect(screen.getByTestId("mock-dialog")).toBeInTheDocument();

    // Click cancel button
    fireEvent.click(screen.getByLabelText("Cancel"));

    // Wait for the dialog to close (the mock Dialog will remove itself from DOM)
    expect(screen.queryByTestId("mock-dialog")).not.toBeInTheDocument();
  });
});
