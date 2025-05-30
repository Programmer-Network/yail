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

  return (
    <div className='yl:flex yl:items-center yl:gap-2 yl:flex-wrap yl:mt-4'>
      {visibleTags.map((tag, index) => (
        <NavLink
          key={`${tag.name}-${index}`}
          to={tag.url}
          onClick={onTagClick ? onTagClick(tag) : undefined}
          className='yl:hover:text-stroke yl:text-primary yl:hover:underline yl:hover:opacity-80 yl:active:opacity-50 yl:transition-all'
        >
          #{tag.name}
        </NavLink>
      ))}
      {remainingTagsCount > 0 && (
        <button
          onClick={onToggleTagsVisibility}
          className='yl:text-primary yl:text-xs yl:border yl:border-primary yl:px-2 yl:py-1 yl:rounded yl:bg-background yl:hover:bg-primary yl:hover:text-background yl:transition-all yl:duration-200'
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
