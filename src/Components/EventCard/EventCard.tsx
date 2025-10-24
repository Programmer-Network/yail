import classNames from "classnames";
import { FC, memo, useCallback, useId } from "react";

import Avatar from "../Avatar";
import {
  CardActions,
  CardFooterActions,
  CardHeader,
  CardPills,
  CardTags
} from "../Card/Components";
import { useTagVisibility } from "../Card/Hooks";
import Icon from "../Icon";
import { EventCardImage } from "./Components";
import EventCardSkeleton from "./EventCard.Skeleton";
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
      "group flex flex-col border-2 border-border rounded-lg overflow-hidden transition-all duration-200 relative",
      "hover:shadow-md hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:border-primary/50",
      getStatusCardClasses(data.status),
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

        <div className='flex items-center gap-4 p-4'>
          <div className='border-border flex h-16 w-16 shrink-0 flex-col items-center justify-center gap-0.5 rounded-lg border'>
            <Icon
              iconName='CalendarOutline'
              className='text-primary/70 h-4 w-4'
            />
            <div className='text-primary text-xs leading-none font-semibold uppercase'>
              {new Date(dateAndTime).toLocaleDateString("en-US", {
                month: "short"
              })}
            </div>
            <div className='text-text text-lg leading-none font-bold'>
              {new Date(dateAndTime).getDate()}
            </div>
          </div>

          <div className='min-w-0 flex-1'>
            <CardPills pills={pills} />

            <CardHeader
              cardId={`event-title-${cardId}`}
              title={title}
              titleUrl={titleUrl}
              maxTitleLines={maxTitleLines}
              NavLink={NavLink}
            />

            <div className='mb-2 flex items-center gap-2'>
              {author && (
                <div className='flex items-center gap-2'>
                  <Avatar src={author.avatarUrl} size={20} />
                  {author.url ? (
                    <NavLink
                      to={author.url}
                      onClick={handleAuthorClick}
                      className='text-muted hover:text-primary text-sm transition-colors hover:underline'
                    >
                      {author.name}
                    </NavLink>
                  ) : (
                    <span className='text-muted text-sm'>{author.name}</span>
                  )}
                </div>
              )}
              <span className='text-muted text-xs'>•</span>
              <span className='text-muted text-sm'>
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
                  <span className='text-muted text-xs'>•</span>
                  <span className='text-muted text-sm'>Online</span>
                </>
              )}
              {locationType === "onsite" && location && (
                <>
                  <span className='text-muted text-xs'>•</span>
                  <span className='text-muted text-sm'>{location}</span>
                </>
              )}
              {locationType === "hybrid" && location && (
                <>
                  <span className='text-muted text-xs'>•</span>
                  <span className='text-muted text-sm'>{location}</span>
                </>
              )}
            </div>

            <p
              id={`event-description-${cardId}`}
              className={classNames(
                "text-text/80 mb-2 text-sm",
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

export default EventCard;
