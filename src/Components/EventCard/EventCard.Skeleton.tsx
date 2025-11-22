import classNames from "classnames";
import { FC } from "react";

import { IEventCardSkeletonProps } from "./EventCard.types";

const EventCardSkeleton: FC<IEventCardSkeletonProps> = ({ className }) => {
  return (
    <div
      className={classNames(
        "yl:border-border yl:animate-pulse yl:overflow-hidden yl:rounded-lg yl:border",
        "yl:flex yl:items-center yl:gap-4 yl:p-4",
        className
      )}
    >
      {/* Date Badge Skeleton */}
      <div className='yl:bg-muted yl:h-16 yl:w-16 yl:shrink-0 yl:rounded-lg' />

      {/* Main Content Skeleton */}
      <div className='yl:min-w-0 yl:flex-1 yl:space-y-2'>
        {/* Event Type Pill Skeleton */}
        <div className='yl:bg-muted yl:h-5 yl:w-24 yl:rounded-full' />

        {/* Title Skeleton */}
        <div className='yl:bg-muted yl:h-6 yl:w-3/4 yl:rounded' />

        {/* Author/Date/Location Skeleton */}
        <div className='yl:flex yl:items-center yl:gap-2'>
          <div className='yl:bg-muted yl:h-5 yl:w-5 yl:rounded-full' />
          <div className='yl:bg-muted yl:h-4 yl:w-20 yl:rounded' />
          <div className='yl:bg-muted yl:h-1 yl:w-1 yl:rounded-full' />
          <div className='yl:bg-muted yl:h-4 yl:w-32 yl:rounded' />
          <div className='yl:bg-muted yl:h-1 yl:w-1 yl:rounded-full' />
          <div className='yl:bg-muted yl:h-4 yl:w-16 yl:rounded' />
        </div>

        {/* Description Skeleton */}
        <div className='yl:space-y-1'>
          <div className='yl:bg-muted yl:h-4 yl:w-full yl:rounded' />
          <div className='yl:bg-muted yl:h-4 yl:w-3/4 yl:rounded' />
        </div>

        {/* Tags Skeleton */}
        <div className='yl:flex yl:gap-2'>
          <div className='yl:bg-muted yl:h-5 yl:w-12 yl:rounded' />
          <div className='yl:bg-muted yl:h-5 yl:w-16 yl:rounded' />
          <div className='yl:bg-muted yl:h-5 yl:w-14 yl:rounded' />
        </div>
      </div>
    </div>
  );
};

export { EventCardSkeleton };
