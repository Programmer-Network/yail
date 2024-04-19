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
        "yl-border-2 yl-border-primary-text-color/20 yl-p-6 yl-rounded-lg",
        className
      )}
      onClick={() => (onClick ? onClick({ name, avatar, about }) : undefined)}
    >
      <div className='yl-flex yl-flex-col yl-items-center yl-gap-4 md:yl-flex-row'>
        <div className='yl-hidden md:yl-block'>
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
