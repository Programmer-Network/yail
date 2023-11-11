import * as React from "react";

import { IIconProps } from "./types";

const IconRemoveCircle: React.FC<IIconProps> = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    {...props}
    data-testid='icon-remove-circle'
  >
    <path
      fill='currentColor'
      d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z'
    />
  </svg>
);
export default IconRemoveCircle;
