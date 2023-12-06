export enum ShareType {
  COPIED_TO_CLIPBOARD = "COPIED_TO_CLIPBOARD",
  SHARED = "SHARED"
}

export interface IReactionsProps {
  hasLiked: boolean;
  hasDisliked: boolean;
  likesCount: number;
  dislikesCount: number;
  onLike: () => void;
  onDislike: () => void;
  isLiking: boolean;
  isDisliking: boolean;
}
