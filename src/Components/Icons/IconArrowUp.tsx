import { SVGProps } from "react";
import { FC } from "react";

import { IIconProps } from "./types";

const IconArrowUp: FC<IIconProps> = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      data-testid='icon-arrow-up'
      {...props}
    >
      <path fill='currentColor' d='m7 14l5-5l5 5z'></path>
    </svg>
  );
};

export default IconArrowUp;
