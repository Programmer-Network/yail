import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import AuthorCard from ".";

describe("AuthorCard component", () => {
  const mockProps = {
    name: "John Doe",
    avatar: "https://avatars.githubusercontent.com/u/2085263?v=4",
    about: "An expert in the field."
  };

  it("renders correctly", () => {
    const mockProps = {
      name: "John Doe",
      avatar: "https://avatars.githubusercontent.com/u/2085263?v=4",
      about: "An expert in the field."
    };

    const { asFragment } = render(<AuthorCard {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders author's name, avatar, and about text", () => {
    render(<AuthorCard {...mockProps} />);

    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
    expect(screen.getByText(mockProps.about)).toBeInTheDocument();
    expect(screen.getByRole("img", { name: mockProps.name })).toHaveAttribute(
      "src",
      mockProps.avatar
    );
  });

  test("calls onClick with author details when the card is clicked", () => {
    const handleClick = vi.fn();
    render(<AuthorCard {...mockProps} onClick={handleClick} />);

    fireEvent.click(screen.getByText(mockProps.name));
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith({
      name: mockProps.name,
      avatar: mockProps.avatar,
      about: mockProps.about
    });
  });
});
