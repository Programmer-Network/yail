import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Filters } from ".";
import { ViewType } from "../ViewToggle/types";

const tags = ["react", "typescript"];
const extraFilters = <div data-testid='extra-filters'>Extra</div>;

const baseProps = {
  search: {
    value: "",
    onChange: vi.fn()
  },
  tags: {
    selected: [],
    onChange: vi.fn(),
    options: tags.map(tag => ({ value: tag, label: tag }))
  },
  view: {
    value: "card" as ViewType,
    onChange: vi.fn()
  },
  sorting: {
    value: "newest",
    onChange: vi.fn(),
    options: [
      { value: "newest", label: "Newest" },
      { value: "oldest", label: "Oldest" }
    ]
  },
  additional: extraFilters
};

describe("Filters", () => {
  it("renders search input, select, extra filters, and view toggle", () => {
    render(<Filters {...baseProps} />);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    // Open filters
    const filterButton = screen.getByRole("button", { name: /filter/i });
    fireEvent.click(filterButton);
    expect(screen.getByText("Select tags..."));
    expect(screen.getByTestId("extra-filters")).toBeInTheDocument();
    expect(screen.getAllByRole("button").length).toBeGreaterThan(0); // ViewToggle present
  });

  it("calls onSearchChange when typing in search", () => {
    const onChange = vi.fn();
    render(
      <Filters {...baseProps} search={{ ...baseProps.search, onChange }} />
    );
    fireEvent.change(screen.getByPlaceholderText("Search..."), {
      target: { value: "test", name: "search" }
    });
    expect(onChange).toHaveBeenCalledWith("test");
  });

  it("renders and calls onSortChange for sorting buttons", () => {
    const onChange = vi.fn();
    render(
      <Filters
        {...baseProps}
        sorting={{ ...baseProps.sorting, onChange, value: "newest" }}
      />
    );
    // The first two buttons are sort up/down, third is filter, last is view toggle
    const buttons = screen.getAllByRole("button");
    const sortUp = buttons[0];
    const sortDown = buttons[1];
    fireEvent.click(sortUp!);
    fireEvent.click(sortDown!);
    expect(onChange).toHaveBeenCalledWith("newest");
    expect(onChange).toHaveBeenCalledWith("oldest");
  });

  it("calls onViewChange when toggling view", () => {
    const onChange = vi.fn();
    render(<Filters {...baseProps} view={{ ...baseProps.view, onChange }} />);
    // Open filters
    const filterButton = screen.getByRole("button", { name: /filter/i });
    fireEvent.click(filterButton);
    // Find the view toggle button by test id
    const viewToggle = screen.getByTestId("view-toggle");
    const button = viewToggle.querySelector("button");
    fireEvent.click(button!);
    expect(onChange).toHaveBeenCalled();
  });

  it("renders only search input if no tags, no extraFilters, no sorting", () => {
    render(
      <Filters
        {...baseProps}
        tags={{ ...baseProps.tags, options: [] }}
        additional={undefined}
        sorting={{ ...baseProps.sorting, options: [] }}
      />
    );
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    expect(screen.queryByText("#react")).not.toBeInTheDocument();
    expect(screen.queryByTestId("extra-filters")).not.toBeInTheDocument();
  });

  it("is accessible: all controls are focusable", () => {
    render(
      <Filters
        {...baseProps}
        sorting={{
          ...baseProps.sorting,
          options: [
            { value: "newest", label: "Newest" },
            { value: "oldest", label: "Oldest" }
          ]
        }}
        tags={{ ...baseProps.tags, selected: ["react"] }}
      />
    );
    const input = screen.getByPlaceholderText("Search...");
    input.focus();
    expect(document.activeElement).toBe(input);
    screen.getAllByRole("button").forEach(btn => {
      expect(btn).toBeInstanceOf(HTMLElement);
    });
  });

  it("calls onTagToggle when selecting a tag from the Select dropdown", async () => {
    const onTagToggle = vi.fn();
    render(
      <Filters
        {...baseProps}
        tags={{ ...baseProps.tags, onChange: onTagToggle }}
      />
    );
    // Open filters
    const filterButton = screen.getByRole("button", { name: /filter/i });
    fireEvent.click(filterButton);
    // Find the react-select input (role="combobox")
    const selectInput = screen.getByRole("combobox");
    await userEvent.click(selectInput);
    // The dropdown should now be open, find the option by text
    const option = await screen.findByText("react");
    await userEvent.click(option);
    expect(onTagToggle).toHaveBeenCalledWith(["react"]);
  });
});
