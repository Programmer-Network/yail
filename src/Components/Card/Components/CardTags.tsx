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
    <div className='flex items-center gap-2 flex-wrap mt-4'>
      {visibleTags.map((tag, index) => (
        <NavLink
          key={`${tag.name}-${index}`}
          to={tag.url}
          onClick={onTagClick ? onTagClick(tag) : undefined}
          className='hover:text-stroke text-primary hover:underline hover:opacity-80 active:opacity-50 transition-all'
        >
          #{tag.name}
        </NavLink>
      ))}
      {remainingTagsCount > 0 && (
        <button
          onClick={onToggleTagsVisibility}
          className='text-primary text-xs border border-primary px-2 py-1 rounded bg-background hover:bg-primary hover:text-background transition-all duration-200'
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
