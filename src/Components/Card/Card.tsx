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
      "group yl:flex yl:flex-col yl:justify-start yl:border yl:border-border yl:rounded-lg yl:overflow-hidden yl:transition-all yl:duration-200 yl:relative",
      "yl:hover:shadow-md yl:hover:-translate-y-1 yl:focus:outline-none yl:focus:ring-2 yl:focus:ring-primary yl:focus:ring-offset-2 yl:hover:border-primary/50",
      getVariantClasses(variant),
      {
        "cursor-pointer": onCardClick,
        "yl:ring-2 yl:ring-blue-500": isRead
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
          <div className='yl:absolute yl:top-3 yl:right-3 yl:z-20 yl:flex yl:gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
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
                    "yl:flex yl:min-w-[75px] yl:cursor-pointer yl:items-center yl:justify-center yl:gap-1 yl:rounded-sm yl:py-1 yl:px-2 yl:text-xs yl:font-medium yl:transition-all yl:duration-200 yl:ease-out yl:shadow-lg yl:backdrop-blur-sm",
                    {
                      "yl:bg-primary yl:text-background yl:hover:bg-primary/80 yl:hover:shadow-xl":
                        action.variant === "primary" || !action.variant,
                      "yl:bg-red-500 yl:text-background yl:hover:bg-red-600 yl:hover:shadow-xl":
                        action.variant === "danger",
                      "yl:bg-background/80 yl:text-text yl:border yl:border-border/20 yl:hover:bg-background yl:hover:shadow-xl yl:hover:border-border/40":
                        action.variant === "outlined"
                    }
                  )}
                  type='button'
                >
                  <div className='yl:flex yl:items-center yl:justify-center yl:gap-1'>
                    {action.icon && (
                      <span className='yl:h-4 yl:w-4'>{action.icon}</span>
                    )}
                    <span className='yl:text-center'>{action.label}</span>
                  </div>
                </button>
              ))}
          </div>
        )}

        <div className='yl:flex yl:flex-col'>
          {image && (
            <CardImage
              {...image}
              onImageClick={
                onImageClick ? interactions.handleImageClick : undefined
              }
              className='yl:w-full'
            />
          )}

          <div
            className={classNames(
              "yl:flex yl:flex-1 yl:flex-col yl:justify-start yl:p-6",
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
                "yl:text-text/80 yl:m-0 yl:flex-1",
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
