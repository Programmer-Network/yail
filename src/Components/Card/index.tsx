import classNames from "classnames";
import { FC } from "react";

import { H3, Paragraph } from "Components/Typography";

import { ICard } from "./types";

const Card: FC<ICard> = ({ data, className, NavLink }) => {
  const { title, description, author, date, tags, titleUrl, authorUrl } = data;

  return (
    <div className={classNames("group mb-4", className)}>
      <div className='flex items-center text-primary-text-color'>
        <div className='my-1 flex flex-1 justify-between gap-2'>
          <div className='flex items-center gap-2'>
            {author && (
              <>
                {authorUrl ? (
                  <NavLink to={authorUrl}>
                    <span className='flex items-center gap-2 text-primary hover:text-primary'>
                      {author}
                    </span>
                  </NavLink>
                ) : (
                  <span className='flex items-center gap-2 text-primary hover:text-primary'>
                    {author}
                  </span>
                )}
              </>
            )}
            {date && <time dateTime={date}>{date}</time>}
          </div>
        </div>
      </div>

      <NavLink to={titleUrl}>
        <H3 className='!mb-0'>{title}</H3>
      </NavLink>
      <Paragraph>{description}</Paragraph>
      {tags?.length && tags.length > 0 && (
        <div className='mt-2 flex items-center gap-2'>
          {tags.map((tag, index) => (
            <NavLink
              key={index}
              to={tag.url}
              className='hover:text-stroke text-primary hover:underline hover:opacity-80 active:opacity-50'
            >
              {tag.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
