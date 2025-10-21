import classNames from "classnames";
import { FC } from "react";

import { IPersonCardSkeletonProps } from "./types";

const PersonCardSkeleton: FC<IPersonCardSkeletonProps> = ({
  size = "medium",
  className,
  showTags = true,
  showSocialLinks = true,
  about = true
}) => {
  const getSizeClasses = (size: string) => {
    const sizeClasses: Record<string, string> = {
      small: "p-4",
      medium: "p-6",
      large: "p-8"
    };
    return sizeClasses[size] || sizeClasses["medium"];
  };

  const getAvatarSize = (size: string) => {
    const avatarSizes: Record<string, string> = {
      small: "w-12 h-12",
      medium: "w-16 h-16",
      large: "w-20 h-20"
    };
    return avatarSizes[size] || avatarSizes["medium"];
  };

  const cardClasses = classNames(
    "animate-pulse",
    "bg-background border-2 border-border rounded-lg shadow-sm max-w-sm w-full mx-auto",
    getSizeClasses(size),
    className
  );

  return (
    <div className={cardClasses}>
      <div className='flex flex-col gap-4'>
        {/* Avatar Skeleton */}
        <div className='relative flex-shrink-0 mx-auto'>
          <div
            className={classNames(
              "bg-border rounded-full",
              getAvatarSize(size)
            )}
          />
        </div>

        {/* Name and Badge Skeleton */}
        <div className='flex flex-col items-center gap-1 -mt-2'>
          <div className='h-6 bg-border rounded w-32' />
          {/* Badge skeleton */}
          <div className='h-5 bg-border rounded-full w-16' />
        </div>

        {/* Username Skeleton */}
        <div className='-mt-2'>
          <div className='h-4 bg-border rounded w-20 mx-auto' />
        </div>

        {/* Role and Location Skeleton */}
        <div className='-mt-2 flex justify-center'>
          <div className='h-4 bg-border rounded w-28' />
        </div>

        {/* Description Skeleton */}
        {about && (
          <div className='space-y-2'>
            <div className='h-4 bg-border rounded w-full' />
            <div className='h-4 bg-border rounded w-3/4 mx-auto' />
          </div>
        )}

        {/* Social Links Skeleton */}
        {showSocialLinks && (
          <div className='flex gap-2 justify-center'>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className='w-4 h-4 bg-border rounded' />
            ))}
          </div>
        )}

        {/* Tags Skeleton */}
        {showTags && (
          <div className='flex flex-wrap gap-2 justify-center'>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className='h-6 bg-border rounded-full w-16' />
            ))}
          </div>
        )}

        {/* Actions Skeleton */}
        <div className='flex gap-2 justify-center flex-wrap'>
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className='h-8 bg-border rounded w-20' />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonCardSkeleton;
