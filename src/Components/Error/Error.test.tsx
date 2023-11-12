import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { IconQuestionMark } from "Components/Icons";

import Error from "./";

describe("Error component", () => {
  const errorText = "404 error";
  const titleText = "Page not found.";
  const descriptionText = "The page you are looking for does not exist.";

  test("renders correctly - snapshot test", () => {
    const { asFragment } = render(
      <Error error={errorText} title={titleText} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("renders error, title, and description", () => {
    render(
      <Error
        error={errorText}
        title={titleText}
        description={descriptionText}
      />
    );
    expect(screen.getByText(errorText)).toBeInTheDocument();
    expect(screen.getByText(titleText)).toBeInTheDocument();
    expect(screen.getByText(descriptionText)).toBeInTheDocument();
  });

  test("conditionally renders icon and backToText", () => {
    const backToText = "Go Back";
    render(
      <Error
        error={errorText}
        title={titleText}
        Icon={IconQuestionMark}
        backToText={backToText}
      />
    );
    expect(screen.getByTestId("icon-question-mark")).toBeInTheDocument();
    expect(screen.getByText(backToText)).toBeInTheDocument();
  });

  test("handles click events", () => {
    const onBackToClick = vi.fn();
    const onIconClick = vi.fn();
    render(
      <Error
        error={errorText}
        title={titleText}
        Icon={IconQuestionMark}
        onIconClick={onIconClick}
        backToText='Go Back'
        onBackToClick={onBackToClick}
      />
    );

    fireEvent.click(screen.getByTestId("icon-question-mark"));
    expect(onIconClick).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText("Go Back"));
    expect(onBackToClick).toHaveBeenCalledTimes(1);
  });

  test("applies custom class name", () => {
    const customClass = "custom-error-class";

    render(
      <Error error={errorText} title={titleText} className={customClass} />
    );

    const errorElement = screen.getByTestId("error-wrapper");
    expect(errorElement).toHaveClass(customClass);
  });
});
