import classNames from "classnames";
import { FC } from "react";

import { IUpcomingEventCardSkeletonProps } from "./UpcomingEventCard.types";

const UpcomingEventCardSkeleton: FC<IUpcomingEventCardSkeletonProps> = ({
  className
}) => {
  return (
    <article
      className={classNames(
        "yl:border-border yl:flex yl:animate-pulse yl:gap-3 yl:overflow-hidden yl:rounded-lg yl:border yl:p-3",
        className
      )}
      role='status'
      aria-label='Loading event'
    >
      <div className='yl:bg-border/50 yl:flex yl:h-14 yl:w-14 yl:shrink-0 yl:rounded-lg' />

      <div className='yl:min-w-0 yl:flex-1 yl:space-y-2'>
        <div className='yl:bg-border/50 yl:h-4 yl:w-3/4 yl:rounded' />
        <div className='yl:bg-border/50 yl:h-3 yl:w-full yl:rounded' />
        <div className='yl:bg-border/50 yl:h-3 yl:w-5/6 yl:rounded' />
        <div className='yl:bg-border/50 yl:h-3 yl:w-1/2 yl:rounded' />
      </div>
    </article>
  );
};

UpcomingEventCardSkeleton.displayName = "UpcomingEventCardSkeleton";

export { UpcomingEventCardSkeleton };
