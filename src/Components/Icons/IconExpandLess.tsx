import { FC } from "react";

import { IIconProps } from "./types";

const IconExpandLess: FC<IIconProps> = props => (
  <svg
    viewBox='0 0 24 24'
    focusable='false'
    role='img'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    data-testid='icon-expand-less'
    {...props}
  >
    <path fill='none' d='M0 0h24v24H0V0z' />
    <path d='m7.71 15.29 3.88-3.88 3.88 3.88a.996.996 0 1 0 1.41-1.41l-4.59-4.59a.996.996 0 0 0-1.41 0l-4.59 4.59a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z' />
  </svg>
);
export default IconExpandLess;
