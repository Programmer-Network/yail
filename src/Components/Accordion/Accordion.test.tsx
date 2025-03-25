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
        onSorted={vi.fn()}
        setExpanded={() => null}
        expanded={[1]}
        onSectionItemClick={vi.fn()}
        selected={{ sectionId: 0, itemId: 0 }}
        setSelectedSection={() => null}
        setSelectedItem={() => null}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders all sections and items correctly", () => {
    const setExpanded = vi.fn();
    render(
      <Accordion
        sections={mockSections}
        onSorted={vi.fn()}
        setExpanded={setExpanded}
        expanded={[1]}
        onSectionItemClick={vi.fn()}
        selected={{ sectionId: 0, itemId: 0 }}
        setSelectedSection={() => null}
        setSelectedItem={() => null}
      />
    );

    expect(screen.getByText("Section 1")).toBeInTheDocument();
    expect(screen.getByText("Item A")).toBeInTheDocument();
    expect(screen.getByText("Section 2")).toBeInTheDocument();
    expect(screen.queryByText("Item C")).toBeNull();
  });

  test("expands and collapses sections on click", () => {
    const setExpanded = vi.fn();
    const setSelectedSection = vi.fn();
    const setSelectedItem = vi.fn();

    render(
      <Accordion
        sections={mockSections}
        onSorted={vi.fn()}
        setExpanded={setExpanded}
        expanded={[mockSections[0]!.id]}
        onSectionItemClick={vi.fn()}
        selected={{ sectionId: mockSections[0]!.id, itemId: 0 }}
        setSelectedSection={setSelectedSection}
        setSelectedItem={setSelectedItem}
      />
    );

    fireEvent.click(screen.getByTestId("icon-expand-less"));
    expect(setExpanded).toHaveBeenCalledWith([]);
  });

  test("handles section item click events", () => {
    const onSectionItemClick = vi.fn();
    const setSelectedSection = vi.fn();
    const setSelectedItem = vi.fn();

    render(
      <Accordion
        sections={mockSections}
        onSorted={vi.fn()}
        setExpanded={vi.fn()}
        onSectionItemClick={onSectionItemClick}
        expanded={[1]}
        selected={{ sectionId: 1, itemId: 0 }}
        setSelectedSection={setSelectedSection}
        setSelectedItem={setSelectedItem}
      />
    );

    fireEvent.click(screen.getByText("Item A"));
    expect(onSectionItemClick).toHaveBeenCalledWith(mockSections[0]!.items[0]!);
    expect(setSelectedItem).toHaveBeenCalledWith(mockSections[0]!.items[0]!.id);
    expect(setSelectedSection).toHaveBeenCalledWith(mockSections[0]!.id);
  });

  test("applies custom class names", () => {
    render(
      <Accordion
        sections={mockSections}
        onSorted={vi.fn()}
        className='custom-class'
        sectionTitleClassName='custom-title-class'
        setExpanded={vi.fn()}
        expanded={[]}
        onSectionItemClick={vi.fn()}
        selected={{ sectionId: 0, itemId: 0 }}
        setSelectedSection={() => null}
        setSelectedItem={() => null}
      />
    );

    expect(screen.getByText("Section 1").parentNode).toHaveClass(
      "custom-title-class"
    );
  });

  test("expands all sections by default when defaultExpanded is true", async () => {
    const setExpanded = vi.fn();
    render(
      <Accordion
        sections={mockSections}
        onSorted={vi.fn()}
        setExpanded={setExpanded}
        expanded={[]}
        defaultExpanded={true}
        onSectionItemClick={vi.fn()}
        selected={{ sectionId: 0, itemId: 0 }}
        setSelectedSection={() => null}
        setSelectedItem={() => null}
      />
    );

    expect(setExpanded).toHaveBeenCalledWith(
      mockSections.map(section => section.id)
    );

    mockSections.forEach(section => {
      expect(screen.getByText(section.title)).toBeInTheDocument();
    });
  });
});
