import classNames from "classnames";
import { FC } from "react";
import { NavLink } from "react-router-dom";

import { H3, Paragraph } from "Components/Typography";

import { ICard } from "./types";

const Card: FC<ICard> = ({ data, className }) => {
  const { title, description, author, date, tags, titleUrl } = data;

  return (
    <div className={classNames("group mb-4", className)}>
      <div className='flex items-center text-primary-text-color'>
        <div className='my-1 flex flex-1 justify-between gap-2'>
          <div className='flex items-center gap-2'>
            {author && (
              <span className='flex items-center gap-2 text-primary hover:text-primary'>
                {author}
              </span>
            )}
            {date && <time dateTime={date}>{date}</time>}
          </div>
        </div>
      </div>

      <NavLink to={titleUrl}>
        <H3 className='!mb-0'>{title}</H3>
      </NavLink>
      <Paragraph>{description}</Paragraph>
      {tags?.length && (
        <div className='mt-2 flex items-center gap-2'>
          {tags.map((tag, index) => (
            <NavLink
              key={index}
              to={tag.tagUrl}
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
