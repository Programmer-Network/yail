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
        "yl:border-border yl:flex yl:animate-pulse yl:flex-col yl:overflow-hidden yl:rounded-lg yl:border",

        className
      )}
    >
      <div
        className={classNames("yl:bg-muted yl:h-48 yl:w-full yl:animate-pulse")}
      />

      <div className='yl:flex-1 yl:p-6'>
        <div className='yl:bg-muted yl:mb-4 yl:h-6 yl:animate-pulse yl:rounded' />

        <div className='yl:mb-4 yl:flex yl:items-center yl:gap-2'>
          <div className='yl:bg-muted yl:h-6 yl:w-6 yl:animate-pulse yl:rounded-full' />
          <div className='yl:bg-muted yl:h-4 yl:w-24 yl:animate-pulse yl:rounded' />
          <div className='yl:bg-muted yl:h-1 yl:w-1 yl:animate-pulse yl:rounded-full' />
          <div className='yl:bg-muted yl:h-4 yl:w-20 yl:animate-pulse yl:rounded' />
        </div>

        <div className='yl:mb-4 yl:space-y-2'>
          <div className='yl:bg-muted yl:h-4 yl:animate-pulse yl:rounded' />
          <div className='yl:bg-muted yl:h-4 yl:w-3/4 yl:animate-pulse yl:rounded' />
        </div>
      </div>
    </div>
  );
};

export { CardSkeleton };
