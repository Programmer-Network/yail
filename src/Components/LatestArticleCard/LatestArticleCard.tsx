import classNames from "classnames";
import { FC, memo, useCallback, useId } from "react";

import { LatestArticleCardSkeleton } from "./LatestArticleCard.Skeleton";
import { ILatestArticleCard } from "./LatestArticleCard.types";

const LatestArticleCard: FC<ILatestArticleCard> = memo(
  ({ data, className, NavLink, isLoading = false, onCardClick }) => {
    const cardId = useId();

    const { title, articleURL, createdAt, summary, author } = data;

    const handleCardClick = useCallback(
      (e: React.MouseEvent) => {
        if (!onCardClick) {
          return;
        }

        e.preventDefault();
        onCardClick(data);
      },
      [onCardClick, data]
    );

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (!onCardClick) {
          return;
        }

        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onCardClick(data);
        }
      },
      [onCardClick, data]
    );

    if (isLoading) {
      return <LatestArticleCardSkeleton className={className} />;
    }

    const articleDate = new Date(createdAt);
    const timeAgo = getTimeAgo(articleDate);

    const cardClasses = classNames(
      "group flex flex-col gap-2 border-2 border-border rounded-lg p-3 overflow-hidden transition-all duration-200",
      "hover:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
      {
        "cursor-pointer": onCardClick
      },
      className
    );

    return (
      <article
        className={cardClasses}
        role='article'
        aria-labelledby={`latest-article-title-${cardId}`}
        aria-describedby={`latest-article-description-${cardId}`}
        tabIndex={onCardClick ? 0 : -1}
        onClick={onCardClick ? handleCardClick : undefined}
        onKeyDown={onCardClick ? handleKeyDown : undefined}
      >
        <NavLink
          to={articleURL}
          onClick={handleCardClick}
          className='hover:text-primary text-text line-clamp-2 text-sm font-semibold transition-colors'
        >
          {title}
        </NavLink>

        <p
          id={`latest-article-description-${cardId}`}
          className='text-text/70 line-clamp-1 text-xs leading-relaxed'
        >
          {summary}
        </p>

        <div className='text-muted flex items-center gap-2 text-xs'>
          <NavLink
            to={`/${author.username}`}
            onClick={e => e.stopPropagation()}
            className='hover:text-primary transition-colors'
          >
            @{author.username}
          </NavLink>
          <span className='text-border'>•</span>
          <span>{timeAgo}</span>
        </div>
      </article>
    );
  },
  (prevProps, nextProps) => {
    return (
      JSON.stringify(prevProps.data) === JSON.stringify(nextProps.data) &&
      prevProps.isLoading === nextProps.isLoading &&
      prevProps.className === nextProps.className
    );
  }
);

const getTimeAgo = (date: Date): string => {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInMinutes = Math.floor(diffInMs / 60000);
  const diffInHours = Math.floor(diffInMs / 3600000);
  const diffInDays = Math.floor(diffInMs / 86400000);

  if (diffInMinutes < 1) {
    return "just now";
  }

  if (diffInMinutes < 60) {
    return `${diffInMinutes}m ago`;
  }

  if (diffInHours < 24) {
    return `${diffInHours}h ago`;
  }

  if (diffInDays < 7) {
    return `${diffInDays}d ago`;
  }

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: date.getFullYear() !== now.getFullYear() ? "numeric" : undefined
  });
};

LatestArticleCard.displayName = "LatestArticleCard";

export { LatestArticleCard };
