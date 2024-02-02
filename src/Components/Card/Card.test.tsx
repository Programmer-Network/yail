import { render, screen } from "@testing-library/react";

import Card from ".";

describe("Card component", () => {
  const mockProps = {
    title: "Test Title",
    description: "Test Description",
    date: "2021-01-01",
    author: "Test Author",
    tags: ["tag1", "tag2"],
    className: "custom-class"
  };

  it("renders correctly with minimum props", () => {
    render(
      <Card title={mockProps.title} description={mockProps.description} />
    );
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });

  it("renders correctly with all props", () => {
    render(<Card {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
    expect(screen.getByText(mockProps.author)).toBeInTheDocument();
    expect(screen.getByText(mockProps.date)).toBeInTheDocument();
    mockProps.tags.forEach(tag => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

  it("conditionally renders author and date based on props", () => {
    const { rerender } = render(
      <Card title={mockProps.title} description={mockProps.description} />
    );
    expect(screen.queryByText(mockProps.author)).not.toBeInTheDocument();
    expect(screen.queryByText(mockProps.date)).not.toBeInTheDocument();

    rerender(<Card {...mockProps} />);
    expect(screen.getByText(mockProps.author)).toBeInTheDocument();
    expect(screen.getByText(mockProps.date)).toBeInTheDocument();
  });

  it("conditionally renders tags based on props", () => {
    const { rerender } = render(
      <Card title={mockProps.title} description={mockProps.description} />
    );
    expect(screen.queryByText("tag1")).not.toBeInTheDocument();

    rerender(<Card {...mockProps} />);
    mockProps.tags.forEach(tag => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

  it("applies custom class names correctly", () => {
    render(<Card {...mockProps} />);
    const cardElement = screen.getByText(mockProps.title).closest("div"); // Assuming the title is within the main div
    expect(cardElement).toHaveClass("custom-class");
  });
});
