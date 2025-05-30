import classNames from "classnames";
import { FC, memo, useId } from "react";

import CardImage from "./CardImage";
import CardSkeleton from "./CardSkeleton";
import {
  CardActions,
  CardAuthor,
  CardHeader,
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
    onShare
  }) => {
    const cardId = useId();

    const {
      title,
      description,
      author,
      date,
      tags,
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
      "yl:group yl:flex yl:flex-col yl:justify-center yl:border yl:border-border yl:rounded-lg yl:overflow-hidden yl:transition-all yl:duration-200 yl:relative",
      "yl:hover:shadow-md yl:hover:-translate-y-1 yl:focus:outline-none yl:focus:ring-2 yl:focus:ring-primary yl:focus:ring-offset-2",
      getVariantClasses(variant),
      {
        "yl:cursor-pointer": onCardClick,
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
              "yl:p-6 yl:flex yl:flex-col yl:justify-start yl:flex-1",
              (showBookmark || showShare) && !image && "yl:pr-16"
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
                "yl:flex-1 yl:text-muted yl:m-0",
                getLineClampClass(maxDescriptionLines)
              )}
            >
              {description}
            </p>

            <CardTags
              visibleTags={tagVisibility.visibleTags}
              remainingTagsCount={tagVisibility.remainingTagsCount}
              showAllTags={tagVisibility.showAllTags}
              onTagClick={interactions.handleTagClick}
              onToggleTagsVisibility={tagVisibility.toggleTagsVisibility}
              NavLink={NavLink}
            />
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

export default Card;
