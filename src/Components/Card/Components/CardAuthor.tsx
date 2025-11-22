import { FC } from "react";
import { NavLinkProps } from "react-router-dom";

import { Avatar } from "../../Avatar";
import { IAuthorProps } from "../types";

interface ICardAuthor {
  author?: IAuthorProps;
  date?: string;
  onAuthorClick?: (e: React.MouseEvent) => void;
  NavLink: React.ForwardRefExoticComponent<
    NavLinkProps & React.RefAttributes<HTMLAnchorElement>
  >;
}

const CardAuthor: FC<ICardAuthor> = ({
  author,
  date,
  onAuthorClick,
  NavLink
}) => {
  if (!author && !date) return null;

  return (
    <div className='yl:mb-4 yl:flex yl:flex-wrap yl:items-center yl:gap-2'>
      {author && (
        <>
          {author.url ? (
            <NavLink
              to={author.url}
              onClick={onAuthorClick}
              className='yl:text-primary yl:hover:text-primary yl:flex yl:items-center yl:gap-2 yl:transition-colors yl:hover:underline'
            >
              <Avatar src={author.avatarUrl} size={24} />
              <span className='yl:text-sm yl:md:text-base'>{author.name}</span>
            </NavLink>
          ) : (
            <span className='yl:text-muted yl:flex yl:items-center yl:gap-2'>
              <Avatar src={author.avatarUrl} size={24} />
              <span className='yl:text-sm yl:md:text-base'>{author.name}</span>
            </span>
          )}
        </>
      )}

      {author && date && (
        <span className='yl:text-muted yl:text-xs yl:md:text-sm'>•</span>
      )}

      {date && (
        <time className='yl:text-muted yl:text-xs yl:md:text-sm'>{date}</time>
      )}
    </div>
  );
};

export { CardAuthor };
