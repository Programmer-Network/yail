import { FC } from "react";

import { IIconProps } from "./types";

const IconExpandMore: FC<IIconProps> = props => (
  <svg
    viewBox='0 0 24 24'
    focusable='false'
    role='img'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path fill='none' d='M24 24H0V0h24v24z' opacity={0.87} />
    <path d='M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z' />
  </svg>
);
export default IconExpandMore;
