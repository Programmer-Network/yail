import { render, screen } from "@testing-library/react";

import Card from ".";

describe("Card component", () => {
  const mockProps = {
    data: {
      title: "Test Title",
      description: "Test Description",
      date: "2021-01-01",
      author: "Test Author",
      tags: ["tag1", "tag2"]
    },
    className: "custom-class"
  };

  it("renders correctly with minimum props", () => {
    render(
      <Card
        data={{
          title: mockProps.data.title,
          description: mockProps.data.description
        }}
      />
    );
    expect(screen.getByText(mockProps.data.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.data.description)).toBeInTheDocument();
  });

  it("renders correctly with all props", () => {
    render(<Card {...mockProps} />);
    expect(screen.getByText(mockProps.data.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.data.description)).toBeInTheDocument();
    expect(screen.getByText(mockProps.data.author)).toBeInTheDocument();
    expect(screen.getByText(mockProps.data.date)).toBeInTheDocument();
    mockProps.data.tags.forEach(tag => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

  it("conditionally renders author and date based on props", () => {
    const { rerender } = render(
      <Card
        data={{
          title: mockProps.data.title,
          description: mockProps.data.description
        }}
      />
    );
    expect(screen.queryByText(mockProps.data.author)).not.toBeInTheDocument();
    expect(screen.queryByText(mockProps.data.date)).not.toBeInTheDocument();

    rerender(<Card {...mockProps} />);
    expect(screen.getByText(mockProps.data.author)).toBeInTheDocument();
    expect(screen.getByText(mockProps.data.date)).toBeInTheDocument();
  });

  it("conditionally renders tags based on props", () => {
    const { rerender } = render(
      <Card
        data={{
          title: mockProps.data.title,
          description: mockProps.data.description
        }}
      />
    );
    expect(screen.queryByText("tag1")).not.toBeInTheDocument();

    rerender(<Card {...mockProps} />);
    mockProps.data.tags.forEach(tag => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

  it("applies custom class names correctly", () => {
    render(<Card {...mockProps} />);
    const cardElement = screen.getByText(mockProps.data.title).closest("div"); // Assuming the title is within the main div
    expect(cardElement).toHaveClass("custom-class");
  });
});
