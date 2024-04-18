import classNames from "classnames";
import React from "react";

import Avatar from "Components/Avatar";
import { H2, Paragraph } from "Components/Typography";

import { IAuthorCardProps } from "./types";

const AuthorCard: React.FC<IAuthorCardProps> = ({
  name,
  avatar,
  about,
  className,
  onClick
}) => {
  return (
    <div
      className={classNames(
        "border-2 border-primary-text-color/20 p-6 rounded-lg",
        className
      )}
      onClick={() => (onClick ? onClick({ name, avatar, about }) : undefined)}
    >
      <div className='flex flex-col items-center gap-4 md:flex-row'>
        <div className='hidden md:block'>
          <Avatar src={avatar} size={75} />
        </div>
        <div>
          <H2 margin='none'>{name}</H2>
          <Paragraph margin='none'>{about}</Paragraph>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
