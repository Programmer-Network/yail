import type { SVGProps } from "react";

const SvgArrowDownSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M8 1v11.293l3.146-3.147.708.708L7.5 14.207 3.146 9.854l.708-.708L7 12.293V1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgArrowDownSolid;
