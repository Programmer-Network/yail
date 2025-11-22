import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ILatestArticleCardData } from "../LatestArticleCard/LatestArticleCard.types";
import { LatestArticlesList } from "./LatestArticlesList";

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

const mockArticles: ILatestArticleCardData[] = [
  {
    id: 1,
    title: "Article One",
    summary: "Summary of article one",
    createdAt: new Date().toISOString(),
    articleURL: "/user1/articles/article-one",
    author: { username: "user1" }
  },
  {
    id: 2,
    title: "Article Two",
    summary: "Summary of article two",
    createdAt: new Date().toISOString(),
    articleURL: "/user2/articles/article-two",
    author: { username: "user2" }
  },
  {
    id: 3,
    title: "Article Three",
    summary: "Summary of article three",
    createdAt: new Date().toISOString(),
    articleURL: "/user3/articles/article-three",
    author: { username: "user3" }
  }
];

describe("LatestArticlesList", () => {
  describe("Rendering", () => {
    it("renders the default title", () => {
      render(<LatestArticlesList articles={[]} NavLink={MockNavLink} />);

      expect(screen.getByText("Latest Articles")).toBeInTheDocument();
    });

    it("renders a custom title", () => {
      render(
        <LatestArticlesList
          articles={[]}
          NavLink={MockNavLink}
          title='Recent Posts'
        />
      );

      expect(screen.getByText("Recent Posts")).toBeInTheDocument();
    });

    it("renders all articles when count is less than maxArticles", () => {
      render(
        <LatestArticlesList
          articles={mockArticles}
          NavLink={MockNavLink}
          maxArticles={5}
        />
      );

      expect(screen.getByText("Article One")).toBeInTheDocument();
      expect(screen.getByText("Article Two")).toBeInTheDocument();
      expect(screen.getByText("Article Three")).toBeInTheDocument();
    });

    it("renders only maxArticles when count exceeds limit", () => {
      render(
        <LatestArticlesList
          articles={mockArticles}
          NavLink={MockNavLink}
          maxArticles={2}
        />
      );

      expect(screen.getByText("Article One")).toBeInTheDocument();
      expect(screen.getByText("Article Two")).toBeInTheDocument();
      expect(screen.queryByText("Article Three")).not.toBeInTheDocument();
    });

    it("renders empty state when no articles are provided", () => {
      render(<LatestArticlesList articles={[]} NavLink={MockNavLink} />);

      expect(screen.getByText("No articles available")).toBeInTheDocument();
    });

    it("renders custom empty message", () => {
      render(
        <LatestArticlesList
          articles={[]}
          NavLink={MockNavLink}
          emptyMessage='No posts yet'
        />
      );

      expect(screen.getByText("No posts yet")).toBeInTheDocument();
    });

    it("renders with custom className", () => {
      const { container } = render(
        <LatestArticlesList
          articles={[]}
          NavLink={MockNavLink}
          className='custom-class'
        />
      );

      const section = container.querySelector("section");
      expect(section).toHaveClass("custom-class");
    });
  });

  describe("Loading State", () => {
    it("renders skeleton loaders when loading", () => {
      const { container } = render(
        <LatestArticlesList
          articles={[]}
          NavLink={MockNavLink}
          isLoading={true}
          maxArticles={3}
        />
      );

      const skeletons = container.querySelectorAll(".yl\\:animate-pulse");
      expect(skeletons).toHaveLength(3);
    });

    it("renders correct number of skeletons based on maxArticles", () => {
      const { container } = render(
        <LatestArticlesList
          articles={[]}
          NavLink={MockNavLink}
          isLoading={true}
          maxArticles={7}
        />
      );

      const skeletons = container.querySelectorAll(".yl\\:animate-pulse");
      expect(skeletons).toHaveLength(7);
    });

    it("does not render empty state when loading", () => {
      render(
        <LatestArticlesList
          articles={[]}
          NavLink={MockNavLink}
          isLoading={true}
        />
      );

      expect(
        screen.queryByText("No articles available")
      ).not.toBeInTheDocument();
    });

    it("does not render articles when loading", () => {
      render(
        <LatestArticlesList
          articles={mockArticles}
          NavLink={MockNavLink}
          isLoading={true}
        />
      );

      expect(screen.queryByText("Article One")).not.toBeInTheDocument();
    });
  });

  describe("View All Button", () => {
    it("renders View All button when articles exceed maxArticles", () => {
      render(
        <LatestArticlesList
          articles={mockArticles}
          NavLink={MockNavLink}
          maxArticles={2}
          onViewAllClick={vi.fn()}
        />
      );

      expect(screen.getByText("View All Articles")).toBeInTheDocument();
    });

    it("does not render View All button when articles do not exceed maxArticles", () => {
      render(
        <LatestArticlesList
          articles={mockArticles}
          NavLink={MockNavLink}
          maxArticles={5}
          onViewAllClick={vi.fn()}
        />
      );

      expect(screen.queryByText("View All Articles")).not.toBeInTheDocument();
    });

    it("does not render View All button when onViewAllClick is not provided", () => {
      render(
        <LatestArticlesList
          articles={mockArticles}
          NavLink={MockNavLink}
          maxArticles={2}
        />
      );

      expect(screen.queryByText("View All Articles")).not.toBeInTheDocument();
    });

    it("calls onViewAllClick when View All button is clicked", () => {
      const onViewAllClick = vi.fn();

      render(
        <LatestArticlesList
          articles={mockArticles}
          NavLink={MockNavLink}
          maxArticles={2}
          onViewAllClick={onViewAllClick}
        />
      );

      const viewAllButton = screen.getByText("View All Articles");
      fireEvent.click(viewAllButton);

      expect(onViewAllClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("Accessibility", () => {
    it("has proper ARIA attributes", () => {
      const { container } = render(
        <LatestArticlesList articles={mockArticles} NavLink={MockNavLink} />
      );

      const section = container.querySelector("section");
      expect(section).toHaveAttribute(
        "aria-labelledby",
        "latest-articles-title"
      );

      const title = screen.getByText("Latest Articles");
      expect(title).toHaveAttribute("id", "latest-articles-title");
    });

    it("has proper role for list", () => {
      const { container } = render(
        <LatestArticlesList articles={mockArticles} NavLink={MockNavLink} />
      );

      const list = container.querySelector('[role="list"]');
      expect(list).toBeInTheDocument();
    });

    it("has proper aria-live for empty state", () => {
      const { container } = render(
        <LatestArticlesList articles={[]} NavLink={MockNavLink} />
      );

      const emptyState = container.querySelector('[role="status"]');
      expect(emptyState).toHaveAttribute("aria-live", "polite");
    });

    it("has proper aria-label for View All button", () => {
      render(
        <LatestArticlesList
          articles={mockArticles}
          NavLink={MockNavLink}
          maxArticles={2}
          onViewAllClick={vi.fn()}
        />
      );

      const viewAllButton = screen.getByText("View All Articles");
      expect(viewAllButton).toHaveAttribute("aria-label", "View all articles");
    });
  });

  describe("Interactions", () => {
    it("passes onArticleClick to article cards", () => {
      const onArticleClick = vi.fn();

      const { container } = render(
        <LatestArticlesList
          articles={mockArticles}
          NavLink={MockNavLink}
          onArticleClick={onArticleClick}
        />
      );

      const firstArticle = container.querySelector("article");
      if (firstArticle) {
        fireEvent.click(firstArticle);
      }

      expect(onArticleClick).toHaveBeenCalledWith(mockArticles[0]);
    });
  });

  describe("Memoization", () => {
    it("does not re-render when props are the same", () => {
      const { rerender } = render(
        <LatestArticlesList articles={mockArticles} NavLink={MockNavLink} />
      );

      const firstRender = screen.getByText("Article One");

      rerender(
        <LatestArticlesList articles={mockArticles} NavLink={MockNavLink} />
      );

      const secondRender = screen.getByText("Article One");

      expect(firstRender).toBe(secondRender);
    });
  });
});
