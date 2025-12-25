import classNames from "classnames";
import React from "react";

import { Avatar } from "../Avatar";
import { H3, Paragraph } from "../Typography";
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
        "yl:border-border yl:rounded-lg yl:border yl:p-6",
        className
      )}
      onClick={() => (onClick ? onClick({ name, avatar, about }) : undefined)}
    >
      <div className='yl:flex yl:flex-col yl:items-center yl:gap-4 yl:md:flex-row'>
        <div className='yl:hidden yl:md:block'>
          <Avatar src={avatar} size={75} />
        </div>
        <div>
          <H3>{name}</H3>
          <Paragraph>{about}</Paragraph>
        </div>
      </div>
    </div>
  );
};

export { AuthorCard };
