import classNames from "classnames";
import { FC } from "react";

import { useMobile } from "../../Hooks/useMediaQuery";
import { Icon } from "../Icon";
import { Tooltip } from "../Tooltip";
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
  const isMobile = useMobile();
  const isLiking = reactionTransition === ReactionTransitionState.LIKING;
  const isDisliking = reactionTransition === ReactionTransitionState.DISLIKING;
  const hasLiked = reactionType === ReactionType.LIKE;
  const hasDisliked = reactionType === ReactionType.DISLIKE;

  const arrowUpClasses = !isReactable
    ? "cursor-not-allowed"
    : {
        "yl:text-primary yl:cursor-default": hasLiked,
        "yl:cursor-pointer hover:text-primary": !hasLiked,
        "yl:p-2 yl:box-content": isMobile
      };

  const arrowDownClasses = !isReactable
    ? "cursor-not-allowed"
    : {
        "yl:text-error yl:cursor-not-allowed": hasDisliked,
        "yl:cursor-pointer hover:text-error": !hasDisliked,
        "yl:p-2 yl:box-content": isMobile
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
        <div className='yl:text-text yl:my-0 yl:flex yl:items-center yl:justify-center yl:gap-2'>
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
        <span className='yl:text-text yl:select-none'>{reactionsCount}</span>
        <div className='yl:text-text yl:flex yl:items-center yl:justify-center yl:gap-2'>
          {isDisliking ? (
            <Icon
              iconName='IconSpinner'
              className='yl:w-5'
              data-testid='dislike-spinner'
            />
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

export { Reactions };
