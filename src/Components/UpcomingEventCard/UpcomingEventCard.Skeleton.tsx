import classNames from "classnames";
import { FC } from "react";

import { IUpcomingEventCardSkeletonProps } from "./UpcomingEventCard.types";

const UpcomingEventCardSkeleton: FC<IUpcomingEventCardSkeletonProps> = ({
  className
}) => {
  return (
    <article
      className={classNames(
        "border-border flex animate-pulse gap-3 overflow-hidden rounded-lg border-2 p-3",
        className
      )}
      role='status'
      aria-label='Loading event'
    >
      <div className='bg-border/50 flex h-14 w-14 shrink-0 rounded-lg' />

      <div className='min-w-0 flex-1 space-y-2'>
        <div className='bg-border/50 h-4 w-3/4 rounded' />
        <div className='bg-border/50 h-3 w-full rounded' />
        <div className='bg-border/50 h-3 w-5/6 rounded' />
        <div className='bg-border/50 h-3 w-1/2 rounded' />
      </div>
    </article>
  );
};

UpcomingEventCardSkeleton.displayName = "UpcomingEventCardSkeleton";

export { UpcomingEventCardSkeleton };
