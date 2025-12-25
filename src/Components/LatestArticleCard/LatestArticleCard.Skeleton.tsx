import classNames from "classnames";
import { FC } from "react";

import { ILatestArticleCardSkeleton } from "./LatestArticleCard.types";

export const LatestArticleCardSkeleton: FC<ILatestArticleCardSkeleton> = ({
  className
}) => {
  return (
    <article
      className={classNames(
        "yl:border-border yl:flex yl:animate-pulse yl:flex-col yl:gap-2 yl:rounded-lg yl:border yl:p-3",
        className
      )}
      role='article'
      aria-busy='true'
      aria-label='Loading article'
    >
      <div className='yl:bg-border/50 yl:h-4 yl:w-3/4 yl:rounded' />
      <div className='yl:bg-border/50 yl:h-3 yl:w-full yl:rounded' />
      <div className='yl:bg-border/50 yl:h-3 yl:w-5/6 yl:rounded' />
      <div className='yl:mt-1 yl:flex yl:items-center yl:gap-2'>
        <div className='yl:bg-border/50 yl:h-3 yl:w-24 yl:rounded' />
        <div className='yl:bg-border/50 yl:h-1 yl:w-1 yl:rounded-full' />
        <div className='yl:bg-border/50 yl:h-3 yl:w-20 yl:rounded' />
      </div>
    </article>
  );
};
