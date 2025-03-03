import classNames from "classnames";
import { FC } from "react";

import Icon from "Components/Icon";
import Spinner from "Components/Spinner";
import Tooltip from "Components/Tooltip";

import {
  IReactionsProps,
  ReactionTransitionState,
  ReactionType
} from "./types";

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
    ? "yl:cursor-not-allowed"
    : {
        "yl:text-primary yl:cursor-default": hasLiked,
        "yl:cursor-pointer yl:hover:text-primary": !hasLiked
      };

  const arrowDownClasses = !isReactable
    ? "yl:cursor-not-allowed"
    : {
        "yl:text-error yl:cursor-not-allowed": hasDisliked,
        "yl:cursor-pointer yl:hover:text-error": !hasDisliked
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
          "yl:flex yl:items-center yl:gap-8": !className
        })}
      >
        <div className='yl:my-0 yl:flex yl:items-center yl:justify-center yl:gap-2 yl:text-text'>
          {isLiking ? (
            <Icon
              iconName='IconSpinner'
              className='yl:w-5'
              data-testid='like-spinner'
            />
          ) : (
            <>
              <Icon
                iconName='IconArrowUp'
                data-testid='like-button'
                className={classNames("yl:w-6", arrowUpClasses)}
                onClick={
                  !isDisliking && !hasLiked
                    ? () => handleReaction(ReactionType.LIKE)
                    : undefined
                }
              />
            </>
          )}
        </div>
        <span className='yl:select-none yl:text-text'>{reactionsCount}</span>
        <div className='yl:flex yl:items-center yl:justify-center yl:gap-2 yl:text-text'>
          {isDisliking ? (
            <Spinner className='yl:w-5' data-testid='dislike-spinner' />
          ) : (
            <>
              <Icon
                iconName='IconArrowDown'
                data-testid='dislike-button'
                className={classNames("yl:w-6", arrowDownClasses)}
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

export default Reactions;
