import { SVGProps } from "react";
import { FC } from "react";

import { IIconProps } from "./types";

const IconComment: FC<IIconProps> = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      data-testid='icon-comment'
      {...props}
    >
      <path d='M12 3c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V3zm2.5 1a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6z' />
      <path d='M5.25 3H11v1.5H5.25c-.97 0-1.75.78-1.75 1.75v8.5c0 .97.78 1.75 1.75 1.75H7.5v3.75l5.01-3.75h6.24c.97 0 1.75-.78 1.75-1.75V12h.5a3 3 0 0 0 1-.17v2.92c0 1.8-1.46 3.25-3.25 3.25h-5.74L8 21.75a1.25 1.25 0 0 1-2-1V18h-.75A3.25 3.25 0 0 1 2 14.75v-8.5C2 4.45 3.46 3 5.25 3z' />
    </svg>
  );
};

export default IconComment;
