import classNames from "classnames";
import { FC } from "react";

import { Anchor, H3, Paragraph } from "Components/Typography";

import URLUtils from "Utils/URL";

import { ICard } from "./types";

const Card: FC<ICard> = ({ data, className, NavLink }) => {
  const { title, description, author, date, tags, titleUrl, authorUrl, image } =
    data;

  return (
    <div
      className={classNames(
        "yl:flex yl:flex-col yl:justify-between yl:border yl:border-border/30 yl:rounded-lg yl:overflow-hidden",
        className
      )}
    >
      {image && (
        <div className='yl:w-full yl:h-48 yl:relative'>
          <img
            src={image}
            alt={title}
            className='yl:w-full yl:h-full yl:object-cover'
          />
        </div>
      )}
      <div className='yl:p-6'>
        <div className='yl:flex yl:items-center'>
          <div className='yl:flex yl:flex-1 yl:justify-between yl:gap-2 yl:md:my-1'>
            <div className='yl:flex yl:flex-col yl:md:flex-row yl:md:items-center yl:md:gap-2'>
              {author && (
                <>
                  {authorUrl ? (
                    <NavLink
                      to={authorUrl}
                      className='yl:flex yl:items-center yl:gap-2 yl:text-primary yl:cursor-pointer'
                    >
                      {author}
                    </NavLink>
                  ) : (
                    <span className='yl:flex yl:items-center yl:gap-2 yl:text-primary yl:hover:text-primary'>
                      {author}
                    </span>
                  )}
                </>
              )}

              {date && (
                <time className='yl:text-secondary' dateTime={date}>
                  {date}
                </time>
              )}
            </div>
          </div>
        </div>
        {URLUtils.isExternalLink(titleUrl) ? (
          <Anchor href={titleUrl} target='_blank'>
            <H3 className='yl:flex yl:items-center yl:justify-start yl:gap-2'>
              {title}
            </H3>
          </Anchor>
        ) : (
          <NavLink to={titleUrl}>
            <H3>{title}</H3>
          </NavLink>
        )}

        <Paragraph className='yl:py-4'>{description}</Paragraph>
      </div>
      {tags && tags.length > 0 && (
        <div className='yl:mt-2 yl:flex yl:items-center yl:gap-2 yl:px-6! yl:pb-4 yl:flex-wrap'>
          {tags.map((tag, index) => (
            <NavLink
              key={index}
              to={tag.url}
              className='yl:hover:text-stroke yl:text-primary yl:hover:underline yl:hover:opacity-80 yl:active:opacity-50'
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
