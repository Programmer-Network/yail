import React from "react";

import Avatar from "Components/Avatar";
import { Description, Title } from "Components/Typography";

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
      <div className='flex flex-col items-center gap-4 text-sm md:flex-row'>
        <div className='hidden md:block'>
          <Avatar src={avatar} size={75} />
        </div>
        <div>
          <Title>{name}</Title>
          <Description className="!text-base">{about}</Description>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
