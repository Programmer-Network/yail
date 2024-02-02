import classNames from "classnames";
import { FC } from "react";

import { Anchor, H3, Paragraph } from "Components/Typography";

import { ICard } from "./types";

const Card: FC<ICard> = ({
  title,
  description,
  date,
  author,
  tags,
  className
}) => {
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

      <H3 className='!mb-0'>{title}</H3>
      <Paragraph>{description}</Paragraph>
      {tags?.length && (
        <div className='mt-2 flex items-center gap-2'>
          {tags.map((tag, index) => (
            <Anchor key={index} href={`/tags/${tag}`}>
              {tag}
            </Anchor>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
