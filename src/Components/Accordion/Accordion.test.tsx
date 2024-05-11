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
        setSections={vi.fn()}
        setExpanded={() => null}
        expanded={[1]}
        onSectionItemClick={vi.fn()}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders all sections and items correctly", () => {
    const setExpanded = vi.fn();
    render(
      <Accordion
        sections={mockSections}
        setSections={vi.fn()}
        setExpanded={setExpanded}
        expanded={[1]}
        onSectionItemClick={vi.fn()}
      />
    );

    expect(screen.getByText("Section 1")).toBeInTheDocument();
    expect(screen.getByText("Item A")).toBeInTheDocument();
    expect(screen.getByText("Section 2")).toBeInTheDocument();
    expect(screen.queryByText("Item C")).toBeNull();
  });

  test("expands and collapses sections on click", () => {
    const setExpanded = vi.fn();

    render(
      <Accordion
        sections={mockSections}
        setSections={vi.fn()}
        setExpanded={setExpanded}
        expanded={[mockSections[0].id]}
        onSectionItemClick={vi.fn()}
      />
    );

    fireEvent.click(screen.getByTestId("icon-expand-less"));
    expect(setExpanded).toHaveBeenCalledWith([]);
  });

  test("handles section item click events", () => {
    const onSectionItemClick = vi.fn();
    render(
      <Accordion
        sections={mockSections}
        setSections={vi.fn()}
        setExpanded={vi.fn()}
        onSectionItemClick={onSectionItemClick}
        expanded={[1]}
      />
    );

    fireEvent.click(screen.getByText("Item A"));
    expect(onSectionItemClick).toHaveBeenCalledWith(mockSections[0].items[0]);
  });

  test("applies custom class names", () => {
    render(
      <Accordion
        sections={mockSections}
        setSections={vi.fn()}
        className='custom-class'
        sectionTitleClassName='custom-title-class'
        setExpanded={vi.fn()}
        expanded={[]}
        onSectionItemClick={vi.fn()}
      />
    );

    expect(screen.getByText("Section 1").parentNode).toHaveClass(
      "custom-title-class"
    );
  });

  test("applies custom class names", () => {
    render(
      <Accordion
        sections={mockSections}
        setSections={vi.fn()}
        className='custom-class'
        sectionTitleClassName='custom-title-class'
        setExpanded={vi.fn()}
        expanded={[]}
        onSectionItemClick={vi.fn()}
      />
    );

    expect(screen.getByText("Section 1").parentNode).toHaveClass(
      "custom-title-class"
    );
  });
});
