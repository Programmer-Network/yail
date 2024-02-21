import { render, screen } from "@testing-library/react";

import Cards from ".";

describe("Cards component", () => {
  const mockCards = [
    {
      title: "Card 1 Title",
      titleUrl: "/",
      description: "Card 1 Description",
      author: "Card 1 Author",
      authorUrl: "/",
      date: "2021-01-01",
      tags: [
        { name: "tag1", tagUrl: "/" },
        { name: "tag2", tagUrl: "/" }
      ]
    },
    {
      title: "Card 2 Title",
      titleUrl: "/",
      description: "Card 2 Description",
      author: "Card 2 Author",
      authorUrl: "/",
      date: "2021-02-02",
      tags: [{ name: "tag3", tagUrl: "/" }]
    }
  ];

  it("renders correctly with cards", () => {
    render(<Cards cards={mockCards} columns={3} />);
    expect(screen.getByText("Card 1 Title")).toBeInTheDocument();
    expect(screen.getByText("Card 2 Title")).toBeInTheDocument();
  });

  it("applies the correct grid column class based on columns prop", () => {
    const { rerender } = render(<Cards cards={mockCards} columns={3} />);
    expect(screen.getByTestId("cards")).toHaveClass("grid-cols-3");

    rerender(<Cards cards={mockCards} columns={4} />);
    expect(screen.getByTestId("cards")).toHaveClass("grid-cols-4");
  });

  it("renders the correct number of Card components", () => {
    render(<Cards cards={mockCards} columns={3} />);
    const cardElements = screen.getAllByText(/Card \d Title/);
    expect(cardElements).toHaveLength(mockCards.length);
  });

  it("applies custom class names correctly", () => {
    const customClassName = "custom-grid-class";
    render(<Cards cards={mockCards} columns={3} className={customClassName} />);
    expect(screen.getByTestId("cards")).toHaveClass(customClassName);
  });
});
