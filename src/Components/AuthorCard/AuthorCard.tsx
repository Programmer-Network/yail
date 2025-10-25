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
      className={classNames("border-border rounded-lg border-2 p-6", className)}
      onClick={() => (onClick ? onClick({ name, avatar, about }) : undefined)}
    >
      <div className='flex flex-col items-center gap-4 md:flex-row'>
        <div className='hidden md:block'>
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
