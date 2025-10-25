import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { Pagination } from ".";

describe("Pagination component", () => {
  test("renders with both buttons enabled when not on first or last page", () => {
    render(
      <Pagination currentPage={1} setCurrentPage={() => {}} totalPages={3} />
    );

    const previousButton = screen.getByText("Previous");
    const nextButton = screen.getByText("Next");

    expect(previousButton).not.toBeDisabled();
    expect(nextButton).not.toBeDisabled();
  });

  test("disables the Previous button on the first page", () => {
    render(
      <Pagination currentPage={0} setCurrentPage={() => {}} totalPages={3} />
    );

    const previousButton = screen.getByText("Previous");

    expect(previousButton.parentElement?.parentElement).toBeDisabled();
  });

  test("disables the Next button on the last page", () => {
    render(
      <Pagination currentPage={2} setCurrentPage={() => {}} totalPages={3} />
    );

    const nextButton = screen.getByText("Next");

    expect(nextButton.parentNode?.parentNode).toBeDisabled();
  });

  test("calls setCurrentPage with the previous page when Previous is clicked", () => {
    const setCurrentPage = vi.fn();

    render(
      <Pagination
        currentPage={1}
        setCurrentPage={setCurrentPage}
        totalPages={3}
      />
    );

    fireEvent.click(screen.getByText("Previous"));

    expect(setCurrentPage).toHaveBeenCalledWith(0);
  });

  test("calls setCurrentPage with the next page when Next is clicked", () => {
    const setCurrentPage = vi.fn();

    render(
      <Pagination
        currentPage={1}
        setCurrentPage={setCurrentPage}
        totalPages={3}
      />
    );

    fireEvent.click(screen.getByText("Next"));

    expect(setCurrentPage).toHaveBeenCalledWith(2);
  });

  test("applies custom className to the container", () => {
    const customClass = "my-custom-class";

    render(
      <Pagination
        currentPage={1}
        setCurrentPage={() => {}}
        totalPages={3}
        className={customClass}
      />
    );

    const container = screen.getByRole("group");

    expect(container).toHaveClass(customClass);
  });
});
