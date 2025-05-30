import { render, screen } from "@testing-library/react";
import { BrowserRouter, NavLink } from "react-router-dom";

import Cards from ".";

describe("Cards component", () => {
  const mockCards = [
    {
      title: "Card 1 Title",
      titleUrl: "/",
      description: "Card 1 Description",
      author: {
        name: "Card 1 Author",
        url: "/"
      },
      date: "2021-01-01",
      tags: [
        { name: "tag1", url: "/" },
        { name: "tag2", url: "/" }
      ]
    },
    {
      title: "Card 2 Title",
      titleUrl: "/",
      description: "Card 2 Description",
      author: {
        name: "Card 2 Author",
        url: "/"
      },
      date: "2021-02-02",
      tags: [{ name: "tag3", url: "/" }]
    }
  ];

  it("renders correctly with cards", () => {
    render(
      <BrowserRouter>
        <Cards cards={mockCards} columns={3} NavLink={NavLink} />
      </BrowserRouter>
    );
    expect(screen.getByText("Card 1 Title")).toBeInTheDocument();
    expect(screen.getByText("Card 2 Title")).toBeInTheDocument();
  });

  it("applies the correct grid column class based on columns prop", () => {
    const { rerender } = render(
      <BrowserRouter>
        <Cards cards={mockCards} columns={3} NavLink={NavLink} />
      </BrowserRouter>
    );

    expect(screen.getByTestId("cards")).toHaveClass(
      "yl:grid yl:grid-cols-1 yl:md:grid-cols-3"
    );

    rerender(
      <BrowserRouter>
        <Cards cards={mockCards} columns={4} NavLink={NavLink} />
      </BrowserRouter>
    );
    expect(screen.getByTestId("cards")).toHaveClass(
      "yl:grid yl:grid-cols-1 yl:md:grid-cols-4"
    );
  });

  it("renders the correct number of Card components", () => {
    render(
      <BrowserRouter>
        <Cards cards={mockCards} columns={3} NavLink={NavLink} />
      </BrowserRouter>
    );
    const cardElements = screen.getAllByText(/Card \d Title/);
    expect(cardElements).toHaveLength(mockCards.length);
  });

  it("applies custom class names correctly", () => {
    const customClassName = "custom-grid-class";
    render(
      <BrowserRouter>
        <Cards
          cards={mockCards}
          columns={3}
          className={customClassName}
          NavLink={NavLink}
        />
      </BrowserRouter>
    );
    expect(screen.getByTestId("cards")).toHaveClass(customClassName);
  });
});
