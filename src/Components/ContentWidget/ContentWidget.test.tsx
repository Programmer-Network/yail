import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import ContentWidget from ".";
import { IContentWidgetItemMore } from "./types";

describe("ContentWidget component", () => {
  const mockItems = [
    { item: { id: 1, title: "Item 1", foo: "bar" }, onClick: vi.fn() },
    { item: { id: 2, title: "Item 2" }, onClick: vi.fn() }
  ];

  const mockMore: IContentWidgetItemMore = {
    tooltipText: "See More",
    iconName: "IconEnter",
    onClick: vi.fn()
  };

  it("renders loading state correctly", () => {
    render(
      <ContentWidget
        title='Loading Widget'
        className='custom-loading-class'
        isLoading={true}
        items={[]}
      />
    );

    expect(screen.queryByTestId("icon-spinner")).toBeInTheDocument();
  });

  it("renders items and title correctly", () => {
    render(
      <ContentWidget
        title='Test Widget'
        className='custom-class'
        isLoading={false}
        items={mockItems}
      />
    );

    expect(screen.getByText("Test Widget")).toBeInTheDocument();
    mockItems.forEach(({ item }) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it("conditionally renders more button based on props", () => {
    const { rerender } = render(
      <ContentWidget
        title='Test Widget'
        className='custom-class'
        isLoading={false}
        items={mockItems}
      />
    );

    expect(screen.queryByTestId("icon-enter")).not.toBeInTheDocument();

    rerender(
      <ContentWidget
        title='Test Widget With More'
        className='custom-class'
        isLoading={false}
        items={mockItems}
        more={mockMore}
      />
    );

    fireEvent.click(screen.queryByTestId("icon-enter") as HTMLElement);
    expect(mockMore.onClick).toHaveBeenCalled();
  });

  it("applies custom class names correctly", () => {
    render(
      <ContentWidget
        title='Test Widget'
        className='custom-class'
        isLoading={false}
        items={mockItems}
        more={mockMore}
      />
    );

    const widgetElement =
      screen.getByText("Test Widget")?.parentNode?.parentNode?.parentNode
        ?.parentNode;
    expect(widgetElement).toHaveClass("custom-class");
  });

  it("triggers item onClick callback when item is clicked", () => {
    render(
      <ContentWidget
        title='Clickable Items Widget'
        isLoading={false}
        items={mockItems}
      />
    );

    const firstItem = screen.getByText("Item 1");
    fireEvent.click(firstItem);
    expect(mockItems[0]!.onClick).toHaveBeenCalledWith(mockItems[0]!.item);
  });
});
