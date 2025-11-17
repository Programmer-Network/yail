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
