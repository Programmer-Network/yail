import classNames from "classnames";
import { FC, memo, useCallback, useId } from "react";

import { UpcomingEventCardSkeleton } from "./UpcomingEventCard.Skeleton";
import { IUpcomingEventCard } from "./UpcomingEventCard.types";

const UpcomingEventCard: FC<IUpcomingEventCard> = memo(
  ({ data, className, NavLink, isLoading = false, onCardClick }) => {
    const cardId = useId();

    const { title, eventURL, dateAndTime, summary } = data;

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
      return <UpcomingEventCardSkeleton className={className} />;
    }

    const eventDate = new Date(dateAndTime);

    const cardClasses = classNames(
      "group flex gap-3 border-2 border-border rounded-lg p-3 overflow-hidden transition-all duration-200",
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
        aria-labelledby={`upcoming-event-title-${cardId}`}
        aria-describedby={`upcoming-event-description-${cardId}`}
        tabIndex={onCardClick ? 0 : -1}
        onClick={onCardClick ? handleCardClick : undefined}
        onKeyDown={onCardClick ? handleKeyDown : undefined}
      >
        <div className='border-border/50 flex h-12 w-12 shrink-0 flex-col items-center justify-center gap-0.5 rounded border'>
          <div className='text-primary text-[10px] leading-none font-semibold uppercase'>
            {eventDate.toLocaleDateString("en-US", {
              month: "short"
            })}
          </div>
          <div className='text-text text-lg leading-none font-bold'>
            {eventDate.getDate()}
          </div>
        </div>

        <div className='min-w-0 flex-1'>
          <NavLink
            to={eventURL}
            onClick={handleCardClick}
            className='hover:text-primary text-text mb-1 line-clamp-1 text-sm font-semibold transition-colors'
            id={`upcoming-event-title-${cardId}`}
          >
            {title}
          </NavLink>

          <p
            id={`upcoming-event-description-${cardId}`}
            className='text-text/70 mb-1.5 line-clamp-1 text-xs'
          >
            {summary}
          </p>

          <div className='text-muted text-xs'>
            {eventDate.toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit"
            })}
          </div>
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

UpcomingEventCard.displayName = "UpcomingEventCard";

export { UpcomingEventCard };
