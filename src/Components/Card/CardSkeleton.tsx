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
        "animate-pulse border border-border rounded-lg overflow-hidden flex flex-col",

        className
      )}
    >
      <div className={classNames("bg-muted animate-pulse w-full h-48")} />

      <div className='p-6 flex-1'>
        <div className='h-6 bg-muted rounded mb-4 animate-pulse' />

        <div className='flex items-center gap-2 mb-4'>
          <div className='w-6 h-6 bg-muted rounded-full animate-pulse' />
          <div className='h-4 bg-muted rounded w-24 animate-pulse' />
          <div className='w-1 h-1 bg-muted rounded-full animate-pulse' />
          <div className='h-4 bg-muted rounded w-20 animate-pulse' />
        </div>

        <div className='space-y-2 mb-4'>
          <div className='h-4 bg-muted rounded animate-pulse' />
          <div className='h-4 bg-muted rounded w-3/4 animate-pulse' />
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
