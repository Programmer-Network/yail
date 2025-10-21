import { FC } from "react";
import { NavLinkProps } from "react-router-dom";

import Avatar from "../../Avatar";
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
    <div className='flex items-center mb-4 gap-2 flex-wrap'>
      {author && (
        <>
          {author.url ? (
            <NavLink
              to={author.url}
              onClick={onAuthorClick}
              className='flex items-center gap-2 text-primary hover:text-primary hover:underline transition-colors'
            >
              <Avatar src={author.avatarUrl} size={24} />
              <span className='text-sm md:text-base'>{author.name}</span>
            </NavLink>
          ) : (
            <span className='flex items-center gap-2 text-muted'>
              <Avatar src={author.avatarUrl} size={24} />
              <span className='text-sm md:text-base'>{author.name}</span>
            </span>
          )}
        </>
      )}

      {author && date && (
        <span className='text-muted text-xs md:text-sm'>•</span>
      )}

      {date && <time className='text-muted text-xs md:text-sm'>{date}</time>}
    </div>
  );
};

export default CardAuthor;
