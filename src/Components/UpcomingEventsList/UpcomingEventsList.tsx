import classNames from "classnames";
import { FC, useCallback } from "react";

import { Anchor, H6 } from "../Typography";
import { UpcomingEventCard } from "../UpcomingEventCard";
import { UpcomingEventsListSkeleton } from "./UpcomingEventsList.Skeleton";
import { IUpcomingEventsList } from "./UpcomingEventsList.types";

const UpcomingEventsList: FC<IUpcomingEventsList> = ({
  events,
  NavLink,
  title = "Upcoming Events",
  isLoading = false,
  emptyMessage = "No upcoming events",
  maxEvents = 5,
  className,
  onEventClick,
  onViewAllClick,
  viewAllUrl
}) => {
  const handleViewAllClick = useCallback(
    (e: React.MouseEvent) => {
      if (!onViewAllClick) {
        return;
      }

      e.preventDefault();
      onViewAllClick();
    },
    [onViewAllClick]
  );

  if (isLoading) {
    return (
      <UpcomingEventsListSkeleton className={className} count={maxEvents} />
    );
  }

  const displayEvents = events.slice(0, maxEvents);

  return (
    <section className={classNames("yl:space-y-4", className)}>
      {title && (
        <div className='yl:flex yl:items-center yl:justify-between'>
          <H6>{title}</H6>
          {viewAllUrl && (
            <Anchor onClick={onViewAllClick ? handleViewAllClick : undefined}>
              View All
            </Anchor>
          )}
        </div>
      )}

      {displayEvents.length === 0 ? (
        <div className='yl:text-muted yl:border-border yl:rounded-lg yl:border-2 yl:p-8 yl:text-center yl:text-sm'>
          {emptyMessage}
        </div>
      ) : (
        <div className='yl:space-y-3'>
          {displayEvents.map((event, index) => (
            <UpcomingEventCard
              key={`${event.eventURL}-${index}`}
              data={event}
              NavLink={NavLink}
              onCardClick={onEventClick}
            />
          ))}
        </div>
      )}
    </section>
  );
};

UpcomingEventsList.displayName = "UpcomingEventsList";

export { UpcomingEventsList };
