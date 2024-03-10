export enum ShareType {
  COPIED_TO_CLIPBOARD = "COPIED_TO_CLIPBOARD",
  SHARED = "SHARED"
}

export enum ReactionType {
  NONE = "NONE",
  LIKE = "LIKE",
  DISLIKE = "DISLIKE"
}

export enum ReactionTransitionState {
  IDLE = "IDLE",
  LIKING = "LIKING",
  DISLIKING = "DISLIKING"
}

export interface IReactionsProps {
  className?: string;
  onReaction: (reactionType: ReactionType) => void;
  reactionsCount: number;
  reactionType: ReactionType;
  reactionTransition: ReactionTransitionState;
  isNotReactableText?: string;
  isReactable?: boolean;
}
