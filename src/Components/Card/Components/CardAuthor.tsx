import { FC } from "react";
import { NavLinkProps } from "react-router-dom";

import Avatar from "Components/Avatar";

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
    <div className='yl:flex yl:items-center yl:mb-4 yl:gap-2 yl:flex-wrap'>
      {author && (
        <>
          {author.url ? (
            <NavLink
              to={author.url}
              onClick={onAuthorClick}
              className='yl:flex yl:items-center yl:gap-2 yl:text-primary yl:hover:text-primary yl:hover:underline yl:transition-colors'
            >
              <Avatar src={author.avatarUrl} size={24} />
              <span className='yl:text-sm yl:md:text-base'>{author.name}</span>
            </NavLink>
          ) : (
            <span className='yl:flex yl:items-center yl:gap-2 yl:text-muted'>
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

export default CardAuthor;
