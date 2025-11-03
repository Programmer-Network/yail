import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { LatestArticleCard } from "./LatestArticleCard";
import { ILatestArticleCardData } from "./LatestArticleCard.types";

const MockNavLink = ({
  to,
  onClick,
  className,
  children
}: {
  to: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  children: React.ReactNode;
}) => (
  <a href={to} onClick={onClick} className={className}>
    {children}
  </a>
);

const mockArticle: ILatestArticleCardData = {
  id: 1,
  title: "Getting Started with React Testing Library",
  summary:
    "Learn how to write effective tests for your React components using React Testing Library and best practices.",
  createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
  articleURL: "/johndoe/articles/getting-started-with-react-testing-library",
  author: {
    username: "johndoe"
  }
};

describe("LatestArticleCard", () => {
  describe("Rendering", () => {
    it("renders article data correctly", () => {
      render(<LatestArticleCard data={mockArticle} NavLink={MockNavLink} />);

      expect(
        screen.getByText("Getting Started with React Testing Library")
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Learn how to write effective tests/)
      ).toBeInTheDocument();
      expect(screen.getByText("@johndoe")).toBeInTheDocument();
    });

    it("renders with custom className", () => {
      const { container } = render(
        <LatestArticleCard
          data={mockArticle}
          NavLink={MockNavLink}
          className='custom-class'
        />
      );

      const article = container.querySelector("article");
      expect(article).toHaveClass("custom-class");
    });

    it("renders loading skeleton when isLoading is true", () => {
      const { container } = render(
        <LatestArticleCard
          data={mockArticle}
          NavLink={MockNavLink}
          isLoading={true}
        />
      );

      const skeleton = container.querySelector(".animate-pulse");
      expect(skeleton).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("has proper ARIA attributes", () => {
      const { container } = render(
        <LatestArticleCard data={mockArticle} NavLink={MockNavLink} />
      );

      const article = container.querySelector("article");
      expect(article).toHaveAttribute("role", "article");
      expect(article).toHaveAttribute("aria-labelledby");
      expect(article).toHaveAttribute("aria-describedby");
    });

    it("has proper tabIndex when clickable", () => {
      const onCardClick = vi.fn();
      const { container } = render(
        <LatestArticleCard
          data={mockArticle}
          NavLink={MockNavLink}
          onCardClick={onCardClick}
        />
      );

      const article = container.querySelector("article");
      expect(article).toHaveAttribute("tabIndex", "0");
    });

    it("has proper tabIndex when not clickable", () => {
      const { container } = render(
        <LatestArticleCard data={mockArticle} NavLink={MockNavLink} />
      );

      const article = container.querySelector("article");
      expect(article).toHaveAttribute("tabIndex", "-1");
    });

    it("has proper aria-busy attribute when loading", () => {
      const { container } = render(
        <LatestArticleCard
          data={mockArticle}
          NavLink={MockNavLink}
          isLoading={true}
        />
      );

      const article = container.querySelector("article");
      expect(article).toHaveAttribute("aria-busy", "true");
    });
  });

  describe("Interactions", () => {
    it("calls onCardClick when article is clicked", () => {
      const onCardClick = vi.fn();
      const { container } = render(
        <LatestArticleCard
          data={mockArticle}
          NavLink={MockNavLink}
          onCardClick={onCardClick}
        />
      );

      const article = container.querySelector("article");
      if (article) {
        fireEvent.click(article);
      }

      expect(onCardClick).toHaveBeenCalledWith(mockArticle);
    });

    it("calls onCardClick when Enter key is pressed", () => {
      const onCardClick = vi.fn();
      const { container } = render(
        <LatestArticleCard
          data={mockArticle}
          NavLink={MockNavLink}
          onCardClick={onCardClick}
        />
      );

      const article = container.querySelector("article");
      if (article) {
        fireEvent.keyDown(article, { key: "Enter" });
      }

      expect(onCardClick).toHaveBeenCalledWith(mockArticle);
    });

    it("calls onCardClick when Space key is pressed", () => {
      const onCardClick = vi.fn();
      const { container } = render(
        <LatestArticleCard
          data={mockArticle}
          NavLink={MockNavLink}
          onCardClick={onCardClick}
        />
      );

      const article = container.querySelector("article");
      if (article) {
        fireEvent.keyDown(article, { key: " " });
      }

      expect(onCardClick).toHaveBeenCalledWith(mockArticle);
    });

    it("does not call onCardClick when other keys are pressed", () => {
      const onCardClick = vi.fn();
      const { container } = render(
        <LatestArticleCard
          data={mockArticle}
          NavLink={MockNavLink}
          onCardClick={onCardClick}
        />
      );

      const article = container.querySelector("article");
      if (article) {
        fireEvent.keyDown(article, { key: "Tab" });
      }

      expect(onCardClick).not.toHaveBeenCalled();
    });

    it("does not have click handlers when onCardClick is not provided", () => {
      const { container } = render(
        <LatestArticleCard data={mockArticle} NavLink={MockNavLink} />
      );

      const article = container.querySelector("article");
      expect(article).not.toHaveClass("cursor-pointer");
    });
  });

  describe("Time Display", () => {
    it("displays 'just now' for very recent articles", () => {
      const recentArticle = {
        ...mockArticle,
        createdAt: new Date().toISOString()
      };

      render(<LatestArticleCard data={recentArticle} NavLink={MockNavLink} />);

      expect(screen.getByText("just now")).toBeInTheDocument();
    });

    it("displays minutes for articles less than an hour old", () => {
      const recentArticle = {
        ...mockArticle,
        createdAt: new Date(Date.now() - 30 * 60 * 1000).toISOString() // 30 minutes ago
      };

      render(<LatestArticleCard data={recentArticle} NavLink={MockNavLink} />);

      expect(screen.getByText("30m ago")).toBeInTheDocument();
    });

    it("displays hours for articles less than a day old", () => {
      const recentArticle = {
        ...mockArticle,
        createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString() // 5 hours ago
      };

      render(<LatestArticleCard data={recentArticle} NavLink={MockNavLink} />);

      expect(screen.getByText("5h ago")).toBeInTheDocument();
    });

    it("displays days for articles less than a week old", () => {
      const recentArticle = {
        ...mockArticle,
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString() // 3 days ago
      };

      render(<LatestArticleCard data={recentArticle} NavLink={MockNavLink} />);

      expect(screen.getByText("3d ago")).toBeInTheDocument();
    });

    it("displays formatted date for articles older than a week", () => {
      const oldArticle = {
        ...mockArticle,
        createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString() // 30 days ago
      };

      render(<LatestArticleCard data={oldArticle} NavLink={MockNavLink} />);

      // Should display something like "Jan 1" or "Jan 1, 2023"
      const dateText = screen
        .getByText(/@johndoe/)
        .parentElement?.textContent?.split("•")[1]
        ?.trim();
      expect(dateText).toMatch(/[A-Z][a-z]{2}\s+\d{1,2}/);
    });
  });

  describe("Memoization", () => {
    it("does not re-render when props are the same", () => {
      const { rerender } = render(
        <LatestArticleCard data={mockArticle} NavLink={MockNavLink} />
      );

      const firstRender = screen.getByText(
        "Getting Started with React Testing Library"
      );

      rerender(<LatestArticleCard data={mockArticle} NavLink={MockNavLink} />);

      const secondRender = screen.getByText(
        "Getting Started with React Testing Library"
      );

      expect(firstRender).toBe(secondRender);
    });
  });
});
