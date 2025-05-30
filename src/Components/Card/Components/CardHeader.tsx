import classNames from "classnames";
import { FC } from "react";
import { NavLinkProps } from "react-router-dom";

import URLUtils from "Utils/URL";

import { getLineClampClass } from "../utils";

interface ICardHeader {
  cardId: string;
  title: string;
  titleUrl: string;
  maxTitleLines: number;
  showBookmark?: boolean;
  showShare?: boolean;
  onBookmark?: (e: React.MouseEvent) => void;
  onShare?: (e: React.MouseEvent) => void;
  NavLink: React.ForwardRefExoticComponent<
    NavLinkProps & React.RefAttributes<HTMLAnchorElement>
  >;
}

const CardHeader: FC<ICardHeader> = ({
  cardId,
  title,
  titleUrl,
  maxTitleLines,
  showBookmark,
  showShare,
  onBookmark,
  onShare,
  NavLink
}) => {
  return (
    <div className='yl:flex yl:justify-between yl:items-start yl:mb-2'>
      <div className='yl:flex-1'>
        {URLUtils.isExternalLink(titleUrl) ? (
          <a
            href={titleUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='yl:text-inherit yl:no-underline yl:hover:text-primary yl:transition-colors'
          >
            <h3
              id={`card-title-${cardId}`}
              className={classNames(
                "yl:flex yl:items-center yl:justify-start yl:gap-2 yl:text-lg yl:font-semibold yl:m-0 yl:text-text",
                getLineClampClass(maxTitleLines)
              )}
            >
              {title}
              <svg
                className='yl:w-4 yl:h-4 yl:opacity-70'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
                <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
              </svg>
            </h3>
          </a>
        ) : (
          <NavLink to={titleUrl} className='yl:text-inherit yl:no-underline'>
            <h3
              id={`card-title-${cardId}`}
              className={classNames(
                "yl:text-lg yl:font-semibold yl:m-0 yl:group-hover:text-primary yl:transition-colors yl:text-text",
                getLineClampClass(maxTitleLines)
              )}
            >
              {title}
            </h3>
          </NavLink>
        )}
      </div>

      {/* Action buttons */}
      {(showBookmark || showShare) && (
        <div className='yl:flex yl:gap-2 yl:ml-4'>
          {showBookmark && (
            <button
              onClick={onBookmark}
              className='yl:p-1 yl:text-muted yl:hover:text-primary yl:transition-colors yl:rounded'
              aria-label='Bookmark this card'
            >
              <svg
                className='yl:w-5 yl:h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' />
              </svg>
            </button>
          )}
          {showShare && (
            <button
              onClick={onShare}
              className='yl:p-1 yl:text-muted yl:hover:text-primary yl:transition-colors yl:rounded'
              aria-label='Share this card'
            >
              <svg
                className='yl:w-5 yl:h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z' />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CardHeader;
