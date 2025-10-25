import classNames from "classnames";
import { FC } from "react";

interface ICardSkeleton {
  className?: string;
  variant?: "default" | "compact" | "featured" | "minimal";
}

const CardSkeleton: FC<ICardSkeleton> = ({ className }) => {
  return (
    <div
      className={classNames(
        "border-border flex animate-pulse flex-col overflow-hidden rounded-lg border",

        className
      )}
    >
      <div className={classNames("bg-muted h-48 w-full animate-pulse")} />

      <div className='flex-1 p-6'>
        <div className='bg-muted mb-4 h-6 animate-pulse rounded' />

        <div className='mb-4 flex items-center gap-2'>
          <div className='bg-muted h-6 w-6 animate-pulse rounded-full' />
          <div className='bg-muted h-4 w-24 animate-pulse rounded' />
          <div className='bg-muted h-1 w-1 animate-pulse rounded-full' />
          <div className='bg-muted h-4 w-20 animate-pulse rounded' />
        </div>

        <div className='mb-4 space-y-2'>
          <div className='bg-muted h-4 animate-pulse rounded' />
          <div className='bg-muted h-4 w-3/4 animate-pulse rounded' />
        </div>
      </div>
    </div>
  );
};

export { CardSkeleton };
