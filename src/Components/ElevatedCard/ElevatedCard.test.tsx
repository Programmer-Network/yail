import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import ElevatedCard from "./";

describe("ElevatedCard component", () => {
  const title = "Curated Resources";
  const description =
    "Explore our collection of tools, libraries, and tutorials to enhance your development workflow.";

  test("renders correctly - snapshot test", () => {
    const { asFragment } = render(
      <ElevatedCard title={title} description={description} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("renders title and description", () => {
    render(<ElevatedCard title={title} description={description} />);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  test("conditionally renders icon", () => {
    render(
      <ElevatedCard
        title={title}
        description={description}
        icon={{
          iconName: "IconBook",
          dataTestId: "icon-book"
        }}
      />
    );
    expect(screen.getByTestId("icon-book")).toBeInTheDocument();
  });

  test("renders children when provided", () => {
    const childText = "Child Content";
    render(
      <ElevatedCard title={title} description={description}>
        <div data-testid='child-content'>{childText}</div>
      </ElevatedCard>
    );
    expect(screen.getByTestId("child-content")).toBeInTheDocument();
    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  test("handles click events", () => {
    const onClick = vi.fn();
    render(
      <ElevatedCard title={title} description={description} onClick={onClick} />
    );

    fireEvent.click(screen.getByTestId("elevated-card"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("applies custom class name", () => {
    const customClass = "custom-card-class";

    render(
      <ElevatedCard
        title={title}
        description={description}
        className={customClass}
      />
    );

    const cardElement = screen.getByTestId("elevated-card");
    expect(cardElement).toHaveClass(customClass);
  });

  test("uses custom data-testid when provided", () => {
    const customTestId = "custom-card-test-id";
    render(
      <ElevatedCard
        title={title}
        description={description}
        dataTestId={customTestId}
      />
    );

    expect(screen.getByTestId(customTestId)).toBeInTheDocument();
  });
});
