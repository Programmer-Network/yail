import { useCallback, useMemo, useState } from "react";

import { ICardTag } from "../types";

interface IUseTagVisibilityParams {
  tags?: ICardTag[];
  maxVisibleTags: number;
  onAnalyticEvent?: (event: string, data: any) => void;
  trackingId?: string;
}

export const useTagVisibility = ({
  tags,
  maxVisibleTags,
  onAnalyticEvent,
  trackingId
}: IUseTagVisibilityParams) => {
  const [showAllTags, setShowAllTags] = useState(false);

  const visibleTags = useMemo(() => {
    if (!tags) return [];
    return showAllTags ? tags : tags.slice(0, maxVisibleTags);
  }, [tags, showAllTags, maxVisibleTags]);

  const remainingTagsCount = useMemo(() => {
    return tags && tags.length > maxVisibleTags
      ? tags.length - maxVisibleTags
      : 0;
  }, [tags, maxVisibleTags]);

  const toggleTagsVisibility = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setShowAllTags(!showAllTags);
      onAnalyticEvent?.("tags_toggle", {
        trackingId,
        expanded: !showAllTags
      });
    },
    [showAllTags, onAnalyticEvent, trackingId]
  );

  return {
    visibleTags,
    remainingTagsCount,
    showAllTags,
    toggleTagsVisibility
  };
};
