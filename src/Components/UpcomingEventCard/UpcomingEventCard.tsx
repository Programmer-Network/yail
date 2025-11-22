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
      "yl:group yl:flex yl:gap-3 yl:border-2 yl:border-border yl:rounded-lg yl:p-3 yl:overflow-hidden yl:transition-all yl:duration-200",
      "yl:hover:border-primary/30 yl:focus:outline-none yl:focus:ring-2 yl:focus:ring-primary yl:focus:ring-offset-2",
      {
        "yl:cursor-pointer": onCardClick
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
        <div className='yl:border-border/50 yl:flex yl:h-12 yl:w-12 yl:shrink-0 yl:flex-col yl:items-center yl:justify-center yl:gap-0.5 yl:rounded yl:border'>
          <div className='yl:text-primary yl:text-[10px] yl:leading-none yl:font-semibold yl:uppercase'>
            {eventDate.toLocaleDateString("en-US", {
              month: "short"
            })}
          </div>
          <div className='yl:text-text yl:text-lg yl:leading-none yl:font-bold'>
            {eventDate.getDate()}
          </div>
        </div>

        <div className='yl:min-w-0 yl:flex-1'>
          <NavLink
            to={eventURL}
            onClick={handleCardClick}
            className='yl:hover:text-primary yl:text-text yl:mb-1 yl:text-sm yl:font-semibold yl:transition-colors yl:line-clamp-1'
            id={`upcoming-event-title-${cardId}`}
          >
            {title}
          </NavLink>

          <p
            id={`upcoming-event-description-${cardId}`}
            className='yl:text-text/70 yl:mb-1.5 yl:text-xs yl:line-clamp-1'
          >
            {summary}
          </p>

          <div className='yl:text-muted yl:text-xs'>
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
