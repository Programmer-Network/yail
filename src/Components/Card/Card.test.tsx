import { render, screen } from "@testing-library/react";
import { BrowserRouter, NavLink } from "react-router-dom";

import Card from ".";

describe("Card component", () => {
  const mockProps = {
    NavLink,
    data: {
      title: "Test Title",
      titleUrl: "/",
      description: "Test Description",
      date: "2021-01-01",
      author: "Test Author",
      authorUrl: "/",
      tags: [
        { name: "tag1", url: "/" },
        { name: "tag2", url: "/" }
      ]
    },
    className: "custom-class"
  };

  it("renders correctly with minimum props", () => {
    render(
      <BrowserRouter>
        <Card
          NavLink={NavLink}
          data={{
            title: mockProps.data.title,
            titleUrl: "/",
            description: mockProps.data.description
          }}
        />
      </BrowserRouter>
    );
    expect(screen.getByText(mockProps.data.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.data.description)).toBeInTheDocument();
  });

  it("renders correctly with all props", () => {
    render(
      <BrowserRouter>
        <Card {...mockProps} />
      </BrowserRouter>
    );
    expect(screen.getByText(mockProps.data.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.data.description)).toBeInTheDocument();
    expect(screen.getByText(mockProps.data.author)).toBeInTheDocument();
    expect(screen.getByText(mockProps.data.date)).toBeInTheDocument();
    mockProps.data.tags.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it("conditionally renders author and date based on props", () => {
    const { rerender } = render(
      <BrowserRouter>
        <Card
          NavLink={NavLink}
          data={{
            title: mockProps.data.title,
            titleUrl: "/",
            description: mockProps.data.description
          }}
        />
      </BrowserRouter>
    );
    expect(screen.queryByText(mockProps.data.author)).not.toBeInTheDocument();
    expect(screen.queryByText(mockProps.data.date)).not.toBeInTheDocument();

    rerender(
      <BrowserRouter>
        <Card {...mockProps} />
      </BrowserRouter>
    );
    expect(screen.getByText(mockProps.data.author)).toBeInTheDocument();
    expect(screen.getByText(mockProps.data.date)).toBeInTheDocument();
  });

  it("conditionally renders tags based on props", () => {
    const { rerender } = render(
      <BrowserRouter>
        <Card
          NavLink={NavLink}
          data={{
            title: mockProps.data.title,
            titleUrl: "/",
            description: mockProps.data.description
          }}
        />
      </BrowserRouter>
    );
    expect(screen.queryByText("tag1")).not.toBeInTheDocument();

    rerender(
      <BrowserRouter>
        <Card {...mockProps} />
      </BrowserRouter>
    );
    mockProps.data.tags.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it("applies custom class names correctly", () => {
    render(
      <BrowserRouter>
        <Card {...mockProps} />
      </BrowserRouter>
    );
    const cardElement = screen.getByText(mockProps.data.title).closest("div");
    expect(cardElement).toHaveClass("custom-class");
  });
});
