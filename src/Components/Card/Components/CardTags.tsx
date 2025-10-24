import { FC } from "react";
import { NavLinkProps } from "react-router-dom";

import { ITag } from "../types";

interface ICardTags {
  visibleTags: ITag[];
  remainingTagsCount: number;
  showAllTags: boolean;
  onTagClick?: (tag: ITag) => (e: React.MouseEvent) => void;
  onToggleTagsVisibility: (e: React.MouseEvent) => void;
  NavLink: React.ForwardRefExoticComponent<
    NavLinkProps & React.RefAttributes<HTMLAnchorElement>
  >;
}

const CardTags: FC<ICardTags> = ({
  visibleTags,
  remainingTagsCount,
  showAllTags,
  onTagClick,
  onToggleTagsVisibility,
  NavLink
}) => {
  if (!visibleTags.length) return null;

  const handleTagClick = (tag: ITag) => (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!onTagClick) {
      return;
    }

    onTagClick(tag)(e);
  };

  return (
    <div className='mt-4 flex flex-wrap items-center gap-2'>
      {visibleTags.map((tag, index) => (
        <NavLink
          key={`${tag.name}-${index}`}
          to={tag.url}
          onClick={handleTagClick(tag)}
          className='hover:text-stroke text-primary transition-all hover:underline hover:opacity-80 active:opacity-50'
        >
          #{tag.name}
        </NavLink>
      ))}
      {remainingTagsCount > 0 && (
        <button
          onClick={onToggleTagsVisibility}
          className='text-primary border-primary bg-background hover:bg-primary hover:text-background rounded border px-2 py-1 text-xs transition-all duration-200'
          aria-label={
            showAllTags
              ? "Show fewer tags"
              : `Show ${remainingTagsCount} more tags`
          }
        >
          {showAllTags ? "Show less" : `+${remainingTagsCount} more`}
        </button>
      )}
    </div>
  );
};

export default CardTags;
