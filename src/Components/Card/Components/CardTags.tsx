import { FC } from "react";
import { NavLinkProps } from "react-router-dom";

import { ICardTag } from "../types";

interface ICardTags {
  visibleTags: ICardTag[];
  remainingTagsCount: number;
  showAllTags: boolean;
  onTagClick?: (tag: ICardTag) => (e: React.MouseEvent) => void;
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

  const handleTagClick = (tag: ICardTag) => (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!onTagClick) {
      return;
    }

    onTagClick(tag)(e);
  };

  return (
    <div className='yl:mt-4 yl:flex yl:flex-wrap yl:items-center yl:gap-2'>
      {visibleTags.map((tag, index) => (
        <NavLink
          key={`${tag.name}-${index}`}
          to={tag.url}
          onClick={handleTagClick(tag)}
          className='yl:hover:text-stroke yl:text-primary yl:transition-all yl:hover:underline yl:hover:opacity-80 yl:active:opacity-50'
        >
          #{tag.name}
        </NavLink>
      ))}
      {remainingTagsCount > 0 && (
        <button
          onClick={onToggleTagsVisibility}
          className='yl:text-primary yl:border-primary yl:bg-background yl:hover:bg-primary yl:hover:text-background yl:px-2 yl:py-1 yl:text-xs yl:transition-all yl:duration-200 yl:border rounded'
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

export { CardTags };
