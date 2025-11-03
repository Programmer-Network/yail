import classNames from "classnames";
import { FC } from "react";
import { NavLinkProps } from "react-router-dom";

import { URLUtils } from "../../../Utils/URL";
import { getLineClampClass } from "../utils";

interface ICardHeader {
  cardId: string;
  title: string;
  titleUrl: string;
  maxTitleLines: number;
  NavLink: React.ForwardRefExoticComponent<
    NavLinkProps & React.RefAttributes<HTMLAnchorElement>
  >;
}

const CardHeader: FC<ICardHeader> = ({
  cardId,
  title,
  titleUrl,
  maxTitleLines,
  NavLink
}) => {
  return (
    <div className='mb-2'>
      {URLUtils.isExternalLink(titleUrl) ? (
        <a
          href={titleUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-primary text-inherit no-underline transition-colors'
        >
          <h3
            id={`card-title-${cardId}`}
            className={classNames(
              "text-text m-0 flex items-center justify-start gap-2 text-xl font-semibold md:text-lg",
              getLineClampClass(maxTitleLines)
            )}
          >
            {title}
            <svg
              className='h-4 w-4 opacity-70'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
              <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
            </svg>
          </h3>
        </a>
      ) : (
        <NavLink to={titleUrl} className='text-inherit no-underline'>
          <h3
            id={`card-title-${cardId}`}
            className={classNames(
              "group-hover:text-primary text-text m-0 text-xl font-semibold transition-colors md:text-lg",
              getLineClampClass(maxTitleLines)
            )}
          >
            {title}
          </h3>
        </NavLink>
      )}
    </div>
  );
};

export default CardHeader;
