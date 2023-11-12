export enum ShareType {
  COPIED_TO_CLIPBOARD = "COPIED_TO_CLIPBOARD",
  SHARED = "SHARED"
}

export interface IReactionsProps {
  hasLiked: boolean;
  hasDisliked: boolean;
  commentCount: number;
  likesCount: number;
  dislikesCount: number;
  onLike: () => void;
  onShared?: (type: ShareType) => void;
  onDislike: () => void;
  isLiking: boolean;
  isDisliking: boolean;
  shareUrl?: string;
}
