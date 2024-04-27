import classNames from "classnames";
import { FC } from "react";

import { Anchor, H3, Paragraph } from "Components/Typography";

import URLUtils from "Utils/URL";

import { ICard } from "./types";

const Card: FC<ICard> = ({ data, className, NavLink }) => {
  const { title, description, author, date, tags, titleUrl, authorUrl } = data;

  return (
    <div
      className={classNames(
        "group yl-flex yl-flex-col yl-justify-between",
        className
      )}
    >
      <div>
        <div className='yl-flex yl-items-center yl-text-primary-text-color'>
          <div className='yl-flex yl-flex-1 yl-justify-between yl-gap-2 md:yl-my-1'>
            <div className='yl-flex yl-flex-col md:yl-flex-row md:yl-items-center md:yl-gap-2'>
              {author && (
                <>
                  {authorUrl ? (
                    <NavLink to={authorUrl}>
                      <span className='yl-flex yl-items-center yl-gap-2 yl-text-primary hover:yl-text-primary'>
                        {author}
                      </span>
                    </NavLink>
                  ) : (
                    <span className='yl-flex yl-items-center yl-gap-2 yl-text-primary hover:yl-text-primary'>
                      {author}
                    </span>
                  )}
                </>
              )}
              {date && <time dateTime={date}>{date}</time>}
            </div>
          </div>
        </div>
        {URLUtils.isExternalLink(titleUrl) ? (
          <Anchor href={titleUrl} target='_blank'>
            <H3 className='yl-flex yl-items-center yl-justify-start yl-gap-2'>
              {title}
            </H3>
          </Anchor>
        ) : (
          <NavLink to={titleUrl}>
            <H3>{title}</H3>
          </NavLink>
        )}

        <Paragraph className='yl-py-4'>{description}</Paragraph>
      </div>
      {tags && tags.length > 0 && (
        <div className='yl-mt-2 yl-flex yl-items-center yl-gap-2'>
          {tags.map((tag, index) => (
            <NavLink
              key={index}
              to={tag.url}
              className='hover:yl-text-stroke yl-text-primary hover:yl-underline hover:yl-opacity-80 active:yl-opacity-50'
            >
              #{tag.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
