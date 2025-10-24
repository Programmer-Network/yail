import classNames from "classnames";
import { FC } from "react";

import { useMobile } from "../../Hooks/useMediaQuery";
import Icon from "../Icon";
import Tooltip from "../Tooltip";
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
        "text-primary cursor-default": hasLiked,
        "cursor-pointer hover:text-primary": !hasLiked,
        "p-2 box-content": isMobile
      };

  const arrowDownClasses = !isReactable
    ? "cursor-not-allowed"
    : {
        "text-error cursor-not-allowed": hasDisliked,
        "cursor-pointer hover:text-error": !hasDisliked,
        "p-2 box-content": isMobile
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
        <div className='text-text my-0 flex items-center justify-center gap-2'>
          {isLiking ? (
            <Icon
              iconName='IconSpinner'
              className='w-5'
              data-testid='like-spinner'
            />
          ) : (
            <>
              <Icon
                iconName='IconArrowUp'
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
        <span className='text-text select-none'>{reactionsCount}</span>
        <div className='text-text flex items-center justify-center gap-2'>
          {isDisliking ? (
            <Icon
              iconName='IconSpinner'
              className='w-5'
              data-testid='dislike-spinner'
            />
          ) : (
            <>
              <Icon
                iconName='IconArrowDown'
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

export default Reactions;
