import classNames from "classnames";
import { FC } from "react";

import { IconArrowDown, IconArrowUp } from "Components/Icons";
import IconSpinner from "Components/Icons/IconSpinner";
import Spinner from "Components/Spinner";

import { IReactionsProps } from "./types";

const Reactions: FC<IReactionsProps> = ({
  hasLiked,
  hasDisliked,
  likesCount,
  dislikesCount,
  onLike,
  onDislike,
  isLiking,
  isDisliking
}) => {
  return (
    <div className='flex gap-4 py-2 text-primary-text-color'>
      <div className='flex gap-8'>
        <div className='my-0 flex items-center justify-center gap-4'>
          {isLiking ? (
            <IconSpinner className='w-5' />
          ) : (
            <>
              <IconArrowUp
                className={classNames("w-6", {
                  "fill-primary-text-color": !hasLiked,
                  "cursor-not-allowed text-primary": hasLiked || isDisliking,
                  "cursor-pointer hover:text-primary": !hasLiked
                })}
                onClick={!isDisliking && !hasLiked ? onLike : undefined}
              />
              {likesCount}
            </>
          )}
        </div>
        <div className='flex items-center justify-center gap-4'>
          {isDisliking ? (
            <Spinner className='w-5' />
          ) : (
            <>
              <IconArrowDown
                className={classNames("w-6", {
                  "fill-primary-text-color": !hasDisliked,
                  "cursor-not-allowed text-rose-500": hasDisliked || isLiking,
                  "cursor-pointer hover:text-rose-500":
                    !hasDisliked && !isLiking
                })}
                onClick={!isLiking && !hasDisliked ? onDislike : undefined}
              />
              {dislikesCount}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reactions;
