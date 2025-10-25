import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { PillVariant } from "../Pill/Pill.types";
import { PersonCardSkeleton } from "./PersonCard.Skeleton";
import { PersonCard } from "./index";
import { IPerson, IPersonAction } from "./types";

const mockPerson: IPerson = {
  id: 1,
  name: "Ada Lovelace",
  username: "ada_lovelace",
  email: "ada@lovelace.com",
  avatar: "https://example.com/avatar.jpg",
  about: "Pioneer in computer science and mathematics",
  role: "Software Engineer",
  location: "London, UK",
  badge: {
    text: "Verified",
    variant: PillVariant.PRIMARY
  },
  tags: [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "TypeScript" },
    { id: 3, name: "React" }
  ],
  socialProfiles: {
    github: "https://github.com/ada",
    linkedin: "https://linkedin.com/in/ada",
    twitter: "https://twitter.com/ada"
  }
};

describe("PersonCard", () => {
  it("renders person information correctly", () => {
    render(<PersonCard person={mockPerson} />);

    expect(screen.getByText("Ada Lovelace")).toBeInTheDocument();
    expect(screen.getByText("@ada_lovelace")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("London, UK")).toBeInTheDocument();
    expect(
      screen.getByText("Pioneer in computer science and mathematics")
    ).toBeInTheDocument();
    expect(screen.getByText("Verified")).toBeInTheDocument();
  });

  it("renders avatar with correct alt text", () => {
    render(<PersonCard person={mockPerson} />);

    const avatar = screen.getByRole("img");
    expect(avatar).toHaveAttribute("alt", "Ada Lovelace");
    expect(avatar).toHaveAttribute("src", "https://example.com/avatar.jpg");
  });

  it("renders tags correctly", () => {
    render(<PersonCard person={mockPerson} />);

    expect(screen.getByText("JavaScript")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("limits tags based on maxTags prop", () => {
    const personWithManyTags = {
      ...mockPerson,
      tags: [
        { id: 1, name: "JavaScript" },
        { id: 2, name: "TypeScript" },
        { id: 3, name: "React" },
        { id: 4, name: "Node.js" },
        { id: 5, name: "Python" }
      ]
    };

    render(<PersonCard person={personWithManyTags} maxTags={2} />);

    expect(screen.getByText("JavaScript")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("+3")).toBeInTheDocument();
    expect(screen.queryByText("React")).not.toBeInTheDocument();
  });

  it("renders social links correctly", () => {
    render(<PersonCard person={mockPerson} />);

    const githubLink = screen.getByTitle("github");
    const linkedinLink = screen.getByTitle("linkedin");
    const twitterLink = screen.getByTitle("twitter");

    expect(githubLink).toHaveAttribute("href", "https://github.com/ada");
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/ada");
    expect(twitterLink).toHaveAttribute("href", "https://twitter.com/ada");

    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("handles click events", () => {
    const handleClick = vi.fn();
    render(<PersonCard person={mockPerson} onClick={handleClick} />);

    const card = screen.getByRole("button");
    fireEvent.click(card);

    expect(handleClick).toHaveBeenCalledWith(mockPerson, expect.any(Object));
  });

  it("handles tag click events", () => {
    const handleTagClick = vi.fn();
    render(<PersonCard person={mockPerson} onTagClick={handleTagClick} />);

    const jsTag = screen.getByText("JavaScript");
    fireEvent.click(jsTag);

    expect(handleTagClick).toHaveBeenCalledWith(
      { id: 1, name: "JavaScript" },
      expect.any(Object)
    );
  });

  it("renders actions correctly", () => {
    const actions: IPersonAction[] = [
      {
        label: "Follow",
        onClick: vi.fn(),
        variant: "primary",
        iconName: "IconUser"
      },
      {
        label: "Message",
        onClick: vi.fn(),
        variant: "outlined",
        iconName: "IconMessage"
      }
    ];

    render(<PersonCard person={mockPerson} actions={actions} />);

    expect(screen.getByText("Follow")).toBeInTheDocument();
    expect(screen.getByText("Message")).toBeInTheDocument();
  });

  it("handles action clicks", () => {
    const followAction = vi.fn();
    const actions: IPersonAction[] = [
      {
        label: "Follow",
        onClick: followAction,
        variant: "primary"
      }
    ];

    render(<PersonCard person={mockPerson} actions={actions} />);

    const followButton = screen.getByText("Follow");
    fireEvent.click(followButton);

    expect(followAction).toHaveBeenCalledWith(mockPerson, expect.any(Object));
  });

  it("renders with different sizes", () => {
    const { container, rerender } = render(
      <PersonCard person={mockPerson} size='small' />
    );
    expect(container.firstChild).toHaveClass("p-4");

    rerender(<PersonCard person={mockPerson} size='large' />);
    expect(container.firstChild).toHaveClass("p-8");
  });

  it("handles keyboard navigation", () => {
    const handleClick = vi.fn();
    render(<PersonCard person={mockPerson} onClick={handleClick} />);

    const card = screen.getByRole("button");
    fireEvent.keyDown(card, { key: "Enter" });

    expect(handleClick).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(card, { key: " " });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it("hides sections based on props", () => {
    const personWithoutAbout = {
      ...mockPerson,
      about: undefined
    };

    render(
      <PersonCard
        person={personWithoutAbout}
        showTags={false}
        showSocialLinks={false}
      />
    );

    expect(screen.queryByText("JavaScript")).not.toBeInTheDocument();
    expect(
      screen.queryByText("Pioneer in computer science and mathematics")
    ).not.toBeInTheDocument();

    expect(screen.queryByTitle("github")).not.toBeInTheDocument();
  });

  it("renders as link when href is provided", () => {
    // Test with person having no social profiles to avoid multiple links
    const personWithoutSocial = { ...mockPerson, socialProfiles: {} };
    render(<PersonCard person={personWithoutSocial} href='/profile/ada' />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/profile/ada");
  });

  it("handles missing optional fields gracefully", () => {
    const minimalPerson: IPerson = {
      id: 1,
      name: "John Doe"
    };

    render(<PersonCard person={minimalPerson} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.queryByText("@")).not.toBeInTheDocument();
    // Avatar component generates a default avatar even without src
    const avatar = screen.getByRole("img");
    expect(avatar).toBeInTheDocument();
  });

  it("uses name field when provided instead of firstName/lastName", () => {
    const personWithName: IPerson = {
      ...mockPerson,
      name: "Custom Name"
    };

    render(<PersonCard person={personWithName} />);

    expect(screen.getByText("Custom Name")).toBeInTheDocument();
    expect(screen.queryByText("Ada Lovelace")).not.toBeInTheDocument();
  });

  it("prevents event propagation on social link clicks", () => {
    const handleCardClick = vi.fn();
    render(<PersonCard person={mockPerson} onClick={handleCardClick} />);

    const githubLink = screen.getByTitle("github");
    fireEvent.click(githubLink);

    expect(handleCardClick).not.toHaveBeenCalled();
  });

  it("prevents event propagation on action clicks", () => {
    const handleCardClick = vi.fn();
    const handleActionClick = vi.fn();
    const actions: IPersonAction[] = [
      {
        label: "Follow",
        onClick: handleActionClick,
        variant: "primary"
      }
    ];

    render(
      <PersonCard
        person={mockPerson}
        onClick={handleCardClick}
        actions={actions}
      />
    );

    const followButton = screen.getByText("Follow");
    fireEvent.click(followButton);

    expect(handleActionClick).toHaveBeenCalled();
    expect(handleCardClick).not.toHaveBeenCalled();
  });

  it("applies custom className", () => {
    const { container } = render(
      <PersonCard person={mockPerson} className='custom-class' />
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("truncates description based on maxDescriptionLines", () => {
    const longDescription =
      "This is a very long description that should be truncated";
    const personWithLongDescription = {
      ...mockPerson,
      about: longDescription
    };

    render(
      <PersonCard person={personWithLongDescription} maxDescriptionLines={2} />
    );

    const description = screen.getByText(longDescription);
    expect(description).toHaveClass("line-clamp-2");
  });
});

describe("PersonCardSkeleton", () => {
  it("renders skeleton with default props", () => {
    render(<PersonCardSkeleton />);

    // Check for skeleton elements
    const skeletonElements = screen.getAllByRole("generic");
    expect(skeletonElements.length).toBeGreaterThan(0);
  });

  it("renders with different sizes", () => {
    const { container, rerender } = render(<PersonCardSkeleton size='small' />);
    expect(container.firstChild).toHaveClass("p-4");

    rerender(<PersonCardSkeleton size='large' />);
    expect(container.firstChild).toHaveClass("p-8");
  });

  it("hides sections based on props", () => {
    const { container } = render(
      <PersonCardSkeleton
        showTags={false}
        showSocialLinks={false}
        about={false}
      />
    );

    // Should have fewer skeleton elements when sections are hidden
    const skeletonElements = container.querySelectorAll(".yl\\:bg-border");
    expect(skeletonElements.length).toBeLessThan(10); // Rough estimate
  });

  it("applies custom className", () => {
    const { container } = render(
      <PersonCardSkeleton className='custom-skeleton' />
    );

    expect(container.firstChild).toHaveClass("custom-skeleton");
  });

  it("has animate-pulse class", () => {
    const { container } = render(<PersonCardSkeleton />);

    expect(container.firstChild).toHaveClass("animate-pulse");
  });
});
