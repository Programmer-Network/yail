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
        <div className='relative mx-auto shrink-0'>
          <div
            className={classNames(
              "bg-border rounded-full",
              getAvatarSize(size)
            )}
          />
        </div>

        {/* Name and Badge Skeleton */}
        <div className='-mt-2 flex flex-col items-center gap-1'>
          <div className='bg-border h-6 w-32 rounded' />
          {/* Badge skeleton */}
          <div className='bg-border h-5 w-16 rounded-full' />
        </div>

        {/* Username Skeleton */}
        <div className='-mt-2'>
          <div className='bg-border mx-auto h-4 w-20 rounded' />
        </div>

        {/* Role and Location Skeleton */}
        <div className='-mt-2 flex justify-center'>
          <div className='bg-border h-4 w-28 rounded' />
        </div>

        {/* Description Skeleton */}
        {about && (
          <div className='space-y-2'>
            <div className='bg-border h-4 w-full rounded' />
            <div className='bg-border mx-auto h-4 w-3/4 rounded' />
          </div>
        )}

        {/* Social Links Skeleton */}
        {showSocialLinks && (
          <div className='flex justify-center gap-2'>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className='bg-border h-4 w-4 rounded' />
            ))}
          </div>
        )}

        {/* Tags Skeleton */}
        {showTags && (
          <div className='flex flex-wrap justify-center gap-2'>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className='bg-border h-6 w-16 rounded-full' />
            ))}
          </div>
        )}

        {/* Actions Skeleton */}
        <div className='flex flex-wrap justify-center gap-2'>
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className='bg-border h-8 w-20 rounded' />
          ))}
        </div>
      </div>
    </div>
  );
};

export { PersonCardSkeleton };
