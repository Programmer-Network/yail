import { SVGProps } from "react";
import { FC } from "react";

import { IIconProps } from "./types";

const IconArrowDown: FC<IIconProps> = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      data-testid='icon-arrow-down'
      viewBox='7 10 10 5'
      {...props}
    >
      <path fill='currentColor' d='m7 10l5 5l5-5z'></path>
    </svg>
  );
};

export default IconArrowDown;
