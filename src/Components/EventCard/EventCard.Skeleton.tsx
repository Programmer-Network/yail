import classNames from "classnames";
import { FC } from "react";

import { IEventCardSkeletonProps } from "./EventCard.types";

const EventCardSkeleton: FC<IEventCardSkeletonProps> = ({ className }) => {
  return (
    <div
      className={classNames(
        "border-border animate-pulse overflow-hidden rounded-lg border",
        "flex items-center gap-4 p-4",
        className
      )}
    >
      {/* Date Badge Skeleton */}
      <div className='bg-muted h-16 w-16 shrink-0 rounded-lg' />

      {/* Main Content Skeleton */}
      <div className='min-w-0 flex-1 space-y-2'>
        {/* Event Type Pill Skeleton */}
        <div className='bg-muted h-5 w-24 rounded-full' />

        {/* Title Skeleton */}
        <div className='bg-muted h-6 w-3/4 rounded' />

        {/* Author/Date/Location Skeleton */}
        <div className='flex items-center gap-2'>
          <div className='bg-muted h-5 w-5 rounded-full' />
          <div className='bg-muted h-4 w-20 rounded' />
          <div className='bg-muted h-1 w-1 rounded-full' />
          <div className='bg-muted h-4 w-32 rounded' />
          <div className='bg-muted h-1 w-1 rounded-full' />
          <div className='bg-muted h-4 w-16 rounded' />
        </div>

        {/* Description Skeleton */}
        <div className='space-y-1'>
          <div className='bg-muted h-4 w-full rounded' />
          <div className='bg-muted h-4 w-3/4 rounded' />
        </div>

        {/* Tags Skeleton */}
        <div className='flex gap-2'>
          <div className='bg-muted h-5 w-12 rounded' />
          <div className='bg-muted h-5 w-16 rounded' />
          <div className='bg-muted h-5 w-14 rounded' />
        </div>
      </div>
    </div>
  );
};

export { EventCardSkeleton };
