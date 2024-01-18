import { FC } from "react";

import { IIconProps } from "./types";

const IconDrag: FC<IIconProps> = props => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M14 18a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-6 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m6-6a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-6 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m6-6a1 1 0 1 0 2 0a1 1 0 0 0-2 0M8 6a1 1 0 1 0 2 0a1 1 0 0 0-2 0'
      ></path>
    </svg>
  );
};

export default IconDrag;
