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
      small: "yl:p-4",
      medium: "yl:p-6",
      large: "yl:p-8"
    };
    return sizeClasses[size] || sizeClasses["medium"];
  };

  const getAvatarSize = (size: string) => {
    const avatarSizes: Record<string, string> = {
      small: "yl:w-12 yl:h-12",
      medium: "yl:w-16 yl:h-16",
      large: "yl:w-20 yl:h-20"
    };
    return avatarSizes[size] || avatarSizes["medium"];
  };

  const cardClasses = classNames(
    "yl:animate-pulse",
    "yl:bg-background yl:border-2 yl:border-border yl:rounded-lg yl:shadow-sm yl:max-w-sm yl:w-full yl:mx-auto",
    getSizeClasses(size),
    className
  );

  return (
    <div className={cardClasses}>
      <div className='yl:flex yl:flex-col yl:gap-4'>
        {/* Avatar Skeleton */}
        <div className='yl:relative yl:flex-shrink-0 yl:mx-auto'>
          <div
            className={classNames(
              "yl:bg-border yl:rounded-full",
              getAvatarSize(size)
            )}
          />
        </div>

        {/* Name and Badge Skeleton */}
        <div className='yl:flex yl:flex-col yl:items-center yl:gap-1 yl:-mt-2'>
          <div className='yl:h-6 yl:bg-border yl:rounded yl:w-32' />
          {/* Badge skeleton */}
          <div className='yl:h-5 yl:bg-border yl:rounded-full yl:w-16' />
        </div>

        {/* Username Skeleton */}
        <div className='yl:-mt-2'>
          <div className='yl:h-4 yl:bg-border yl:rounded yl:w-20 yl:mx-auto' />
        </div>

        {/* Role and Location Skeleton */}
        <div className='yl:-mt-2 yl:flex yl:justify-center'>
          <div className='yl:h-4 yl:bg-border yl:rounded yl:w-28' />
        </div>

        {/* Description Skeleton */}
        {about && (
          <div className='yl:space-y-2'>
            <div className='yl:h-4 yl:bg-border yl:rounded yl:w-full' />
            <div className='yl:h-4 yl:bg-border yl:rounded yl:w-3/4 yl:mx-auto' />
          </div>
        )}

        {/* Social Links Skeleton */}
        {showSocialLinks && (
          <div className='yl:flex yl:gap-2 yl:justify-center'>
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className='yl:w-4 yl:h-4 yl:bg-border yl:rounded'
              />
            ))}
          </div>
        )}

        {/* Tags Skeleton */}
        {showTags && (
          <div className='yl:flex yl:flex-wrap yl:gap-2 yl:justify-center'>
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className='yl:h-6 yl:bg-border yl:rounded-full yl:w-16'
              />
            ))}
          </div>
        )}

        {/* Actions Skeleton */}
        <div className='yl:flex yl:gap-2 yl:justify-center yl:flex-wrap'>
          {Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index}
              className='yl:h-8 yl:bg-border yl:rounded yl:w-20'
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonCardSkeleton;
