import classNames from "classnames";
import { FC, memo, useId } from "react";

import { CardImage } from "./Card.Image";
import { CardSkeleton } from "./Card.Skeleton";
import {
  CardActions,
  CardAuthor,
  CardFooterActions,
  CardHeader,
  CardPills,
  CardStatusIndicators,
  CardTags
} from "./Components";
import { useCardInteractions, useTagVisibility } from "./Hooks";
import { ICard } from "./types";
import { getLineClampClass, getVariantClasses } from "./utils";

const Card: FC<ICard> = memo(
  ({
    data,
    className,
    NavLink,
    variant = "default",
    isLoading = false,
    maxVisibleTags = 10,
    maxTitleLines = 2,
    maxDescriptionLines = 3,
    showBookmark = false,
    isBookmarked = false,
    showShare = false,
    onCardClick,
    onAuthorClick,
    onTagClick,
    onImageClick,
    onBookmark,
    actions,
    footerActions,
    onShare
  }) => {
    const cardId = useId();

    const {
      title,
      description,
      author,
      date,
      tags,
      pills,
      titleUrl,
      image,
      isRead,
      isFeatured
    } = data;

    const interactions = useCardInteractions({
      onCardClick,
      onAuthorClick,
      onTagClick,
      onImageClick,
      onBookmark,
      onShare,
      normalizedData: data,
      author
    });

    const tagVisibility = useTagVisibility({
      tags,
      maxVisibleTags
    });

    if (isLoading) {
      return <CardSkeleton className={className} variant={variant} />;
    }

    const cardClasses = classNames(
      "group flex flex-col justify-start border-2 border-border rounded-lg overflow-hidden transition-all duration-200 relative",
      "hover:shadow-md hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:border-primary/50",
      getVariantClasses(variant),
      {
        "cursor-pointer": onCardClick,
        "ring-2 ring-blue-500": isRead
      },
      className
    );

    return (
      <article
        className={cardClasses}
        role='article'
        aria-labelledby={`card-title-${cardId}`}
        aria-describedby={`card-description-${cardId}`}
        tabIndex={onCardClick ? 0 : -1}
        onClick={onCardClick ? interactions.handleCardClick : undefined}
        onKeyDown={onCardClick ? interactions.handleKeyDown : undefined}
      >
        <CardStatusIndicators isRead={isRead} isFeatured={isFeatured} />

        <CardActions
          showBookmark={showBookmark}
          isBookmarked={isBookmarked}
          showShare={showShare}
          onBookmark={interactions.handleBookmark}
          onShare={interactions.handleShare}
        />

        {actions && actions.length > 0 && (
          <div className='absolute top-3 right-3 z-20 flex gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:opacity-100 md:group-hover:opacity-100'>
            {actions
              .filter(a => a.show !== false)
              .map((action, idx) => (
                <button
                  key={action.label + idx}
                  onClick={e => {
                    e.stopPropagation();
                    action.onClick(e);
                  }}
                  className={classNames(
                    "bg-background/5 flex min-w-[75px] cursor-pointer items-center justify-center gap-1 rounded-sm border-2 py-1 text-xs font-medium transition-all duration-200 hover:shadow-sm hover:brightness-95",
                    {
                      "border-primary text-primary hover:bg-primary hover:text-background":
                        action.variant === "primary" || !action.variant,
                      "hover:text-background border-red-500 text-red-600 hover:bg-red-700":
                        action.variant === "danger",
                      "border-border/20 text-muted hover:bg-background/80":
                        action.variant === "outlined"
                    }
                  )}
                  type='button'
                >
                  <div className='flex items-center justify-center gap-1'>
                    {action.icon && (
                      <span className='h-4 w-4'>{action.icon}</span>
                    )}
                    <span className='text-center'>{action.label}</span>
                  </div>
                </button>
              ))}
          </div>
        )}

        <div className='flex flex-col'>
          {image && (
            <CardImage
              {...image}
              onImageClick={
                onImageClick ? interactions.handleImageClick : undefined
              }
              className='w-full'
            />
          )}

          <div
            className={classNames(
              "flex flex-1 flex-col justify-start p-6",
              (showBookmark || showShare) && !image && "pr-16"
            )}
          >
            <CardHeader
              cardId={cardId}
              title={title}
              titleUrl={titleUrl}
              maxTitleLines={maxTitleLines}
              NavLink={NavLink}
            />

            <CardAuthor
              author={author}
              date={date}
              onAuthorClick={interactions.handleAuthorClick}
              NavLink={NavLink}
            />

            <p
              id={`card-description-${cardId}`}
              className={classNames(
                "text-text/80 m-0 flex-1",
                getLineClampClass(maxDescriptionLines)
              )}
            >
              {description}
            </p>

            <CardPills pills={pills} />

            <CardTags
              visibleTags={tagVisibility.visibleTags}
              remainingTagsCount={tagVisibility.remainingTagsCount}
              showAllTags={tagVisibility.showAllTags}
              onTagClick={interactions.handleTagClick}
              onToggleTagsVisibility={tagVisibility.toggleTagsVisibility}
              NavLink={NavLink}
            />

            <CardFooterActions footerActions={footerActions} />
          </div>
        </div>
      </article>
    );
  },
  (prevProps, nextProps) => {
    return (
      JSON.stringify(prevProps.data) === JSON.stringify(nextProps.data) &&
      prevProps.isLoading === nextProps.isLoading &&
      prevProps.variant === nextProps.variant &&
      prevProps.className === nextProps.className &&
      prevProps.isBookmarked === nextProps.isBookmarked
    );
  }
);

Card.displayName = "Card";

export { Card };
