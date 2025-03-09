import type { SVGProps } from "react";

const SvgTopRightSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M8 1h6v6h-1V2.707L1.854 13.854l-.708-.708L12.293 2H8z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgTopRightSolid;
