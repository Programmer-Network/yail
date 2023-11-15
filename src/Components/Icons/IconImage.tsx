import { SVGProps } from "react";
import { FC } from "react";

import { IIconProps } from "./types";

export const IconImage: FC<IIconProps> = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path
        fill='currentColor'
        d='M12 17.5q1.875 0 3.188-1.313T16.5 13q0-1.875-1.313-3.188T12 8.5q-1.875 0-3.188 1.313T7.5 13q0 1.875 1.313 3.188T12 17.5Zm0-2q-1.05 0-1.775-.725T9.5 13q0-1.05.725-1.775T12 10.5q1.05 0 1.775.725T14.5 13q0 1.05-.725 1.775T12 15.5ZM2 21V5h5.15L9 3h6l1.85 2H22v16H2Zm2-2h16V7h-4.05l-1.825-2h-4.25L8.05 7H4v12Zm8-6Z'
      ></path>
    </svg>
  );
};
