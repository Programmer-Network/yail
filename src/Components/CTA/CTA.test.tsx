import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import CTA from "./";

describe("CTA component", () => {
  const title = "Test Title";
  const subtitle = "Test Subtitle";

  test("renders correctly - snapshot test", () => {
    const { asFragment } = render(<CTA title={title} subtitle={subtitle} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders title and subtitle", () => {
    render(<CTA title={title} subtitle={subtitle} />);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(subtitle)).toBeInTheDocument();
  });

  test("conditionally renders icons", () => {
    render(
      <CTA
        title={title}
        subtitle={subtitle}
        IconComponent={{
          iconName: "IconSpinner",
          dataTestId: "icon-spinner"
        }}
        ButtonIconComponent={{
          iconName: "IconSpinner",
          dataTestId: "icon-spinner"
        }}
      />
    );

    expect(screen.getByTestId("icon-spinner")).toBeInTheDocument();
  });

  test("displays button with text and handles click", () => {
    const buttonText = "Click Me";
    const handleClick = vi.fn();
    render(
      <CTA
        title={title}
        subtitle={subtitle}
        buttonText={buttonText}
        onClick={handleClick}
      />
    );
    const button = screen.getByText(buttonText);
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});
