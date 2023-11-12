import classNames from "classnames";
import React, { FC } from "react";

import {
  IconArrowDown,
  IconArrowUp,
  IconComment,
  IconShare
} from "Components/Icons";
import IconSpinner from "Components/Icons/IconSpinner";
import ShareButton from "Components/ShareButton";
import Spinner from "Components/Spinner";

import { IReactionsProps, ShareType } from "./types";

const Reactions: FC<IReactionsProps> = ({
  hasLiked,
  hasDisliked,
  likesCount,
  dislikesCount,
  onLike,
  onDislike,
  onShared,
  commentCount,
  shareUrl,
  isLiking,
  isDisliking
}) => {
  return (
    <div className='flex gap-4 py-2 text-primary-text-color'>
      <div className='flex gap-4'>
        {shareUrl && (
          <div className='mt-[1px] flex gap-1'>
            <ShareButton
              data={{ url: shareUrl }}
              onShareLinkDialogOpened={() =>
                onShared ? onShared(ShareType.SHARED) : undefined
              }
              onCopied={() =>
                onShared ? onShared(ShareType.COPIED_TO_CLIPBOARD) : undefined
              }
              onError={() => console.log("Share error")}
            >
              {onClick => (
                <IconShare
                  className='w-5 cursor-pointer transition-colors hover:fill-primary'
                  onClick={onClick}
                />
              )}
            </ShareButton>
          </div>
        )}
        <div className='my-0 flex items-center justify-center gap-1'>
          {isLiking ? (
            <IconSpinner className='w-5' />
          ) : (
            <>
              <IconArrowUp
                className={classNames("w-12", {
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
        <div className='flex items-center justify-center gap-1'>
          {isDisliking ? (
            <Spinner className='w-5' />
          ) : (
            <>
              <IconArrowDown
                className={classNames("w-12", {
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
        <div className='flex items-center justify-between gap-1'>
          <IconComment className='w-6 fill-primary-text-color' />
          {commentCount}
        </div>
      </div>
    </div>
  );
};

export default Reactions;
