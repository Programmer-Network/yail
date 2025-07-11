import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, NavLink } from "react-router-dom";
import { vi } from "vitest";

import Card from ".";
import { ICardData } from "./types";

const mockNavLink = NavLink;

describe("Card component", () => {
  const basicCardData: ICardData = {
    title: "Test Article Title",
    titleUrl: "/test-article",
    description: "This is a test description for the card component."
  };

  const fullCardData: ICardData = {
    title: "Complete Test Article",
    titleUrl: "/complete-test",
    description: "This is a complete test with all features enabled.",
    date: "Jan 15, 2024",
    author: {
      name: "John Doe",
      url: "/authors/john-doe",
      avatarUrl: "https://example.com/avatar.jpg"
    },
    tags: [
      { name: "react", url: "/tags/react" },
      { name: "testing", url: "/tags/testing" },
      { name: "typescript", url: "/tags/typescript" }
    ],
    image: {
      src: "https://example.com/image.jpg",
      alt: "Test image",
      aspectRatio: "16:9"
    },
    isRead: false,
    isFeatured: false
  };

  const renderCard = (props = {}) => {
    const defaultProps = {
      NavLink: mockNavLink,
      data: basicCardData,
      ...props
    };

    return render(
      <BrowserRouter>
        <Card {...defaultProps} />
      </BrowserRouter>
    );
  };

  describe("Basic rendering", () => {
    it("renders with minimum required props", () => {
      renderCard();

      expect(screen.getByText("Test Article Title")).toBeInTheDocument();
      expect(
        screen.getByText("This is a test description for the card component.")
      ).toBeInTheDocument();
      expect(screen.getByRole("article")).toBeInTheDocument();
    });

    it("renders loading skeleton when isLoading is true", () => {
      renderCard({ isLoading: true });

      expect(screen.queryByText("Test Article Title")).not.toBeInTheDocument();
      // Test for skeleton by checking for animate-pulse class
      const skeletonElement = document.querySelector(".yl\\:animate-pulse");
      expect(skeletonElement).toBeInTheDocument();
    });

    it("applies custom className correctly", () => {
      renderCard({ className: "custom-test-class" });

      const cardElement = screen.getByRole("article");
      expect(cardElement).toHaveClass("custom-test-class");
    });
  });

  describe("Content rendering", () => {
    it("renders author information when provided", () => {
      renderCard({ data: fullCardData });

      expect(screen.getByText("John Doe")).toBeInTheDocument();
    });

    it("renders pre-formatted date when provided", () => {
      renderCard({ data: fullCardData });

      expect(screen.getByText("Jan 15, 2024")).toBeInTheDocument();
    });

    it("renders tags when provided", () => {
      renderCard({ data: fullCardData });

      expect(screen.getByText("#react")).toBeInTheDocument();
      expect(screen.getByText("#testing")).toBeInTheDocument();
      expect(screen.getByText("#typescript")).toBeInTheDocument();
    });

    it("renders pills when provided", () => {
      const cardWithPills: ICardData = {
        ...fullCardData,
        pills: [
          { title: "Premium", variant: "primary" },
          { title: "Editor's Choice", variant: "secondary" }
        ]
      };

      renderCard({ data: cardWithPills });

      expect(screen.getByText("Premium")).toBeInTheDocument();
      expect(screen.getByText("Editor's Choice")).toBeInTheDocument();
    });

    it("renders multiple pills correctly", () => {
      const cardWithManyPills: ICardData = {
        ...fullCardData,
        pills: [
          { title: "Premium", variant: "primary" },
          { title: "Editor's Choice", variant: "secondary" },
          { title: "Trending", variant: "success" },
          { title: "New", variant: "warning" }
        ]
      };

      renderCard({ data: cardWithManyPills });

      expect(screen.getByText("Premium")).toBeInTheDocument();
      expect(screen.getByText("Editor's Choice")).toBeInTheDocument();
      expect(screen.getByText("Trending")).toBeInTheDocument();
      expect(screen.getByText("New")).toBeInTheDocument();
    });

    it("renders card without pills when none provided", () => {
      const cardWithoutPills: ICardData = {
        ...fullCardData,
        pills: undefined
      };

      renderCard({ data: cardWithoutPills });

      // Should not render any pills
      expect(screen.queryByText("Premium")).not.toBeInTheDocument();
      expect(screen.queryByText("Editor's Choice")).not.toBeInTheDocument();
    });

    it("renders image when provided", () => {
      renderCard({ data: fullCardData });

      const image = screen.getByAltText("Test image");
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", "https://example.com/image.jpg");
    });

    it("renders featured badge when isFeatured is true", () => {
      renderCard({
        data: { ...fullCardData, isFeatured: true }
      });

      expect(screen.getByText("Featured")).toBeInTheDocument();
    });

    it("renders read indicator when isRead is true", () => {
      renderCard({
        data: { ...fullCardData, isRead: true }
      });

      const cardElement = screen.getByRole("article");
      expect(cardElement).toHaveClass("yl:ring-2", "yl:ring-blue-500");
    });
  });

  describe("Interactive features", () => {
    it("renders bookmark and share buttons when enabled", () => {
      renderCard({
        data: fullCardData,
        showBookmark: true,
        showShare: true
      });

      expect(screen.getByLabelText("Bookmark this card")).toBeInTheDocument();
      expect(screen.getByLabelText("Share this card")).toBeInTheDocument();
    });

    it("calls onCardClick when card is clicked", () => {
      const mockOnCardClick = vi.fn();
      renderCard({
        data: fullCardData,
        onCardClick: mockOnCardClick
      });

      const cardElement = screen.getByRole("article");
      fireEvent.click(cardElement);

      expect(mockOnCardClick).toHaveBeenCalledWith(fullCardData);
    });

    it("calls onBookmark when bookmark button is clicked", () => {
      const mockOnBookmark = vi.fn();
      renderCard({
        data: fullCardData,
        showBookmark: true,
        onBookmark: mockOnBookmark
      });

      const bookmarkButton = screen.getByLabelText("Bookmark this card");
      fireEvent.click(bookmarkButton);

      expect(mockOnBookmark).toHaveBeenCalledWith(fullCardData);
    });

    it("calls onShare when share button is clicked", () => {
      const mockOnShare = vi.fn();
      renderCard({
        data: fullCardData,
        showShare: true,
        onShare: mockOnShare
      });

      const shareButton = screen.getByLabelText("Share this card");
      fireEvent.click(shareButton);

      expect(mockOnShare).toHaveBeenCalledWith(fullCardData);
    });

    it("calls onAuthorClick when author link is clicked", () => {
      const mockOnAuthorClick = vi.fn();
      renderCard({
        data: fullCardData,
        onAuthorClick: mockOnAuthorClick
      });

      const authorLink = screen.getByText("John Doe");
      fireEvent.click(authorLink);

      expect(mockOnAuthorClick).toHaveBeenCalledWith(fullCardData.author);
    });

    it("calls onTagClick when tag is clicked", () => {
      const mockOnTagClick = vi.fn();
      renderCard({
        data: fullCardData,
        onTagClick: mockOnTagClick
      });

      const tagLink = screen.getByText("#react");
      fireEvent.click(tagLink);

      expect(mockOnTagClick).toHaveBeenCalledWith({
        name: "react",
        url: "/tags/react"
      });
    });
  });

  describe("Tag visibility", () => {
    const manyTagsData: ICardData = {
      ...fullCardData,
      tags: Array.from({ length: 15 }, (_, i) => ({
        name: `tag${i + 1}`,
        url: `/tags/tag${i + 1}`
      }))
    };

    it("shows limited tags by default and displays 'show more' button", () => {
      renderCard({
        data: manyTagsData,
        maxVisibleTags: 5
      });

      expect(screen.getByText("#tag1")).toBeInTheDocument();
      expect(screen.getByText("#tag5")).toBeInTheDocument();
      expect(screen.queryByText("#tag6")).not.toBeInTheDocument();
      expect(screen.getByText("+10 more")).toBeInTheDocument();
    });

    it("expands tags when 'show more' button is clicked", () => {
      renderCard({
        data: manyTagsData,
        maxVisibleTags: 5
      });

      const showMoreButton = screen.getByText("+10 more");
      fireEvent.click(showMoreButton);

      expect(screen.getByText("#tag15")).toBeInTheDocument();
      expect(screen.getByText("Show less")).toBeInTheDocument();
    });
  });

  describe("External links", () => {
    it("renders external link icon for external URLs", () => {
      const externalLinkData = {
        ...basicCardData,
        titleUrl: "https://external-site.com/article"
      };

      renderCard({ data: externalLinkData });

      const titleLink = screen.getByRole("link", {
        name: /Test Article Title/i
      });
      expect(titleLink).toHaveAttribute(
        "href",
        "https://external-site.com/article"
      );
      expect(titleLink).toHaveAttribute("target", "_blank");
      expect(titleLink).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  describe("Accessibility", () => {
    it("has proper ARIA attributes", () => {
      renderCard({ data: fullCardData });

      const cardElement = screen.getByRole("article");
      expect(cardElement).toHaveAttribute("aria-labelledby");
      expect(cardElement).toHaveAttribute("aria-describedby");
    });

    it("has proper tabindex when clickable", () => {
      const mockOnCardClick = vi.fn();
      renderCard({
        data: fullCardData,
        onCardClick: mockOnCardClick
      });

      const cardElement = screen.getByRole("article");
      expect(cardElement).toHaveAttribute("tabindex", "0");
    });

    it("handles keyboard navigation", () => {
      const mockOnCardClick = vi.fn();
      renderCard({
        data: fullCardData,
        onCardClick: mockOnCardClick
      });

      const cardElement = screen.getByRole("article");
      fireEvent.keyDown(cardElement, { key: "Enter" });

      expect(mockOnCardClick).toHaveBeenCalledWith(fullCardData);
    });
  });

  describe("Date handling", () => {
    it("displays pre-formatted date strings as-is", () => {
      const cardWithRelativeDate = {
        ...fullCardData,
        date: "2 hours ago"
      };

      renderCard({ data: cardWithRelativeDate });
      expect(screen.getByText("2 hours ago")).toBeInTheDocument();
    });

    it("displays short date formats correctly", () => {
      const cardWithShortDate = {
        ...fullCardData,
        date: "Feb 15"
      };

      renderCard({ data: cardWithShortDate });
      expect(screen.getByText("Feb 15")).toBeInTheDocument();
    });

    it("handles empty date gracefully", () => {
      const cardWithoutDate = {
        ...fullCardData,
        date: undefined
      };

      renderCard({ data: cardWithoutDate });
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      // Should not render date separator
      expect(screen.queryByText("|")).not.toBeInTheDocument();
    });
  });

  describe("Footer actions", () => {
    it("renders footer actions when provided", () => {
      const footerActions = [
        {
          label: "View Details",
          onClick: vi.fn(),
          variant: "primary" as const
        },
        {
          label: "Share",
          onClick: vi.fn(),
          variant: "outlined" as const
        }
      ];

      renderCard({
        data: fullCardData,
        footerActions
      });

      expect(screen.getByText("View Details")).toBeInTheDocument();
      expect(screen.getByText("Share")).toBeInTheDocument();
    });

    it("does not render footer actions when not provided", () => {
      renderCard({ data: fullCardData });

      // Should not have any footer action buttons
      expect(screen.queryByText("View Details")).not.toBeInTheDocument();
      expect(screen.queryByText("Share")).not.toBeInTheDocument();
    });

    it("calls footer action onClick when clicked", () => {
      const mockOnClick = vi.fn();
      const footerActions = [
        {
          label: "Test Footer Action",
          onClick: mockOnClick,
          variant: "primary" as const
        }
      ];

      renderCard({
        data: fullCardData,
        footerActions
      });

      const footerButton = screen.getByText("Test Footer Action");
      fireEvent.click(footerButton);

      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it("renders footer actions with different variants", () => {
      const footerActions = [
        {
          label: "Primary Action",
          onClick: vi.fn(),
          variant: "primary" as const
        },
        {
          label: "Danger Action",
          onClick: vi.fn(),
          variant: "danger" as const
        },
        {
          label: "Outlined Action",
          onClick: vi.fn(),
          variant: "outlined" as const
        }
      ];

      renderCard({
        data: fullCardData,
        footerActions
      });

      expect(screen.getByText("Primary Action")).toBeInTheDocument();
      expect(screen.getByText("Danger Action")).toBeInTheDocument();
      expect(screen.getByText("Outlined Action")).toBeInTheDocument();
    });

    it("hides footer actions when show is false", () => {
      const footerActions = [
        {
          label: "Visible Action",
          onClick: vi.fn(),
          variant: "primary" as const,
          show: true
        },
        {
          label: "Hidden Action",
          onClick: vi.fn(),
          variant: "primary" as const,
          show: false
        }
      ];

      renderCard({
        data: fullCardData,
        footerActions
      });

      expect(screen.getByText("Visible Action")).toBeInTheDocument();
      expect(screen.queryByText("Hidden Action")).not.toBeInTheDocument();
    });

    it("renders both top actions and footer actions", () => {
      const actions = [
        {
          label: "Top Action",
          onClick: vi.fn(),
          variant: "primary" as const
        }
      ];

      const footerActions = [
        {
          label: "Bottom Action",
          onClick: vi.fn(),
          variant: "primary" as const
        }
      ];

      renderCard({
        data: fullCardData,
        actions,
        footerActions
      });

      expect(screen.getByText("Top Action")).toBeInTheDocument();
      expect(screen.getByText("Bottom Action")).toBeInTheDocument();
    });
  });
});
