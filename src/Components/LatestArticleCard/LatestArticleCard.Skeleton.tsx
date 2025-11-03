import classNames from "classnames";
import { FC } from "react";

import { ILatestArticleCardSkeleton } from "./LatestArticleCard.types";

export const LatestArticleCardSkeleton: FC<ILatestArticleCardSkeleton> = ({
  className
}) => {
  return (
    <article
      className={classNames(
        "border-border flex animate-pulse flex-col gap-2 rounded-lg border-2 p-3",
        className
      )}
      role='article'
      aria-busy='true'
      aria-label='Loading article'
    >
      <div className='bg-border/50 h-4 w-3/4 rounded' />
      <div className='bg-border/50 h-3 w-full rounded' />
      <div className='bg-border/50 h-3 w-5/6 rounded' />
      <div className='mt-1 flex items-center gap-2'>
        <div className='bg-border/50 h-3 w-24 rounded' />
        <div className='bg-border/50 h-1 w-1 rounded-full' />
        <div className='bg-border/50 h-3 w-20 rounded' />
      </div>
    </article>
  );
};
