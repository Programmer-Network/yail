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
    <div className='mb-4 flex flex-wrap items-center gap-2'>
      {author && (
        <>
          {author.url ? (
            <NavLink
              to={author.url}
              onClick={onAuthorClick}
              className='text-primary hover:text-primary flex items-center gap-2 transition-colors hover:underline'
            >
              <Avatar src={author.avatarUrl} size={24} />
              <span className='text-sm md:text-base'>{author.name}</span>
            </NavLink>
          ) : (
            <span className='text-muted flex items-center gap-2'>
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

export { CardAuthor };
