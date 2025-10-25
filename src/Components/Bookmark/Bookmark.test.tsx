import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { Bookmark } from "./";

describe("Bookmark component", () => {
  const args = {
    isBookmarked: false,
    handleDelete: () => null,
    handleAdd: () => null,
    isLoading: false
  };

  test("renders correctly - snapshot test", () => {
    const { asFragment } = render(
      <Bookmark {...args} isBookmarked={true} isLoading={false} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("displays spinner when loading", () => {
    render(<Bookmark {...args} isLoading={true} />);
    expect(screen.getByTestId("icon-spinner")).toBeInTheDocument();
  });

  test("displays bookmarked icon when isBookmarked is true", () => {
    render(<Bookmark {...args} isBookmarked={true} />);
    expect(screen.getByTestId("icon-bookmarked")).toBeInTheDocument();
  });

  test("displays bookmark icon when isBookmarked is false", () => {
    render(<Bookmark {...args} isBookmarked={false} />);
    expect(screen.getByTestId("icon-bookmark")).toBeInTheDocument();
  });

  test("calls handleDelete on bookmarked icon click", () => {
    const handleDelete = vi.fn();
    render(
      <Bookmark {...args} isBookmarked={true} handleDelete={handleDelete} />
    );
    fireEvent.click(screen.getByTestId("icon-bookmarked"));
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });

  test("calls handleAdd on bookmark icon click", () => {
    const handleAdd = vi.fn();
    render(<Bookmark {...args} isBookmarked={false} handleAdd={handleAdd} />);
    fireEvent.click(screen.getByTestId("icon-bookmark"));
    expect(handleAdd).toHaveBeenCalledTimes(1);
  });
});
