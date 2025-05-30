import { useCallback } from "react";

import { IAuthorProps, ICardData, ITag } from "../types";

interface IUseCardInteractionsParams {
  onCardClick?: (data: ICardData) => void;
  onAuthorClick?: (author: IAuthorProps) => void;
  onTagClick?: (tag: ITag) => void;
  onImageClick?: () => void;
  onBookmark?: (data: ICardData) => void;
  onShare?: (data: ICardData) => void;
  normalizedData: ICardData;
  author?: IAuthorProps;
}

export const useCardInteractions = ({
  onCardClick,
  onAuthorClick,
  onTagClick,
  onImageClick,
  onBookmark,
  onShare,
  normalizedData,
  author
}: IUseCardInteractionsParams) => {
  const handleCardClick = useCallback(
    (e: React.MouseEvent) => {
      if (onCardClick) {
        e.preventDefault();
        onCardClick(normalizedData);
      }
    },
    [onCardClick, normalizedData]
  );

  const handleAuthorClick = useCallback(
    (e: React.MouseEvent) => {
      if (onAuthorClick && author) {
        e.preventDefault();
        e.stopPropagation();
        onAuthorClick(author);
      }
    },
    [onAuthorClick, author]
  );

  const handleTagClick = useCallback(
    (tag: ITag) => (e: React.MouseEvent) => {
      if (onTagClick) {
        e.preventDefault();
        e.stopPropagation();
        onTagClick(tag);
      }
    },
    [onTagClick]
  );

  const handleImageClick = useCallback(
    (e: React.MouseEvent) => {
      if (onImageClick) {
        e.preventDefault();
        e.stopPropagation();
        onImageClick();
      }
    },
    [onImageClick]
  );

  const handleBookmark = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      onBookmark?.(normalizedData);
    },
    [onBookmark, normalizedData]
  );

  const handleShare = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      onShare?.(normalizedData);
    },
    [onShare, normalizedData]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if ((e.key === "Enter" || e.key === " ") && onCardClick) {
        e.preventDefault();
        onCardClick(normalizedData);
      }
    },
    [onCardClick, normalizedData]
  );

  return {
    handleCardClick,
    handleAuthorClick,
    handleTagClick,
    handleImageClick,
    handleBookmark,
    handleShare,
    handleKeyDown
  };
};
