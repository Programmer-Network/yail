import classNames from "classnames";
import { FC } from "react";

import { IconArrowDown, IconArrowUp } from "Components/Icons";
import IconSpinner from "Components/Icons/IconSpinner";
import Spinner from "Components/Spinner";
import Tooltip from "Components/Tooltip";

import {
  IReactionsProps,
  ReactionTransitionState,
  ReactionType
} from "./types";

export * from "./types";

const Reactions: FC<IReactionsProps> = ({
  className,
  onReaction,
  reactionsCount,
  reactionType,
  reactionTransition,
  isNotReactableText,
  isReactable = true
}) => {
  const isLiking = reactionTransition === ReactionTransitionState.LIKING;
  const isDisliking = reactionTransition === ReactionTransitionState.DISLIKING;
  const hasLiked = reactionType === ReactionType.LIKE;
  const hasDisliked = reactionType === ReactionType.DISLIKE;

  const arrowUpClasses = !isReactable
    ? "cursor-not-allowed"
    : {
        "text-primary": hasLiked,
        "cursor-not-allowed": hasLiked,
        "cursor-pointer hover:text-primary": !hasLiked
      };

  const arrowDownClasses = !isReactable
    ? "cursor-not-allowed"
    : {
        "text-red-500 cursor-not-allowed": hasDisliked,
        "cursor-pointer hover:text-red-500": !hasDisliked
      };

  const handleReaction = (reactionType: ReactionType) => {
    if (isLiking || isDisliking || !isReactable) {
      return;
    }

    onReaction(reactionType);
  };

  return (
    <Tooltip id='reactions-tooltip' text={isNotReactableText || ""}>
      <div
        className={classNames({
          "flex items-center gap-8": !className
        })}
      >
        <div className='my-0 flex items-center justify-center gap-2 text-primary-text-color'>
          {isLiking ? (
            <IconSpinner className='w-5' data-testid='like-spinner' />
          ) : (
            <>
              <IconArrowUp
                data-testid='like-button'
                className={classNames("w-6", arrowUpClasses)}
                onClick={
                  !isDisliking && !hasLiked
                    ? () => handleReaction(ReactionType.LIKE)
                    : undefined
                }
              />
            </>
          )}
        </div>
        <span className='select-none text-primary-text-color'>
          {reactionsCount}
        </span>
        <div className='flex items-center justify-center gap-2 text-primary-text-color'>
          {isDisliking ? (
            <Spinner className='w-5' data-testid='dislike-spinner' />
          ) : (
            <>
              <IconArrowDown
                data-testid='dislike-button'
                className={classNames("w-6", arrowDownClasses)}
                onClick={
                  !isLiking && !hasDisliked
                    ? () => handleReaction(ReactionType.DISLIKE)
                    : undefined
                }
              />
            </>
          )}
        </div>
      </div>
    </Tooltip>
  );
};

export * from "./types";
export default Reactions;
