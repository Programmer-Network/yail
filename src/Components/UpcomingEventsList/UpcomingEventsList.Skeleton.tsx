import classNames from "classnames";
import { FC } from "react";

import { UpcomingEventCardSkeleton } from "../UpcomingEventCard";
import { IUpcomingEventsListSkeletonProps } from "./UpcomingEventsList.types";

const UpcomingEventsListSkeleton: FC<IUpcomingEventsListSkeletonProps> = ({
  className,
  count = 5
}) => {
  return (
    <section
      className={classNames("space-y-4", className)}
      role='status'
      aria-label='Loading events'
    >
      <div className='flex items-center justify-between'>
        <div className='bg-border/50 h-6 w-40 animate-pulse rounded' />
        <div className='bg-border/50 h-5 w-16 animate-pulse rounded' />
      </div>

      <div className='space-y-3'>
        {Array.from({ length: count }).map((_, index) => (
          <UpcomingEventCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
};

UpcomingEventsListSkeleton.displayName = "UpcomingEventsListSkeleton";

export { UpcomingEventsListSkeleton };
