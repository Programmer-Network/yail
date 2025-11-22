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
      className={classNames("yl:space-y-4", className)}
      role='status'
      aria-label='Loading events'
    >
      <div className='yl:flex yl:items-center yl:justify-between'>
        <div className='yl:bg-border/50 yl:h-6 yl:w-40 yl:animate-pulse yl:rounded' />
        <div className='yl:bg-border/50 yl:h-5 yl:w-16 yl:animate-pulse yl:rounded' />
      </div>

      <div className='yl:space-y-3'>
        {Array.from({ length: count }).map((_, index) => (
          <UpcomingEventCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
};

UpcomingEventsListSkeleton.displayName = "UpcomingEventsListSkeleton";

export { UpcomingEventsListSkeleton };
