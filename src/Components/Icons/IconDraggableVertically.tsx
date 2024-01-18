import { FC } from "react";

import { IIconProps } from "./types";

const IconDraggableVertically: FC<IIconProps> = props => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' {...props}>
      <path
        fill='currentColor'
        d='M2 11h16v2H2zm0-4h16v2H2zm11 8H7l3 3zM7 5h6l-3-3z'
      ></path>
    </svg>
  );
};

export default IconDraggableVertically;
