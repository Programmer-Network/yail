import React from "react";

import Avatar from "Components/Avatar";
import { H3, Paragraph } from "Components/Typography";

import { IAuthorCardProps } from "./types";

const AuthorCard: React.FC<IAuthorCardProps> = ({
  name,
  avatar,
  about,
  onClick
}) => {
  return (
    <div
      className='border border-primary-text-color p-6'
      onClick={() => (onClick ? onClick({ name, avatar, about }) : undefined)}
    >
      <div className='flex flex-col items-center gap-4 md:flex-row'>
        <div className='hidden md:block'>
          <Avatar src={avatar} size={75} />
        </div>
        <div>
          <H3 className='!mb-0'>{name}</H3>
          <Paragraph className='!text-base'>{about}</Paragraph>
        </div>
      </div>
    </div>
  );
};

export * from "./types";
export default AuthorCard;
