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
    <div className='yl:mb-2'>
      {URLUtils.isExternalLink(titleUrl) ? (
        <a
          href={titleUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='yl:hover:text-primary yl:text-inherit yl:no-underline yl:transition-colors'
        >
          <h3
            id={`card-title-${cardId}`}
            className={classNames(
              "yl:text-text yl:m-0 yl:flex yl:items-center yl:justify-start yl:gap-2 yl:text-xl yl:font-semibold yl:md:text-lg",
              getLineClampClass(maxTitleLines)
            )}
          >
            {title}
          </h3>
        </a>
      ) : (
        <NavLink to={titleUrl} className='yl:text-inherit yl:no-underline'>
          <h3
            id={`card-title-${cardId}`}
            className={classNames(
              "group-yl:hover:text-primary yl:text-text yl:m-0 yl:text-xl yl:font-semibold yl:transition-colors yl:md:text-lg",
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
