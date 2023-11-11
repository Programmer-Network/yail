import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import Accordion from ".";

const mockSections = [
  {
    id: 1,
    description: "Description 1",
    title: "Section 1",
    order: 1,
    items: [
      { id: 1, title: "Item A", order: 1 },
      { id: 2, title: "Item B", order: 2 }
    ]
  },
  {
    id: 2,
    description: "Description 2",
    title: "Section 2",
    order: 2,
    items: [{ id: 3, title: "Item C", order: 3 }]
  }
];

describe("Accordion component", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <Accordion
        sections={mockSections}
        setExpandedSections={() => null}
        expandedSections={[1]}
        onSectionItemClick={vi.fn()}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders all sections and items correctly", () => {
    const setExpandedSections = vi.fn();
    render(
      <Accordion
        sections={mockSections}
        setExpandedSections={setExpandedSections}
        expandedSections={[1]}
        onSectionItemClick={vi.fn()}
      />
    );

    expect(screen.getByText("Section 1")).toBeInTheDocument();
    expect(screen.getByText("Item A")).toBeInTheDocument();
    expect(screen.getByText("Section 2")).toBeInTheDocument();
    expect(screen.queryByText("Item C")).toBeNull();
  });

  test("expands and collapses sections on click", () => {
    const setExpandedSections = vi.fn();

    render(
      <Accordion
        sections={mockSections}
        setExpandedSections={setExpandedSections}
        expandedSections={[1]}
        onSectionItemClick={vi.fn()}
      />
    );

    fireEvent.click(screen.getByText("Section 1"));
    expect(setExpandedSections).toHaveBeenCalledWith([1]);

    fireEvent.click(screen.getByText("Section 1"));
    expect(setExpandedSections).toHaveBeenCalledWith([1]);
  });

  test("handles section item click events", () => {
    const onSectionItemClick = vi.fn();
    render(
      <Accordion
        sections={mockSections}
        setExpandedSections={vi.fn()}
        onSectionItemClick={onSectionItemClick}
        expandedSections={[1]}
      />
    );

    fireEvent.click(screen.getByText("Item A"));
    expect(onSectionItemClick).toHaveBeenCalledWith(mockSections[0].items[0]);
  });

  test("applies custom class names", () => {
    render(
      <Accordion
        sections={mockSections}
        className='custom-class'
        sectionTitleClassName='custom-title-class'
        setExpandedSections={vi.fn()}
        expandedSections={[]}
        onSectionItemClick={vi.fn()}
      />
    );

    expect(screen.getByText("Section 1").parentNode).toHaveClass(
      "custom-title-class"
    );
  });
});
