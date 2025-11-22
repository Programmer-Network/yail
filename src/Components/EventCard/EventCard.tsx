import classNames from "classnames";
import { FC, memo, useCallback, useId } from "react";

import { Avatar } from "../Avatar";
import {
  CardActions,
  CardFooterActions,
  CardHeader,
  CardPills,
  CardTags
} from "../Card/Components";
import { useTagVisibility } from "../Card/Hooks";
import { Icon } from "../Icon";
import { EventCardImage } from "./Components";
import { EventCardSkeleton } from "./EventCard.Skeleton";
import { IEventCard } from "./EventCard.types";
import { getStatusCardClasses } from "./EventCard.utils";

const EventCard: FC<IEventCard> = memo(
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
    onBookmark,
    onShare,
    footerActions
  }) => {
    const cardId = useId();

    const {
      title,
      description,
      author,
      tags,
      pills,
      titleUrl,
      isRead,
      image,
      dateAndTime,
      locationType,
      location
    } = data;

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

    const handleAuthorClick = useCallback(
      (e: React.MouseEvent) => {
        if (!onAuthorClick || !author) {
          return;
        }

        e.preventDefault();
        e.stopPropagation();
        onAuthorClick(author);
      },
      [onAuthorClick, author]
    );

    const handleTagClick = useCallback(
      (tag: { name: string; url: string }) => (e: React.MouseEvent) => {
        if (!onTagClick) {
          return;
        }

        e.preventDefault();
        e.stopPropagation();
        onTagClick(tag);
      },
      [onTagClick]
    );

    const handleBookmark = useCallback(
      (e: React.MouseEvent) => {
        if (!onBookmark) {
          return;
        }

        e.preventDefault();
        e.stopPropagation();
        onBookmark(data);
      },
      [onBookmark, data]
    );

    const handleShare = useCallback(
      (e: React.MouseEvent) => {
        if (!onShare) {
          return;
        }

        e.preventDefault();
        e.stopPropagation();
        onShare(data);
      },
      [onShare, data]
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

    const tagVisibility = useTagVisibility({
      tags,
      maxVisibleTags
    });

    if (isLoading) {
      return <EventCardSkeleton className={className} variant={variant} />;
    }

    const cardClasses = classNames(
      "group yl:flex yl:flex-col yl:border-2 yl:border-border yl:rounded-lg yl:overflow-hidden yl:transition-all yl:duration-200 yl:relative",
      "yl:hover:shadow-md yl:hover:-translate-y-1 yl:focus:outline-none yl:focus:ring-2 yl:focus:ring-primary yl:focus:ring-offset-2 yl:hover:border-primary/50",
      getStatusCardClasses(data.status),
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
        aria-labelledby={`event-title-${cardId}`}
        aria-describedby={`event-description-${cardId}`}
        tabIndex={onCardClick ? 0 : -1}
        onClick={onCardClick ? handleCardClick : undefined}
        onKeyDown={onCardClick ? handleKeyDown : undefined}
      >
        <CardActions
          showBookmark={showBookmark}
          isBookmarked={isBookmarked}
          showShare={showShare}
          onBookmark={handleBookmark}
          onShare={handleShare}
        />

        {image && (
          <EventCardImage
            src={image.src}
            alt={image.alt}
            lazy={image.lazy !== false}
          />
        )}

        <div className='yl:flex yl:items-center yl:gap-4 yl:p-4'>
          <div className='yl:border-border yl:flex yl:h-16 yl:w-16 yl:shrink-0 yl:flex-col yl:items-center yl:justify-center yl:gap-0.5 yl:rounded-lg yl:border'>
            <Icon
              iconName='CalendarOutline'
              className='yl:text-primary/70 yl:h-4 yl:w-4'
            />
            <div className='yl:text-primary yl:text-xs yl:leading-none yl:font-semibold yl:uppercase'>
              {new Date(dateAndTime).toLocaleDateString("en-US", {
                month: "short"
              })}
            </div>
            <div className='yl:text-text yl:text-lg yl:leading-none yl:font-bold'>
              {new Date(dateAndTime).getDate()}
            </div>
          </div>

          <div className='yl:min-w-0 yl:flex-1'>
            <CardPills pills={pills} />

            <CardHeader
              cardId={`event-title-${cardId}`}
              title={title}
              titleUrl={titleUrl}
              maxTitleLines={maxTitleLines}
              NavLink={NavLink}
            />

            <div className='yl:mb-2 yl:flex yl:items-center yl:gap-2'>
              {author && (
                <div className='yl:flex yl:items-center yl:gap-2'>
                  <Avatar src={author.avatarUrl} size={20} />
                  {author.url ? (
                    <NavLink
                      to={author.url}
                      onClick={handleAuthorClick}
                      className='yl:text-muted yl:hover:text-primary yl:text-sm yl:transition-colors yl:hover:underline'
                    >
                      {author.name}
                    </NavLink>
                  ) : (
                    <span className='yl:text-muted yl:text-sm'>
                      {author.name}
                    </span>
                  )}
                </div>
              )}
              <span className='yl:text-muted yl:text-xs'>•</span>
              <span className='yl:text-muted yl:text-sm'>
                {new Date(dateAndTime).toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit"
                })}
              </span>
              {locationType === "remote" && (
                <>
                  <span className='yl:text-muted yl:text-xs'>•</span>
                  <span className='yl:text-muted yl:text-sm'>Online</span>
                </>
              )}
              {locationType === "onsite" && location && (
                <>
                  <span className='yl:text-muted yl:text-xs'>•</span>
                  <span className='yl:text-muted yl:text-sm'>{location}</span>
                </>
              )}
              {locationType === "hybrid" && location && (
                <>
                  <span className='yl:text-muted yl:text-xs'>•</span>
                  <span className='yl:text-muted yl:text-sm'>{location}</span>
                </>
              )}
            </div>

            <p
              id={`event-description-${cardId}`}
              className={classNames(
                "yl:text-text/80 yl:mb-2 yl:text-sm",
                `line-clamp-${maxDescriptionLines}`
              )}
            >
              {description}
            </p>

            <CardTags
              visibleTags={tagVisibility.visibleTags}
              remainingTagsCount={tagVisibility.remainingTagsCount}
              showAllTags={tagVisibility.showAllTags}
              onTagClick={handleTagClick}
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

EventCard.displayName = "EventCard";

export { EventCard };
