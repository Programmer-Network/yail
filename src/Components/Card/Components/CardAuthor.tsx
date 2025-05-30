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
    <div className='yl:flex yl:items-center yl:mb-4'>
      <div className='yl:flex yl:flex-1 yl:justify-between yl:gap-2'>
        <div className='yl:flex yl:flex-col yl:md:flex-row yl:md:items-center yl:md:gap-2'>
          {author && (
            <>
              {author.url ? (
                <NavLink
                  to={author.url}
                  onClick={onAuthorClick}
                  className='yl:flex yl:items-center yl:gap-2 yl:text-primary yl:hover:text-primary yl:hover:underline yl:transition-colors'
                >
                  {author.avatarUrl && (
                    <Avatar src={author.avatarUrl} size={24} />
                  )}
                  {author.name}
                </NavLink>
              ) : (
                <span className='yl:flex yl:items-center yl:gap-2 yl:text-muted'>
                  {author.avatarUrl && (
                    <Avatar src={author.avatarUrl} size={24} />
                  )}
                  {author.name}
                </span>
              )}
            </>
          )}

          {author && date && <span className='yl:text-muted'>|</span>}

          {date && <time className='yl:text-muted'>{date}</time>}
        </div>
      </div>
    </div>
  );
};

export default CardAuthor;
