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
        "yl:animate-pulse yl:border yl:border-border yl:rounded-lg yl:overflow-hidden yl:flex yl:flex-col",

        className
      )}
    >
      <div
        className={classNames("yl:bg-muted yl:animate-pulse yl:w-full yl:h-48")}
      />

      <div className='yl:p-6 yl:flex-1'>
        <div className='yl:h-6 yl:bg-muted yl:rounded yl:mb-4 yl:animate-pulse' />

        <div className='yl:flex yl:items-center yl:gap-2 yl:mb-4'>
          <div className='yl:w-6 yl:h-6 yl:bg-muted yl:rounded-full yl:animate-pulse' />
          <div className='yl:h-4 yl:bg-muted yl:rounded yl:w-24 yl:animate-pulse' />
          <div className='yl:w-1 yl:h-1 yl:bg-muted yl:rounded-full yl:animate-pulse' />
          <div className='yl:h-4 yl:bg-muted yl:rounded yl:w-20 yl:animate-pulse' />
        </div>

        <div className='yl:space-y-2 yl:mb-4'>
          <div className='yl:h-4 yl:bg-muted yl:rounded yl:animate-pulse' />
          <div className='yl:h-4 yl:bg-muted yl:rounded yl:w-3/4 yl:animate-pulse' />
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
